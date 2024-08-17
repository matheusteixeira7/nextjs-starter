import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { ProductsProp } from '../models'

export function MobileOrderSummary({ products }: Readonly<ProductsProp>) {
  const discount = { code: 'WEHANDLE', amount: 16.0 }
  const taxes = 9.92
  const shipping = 8
  const subtotal = products.reduce(
    (acc, product) => acc + Number(product.price),
    0,
  )
  const total =
    products.reduce((acc, product) => acc + Number(product.price), 0) -
    Number(discount.amount) +
    Number(taxes) +
    Number(shipping)

  return (
    <section
      aria-labelledby="order-heading"
      className="bg-muted px-4 py-6 sm:px-6 lg:hidden"
    >
      <Disclosure as="div" className="mx-auto max-w-lg">
        <div className="flex items-center justify-between">
          <h2 id="order-heading" className="text-lg font-medium">
            Seu pedido
          </h2>
          <DisclosureButton className="group font-medium ">
            <span className="[.group:not([data-open])_&]:hidden">
              Ocultar resumo completo
            </span>
            <span className="group-data-[open]:hidden">
              Mostrar resumo completo
            </span>
          </DisclosureButton>
        </div>

        <DisclosurePanel>
          <ul className="divide-y divide-gray-600 border-b border-gray-600">
            {products.map((product) => (
              <li key={product.id} className="flex space-x-6 py-6">
                <DocumentIcon className="h-6 w-6 text-muted-foreground" />
                <div className="flex flex-col space-y-4 w-full">
                  <div className="flex justify-between items-start text-sm font-medium w-full">
                    <div>
                      <h3>{product.name}</h3>
                      <p>
                        {product.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="link"
                      className="py-0 flex items-start"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <form className="mt-10">
            <Label htmlFor="discount-code-mobile">Código de desconto</Label>
            <div className="mt-1 flex space-x-4">
              <Input
                id="discount-code-mobile"
                name="discount-code-mobile"
                type="text"
              />
              <Button type="submit">Aplicar</Button>
            </div>
          </form>

          <dl className="mt-10 space-y-6 text-sm font-medium">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>
                {subtotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="flex">
                Desconto{''}
                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs tracking-wide text-white">
                  {discount.code}
                </span>
              </dt>
              <dd>
                -
                {discount.amount.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Impostos</dt>
              <dd>
                {taxes.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt>Frete</dt>
              <dd>
                {shipping.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </dd>
            </div>
          </dl>
        </DisclosurePanel>

        <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium">
          <span className="text-base">Total</span>
          <span className="text-base">
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </p>
      </Disclosure>
    </section>
  )
}
