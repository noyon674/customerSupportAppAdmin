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
import './category.scss'
import { getCategories } from '../../../utils/api'

function Categories() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(async () => {
    const response = await getCategories()
    try {
      if (response) {
        setIsLoading(false)
        setData(response)
        setError(false)
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
            <CCardHeader className="categoryHeader">
              <strong>All Categories</strong>
              <CIcon icon={cilFilter} />
            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    data && data.map(item=>{
                      return <CTableRow>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>{item.description}</CTableDataCell>
                        <CTableDataCell className='img'>
                          <img src={item.thumbnail} alt="" />
                          </CTableDataCell>
                          <CTableDataCell>
                            <button className='btn btn-primary me-2'>
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
      {isLoading ? 'Data Fetching' : totalTable}
    </div>
  )
}

export default Categories
