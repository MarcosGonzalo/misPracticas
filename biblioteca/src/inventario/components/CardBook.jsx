import React from 'react'

import batsi from "../../assets/imagesBook/bat.jpg"
import { useNavigate } from 'react-router-dom'
import "./CardBook.css"

export const CardBook = ({id, nombre, autor, url }) => {
  
  const navigate = useNavigate();

  const handleClickCard = () => {

    console.log("xd ")
    navigate(`./book?id=${ id }`)
  }
  return (
    <figure
      className="card-book"
      onClick={ handleClickCard }
    >
        <img src={ batsi } alt="xdsd" />
        <figcaption>
              <p className="card-title">{ nombre }</p>
          <p className="card-autor">{ autor }</p>
        </figcaption>
      </figure>
  )
}
