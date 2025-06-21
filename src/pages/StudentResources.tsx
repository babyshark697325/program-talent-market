
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  DollarSign, 
  Star, 
  FileText, 
  MessageCircle, 
  Lightbulb,
  ArrowLeft,
  ExternalLink,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";

const StudentResources: React.FC = () => {
  const navigate = useNavigate();

  const resourceCategories = [
    {
      title: "Getting Started",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Essential guides for new freelancers",
      resources: [
        { title: "Freelancer 101: Your First Steps", type: "Guide", duration: "10 min read", featured: true },
        { title: "Setting Up Your Profile", type: "Tutorial", duration: "5 min read" },
        { title: "Understanding Client Expectations", type: "Article", duration: "8 min read" },
        { title: "Building Your Portfolio", type: "Workshop", duration: "30 min" }
      ]
    },
    {
      title: "Pricing & Negotiation",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Master the art of pricing your services",
      resources: [
        { title: "How to Price Your Services", type: "Calculator", duration: "Interactive", featured: true },
        { title: "Negotiation Strategies That Work", type: "Guide", duration: "12 min read" },
        { title: "When to Raise Your Rates", type: "Article", duration: "6 min read" },
        { title: "Contract Templates", type: "Download", duration: "Instant" }
      ]
    },
    {
      title: "Client Relations",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Build lasting relationships with clients",
      resources: [
        { title: "Communication Best Practices", type: "Guide", duration: "15 min read" },
        { title: "Handling Difficult Clients", type: "Article", duration: "10 min read", featured: true },
        { title: "Email Templates Library", type: "Templates", duration: "Instant" },
        { title: "Feedback & Reviews Guide", type: "Tutorial", duration: "8 min read" }
      ]
    },
    {
      title: "Skill Development",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Continuously improve your craft",
      resources: [
        { title: "Top Skills in Demand", type: "Report", duration: "20 min read", featured: true },
        { title: "Learning Path Recommendations", type: "Guide", duration: "12 min read" },
        { title: "Free Online Courses", type: "Directory", duration: "Browse" },
        { title: "Certification Programs", type: "List", duration: "5 min read" }
      ]
    }
  ];

  const quickTools = [
    { title: "Rate Calculator", icon: <Target />, description: "Calculate fair pricing", action: "Use Tool" },
    { title: "Time Tracker", icon: <Clock />, description: "Track project hours", action: "Start Timer" },
    { title: "Invoice Generator", icon: <FileText />, description: "Create professional invoices", action: "Generate" },
    { title: "Project Planner", icon: <BookOpen />, description: "Plan your projects", action: "Start Planning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Student Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed as a freelancer. From getting started guides to advanced strategies.
            </p>
          </div>
        </div>

        {/* Quick Tools Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quick Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTools.map((tool, index) => (
              <Card key={tool.title} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(tool.icon, { className: "w-6 h-6 text-primary" })}
                  </div>
                  <h3 className="font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-3">
                  {React.cloneElement(category.icon, { className: "text-primary" })}
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card 
                    key={resource.title} 
                    className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm border-primary/10 ${
                      resource.featured ? 'ring-2 ring-primary/20' : ''
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {resource.title}
                            {resource.featured && (
                              <Badge className="ml-2 bg-gradient-to-r from-primary to-accent text-white">
                                <Star className="w-3 h-3 mr-1 fill-current" />
                                Featured
                              </Badge>
                            )}
                          </CardTitle>
                          <div className="flex items-center gap-3 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start p-0 h-auto text-left hover:bg-transparent group-hover:text-primary transition-colors"
                      >
                        Access Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-16 bg-gradient-to-r from-white/80 to-primary/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-primary/10">
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full p-4 w-fit mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with fellow students, share experiences, and get support from our vibrant community of freelancers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Join Discord Community
              </Button>
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                Weekly Office Hours
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent h-px mb-8"></div>
          <p className="text-muted-foreground text-sm opacity-80">
            Have suggestions for new resources? <span className="text-primary font-medium cursor-pointer hover:underline">Let us know!</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default StudentResources;
