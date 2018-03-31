import express from 'express';
import users from './routs/users';
import auth from './routs/auth';
import bodyParser from 'body-parser';

//TODO smart serving with port selection

let app = express();

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
    console.log('server running');
});

app.use(bodyParser.json());

app.use('/api/auth', auth); // Make a POST request to users
app.use('/api/users', users); // Make a POST request to users