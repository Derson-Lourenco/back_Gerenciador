import { useState } from "react"
import {
  CButton, 
  CModal, 
  CModalBody,
  CModalHeader, 
  CModalTitle, 
  CModalFooter, 
  CRow,
  CCol,
  CFormSelect,
  CFormTextarea,
  CFormInput
} from '@coreui/react' 

import CIcon from '@coreui/icons-react'
import { cilLink } from '@coreui/icons'

const File = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
    <CButton onClick={() => setVisible(!visible)}>
      <CIcon icon={cilLink} />
      Anexar arquivo
    </CButton>
    <CModal
      backdrop="static"
      visible={visible}
      onClose={() => setVisible(false)}
      aria-labelledby="StaticBackdropExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">Anexar arquivo</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className="mb-3">
        <CCol sm={4}>
          <CFormSelect 
            label="Tipo"
            options={[
            'Open this select menu',
            { label: 'Contrato', value: '1' },
            { label: 'Extratp', value: '2' },
           ]}
          /> 
        </CCol >
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CFormTextarea
              id="exampleFormControlTextarea1"
              label="Descrição"
              rows={3}
            ></CFormTextarea>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CCol>
            <CFormInput type="file" id="formFile" label="Arquivo" />
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Fechar
        </CButton>
        <CButton color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>
  </>
  )
}

export default File