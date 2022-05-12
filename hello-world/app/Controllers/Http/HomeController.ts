// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    async index({view}){
        return view.render('painel.homepage', {
            usuario: 'Henrique Assis',
            idade: 24
        })
    }

    async about(){
        return 'About Page'
    }
}
