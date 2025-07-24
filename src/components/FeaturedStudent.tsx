
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Sparkles } from "lucide-react";

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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-primary/5 to-accent/10 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse opacity-30" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 p-8">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg border border-primary/30">
            <Star size={18} className="fill-current animate-pulse" />
            Featured Student of the Week
            <Sparkles size={16} className="text-accent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
            Spotlight Success
          </h3>
          <p className="text-muted-foreground font-medium text-lg">Celebrating excellence in our community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Enhanced Student Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-6 mb-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src={student.avatarUrl}
                  alt={`${student.name} profile`}
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent text-white rounded-full p-2 shadow-lg animate-pulse">
                  <Star size={14} className="fill-current" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent/80 bg-clip-text text-transparent">
                  {student.name}
                </h4>
                <p className="text-muted-foreground font-semibold text-lg">{student.title}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
              {student.skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  className="bg-gradient-to-r from-primary/80 to-accent/70 text-white border-primary/30 px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Enhanced Student Quote */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 relative shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
              <Quote size={20} className="text-primary/50 absolute top-4 left-4" />
              <p className="text-gray-700 italic pl-8 pr-4 font-medium leading-relaxed">
                "{student.quote}"
              </p>
              <div className="absolute bottom-2 right-4">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            <Button 
              onClick={onViewProfile} 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Full Profile
            </Button>
          </div>

          {/* Enhanced Client Review */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="mb-6">
              <h5 className="font-bold text-gray-900 mb-3 text-lg">Recent Client Review</h5>
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`transition-all duration-300 ${
                      i < student.clientReview.rating
                        ? "text-yellow-400 fill-current animate-pulse"
                        : "text-gray-300"
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2 font-semibold">
                  ({student.clientReview.rating}.0)
                </span>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
              "{student.clientReview.text}"
            </blockquote>
            
            <cite className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              — {student.clientReview.clientName}
            </cite>
            
            {/* Decorative element */}
            <div className="mt-4 flex justify-end">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStudent;
