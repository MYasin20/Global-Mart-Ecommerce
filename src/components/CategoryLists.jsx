import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'

function CategoryLists({ displayNewCatToProduct }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios('https://dummyjson.com/products/categories');
        const fixedDashStr = response.data.map(item => item.replace(/-/g, ' '));
        const capilizeWords = capilizedCategories(fixedDashStr);
        setCategories([...capilizeWords]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const capilizedCategories = (array) => {
    return array.map(list => { 
      const words = list.split(' ');
      const capilizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      return capilizedWords.join(' ');
    });
  }

  function displayNewCategory(e) {
    return displayNewCatToProduct(e.target.textContent, false);
  }

  return (
    <CategoriesContainer>
       <h3>Categories</h3>
        { categories.map((cat, index) => (
          <li onClick={displayNewCategory} key={index}><a href='/#'>{cat}</a></li>
        ))}
    </CategoriesContainer>
  )
}

export default CategoryLists;

const CategoriesContainer = styled.div`
  flex: 1 1 20%;
  height: 600px;
  /* background-color: rgba(0, 0, 0, 0.010); */
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
  h3 {
    padding: 0 0 10px 10px;
  }
  li {
    padding: 4px 0 0 10px;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
    text-decoration: underline;
  }
  li a {
    color: black;
  }
`