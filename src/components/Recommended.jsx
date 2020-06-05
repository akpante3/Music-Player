import React from 'react';
import styled from 'styled-components'
import { HeaderText } from '../utils/text';



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
    margin-bottom: 10px;
    .explore_img {
        width: 70px;
        height: 70px;
    }
`;

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

const Arrow = ({ text, className }) => {
    return (
      <img
        // onClick={ () => handleArrowClick() }
        alt="arrow"
        src={text}
        className={className}
      />
    );
  };
   
   
  const ArrowLeft = () => (<img alt="arrow" src={require('../icons/forward-arrow.svg')} className="" />)
  const ArrowRight = Arrow({ text: require('../icons/forward-arrow.svg'), className: 'arrow-next' });

const Explore = () => {
    return (
       <Main>
           <MainHeader>
                  <HeaderText>
                      Recommended songs
                  </HeaderText>
                  <div>
                      {/* <ArrowLeft />
                      <ArrowRight /> */}
                  </div>
           </MainHeader>
           <ItemWrapper>
                <Item>
                    <img className="explore_img"  src='https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png' />
                    <ItemDesc>
                        <div className="item-name">Me Neigh</div>
                        <div className="item-artist">Me Neigh</div>
                    </ItemDesc>
                </Item>
                <Item>
                    <img className="explore_img"  src='https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png' />
                    <ItemDesc>
                        <div className="item-name">Me Neigh</div>
                        <div className="item-artist">Me Neigh</div>
                    </ItemDesc>
                </Item>
                <Item>
                    <img className="explore_img"  src='https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png' />
                    <ItemDesc>
                        <div className="item-name">Me Neigh</div>
                        <div className="item-artist">Me Neigh</div>
                    </ItemDesc>
                </Item>
                <Item>
                    <img className="explore_img"  src='https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png' />
                    <ItemDesc>
                        <div className="item-name">Me Neigh</div>
                        <div className="item-artist">Me Neigh</div>
                    </ItemDesc>
                </Item>
           </ItemWrapper>
       </Main>
    );
}

export default Explore;