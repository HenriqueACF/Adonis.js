import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  async index ({}: HttpContextContract){
    const allPosts = await Post.all()
    return allPosts
  }

  async store ({request}: HttpContextContract){
    const myData = request.only(['title', 'content'])

    const postagem = await Post.create(myData)
    return postagem
  }

  async show ({params, response}: HttpContextContract){
    const postId = params.id
    const myPost = await Post.find(postId)

    if(!myPost){
      response.notFound()
    }

    return myPost
  }

  async delete ({params, response}: HttpContextContract){
    const {id} = params
    const myPost = await Post.find(id)

    if(!myPost){
      return response.status(404).send('O post nao foi encontrado')
    }

    await myPost.delete()
  }

  async update ({request, params, response}: HttpContextContract){
    const { id} = params
    const myPost = await Post.find(id)

    if(!myPost){
      return response.status(404)
    }

    const myData = request.only(['title', 'content'])
    myPost.merge(myData)
    await myPost.save()
    return myPost
  }
}
