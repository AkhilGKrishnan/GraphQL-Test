import { buildSchema } from 'graphql'

/*Query is a special type for querying the data. The resolver the 
accept the query and return the specific data. Mutation is specific type for
filling the data into the storage spaces, it would be DB, variable whatever*/
const schema = buildSchema(`
  type User {
    id: ID
    name: String
    gender: Gender
    age: Int
    mobile: String
    email: String
    address: [Address]
  }

  type Address {
    streetAddress: String
    city: String
    state: String
    country: String
  }

  enum Gender {
    MALE
    FEMALE
    TRANSGENDER
  }

  type Query {
    getUser(id: ID): User
  }

  input UserInput {
    id: ID
    name: String!
    gender: Gender
    age: Int
    mobile: String
    email: String!
    address: [AddressInput]
  }

  input AddressInput {
    streetAddress: String
    city: String
    state: String
    country: String
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`)

export default schema;