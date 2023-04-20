import React, { useState } from "react";
import Header from './components/Header';
import ProductLists from './components/ProductLists';
import './App.css';

function App() {
  const [newSearch, setNewSearch] = useState('');

  function clearSearchApp() {
    setNewSearch('');
  }

  function handleNewSearch(search) {
    console.log('App Component: ',search)
    return setNewSearch(search);
  }

  return (
    <>
      <Header getNewSearch={handleNewSearch}/>
      <ProductLists clearSearchApp={clearSearchApp} displaySearch={newSearch} />
      {/* <Footer /> */}
    </>
  )
}

export default App;
