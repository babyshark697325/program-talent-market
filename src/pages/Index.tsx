
import React, { useState } from "react";
import StudentServiceCard from "@/components/StudentServiceCard";
import { mockStudents } from "@/data/mockStudents";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ALL_SKILLS = Array.from(
  new Set(mockStudents.flatMap((s) => s.skills))
);

const Index: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredStudents = mockStudents.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.title.toLowerCase().includes(search.toLowerCase()) ||
      student.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      );
    const matchSkill =
      !selectedSkill || student.skills.includes(selectedSkill);
    return matchSearch && matchSkill;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100 pt-10 px-0">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero/Heading Section */}
        <div className="mb-10 px-2">
          <h1 className="text-5xl font-extrabold mb-4 text-left text-primary leading-tight tracking-tight">
            Hire Top Talent from Our Program
          </h1>
          <p className="text-xl text-muted-foreground mb-3 text-left">
            Discover, hire, and collaborate with highly skilled students in web development, design, consulting, and more.  
          </p>
        </div>

        {/* Search & Skill Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 px-2">
          <Input
            type="text"
            placeholder="Search by skill, name, or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:max-w-xs"
          />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Filter by skill:</span>
            <Badge
              key="all"
              className={`cursor-pointer px-3 py-1 rounded-lg text-xs ${selectedSkill === null ? "bg-primary text-white" : ""}`}
              onClick={() => setSelectedSkill(null)}
            >
              All
            </Badge>
            {ALL_SKILLS.map((skill) => (
              <Badge
                key={skill}
                className={`cursor-pointer px-3 py-1 rounded-lg text-xs ${selectedSkill === skill ? "bg-primary text-white" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-2">
          {filteredStudents.length ? (
            filteredStudents.map((student) => (
              <StudentServiceCard
                key={student.id}
                student={student}
                onView={() => window.alert("Profile details coming soon!")}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-16 text-lg">
              No student services found for your search.
            </div>
          )}
        </div>
        <footer className="text-center mt-20 pb-6 text-muted-foreground text-sm opacity-80">
          &copy; {new Date().getFullYear()} Your Program Name &middot; All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
