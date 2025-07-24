
import React from "react";
import { Sparkles, Star, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Warm Peach/Gold to Soft Lavender Vertical Gradient Background */}
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to top, #fbbf24 0%, #f59e0b 15%, #fb923c 30%, #fde68a 50%, #f3e8ff 75%, #faf5ff 100%)'
      }}></div>
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to top, rgba(251, 191, 36, 0.4) 0%, rgba(245, 158, 11, 0.3) 20%, rgba(251, 146, 60, 0.25) 40%, rgba(253, 230, 138, 0.2) 60%, rgba(243, 232, 255, 0.15) 80%, rgba(250, 245, 255, 0.1) 100%)'
      }}></div>
      
      {/* Sunset-Inspired Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating organic blobs with sunset colors */}
        <div className="absolute top-20 left-10 w-32 h-24 bg-gradient-to-br from-amber-200/4 to-rose-200/3 rounded-full blur-3xl animate-pulse transform rotate-12" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
        <div className="absolute top-40 right-20 w-28 h-36 bg-gradient-to-tr from-peach-200/3 to-lavender-200/2 blur-2xl animate-pulse" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animationDelay: '1s' }}></div>
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
      
      {/* Lowered Horizon Line with City Silhouette - Full Width */}
      <div className="absolute -bottom-10 left-0 w-screen h-40 pointer-events-none z-10">
        {/* Hills/City skyline silhouette */}
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
          <path d="M0,160 L0,100 L100,95 L180,85 L250,90 L320,80 L400,75 L480,85 L560,80 L640,70 L720,75 L800,65 L880,70 L960,60 L1040,65 L1120,55 L1200,60 L1200,160 Z" 
                fill="url(#skylineGradient)" opacity="0.2"/>
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#374151" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#111827" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Distant hills */}
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 96" preserveAspectRatio="none">
          <path d="M0,96 L0,55 L200,50 L400,45 L600,50 L800,40 L1000,45 L1200,35 L1200,96 Z" 
                fill="url(#hillsGradient)" opacity="0.15"/>
          <defs>
            <linearGradient id="hillsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#374151" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-[80vh] flex items-center justify-center py-16">
        <div className="text-center overflow-visible">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            {/* Setting Sun */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <div className="w-80 h-80 bg-gradient-to-r from-amber-300/40 via-orange-300/30 to-amber-300/40 rounded-full animate-pulse" style={{ background: 'radial-gradient(circle, rgba(252, 211, 77, 0.4) 0%, rgba(251, 146, 60, 0.3) 50%, transparent 100%)' }}></div>
             </div>
            
            {/* Sun Rays */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Primary rays */}
              <div className="absolute w-1 h-32 bg-gradient-to-t from-transparent via-amber-200/30 to-transparent rotate-0 -translate-y-16"></div>
              <div className="absolute w-1 h-28 bg-gradient-to-t from-transparent via-orange-200/25 to-transparent rotate-45 -translate-y-14"></div>
              <div className="absolute w-1 h-24 bg-gradient-to-t from-transparent via-amber-200/20 to-transparent rotate-90 -translate-y-12"></div>
              <div className="absolute w-1 h-28 bg-gradient-to-t from-transparent via-rose-200/25 to-transparent rotate-135 -translate-y-14"></div>
              <div className="absolute w-1 h-32 bg-gradient-to-t from-transparent via-amber-200/30 to-transparent rotate-180 -translate-y-16"></div>
              <div className="absolute w-1 h-28 bg-gradient-to-t from-transparent via-orange-200/25 to-transparent rotate-225 -translate-y-14"></div>
              <div className="absolute w-1 h-24 bg-gradient-to-t from-transparent via-amber-200/20 to-transparent rotate-270 -translate-y-12"></div>
              <div className="absolute w-1 h-28 bg-gradient-to-t from-transparent via-rose-200/25 to-transparent rotate-315 -translate-y-14"></div>
              
              {/* Secondary shorter rays */}
              <div className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-amber-200/15 to-transparent rotate-22 -translate-y-10"></div>
              <div className="absolute w-0.5 h-18 bg-gradient-to-t from-transparent via-orange-200/15 to-transparent rotate-67 -translate-y-9"></div>
              <div className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-rose-200/15 to-transparent rotate-112 -translate-y-10"></div>
              <div className="absolute w-0.5 h-18 bg-gradient-to-t from-transparent via-amber-200/15 to-transparent rotate-157 -translate-y-9"></div>
              <div className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-orange-200/15 to-transparent rotate-202 -translate-y-10"></div>
              <div className="absolute w-0.5 h-18 bg-gradient-to-t from-transparent via-rose-200/15 to-transparent rotate-247 -translate-y-9"></div>
              <div className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-amber-200/15 to-transparent rotate-292 -translate-y-10"></div>
              <div className="absolute w-0.5 h-18 bg-gradient-to-t from-transparent via-orange-200/15 to-transparent rotate-337 -translate-y-9"></div>
            </div>
            
            {/* Sparkles effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles size={300} className="text-amber-300/20 animate-pulse" />
            </div>
          </div>
          
          {/* Setting Sun with Glow Effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-none z-0">
            {/* Sun glow/halo */}
            <div className="absolute w-[500px] h-[500px] -top-12 -left-12 rounded-full opacity-15 blur-3xl" style={{ 
              background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 40%, transparent 70%)'
            }}></div>
            {/* Main sun */}
            <div className="w-96 h-96 rounded-full opacity-30" style={{ 
              background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 30%, #dc2626 60%, #7c2d12 100%)'
            }}></div>
            {/* Sun rays */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="w-1 h-20 bg-gradient-to-t from-amber-300/20 to-transparent blur-sm"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-8 rotate-15">
              <div className="w-0.5 h-16 bg-gradient-to-t from-orange-300/15 to-transparent blur-sm"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-8 -rotate-15">
              <div className="w-0.5 h-16 bg-gradient-to-t from-amber-300/15 to-transparent blur-sm"></div>
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-8 rotate-30">
              <div className="w-0.5 h-12 bg-gradient-to-t from-rose-300/10 to-transparent blur-sm"></div>
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-8 -rotate-30">
              <div className="w-0.5 h-12 bg-gradient-to-t from-orange-300/10 to-transparent blur-sm"></div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20" style={{ animationDelay: '0.6s' }}>
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
