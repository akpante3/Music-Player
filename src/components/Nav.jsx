import React from 'react';
import styled from 'styled-components'
import { ReactComponent as Search } from '../icons/search.svg';
import { textcolor, navBg } from '../utils/color'


const NavWrapper = styled.nav`
width:100%;
max-height: 90px;
background-color: ${navBg};
padding: 20px 0px;
position: relative;
transition: 1s;
.search {
    top: 35%;
    left: 5%;
    position: absolute;
    width: 20px;
    height: 20px;
    fill: ${textcolor};
}
`;

const SearchInput = styled.input`
width: 80%;
height: 30px;
background-color: ${navBg};
box-shadow: none;
border-style: none;
color: ${textcolor};
margin-left: 8%;
font-size: 15px;
::placeholder {
    font-size: 15px;
    border: none;
}
:focus {
    outline: none;
}
`;

const Nav = () => {
    return (
        <NavWrapper>
            <Search className="search" />
            <SearchInput placeholder="Search" className="search-input" />
        </NavWrapper>
    );
}

export default Nav;