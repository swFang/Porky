import React, { Component } from 'react';
import { purchaseItem } from './purchaseItem';

class purchaseItemList extends Component {

    render() {
        return ( 
            <div className='purchaseItemList'> purchaseItemList
                <purchaseItem>1</purchaseItem>
                <purchaseItem>2</purchaseItem>
                <purchaseItem>3</purchaseItem>
            </div>
        )
    }
}

export default purchaseItemList;