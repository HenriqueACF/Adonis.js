// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {

    protected users = [{
        id:1,
        name: 'Henrique',
        slug:'rick'
    },
    {
        id:2,
        name: 'Henrique Assis',
        slug:'riq'
    }]

    async index(){
        return {response: 'Index Painel'}
    }

    async usuarios(){
        return {
            user: this.users
        }
    }

    async usuarioById({params}){
        let myRequestUserId = params['id']
       let myUser = this.users.find(user => user.id == myRequestUserId)

        if(myUser){
            return myUser
        }else {
            return {error: 'Nenhum usuario encontrado'}
        }
    }

    async usuarioBySlug({params}){
        let myRequestSlug = params['slug']
        let mySlug = this.users.find(user => user.slug == myRequestSlug)

        if(mySlug){
            return mySlug
        }else {
            return {error: 'Nenhum usuario encontrado'}
        }
    }

    async admin(){
        return {response: 'Admin Painel'}
    }
}
