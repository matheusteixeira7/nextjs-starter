'use client'

import Link from 'next/link'
import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '../actions'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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

export async function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form className="grid gap-4" action={dispatch}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@wehandle.com"
        />
        {errorMessage && (
          <p className="text-accent-destructive">{errorMessage}</p>
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
      </div>
      <LoginButton />
    </form>
  )
}
