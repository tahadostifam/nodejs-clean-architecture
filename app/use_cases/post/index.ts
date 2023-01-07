import { Post } from "../../models"
import { IPostsRepository } from "../../repository/posts.repo"

function insertPost(title: string, content: string, author: string, created_at: Date, postsRepo: IPostsRepository) {
    if (!title || !content || !author) {
        return new Error("title or content or author cant be empty");
    }

    const newPost: Post = { title, content, author, created_at };

    return postsRepo.insert(newPost);
}

async function fetchPostByTitle(title: string, postsRepo: IPostsRepository): Promise<Post[]> {
    return await postsRepo.find({ title });
}

export default Object.freeze({ insertPost, fetchPostByTitle });
