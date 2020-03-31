import React, { Component } from 'react';
import EmbeddedApp from './components/EmbeddedApp';

class App extends Component {

    render() {
        return ( 
            <EmbeddedApp className='app'>
                App
            </EmbeddedApp>
        )
    }
}

export default App;