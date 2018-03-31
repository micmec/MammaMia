import isEmpty from 'lodash/isEmpty'
import isEmail from 'validator/lib/isEmail'

export default function validateInput(data) {
    let errors = {};

    if(!isEmail(data.identifier)){
        errors.identifier = 'This is not a correct email'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}