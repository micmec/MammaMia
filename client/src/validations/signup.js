import isEmpty from 'lodash/isEmpty'
import isEmail from 'validator/lib/isEmail'
import equals from 'validator/lib/equals'
import isNum from 'validator/lib/isNumeric'
import PasswordValidator from 'password-validator'

let schema = new PasswordValidator();

schema.is().min(8).is().max(20).has().uppercase().has().lowercase().has().digits().has().not().spaces()

export default function validateInput(data) {
    let errors = {};

    if (!isEmail(data.email)) {
        errors.email = 'Email is required';
    }
    if (!equals(data.password,data.passwordConf)) {
        errors.password = 'Passwords do not match';
    } else {
        if(!schema.validate(data.password, {list: false})){
            errors.password = 'Password needs to be 8-20 characters and needs to contain: upper case, lower case, digits and no spaces';
        }
    }
    if (!isNum(data.bodyWeight)) {
        errors.bodyWeight = 'Not a valid body weight';
    }
    if (!isNum(data.height)) {
        errors.height = 'Not a valid height';
    }
    if (!isNum(data.age)) {
        errors.age = 'Not a valid age';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
