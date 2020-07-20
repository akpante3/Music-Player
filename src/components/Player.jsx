import React from 'react';
import styled from 'styled-components'
import { Slider, RangeSlider } from 'rsuite';
import { textcolor, navBg, playerbgcolor } from '../utils/color';
import { ReactComponent as  Forward } from '../icons/advance.svg';
import { ReactComponent as Backward } from '../icons/previous.svg';
import { ReactComponent as Play } from '../icons/play.svg';
import { ReactComponent as Fav } from '../icons/heart.svg';
import { ReactComponent as Mic } from '../icons/mic.svg';
import { ReactComponent as Speaker } from '../icons/speaker.svg';
import { ReactComponent as Random } from '../icons/random.svg';
import 'rsuite/dist/styles/rsuite-default.css'


const PlayerWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${playerbgcolor};
    .fav-mic-icons {
        svg {
            fill: white;
            width: 20px;
        }
    }
    .nav-controls {
        display: flex;
        width: 120px;
        box-sizing: border-box;
        justify-content: space-between;
        .nav-controls__directions {
            box-sizing: border-box;
            padding-top: 5%;
            svg {
                width: 25px;
                fill: white;
            }
        }
        svg {
            width: 40px;
            fill: white;
        }
    }
`;

const Song = styled.div`
    flex: 0 50%;
    width: 200px;
    display: flex;
    .explore_img {
        width: 40px;
        height: 40px;
    }
`;

const SongDesc = styled.div`
    margin-left: 10px;
    .item-name {
        margin: 2px 0px;
        font-weight: 600;
        font-size: 14px;
    }
    .item-artist {
        font-size: 12px;
    }
`;
const Nav = () => {
    return (
        <PlayerWrapper>
            <div className="nav-controls">
                <div className="nav-controls__directions">
                    <Backward />
                </div>
                <Play />
                <div className="nav-controls__directions">
                    <Forward />
                </div>
            </div>
            <Song>
                <img className="explore_img"  src="https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png" />
                <SongDesc>
                  <div className="item-name">in da club</div>
                  <div className="item-artist">justin</div>
                </SongDesc>
            </Song>
            <Slider
                progress
                defaultValue={50}
                onChange={value => {
                    console.log(value, '===');
                }}
            />
            <div className="fav-mic-icons">
               <Fav />
               <Mic />
            </div>
            <div className="fav-mic-icons">
                <Speaker />
                <Random />
            </div>
        </PlayerWrapper>
    );
}

export default Nav;