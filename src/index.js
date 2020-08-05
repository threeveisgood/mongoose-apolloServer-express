import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
require('dotenv').config();

const url = process.env.DB_URL

const startServer = async () => {
    const app = express()

    mongoose.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true }
      ).then(() => {
          console.log('Connected to Database!')
      }).catch(() => {
          console.log('Connection failed!')
      })
    
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    server.applyMiddleware({ app })
    
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer()