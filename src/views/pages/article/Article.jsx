/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useForm } from "src/utils/useForm";
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
} from '@coreui/react';
import { articleApi, categoryApi } from "src/utils/api";


function Article() {
  const [categories, setCategories] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: '',
    content: '',
    category: ''
  });

  const { title, content, category } = values;

  useEffect(()=> {
    const fetchCategories = async ()=> {
      try {
        const response = await categoryApi.getAll()
        if(response){
          setCategories(response)
      }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchCategories()
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await articleApi.add(values);
      console.log(data)
      if(data){
        resetForm();
      }
    } catch (error) {
      console.log(error.message)
    }
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Article</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CFormLabel>Title</CFormLabel>
              <CFormInput
                className="mb-4"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
              <CFormLabel>Content</CFormLabel>
              <CFormTextarea
                className="mb-4"
                name="content"
                value={content}
                onChange={handleChange}
                required
                rows={6}
              />
              <CFormLabel>Category</CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                className="mb-4"
                name='category'
                value={category}
                onChange={handleChange}
                options={
                  categories.map(category=>(
                    {label: category.name, value: category.id}
                  ))
                }
                required
              />
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

export default Article;
