import React, { Component } from 'react';
import './Directory.style.scss';

import MenuItems from '../MenuItems/MenuItems.component';

class Directory extends Component {
    constructor(){
        super()
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'womens',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'mens',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                    size: 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                { 
                    this.state.sections.map(({ title, id, imgUrl, size }) =>( 
                    <MenuItems key={ id } title={ title } imgUrl={ imgUrl } size={ size } />
                    )) 
                }
            </div>
        )
    }
}

export default Directory;