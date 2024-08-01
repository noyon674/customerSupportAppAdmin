/* eslint-disable prettier/prettier */
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
} from '@coreui/react';
import { useForm } from '../../../utils/useForm';

function Frequent() {
  const {values, handleChange, resetForm } = useForm({
    question: '',
    answer: ''
  });
  const { question, answer } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('frequent', values);
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Frequent</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CFormLabel>Question</CFormLabel>
              <CFormInput 
              className="mb-4" 
              type="text" 
              name="question"
              value={question}
              onChange={handleChange} 
              required />
              <CFormLabel>Answer</CFormLabel>
              <CFormTextarea 
              className="mb-4" 
              name="answer"
              value={answer}
              onChange={handleChange}
              required 
              rows={6} />
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

export default Frequent
