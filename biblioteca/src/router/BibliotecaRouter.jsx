import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RouterInventario } from '../inventario/router/RouterInventario'

export const BibliotecaRouter = () => {
  return (
      <>
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="/*" element={<RouterInventario />} />
       </Routes>
      </>
)
}
