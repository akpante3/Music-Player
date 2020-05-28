import React from 'react';
import styled from 'styled-components'
import './App.css';
import Sidebar from './components/sidebar'

function App() {
  const Wrapper = styled.div`
  font-family: 'Nunito', sans-serif;`;

  return (
    <Wrapper>
      <Sidebar />
    </Wrapper>
  );
}

export default App;
