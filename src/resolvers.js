const { Post } = require("./models/post")

export const resolvers = {
    Query: {
        posts: () => Post.find(),
        post: (_, { id }) => Post.findById(id)
    },
    Mutation: {
        addPost: async (_, { name, description, imgUrl }) => {
            try {
                const post = new Post({ name, description, imgUrl})
                await post.save()
                return post
            } catch (e) {
                return e.message
            }
        }
    }
}
