/* eslint-disable react/jsx-key */
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
import React, { useEffect, useState } from 'react'
import { CIcon } from '@coreui/icons-react'
import { cilFilter, cilPen, cilX, cibAddthis, cilNoteAdd } from '@coreui/icons'
import { getArticles } from "src/utils/api"
import './article.scss'
import { Navigate, useNavigate } from 'react-router-dom'

function Articles() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(async()=>{
    const response = await getArticles()

    try {
      if (response) {
        setData(response)
        setIsLoading(false)
        setError(null)
      }
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
    }
  }, [])

  const sliceText = (text) => {
    if (text.length > 150) {
      return text.slice(0, 150) + '...'
    } else return text
  }

  const navigate = useNavigate()

  const addNewArticle = (e) => {
    navigate('/articles/article')
  }

  const totalTable = (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="tableHeader">
            <strong>All FAQs</strong>
            <CIcon icon={cilFilter} />
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Content</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data &&
                  data.map((item) => {
                    return (
                      <CTableRow>
                        <CTableDataCell>{sliceText(item.title)}</CTableDataCell>
                        <CTableDataCell>{item.category}</CTableDataCell>
                        <CTableDataCell>{sliceText(item.content)}</CTableDataCell>
                        <CTableDataCell>
                          <button className="btn btn-secondary me-2">
                            <CIcon icon={cilPen} />
                          </button>
                          <button className="btn btn-danger text-white">
                            <CIcon icon={cilX} />
                          </button>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )

  return (
    <div>
      <div className="btnContainer">
        <button className="btn btn-primary" onClick={addNewArticle}>
          Add <CIcon icon={cilNoteAdd} />
        </button>
      </div>
      {isLoading ? 'Data Fetching...' : totalTable}
    </div>
  )
}

export default Articles
