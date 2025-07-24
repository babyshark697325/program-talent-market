
import React from "react";
import { Sparkles, Star, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Sunset Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-pink-200/15 via-purple-200/10 to-indigo-200/15"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-amber-100/10 via-transparent to-rose-100/8"></div>
      
      {/* Sunset-Inspired Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating organic blobs with sunset colors */}
        <div className="absolute top-20 left-10 w-32 h-24 bg-gradient-to-br from-amber-200/12 to-rose-200/8 rounded-full blur-xl animate-pulse transform rotate-12" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
        <div className="absolute top-40 right-20 w-28 h-36 bg-gradient-to-tr from-peach-200/10 to-lavender-200/6 blur-lg animate-pulse" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-bl from-orange-200/15 to-pink-200/8 rounded-full blur-md animate-pulse" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-16 h-24 bg-gradient-to-r from-rose-200/10 to-amber-200/6 blur-sm animate-pulse transform -rotate-12" style={{ borderRadius: '50% 50% 80% 20% / 60% 40% 60% 40%', animationDelay: '3s' }}></div>
        <div className="absolute bottom-60 right-1/4 w-24 h-18 bg-gradient-to-tl from-purple-200/8 to-orange-200/12 blur-lg animate-pulse transform rotate-45" style={{ borderRadius: '70% 30% 50% 50% / 30% 70% 30% 70%', animationDelay: '4s' }}></div>
        
        {/* Flowing sunset wave shapes */}
        <div className="absolute bottom-1/3 left-1/4 w-40 h-16 bg-gradient-to-r from-amber-200/8 via-rose-200/12 to-transparent blur-md animate-pulse transform rotate-12" style={{ borderRadius: '100% 0% 100% 0% / 50% 50% 50% 50%', animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-16 w-36 h-20 bg-gradient-to-l from-pink-200/6 via-orange-200/10 to-transparent blur-lg animate-pulse transform -rotate-6" style={{ borderRadius: '0% 100% 0% 100% / 50% 50% 50% 50%', animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-12 bg-gradient-to-br from-purple-200/8 to-amber-200/6 blur-sm animate-pulse" style={{ borderRadius: '80% 20% 60% 40% / 30% 70% 30% 70%', animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-32 h-28 bg-gradient-to-tr from-rose-200/10 to-orange-200/8 blur-md animate-pulse transform rotate-30" style={{ borderRadius: '40% 60% 80% 20% / 70% 30% 70% 30%', animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/2 w-24 h-32 bg-gradient-to-t from-amber-200/6 via-pink-200/10 to-transparent blur-lg animate-pulse transform -rotate-15" style={{ borderRadius: '50% 50% 20% 80% / 60% 40% 60% 40%', animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-1/5 w-30 h-20 bg-gradient-to-bl from-purple-200/6 to-orange-200/8 blur-md animate-pulse transform rotate-18" style={{ borderRadius: '70% 30% 30% 70% / 50% 50% 50% 50%', animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-[80vh] flex items-center justify-center py-16">
        <div className="text-center overflow-visible">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles size={300} className="text-primary animate-pulse" />
            </div>
            {/* Sunset decorative elements */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Lightbulb size={80} className="text-orange-300/40 animate-pulse rotate-12" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
              <Star size={120} className="text-rose-300/30 animate-pulse -rotate-12" style={{ animationDelay: '3s' }} />
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
