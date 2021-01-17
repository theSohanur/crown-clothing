import React, { Component } from 'react';

import ShopData from '../data/shop.data';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.component';


class Shop extends Component {

    constructor(){
        super();
        this.state = {
            collections : ShopData
        }
    }
    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map( ({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))

                }
            </div>
        )
    }
}

export default Shop
