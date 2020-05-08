import React from 'react';

import './item.styles.scss';

const Item = ({ title, imageUrl, size }) => {
    return (
        <div className={`item ${size}`}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase() }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default Item;