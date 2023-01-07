import * as models from "../models";
import makePostsRepo from "./posts.repo";

const postsRepo = makePostsRepo();

export { postsRepo };
