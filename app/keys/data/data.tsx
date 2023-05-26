import {
  ArrowUpCircle,
  ArrowUpDown,
  Building,
  Cog,
  GraduationCap,
  HardHat,
  HelpCircle,
  Landmark,
} from "lucide-react"

export const statuses = [
  {
    value: "available",
    label: "Available",
    icon: ArrowUpCircle,
  },
  {
    value: "borrowed",
    label: "Borrowed",
    icon: HelpCircle,
  },
]

export const buildings = [
  {
    value: "Engineering",
    label: "Engineering",
    icon: HardHat,
  },
  {
    value: "Admin",
    label: "Admin",
    icon: Landmark,
  },
  {
    value: "Education",
    label: "Education",
    icon: GraduationCap,
  },
]

export const floors = [
  {
    value: "1",
    label: "1st floor",
    icon: ArrowUpDown,
  },
  {
    value: "2",
    label: "2nd floor",
    icon: ArrowUpDown,
  },
  {
    value: "3",
    label: "3rd floor",
    icon: ArrowUpDown,
  },
  {
    value: "4",
    label: "4th floor",
    icon: ArrowUpDown,
  },
  {
    value: "5",
    label: "5th floor",
    icon: ArrowUpDown,
  },
]
