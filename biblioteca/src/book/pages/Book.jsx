import { useNavigate } from "react-router-dom"
import batsi from "../../assets/imagesBook/bat.jpg"
import { NotFound } from "../../inventario/pages/NotFound"
import { SearchBook } from "../hook/SearchBook"

import "./Book.css"
import { useEffect, useState } from "react"

export const Book = ({ id }) => {
  
  const [leftOrRight, setLeftOrRight] = useState("")
  const navigate = useNavigate()
  const url = window.location.search
  const searchParam = new URLSearchParams(url)
  const idBook = parseInt(searchParam.get("id"))
  const section = document.querySelector(".section-book")
  const [miId, setMiId] = useState( idBook )
  // const [idBook, setIdBook] = useState(
  //   parseInt(searchParam.get("id"))
  // )
  
  
  
  const showBook = SearchBook( idBook )
  console.log(showBook)
  if (!showBook) return <NotFound />
  
  
  const changeBook = (leftOrRight) => {
    // window.location.assign("http://localhost:5173/inventario/book?id=7")
    
    console.log("click")
    const id = leftOrRight === "right" ? idBook + 1 : idBook - 1
    setLeftOrRight( leftOrRight )
    console.log("este id es nuevo : ", id )
    navigate(`?id=${id}`)
    
    section.classList.remove("trans-right")
    section.classList.add("trans-left")
    
  }
  
  useEffect(() => {
    setTimeout(() => { 
      section.classList.remove("trans-left")
      section.classList.add("trans-right")
    }, 1000 )
  }, [ ])
  
  
  return (
      <>
        <section className={`section-book trans-${ leftOrRight }s`}>
          <div className="galery-book">
                <img src={ batsi } alt="" />
          </div>
          <div className="info">
            <p className="autor">{ showBook.autor }</p>      
            <p className="age"> -{showBook["año"]}- </p>
            <hr />
            <p className="stock">Stock: { showBook.stock }</p>
          </div>
          <div className="descripcion">
            <p className="title">{ showBook.nombre }</p>
            <p className="desc">{showBook.descripcion}</p>
            <button className="btn-reservar">Reservar</button>
          </div>
          <button 
            className="btn-chevron left"
            onClick={ () => changeBook("left") }
          ><i className="fas fa-chevron-left"></i></button>
          <button 
            className="btn-chevron right"
            onClick={ () => changeBook("right") }
          ><i className="fas fa-chevron-right"></i></button>
        </section>
      </>
)
}
