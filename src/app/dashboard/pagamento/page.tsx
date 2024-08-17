import { OrderSummary } from './ui/order-summary'
import { MobileOrderSummary } from './ui/mobile-order-summary'
import { Checkout } from './ui/checkout'

const products = [
  {
    id: 1,
    name: 'Documentação trabalhista',
    price: 42.0,
  },
  {
    id: 2,
    name: 'Licença dos bombeiros',
    price: 42.0,
  },
  {
    id: 3,
    name: 'Licença ambiental',
    price: 42.0,
  },
  {
    id: 4,
    name: 'Cadastro na prefeitura',
    price: 42.0,
  },
]

export default function Payment() {
  return (
    <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      <h1 className="sr-only">Compra</h1>

      <MobileOrderSummary products={products} />
      <OrderSummary products={products} />
      <Checkout />
    </main>
  )
}
