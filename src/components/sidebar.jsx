import React from 'react';
import styled from 'styled-components'
import { sidebarBg } from '../style/color'

const Sidebar = () => {

  const Aside = styled.aside`
  color: #d9d9da;
  width: 300px;
  height: 100vh;
  background-color: ${sidebarBg}`;

  const AsideLogo = styled.div`
  padding: 20px;
  margin-button: 30px;
  `;
  const AsideHeaders = styled.div`
  ul {
    list-style: none;
    padding: 0px;
    li { 
      margin: 10px 0px;
      padding: 0px 20px 0px 20px;
      font-weight: 700;
      font-size: 22px;
      cursor: pointer;
      transition: 1s;
      border-left: 2px solid none;
      
      img {
          width: 20px;
          height: 20px;
          fill: white;
      }
      :hover {
          color: #40b1e1;
          border-left: 2px solid #40b1e1;
      }
      :first-of-type {
        border-top: none;
      }
    }
  }
  `


  return (
    <Aside>
        <AsideLogo>
            hello world
        </AsideLogo>
        <AsideHeaders>
            <ul>
                <li><img src={require('../icons/music.svg')}></img>hekkio</li>
                <li>hekkio</li>
                <li>hekkio</li>
            </ul>
        </AsideHeaders>
    </Aside>
  );
}

export default Sidebar;