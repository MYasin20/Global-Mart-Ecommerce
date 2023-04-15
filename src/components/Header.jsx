import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <NavigationContainer>
      <Nav>
        <NavBrand>
          <h3>Global Market 🌎</h3>
        </NavBrand>

        <SearchField> 
          <input type='text' name='search' />
          <button>🔍</button>
        </SearchField>
        <Cart>
          <span>🛒</span>
        </Cart>
      </Nav>
    </NavigationContainer>
  )
}

export default Header;

const NavigationContainer = styled.nav`
border: 2px solid red;
  width: min(90%, 78rem);
  height: 70px;
  margin: 0 auto;
`

const Nav = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: space-between;
`

const NavBrand = styled.nav`
  cursor: pointer;
`

const SearchField = styled.div`
  input {
    width: 480px;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 18px;
    padding: 0 10px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  button {
    padding: 0;
    background-color: rgba(0, 0, 0, 0.05);
    height: 40px;
    border: none;
    cursor: pointer;
    padding: 0 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

const Cart = styled.div`
`