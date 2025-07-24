
import React from "react";
import { Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Sparkles size={300} className="text-primary animate-pulse" />
          </div>
          
          <div className="relative z-10 mb-8">
            <h1 className="text-7xl md:text-8xl font-black mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-[1.1] tracking-tight animate-fade-in">
              MyVillage
            </h1>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6 leading-[1.2] animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
  );
};

export default HeroSection;
