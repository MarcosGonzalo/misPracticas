import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPages, DcPages, HeroesRoutes } from "../heroes"
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
      <Routes>
          <Route path='login' element={ <LoginPage /> } />
          <Route path='/*' element={ <HeroesRoutes /> } />
    </Routes>
)
}
