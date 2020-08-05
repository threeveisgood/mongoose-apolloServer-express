import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        posts: [Post!]!
        post(id: ID!): Post
    }

    type Post {
        id: ID!
        name: String!
        description: String!
        imgUrl: String!
    }    

    type Mutation {
        addPost(name: String!, description: String!, imgUrl: String!): Post!        
    }
`