import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class BooleansController {
  public async validateBoolean(ctx:HttpContextContract){
    const {request} = ctx

    const validationSchema = schema.create({
      value: schema.boolean()
    })

    await request.validate({
      schema: validationSchema
    })

    return {success: true}
  }
}
