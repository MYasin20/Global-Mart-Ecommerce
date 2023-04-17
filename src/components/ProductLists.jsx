import React, { useState } from 'react'
import styled from 'styled-components';
import Categories from './Categories';
import Products from './Products';


function ProductLists() {
  const [newProducts, setNewProducts] = useState('');

  function updateCategory(data) {
    if(data && data.includes(' ')) {
      return setNewProducts(data.toLowerCase().replace(' ', '-'));
    } else if(data) {
      return setNewProducts(data.toLowerCase());
    }
  }

  return (
    <Container>
      <Categories displayNewCatToProduct={updateCategory} />
      <Products getNewProducts={newProducts}/>
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

