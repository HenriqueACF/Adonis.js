// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
    async index(){
        return 'Index Painel'
    }

    async usuarios(){
        return'Users Painel'
    }
}
