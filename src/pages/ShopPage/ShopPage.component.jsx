import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import ProductOverview from "../../components/ProductOverview/ProductOverview.component";
import CollectionPage from "../Collection/Collection.component";
import WithSpinner from "../../components/WithSpinner/WithSpinner.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateShopData } from "../../redux/shop/shop.action";

const ProductOverviewWithSpinner = WithSpinner(ProductOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }
    unsubscribeFromAuth = null;
    
    componentDidMount(){
        const { updateShop } = this.props; 
        const collectionRef = firestore.collection('collection');
        this.unsubscribeFromAuth = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateShop(collectionMap);
            this.setState({
                loading: false
            })
        })
    }

    render(){
    const { match } = this.props;
    const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  render={props => <ProductOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateShop: collectionMap=> dispatch(updateShopData(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);