import React from 'react';
import styled from 'styled-components'
import Slider from '../components/slider/Slider'
import Recommended from '../components/Recommended';
import Favorite from '../components/Favorite';
import Sound from 'react-sound';


const Header = styled.h1`
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
`
// http://streaming.tdiradio.com:8000/house.mp3

const SubSection = styled.div`
    display: flex;
    margin-top: 5vh;
    flex-wrap: wrap;
`

const Explore = () => {
    const handleSongPlaying = (data) => {
       let { position, duration } = data
       console.log({ position: position, duration: duration}, '')
    }
    const handleSongFinished = (data) => {
        console.log("i finished")
    }

    return (
       <div>
            <Header>New Realeases</Header>
            <Slider />
            <SubSection>
                <Recommended />
                <Favorite />
            </SubSection>
            <Sound
                url="http://streaming.tdiradio.com:8000/house.mp3"
                playStatus={Sound.status.PAUSED}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinished}/>
       </div>
    );
}

export default Explore;