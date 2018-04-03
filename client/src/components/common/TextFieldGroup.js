import React from 'react'
import isNumber from 'validator/lib/isNumeric'


let isRegularComponent;

class TextFieldGroup extends React.Component {

    render() {
        const {isLast} = this.props;
        let classDiv = "6u 12u$(mobile)";
        if(isLast !== null && !isLast){
            classDiv = "6u$ 12u$(mobile)"
        }
        return (
            <div className={classDiv} style={{'width':'100%'}}><input required value={this.props.value}
                                                    onChange={this.props.onChange} type={this.props.type}
                                                    onBlur={this.props.checkUserExists}
                                                    className={this.props.classBox}
                                                    name={this.props.field}
                                                    placeholder={this.props.label}/>
                {this.props.error && <span className={this.props.classSpan}>{this.props.error}</span>}
            </div>
        )
    }

}

TextFieldGroup.propTypes = {
    classBox: React.PropTypes.string.isRequired,
    classSpan: React.PropTypes.string.isRequired,
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    checkUserExists: React.PropTypes.func.isRequired,
    isLast: React.PropTypes.bool.isRequired
};

TextFieldGroup.defaultProps = {
    type: "text"
}

export default TextFieldGroup;