import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { ProductsProp } from '../models'

export function OrderSummary({ products }: Readonly<ProductsProp>) {
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
      aria-labelledby="summary-heading"
      className="hidden w-full max-w-md flex-col bg-muted lg:flex"
    >
      <h2 id="summary-heading" className="sr-only">
        Resumo do pedido
      </h2>

      <ul className="flex-auto divide-y divide-border overflow-y-auto px-6">
        {products.map((product) => (
          <li key={product.id} className="flex space-x-6 py-4">
            <DocumentIcon className="h-6 w-6 text-muted-foreground" />
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-1 text-sm font-medium">
                <h3 className="text-foreground">{product.name}</h3>
                <p className="text-muted-foreground">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 hover:no-underline"
                >
                  Remover
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sticky bottom-0 flex-none border-t border-border bg-muted p-6">
        <form>
          <Label htmlFor="discount-code">Código de desconto</Label>
          <div className="mt-1 flex space-x-4">
            <Input id="discount-code" name="discount-code" type="text" />
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
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt>Total</dt>
            <dd className="text-base">
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
