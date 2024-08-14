/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useForm } from '../../../utils/useForm';
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
import { addArticle, getCategories } from '../../../utils/api';
import { addNotify, failNotify } from '../../../utils/notification';


function Article() {
  const [categories, setCategories] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: '',
    content: '',
    category: ''
  });

  const { title, content, category } = values;

  useEffect(()=> {
    const fetCategories = async ()=> {
      try {
        const response = await getCategories()
        if(response){
          setCategories(response)
          addNotify()
      }
      } catch (error) {
        failNotify(error.message)
        console.log(error.message)
      }
    }
    fetCategories()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addArticle(values);
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
            <strong>Frequent</strong>
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
