export const schema = gql`
  type Readme {
    id: Int!
    name: String!
    slug: String!
    body: String!
    private: Boolean!
    User: User
    userId: Int
  }

  type Query {
    readmes: [Readme!]!
  }

  input CreateReadmeInput {
    name: String!
    slug: String!
    body: String!
    private: Boolean!
    userId: Int
  }

  input UpdateReadmeInput {
    name: String
    slug: String
    body: String
    private: Boolean
    userId: Int
  }
`
