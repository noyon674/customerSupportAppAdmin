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
  CTableRow
} from '@coreui/react'
import React from 'react'

function Articles() {
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <strong>All Articles</strong>
            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <button className='btn btn-success text-white'>Actions</button>
                  </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className='btn btn-primary me-2'>view</button>
                      <button className='btn btn-danger text-white'>remove</button>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className='btn btn-primary me-2'>view</button>
                      <button className='btn btn-danger text-white'>remove</button>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className='btn btn-primary me-2'>view</button>
                      <button className='btn btn-danger text-white'>remove</button>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Articles