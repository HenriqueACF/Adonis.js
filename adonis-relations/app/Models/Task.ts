import { DateTime } from 'luxon'
import {BaseModel, BelongsTo, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import User from "App/Models/User";
import Category from "App/Models/Category";

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public due_date: DateTime

  @column()
  public description: string

  @column()
  public is_done: boolean

  @column()
  public userId: number
  @belongsTo(()=> User)
  public user: BelongsTo<typeof User>


  @column()
  public categorieId: number
  @belongsTo(()=> Category)
  public category: BelongsTo<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
