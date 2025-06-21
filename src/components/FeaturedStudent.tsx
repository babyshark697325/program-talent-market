
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

interface FeaturedStudentProps {
  student: {
    id: number;
    name: string;
    title: string;
    avatarUrl: string;
    skills: string[];
    quote: string;
    clientReview: {
      text: string;
      clientName: string;
      rating: number;
    };
  };
  onViewProfile: () => void;
}

const FeaturedStudent: React.FC<FeaturedStudentProps> = ({ student, onViewProfile }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-2xl translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star size={16} className="fill-current" />
            Featured Student of the Week
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Spotlight Success</h3>
          <p className="text-muted-foreground">Celebrating excellence in our community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Student Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <img
                  src={student.avatarUrl}
                  alt={`${student.name} profile`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
                  <Star size={12} className="fill-current" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{student.name}</h4>
                <p className="text-muted-foreground font-medium">{student.title}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {student.skills.map((skill) => (
                <Badge key={skill} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Student Quote */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-4 relative">
              <Quote size={16} className="text-primary/40 absolute top-2 left-2" />
              <p className="text-gray-700 italic pl-6 pr-2">"{student.quote}"</p>
            </div>

            <Button onClick={onViewProfile} className="mt-2">
              View Full Profile
            </Button>
          </div>

          {/* Client Review */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">Recent Client Review</h5>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < student.clientReview.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  ({student.clientReview.rating}.0)
                </span>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-4 leading-relaxed">
              "{student.clientReview.text}"
            </blockquote>
            
            <cite className="text-sm font-medium text-primary">
              — {student.clientReview.clientName}
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStudent;
