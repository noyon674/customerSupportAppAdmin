import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import React, { useState, useEffect } from 'react'
import { CIcon } from '@coreui/icons-react'
import { cilFilter, cilPen, cilX, cilNoteAdd, flagSet } from '@coreui/icons'
import './faq.scss'
import { faqApi } from "src/utils/api"
import { Link, useNavigate } from 'react-router-dom'
import { failNotify, removeNotify } from "src/utils/notification"

function FAQS() {
  const [faqs, setFaqs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [render, setRender] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await faqApi.getAll()
        if (response) {
          setIsLoading(false)
          setFaqs(response)
          setError(false)
        }
      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }
    fetchData()
  }, [render])

  const sliceText = (text) => {
    if (text.length > 150) {
      return text.slice(0, 150) + '...'
    } else return text
  }

  const navigate = useNavigate()
  const addNewFAQ = (e) => {
    navigate('/faqs/faq')
  }

  const handleRemove = async (id) => {
    try {
      const response = await faqApi.delete(id)
      removeNotify()
      setRender(!render)
    } catch (error) {
      failNotify(error.message)
      console.log(error.message)
    }
  }

  const totalTable = (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="frequentHeader">
            <strong>All FAQs</strong>
            <CIcon icon={cilFilter} />
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Question</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Answer</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {faqs &&
                  faqs.map((item) => {
                    const { id, question, answer } = item
                    return (
                      <CTableRow key={id}>
                        <CTableDataCell>{sliceText(question)}</CTableDataCell>
                        <CTableDataCell>{sliceText(answer)}</CTableDataCell>
                        <CTableDataCell>
                          <Link
                            to={`${id}`}
                            state={{ id, question, answer }}
                            className="btn btn-primary me-2"
                          >
                            <CIcon icon={cilPen} />
                          </Link>
                          <Link
                            onClick={(e) => handleRemove(item.id)}
                            className="btn btn-danger text-white"
                          >
                            <CIcon icon={cilX} />
                          </Link>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <ToastContainer id="two" />
      </CCol>
    </CRow>
  )

  return (
    <div>
      <div className="btnContainer">
        <button className="btn btn-primary" onClick={addNewFAQ}>
          Add <CIcon icon={cilNoteAdd} />
        </button>
      </div>
      {isLoading ? 'Data Fetching...' : totalTable}
    </div>
  )
}

export default FAQS
