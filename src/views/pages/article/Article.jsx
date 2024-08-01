/* eslint-disable prettier/prettier */
import React from 'react';
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
import { addArticle } from '../../../utils/api';


function Article() {
  const { values, handleChange, resetForm } = useForm({
    title: '',
    content: '',
    category: ''
  });

  const { title, content, category } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('article', values);
    try {
      const data = await addArticle(values);
      if(data){
        console.log(data);
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
                options={[
                  '-----',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
                required
              />
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

export default Article;
