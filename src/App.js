import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import './App.css';
import Sidebar from './components/sidebar'
import Nav from './components/nav'
import Slider from './components/Slider/Slider'
import { device } from './utils/mediaQuery'

function App() {
  const [ openSideBar, setOpenSideBar ] = useState(false)

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
  max-width: 1000px;
  `

  const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-family: 'Nunito', sans-serif;
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
    @media ${ device.tablet } {
      display: flex;
      z-index: 1;
      position: static;
      width: auto;
    }
   `;
  const MainContainer = styled.div`
    width: 100%
  `

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
          <Slider />
        </MainContent>
      </MainContainer>
    </Wrapper>
  );
}

export default App;
