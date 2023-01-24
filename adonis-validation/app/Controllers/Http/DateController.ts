import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class DateController {
  public async validateDate(ctx:HttpContextContract){
    const {request} = ctx

    const validationSchema = schema.create({
      date: schema.date({
        format:'dd-mm-yyyy'
      })
    })

    await request.validate({
      schema: validationSchema
    })

    return {success: true}
  }
}
