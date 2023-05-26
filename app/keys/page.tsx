import { Key, columns } from "./components/columns"
import { DataTable } from "./components/data-table"

async function getData(): Promise<Key[]> {
  // const url = "http://192.168.101.77:8080/api/key"

  // const response = await fetch(url, { cache: "no-store" })
  // const responseData = await response.json()

  const responseData = [
    {
      CreatedAt: "2023-05-24T20:19:35.884759+08:00",
      UpdatedAt: "2023-05-26T23:49:51.222304+08:00",
      DeletedAt: null,
      ID: "d2e1ed8a-a7a1-41de-aff0-7c2e0dd72217",
      rfid: "8340a9cd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "9ee26676-05cc-4cbc-a01b-db55dd364764",
      RoomName: "EN-CME-101",
      floor: 1,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-26T19:40:30.731796+08:00",
      UpdatedAt: "2023-05-26T19:40:30.731796+08:00",
      DeletedAt: null,
      ID: "fdf6a540-8cac-4426-b1b1-309220a94e96",
      rfid: "8340a9ce",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "6d0019fb-063d-43c9-8f00-6a335fdaaa42",
      RoomName: "Com-Lab-1",
      floor: 1,
      BuildingName: "Engineering",
    },
  ]

  // const formattedData = responseData.data.map((item: any) => ({
  //   id: item.rfid,
  //   status: item.status,
  //   room: item.RoomName,
  //   building: item.BuildingName,
  //   floor: item.floor.toString(),
  // }))

  const formattedData = responseData.map((item: any) => ({
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
