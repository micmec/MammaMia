import express from 'express';
import users from './resources/users';
import bodyParser from 'body-parser';

//TODO smart serving

let app = express();

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
    console.log('server running');
});

app.use(bodyParser.json());

app.use('/api/users', users); // Make a POST request to users