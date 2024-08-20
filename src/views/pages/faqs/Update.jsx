/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
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
import { updateFAQ } from '../../../utils/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { addNotify, failNotify } from '../../../utils/notification';

function Update() {
  const location = useLocation()
  const { id } = location.state
  const [question, setQuestion] = useState(location.state.question)
  const [answer, setAnswer] = useState(location.state.answer)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedInfo = {question, answer}
    console.log(updatedInfo)
    try {
     // const response = await updateFAQ(updatedData)
      if(response){
        resetForm();
        navigate('/faqs')
        addNotify()
      }
    }catch(error){
      failNotify(error.message)
      console.log(error.message)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Update FAQ</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CFormLabel>Question</CFormLabel>
              <CFormInput 
              className="mb-4" 
              type="text" 
              name="question"
              value={question}
              onChange={e=>setQuestion(e.target.value)}
              required />
              <CFormLabel>Answer</CFormLabel>
              <CFormTextarea 
              className="mb-4" 
              name="answer"
              value={answer}
              onChange={e=>setAnswer(e.target.value)}
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

export default Update;
