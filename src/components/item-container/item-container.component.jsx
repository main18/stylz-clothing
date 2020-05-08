import React from 'react';
import Item from '../item/item.component';
import './item-container.styles.scss';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='items-container'>
                {this.state.sections.map((section) => {
                    return (<Item key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size}/>)
                })}
            </div>
        );
    }
}

export default ItemContainer;