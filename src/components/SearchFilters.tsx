
import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, SortAsc } from "lucide-react";

interface SearchFiltersProps {
  search: string;
  setSearch: (search: string) => void;
  selectedSkill: string | null;
  setSelectedSkill: (skill: string | null) => void;
  activeTab: "students" | "jobs";
  allSkills: string[];
  sortBy: "name" | "price" | "rating";
  setSortBy: (sort: "name" | "price" | "rating") => void;
  resultsCount: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  search,
  setSearch,
  selectedSkill,
  setSelectedSkill,
  activeTab,
  allSkills,
  sortBy,
  setSortBy,
  resultsCount
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20 mb-10 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder={`Search ${activeTab === "students" ? "students by name, skill, or service" : "jobs by title, company, or skill"}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 py-4 text-lg rounded-2xl border-primary/30 focus:border-primary focus:ring-primary/20 bg-white/90 backdrop-blur-sm shadow-sm"
          />
        </div>
        
        {activeTab === "students" && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <SortAsc size={16} />
              Sort by:
            </div>
            <div className="flex gap-2">
              {[
                { value: "name", label: "Name" },
                { value: "price", label: "Price" },
                { value: "rating", label: "Rating" }
              ].map((sort) => (
                <Button
                  key={sort.value}
                  variant={sortBy === sort.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy(sort.value as any)}
                  className={`rounded-xl transition-all duration-200 ${
                    sortBy === sort.value 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-white/80 border-primary/20 hover:bg-primary/5"
                  }`}
                >
                  {sort.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
          <Filter size={16} />
          Filter by skill:
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge
            key="all"
            className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm ${
              selectedSkill === null 
                ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
                : "bg-white/90 text-primary border border-primary/30 hover:bg-primary/5"
            }`}
            onClick={() => setSelectedSkill(null)}
          >
            All Skills
          </Badge>
          {allSkills.slice(0, 8).map((skill) => (
            <Badge
              key={skill}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm ${
                selectedSkill === skill 
                  ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-primary/25" 
                  : "bg-white/90 text-primary border border-primary/30 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedSkill(skill)}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-primary/10">
        <p className="text-sm text-muted-foreground">
          Found {resultsCount} {activeTab === "students" ? "student" : "job"}{resultsCount !== 1 ? 's' : ''}
          {selectedSkill && ` with "${selectedSkill}" skill`}
          {search && ` matching "${search}"`}
        </p>
      </div>
    </div>
  );
};

export default SearchFilters;
