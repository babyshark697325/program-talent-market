
import { Calendar, Home, Users, Briefcase, BookOpen, Settings, HelpCircle, User, FileText, Shield, BarChart3, AlertTriangle } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { useRole } from "@/contexts/RoleContext"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const studentNavigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: BookOpen,
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: User,
  },
]

const clientNavigation = [
  {
    title: "Browse Talent",
    url: "/",
    icon: Home,
  },
  {
    title: "Post a Job",
    url: "/?tab=jobs",
    icon: Briefcase,
  },
]

const adminNavigation = [
  {
    title: "Admin Dashboard",
    url: "/",
    icon: Shield,
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "System Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports & Issues",
    url: "/admin/reports",
    icon: AlertTriangle,
  },
]

const studentQuickActions = [
  {
    title: "View Jobs",
    url: "/?tab=jobs",
    icon: Briefcase,
  },
  {
    title: "Update Portfolio",
    url: "/profile",
    icon: FileText,
  },
]

const clientQuickActions = [
  {
    title: "Browse Students",
    url: "/?tab=students",
    icon: Users,
  },
  {
    title: "Manage Jobs",
    url: "/?tab=jobs",
    icon: Settings,
  },
]

const adminQuickActions = [
  {
    title: "System Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Platform Stats",
    url: "/admin/stats",
    icon: BarChart3,
  },
]

export function AppSidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { role } = useRole()

  const navigationItems = role === 'student' ? studentNavigation : 
                         role === 'admin' ? adminNavigation : clientNavigation
  const quickActions = role === 'student' ? studentQuickActions : 
                      role === 'admin' ? adminQuickActions : clientQuickActions

  const handleNavigation = (url: string) => {
    if (url.includes('?tab=')) {
      const [path, params] = url.split('?')
      navigate(path)
    } else {
      navigate(url)
    }
  }

  const getRoleColor = () => {
    switch (role) {
      case 'admin': return 'from-red-500 to-red-600'
      case 'student': return 'from-blue-500 to-blue-600'
      default: return 'from-primary to-accent'
    }
  }

  const getRoleLabel = () => {
    switch (role) {
      case 'admin': return 'Admin Panel'
      case 'student': return 'Student Portal'
      default: return 'Talent Hub'
    }
  }

  return (
    <Sidebar className="border-r border-primary/10">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 bg-gradient-to-br ${getRoleColor()} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">MV</span>
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MyVillage
            </h2>
            <p className="text-xs text-muted-foreground">
              {getRoleLabel()}
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavigation(item.url)}
                    isActive={location.pathname === item.url}
                    className="cursor-pointer"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavigation(item.url)}
                    className="cursor-pointer"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
