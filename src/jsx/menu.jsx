import React from 'react';
import menuImg from '../img/menuImg.png';

class Menu extends React.Component {
    render () {
        return (
            <div>
                <label htmlFor="menu-cb" className="menu-label">
                    <img src={menuImg} id="menuImg" alt="menu" />
                </label>
                <input id="menu-cb" className="menu-cb" name="menu-cb" type="checkbox" />
            </div>
        )
    }
}

export default Menu;