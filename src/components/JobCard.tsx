
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { JobPosting } from "@/data/mockJobs";
import { Building, Calendar, Mail, DollarSign } from "lucide-react";

interface JobCardProps {
  job: JobPosting;
  onView: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onView }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 bg-background text-foreground border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">{job.title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <Building size={14} />
              <span>{job.company}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {job.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign size={14} className="text-green-600" />
            <span className="font-medium text-green-700">{job.budget}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-muted-foreground" />
            <span>{job.duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button onClick={onView} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
