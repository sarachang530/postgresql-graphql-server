const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const app = express();
const PORT = 4000;

const schema = require('./dbSchema');

app.use(
  '/api',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
