const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true }
})

export const Post = mongoose.model('Post', postSchema)


