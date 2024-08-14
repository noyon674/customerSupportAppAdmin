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
import { useForm } from "src/utils/useForm";
import { addCategory } from "src/utils/api";
import { useNavigate } from 'react-router-dom';
import { addNotify, failNotify } from '../../../utils/notification';

function Category() {
  const navigete = useNavigate()

  const { values, handleChange, resetForm, handleFileChange }= useForm({
    name: '',
    description: '',
    thumbnail: null
  });

  const { name, description, thumbnail } = values;

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);

    try {
      const response = await addCategory(formData)
      if(response){
        resetForm()
        navigete('/categories')
        addNotify()
      }
    } catch (error) {
      failNotify(error.message)
      console.log(error.message)
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
              rows={6} />
              <CFormLabel>Thumbnail</CFormLabel>
              <CFormInput
              className="mb-4"
              type="file"
              name='thumbnail'
              onChange={handleFileChange} />
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
