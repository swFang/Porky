import React, { Component } from 'react';
import PurchaseItem from './PurchaseItem';

class PurchaseItemList extends Component {

    render() {
        return ( 
            <div className='PurchaseItemList'> PurchaseItemList
                <PurchaseItem>1</PurchaseItem>
                <PurchaseItem>2</PurchaseItem>
                <PurchaseItem>3</PurchaseItem>
            </div>
        )
    }
}

export default PurchaseItemList;