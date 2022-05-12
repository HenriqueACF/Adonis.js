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

    async index({request}){
        return {
            response: 'Index Painel',
            qs: request.qs(),//QUERY STRING
            url: request.url(),// retorna a url
            completeUrl: request.completeUrl(),// retorna a url inteira
            input: request.all(), // RETORNA TODOS OS INPUTS
            only: request.only(['idade']), //RETORNA APENAS O REQUEST DE IDADE
            execpt: request.execpt(['idade']), //RETORNA TUDO MENOS UM ESPECIFICO
            ip: request.ip(),// retorna o ip local
            ips: request.ips(),//RETORNA UM ARRAY DE POSSIVEIS IPS
            language: request.language(), //LINGUAGENS PREFERIDAS DO NAVEGADOR
            method: request.method(), //RETORNA O METODO DAQUELA REQUSIÇÃO
            headers: request.headers(), // RETORNA OS HEADERS DAQUELA REQUISIÇÃO
        }
    }

    async response ({response}){
        let json = {hello: 'world'}
        response.status(404), //RETORNA UM STATUS HTTP
        response.redirect().toPath('/api/painel/users/1'), // REDIRECIONA PARA UMA ROTA ESPECIFICA
        response.download(), //FORÇA O NAVEGADOR PARA BAIXAR O CONTEUDO DAQUELA PAGINA
    }

    async usuarioById({params}){
        if(!params['id']){
            return {users: this.users}
        }
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

    async docs({params}){
        return params['*'][0]
    }

    async admin(){
        return {response: 'Admin Painel'}
    }
}
