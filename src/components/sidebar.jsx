import React from 'react';
import styled from 'styled-components'
import { sidebarBg } from '../style/color'
import {ReactComponent as MusicIcon} from '../icons/music.svg';
import '../App.css'

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
      margin: 30px 0px;
      padding: 0px 20px 0px 20px;
      font-weight: 700;
      font-size: 22px;
      cursor: pointer;
      border-left: 2px solid none;
        .icon {
            margin-right: 20px;
            fill: #d9d9da;
            width: 20px;
            height: 20px;
        }
        :hover {
            color: #40b1e1;
            border-left: 2px solid #40b1e1;
            .icon {
                fill: #40b1e1;
            }
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
                <li><MusicIcon className={['icon', 'music-icon'].join(' ')}></MusicIcon>Music</li>
                <li>Explore</li>
                <li>Favorite</li>
            </ul>
        </AsideHeaders>
    </Aside>
  );
}

export default Sidebar;