import React from 'react'

import "./index.css"

import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './MultipleCustomHooks'
import { FousScreen } from './FousScreen'
import { Memorize } from './Memorize'
import { MemoHook } from './MemoHook'
import { CallbackHook } from './CallbackHook'
import { Padre } from '../07-tarea-memo/Padre'

import "./intro-reducer"
import { TodoApp } from './TodoApp'
import { MainApp } from './useContext/MainApp'


import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  {/* <React.StrictMode> */}
    <MainApp />
  </BrowserRouter>
  //</React.StrictMode>,
)
