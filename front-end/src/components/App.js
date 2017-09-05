import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../styles/App.css'
import ControlPanel from './ControlPanel'
import ContentWindow from './ContentWindow'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Route path="/" render={({ history }) => (
                    <div>
                        <ControlPanel
                        ></ControlPanel>
                        <ContentWindow
                        ></ContentWindow>
                    </div>
                )}/> 
            </div>
        );
    }
}

export default App
