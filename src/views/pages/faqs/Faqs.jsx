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
import { cilFilter, cilPen, cilX, cilNoteAdd } from '@coreui/icons'
import './faq.scss'
import { getFaqs } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'

function FAQS() {
  const [ faqs, setFaqs ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState('');

  useEffect(async ()=> {
    const response = await getFaqs();
    try {
      if(response){
        setFaqs(response);
        setIsLoading(false);
        setError('');
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  const sliceText = (text) => {
    if (text.length > 150) {
      return text.slice(0, 150) + '...'
    } else return text
  };

  const navigate = useNavigate();
  const addNewFAQ = (e) => {
    navigate('/faqs/faq')
  }
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
                  <CTableDataCell>{sliceText(item.question)}</CTableDataCell>
                  <CTableDataCell>{sliceText(item.answer)}</CTableDataCell>
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
    <div className="btnContainer">
      <button className="btn btn-primary" onClick={addNewFAQ}>
        Add <CIcon icon={cilNoteAdd} />
      </button>
    </div>
    {isLoading ? 'Data Fetching...' : totalTable}
  </div>
  )
}

export default FAQS
