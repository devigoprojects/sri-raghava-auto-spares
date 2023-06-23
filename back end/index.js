const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema,graphql} = require('graphql');
const graphqlResolvers = require('./graphql/resolvers/index');
const graphqlSchema = require('./graphql/schema/index');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());


app.use(
'/api',
graphqlHTTP({
   schema:graphqlSchema,
   rootValue:graphqlResolvers,
   graphiql:true
})
);


mongoose.connect(process.env.DATABASE_URL).then(

() =>{
   app.listen(process.env.PORT || 3000)
}

).catch(
   err=>{
      console.log(err)
   }
)