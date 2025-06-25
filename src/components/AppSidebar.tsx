
import { Home, Users, Briefcase, BookOpen, User, Settings, BarChart3, FileText, Shield, TrendingUp } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRole } from "@/contexts/RoleContext"
import { Link, useLocation } from "react-router-dom"

// Menu items for different roles
const clientItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Browse Students",
    url: "/",
    icon: Users,
  },
  {
    title: "View Jobs",
    url: "/",
    icon: Briefcase,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
]

const studentItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Browse Jobs",
    url: "/",
    icon: Briefcase,
  },
  {
    title: "Learning Resources",
    url: "/resources",
    icon: BookOpen,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
]

const adminItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports & Issues",
    url: "/admin/reports",
    icon: FileText,
  },
  {
    title: "System Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Platform Statistics",
    url: "/admin/stats",
    icon: TrendingUp,
  },
]

export function AppSidebar() {
  const { role } = useRole()
  const location = useLocation()

  const getMenuItems = () => {
    switch (role) {
      case 'student':
        return studentItems
      case 'admin':
        return adminItems
      default:
        return clientItems
    }
  }

  const menuItems = getMenuItems()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {role === 'admin' ? 'Admin Panel' : role === 'student' ? 'Student Portal' : 'Client Portal'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="w-full"
                  >
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          MyVillage Platform v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
