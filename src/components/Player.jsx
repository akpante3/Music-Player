import React from 'react';
import styled from 'styled-components'
import { textcolor, navBg, playerbgcolor } from '../utils/color'


const PlayerWrapper = styled.div`
    width:100%;
    padding: 20px;
    background-color: ${playerbgcolor};
    height: 30px;
`;

const Nav = () => {
    return (
        <PlayerWrapper>
          <div>Nigga wattin sup</div>
        </PlayerWrapper>
    );
}

export default Nav;