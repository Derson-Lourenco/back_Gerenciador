import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// forms
const NovoContrato = React.lazy(() => import('./views/forms/NovoContrato'))

const Contratos = React.lazy(() => import('./views/Contrato/Contratos'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path:'/NovoContrato', name: 'Novo contrato', element: NovoContrato},
  { path:'/Contratos', name: 'Contratos', element: Contratos}
]

export default routes
