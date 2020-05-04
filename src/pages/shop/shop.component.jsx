import React from 'react'

import './shop.styles.scss'

import CollectionOverview from '../../components/collections-overview/collections-overview';

import CollectionPage from '../collection/collection.componet';

import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
    
    // <div className='shop-page'>
    //     {collection.map(({ id, ...otherCollectionProps }) => (
    //         <CollectionPreview key={id} {...otherCollectionProps} />
    //     ))
    //     }
    // </div>
)

export default ShopPage;


