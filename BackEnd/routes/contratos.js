const express = require('express');
const router = express.Router();
const bd = require('../bd');

// Rota para obter detalhes do contrato
router.get('/getContratos', (req, res) => {
  const query = `
    SELECT *
    FROM contratos
  `;

  bd.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter contratos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(200).json({ success: true, contratos: results });
    }
  });
});

// Rota para salvar um novo contrato
router.post('/salvarContrato', (req, res) => {
  const {
    processoAno,
    numeroContrato,
    modalidade,
    registro,
    orgao,
    cnpjContratante,
    valorContratado,
    dataAssinatura,
    dataInicio,
    dataFinalizacao,
    objetoContrato,
    secretarias,
  } = req.body;

  // Execute uma inserção no banco de dados
  const query = `
    INSERT INTO contratos (
      processoAno,
      numeroContrato,
      modalidade,
      registro,
      orgao,
      cnpjContratante,
      valorContratado,
      dataAssinatura,
      dataInicio,
      dataFinalizacao,
      objetoContrato,
      secretarias
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    processoAno,
    numeroContrato,
    modalidade,
    registro,
    orgao,
    cnpjContratante,
    valorContratado,
    dataAssinatura,
    dataInicio,
    dataFinalizacao,
    objetoContrato,
    secretarias,
  ];

  bd.query(query, values, (error, results) => {
    if (error) {
      console.error('Erro ao salvar contrato:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.status(201).json({ success: true, contratoId: results.insertId });
    }
  });
});

module.exports = router;
