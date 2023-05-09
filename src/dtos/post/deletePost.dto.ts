import z from "zod"
import { PostModel } from "../../models/Posts"

export interface DeletePostsInputDTO {
  q: string,
  token:string
}

// UserModel é a estrutura de User que será devolvida para o Front (sem password)
export interface DeletePostsOutputDTO {
    message: string
}

export const DeletePostsSchema = z.object({
  q: z.string().min(1).optional(),
  token: z.string().min(1)
}).transform(data => data as DeletePostsInputDTO)