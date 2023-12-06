import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// forms
const NovoContrato = React.lazy(() => import('./views/forms/NovoContrato'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path:'/NovoContrato', name: 'Novo contrato', element: NovoContrato}
]

export default routes
