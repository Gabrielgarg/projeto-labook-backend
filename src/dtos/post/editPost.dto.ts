import z from "zod"
import { PostModel } from "../../models/Posts"

export interface EditPostsInputDTO {
    content: string,
    token:string
}

// UserModel é a estrutura de User que será devolvida para o Front (sem password)
// export type CreatePostsOutputDTO = PostModel[]

export interface EditPostsOutputDTO {
  message: string
}

export const EditPostsSchema = z.object({
  content: z.string().min(1),
  token: z.string().min(1)
}).transform(data => data as EditPostsInputDTO)