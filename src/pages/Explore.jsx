import React from 'react';
import styled from 'styled-components'
import Slider from '../components/slider/Slider'
import Recommended from '../components/Recommended';
import Favorite from '../components/Favorite';


const Header = styled.h1`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
`

const Explore = () => {
    return (
       <div>
            <Header>New Realeases</Header>
            <Slider />
            <Recommended />
            <Favorite />
       </div>
    );
}

export default Explore;