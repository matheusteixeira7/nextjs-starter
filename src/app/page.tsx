'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, schema } from './models'
import { ErrorMessage } from '@hookform/error-message'
import { WehandleLogo } from '@/components/ui/wehandle-logo'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function submit() {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    router.push('/dashboard')
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <WehandleLogo height={62} className="mb-4" />
            <p className="text-left text-muted-foreground">
              Insira teus dados abaixo para acessar a plataforma
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(submit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@wehandle.com"
                {...register('email')}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="text-accent-destructive">{message}</p>
                )}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input id="password" type="password" {...register('password')} />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-accent-destructive">{message}</p>
                )}
              />
            </div>
            <Button
              onSubmit={submit}
              type="submit"
              className="w-full"
              loading={loading}
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden bg-muted lg:block bg-gradient-to-br from-primary to-secondary">
        ads
      </div>
    </div>
  )
}
