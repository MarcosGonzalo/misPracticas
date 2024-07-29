import books from "../../assets/books.json"


export const SearchBook = ( id ) => {

    const foundBook = books.find(book => {
       
        return book.id === id
    })

    return foundBook 

}
