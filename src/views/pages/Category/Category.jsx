/* eslint-disable prettier/prettier */
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
} from '@coreui/react';
import { useForm } from '../../../utils/useForm';

function Category() {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    description: '',
    file: null
  });

  const { name, description, file } = values;

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('category', values)
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Category</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CFormLabel>Name</CFormLabel>
              <CFormInput 
              className="mb-4" 
              type="text" 
              name="name" 
              value={name}
              onChange={handleChange}
              required />
              <CFormLabel>Description</CFormLabel>
              <CFormTextarea 
              className="mb-4" 
              name="description" 
              value={description}
              onChange={handleChange}
              required
              rows={6} />
              <CFormLabel>Thumbnil</CFormLabel>
              <CFormInput 
              className="mb-4" 
              type="file"
              name='file'
              value={file}
              required
              onChange={handleChange} />
              <CButton type="submit" class="btn btn-success me-4 text-light">
                Save
              </CButton>
              <CButton type="button" class="btn btn-primary me-4">
                Save and add another
              </CButton>
              <CButton type="button" class="btn btn-secondary">
                Save and add continue editing
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Category;
