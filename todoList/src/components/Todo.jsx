import React, { useRef, useState } from 'react'
import { BtnEdit } from './BtnEdit'
import { BtnDelete } from './BtnDelete'

export const Todo = ({ todos, todo, setTodos }) => {

    const inputEdit = useRef( null )
    const [ value, setValue ] = useState( todo )

  return (
      <li>
          <input
              className='show-input disabled'
              type="text"
              value={value}
              onChange={ (e) => setValue( e.target.value ) }
              ref={ inputEdit }
          
          />
          <div>
              <BtnEdit
                  todos={ todos }
                  todo={ todo }
                  setTodos={ setTodos }
                  inputEdit={ inputEdit }
                  newValue={ value }
              
              />
              <BtnDelete todos={ todos } todo={ todo }  setTodos={ setTodos } />
          </div>
      </li>      
  )
}
