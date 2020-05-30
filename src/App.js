import React from 'react';
import styled from 'styled-components'
import './App.css';
import Sidebar from './components/sidebar'
import Nav from './components/nav'

function App() {
  const Wrapper = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Nunito', sans-serif;`;

  const MainContainer = styled.div`
    width: 100%
  `


  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Nav />
      </MainContainer>
    </Wrapper>
  );
}

export default App;
