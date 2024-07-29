import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppBiblioteca } from './AppBiblioteca'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBiblioteca />
    </BrowserRouter>
  </React.StrictMode>,
)
