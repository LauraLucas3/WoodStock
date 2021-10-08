import React from 'react';
import articleImage1 from '../img/image 2.1.png';
import articleImage2 from "../img/wood-restaurant.png";
import Article from './article';

class Articles extends React.Component {
    render() {
        return(
            <div>
                <svg className="button1" height="2" width="151" fill="#000">
                    <rect x="0" y="0" width="151" height="2" />
                </svg>
                <Article 
                    articleDivClass = "article1"
                    textDivClass = "articleText1"
                    imageLink = {articleImage1}
                    imageAlt = "about us"
                    articleImageClassName = "articleImage1"
                    titleClass = "articleTitle"
                    title = "ABOUT US"
                    textClass = "articleText"
                    text = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
                    buttonMessage = "LEARN MORE"
                />
                <svg className="button2" height="2" width="151" fill="#000">
                    <rect x="0" y="0" width="151" height="2" />
                </svg>
                <Article 
                    articleDivClass = "article2"
                    textDivClass = "articleText2"
                    imageLink = {articleImage2}
                    imageAlt = "shop"
                    articleImageClassName = "articleImage2"
                    titleClass = "articleTitle"
                    title = "SHOP"
                    textClass = "articleText"
                    text = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"
                    buttonMessage = "GO SHOPPING"
                />
            </div>
        )
    }
}

export default Articles;