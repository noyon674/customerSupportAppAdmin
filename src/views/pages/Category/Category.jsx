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
            <CForm>
              <CFormLabel>Name</CFormLabel>
              <CFormInput
              className='mb-4'
              type='text'
              name = 'name'
              required />
              <CFormLabel>Description</CFormLabel>
              <CFormTextarea
              className='mb-4'
              name='textarea'
              rows={6}
              />
              <CFormLabel>Thumbnil</CFormLabel>
              <CFormInput
              className='mb-4'
              type='file'
              />
              <CButton type="button" class="btn btn-success me-4 text-light">Save</CButton>
              <CButton type="button" class="btn btn-primary me-4">Save and add another</CButton>
              <CButton type="button" class="btn btn-secondary">Save and add continue editing</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Category