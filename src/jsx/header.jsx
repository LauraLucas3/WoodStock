import React from 'react';
import Logo from './logo';

class Header extends React.Component {
    render() {
        return (
            <div className="woodHeader">
                <Logo classImg="logoFirstSize" />
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Furnitures</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Header;