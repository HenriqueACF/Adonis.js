import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from "App/Models/Task";
import Category from "App/Models/Category";

export default class TasksController {
  public async index({auth}: HttpContextContract) {
    const task = await Task.query().where({
      userId: auth.user!.id
    })

    return task
  }

  // public async create({}: HttpContextContract) {}

  public async store({request, auth, response}: HttpContextContract) {
    const user = auth.user!
    const data = request.only(['title', 'description', 'due_date', 'is_done', 'categorieId'])

    const category = await Category.findOrFail(data.categorieId)
    if(!category || (category.userId != user.id)){
      return {message: 'Categoria Invalida!'}
    }

    if(data.description.length > 100){
      response.status(400).send('A sua descrição só aceita até 100 caracteres')
    }

    const newTask = await Task.create({...data, userId: user.id})
    const newTaskJSON = newTask.toJSON()
    return {...newTaskJSON, categorie: category}

  }

  public async show({params, response, auth}: HttpContextContract) {
    const {id} = params

    const task = await Task.find(id)

    if(!task || task.userId != auth.user!.id){
      return response.status(404).send('Não há tasks para exibir')
    }
    await task.preload('category')
    await task.preload('user')

    return task
  }

  // public async edit({}: HttpContextContract) {}

  public async update({params, auth, response, request}: HttpContextContract) {
    const {id} = params
    const task = await Task.find(id)

    if(!task || task.userId != auth.user!.id){
      return response.status(404).send('Não há tasks para atualizar')
    }

    const data = request.only(['title', 'description', 'due_date', 'is_done', 'categorieId'])

    if(data.description && data.description.length > 100){
      response.status(400).send('A sua descrição só aceita até 100 caracteres')
    }

    if(data.due_date && new Date(data.due_date).toString() == 'Invalid date'){
      response.status(400).send('Data invalida')
    }

    const validBooleans = ["1", "0", 1, 0, true, false]
    if(data.is_done && !validBooleans.includes(data.is_done)){
      return response.status(400).send('is_done precisa ser um valor booleano')
    }

    task.merge(data)
    task.save()
    await task.refresh()
    return task
  }

  public async destroy({params, auth, response}: HttpContextContract) {
    const {id} = params
    const task = await Task.find(id)

    if(!task || (task.userId != auth.user!.id)){
      return response.status(404).send('Não há task para deletar')
    }

    await task.delete()
    return response.send('Task deletada com sucesso')
  }
}
