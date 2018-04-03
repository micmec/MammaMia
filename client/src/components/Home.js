import React from 'react';
import Header from './Header.js';

//TODO create a better background

class App extends React.Component{
    constructor(props){
        super(props);

        
    }

    render(){

        return <div id="mainWrapper" style={{'background-image': 'url(./bg-main.jpg)', 'background-repeat': 'no-repeat', 'background-size': 'cover'}}>
            <Header/>
        </div>
    }
}

export default App;