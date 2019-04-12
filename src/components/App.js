import React, { Component } from 'react';
import MusicMain from './MusicMain';
import './App.css';



class App extends Component {
    render() {
        console.log('this.state ', this.state)
        return (
            <div className='App'>
                <h3>Music Search</h3>
                <MusicMain />
            </div>
        );
    }
}

export default App;