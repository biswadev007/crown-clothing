import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ProductOverview from "../../components/ProductOverview/ProductOverview.component";
import CollectionPage from "../Collection/Collection.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateShopData } from "../../redux/shop/shop.action";

class ShopPage extends React.Component{
    unsubscribeFromAuth = null;
    
    componentDidMount(){
        const { updateShop } = this.props; 
        const collectionRef = firestore.collection('collection');
        this.unsubscribeFromAuth = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateShop(collectionMap);
        })
    }

    render(){
    const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  component={ProductOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateShop: collectionMap=> dispatch(updateShopData(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);