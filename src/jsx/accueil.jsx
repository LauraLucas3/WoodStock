import React from 'react';
import woodLeft from '../img/wood-left.png';
import woodRight from '../img/wood-right.png';
import Menu from './menu';
import Header from './header';
import woodTitle from '../img/WOOD STOCK.png';

class Accueil extends React.Component {
    render() {
      return (
        <div className="accueil">
          <svg className="backgroundRectangle" height="704" fill="rgba(0, 0, 0, 0.8)">
            <rect x="0" y="0" width="100%" height="704" />
          </svg>
          <Header />
          <Menu />
          <div className="titleBox">
            <svg className="titleRectangle" height="8" width="115" fill="#BC9A44">
              <rect x="0" y="0" width="115" height="8" />
            </svg>
            <img src={woodTitle} className="woodTitle" alt="wood title" />
          </div>
          <img src={woodLeft} className="wood-left" alt="wood-left-background" />
          <img src={woodRight} className="wood-right" alt="wood-right-background" />
        </div>
      )
    }
  }

export default Accueil;