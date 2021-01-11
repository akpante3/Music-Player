import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { ReactComponent as ForwardArrow } from '../../icons/forward-arrow.svg';
import { ReactComponent as BackwardArrow } from '../../icons/backward-arrow.svg';
import './Slider.css';
 
// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >
      <div className="menu-item__item">
        <img className="menu-item__image"  src='https://media.pitchfork.com/photos/595be1315cb95824879c1534/1:1/w_320/444_jayz.png' />
        <div className="menu-item__title">Stupid Love</div>
        <div className="menu-item__artist">Jay Z</div>
        <div className="menu-item__realese-date">Released 28.03.2020</div>
      </div>
    </div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
const handleArrowClick = () => {
  const select = document.getElementsByClassName('menu-wrapper--inner')
  const csstext =  select[0].style.cssText
  const index = csstext.indexOf('3d(')
  const translateFigure = select[0].style.cssText.substring(index + 3).split(',')[0].replace('px', '')
  if (Number(translateFigure) > 60) {
    select[0].style.cssText = csstext.replace( `translate3d(${ translateFigure }px, 0px, 0px)`, 'translate3d(0px, 0px, 0px)')
  }
}
 
const Arrow = ({ text, className }) => {
  return (
    <img
      onClick={ () => handleArrowClick() }
      src={ text } 
      className={ className }
    />
  );
};
 
 
const ArrowLeft = Arrow({ text: require('../../icons/backward-arrow.svg'), className: 'arrow-prev' });
const ArrowRight = Arrow({ text: require('../../icons/forward-arrow.svg'), className: 'arrow-next' });
 
const selected = 'item7';
 
export default class Slide extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
   
  componentDidMount () {
    setInterval(() => handleArrowClick(), 1000)
  }
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
    handleArrowClick()
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}