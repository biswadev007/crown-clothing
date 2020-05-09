import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.style.scss';
import MenuItems from '../MenuItems/MenuItems.component';
import { selectDirectoryItems } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
        return (
            <div className='directory-menu'>
                { 
                    sections.map(({ title, id, imgUrl, size, linkUrl }) =>( 
                    <MenuItems key={ id } title={ title } imgUrl={ imgUrl } size={ size } linkUrl={linkUrl} />
                    )) 
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    sections : selectDirectoryItems
})

export default connect(mapStateToProps)(Directory);