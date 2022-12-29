import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
type Author {
  id: ID!
  name: String!
  age: Int!
  photo: String
}

type Note {
  id: ID!
  title: String!
  description: String!
  author: Author!
}

type Query  {
  notes: [Note!]!
}
`

const notes = [
  {
    id: 1,
    description: 'ilk yazım',
    title: 'Merhaba Dünya',
    author: {
      age: 22,
      id: 1,
      name: 'ozan',
      photo:
        'https://pbs.twimg.com/profile_images/1596070555811209218/1tibqnOR_400x400.jpg',
    },
  },
  {
    id: 2,
    description: 'ikinci yazım',
    title: 'Merhaba Dünya Bu ikinci Yazım',
    author: {
      age: 22,
      id: 2,
      name: 'nida',
      photo:
        'https://pbs.twimg.com/profile_images/1599711099439423488/8fVlSri1_400x400.jpg',
    },
  },
]

const resolvers = {
  Query: {
    notes: () => notes,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })

console.log(`🚀 Server listening at: ${url}`)
