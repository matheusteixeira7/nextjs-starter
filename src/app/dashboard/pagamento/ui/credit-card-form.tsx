import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export function CreditCardForm() {
  const total = 'R$141,92'

  return (
    <div className="max-w-lg">
      <form className="mt-6">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6">
          <div className="col-span-full">
            <Label htmlFor="email-address">Endereço de email</Label>
            <div className="mt-1">
              <Input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="col-span-full">
            <Label htmlFor="name-on-card">Nome no cartão</Label>
            <div className="mt-1">
              <Input
                id="name-on-card"
                name="name-on-card"
                type="text"
                autoComplete="cc-name"
              />
            </div>
          </div>

          <div className="col-span-full">
            <Label htmlFor="card-number">Número do cartão</Label>
            <div className="mt-1">
              <Input
                id="card-number"
                name="card-number"
                type="text"
                autoComplete="cc-number"
              />
            </div>
          </div>

          <div className="col-span-8 sm:col-span-9">
            <Label htmlFor="expiration-date">Data de validade (MM/AA)</Label>
            <div className="mt-1">
              <Input
                id="expiration-date"
                name="expiration-date"
                type="text"
                autoComplete="cc-exp"
              />
            </div>
          </div>

          <div className="col-span-4 sm:col-span-3">
            <Label htmlFor="cvc">CVC</Label>
            <div className="mt-1">
              <Input id="cvc" name="cvc" type="text" autoComplete="cc-csc" />
            </div>
          </div>

          <div className="col-span-full">
            <Label htmlFor="address">Endereço</Label>
            <div className="mt-1">
              <Input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
              />
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <Label htmlFor="city">Cidade</Label>
            <div className="mt-1">
              <Input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
              />
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <Label htmlFor="region">Estado</Label>
            <div className="mt-1">
              <Input
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
              />
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <Label htmlFor="postal-code">CEP</Label>
            <div className="mt-1">
              <Input
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <div className="flex h-5 items-center">
            <Checkbox />
            <span className="ml-4">Usar o mesmo endereço para cobrança</span>
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
