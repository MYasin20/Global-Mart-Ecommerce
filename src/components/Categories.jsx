import React from 'react'
import styled from 'styled-components'

function Categories({ categLists }) {
  return (
    <CategoriesContainer>
       <h3>Categories</h3>
        { categLists.map((cat, index) => (
          <li key={index}><a href='/#'>{cat}</a></li>
        ))}
    </CategoriesContainer>
  )
}

export default Categories;

const CategoriesContainer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  flex: 1 1 20%;
  /* width: 240px; */
  height: 600px;
  h3{
    padding-left: 10px;
  }
  li {
    padding: 2px 0 0 10px;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`