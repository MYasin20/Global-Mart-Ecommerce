import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Products({ getNewProducts }) {
  const [displayProducts, setDisplayProducts] = useState([]);

  const handleNewProducts = useCallback(() => {
    return getNewProducts;
  }, [getNewProducts]);

  useEffect(() => {
    async function fetchRandomProducts() {
      if(!getNewProducts) {
        try {
          const response = await axios('https://dummyjson.com/products');
          const fetchProducts = response.data.products;
          setDisplayProducts([...fetchProducts]);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await axios(`https://dummyjson.com/products/category/${getNewProducts}?limit=30`);
          const fetchProducts = response.data.products;
          setDisplayProducts([...fetchProducts]);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchRandomProducts();
  }, [handleNewProducts]);

  return (
    <ProductsContainer>
      { displayProducts.map((product, i) => (
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
  /* justify-content: center; */
  flex: 1 1 100%;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 240px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.025);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateY(-1px);
  }
`
const CardImg = styled.img`
  height:200px;
  /* max-height: 300px; */
  /* aspect-ratio: 3/2; */
  /* object-fit: contain; */
  /* object-position: center; */
`

const CardBody = styled.div`
  padding: 10px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
`
const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`
const CardDescription = styled.p`
  margin: 10px 0;
`
const CardPrice = styled(CardDescription)`
  font-size: 18px;
  font-weight: 500;
  color: orange ;
`
const CardRating = styled(CardDescription)`
  font-weight: 300;
`

const BtnAddToCart = styled.button`
  color: white;
  font-size: 1.2rem;
  background: rgb(155,140,255);
  cursor: pointer;
  border: none;
  padding: 6px 8px;
  width: 210px;
  :hover {
    background: rgb(151,136,247);
  }
`