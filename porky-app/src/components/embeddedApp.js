import React, { Component } from 'react';

import  bottomButtonArea  from './bottomButtonArea';
import  headsUpDisplay  from './headsUpDisplay';
import  navigationBar  from './navigationBar';
import  purchaseItemList  from './purchaseItemList';

class embeddedApp extends Component {

    render() {
        return ( 
            <div className='embeddedApp'> 
                <navigationBar></navigationBar>
                <headsUpDisplay></headsUpDisplay>
                <purchaseItemList></purchaseItemList>
                <bottomButtonArea></bottomButtonArea>
            </div>
        )
    }
}

export default embeddedApp;