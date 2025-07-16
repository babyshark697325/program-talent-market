
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

  const handleStudentsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Students tab clicked, current activeTab:", activeTab);
    setActiveTab("students");
  };

  const handleJobsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Jobs tab clicked, current activeTab:", activeTab);
    setActiveTab("jobs");
  };

  const handlePostJobClick = () => {
    console.log("Post Job button clicked, current isPostJobOpen:", isPostJobOpen);
    setIsPostJobOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    console.log("Dialog open change:", open);
    setIsPostJobOpen(open);
  };

  console.log("TabNavigation render - isPostJobOpen:", isPostJobOpen, "role:", role);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 animate-fade-in">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleStudentsClick}
          className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
            activeTab === "students" 
              ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
              : "bg-white/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/5 text-foreground"
          }`}
        >
          <Users size={20} />
          Students ({studentsCount})
        </button>
        <button
          type="button"
          onClick={handleJobsClick}
          className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 ${
            activeTab === "jobs" 
              ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
              : "bg-white/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/5 text-foreground"
          }`}
        >
          <Briefcase size={20} />
          Jobs ({jobsCount})
        </button>
      </div>
      
      {role === 'client' && (
        <Dialog open={isPostJobOpen} onOpenChange={handleDialogOpenChange}>
          <DialogTrigger asChild>
            <Button 
              onClick={handlePostJobClick}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Plus size={20} />
              Post a Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl border-0 shadow-2xl">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Post a New Job
              </DialogTitle>
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
