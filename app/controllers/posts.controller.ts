import { Request, Response, NextFunction } from "express";
import { Post } from "../models";
import postUseCase from "../use_cases/post"
import { IPostsRepository } from "../repository/posts.repo"

export interface IPostController {
    fetchPostByTitle(req: Request, res: Response, next: NextFunction): void;
}

export default function userController(postsRepo: IPostsRepository): IPostController {
    const fetchPostByTitle = (req: Request, res: Response, next: NextFunction) => {
        postUseCase.fetchPostByTitle(req.body.title, postsRepo)
            .then((posts: Post[]) => res.json(posts))
            .catch((error: Error) => next(error));
    }

    return Object.freeze({ fetchPostByTitle });
}
