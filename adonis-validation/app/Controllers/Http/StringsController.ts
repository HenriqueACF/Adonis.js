import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class StringsController {
  public validateString(ctx: HttpContextContract){
    let {request} = ctx
    //schema de validação
    let schemaString = schema.create({
      // verifica se é string
      isString: schema.string(),
      // verifica se é string e aceita como opcional
      stringOptional: schema.string.optional(),
      // verifica se é string e aceita como null
      stringNull: schema.string.nullable(),
      // verifica se é uma string, aceitando null e permitindo opcional
      stringNullAndOptional: schema.string.nullableAndOptional()
    })
  }
}
