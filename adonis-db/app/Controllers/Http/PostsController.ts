import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  async index ({}: HttpContextContract){
    const allPosts = await Post.all()
    return allPosts
  }

  async store ({request}: HttpContextContract){
    const myData = request.only(['title', 'content'])

    const postagem = Post.create(myData)
    return postagem
  }
}
