'use client'

import * as React from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toggle } from '@/components/ui/toggle'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [filterVisibility, setFilterVisibility] = React.useState(false)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-center pb-4 gap-4">
        <div className="flex gap-4 w-full justify-start">
          <Toggle
            onClick={() => setFilterVisibility(!filterVisibility)}
            aria-label="Toggle filtros"
          >
            Filtros
          </Toggle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Colunas</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-end w-full">
          <Button>Novo prestador</Button>
          <Button>Novo cliente</Button>
          <Button>Prestador sem serviço</Button>
        </div>
      </div>

      {filterVisibility && (
        <div className="lg:flex items-center gap-4 mb-4">
          <Input
            placeholder="Filtrar por empresa"
            value={
              (table.getColumn('empresa')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('empresa')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mb-4 lg:mb-0"
          />
          <Input
            placeholder="Filtrar por unidade"
            value={
              (table.getColumn('unidade')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('unidade')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mb-4 lg:mb-0"
          />
          <Input
            placeholder="Filtrar por razão social"
            value={
              (table.getColumn('razaoSocial')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('razaoSocial')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mb-4 lg:mb-0"
          />
          <Input
            placeholder="Filtrar por CNPJ"
            value={(table.getColumn('cnpj')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('cnpj')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mb-4 lg:mb-0"
          />
          <Input
            placeholder="Filtrar por categoria"
            value={
              (table.getColumn('categoria')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('categoria')?.setFilterValue(event.target.value)
            }
            className="max-w-sm mb-4 lg:mb-0"
          />
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length}{' '}
          {table.getFilteredRowModel().rows.length > 1
            ? 'colunas selecionados.'
            : 'coluna selecionado.'}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}
