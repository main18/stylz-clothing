import React from 'react';
import './homepage.styles.scss';
import ItemContainer from '../components/item-container/item-container.component';

const HomePage = () => {
    return(
        <div className='homepage'>
            <ItemContainer/>
        </div>
    );
}

export default HomePage;