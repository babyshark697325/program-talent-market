
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PostJobForm from "@/components/PostJobForm";
import { Users, Briefcase, Plus } from "lucide-react";
import { useRole } from "@/contexts/RoleContext";

interface TabNavigationProps {
  activeTab: "students" | "jobs";
  setActiveTab: (tab: "students" | "jobs") => void;
  studentsCount: number;
  jobsCount: number;
  isPostJobOpen: boolean;
  setIsPostJobOpen: (open: boolean) => void;
  onPostJob: (formData: any) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  studentsCount,
  jobsCount,
  isPostJobOpen,
  setIsPostJobOpen,
  onPostJob
}) => {
  const { role } = useRole();

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 animate-fade-in">
      <div className="flex gap-3">
        <Button
          variant={activeTab === "students" ? "default" : "outline"}
          onClick={() => setActiveTab("students")}
          className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
            activeTab === "students" 
              ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
              : "bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
          }`}
        >
          <Users size={20} />
          Students ({studentsCount})
        </Button>
        <Button
          variant={activeTab === "jobs" ? "default" : "outline"}
          onClick={() => setActiveTab("jobs")}
          className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
            activeTab === "jobs" 
              ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
              : "bg-white/80 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
          }`}
        >
          <Briefcase size={20} />
          Jobs ({jobsCount})
        </Button>
      </div>
      
      {role === 'client' && (
        <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Plus size={20} />
              Post a Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl">
            <DialogHeader>
              <DialogTitle>Post a New Job</DialogTitle>
            </DialogHeader>
            <PostJobForm 
              onSubmit={onPostJob}
              onCancel={() => setIsPostJobOpen(false)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TabNavigation;
