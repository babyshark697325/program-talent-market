
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockJobs } from "@/data/mockJobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Calendar, DollarSign, Mail } from "lucide-react";

const JobDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = mockJobs.find((j) => String(j.id) === id);

  if (!job) {
    return (
      <div className="max-w-lg mx-auto py-24 px-4 text-center">
        <div className="text-2xl font-semibold mb-4">Job Not Found</div>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2" size={18} /> Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100 py-10">
      <div className="max-w-4xl w-full mx-auto bg-card shadow-lg rounded-xl p-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Directory
          </Button>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Building size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
              <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                <Building size={18} />
                <span>{job.company}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill) => (
                  <Badge key={skill} className="bg-accent/40 text-accent-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-muted/20 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-lg mb-4">Job Details</h3>
              
              <div className="flex items-center gap-3">
                <DollarSign size={20} className="text-green-600" />
                <div>
                  <div className="text-sm text-muted-foreground">Budget</div>
                  <div className="font-semibold text-green-700">{job.budget}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold">{job.duration}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Posted</div>
                  <div className="font-semibold">{new Date(job.postedDate).toLocaleDateString()}</div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="w-full" asChild>
                  <a href={`mailto:${job.contactEmail}?subject=Application for ${job.title}`}>
                    <Mail className="mr-2" size={18} />
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
