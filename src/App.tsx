
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentProfile from "./pages/StudentProfile";
import JobDetail from "./pages/JobDetail";
import StudentResources from "./pages/StudentResources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <SidebarInset className="flex-1">
              <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="h-8 w-8" />
                <div className="h-4 w-px bg-border mx-2" />
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-muted-foreground">
                    MyVillage Talent Platform
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/student/:id" element={<StudentProfile />} />
                  <Route path="/job/:id" element={<JobDetail />} />
                  <Route path="/resources" element={<StudentResources />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
