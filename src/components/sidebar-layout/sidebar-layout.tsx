'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { WehandleLogo } from '../ui/wehandle-logo'
import { Nav } from './nav'
import { ProfileDropdown } from './profile-dropdown'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { usePathname } from 'next/navigation'

export function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
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
              <Nav />
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
          <Nav />
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
              <ProfileDropdown />
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                {pathNames.map((path, index) => {
                  const isLast = index === pathNames.length - 1

                  return (
                    <React.Fragment key={path}>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={
                            path === 'dashboard' ? '/' : `/dashboard/${path}`
                          }
                        >
                          {path.replace(/-/g, ' ')}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>

            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
