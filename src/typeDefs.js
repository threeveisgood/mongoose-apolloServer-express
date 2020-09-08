import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    scalar Date 

    type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }

    type Post {
        id: ID!
        name: String!
        description: String!
        imgUrl: String!
        category: String
        date: Date        
    }    

    type Mutation {
        addPost(name: String!, description: String!, imgUrl: String!, category: String!): Post!        
    }
`