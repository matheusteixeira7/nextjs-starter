import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CreditCardForm } from './credit-card-form'
import { BoletoForm } from './boleto-form'
import { PixForm } from './pix-form'

export function Checkout() {
  return (
    <section
      aria-labelledby="payment-heading"
      className="flex-auto overflow-y-auto pr-4 pb-16 pt-12 sm:pr-6 sm:pt-16 lg:pr-8 lg:pb-24 lg:pt-0"
    >
      <h2 id="payment-heading" className="sr-only">
        Informações de pagamento
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline hover:text-primary">
            <div className="flex flex-col text-left gap-2">
              <h2 className="block">Cartão de crédito</h2>
              <p className="block text-sm font-light">Parcele em até 12x</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CreditCardForm />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline hover:text-primary">
            <div className="flex flex-col text-left gap-2">
              <h2 className="block">Boleto</h2>
              <p className="block text-sm font-light">Pague o valor à vista</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <BoletoForm />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:no-underline hover:text-primary">
            <div className="flex flex-col text-left gap-2">
              <h2 className="block">Pix</h2>
              <p className="block text-sm font-light">
                Pague e valide os documentos no mesmo dia
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <PixForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
