import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class DateController {
  public async validateDate(ctx:HttpContextContract){
    const {request} = ctx

    const validationSchema = schema.create({
      date: schema.date({
        format:'dd-mm-yyyy'
      }, [
        // verifica se a data é depois de hoje
        //rules.after('today')
        //verifica se a data é um ano antes
        rules.before(1,'years')
      ])
    })

    await request.validate({
      schema: validationSchema
    })

    return {success: true}
  }
}
