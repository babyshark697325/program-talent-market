
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100 pt-10 px-0">
      <div className="max-w-6xl mx-auto w-full">
        {/* Enhanced Page Title Section with Thumbnail */}
        <div className="mb-12 px-2 relative">
          <div className="text-center relative">
            {/* Aesthetic thumbnail image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Collaborative workspace"
                  className="w-48 h-32 md:w-60 md:h-40 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Sparkles size={200} className="text-primary" />
            </div>
            
            {/* Main title with gradient text */}
            <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight tracking-tight relative z-10">
              MyVillage
            </h1>
            <div className="text-5xl md:text-6xl font-bold text-primary mb-6 relative z-10">
              Talent
            </div>
            
            {/* Subtitle with elegant styling */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Where exceptional talent meets extraordinary opportunities
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

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
