import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// forms
const NovoContrato = React.lazy(() => import('./views/forms/NovoContrato'))

const Contratos = React.lazy(() => import('./views/Contrato/Contratos'))

const Documentos = React.lazy(() => import('./views/Documento/Documentos'))

const Licitacao = React.lazy(() => import('./views/Licitacoes/Licitacao'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Painel', element: Dashboard },
  { path:'/NovoContrato', name: 'Novo contrato', element: NovoContrato},
  { path:'/Contratos', name: 'Contratos', element: Contratos},
  { path:'/Documentos', name: 'Documentos', element: Documentos},
  { path:'/Licitacao', name: 'Licitaçoes', element: Licitacao}
]

export default routes
