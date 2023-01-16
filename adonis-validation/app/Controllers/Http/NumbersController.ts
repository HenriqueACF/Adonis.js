import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class NumbersController {
  public async validateNumber(ctx:HttpContextContract){
    const {request} = ctx

    const validationSchema = schema.create({
      value: schema.number([
        rules.range(10, 100)
      ])
    })

    await request.validate({
      schema: validationSchema
    })

    return {success: true}
  }
}
