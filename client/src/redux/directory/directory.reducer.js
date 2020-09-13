const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'hats',
            imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'shop/hats'
        },
        {
            id: 2,
            title: 'jackets',
            imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'shop/jackets'
        },
        {
            id: 3,
            title: 'sneakers',
            imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: 'shop/sneakers'
        },
        {
            id: 4,
            title: 'womens',
            imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            id: 5,
            title: 'mens',
            imgUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
            size: 'large',
            linkUrl: 'shop/mens'
        }
    ]
}

export const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state
    }
}