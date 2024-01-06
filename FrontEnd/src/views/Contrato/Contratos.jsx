import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye,
  faTrash,
  faPenToSquare,
  faFilePen,


} from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import {
  CCol,
  CFormInput,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CInputGroup,
  CFormLabel,
} from "@coreui/react";
import '@coreui/icons/css/free.min.css';
import CIcon from '@coreui/icons-react';
import {
  cilLowVision,
  cilDescription,
  cilSpeedometer,
  cilFindInPage,
  cilPlus,
  cilGlobeAlt
} from '@coreui/icons';

const Contratos = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    const fetchContratos = async () => {
      try {
        const response = await fetch('http://localhost:5000/contratos/getContratos');
        if (response.ok) {
          const data = await response.json();
          const contratosFormatados = data.contratos.map(contrato => ({
            ...contrato,
            dataInicio: formatarData(contrato.dataInicio),
            dataFinalizacao: formatarData(contrato.dataFinalizacao),
          }));
          setContratos(contratosFormatados.reverse());
        } else {
          console.error('Erro na solicitação:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    fetchContratos();
  }, []);

  const formatarData = (data) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(data).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      {contratos.length > 0 ? (
        contratos.map((contrato) => (
          <CCard key={contrato.id} className='mb-3 p-2'>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Orgão</th>
                  <th style={{ width: '15%' }}>Modalidade</th>
                  <th style={{ width: '10%' }}>Valor</th>
                  <th style={{ width: '15%' }}>Data Inicio</th>
                  <th style={{ width: '15%' }}>Data Finalização</th>
                  <th style={{ width: '10%' }}>Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{contrato.orgao}</td>
                  <td>{contrato.modalidade}</td>
                  <td>R${contrato.valorContratado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td>{contrato.dataInicio}</td>
                  <td>{contrato.dataFinalizacao}</td>
                  <td>Ativo</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Objeto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{contrato.objetoContrato}</td>
                  <td colSpan="6"> {/* Colspan 6 para ocupar todas as colunas */}
                    <div className='Icon' style={{ float: 'right' }}>
                      <a href="#" className='m-2'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                      <a href="#" className='m-2'>                   
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                      <a href="#" className='m-2'>
                        <FontAwesomeIcon icon={faFilePen} />
                      </a>
                      <a href="#" className='m-2'>
                        <FontAwesomeIcon icon={faEye} />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCard>
        ))
      ) : (
        <div>Não há contratos cadastrados.</div>
      )}
    </div>
  );
};

export default Contratos;
