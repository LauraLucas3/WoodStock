import React from 'react';
import Logo from './logo';
import teamImage from '../img/image.png';
import ArticleText from './articleText';

class Team extends React.Component {
    render() {
        return (
            <div className="teamDiv">
                <Logo classImg="logoSecondSize" />
                <svg className="teamBackgroundRectangle" width="382" height="811" fill="rgba(188, 154, 68, 0.55)">
                    <rect x="0" y="0" width="382" height="811" />
                </svg>
                <img src={teamImage} alt="team image" className="teamImage" />
                <div className="teamTitleCase"> 
                    <h2 className="teamTitle">CREATIVE TEAM</h2>
                </div>
                <ArticleText 
                    textDivClass="article3"
                    titleClass="teamArticleTitle"
                    title="GOOG MINDSET"
                    textClass="teamArticleText"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                />
                <svg className="button3" height="2" width="151" fill="#fff">
                    <rect x="0" y="0" width="151" height="2" />
                </svg>
                <button className="articleButton">Meat the team</button>
            </div>
        )
    }
}

export default Team;