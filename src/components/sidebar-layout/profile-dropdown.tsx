'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import { logout } from '@/app/auth/auth'

export function ProfileDropdown() {
  return (
    <>
      <Menu as="div" className="relative">
        <MenuButton className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Abrir configurações de usuário</span>
          <Image
            alt="Foto de perfil do usuário"
            src="https://media.licdn.com/dms/image/D4D03AQFSSIE59wu3HA/profile-displayphoto-shrink_800_800/0/1702306632965?e=1728518400&v=beta&t=posApBb-2N1DdtQwIt6ZL60ziyMckSLUjLFGghNqQ-Q"
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
          <MenuItem>
            <button className="px-3 py-1 text-sm leading-6 text-foreground data-[focus]:bg-accent w-full text-left">
              Seu perfil
            </button>
          </MenuItem>

          <MenuItem>
            <button
              onClick={async () => {
                await logout()
              }}
              className="px-3 py-1 text-sm leading-6 text-foreground data-[focus]:bg-accent w-full text-left"
            >
              Sair
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  )
}
