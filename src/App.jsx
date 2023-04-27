import React, { useState } from "react";
import Header from './components/Header';
import CategoryLists from './components/CategoryLists';
import Products from './components/Products'
import styled from "styled-components";
import './App.css';

function App() {
  const [entry, setEntry] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  function handleNewEntry(newEntry, _isSearch) {
    if(newEntry && newEntry.includes(' ') && !_isSearch) {
      setEntry(newEntry.toLowerCase().replace(' ', '-'));
      return setIsSearch(_isSearch);
    } else if(newEntry && !_isSearch) {
      setEntry(newEntry.toLowerCase());
      return setIsSearch(_isSearch);
    }
    setIsSearch(_isSearch);
    return setEntry(newEntry);
  }

  return (
    <>
      <Header getNewSearch={handleNewEntry} />
      <Container>
        <CategoryLists displayNewCatToProduct={handleNewEntry}/>
        <Products displayEntry={entry} handleCondition={isSearch}/>
        {/* <ProductLists fetchNewSearch={handleNewEntry} /> */}
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default App;
const Container = styled.div`
  display: flex;
  width: min(90%, 78rem);
  margin: 50px auto 20px;
`