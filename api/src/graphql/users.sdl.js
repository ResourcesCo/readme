export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    authId: String!
    readmes: [Readme]!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    username: String!
    email: String!
    authId: String!
  }

  input UpdateUserInput {
    username: String
    email: String
    authId: String
  }
`
