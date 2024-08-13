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
import { getCategories } from "src/utils/api"
import { Link, useNavigate } from 'react-router-dom'
import { deleteCategory } from '../../../utils/api'

function Categories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [render, setRender] = useState(true)


  useEffect(() => {
    setIsLoading(true); // Set loading state before starting fetch

    getCategories()
      .then(response => {
        if (response) {
          setCategories(response);
          setError(null); // Clear any previous errors
        }
      })
      .catch(error => {
        setError(error.message); // Set error message
      })
      .finally(() => {
        setIsLoading(false); // Always reset loading state
      });

  }, [render]);

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
      setRender(!render)
    } catch (error) {
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
        <button className="btn btn-primary" onClick={addCategory}>
          Add <CIcon icon={cilNoteAdd} />
        </button>
      </div>
      {isLoading ? 'Data Fetching...' : totalTable}
    </div>
  )
}

export default Categories
