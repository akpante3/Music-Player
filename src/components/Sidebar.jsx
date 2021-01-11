import React, { useState } from 'react';
import styled from 'styled-components'
import { sidebarBg, textcolor} from '../utils/color'
import { ReactComponent as MusicIcon } from '../icons/music.svg';
import { ReactComponent as Explore } from '../icons/sound-waves.svg';
import { ReactComponent as Like } from '../icons/heart.svg';
import { Link } from "react-router-dom";
import { device } from '../utils/mediaQuery'
import '../App.css'

const Sidebar = () => {

  const Aside = styled.aside`
  color: ${textcolor};
  width: 300px;
  height: 100vh;
  z-index: 5;
  background-color: ${sidebarBg};
`;

  const AsideLogo = styled.div`
    padding: 20px;
    margin-button: 30px;
  `;

  const AsideCategories = styled.div`
     ul {
        list-style: none;
        padding: 0px;
        margin-top: 80px;
        font-weight: 400;
        li {
            margin-left: 60px;
            margin-bottom: 20px;
            font-size: 18px;
            cursor: pointer;
        }
     }
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
        transition: 0.7s;
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
  `;


  return (
    <Aside>
        <AsideLogo>
            hello world
        </AsideLogo>
        <AsideHeaders>
            <ul>
                <li>
                    <MusicIcon className='icon'></MusicIcon>
                    Music
                </li>
                <li>
                    <Explore className='icon'></Explore>
                     <Link to="/explore">Explore</Link>
                </li>
                <li><Like className='icon'></Like>Favorite</li>
            </ul>
        </AsideHeaders>
        <AsideCategories>
            <ul>
                <li>Songs</li>
                <li>Albums</li>
                <li>Artists</li>
                <li>Playlists</li>
                <li>Downloads</li>
            </ul>
        </AsideCategories>
    </Aside>
  );
}

export default Sidebar;
