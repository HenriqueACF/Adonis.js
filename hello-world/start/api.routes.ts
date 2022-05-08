import Route from '@ioc:Adonis/Core/Route'

//AGRUPANDO E DEFININDO PREFIXO NAS ROTAS
Route.group(()=>{

    Route.get('/admin', 'PainelController.admin')

    Route.group(()=>{
        Route.get('/', 'PainelController.index')
        Route.get('/usuarios', 'PainelController.usuarios')
    }).prefix('/painel')


}).prefix('/api')


