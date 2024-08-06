import '@/drizzle/envConfig'
import { defineConfig } from 'drizzle-kit'

console.log('POSTGRES_URL:', process.env.POSTGRES_URL)

export default defineConfig({
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
})
