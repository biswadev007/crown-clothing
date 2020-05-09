import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./ProductOverview.style.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import { seleteShopItemsForPriview } from "../../redux/shop/shop.selector";

const ProductOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionPreview}) => (
                    <CollectionPreview key={id} {...otherCollectionPreview} />
                ))
            }
        </div> 
    )
}

const mapStateToProps = createStructuredSelector({
    collections: seleteShopItemsForPriview
})

export default connect(mapStateToProps)(ProductOverview);