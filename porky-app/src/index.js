import React, { Component } from 'react';
import EmbeddedApp from './components/EmbeddedApp';
import ReactDOM from 'react-dom';
import  NavigationBar  from './components/NavigationBar';
import './styling/EmbeddedApp.css';

class App extends Component {

    render() {
        return ( 
            <div id="root">
                <NavigationBar> </NavigationBar>
                <EmbeddedApp className='app'>
                    App
                </EmbeddedApp>
            </div>
        )
    }

}   

ReactDOM.render(
    // <h1>Hello, world!</h1>,
    <App></App>,
     document.getElementById('root')
);