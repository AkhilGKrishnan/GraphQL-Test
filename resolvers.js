import { nanoid } from 'nanoid'

class User {
  constructor(id, {
    name, gender, age, mobile, email, address
  }) {
    this.id = id
    this.name = name
    this.gender = gender
    this.age = age
    this.email = email
    this.mobile = mobile
    this.address = address
  }
}

const userData = {}

const resolvers = {
  getUser: ({ id }) => {
    return new User(id, userData[id])
  },
  createUser: ({ input }) => {
    let id = nanoid()
    userData[id] = input
    return new User(id, input)
  }
}

export default resolvers;