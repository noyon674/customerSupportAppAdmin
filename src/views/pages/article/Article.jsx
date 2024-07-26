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
  CFormSelect,
} from '@coreui/react'

function Article() {
  return (
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Frequent</strong>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>Title</CFormLabel>
            <CFormInput
            className='mb-4'
            type='text'
            name = 'name'
            required />
            <CFormLabel>Content</CFormLabel>
            <CFormTextarea
            className='mb-4'
            name='textarea'
            rows={6}
            />
            <CFormLabel>Category</CFormLabel>
            <CFormSelect 
            aria-label="Default select example"
            className='mb-4'
            options={[
              '-----',
              { label: 'One', value: '1' },
              { label: 'Two', value: '2' },
              { label: 'Three', value: '3', disabled: true }
              ]}
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

export default Article