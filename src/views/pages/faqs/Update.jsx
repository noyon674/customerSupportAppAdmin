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
import { getOneFAQ, updateFAQ } from '../../../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { addNotify, failNotify } from '../../../utils/notification';

function Update() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const respone = await getOneFAQ(id)
        setQuestion(respone.question)
        setAnswer(respone.answer)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {question, answer}
    console.log(updatedData)
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
