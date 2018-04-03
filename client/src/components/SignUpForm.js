import React from 'react';
import '../assets/css/main.css'
import '../assets/css/font-awesome.min.css'
import classnames from 'classnames'
import validateInput from '../validations/signup'
import TextFieldGroup from './common/TextFieldGroup'
import jwt from 'jsonwebtoken'

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
            isLoading: false,
            invalid: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
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
                    });
                    window.scrollTo(0,0)
                    this.context.router.history.push('/login');
                    this.setState({isLoading: false})
                },
                (err) => this.setState({errors: err.response.data, isLoading: false})
            );
        }
    }

    checkUserExists(e) {
        const field = e.target.name;
        const value = e.target.value;
        if (value !== '') {
            this.props.isUserExists(value).then(res => {
                    let errors = this.state.errors;
                    let invalid;
                    console.log("Responded")
                    if (res.data.user !== null) {
                        console.log("FOUND!")
                        errors[field] = `This ${field} is already used.`;
                        invalid = true
                    } else {
                        console.log("NOT FOUND!")
                        errors[field] = '';
                        invalid = false
                    }
                    this.setState({
                        errors,
                        invalid
                    })
                }
            )
        }

    }

    render() {
        const {errors} = this.state;
        return (
            <form action={"/calculator"} id={"data"} onSubmit={this.onSubmit}>
                <div className="row 50%">
                    <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.email})}
                                    error={this.state.errors.email || ""}
                                    classSpan={classnames("label", {"label errorSpan": errors.email})}
                                    field={"email"} value={this.state.email} label={"Email"} type={"text"}
                                    onChange={this.onChange}
                                    isLast={false}
                                    checkUserExists={this.checkUserExists}/>
                    <TextFieldGroup classBox={"text"} classSpan={""} field={"password"} value={this.state.password}
                                    label={"Password"} error={""} type={"password"} onChange={this.onChange}
                                    isLast={false}/>
                    <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.password})}
                                    classSpan={classnames("label", {"label errorSpan": errors.password})}
                                    field={"passwordConf"} value={this.state.passwordConf}
                                    isLast={false}
                                    label={"Confirm Password"} error={this.state.errors.password || ""}
                                    type={"password"}
                                    onChange={this.onChange}/>
                    <TextFieldGroup classBox={"text"} classSpan={""} field={"name"} value={this.state.name}
                                    label={"Name"} error={""} type={"text"} onChange={this.onChange}
                                    isLast={false}/>
                    <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.bodyWeight})}
                                    classSpan={classnames("label", {"label errorSpan": errors.bodyWeight})}
                                    field={"bodyWeight"}
                                    value={this.state.bodyWeight} label={"Body-Weight"}
                                    error={this.state.errors.bodyWeight || ""} type={"text"}
                                    isLast={false}
                                    onChange={this.onChange}/>
                    <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.height})}
                                    classSpan={classnames("label", {"label errorSpan": errors.height})}
                                    field={"height"} value={this.state.height}
                                    label={"Height"} error={this.state.errors.height || ""} type={"text"}
                                    onChange={this.onChange}
                                    isLast={false}/>
                    <TextFieldGroup classBox={classnames("text", {"text errorBox": errors.age})}
                                    classSpan={classnames("label", {"label errorSpan": errors.age})}
                                    field={"age"} value={this.state.age}
                                    label={"Age"} error={this.state.errors.age || ""} type={"text"}
                                    onChange={this.onChange}
                                    isLast={true}/>
                    <div className="6u$ 12u$(mobile)">
                        <select value={this.state.sex} onChange={this.onChange} name={"sex"} form={"data"} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="12u$" style={{"margin": "40px 0 5px"}}>
                    <ul className="actions" style={{"text-decoration": "none"}}>
                        <input type="submit" disabled={this.state.isLoading || this.state.invalid} value="Sign Up"/>
                    </ul>
                </div>
            </form> )

    }
}

SignUp.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
};

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default SignUp;