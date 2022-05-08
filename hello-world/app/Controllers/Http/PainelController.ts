// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
    async index(){
        return {response: 'Index Painel'}
    }

    async usuarios(){
        return {response: 'Users Painel'}
    }

    async admin(){
        return {response: 'Admin Painel'}
    }
}
