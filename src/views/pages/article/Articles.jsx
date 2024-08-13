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
import { deleteArticle, getArticles } from '../../../utils/api'
import './article.scss'
import { Link, useNavigate } from 'react-router-dom'

function Articles() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [render, setRender] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getArticles()
        if (response) {
          setIsLoading(false)
          setArticles(response)
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

  const addNewArticle = (e) => {
    navigate('/articles/article')
  }

  const handleRemove = async (id) => {
    try {
      const response = await deleteArticle(id)
      setRender(!render)
    } catch (error) {
      console.log(error.message)
    }
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
                {articles &&
                  articles.map((item) => {
                    return (
                      <CTableRow key={item.id}>
                        <CTableDataCell>{sliceText(item.title)}</CTableDataCell>
                        <CTableDataCell>{item.category}</CTableDataCell>
                        <CTableDataCell>{sliceText(item.content)}</CTableDataCell>
                        <CTableDataCell>
                          <Link className="btn btn-secondary me-2">
                            <CIcon icon={cilPen} />
                          </Link>
                          <Link className="btn btn-danger text-white" onClick={e=>handleRemove(item.id)}>
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
