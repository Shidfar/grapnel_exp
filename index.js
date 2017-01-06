var express = require('express');
var graphQL = require('express-graphql');
var schema = require('./data/schema');
var graphql = require('graphql');

var app = express();

app.use('/graphql', graphQL({schema:schema, pretty:true}));
app.listen(3000, function () {
    console.log('server is listenning on port 3000');
});

// var query = '{user (id:"1"){name}}';
//
// graphql.graphql(schema, query).then(function (result) {
//     console.log(" >> ", result);
// });