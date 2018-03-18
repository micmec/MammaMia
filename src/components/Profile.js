import React from 'react';
import '../assets/css/main.css'
import '../assets/css/font-awesome.min.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div>
            <section id="banner">
                <header>
                    <h2>Hello {this.props.name}</h2>
                </header>
                <p>Our algorithm calculated that you should consume<p/>Lunch: {Math.floor(this.props.cal1)} kcal<p/>Dinner: {Math.floor(this.props.cal2)} kcal<p/>
                Here you can find exclusive suggestions, tailored to your unique characteristics.</p>
                <footer>
                    <a href="#first" className="button style2 scrolly">See your meals</a>
                </footer>
                <footer>
                    <a href="/" className="button style2 scrolly">Home</a>
                </footer>
            </section>
        </div>
    }
}

export default Profile;