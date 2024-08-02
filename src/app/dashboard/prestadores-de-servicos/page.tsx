import { Prestadores, columns } from './columns'
import { DataTable } from './data-table'
import { mockDataTable } from './mock'

async function getData(): Promise<Prestadores[]> {
  // Fetch data from your API here.
  return mockDataTable as Prestadores[]
}

export default async function PrestadoresDeServico() {
  const data = await getData()

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
