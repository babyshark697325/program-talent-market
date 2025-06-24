
import React from "react";
import { Users } from "lucide-react";

interface StatsGridProps {
  studentsCount: number;
  skillsCount: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({ studentsCount, skillsCount }) => {
  return (
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
              <div className="text-2xl font-bold text-primary">{studentsCount}+</div>
              <div className="text-sm text-muted-foreground">Talented Students</div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
              <div className="text-2xl font-bold text-accent">{skillsCount}+</div>
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
  );
};

export default StatsGrid;
