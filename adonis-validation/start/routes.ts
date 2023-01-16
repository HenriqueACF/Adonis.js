import Route from '@ioc:Adonis/Core/Route'
//import StringsController from 'App/Controllers/Http/StringsController'
//import EnumsController from 'App/Controllers/Http/EnumsController'

//STRING
Route.post('/string', 'StringsController.validateString')
Route.post('/string/rules', 'StringsController.validateStringWithRules')
Route.post('/string/equals', 'StringsController.validateStringWithEquals')

//ENUM
Route.post('/enum/validateEnum', 'EnumsController.validateEnum')
