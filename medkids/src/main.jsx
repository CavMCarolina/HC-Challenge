import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Agendamentos from './Pages/Agendamento.jsx'
import EspacoInterativo from './Pages/EspacoInterativo.jsx'
import Paciente from './Pages/Paciente.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Voluntario from './Pages/Voluntario.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {index:true, element: <EspacoInterativo/>},
      {path:'agendamentos', element: <Agendamentos/>},
      {path:'paciente', element: <Paciente/>},
      {path:'voluntario', element: <Voluntario/>},
      {path:'*', element: <PageNotFound/>}

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
