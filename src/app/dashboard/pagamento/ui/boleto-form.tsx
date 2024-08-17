import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function BoletoForm() {
  const total = 'R$141,92'

  return (
    <div className="max-w-lg">
      <form className="mt-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6">
          <div className="col-span-full">
            <h2 className="text-primary mb-4 font-medium text-lg">
              Pagamento via boleto
            </h2>

            <p>
              Finalize o pedido para gerar o boleto bancário. Realize o
              pagamento <b>até a data de vencimento</b> para garantir que seus
              documentos sejam validados.
            </p>
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <div className="flex min-h-5 items-start">
            <Checkbox />
            <span className="ml-2 block">
              Eu li e aceito os{' '}
              <Link href="#" className="text-primary hover:underline">
                termos e condições de uso
              </Link>{' '}
              da Wehandle
            </span>
          </div>
        </div>

        <Button type="submit" className="w-full mt-6">
          Pagar {total}
        </Button>

        <p className="mt-6 flex justify-center text-sm font-medium">
          <ShieldCheckIcon
            aria-hidden="true"
            className="mr-1.5 h-5 w-5 text-green-300"
          />
          Seu pagamento é seguro e protegido.
        </p>
      </form>
    </div>
  )
}
