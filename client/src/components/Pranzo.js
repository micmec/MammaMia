import React from 'react';
import '../assets/css/main.css'
import '../assets/css/font-awesome.min.css'

//TODO double for quantities

class Pranzo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let newText = this.props.ingredienti.map((item, i) => {
            return <p key={i}>{item}: {this.props.ratio[i]}</p>;
        });

        return <div>
            <article id="first" className="container box style1 right">
                <a onClick={this.props.onClick} className="image fit"><img src={this.props.image} alt=""/></a>
                <div className="inner">
                    <header>
                        <h2>Your Lunch:<br/><br/>
                            {this.props.name}</h2>
                    </header>
                    <p>{newText}</p>
                </div>
            </article>
        </div>
    }
}

export default Pranzo;