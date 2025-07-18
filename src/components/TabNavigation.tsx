
import React from "react";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Plus } from "lucide-react";
import { useRole } from "@/contexts/RoleContext";
import { useNavigate } from "react-router-dom";

interface TabNavigationProps {
  activeTab: "students" | "jobs";
  setActiveTab: (tab: "students" | "jobs") => void;
  studentsCount: number;
  jobsCount: number;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
  studentsCount,
  jobsCount,
}) => {
  const { role } = useRole();
  const navigate = useNavigate();

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

  const handlePostJobClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/post-job");
  };

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
        <Button 
          type="button"
          onClick={handlePostJobClick}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Plus size={20} />
          Post a Job
        </Button>
      )}
    </div>
  );
};

export default TabNavigation;
