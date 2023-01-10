import Post from "../models/post.js";

export const createPost = async (request, response) => {
    try {
        const data = await request.body;
        console.log(data);
        const post = await Post.create(data);
       response.status(201).json(post);
    } catch (error) {
        response.status(401).json({'message': error.message});
    }
}

export const getPosts = async (request, response) => {
    try {
        const posts = await Post.find();
        response.status(200).json(posts);
    } catch (error) {
        response.status(400).json({"message": error.message});
    }
}

export const deletePost = async (request, response) => {
    try {
        await Post.findByIdAndDelete(request.body.id);
        response.status(200).json({"message": "Deleted"});
    } catch (error) {
        response.status(400).json({"message": error.message});
    }
}