const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { Post } = require("./models/post")
const  dayjs  = require('dayjs')

let now = dayjs()

export const resolvers = {
    Query: {
        posts: () => Post.find(),
        post: (_, { id }) => Post.findById(id)
    },
    Mutation: {
        addPost: async (_, { name, description, imgUrl, category }) => {
            try {
                const post = new Post({ name, description, imgUrl, category, date: now})
                await post.save()
                return post
            } catch (e) {
                return e.message
            }
        }
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
          return dayjs(value); // value from the client
        },
        serialize(value) {
          return dayjs(value).format("MM-DD-YYYY"); // value sent to the client
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.STRING) {
            return dayjs(ast.value); // ast value is always in string format
          }
          return null;
        },
      }),
}
