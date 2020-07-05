import React, { useState } from 'react';
import styled from 'styled-components'
import { HeaderText } from '../utils/text';
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
       div {
            max-width: 250px;
            width:100%;

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
                     songs.map((data) => 
                        <li>
                            <div>{ data.title }</div>
                            <div>{ data.artist }</div>
                            <div>{ data.album }</div>
                        </li>
                     )
                    }
                </SongsList>
            </MainHeader>
        </Main>
    );
}

export default Nav;