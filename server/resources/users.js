import express from 'express'
import validateInput from '../validations/signup'
import bcrypt from 'bcrypt'

let router = express.Router();

import User from '../models/user'

router.post('/', function (req, res) {
    const {errors, isValid} = validateInput(req.body);

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

export default router;