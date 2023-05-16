const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    me: User
  }

  input saveBookInput {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(saveBookInput: saveBookInput): User

    removeBook(bookId: ID!): User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
