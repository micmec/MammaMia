import React from 'react'

class TextFieldGroup extends React.Component {

    render() {
        return (
            <div className="6u 12u$(mobile)"><input required value={this.props.value}
                                                    onChange={this.props.onChange} type={this.props.type}
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
    onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
    type: "text"
}

export default TextFieldGroup;