import { CForm, CCol, CFormInput, CRow, CCard, CCardBody, CCardHeader} from '@coreui/react'


const NovoContrato = () => {
  const now = new Date
  return (
    <CCard>
      <CCardHeader>Insira um novo contrato</CCardHeader>
      <CCardBody>
        <CRow className="g-2">
          <CCol sm={4} >
            <CFormInput label="Nº do processo administrativo"/> 
            <span>/</span>
          </CCol>
          <CCol sm={2}>
            <CFormInput type='number' defaultValue={now.getFullYear()} label="Ano"/>
          </CCol>
          <CCol sm>
          <CFormInput placeholder="State" aria-label="State"/>
          </CCol>
          <CCol sm>
            <CFormInput placeholder="Zip" aria-label="Zip"/>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  
    /*
    <CForm className="row g-3">
      <CCol md={3}>
        <CCol>
          <CFormInput type="text" id="nAdm" label="Nº do Processo Administrativo" /> 
        </CCol>
        <CCol>
          <span className="">/</span>
        </CCol>
      </CCol>
      
      <CCol md={2}>
        <CFormInput type="number" id="anoContract" label="Ano" defaultValue={now.getFullYear()} />
      </CCol>
    </CForm>*/
  )
}

export default NovoContrato