"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  CalendarClock,
  Ghost,
  MoreHorizontal,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { buildings, rooms, types } from "../data/data"
import { DataTableColumnHeader } from "./data-table-column-header"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Record = {
  id: string
  student: string
  room: string
  building: string
  type: "return" | "borrow"
  datetime: Date
}

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: "student",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student Name" />
    ),
    cell: ({ row }) => {
      const studentStruct = {
        value: "",
        label: "",
        icon: User,
      }

      const student = studentStruct

      student.value = row.getValue("student")
      student.label = row.getValue("student")

      if (!student) {
        return null
      }

      return (
        <div className="flex  items-center">
          {student.icon && (
            <student.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{student.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.getValue("type"))

      if (!type) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {type.icon && (
            <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{type.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rooms" />
    ),
    cell: ({ row }) => {
      const room = rooms.find((room) => room.value === row.getValue("room"))

      if (!room) {
        return null
      }

      return (
        <div className="flex items-center">
          {room.icon && (
            <room.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{room.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "building",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Building" />
    ),
    cell: ({ row }) => {
      const building = buildings.find(
        (building) => building.value === row.getValue("building")
      )

      if (!building) {
        return null
      }

      return (
        <div className="flex items-center">
          {building.icon && (
            <building.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{building.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "datetime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="DateTime" />
    ),
    cell: ({ row }) => {
      const datetimestruct = {
        value: "",
        label: "",
        icon: CalendarClock,
      }

      const datetime = datetimestruct

      const rawDateTime: Date = row.getValue("datetime")

      const stringDate = rawDateTime.toLocaleDateString()
      const stringTime = rawDateTime.toLocaleTimeString()

      datetime.value = stringDate + " " + stringTime
      datetime.label = stringDate + " " + stringTime

      if (!datetime) {
        return null
      }

      return (
        <div className="flex items-center">
          {datetime.icon && (
            <datetime.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{datetime.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
