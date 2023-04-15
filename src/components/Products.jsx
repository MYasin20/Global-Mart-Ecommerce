import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchRandomProducts() {
      try {
        const response = await axios('https://dummyjson.com/products');
        const fetchProducts = response.data.products;
        setProducts([...fetchProducts]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRandomProducts();
  }, []);

  return (
    <ProductsContainer>
      { products.map((product, i) => (
        <Card key={i}>
          <CardImg src={product.thumbnail} />
          <CardBody>
            <CardTitle>
              {product.title}
            </CardTitle>

            <CardDescription>
              { product.description.length > 50 ?
                product.description.substring(0, 50) + '...' :
                product.description
              }
            </CardDescription>

            <CardPrice>$ {product.price}</CardPrice>
            <CardRating>Rating: {product.rating}</CardRating>
            <BtnAddToCart>Add to Cart</BtnAddToCart>

          </CardBody>

        </Card>
      ))}
      
    </ProductsContainer>
  )
}

export default Products;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 100%;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 240px;
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    /* transform: translateY(-2px); */
  }
`
const CardImg = styled.img`
  height: 200px;
  /* max-height: 300px; */
  aspect-ratio: 3/2;
  object-fit: contain;
  object-position: center;
`

const CardBody = styled.div`
  padding: 10px;
  border: 3px solid purple;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
`
const CardTitle = styled.h2`
  font-size: 20px;
`
const CardDescription = styled.p`
margin: 10px 0;
`
const CardPrice = styled(CardDescription)``
const CardRating = styled(CardDescription)``

const BtnAddToCart = styled.button`
  color: white;
  font-size: 1.2rem;
  background: darkviolet;
  cursor: pointer;
  border: none;
  padding: 5px 8px;
  width: 200px;
`