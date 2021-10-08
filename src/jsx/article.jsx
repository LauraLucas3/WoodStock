import React from 'react';
import ArticleText from './articleText';

function Article (props) {
    return (
        <div className={props.articleDivClass}>
            <img src={props.imageLink} alt={props.imageAlt} className={props.articleImageClassName} />
            <div>
                <ArticleText 
                titleClass={props.titleClass}
                title={props.title}
                textClass={props.textClass}
                text={props.text}
                textDivClass={props.textDivClass}
                />
                <button className="articleButton">{props.buttonMessage}</button>
            </div>
        </div>
        
    )
}

export default Article;