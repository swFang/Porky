import React, { Component } from 'react';
import BottomButtonArea from './BottomButtonArea';
import  HeadsUpDisplay  from './HeadsUpDisplay';
import  NavigationBar  from './NavigationBar';
import  PurchaseItemList  from './PurchaseItemList';

class EmbeddedApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div className='embeddedApp'> 
                EmbeddedApp
                <BottomButtonArea> </BottomButtonArea>
                <HeadsUpDisplay> </HeadsUpDisplay>
                <NavigationBar> </NavigationBar>
                <PurchaseItemList> </PurchaseItemList>
            </div>
        );
    }
}

export default EmbeddedApp;