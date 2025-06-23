
import React, { useState } from "react";
import StudentServiceCard from "@/components/StudentServiceCard";
import JobCard from "@/components/JobCard";
import PostJobForm from "@/components/PostJobForm";
import FeaturedStudent from "@/components/FeaturedStudent";
import { mockStudents } from "@/data/mockStudents";
import { mockJobs, JobPosting } from "@/data/mockJobs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Plus, Users, Briefcase, Sparkles, Search, BookOpen, TrendingUp, Award, Filter, SortAsc, MapPin, Clock, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRole } from "@/contexts/RoleContext";

const ALL_SKILLS = Array.from(
  new Set([...mockStudents.flatMap((s) => s.skills), ...mockJobs.flatMap((j) => j.skills)])
);

// Featured student data (could be rotated weekly)
const featuredStudent = {
  id: 1,
  name: "Alex Rivera",
  title: "Resume Review & Career Coach",
  avatarUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=256&h=256&facepad=2&q=80",
  skills: ["Career Development", "Professional Writing", "Interview Prep"],
  quote: "Helping students achieve their career dreams is what drives me every day. Every success story makes it all worthwhile!",
  clientReview: {
    text: "Alex completely transformed my resume and helped me land my dream job at a Fortune 500 company. The guidance was invaluable and the turnaround was incredibly fast!",
    clientName: "Sarah Johnson, Marketing Manager",
    rating: 5
  }
};

const Index: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"students" | "jobs">("students");
  const [jobs, setJobs] = useState<JobPosting[]>(mockJobs);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { role } = useRole();

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
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price":
        const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
        return priceA - priceB;
      case "rating":
        return 0; // Could be implemented with actual rating data
      default:
        return 0;
    }
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

  if (role === 'student') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Student Dashboard Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight tracking-tight">
                Your Dashboard
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                Track your progress, explore opportunities, and level up your skills
              </p>
            </div>
          </div>
        </div>

        {/* Student Quick Stats */}
        <div className="max-w-6xl mx-auto w-full px-6 pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-primary">12</h3>
                  <p className="text-muted-foreground">Skills Mastered</p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-accent">8</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-green-600">$2,450</h3>
                  <p className="text-muted-foreground">Earnings This Month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Browse Jobs Section */}
          <div className="bg-gradient-to-r from-white/80 to-primary/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-primary/10 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Available Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.slice(0, 6).map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onView={() => navigate(`/job/${job.id}`)}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <Button onClick={() => setActiveTab("jobs")} className="bg-gradient-to-r from-primary to-primary/80">
                View All Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Sparkles size={300} className="text-primary animate-pulse" />
            </div>
            
            <div className="relative z-10 mb-8">
              <h1 className="text-7xl md:text-8xl font-black mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight tracking-tight animate-fade-in">
                MyVillage
              </h1>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Talent
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Where exceptional talent meets extraordinary opportunities
            </p>
            
            <div className="flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 pb-16 relative z-10">
        {/* Featured Student Section */}
        <div className="mb-12 animate-fade-in">
          <FeaturedStudent 
            student={featuredStudent}
            onViewProfile={() => navigate(`/student/${featuredStudent.id}`)}
          />
        </div>

        {/* Browse Students Hero Section */}
        {activeTab === "students" && (
          <div className="mb-12 animate-fade-in">
            <div className="bg-gradient-to-r from-white/90 to-primary/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-primary/20 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-3xl flex items-center justify-center shadow-lg">
                    <Users className="text-white" size={40} />
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Discover Amazing Talent
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Connect with skilled students ready to bring your projects to life
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-primary">{mockStudents.length}+</div>
                    <div className="text-sm text-muted-foreground">Talented Students</div>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-accent">{ALL_SKILLS.length}+</div>
                    <div className="text-sm text-muted-foreground">Skills Available</div>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-green-600">4.9★</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
                    <div className="text-2xl font-bold text-purple-600">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Tab Navigation */}
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
              Students ({mockStudents.length})
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
              Jobs ({jobs.length})
            </Button>
          </div>
          
          {activeTab === "jobs" && (
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
                  onSubmit={handlePostJob}
                  onCancel={() => setIsPostJobOpen(false)}
                />
              </DialogContent>
            </Dialog>
          )}
        </div>

        {/* Enhanced Search & Filters */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 mb-10 animate-fade-in">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder={`Search ${activeTab === "students" ? "students by name, skill, or service" : "jobs by title, company, or skill"}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 py-4 text-lg rounded-2xl border-primary/30 focus:border-primary focus:ring-primary/20 bg-white/90 backdrop-blur-sm shadow-sm"
              />
            </div>
            
            {/* Sort Options for Students */}
            {activeTab === "students" && (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <SortAsc size={16} />
                  Sort by:
                </div>
                <div className="flex gap-2">
                  {[
                    { value: "name", label: "Name" },
                    { value: "price", label: "Price" },
                    { value: "rating", label: "Rating" }
                  ].map((sort) => (
                    <Button
                      key={sort.value}
                      variant={sortBy === sort.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy(sort.value as any)}
                      className={`rounded-xl transition-all duration-200 ${
                        sortBy === sort.value 
                          ? "bg-primary text-white shadow-md" 
                          : "bg-white/80 border-primary/20 hover:bg-primary/5"
                      }`}
                    >
                      {sort.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Skill Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
              <Filter size={16} />
              Filter by skill:
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                key="all"
                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm ${
                  selectedSkill === null 
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
                    : "bg-white/90 text-primary border border-primary/30 hover:bg-primary/5"
                }`}
                onClick={() => setSelectedSkill(null)}
              >
                All Skills
              </Badge>
              {ALL_SKILLS.slice(0, 8).map((skill) => (
                <Badge
                  key={skill}
                  className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm ${
                    selectedSkill === skill 
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
                      : "bg-white/90 text-primary border border-primary/30 hover:bg-primary/5"
                  }`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-4 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              {activeTab === "students" 
                ? `Found ${filteredStudents.length} student${filteredStudents.length !== 1 ? 's' : ''}`
                : `Found ${filteredJobs.length} job${filteredJobs.length !== 1 ? 's' : ''}`
              }
              {selectedSkill && ` with "${selectedSkill}" skill`}
              {search && ` matching "${search}"`}
            </p>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="animate-fade-in">
          {activeTab === "students" ? (
            filteredStudents.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredStudents.map((student, index) => (
                  <div 
                    key={student.id} 
                    className="animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <StudentServiceCard
                      student={student}
                      onView={() => navigate(`/student/${student.id}`)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-primary/20 max-w-lg mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="text-primary/40" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">No Students Found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any students matching your criteria. Try adjusting your search or filters.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearch("");
                      setSelectedSkill(null);
                    }}
                    className="bg-gradient-to-r from-primary to-primary/80"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )
          ) : (
            filteredJobs.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredJobs.map((job, index) => (
                  <div 
                    key={job.id} 
                    className="animate-fade-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <JobCard
                      job={job}
                      onView={() => navigate(`/job/${job.id}`)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-primary/20 max-w-lg mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="text-primary/40" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">No Jobs Found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any job postings matching your criteria. Try adjusting your search or filters.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearch("");
                      setSelectedSkill(null);
                    }}
                    className="bg-gradient-to-r from-primary to-primary/80"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
        
        {/* Enhanced Footer */}
        <footer className="text-center mt-24 pb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent h-px mb-8"></div>
          <p className="text-muted-foreground text-sm opacity-80 font-medium">
            &copy; {new Date().getFullYear()} MyVillage Program &middot; All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
