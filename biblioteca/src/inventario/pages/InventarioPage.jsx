

import "./InventarioPage.css"
import books from "../../assets/books.json"
import { CardBook } from "../components/CardBook"
import { SimpleForm } from "../../ui/components/SimpleForm"
import { useState } from "react"

export const InventarioPages = () => {

  const [showBooks, setshowBooks] = useState([])

  let newShowBooks = books
  
  if (showBooks != "") {
    let reg = new RegExp(showBooks, "i")
    newShowBooks = books.filter(
      book => {
        // console.log( reg )
        // console.log( book.nombre )
        console.log( reg.test(book.nombre) )
        return reg.test(book.nombre)
      }
    )
  }

  console.log( newShowBooks )

  return (
    <section  className="section-inventario">
      <SimpleForm changeShowBooks = { setshowBooks } />
      <div className="content-card-book">
        {
          newShowBooks.map((book) => {
            // console.log(book)
            return <CardBook key={book.id} {...book} />
          })
        }
      </div>

    </section>
  )
}
