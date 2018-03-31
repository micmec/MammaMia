import React from 'react';
import '../assets/css/main.css'
import '../assets/css/font-awesome.min.css'
import {Link} from 'react-router'
import classnames from 'classnames'
import validateInput from '../validations/signup'
import isNull from 'lodash/isNull'
import TextFieldGroup from './common/TextFieldGroup'
import {browserHistory} from 'react-router'

//TODO logo as header
//TODO Add additional SignUp details
//TODO {1} improve algorithm by adding other features in the signup
//TODO bug fix for span that moves field below
//TODO make red go away when you click the field


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConf: "",
            name: "",
            bodyWeight: "",
            height: "",
            age: "",
            sex: "Male",
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({errors: errors})
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignUpRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: "success",
                        text: "You signed up successfully!"
                    })
                    this.context.router.history.push('/test');
                    this.setState({isLoading: false})
                },
                (err) => {
                    this.setState({errors: err.response.data, isLoading: false})
                }
            );
        }
    }

    render() {
        const {errors} = this.state;
        return <div>
            <article className="container box style3">
                <header>
                    <h2>Get meal suggestions right away!</h2>
                    <p>Type your information below. Our algorithm will suggest you the best meals</p>
                </header>
                <form action={"/calculator"} id={"data"} onSubmit={this.onSubmit}>
                    <div className="row 50%">
                        <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.email})}
                                        error={this.state.errors.email || ""}
                                        classSpan={classnames("label", {"label errorSpan": errors.email})}
                                        field={"email"} value={this.state.email} label={"Email"} type={"text"}
                                        onChange={this.onChange}/>
                        <TextFieldGroup classBox={"text"} classSpan={""} field={"password"} value={this.state.password}
                                        label={"Password"} error={""} type={"password"} onChange={this.onChange}/>
                        <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.password})}
                                        classSpan={classnames("label", {"label errorSpan": errors.password})}
                                        field={"passwordConf"} value={this.state.passwordConf}
                                        label={"Confirm Password"} error={this.state.errors.password || ""} type={"password"}
                                        onChange={this.onChange}/>
                        <TextFieldGroup classBox={"text"} classSpan={""} field={"name"} value={this.state.name}
                                        label={"Name"} error={""} type={"text"} onChange={this.onChange}/>
                        <TextFieldGroup classBox={"text"} classSpan={""} field={"bodyWeight"}
                                        value={this.state.bodyWeight} label={"Body-Weight"} error={""} type={"text"}
                                        onChange={this.onChange}/>
                        <TextFieldGroup classBox={"text"} classSpan={""} field={"height"} value={this.state.height}
                                        label={"Height"} error={""} type={"text"} onChange={this.onChange}/>
                        <TextFieldGroup classBox={"text"} classSpan={""} field={"age"} value={this.state.age}
                                        label={"Age"} error={""} type={"text"} onChange={this.onChange}/>
                        <div className="6u$ 12u$(mobile)">
                            <select value={this.state.sex} onChange={this.onChange} name={"sex"} form={"data"} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="12u$" style={{"margin": "40px 0 5px"}}>
                        <ul className="actions" style={{"text-decoration": "none"}}>
                            <input type="submit" disabled={this.state.isLoading} value="Calculate"/>
                        </ul>
                    </div>
                </form>
            </article>
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

SignUp.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired,
    addFlashMessage  : React.PropTypes.func.isRequired
};

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default SignUp;