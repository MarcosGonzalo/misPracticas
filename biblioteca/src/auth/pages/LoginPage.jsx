import React from 'react'
import "./LoginPage.css"
import { useForm } from '../hook/useForm'
import users from "../../assets/users.json"
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { formState, changeFormState } = useForm({
    "username": "1234",
    "password": ""
  })
  const navigate = useNavigate()

  //const { formState, changeFormState } = useForm({ username, password})

  const onLogin = ( e ) => {
    e.preventDefault();

    const user = users.find(user => user.codigo == formState.username )
    
    if (!user) {
       console.log("error de email")
    }

    if (!(user.password == formState.password)) {
      console.log("Password incorrect")
      return
    }

    localStorage.setItem( "username", user.codigo )

    navigate("/inventario")
  }

  return (
    <form className='form-login'>
          <p className='title title-general'>Login</p>
          <div>
        <input
          type="text"
          placeholder='username'
          name='username'
          value={ formState.username  }
          onChange={ changeFormState }
        />
        <input
          type="text"
          placeholder='password'
          name='password'
          value={ formState.password  }
          onChange={ changeFormState }
        />
        </div>
      <button id='btn-login'
        onClick={ onLogin }
      >Entrar</button>
    </form>
  )
}
