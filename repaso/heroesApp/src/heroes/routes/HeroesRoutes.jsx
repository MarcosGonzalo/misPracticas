import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPages, HeroPage, MarvelPages, SearchPage } from '../pages'

export const HeroesRoutes = () => {

    return <>
        <Navbar />
        
        <div className='container'>
            <Routes>
                <Route path='marvel' element={ <MarvelPages /> } />
                <Route path='dc' element={<DcPages />} />
                
                <Route path='search' element={ <SearchPage /> } />
                <Route path='hero/:heroId' element={<HeroPage />} />
                
                <Route path='/' element={ <Navigate to="/marvel" /> } />
            </Routes>
        </div>
    </>
}
