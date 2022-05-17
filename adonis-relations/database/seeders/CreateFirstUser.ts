import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateFirstUserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.create({
      email:'Henrique@adonis.com',
      password:'adonis123'
    })
  }
}
