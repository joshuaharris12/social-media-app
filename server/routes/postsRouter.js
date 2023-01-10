import { Router } from "express";

import { createPost, getPosts } from "../controllers/postsController.js"; 

const router = Router();

router.post("/", createPost);
router.get("/", getPosts)


export default router;