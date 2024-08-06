import { WehandleLogo } from '@/components/ui/wehandle-logo'
import { AnimatedCube } from '@/components/3d-cube'
import { LoginForm } from './ui/login-form'

export default function Home() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <WehandleLogo height={62} className="mb-4" />
            <p className="text-left text-foreground">
              Insira teus dados abaixo para acessar a plataforma
            </p>
          </div>
          <LoginForm />
        </div>
      </div>

      <div className="hidden bg-muted lg:flex justify-center items-center bg-gradient-to-r from-background to-muted-background">
        <AnimatedCube />
      </div>
    </div>
  )
}
