import z from "zod"
import { PostModel } from "../../models/Posts"

export interface CreatePostsInputDTO {
    // creator_id: string,
    content:string,
    token:string
}

// UserModel é a estrutura de User que será devolvida para o Front (sem password)
// export type CreatePostsOutputDTO = PostModel[]

export interface CreatePostsOutputDTO {
  message: string,
  token:string
}

export const CreatePostsSchema = z.object({
  // creator_id: z.string().min(1),
  content: z.string().min(1),
  token: z.string().min(1)
}).transform(data => data as CreatePostsInputDTO)