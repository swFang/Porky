import React, { Component } from 'react';
import { embeddedApp } from './components/embeddedApp';
class App extends Component {

    render() {
        return ( 
            <div className='app'>
                <embeddedApp></embeddedApp>
            </div>
        )
    }
}

export default App;