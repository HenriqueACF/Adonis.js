import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StringsController {
  public async validateString(ctx: HttpContextContract){
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

    await request.validate({
      schema: schemaString
    })

    return { response: 'success'}
  }

  public async validateStringWithRules(ctx:HttpContextContract){
    let {request} = ctx

    const rulesSchema = schema.create({
      // permite apenas caracteres do alfabeto
      alpha: schema.string([
        rules.alpha()
      ]),
      // permitir apenas caracteres alfanumericos
      alphaNum: schema.string([
        rules.alphaNum()
      ]),
      // validar tamanho
      strLen:schema.string([
        rules.minLength(10),
        rules.maxLength(12)
      ]),
      // retuirar espaços em branco
      trim: schema.string([
        rules.trim()
      ]),
      //verifica caracteres especiais para evitar sql injection
      escape: schema.string([
        rules.escape()
      ]),
      // verifica se é um email
      email: schema.string([
        rules.email()
      ])
    })

    await request.validate({
      schema: rulesSchema
    })

    return { response: 'success'}
  }
  public async validateStringWithEquals(ctx:HttpContextContract){
    const {request} = ctx

    const validationSchema = schema.create({
      username: schema.string({}, [
        rules.equalTo('Teste')
      ]),

      type: schema.string({}, [
        rules.notIn(['ADMIN', 'TESTER'])
      ])
    })

    await request.validate({
      schema: validationSchema
    })

    return {success: true}
  }
}
