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
import React, { useState, useEffect } from 'react'
import { CIcon } from '@coreui/icons-react'
import { cilFilter, cilPen, cilX, cilNoteAdd } from '@coreui/icons'
import './category.scss'
import { getCategories } from 'src/utils/api'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCategory } from '../../../utils/api'
import { ToastContainer, toast } from 'react-toastify'
import { failNotify, removeNotify } from '../../../utils/notification'

function Categories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [render, setRender] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories()
        if (response) {
          setIsLoading(false)
          setCategories(response)
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

  const addCategory = () => {
    navigate('/categories/category')
  }

  const handleRemove = async (id) => {
    try {
      const response = await deleteCategory(id)
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
          <CCardHeader className="categoryHeader">
            <strong>All Categories</strong>
            <CIcon icon={cilFilter} />
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {categories &&
                  categories.map((item) => {
                    return (
                      <CTableRow>
                        <CTableDataCell>{sliceText(item.name)}</CTableDataCell>
                        <CTableDataCell>{sliceText(item.description)}</CTableDataCell>
                        <CTableDataCell className="img">
                          <img src={item.thumbnail} alt="" />
                        </CTableDataCell>
                        <CTableDataCell>
                          <Link className="btn btn-primary me-2">
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
        <ToastContainer />
      </CCol>
    </CRow>
  )
  return (
    <div>
      <div className="btnContainer">
        <button className="btn btn-primary" onClick={addCategory}>
          Add <CIcon icon={cilNoteAdd} />
        </button>
      </div>
      {isLoading ? 'Data Fetching...' : totalTable}
    </div>
  )
}

export default Categories
