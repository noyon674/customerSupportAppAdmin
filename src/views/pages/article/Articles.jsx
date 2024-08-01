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
} from '@coreui/react';
import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilFilter, cilSun, cilX } from '@coreui/icons';
import './article.scss';

function Articles() {
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="tableHeader">
              <strong>All Articles</strong>
              <CIcon icon={cilFilter} />
            </CCardHeader>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className="btn btn-primary me-2">
                        <CIcon icon={cilSun} />
                      </button>
                      <button className="btn btn-danger text-white">
                        <CIcon icon={cilX} />
                      </button>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className="btn btn-primary me-2">
                        <CIcon icon={cilSun} />
                      </button>
                      <button className="btn btn-danger text-white">
                        <CIcon icon={cilX} />
                      </button>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>Noyon</CTableDataCell>
                    <CTableDataCell>
                      <button className="btn btn-primary me-2">
                        <CIcon icon={cilSun} />
                      </button>
                      <button className="btn btn-danger text-white">
                        <CIcon icon={cilX} />
                      </button>
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
