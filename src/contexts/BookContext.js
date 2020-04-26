import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) =>  {
    const [books, setBooks] = useState([
        {title:"Book 1", author:"Author 1", id:1},
        {title:"Book 2", author:"Author 1", id:2},
        {title:"Book 3", author:"Author 2", id:3},
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title:title, author:author, id:uuid()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book=>book.id !== id));
    };

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;