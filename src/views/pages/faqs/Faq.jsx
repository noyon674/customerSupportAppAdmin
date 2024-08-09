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
import { addFAQ } from '../../../utils/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FAQ() {
  const navigate = useNavigate()

  const {values, handleChange, resetForm } = useForm({
    question: '',
    answer: ''
  });
  const { question, answer } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addFAQ(values)
      if(response){
        resetForm();
        navigate('/faqs')
      }
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Frequently Asked Questions</strong>
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

export default FAQ;
