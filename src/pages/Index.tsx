
import React, { useState } from "react";
import StudentServiceCard from "@/components/StudentServiceCard";
import JobCard from "@/components/JobCard";
import PostJobForm from "@/components/PostJobForm";
import { mockStudents } from "@/data/mockStudents";
import { mockJobs, JobPosting } from "@/data/mockJobs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Plus, Users, Briefcase, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ALL_SKILLS = Array.from(
  new Set([...mockStudents.flatMap((s) => s.skills), ...mockJobs.flatMap((j) => j.skills)])
);

const Index: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"students" | "jobs">("students");
  const [jobs, setJobs] = useState<JobPosting[]>(mockJobs);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredStudents = mockStudents.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.title.toLowerCase().includes(search.toLowerCase()) ||
      student.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
    const matchSkill =
      !selectedSkill || student.skills.includes(selectedSkill);
    return matchSearch && matchSkill;
  });

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
    const matchSkill =
      !selectedSkill || job.skills.includes(selectedSkill);
    return matchSearch && matchSkill;
  });

  const handlePostJob = (formData: any) => {
    const newJob: JobPosting = {
      id: jobs.length + 1,
      title: formData.title,
      company: formData.company,
      description: formData.description,
      requirements: formData.skills.split(",").map((s: string) => s.trim()).filter(Boolean),
      budget: formData.budget,
      duration: formData.duration,
      postedDate: new Date().toISOString().split('T')[0],
      contactEmail: formData.contactEmail,
      skills: formData.skills.split(",").map((s: string) => s.trim()).filter(Boolean),
    };
    
    setJobs([newJob, ...jobs]);
    setIsPostJobOpen(false);
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting is now live and visible to students.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100">
      {/* Enhanced Header Section with Strong Visual Impact */}
      <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-primary/15 overflow-hidden border-b-4 border-accent/20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-40 h-40 bg-primary rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-32 right-16 w-32 h-32 bg-accent rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-primary/40 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/60 rounded-full blur-lg animate-pulse delay-700"></div>
        </div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(34, 122, 64, 0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
          <div className="text-center">
            {/* Enhanced Decorative background elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-8">
              <Sparkles size={300} className="text-primary animate-pulse" />
            </div>
            
            {/* Main title with stronger gradient and shadow */}
            <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight tracking-tight relative z-10 drop-shadow-lg">
              MyVillage
            </h1>
            <div className="text-6xl md:text-7xl font-bold text-primary mb-8 relative z-10 drop-shadow-md">
              Talent
            </div>
            
            {/* Enhanced subtitle with better contrast */}
            <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed font-semibold mb-6">
              Where exceptional talent meets extraordinary opportunities
            </p>
            
            {/* Enhanced decorative elements */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
            
            {/* Call to action hint */}
            <div className="mt-8 text-primary/60 font-medium">
              Discover • Connect • Create
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full pt-10">
        {/* Hero/Heading Section */}
        <div className="mb-10 px-2">
          <h2 className="text-5xl font-extrabold mb-4 text-left text-primary leading-tight tracking-tight">
            {activeTab === "students" ? "Hire Top Talent from Our Program" : "Find Your Next Project"}
          </h2>
          <p className="text-xl text-muted-foreground mb-3 text-left">
            {activeTab === "students" 
              ? "Discover, hire, and collaborate with highly skilled students in web development, design, consulting, and more."
              : "Browse available job opportunities posted by clients looking for talented students."
            }
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex gap-2">
            <Button
              variant={activeTab === "students" ? "default" : "outline"}
              onClick={() => setActiveTab("students")}
              className="flex items-center gap-2"
            >
              <Users size={18} />
              Students ({mockStudents.length})
            </Button>
            <Button
              variant={activeTab === "jobs" ? "default" : "outline"}
              onClick={() => setActiveTab("jobs")}
              className="flex items-center gap-2"
            >
              <Briefcase size={18} />
              Jobs ({jobs.length})
            </Button>
          </div>
          
          {activeTab === "jobs" && (
            <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus size={18} />
                  Post a Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Post a New Job</DialogTitle>
                </DialogHeader>
                <PostJobForm 
                  onSubmit={handlePostJob}
                  onCancel={() => setIsPostJobOpen(false)}
                />
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Search & Skill Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 px-2">
          <Input
            type="text"
            placeholder={`Search by skill, ${activeTab === "students" ? "name, or service" : "title, or company"}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter by skill:</span>
            <Badge
              key="all"
              className={`cursor-pointer px-3 py-1 rounded-lg text-xs ${selectedSkill === null ? "bg-primary text-white" : ""}`}
              onClick={() => setSelectedSkill(null)}
            >
              All
            </Badge>
            {ALL_SKILLS.map((skill) => (
              <Badge
                key={skill}
                className={`cursor-pointer px-3 py-1 rounded-lg text-xs ${selectedSkill === skill ? "bg-primary text-white" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-2">
          {activeTab === "students" ? (
            filteredStudents.length ? (
              filteredStudents.map((student) => (
                <StudentServiceCard
                  key={student.id}
                  student={student}
                  onView={() => navigate(`/student/${student.id}`)}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground py-16 text-lg">
                No student services found for your search.
              </div>
            )
          ) : (
            filteredJobs.length ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onView={() => navigate(`/job/${job.id}`)}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground py-16 text-lg">
                No job postings found for your search.
              </div>
            )
          )}
        </div>
        
        <footer className="text-center mt-20 pb-6 text-muted-foreground text-sm opacity-80">
          &copy; {new Date().getFullYear()} MyVillage Program &middot; All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
