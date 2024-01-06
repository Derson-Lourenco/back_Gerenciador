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
            '',
            { label: 'Proposta Readequada', value: '1' },
            { label: 'Contrato', value: '2' },
            { label: 'Extrato de Contrato', value: '3' },
            { label: 'Aditivo', value: '4' },
            { label: 'Controle de Nota', value: '5' },
            
           ]}
          /> 
        </CCol >
        <CCol sm={4}>
          Modelo de Planilha 
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