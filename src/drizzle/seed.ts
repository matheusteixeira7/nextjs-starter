import { insertUser } from '@/drizzle/db'
import { NewUser } from '@/drizzle/schema'

async function main() {
  const newUser: NewUser = {
    name: 'Tacio Medeiros',
    email: 'm@wehandle.com.br',
    password: '12345678',
  }
  const res = await insertUser(newUser)
  console.log('Adicionado seeds na tabela users com sucesso:', res)
  process.exit()
}

main()
