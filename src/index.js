const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db");
const { gql } = require('apollo-server');
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
let schema = new Schema({
  name: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});
NAMEHERE = mongoose.model('NAMEHERE', schema);
models = { NAMEHERE }
// Define the GQL type
const typeDefs = gql`
  type NAMEHERE {
    id: ID!
    name: String!
    url: String!
  }

  input CreateNAMEHEREInput {
    name: String!
    url: String!
  }

  input UpdateNAMEHEREInput {
    name: String
    url: String
  }

  input DeleteNAMEHEREInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

  type Query {
    NAMEHEREs: [NAMEHERE]
    NAMEHERE(id: ID!): NAMEHERE
  }

  type Mutation {
    createNAMEHERE(input: CreateNAMEHEREInput!): NAMEHERE
    updateNAMEHERE(id: ID!, input: UpdateNAMEHEREInput!): NAMEHERE
    deleteNAMEHERE(id: ID!): DeletePayload!
  }
`;

const resolvers = require("./resolvers");

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});