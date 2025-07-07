
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockJobs } from "@/data/mockJobs";
import { Edit, Trash2, Eye, Plus } from "lucide-react";

const ManageJobs = () => {
  // For demo purposes, we'll show first 5 jobs as "managed by current user"
  const [managedJobs] = useState(mockJobs.slice(0, 5));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Manage Jobs
            </h1>
            <p className="text-muted-foreground text-lg">
              View and manage your job postings
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-primary/80">
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </div>

        {managedJobs.length > 0 ? (
          <div className="space-y-6">
            {managedJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {job.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>📅 Posted {job.postedDate}</span>
                        <span>💰 {job.budget}</span>
                        <span>⏱️ {job.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Applications:</span> 12 received
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Status:</span> 
                      <Badge variant="default" className="ml-2">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-primary/20 max-w-lg mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                No Jobs Posted Yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Start by posting your first job to connect with talented students.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary/80">
                <Plus className="mr-2 h-4 w-4" />
                Post Your First Job
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageJobs;
