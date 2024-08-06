'use client'

import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/auth/auth'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const [state, action] = useFormState(login, undefined)

  return (
    <form className="grid gap-4" action={action}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@wehandle.com.br"
        />
        {state?.errors?.email && (
          <p className="text-accent-destructive">{state.errors.email}</p>
        )}
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
        <Input id="password" name="password" type="password" />
        {state?.errors?.password && (
          <p className="text-accent-destructive">{state.errors.password}</p>
        )}
      </div>
      {state?.message && (
        <p className="text-accent-destructive">{state.message}</p>
      )}
      <LoginButton />
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
      aria-disabled={pending}
      loading={pending}
    >
      {pending ? 'Carregando' : 'Entrar'}
    </Button>
  )
}
