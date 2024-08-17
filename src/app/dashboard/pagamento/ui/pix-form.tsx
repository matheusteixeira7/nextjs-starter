import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export function PixForm() {
  const total = 'R$141,92'

  return (
    <div className="max-w-lg">
      <form className="mt-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6">
          <div className="col-span-full">
            <h2 className="text-primary mb-4 font-medium text-lg">
              Pagamento via PIX
            </h2>

            <p>Finalize o pedido para gear o código para pagamento.</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <div className="flex h-5 items-center">
            <Checkbox />
            <span className="block ml-2">
              Eu li e aceito os{' '}
              <Button variant="link" className="px-1">
                termos e condições de uso
              </Button>{' '}
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
