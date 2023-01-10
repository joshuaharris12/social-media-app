import mongoose, { Schema } from "mongoose";

const schema = Schema({
    title: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model("Post", schema, "posts");
export default Post;