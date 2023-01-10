import { Router } from "express";

import { createPost, deletePost, getPosts } from "../controllers/postsController.js"; 

const router = Router();

router.post("/", createPost);
router.get("/", getPosts);
router.delete("/", deletePost);


export default router;