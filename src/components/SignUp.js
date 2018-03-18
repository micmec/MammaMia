import React from 'react';
import '../assets/css/main.css'
import '../assets/css/font-awesome.min.css'
import {Link} from 'react-router'

//TODO logo as header

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <article className="container box style3">
                <header>
                    <h2>Get meal suggestions right away!</h2>
                    <p>Type your information below. Our algorithm will suggest you the best meals</p>
                </header>
                <form method={"get"} action={"/calculator"} id={"data"}>
                    <div className="row 50%">
                        <div className="6u 12u$(mobile)"><input required type="text" className="text" name="name" placeholder="Name" /></div>
                        <div className="6u$ 12u$(mobile)"><input required type="text" className="text" name="bodyweight" placeholder="Body-weight (Kg)" /></div>
                        <div className="6u$ 12u$(mobile)"><input required type="text" className="text" name="height" placeholder="Height (cm)" /></div>
                        <div className="6u$ 12u$(mobile)"><input required type="text" className="text" name="age" placeholder="Age" /></div>
                        <div className="6u$ 12u$(mobile)">
                        <select name={"sex"} form={"data"} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>]
                        </select></div>
                    </div>
                    <Link href={"/calculator"} style={{"text-decoration":"none"}}><div className="12u$" style={{"margin": "40px 0 5px"}}>
                        <ul className="actions" style={{"text-decoration":"none"}}>
                            <input type="submit" value="Calculator"/>
                        </ul>
                    </div></Link>
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
                        <li>&copy; TeamSix. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </section>
        </div>
    }
}

export default SignUp;