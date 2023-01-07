import { Post } from "../models"

// NOTE: Just for test api
let posts: Post[] = [
    { title: "Hello Wold", content: "content!", author: "Taha", created_at: new Date() }
]

export interface IPostsRepository {
    insert(newPost: Post): Promise<Post>,
    remove(): Promise<Post>,
    update(): Promise<Post>,
    find(fields: any): Promise<Post[]>
}

function makePostsRepo(): IPostsRepository {
    // TODO - implement CRUD
    async function insert(newPost: Post): Promise<Post> {
        return new Promise<Post>((resolve, reject) => {
            posts.push(newPost);
        })
    };
    async function remove(): Promise<Post> { return new Promise((resolve, reject) => { }) };
    async function update(): Promise<Post> { return new Promise((resolve, reject) => { }) };
    async function find(fields: any): Promise<Post[]> {
        return new Promise((resolve: (posts: Post[]) => void, reject) => {
            // TODO
            resolve(posts)
        })
    };

    return Object.freeze({ insert, remove, update, find });
}

export default makePostsRepo;
