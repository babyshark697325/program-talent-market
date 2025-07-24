
import React from "react";
import { Sparkles, Zap, Star, Heart, Code, Palette, Lightbulb, Monitor, Smartphone, Cpu, Database, Globe, Wifi, Layers, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-accent/15 to-primary/10 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-6 h-6 bg-accent/25 rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-10 h-10 border-2 border-primary/15 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Icons - Positioned away from navigation */}
        <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Palette size={20} className="text-accent" />
        </div>
        <div className="absolute top-1/2 right-16 opacity-10 animate-pulse" style={{ animationDelay: '2.5s' }}>
          <Code size={18} className="text-primary" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-10 animate-pulse" style={{ animationDelay: '3.5s' }}>
          <Monitor size={16} className="text-accent" />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          <Cpu size={18} className="text-primary" />
        </div>
        <div className="absolute bottom-40 left-1/2 opacity-10 animate-pulse" style={{ animationDelay: '4s' }}>
          <Database size={16} className="text-accent" />
        </div>
        <div className="absolute bottom-32 right-1/5 opacity-10 animate-pulse" style={{ animationDelay: '0.8s' }}>
          <Terminal size={20} className="text-primary" />
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-[80vh] flex items-center justify-center py-16">
        <div className="text-center overflow-visible">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles size={300} className="text-primary animate-pulse" />
            </div>
            {/* Additional decorative elements */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Zap size={80} className="text-accent animate-pulse rotate-12" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
              <Star size={120} className="text-primary animate-pulse -rotate-12" style={{ animationDelay: '3s' }} />
            </div>
          </div>
          
          <div className="relative z-10 mb-8">
            <h1 className="text-7xl md:text-8xl font-black mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-[1.8] tracking-tight animate-fade-in pb-8">
              MyVillage
            </h1>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-6 leading-[1.8] animate-fade-in pb-8" style={{ animationDelay: '0.2s' }}>
              Talent
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-[1.8] font-medium mb-4 animate-fade-in pb-8 overflow-visible" style={{ animationDelay: '0.4s' }}>
            Where exceptional talent meets extraordinary opportunities
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Browse Talented Students
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-2xl font-semibold hover:shadow-md transition-all duration-300 hover:scale-105">
              Post a Job
            </Button>
          </div>
          
          <div className="flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
              <div className="animate-bounce">
                <ChevronDown size={24} className="text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
