import React from 'react'
import "./App.css"
import { Input } from './components/Input'
import { FormContent } from './components/FormContent'

export const App = () => {
  return (
      <>
          {/* Title */}
          <h1>Todo List</h1>
          <FormContent />
      </>
)
}
