import React from 'react';
import '../assets/css/main.css'
import {Link} from 'react-router'
import '../assets/css/font-awesome.min.css'

class Extra extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let newText1, newText2;
        if (this.props.mainIngredient1.constructor === Array) {
            newText1 = this.props.mainIngredient1.map((item, i) => {
                return <p key={i}>{item}</p>;
            });
        }
        else if (this.props.mainIngredient1.isEmpty()) {
            newText1 = <p>N404</p>
        }
        else {
            newText1 = <p>{this.props.mainIngredient1}</p>
        }

        if (this.props.mainIngredient2.constructor === Array) {
            newText2 = this.props.mainIngredient2.map((item, i) => {
                return <p key={i}>{item}</p>;
            });
        }
        else if (this.props.mainIngredient2.isEmpty()) {
            newText2 = <p>N404</p>
        }
        else {
            newText2 = <p>{this.props.mainIngredient2}</p>
        }


        return <div>
            <article className="container box style2">
                <header>
                    <h2>Save the planet (and your money!)</h2>
                    <p>Here at TeamSix, we care about you so we have decided <br/>
                        to help you use some of the ingredients you already bought:<br/>
                        {newText1}{newText2}
                    </p>
                </header>
            </article>
        </div>
    }
}

export default Extra;