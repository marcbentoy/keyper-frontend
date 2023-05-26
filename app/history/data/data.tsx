import {
  ArrowUpCircle,
  Building,
  Building2,
  FileKey,
  FileKey2,
  HelpCircle,
  Landmark,
  LogIn,
  LogOut,
} from "lucide-react"

export const types = [
  {
    value: "return",
    label: "Return",
    icon: LogIn,
  },
  {
    value: "borrow",
    label: "Borrow",
    icon: LogOut,
  },
]

export const buildings = [
  {
    value: "Engineering",
    label: "Engineering",
    icon: Building,
  },
  {
    value: "Admin",
    label: "Admin",
    icon: Landmark,
  },
  {
    value: "Education",
    label: "Education",
    icon: Building,
  },
]

export const rooms = [
  {
    value: "EN-CME-101",
    label: "EN-CME-101",
    icon: Building2,
  },
  {
    value: "EN-CME-102",
    label: "EN-CME-102",
    icon: Building2,
  },
  {
    value: "Com-Lab-1",
    label: "Com-Lab-1",
    icon: Building2,
  },
]
