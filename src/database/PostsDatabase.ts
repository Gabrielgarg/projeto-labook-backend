import { PostDB } from "../models/Posts";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  public static TABLE_POSTS = "posts"

  //find post by id
  public async findPosts(
    q: string | undefined
  ): Promise<PostDB[]> {
    let postsDB

    if (q) {
      const result: PostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .where({id:q})

      postsDB = result
    } else {
      const result: PostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)

      postsDB = result
    }

    return postsDB
  }

  public async findPostById(
    id: string
  ): Promise<PostDB | undefined> {
    const [postDB]: PostDB[] | undefined[] = await BaseDatabase
      .connection(PostDatabase.TABLE_POSTS)
      .where({ id })

    return postDB
  }

//   public async findUserByEmail(
//     email: string
//   ): Promise<PostDB | undefined> {
//     const [userDB]: UserDB[] | undefined[] = await BaseDatabase
//       .connection(UserDatabase.TABLE_USERS)
//       .where({ email })

//     return userDB
//   }

  public async insertPost(
    newPostDB: PostDB
  ): Promise<void> {
    await BaseDatabase
      .connection(PostDatabase.TABLE_POSTS)
      .insert(newPostDB)
  }
  

  public async editPost(id:string, newPostDB : PostDB):Promise<void>{
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).update(newPostDB).where({id})
  }

  public async deletePost(id:string):Promise<void>{
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).delete().where({id})
  }

  public async like(id: string, newPostDB:PostDB):Promise<void>{
    await BaseDatabase.connection(PostDatabase.TABLE_POSTS).update(newPostDB).where({id})
  }

    public async dislike(id: string, newPostDB:PostDB):Promise<void>{
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).update(newPostDB).where({id})
  }
}