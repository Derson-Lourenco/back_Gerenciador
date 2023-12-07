import { 
        CForm, 
        CCol, 
        CFormInput,
        CRow, 
        CCard, 
        CCardBody,
        CCardHeader,
        CInputGroup,
        CInputGroupText, 
        CFormLabel,
        CFormSelect 
}from '@coreui/react'


const NovoContrato = () => {
  const now = new Date
  return (
    <CCard>
      <CCardHeader>Campus obrigatórios (*)</CCardHeader>
      <CCardBody>
      <CRow className="g-2 mb-3">
        <CCol sm={4} >
        <CFormLabel htmlFor="basic-url" className='required'>Nº do processo adm/Ano </CFormLabel>
          <CInputGroup>
              <CFormInput/> 
              <CInputGroupText>/</CInputGroupText>
              <CFormInput type='number' defaultValue={now.getFullYear()}/>
          </CInputGroup>
        </CCol>
        <CCol sm={2}>
          <CFormSelect 
            label="Modalidade" 
            options={[
            'Open this select menu',
            { label: 'Pregão Presencial', value: '1' },
            { label: 'Carta Convite', value: '2' },
            { label: 'Dispensa', value: '3', disabled: true }
           ]}
          /> 
        </CCol>
      </CRow>
      <CRow className="g-2 mb-3">
        <CCol sm={4} >
        <CFormLabel htmlFor="basic-url" className='required'>Nº do contrato/Ano</CFormLabel>
          <CInputGroup>
              <CFormInput/> 
              <CInputGroupText>/</CInputGroupText>
              <CFormInput type='number' defaultValue={now.getFullYear()}/>
          </CInputGroup>
        </CCol>
        <CCol sm={2}>
          <CFormSelect 
            label="Tipo"
            options={[
            'Open this select menu',
            { label: 'Serviço', value: '1' },
            { label: 'Produto', value: '2' },
           ]}
          /> 
        </CCol >
        <CCol sm={4}>
          <CFormInput type='text' label='Contratante'/>
        </CCol>
      </CRow>
      <CRow className='g-2 mb-3'>
        <CCol>
          <CFormInput type='text' label='Empresa/Pessoa Contratada'/>
        </CCol>
        <CCol>
          <CFormInput type='text' label='CNPJ/CPF do Contratado'/>
        </CCol>
        <CCol>
          <CFormInput type='text' label='Valor do Contratado'/>
        </CCol>


      </CRow>

      
      </CCardBody>
    </CCard>
  )
}

export default NovoContrato