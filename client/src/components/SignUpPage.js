import React from 'react';
import '../assets/css/main.css';
import '../assets/css/font-awesome.min.css';
import SignUpForm from './SignUpForm';
import {connect} from 'react-redux';
import {userSignUpRequest, isUserExists} from '../actions/signupActions';
import {addFlashMessage} from "../actions/flashMessages";


//TODO logo as header
//TODO Add additional SignUp details

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {userSignUpRequest, addFlashMessage, isUserExists} = this.props;

        return <div>
            <article className="container box style3">
            <header>
                <h2>Get meal suggestions right away!</h2>
                <p>Type your information below. Our algorithm will suggest you the best meals</p>
            </header>
            <SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}
                        isUserExists={isUserExists}/>
            </article>
            <article className="container box style2"><header><h1>Already a member? <a href={'/login'} style={{'border-bottom':'none !important'}}>Log In</a></h1></header></article>
            <section id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
                    <li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
                    <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                    <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <div className="copyright">
                    <ul className="menu">
                        <li>&copy; TeamSix. All rights reserved.</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </section>
        </div>
    }
}

SignUpPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
};

export default connect(null, {userSignUpRequest, addFlashMessage, isUserExists})(SignUpPage);