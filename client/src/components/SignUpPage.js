import React from 'react';
import '../assets/css/main.css';
import '../assets/css/font-awesome.min.css';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../actions/signupActions';
import { addFlashMessage } from "../actions/flashMessages";

//TODO logo as header
//TODO Add additional SignUp details

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { userSignUpRequest , addFlashMessage} = this.props;

        return <SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}/>
    }
}

SignUpPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired,
    addFlashMessage  : React.PropTypes.func.isRequired

};

export default connect(null , {userSignUpRequest, addFlashMessage}) (SignUpPage);