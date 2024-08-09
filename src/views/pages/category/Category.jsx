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
import { addCategory } from '../../../utils/api';

function Category() {
  const { values, handleChange, resetForm }= useForm({
    name: '',
    description: '',
    thumbnail: ''
  });

  const { name, description, thumbnail } = values;

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await addCategory(values);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
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
              <CFormLabel>Thumbnail</CFormLabel>
              <CFormInput 
              className="mb-4" 
              type="file"
              name='thumbnail'
              value={thumbnail}
              required
              onChange={handleChange} />
              <CButton type="submit" className="btn btn-success me-4 text-light">
                Save
              </CButton>
              <CButton type="button" className="btn btn-primary me-4">
                Save and add another
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Category;
