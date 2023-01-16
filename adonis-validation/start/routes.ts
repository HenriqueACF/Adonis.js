import Route from '@ioc:Adonis/Core/Route'
import StringsController from 'App/Controllers/Http/StringsController'

//Route.post('/', async () => {
//  return { hello: 'world' }
//})

Route.post('/string', 'StringsController.validateString')
Route.post('/string/rules', 'StringsController.validateStringWithRules')
Route.post('/string/equals', 'StringsController.validateStringWithEquals')
