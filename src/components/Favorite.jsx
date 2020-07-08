import React, { useState } from 'react';
import styled from 'styled-components'
import { HeaderText } from '../utils/text';
import { ReactComponent as Explore } from '../icons/sound-waves.svg';
import { textcolor, navBg } from '../utils/color'


const MainHeader = styled.div`

`;

const SongsHeader = styled.div`
    width: 100%;
    display: flex;
    font-size: 14px;
    div {
        max-width: 250px;
        width:100%;
    }
`;

const SongsList = styled.ul`
    list-style: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0px;
    font-size: 13px;
    li {
       display: flex;
       margin-top: 10px;
        .list__item {
            max-width: 250px;
            width:100%;
            display: flex;
            position: relative;
        }
        .list__item__title {
            margin-left: 22px;
        }
        .list__icon {
            width: 15px;
            top: 10%;
            margin-right: 20px;
            fill: #d9d9da;
            margin-right: 10px;
            position: absolute;
        }
    }
`;

const Main = styled.main`
    width: 100%;
    max-width: 500px;
`;

const Nav = () => {
    const [songs, setSongs] = useState([
                        { title: 'everything i wanted', artist: 'usher', album: 'everything i wanted' },
                        { title: 'everything i wanted', artist: 'usher', album: 'everything i wanted' }
                    ])
    return (
        <Main>
            <MainHeader>
                <HeaderText>
                    Favorite Songs
                </HeaderText>
                <SongsHeader>
                    <div>Title</div>
                    <div>Artist</div>
                    <div>Album</div>
                </SongsHeader>
                <SongsList>
                    {
                     songs.map((data, index) => 
                        <li key={index}>
                            <div className="list__item"><div className="list__icon"><Explore /></div> <div className="list__item__title">{ data.title }</div></div>
                            <div className="list__item list__item--md">{ data.artist }</div>
                            <div className="list__item">{ data.album }</div>
                        </li>
                     )
                    }
                </SongsList>
            </MainHeader>
        </Main>
    );
}

export default Nav;