import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Categories from './Categories';
import Products from './Products';


function ProductLists() {
  const [categories, setCategories] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState('');

  const capilizedCategories = (array) => {
    return array.map(list => { 
      const words = list.split(' ');
      const capilizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return capilizedWords.join(' ');
    });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios('https://dummyjson.com/products/categories');
      const fixedDashStr = response.data.map(item => item.replace(/-/g, ' '));
      const capilizeWords = capilizedCategories(fixedDashStr);
      setCategories([...capilizeWords]);
    }
    fetchData();
  }, [])



  return (
    <Container>
      <Categories categLists={categories} />
      <Products />
      {/* <Products product={selectedProduct}/> */}
    </Container>
  )
}

export default ProductLists;

const Container = styled.div`
display: flex;
border: 2px solid red;
  width: min(90%, 78rem);
  margin: 50px auto 20px;
`

