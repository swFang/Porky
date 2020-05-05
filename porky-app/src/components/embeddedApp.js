import React, { Component } from 'react';
import BottomButtonArea from './BottomButtonArea';
import  HeadsUpDisplay  from './HeadsUpDisplay';
import  PurchaseItemList  from './PurchaseItemList';
import '../styling/EmbeddedApp.css';

class EmbeddedApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className='embeddedApp'> 
                <HeadsUpDisplay> </HeadsUpDisplay>
                <PurchaseItemList> </PurchaseItemList>
                <BottomButtonArea> </BottomButtonArea>
            </div>
        );
    }
}

export default EmbeddedApp;