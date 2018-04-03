import express from 'express'
import User from '../models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'

let router = express.Router()

router.post('/', (req, res) => {
    const {identifier, password} = req.body;

    User.query({
        where: {email: identifier}
    }).fetch().then(user => {
        if (user) {
            if (bcrypt.compareSync(password, user.get('password_digest'))) {
                const token = jwt.sign({
                    id: user.get('id'),
                    email: user.get('email'),
                    name: user.get('name'),
                    bodyWeight: user.get('bodyWeight'),
                    height: user.get('height'),
                    age: user.get('age'),
                    sex: user.get('sex')
                }, config.jwtSecret);
                res.json({token})
            } else {
                res.status(401).json({errors: {form: 'Invalid credentials'}})
            }
        } else {
            res.status(401).json({errors: {form: 'Invalid credentials'}})
        }
    })
});

export default router;