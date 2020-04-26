import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/navbar';
import BookList from './components/booklist';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
