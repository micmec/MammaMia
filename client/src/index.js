import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Calculator from './components/Calculator';
import SignUpPage from './components/SignUpPage';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {browserHistory} from 'react-router'
import rootReducer from './rootReducer'
import FlashMessagesList from './components/flash/FlashMessagesList'

//TODO reinvent logic using routing
//TODO remove HTML5up and use semantic-ui
//TODO learn how to make automatic refreshing

class Main extends React.Component {
    render() {
        return <Router>
            <div>
                <FlashMessagesList/>
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/calculator" component={Calculator}/>
            </div>
        </Router>
    }
}

const middleware = routerMiddleware(browserHistory)
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
