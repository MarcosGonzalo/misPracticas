import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate  } from 'react-router-dom'
import { InventarioPages } from '../pages/InventarioPage'
import { ReportePage } from '../pages/ReportePage'
import { LoginPage } from '../../auth/pages/LoginPage'
import { Navbar } from '../../ui/components/Navbar'
import { Book } from '../../book/pages/Book'
import { NotFound } from '../pages/NotFound'
import { PageBook } from '../../book/pages/PageBook'

export const RouterInventario = () => {

  const navigate = useNavigate()
  const existsUser = localStorage.getItem("username")

  console.log(existsUser, "xd")

  useEffect(() => {
    if (!existsUser) { 
      return navigate("/login")
    } 
  }, [ existsUser ])
  

  return (

    <>
    <Navbar username={ existsUser } />
    <Routes>
        <Route path="inventario" element={ <InventarioPages />} />
        <Route path="reportes" element={<ReportePage />} />

        {/* <Route path="inventario/book" element={<Book />} /> */}
        <Route path="inventario/book" element={<PageBook />} />

          
        {/* <Route path="/" element={ <LoginPage />} /> */}
        <Route path="/" element={<Navigate to={"/inventario"} />} />
        
    </Routes>
</>
)
}
