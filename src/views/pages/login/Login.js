import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ToastContainer, toast } from 'react-toastify'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { loginNotify } from '../../../utils/notification'
import { useForm } from '../../../utils/useForm'

const Login = () => {
  const state = useSelector((state) => state.isAuthenticated)
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState('')

  const { values, resetForm, handleChange } = useForm({
    username: '',
    password: '',
  })
  const { username, password } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (values.username === 'admin') {
        if (values.password === '674') {
          dispatch({ type: 'LOGIN' })
          loginNotify()
        } else setErrorMsg('Incorrect password')
      } else setErrorMsg(`Username doesn't exist.`)
    } catch (error) {
      setErrorMsg(error.message)
    }
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      {errorMsg && <p className="text-danger">{errorMsg}</p>}
                      <CCol xs={6}>
                        <CButton type='submit' color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
