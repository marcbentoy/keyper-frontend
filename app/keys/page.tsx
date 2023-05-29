import { Key, columns } from "./components/columns"
import { DataTable } from "./components/data-table"

async function getData(): Promise<Key[]> {
  const url = "http://192.168.147.250:8080/api/key"

  const response = await fetch(url, { cache: "no-store" })
  const responseData = await response.json()

  const formattedData = responseData.data.map((item: any) => ({
    id: item.rfid,
    status: item.status,
    room: item.RoomName,
    building: item.BuildingName,
    floor: item.floor.toString(),
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
