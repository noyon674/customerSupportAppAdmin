/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addNotify, failNotify } from "src/utils/notification";
import { categoryApi } from '../../../utils/api';

function Category() {
    const { id } = useParams();
    const location = useLocation();
    const [name, setName] = useState(location.state.name)
    const [description, setDescription] = useState(location.state.description)
    const [thumbnail, setThumbnail] = useState(location.state.thumbnail)
    console.log(location)
    const navigete = useNavigate()
//     const { values, handleChange, resetForm, handleFileChange }= useForm({
//     name: '',
//     description: '',
//     thumbnail: null
//   });
//   const { name, description, thumbnail } = values;
  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);

    try {
      const response = await categoryApi.add(formData)
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
            <strong>Update Category</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CFormLabel>Name</CFormLabel>
              <CFormInput
              className="mb-4"
              type="text"
              name="name"
              value={name}
              onChange={e=>setName(e.target.value)}
              required />
              <CFormLabel>Description</CFormLabel>
              <CFormTextarea
              className="mb-4"
              name="description"
              value={description}
              onChange={e=>e.target.value}
              rows={6} />
              <CFormLabel>Thumbnail</CFormLabel>
              <CFormInput
              className="mb-4"
              type="file"
              name='thumbnail'
              onChange={e=>e.target.value} />
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
