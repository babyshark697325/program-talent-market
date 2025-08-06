
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { RoleProvider } from "@/contexts/RoleContext";
import { AuthProvider } from "@/contexts/AuthContext";
import RoleSelector from "@/components/RoleSelector";
import UserMenu from "@/components/UserMenu";
import ProtectedRoute from "@/components/ProtectedRoute";
import Auth from "./pages/Auth";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentProfile from "./pages/StudentProfile";
import JobDetail from "./pages/JobDetail";
import StudentResources from "./pages/StudentResources";
import Profile from "./pages/Profile";
import AdminUsers from "./pages/AdminUsers";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminReports from "./pages/AdminReports";
import AdminSettings from "./pages/AdminSettings";
import AdminStats from "./pages/AdminStats";
import BrowseStudents from "./pages/BrowseStudents";
import ManageJobs from "./pages/ManageJobs";
import BrowseJobs from "./pages/BrowseJobs";
import MyApplications from "./pages/MyApplications";
import SavedJobs from "./pages/SavedJobs";
import PostJob from "./pages/PostJob";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/*" element={
                <ProtectedRoute>
                  <RoleProvider>
                    <SidebarProvider>
                      <div className="min-h-screen flex w-full">
                        <AppSidebar />
                        <SidebarInset className="flex-1">
                          <div className="flex h-14 md:h-16 shrink-0 items-center gap-2 border-b px-2 md:px-4">
                            <SidebarTrigger className="h-6 w-6 md:h-8 md:w-8" />
                            <div className="h-4 w-px bg-border mx-1 md:mx-2" />
                            <div className="flex items-center gap-2 flex-1">
                              <span className="font-semibold text-xs md:text-sm text-muted-foreground hidden sm:block">
                                MyVillage Talent Platform
                              </span>
                              <span className="font-semibold text-xs text-muted-foreground sm:hidden">
                                MyVillage
                              </span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                              <RoleSelector />
                              <UserMenu />
                            </div>
                          </div>
                          <div className="flex-1">
                            <Routes>
                              <Route path="/" element={<Index />} />
                              <Route path="/browse-students" element={<BrowseStudents />} />
                              <Route path="/manage-jobs" element={<ManageJobs />} />
                              <Route path="/browse-jobs" element={<BrowseJobs />} />
                              <Route path="/my-applications" element={<MyApplications />} />
                              <Route path="/saved-jobs" element={<SavedJobs />} />
                              <Route path="/post-job" element={<PostJob />} />
                              <Route path="/student/:id" element={<StudentProfile />} />
                              <Route path="/job/:id" element={<JobDetail />} />
                              <Route path="/resources" element={<StudentResources />} />
                              <Route path="/profile" element={<Profile />} />
                              <Route path="/admin/users" element={
                                <ProtectedRoute requiredRole="admin">
                                  <AdminUsers />
                                </ProtectedRoute>
                              } />
                              <Route path="/admin/analytics" element={
                                <ProtectedRoute requiredRole="admin">
                                  <AdminAnalytics />
                                </ProtectedRoute>
                              } />
                              <Route path="/admin/reports" element={
                                <ProtectedRoute requiredRole="admin">
                                  <AdminReports />
                                </ProtectedRoute>
                              } />
                              <Route path="/admin/settings" element={
                                <ProtectedRoute requiredRole="admin">
                                  <AdminSettings />
                                </ProtectedRoute>
                              } />
                              <Route path="/admin/stats" element={
                                <ProtectedRoute requiredRole="admin">
                                  <AdminStats />
                                </ProtectedRoute>
                              } />
                              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                              <Route path="*" element={<NotFound />} />
                            </Routes>
                          </div>
                        </SidebarInset>
                      </div>
                    </SidebarProvider>
                  </RoleProvider>
                </ProtectedRoute>
              } />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
