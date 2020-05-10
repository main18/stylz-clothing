import React from 'react';
import { withRouter } from 'react-router-dom';

import './item.styles.scss';

const Item = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div
            //${match.url}${linkUrl} === somematchedURL/linkURL
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            className={`item ${size}`}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(Item);