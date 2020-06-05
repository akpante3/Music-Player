import React, { useState } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './routes'
import styled, { keyframes } from 'styled-components'
import './App.css';
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Slider from './components/Slider/Slider'
import { device } from './utils/mediaQuery'
import { bgColor, textcolor } from './utils/color'


const slideIn = keyframes`
from { left: -100%; }
to { left: 0; }
`;

const slideout = keyframes`
from { left: 0; }
to { left: -100%; }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 98%;
  @media ${ device.tablet } {
    max-width: 700px;
    margin-left: 30px;
  }
  @media ${ device.laptop } {
    max-width: 650px;
  }
  @media ${ device.laptopM } {
    max-width: 1000px;
  }
`

const Wrapper = styled.div`
display: flex;
width: 100%;
position: relative;
font-family: 'Nunito', sans-serif;
background: ${ bgColor };
color: ${ textcolor };
height: 100vh;
overflow: hidden;
.click-me {
  position: absolute;
  top:30px;
  right: 30px;
  z-index:10;
}
.open-side-bar {
  animation: ${slideIn} 0.5s forwards;
}
.close-side-bar {
  animation: ${slideout} 0.5s forwards;
}`;

 const SidebarWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
  @media ${ device.laptop } {
    display: flex;
    z-index: 1;
    position: static;
    width: auto;
  }
 `;
const MainContainer = styled.div`
  width: 100%
`

function App() {
  const [ openSideBar, setOpenSideBar ] = useState(false)

  const ToggleSideBar = () => {
    setOpenSideBar(!openSideBar)
  }

  return (
    <Wrapper>
      <div className="click-me" onClick={() => ToggleSideBar()}>
         click me
      </div>
      <SidebarWrapper className={ openSideBar ? 'open-side-bar' : 'close-side-bar' }>
        <Sidebar openSideBar={openSideBar} />
      </SidebarWrapper>
      <MainContainer>
        <Nav />
        <MainContent>
          <Router >
            <Routes />
          </Router>
        </MainContent>
      </MainContainer>
    </Wrapper>
  );
}

export default App;
