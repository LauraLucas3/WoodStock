import React from 'react';
import wood from '../img/WOOD.png';

class Footer extends React.Component {
    render() {
        return(
            <footer className="woodFooter">
                <svg className="footerRectangle" height="11" width="166" fill="#BC9A44">
                    <rect x="0" y="0" width="166" height="11" />
                </svg>
                <img src={wood} className="woodFooterTitle" alt="wood title" />
            </footer>
        )
    }
}

export default Footer;