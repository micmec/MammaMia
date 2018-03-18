import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Calculator from './components/Calculator';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

class Main extends React.Component {
    render() {
        return <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignUp}/>

                <Route path="/calculator" component={Calculator}/>
            </div>
        </Router>
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();
