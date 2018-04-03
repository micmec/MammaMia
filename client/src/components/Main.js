import React from 'react'
import FlashMessagesList from './flash/FlashMessagesList'
import LoginPage from './LoginPage'
import {connect}from 'react-redux'
import Home from './Home';
import Calculator from './Calculator';
import SignUpPage from './SignUpPage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {browserHistory} from 'react-router'
import { logout } from '../actions/authActions'
import Promise from 'bluebird'

let isTrue;

class Main extends React.Component {

    componentDidMount(){
        isTrue = true
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            children: nextProps.children
        });
    }

    logout(e){
        e.preventDefault();
        new Promise(this.props.logout).then(
            window.location.reload()
        );
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        return <Router>
            <div>
                <FlashMessagesList/>
                {(isAuthenticated ) && <a href={"#"} className={"topButton"} onClick={this.logout.bind(this)}>Logout</a>}
                <Route exact path="/" component={!isAuthenticated ? Home : Calculator}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/login" component={LoginPage}/>
            </div>
        </Router>
    }
}

Main.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(Main);