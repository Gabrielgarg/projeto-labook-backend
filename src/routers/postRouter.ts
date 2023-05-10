import express from "express"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { PostDatabase } from "../database/PostsDatabase"
import { PostBusiness } from "../business/PostsBusiness"
import { PostController } from "../controller/PostsController"
import { UserDatabase } from "../database/UsersDatabase"


export const postRouter = express.Router()

const postController = new PostController(
    new PostBusiness(
        new UserDatabase(),
        new PostDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)


postRouter.get("/getpost", postController.getPosts)
postRouter.post("/createpost", postController.createPost)
postRouter.put("/editpost", postController.editPost)
postRouter.delete("/deletepost", postController.deletePost)
postRouter.put("/likedislike/", postController.likedislikePost)
