import React, { useState } from 'react';
import styled from 'styled-components'
import { HeaderText } from '../utils/text';
import './Slider/Slide';



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
    {
        id: 5,
        song: '44.4',
        artist: 'alicia',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 6,
        song: '44.4',
        artist: 'justin',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 7,
        song: '44.4',
        artist: '50 cent',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 8,
        song: '44.4',
        artist: 'missy',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 9,
        song: '44.4',
        artist: 'nigga raw',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 10,
        song: '44.4',
        artist: 'MI abaga',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 11,
        song: '44.4',
        artist: '2 face idibia',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 12,
        song: '44.4',
        artist: 'sexy steel',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
    {
        id: 13,
        song: '44.4',
        artist: 'sexy steel',
        albumart: 'https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png'
    },
]

const SongList = (pagedSongs) => (
    <ItemWrapper>
        {
            pagedSongs.map((data, index) => {
                return(
                    <Item key={index}>
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


const Explore = () => {
    let [ NextfirstSong, SetNextFirstSong] = useState(0);
    let [ presentFirstSong, setPresentFirstSong] = useState(0);
    let [songs, SetSongs] = useState([]);


    const List = (pagedSongs, song) => {
        let nextIndex = RecommendedSongs.findIndex((data) => data.id ===  song.id)
        let firstIndex = RecommendedSongs.findIndex((data) => pagedSongs[0].id ===  data.id)
        console.log({
            nextIndex: nextIndex,
            firstIndex: firstIndex,
        }, '=================')
        // if (firstIndex) {
            SetNextFirstSong(nextIndex + 1)
            setPresentFirstSong(firstIndex)
            SetSongs(pagedSongs)
        // }
    }

    const forward = () => {
        if (RecommendedSongs.length > NextfirstSong ) {
            let data = RecommendedSongs.slice(NextfirstSong, (NextfirstSong + 4))
            let song = data[data.length -1]
            List(data, song)
        }
    }

    const backward = () => {
        if (presentFirstSong !== 0) {
            let data = RecommendedSongs.slice(presentFirstSong - 4 , presentFirstSong)
            let song = data[data.length -1]
            List(data, song)
        }
    }


    return (
       <Main>
           <MainHeader>
                  <HeaderText>
                      Recommended songs
                  </HeaderText>
                  <HeaderDirection>
                      <HeaderDirectionImage>
                            <img alt="arrow" onClick={ () => backward() } src={require('../icons/backward-arrow.svg')} className="arrow-prev" />
                            <img alt="arrow" onClick={ () => forward() } src={require('../icons/forward-arrow.svg')} className="arrow-next" />
                      </HeaderDirectionImage>
                  </HeaderDirection>
           </MainHeader>
           { SongList(songs) }
       </Main>
    );
}

export default Explore;