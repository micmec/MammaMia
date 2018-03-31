import React from 'react'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {

    render() {
        return (
            <div>
                <article className="container box style3">
                    <header>
                        <h2>Welcome back!</h2>
                        <p>Log In to get new exciting recipes</p>
                    </header>
                    <LoginForm/>
                </article>
                <article className="container box style2"><header><h1>Not a member? <a href={'/signup'} style={{'border-bottom':'none !important'}}>Sign up</a></h1></header></article>
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
        )
    }

}

export default LoginPage