import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {

  //exbibe todas as categorias
  public async index({auth}: HttpContextContract) {
    const categories = await Category.query().where({
      userId: auth.user!.id
    }).preload('user')

    return categories
  }

  // public async create({}: HttpContextContract) {}

  //cria uma categoria
  public async store({request, auth}: HttpContextContract) {
    const data = request.only(['title', 'color'])
    const user = auth.user!

    const newCategory = Category.create({...data, userId: user.id})

    return newCategory
  }

  //exibe informações de uma categoria
  public async show({request, response, auth}: HttpContextContract) {
    const {id} = request.params()
    const categorie = await Category.findOrFail(id)

    if(categorie.userId != auth.user!.id){
      return response.status(401).send('O usuario nao pode visualizar uma categoria que não lhe pertence')
    }

    await categorie.preload('user')
    return categorie
  }

  // public async edit({}: HttpContextContract) {}

  //atualiza uma categoria
  public async update({request, auth, response}: HttpContextContract) {
    const {id} = request.params()
    const data = request.only(['title', 'color'])
    const categorie = await Category.findOrFail(id)

    if(categorie.userId != auth.user!.id){
      return response.status(401).send('O usuario nao pode editar uma categoria que não lhe pertence')
    }

    categorie.merge(data)
    await categorie.save()
    return categorie

  }

  //deleta uma categoria
  public async destroy({params, auth, response}: HttpContextContract) {
    const {id} = params
    const myCategory = await Category.findOrFail(id)

    // if(!myCategory){
    //   return response.status(404).send('Categoria nao foi encontrada')
    // }

    if(myCategory.userId != auth.user!.id){
      return response.status(401).send('O usuario nao pode deletar uma categoria que não lhe pertence')
    }

    await myCategory.delete()

    return{success: true}
  }
}
