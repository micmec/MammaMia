import React from 'react';
import '../assets/css/main.css'
import {Link} from 'react-router'
import '../assets/css/font-awesome.min.css'

//TODO login

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <section id="header">
                <header className={"boxM effect1"}>
                    <h1>MammaMia</h1>
                </header>
                <div className="12u$" style={{"direction":"row"}}>
                    <ul className="actions">
                        <Link href={"/login"}><input type="submit" value="Log In"/></Link>
                    </ul>
                    <ul className="actions">
                        <Link href={"/signup"}><input type="submit" value="Sign up"/></Link>
                    </ul>
                </div>
            </section>
        </div>
    }
}

export default Header;