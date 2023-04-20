import React, { useState } from 'react'
import styled from 'styled-components';
import Categories from './Categories';
import Products from './Products';


function ProductLists({ displaySearch, clearSearchApp }) {
  const [newCatProductsDisplay, setNewCatProductsDisplay] = useState('');

  function clearCatProductDisplayProdLists() {
    return setNewCatProductsDisplay('');
  }
  
  function handleClearSearch() {
    return clearSearchApp();
  }
  
  function updateCategory(data) {
    if(data && data.includes(' ')) {
      return setNewCatProductsDisplay(data.toLowerCase().replace(' ', '-'));
    } else if(data) {
      return setNewCatProductsDisplay(data.toLowerCase());
    }
    setNewCatProductsDisplay('');
  }

  return (
    <Container>
      <Categories displayNewCatToProduct={updateCategory} />
      <Products
        clearCatProductsDisplay={clearCatProductDisplayProdLists}
        displayNewSearch={displaySearch} 
        getNewCatProductsDisplay={newCatProductsDisplay}
        clearSearch={handleClearSearch}
      />
      {/* <Products product={selectedProduct}/> */}
    </Container>
  )
}

export default ProductLists;

const Container = styled.div`
  display: flex;
  width: min(90%, 78rem);
  margin: 50px auto 20px;
`

