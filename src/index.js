import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App';
import Calculator from '../client/components/Calculator';
import SignUpPage from '../client/components/SignUpPage';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import registerServiceWorker from '../client/registerServiceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'


//TODO reinvent logic using routing
//TODO remove HTML5up and use semantic-ui

class Main extends React.Component {
    render() {
        return <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/calculator" component={Calculator}/>
            </div>
        </Router>
    }
}

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
