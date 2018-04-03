import express from 'express'
import commonValidations from '../validations/signup'
import bcrypt from 'bcrypt'
import User from '../models/user'
import isEmpty from 'lodash/isEmpty'
import bodyParser from 'body-parser'
const Knex = require('knex');

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

// function createTableHere(config) {
//     // Connect to the database
//     const knex = Knex({ client: 'pg', connection: config });

//     // Create the "visits" table
//     knex.schema.createTable('users', function(table) {
//         table.increments();
//         table.string('email').notNullable().unique();
//         table.string('password_digest').notNullable();
//         table.string('name').notNullable();
//         table.string('bodyWeight').notNullable();
//         table.string('height').notNullable();
//         table.string('age').notNullable();
//         table.string('sex').notNullable();
//         table.timestamps()
//     }).then(() => {
//             return knex.destroy();
//         })
//         .catch((err) => {
//             if (knex) {
//                 knex.destroy();
//             }
//         });
// }

// const config = {
//     user: process.env.SQL_USER,
//     password: process.env.SQL_PASSWORD,
//     database: process.env.SQL_DATABASE
// };

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//     config.host = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

router.get('/:identifier', (req, res) => {
     User.query({
         select: ['email'],
         where: {email: req.params.identifier}
     }).fetch().then((user) => {
         res.json({user})
     }).catch((err) => {
        console.log(err)
     })
})

router.options('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
});


router.post('/', bodyParser.json() ,(req, res) => {
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