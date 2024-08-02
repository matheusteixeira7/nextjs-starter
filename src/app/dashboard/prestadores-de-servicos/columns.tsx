'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Prestadores = {
  id: string
  empresa: string
  unidade: string
  razaoSocial: string
  cnpj: string
  categoria:
    | 'Manutenção'
    | 'Logística'
    | 'Tecnologia'
    | 'Consultoria'
    | 'Construção'
    | 'Restaurante'
    | 'Facilities'
    | 'Saúde'
    | 'Óleo e gás'
}

export const columns: ColumnDef<Prestadores>[] = [
  {
    id: 'selecionar',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'empresa',
    header: 'Empresa',
  },
  {
    accessorKey: 'unidade',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Unidade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {String(row.getValue('unidade'))}
        </div>
      )
    },
  },
  {
    accessorKey: 'razaoSocial',
    header: () => <div className="text-left">Razão Social</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {String(row.getValue('razaoSocial'))}
        </div>
      )
    },
  },
  {
    accessorKey: 'cnpj',
    header: () => <div className="text-left">CNPJ</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {String(row.getValue('cnpj'))}
        </div>
      )
    },
  },
  {
    accessorKey: 'categoria',
    header: () => <div className="text-left">Categoria</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">
          {String(row.getValue('categoria'))}
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Solicitar serviço
            </DropdownMenuItem>
            <DropdownMenuItem>Visualizar prestador</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
