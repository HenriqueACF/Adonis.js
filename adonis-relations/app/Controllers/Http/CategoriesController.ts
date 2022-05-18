import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {

  //exbibe todas as categorias
  public async index({}: HttpContextContract) {

  }

  // public async create({}: HttpContextContract) {}

  //cria uma categoria
  public async store({}: HttpContextContract) {}

  //exibe informações de uma categoria
  public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  //atualiza uma categoria
  public async update({}: HttpContextContract) {}

  //deleta uma categoria
  public async destroy({}: HttpContextContract) {}
}
