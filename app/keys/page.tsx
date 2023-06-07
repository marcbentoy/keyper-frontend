import { Key, columns } from "./components/columns"
import { DataTable } from "./components/data-table"

async function getData(): Promise<Key[]> {
  const responseData = [
    {
      CreatedAt: "2023-05-27T19:06:37.674454+08:00",
      UpdatedAt: "2023-05-27T19:06:37.674454+08:00",
      DeletedAt: null,
      ID: "8b18e147-3cc6-494d-83d0-f6593183ebeb",
      rfid: "234cbacd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "d0060580-1817-436a-860a-c7e49923aedd",
      RoomName: "EN-CE-202",
      floor: 2,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-24T20:19:35.884759+08:00",
      UpdatedAt: "2023-05-27T19:03:58.468273+08:00",
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
      CreatedAt: "2023-05-27T19:07:10.841708+08:00",
      UpdatedAt: "2023-05-27T23:42:59.866357+08:00",
      DeletedAt: null,
      ID: "378e4492-5acc-4bdf-8a7e-e64df6ad3ca8",
      rfid: "132e93cd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "9e3d50f3-4735-402c-b447-cd247d6ebcec",
      RoomName: "EN-CE-203",
      floor: 2,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-27T19:09:33.912877+08:00",
      UpdatedAt: "2023-05-29T14:04:54.004889+08:00",
      DeletedAt: null,
      ID: "0722aaad-21cb-4d66-b480-8e0e2b2e104a",
      rfid: "f3fd8bcd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "6502e370-2be7-4db9-a2dc-10277cd8f84e",
      RoomName: "EN-CE-303",
      floor: 3,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-27T19:06:16.82369+08:00",
      UpdatedAt: "2023-05-29T14:19:46.895115+08:00",
      DeletedAt: null,
      ID: "ee04399e-68d2-48aa-8e62-e77df878e4d8",
      rfid: "f39caecd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "4e995f58-a2ff-4fe8-a0d2-3d43e383e9c1",
      RoomName: "EN-CE-201",
      floor: 2,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-27T19:09:16.464431+08:00",
      UpdatedAt: "2023-05-29T16:02:26.085397+08:00",
      DeletedAt: null,
      ID: "2962be5d-3264-466e-85e1-8b73df7f8410",
      rfid: "8340a8cd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "5573f0c7-903d-4c59-9f9c-0434456ea8e5",
      RoomName: "EN-CE-302",
      floor: 3,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-27T19:07:50.946756+08:00",
      UpdatedAt: "2023-06-02T13:12:02.630742+08:00",
      DeletedAt: null,
      ID: "a86995cb-0b84-42b5-b4f6-817a6a6dc218",
      rfid: "a11d3d1d",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "9b72ec4c-2c41-4cf6-a201-8172dac57309",
      RoomName: "EN-CE-301",
      floor: 3,
      BuildingName: "Engineering",
    },
    {
      CreatedAt: "2023-05-27T19:04:20.444889+08:00",
      UpdatedAt: "2023-06-02T13:12:49.457451+08:00",
      DeletedAt: null,
      ID: "86f9ad28-9219-4745-a77c-865ec67f9326",
      rfid: "9315a9cd",
      status: "available",
      BuildingID: "52724857-6389-43a4-87f0-fdfcb834467c",
      RoomID: "9be8e9c9-968c-4471-8f2f-0199a318ec9c",
      RoomName: "Com-Lab-2",
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
