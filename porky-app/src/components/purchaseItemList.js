import React, { Component } from 'react';
import PurchaseItem from './PurchaseItem';

class PurchaseItemList extends Component {

    render() {
        return ( 
            <div className='PurchaseItemList'> 
                <PurchaseItem matured="PurchaseItemMatured">1</PurchaseItem>
                <PurchaseItem matured="PurchaseItemMatured">2</PurchaseItem>
                <PurchaseItem matured="PurchaseItemWaiting">3</PurchaseItem>
            </div>
        )
    }
}

export default PurchaseItemList;