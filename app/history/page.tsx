import { Record, columns } from "./components/columns"
import { DataTable } from "./components/data-table"

async function getData(): Promise<Record[]> {
  const url = "http://192.168.147.91:8080/api/record"

  const response = await fetch(url, { cache: "no-store" })

  if (response.status == 404) return []

  const responseData = await response.json()

  const formattedData = responseData.data.map((item: any) => ({
    id: item.ID,
    student: item.StudentName,
    room: item.RoomName,
    building: item.BuildingName,
    type: item.type,
    datetime: new Date(item.CreatedAt),
  }))

  console.log(formattedData)

  return formattedData
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
