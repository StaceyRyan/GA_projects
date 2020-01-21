const express = require('express');
const app = express();
const pg = require('knex')({
    debug: true,
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'walkies'
      },
    searchPath: ['knex', 'public'],
});

const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || "local host"

//SQL queries to go here
app.get('/user/new_owner', (req, res) => {
    const {name} = req.query;
})


app.get('/user/new_dog', (req, res) => {
    const {name, dob, breed, health_issues, notes} = req.query;
    // const INSERT.new_dog_QUERY = INSERT INTO dog(name, dob, breed, health_issues, notes) VALUES(`${name}`, `${dob}`, `${breed}`, `${health_issues}`, `${notes}`),
    // res.send('add dog')
});


app.listen(port, () => {
    console.log('Listening on port ' + port)
});