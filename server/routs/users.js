import express from 'express'
import commonValidations from '../validations/signup'
import bcrypt from 'bcrypt'
import User from '../models/user'
import isEmpty from 'lodash/isEmpty'

let router = express.Router();

function validateInput(data, otherValidations) {

    let {errors} = otherValidations(data);

    return User.query({
        where: { email: data.email }
    }).fetch().then(user => {
        if(user){
            if(user.get('email') === data.email){
                errors.email = 'This email is already used.'
            }
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }
    })
}

router.get('/:identifier', (req, res) => {
     User.query({
         select: ['email'],
         where: {email: req.params.identifier}
     }).fetch().then((user) => {
         res.json({user} )
     })
})

router.post('/', function (req, res) {
    validateInput(req.body, commonValidations).then(({errors, isValid}) => {
        if (!isValid) {
            res.status(400).json(errors);
        } else {
            const {email, password, name, bodyWeight, height, age, sex} = req.body;
            const password_digest = bcrypt.hashSync(password, 10);

            User.forge({
                email, password_digest, name, bodyWeight, height, age, sex
            }, {hasTimestamps: true}).save()
                .then(user => res.json({success: true}))
                .catch(err => res.status(500).json({error: err}))
        }
    });
});

export default router;