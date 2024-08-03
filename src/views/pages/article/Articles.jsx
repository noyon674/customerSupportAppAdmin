import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react';
import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilFilter, cilPen, cilX } from '@coreui/icons';
import './article.scss';

const articlesData = [
  { id: 1, name: 'Noyon', content: 'Noyon', category: 'Noyon' },
  { id: 2, name: 'Noyon', content: 'Noyon', category: 'Noyon' },
  { id: 3, name: 'Noyon', content: 'Noyon', category: 'Noyon' },
];

const fields = [
  { key: 'name', label: 'Name' },
  { key: 'content', label: 'Content' },
  { key: 'category', label: 'Category' },
  { key: 'actions', label: 'Actions', _style: { width: '20%' } }
];

function Articles() {
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="tableHeader">
              <strong>All Articles</strong>
              <CIcon icon={cilFilter} />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={articlesData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  'actions': (item) => (
                    <td>
                      <CButton color="primary" className="me-2">
                        <CIcon icon={cilPen} />
                      </CButton>
                      <CButton color="danger" className="text-white">
                        <CIcon icon={cilX} />
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}

export default Articles;
