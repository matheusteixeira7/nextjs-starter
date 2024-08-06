import { cn } from '@/lib/utils'
import { navigation } from './navigation'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '../mode-toggle'
import { Cog6ToothIcon } from '@heroicons/react/20/solid'

export function Nav() {
  const pathname = usePathname()

  return (
    <>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.href === pathname
                        ? 'focus:bg-accent bg-accent text-primary'
                        : 'focus:bg-accent text-accent-foreground hover:bg-accent hover:text-muted-foreground',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={cn(
                        item.href === pathname
                          ? 'text-primary'
                          : 'text-foreground group-hover:text-muted-foreground',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <ModeToggle />
            <a
              href="#"
              className="group mt-2 -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 focus:bg-accent text-accent-foreground hover:bg-accent hover:text-muted-foreground"
            >
              <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
              Configurações
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
