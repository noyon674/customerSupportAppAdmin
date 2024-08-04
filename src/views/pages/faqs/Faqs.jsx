/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { CIcon } from '@coreui/icons-react'
import { cilFilter, cilPen, cilX } from '@coreui/icons'
import './faq.scss'
import { getFaqs } from '../../../utils/api'

function Frequents() {
  const [ faqs, setFaqs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(async () => {
    const response = await getFaqs();
    try {
      if(response){
        setFaqs(response);
        setIsLoading(false);
        setError(null);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  const totalTable = (
  <CRow>
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader className="frequentHeader">
        <strong>All FAQs</strong>
        <CIcon icon={cilFilter} />
      </CCardHeader>
      <CCardBody>
        <CTable hover>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Question</CTableHeaderCell>
              <CTableHeaderCell scope="col">Answer</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {
              faqs && faqs.map(item => {
                return <CTableRow>
                  <CTableDataCell>{item.question}</CTableDataCell>
                  <CTableDataCell>{item.answer}</CTableDataCell>
                  <CTableDataCell>
                    <button className='btn btn-primary me-e'>
                      <CIcon icon={cilPen}/>
                    </button>
                    <button className='btn btn-danger text-white'>
                      <CIcon icon={cilX}/>
                    </button>
                  </CTableDataCell>
                </CTableRow>
              })
            }
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
  );

  return (
    <div>
      {isLoading ? 'Data Fetching...' : totalTable};
    </div>
  )
}

export default Frequents
