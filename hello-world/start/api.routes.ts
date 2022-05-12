import Route from '@ioc:Adonis/Core/Route'

//AGRUPANDO E DEFININDO PREFIXO NAS ROTAS
Route.group(()=>{

    Route.get('/admin', 'PainelController.admin')

    Route.group(()=>{

        Route.get('/', 'PainelController.index')

        Route.get('/users/:id?', 'PainelController.usuarioById')
            .where('id', Route.matchers.number())
        Route.get('/users/:slug', 'PainelController.usuarioBySlug')
            .where('slug', Route.matchers.slug())
        Route.get('/docs/*', 'PainelController.docs')

    }).prefix('/painel')


}).prefix('/api')


