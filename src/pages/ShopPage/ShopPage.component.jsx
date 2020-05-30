import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching, selectCollectionLoading } from "../../redux/shop/shop.selector";
import ProductOverview from "../../components/ProductOverview/ProductOverview.component";
import CollectionPage from "../Collection/Collection.component";
import WithSpinner from "../../components/WithSpinner/WithSpinner.component";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";

const ProductOverviewWithSpinner = WithSpinner(ProductOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }
    unsubscribeFromAuth = null;
    
    componentDidMount(){
        const { fetchCollectionStartAsync } = this.props; 
        fetchCollectionStartAsync();
    }

    render(){
    const { match, isCollectionFetching, selectCollectionLoading } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  render={props => <ProductOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!selectCollectionLoading} {...props} /> } />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    selectCollectionLoading: selectCollectionLoading
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);