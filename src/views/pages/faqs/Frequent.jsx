import React from 'react';
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

function Frequent() {
  return (
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Frequent</strong>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Question</CFormLabel>
            <CFormInput
            className='mb-4'
            type='text'
            name = 'name'
            required />
            <CFormLabel>Answer</CFormLabel>
            <CFormTextarea
            className='mb-4'
            name='textarea'
            rows={6}
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

export default Frequent