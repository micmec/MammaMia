import isEmpty from 'lodash/isEmpty'
import isEmail from 'validator/lib/isEmail'
import equals from 'validator/lib/equals'

export default function validateInput(data) {
    console.log("validating: ", data);

    let errors = {};

    if (!isEmail(data.email)) {
        errors.email = 'Email is required';
    }
    if (!equals(data.password,data.passwordConf)) {
        errors.password = 'Passwords do not match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
