'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  AcademicCapIcon,
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { DoorClosedIcon, ClipboardCheckIcon } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import { WehandleLogo } from './ui/wehandle-logo'
import { sleep } from '@/lib/utils'

const navigation = [
  {
    name: 'BI - Dashboard',
    href: '/bi-dashboard',
    icon: ChartPieIcon,
  },
  {
    name: 'Prestadores de serviços',
    href: '/prestadores-de-servicos',
    icon: HomeIcon,
  },
  {
    name: 'Meus serviços',
    href: '/meus-servicos',
    icon: FolderIcon,
  },
  {
    name: 'Homologação',
    href: '/homologacao',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Minha empresa',
    href: '/minha-empresa',
    icon: CubeIcon,
  },
  {
    name: 'Controle de isenções',
    href: '/controle-de-isencoes',
    icon: ChartPieIcon,
  },
  {
    name: 'EAD',
    href: '/ead',
    icon: AcademicCapIcon,
  },
  {
    name: 'Calendário',
    href: '/calendario',
    icon: CalendarIcon,
  },
  {
    name: 'Acessos',
    href: '/acessos',
    icon: UsersIcon,
  },
  {
    name: 'Portaria',
    href: '/portaria',
    icon: DoorClosedIcon,
  },
  {
    name: 'Validações',
    href: '/app/validacoes',
    icon: ClipboardCheckIcon,
  },
]

const userNavigation = [
  { name: 'Seu perfil', href: '#' },
  { name: 'Sair', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    async function removeTransitionAnimation() {
      const body = document.querySelector('body')
      await sleep(500)
      body?.classList.add('transition-none', 'duration-0')
    }

    removeTransitionAnimation()
  }, [])

  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-background transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-muted-foreground"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <WehandleLogo height={40} />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.href === pathname
                                  ? 'bg-accent text-primary'
                                  : 'text-foreground hover:bg-accent hover:text-primary',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.href === pathname
                                    ? 'text-primary'
                                    : 'text-gray-400 group-hover:text-primary',
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
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 focus:bg-accent text-accent-foreground hover:bg-accent hover:text-muted-foreground"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-accent-foreground group-hover:text-primary"
                        />
                        Configurações
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-background px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <WehandleLogo height={40} />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.href === pathname
                              ? 'focus:bg-accent bg-accent text-primary'
                              : 'focus:bg-accent text-accent-foreground hover:bg-accent hover:text-muted-foreground',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
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
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0"
                    />
                    Configurações
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Abrir sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-border lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="relative flex flex-1">
                <label htmlFor="search-field" className="sr-only">
                  Procurar
                </label>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-foreground"
                />
                <input
                  id="search-field"
                  name="search"
                  type="search"
                  placeholder="Procurar..."
                  className="block h-full w-full bg-background border-0 py-0 pl-12 pr-0 text-foreground placeholder:text-foreground focus:ring-0 sm:text-sm"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-foreground"
                >
                  <span className="sr-only">Ver notificações</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-border"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">
                      Abrir configurações de usuário
                    </span>
                    <Image
                      alt="Foto de perfil do usuário"
                      src="/tacio-medeiros.jpeg"
                      className="rounded-full bg-gray-50"
                      width={32}
                      height={32}
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold leading-6 text-foreground"
                      >
                        Tácio Medeiros
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 text-foreground"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-background py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-foreground data-[focus]:bg-accent"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
