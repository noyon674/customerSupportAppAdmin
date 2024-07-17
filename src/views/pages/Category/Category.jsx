import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

function Category() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Category</strong>
          </CCardHeader>
          <CCardBody>
            <CFormLabel>Name</CFormLabel>
            <CFormInput
            type='text'
            name = 'name'
            required />
            <CFormLabel>Description</CFormLabel>
            <CFormTextarea
            name='textarea'
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Category