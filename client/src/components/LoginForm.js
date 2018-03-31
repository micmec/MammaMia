import React from 'react'
import TextFieldGroup from './common/TextFieldGroup'
import validateInput from "../validations/login";
import classnames from 'classnames';
import {connect} from 'react-redux';
import {login} from '../actions/login'

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state)

        console.log(isValid)

        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.login(this.state).then(
                (res) => {
                    const {name, bodyWeight, height, age, sex} = res.data;
                    this.context.router.history.push(`/calculator?name=${name}&&bodyWeight=${bodyWeight}&&height=${height}&&age=${age}&&sex=${sex}`);
                },
                (err) => {
                    this.setState({errors: err.response.data.errors, isLoading: false})
                }
            )
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {identifier, errors, password, isLoading} = this.state
        return (
            <form onSubmit={this.onSubmit} className={'loginForm'}>
                <div className="row 50%">

                    {errors.form && <div className={'alert alert-danger myAlert'}>{errors.form}</div>}
                    <TextFieldGroup isLast={false} classBox={classnames("text", {"text errorBox": errors.identifier})}
                                    field={"identifier"} value={identifier}
                                    label={"Email"}
                                    classSpan={classnames("label", {"label errorSpan": errors.identifier})}
                                    error={errors.identifier} type={"text"} onChange={this.onChange}/>
                    <TextFieldGroup isLast={true} classBox={"text"} field={"password"} value={password}
                                    label={"Password"}
                                    error={errors.password} type={"password"} onChange={this.onChange}/>
                    <div className="12u$" style={{'width': '100%'}}>
                        <ul className="actions" style={{"text-decoration": "none"}}>
                            <input type="submit" disabled={isLoading} value="Log In"/>
                        </ul>
                    </div>
                </div>
            </form>
        )
    }

}

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm)