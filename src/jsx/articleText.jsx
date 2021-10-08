import React from 'react';

function ArticleText (props) {
    return (
        <div className={props.textDivClass}>
            <h2 className={props.titleClass}>{props.title}</h2>
            <p className={props.textClass}>{props.text}</p>
        </div>
    )
}

export default ArticleText;