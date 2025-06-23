
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Star, MapPin, Clock, Users, Briefcase, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StudentServiceCard from '@/components/StudentServiceCard';
import { mockStudents } from '@/data/mockStudents';
import { mockJobs } from '@/data/mockJobs';

const Index: React.FC = () => {
  const { role } = useRole();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');

  // Get all unique skills for filtering
  const allSkills = Array.from(new Set(mockStudents.flatMap(student => student.skills)));

  // Filter students based on search and skill filter
  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = searchTerm === '' || 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSkill = selectedSkill === '' || student.skills.includes(selectedSkill);
    
    return matchesSearch && matchesSkill;
  });

  const StudentDashboard = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Welcome back! 👋</h1>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Ready to showcase your talents and connect with amazing opportunities?
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => navigate('/profile')}
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Update Profile
            </Button>
            <Button 
              onClick={() => navigate('/resources')}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Profile Views</p>
                <p className="text-2xl font-bold text-blue-900">127</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Active Applications</p>
                <p className="text-2xl font-bold text-green-900">5</p>
              </div>
              <Briefcase className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Skill Rating</p>
                <p className="text-2xl font-bold text-purple-900">4.8</p>
              </div>
              <Award className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest interactions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">New job match found</p>
                <p className="text-sm text-muted-foreground">Frontend Developer position at TechCorp</p>
              </div>
              <span className="text-xs text-muted-foreground">2 hours ago</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="font-medium">Profile viewed</p>
                <p className="text-sm text-muted-foreground">A client viewed your portfolio</p>
              </div>
              <span className="text-xs text-muted-foreground">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ClientMarketplace = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-accent rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Find Perfect Talent 🎯</h1>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Connect with skilled students ready to bring your projects to life
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Post a Job
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Browse Portfolios
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="students" className="flex items-center gap-2">
            <Users size={16} />
            Browse Students ({filteredStudents.length})
          </TabsTrigger>
          <TabsTrigger value="jobs" className="flex items-center gap-2">
            <Briefcase size={16} />
            Available Jobs ({mockJobs.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-6">
          {/* Enhanced Search and Filter Section */}
          <Card className="border-none shadow-lg bg-gradient-to-r from-gray-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    placeholder="Search by name, skills, or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-primary"
                  />
                </div>
                <Button variant="outline" className="h-12 px-6 border-2">
                  <Filter size={16} className="mr-2" />
                  Advanced Filters
                </Button>
              </div>
              
              {/* Skills Filter */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Filter by Skills:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={selectedSkill === '' ? 'default' : 'outline'}
                    className="cursor-pointer hover:bg-primary/10 px-4 py-2"
                    onClick={() => setSelectedSkill('')}
                  >
                    All Skills
                  </Badge>
                  {allSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkill === skill ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-primary/10 px-4 py-2"
                      onClick={() => setSelectedSkill(selectedSkill === skill ? '' : skill)}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {filteredStudents.length} Talented Students Available
              </h3>
              <p className="text-gray-600 mt-1">
                {searchTerm && `Showing results for "${searchTerm}"`}
                {selectedSkill && ` with ${selectedSkill} skills`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Recent</option>
              </select>
            </div>
          </div>

          {/* Students Grid */}
          {filteredStudents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStudents.map((student) => (
                <div key={student.id} className="transform transition-all duration-200 hover:scale-105">
                  <StudentServiceCard
                    student={student}
                    onView={() => navigate(`/student/${student.id}`)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center border-dashed border-2">
              <div className="text-gray-400 mb-4">
                <Users size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">No students found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters to find more results.
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer border-none shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1 line-clamp-1">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 text-sm">
                        <MapPin size={14} />
                        {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        {job.experienceLevel}
                      </div>
                    </div>
                    <span className="font-semibold text-primary text-lg">{job.budget}</span>
                  </div>
                  
                  <Button 
                    className="w-full mt-4" 
                    onClick={() => navigate(`/job/${job.id}`)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-white via-gray-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {role === 'student' ? <StudentDashboard /> : <ClientMarketplace />}
      </div>
    </div>
  );
};

export default Index;
