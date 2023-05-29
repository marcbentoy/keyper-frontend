"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Ghost, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import { buildings, floors, statuses } from "../data/data"
import { DataTableColumnHeader } from "./data-table-column-header"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Key = {
  id: string
  room: string
  building: string
  status: "available" | "borrowed"
  floor: number
}

export const columns: ColumnDef<Key>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
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
      <DataTableColumnHeader column={column} title="Room" />
    ),
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
    accessorKey: "floor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Floor" />
    ),
    cell: ({ row }) => {
      const floor = floors.find(
        (floor) => floor.value === row.getValue("floor")
      )

      if (!floor) {
        return null
      }

      return (
        <div className="flex items-center">
          {floor.icon && (
            <floor.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{floor.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
