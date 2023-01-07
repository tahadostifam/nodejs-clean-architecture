import express from "express"
import postsControler from "../controllers/posts.controller"
import postsRepo from "../repository/posts.repo";

const router = express.Router();

router.route("/posts").post((req, res, next) => {
    postsControler(postsRepo()).fetchPostByTitle(req, res, next);
});

export default router;
