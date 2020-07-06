import React, { useState } from 'react';
import styled from 'styled-components'
import { HeaderText } from '../utils/text';
import './slider/Slider.css';



const Main = styled.main`
    width: 100%;
    max-width: 500px;
`;

const MainHeader = styled.div`
  display: flex;
`;


const Item = styled.div`
    flex: 0 50%;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    .explore_img {
        width: 70px;
        height: 70px;
    }
`;

const HeaderDirection = styled.div`
 position: relative;
 width: 50%;

`
const HeaderDirectionImage = styled.div`
    display: flex;
    position: absolute;
    top: 30%;
    right: 5%;
    img {
        width: 18px;
        margin-left: 10px;
        cursor: pointer;
    }
`

const ItemDesc = styled.div`
    margin-left: 10px;
    .item-name {
        margin: 5px 0px;
        font-weight: 500;
    }
    .item-artist {
        font-size: 14px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const RecommendedSongs = [
    {
        id: 1,
        song: '44.4',
        artist: 'Jay Z',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 2,
        song: '44.4',
        artist: 'Jezzy',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 3,
        song: '44.4',
        artist: 'cole',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 4,
        song: '44.4',
        artist: 'kendrick',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
]



const Explore = () => {
    let [firstSong, SetFirstSong] = useState(0);


    const List = () => {
        let pagedSongs = RecommendedSongs.slice(firstSong, (firstSong + 2))
        let lastSong = pagedSongs[pagedSongs.length - 1]
        // SetFirstSong(lastSong)
        // const dataId = RecommendedSongs.findIndex((payload) => payload.id === data.id )
        // SetFirstSong(dataId)
        // console.log(firstSong, 'first')

        return (
        <ItemWrapper>
            {
               pagedSongs.map((data) => {
                return(
                    <Item>
                        <img className="explore_img"  src={data.albumart} />
                        <ItemDesc>
                            <div className="item-name">{data.song}</div>
                            <div className="item-artist">{ data.artist }</div>
                        </ItemDesc>
                    </Item>
               )}) 
            }
       </ItemWrapper>
        )
    }


    return (
       <Main>
           <MainHeader>
                  <HeaderText>
                      Recommended songs
                  </HeaderText>
                  <HeaderDirection>
                      <HeaderDirectionImage>
                            <img alt="arrow" onClick={ () => List() } src={require('../icons/backward-arrow.svg')} className="arrow-prev" />
                            <img alt="arrow" onClick={ () => List() } src={require('../icons/forward-arrow.svg')} className="arrow-next" />
                      </HeaderDirectionImage>
                  </HeaderDirection>
           </MainHeader>
            { List() }
       </Main>
    );
}

export default Explore;