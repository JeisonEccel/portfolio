import {
  BriefcaseBusiness,
  ChartBarBig,
  FolderGit,
  Home,
  LucideIcon,
  Mail,
  UserSearch,
} from "lucide-react"

type PageType = {
  id: string
  name: string
  path: string
  icon?: LucideIcon
}

export const pages: PageType[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: "projects",
    name: "Projects",
    path: "/projects",
    icon: FolderGit,
  },
  {
    id: "experiences",
    name: "Experiences",
    path: "/experiences",
    icon: BriefcaseBusiness,
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    icon: UserSearch,
  },
  {
    id: "contact",
    name: "Contact",
    path: "/contact",
    icon: Mail,
  },
]
