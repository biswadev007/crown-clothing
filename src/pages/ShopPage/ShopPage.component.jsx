import React from 'react';
import { Route } from "react-router-dom";

import ProductOverview from "../../components/ProductOverview/ProductOverview.component";
import CollectionPage from "../Collection/Collection.component";

const ShopPage = ({match}) => {
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  component={ProductOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )

}


export default ShopPage;