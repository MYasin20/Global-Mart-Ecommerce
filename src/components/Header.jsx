import React, { useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({ getNewSearch }) {
 
  const [searchField, setSearchField] = useState('');
  
  function handleChange(e) {
    return setSearchField(e.target.value);
  }

  function handleNewSearch() {
    console.log('Header Component: (sending to App Component)', searchField);
    return getNewSearch(searchField);
  }

  return (
    <NavigationContainer>
      <Nav>
        <NavBrand>
          <h3>Global Market 🌎</h3>
        </NavBrand>

        <SearchField> 
          <input onChange={handleChange} type='text' name='search' value={searchField} />
          <SearchFieldButton onClick={handleNewSearch}>
            <SearchIcon />
          </SearchFieldButton>
        </SearchField>

        <Cart />

      </Nav>
    </NavigationContainer>
  )
}

export default Header;

const NavigationContainer = styled.nav`
  width: 100%;
  height: 70px;
  background: rgb(155,140,255);
`

const Nav = styled.div`
  width: min(90%, 78rem);
  margin: 0 auto;
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: space-between;
`

const NavBrand = styled.nav`
  cursor: pointer;
  h3 {
    font-size: 24px;
    margin-left: 15px;
    color: white;
    letter-spacing: 1px;
    font-weight: 700;
  }
  h3:hover {
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
    0px 8px 13px rgba(0,0,0,0.1),
    0px 18px 23px rgba(0,0,0,0.1);
  }
`

const SearchField = styled.div`
  display: flex;
  input {
    width: 480px;
    border: none;
    font-size: 18px;
    padding: 0 10px;
    height: 40px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: none;
  }
  
`

const SearchFieldButton = styled.button`
  background-color: white;
  border: none;
  height: 40px;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 5px;
`
const Cart = styled(ShoppingCartIcon)`
  color: white;
`