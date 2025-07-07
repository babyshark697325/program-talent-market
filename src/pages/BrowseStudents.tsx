
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mockStudents, StudentService } from "@/data/mockStudents";
import StudentServiceCard from "@/components/StudentServiceCard";
import SearchFilters from "@/components/SearchFilters";

const BrowseStudents = () => {
  const navigate = useNavigate();
  const [filteredStudents, setFilteredStudents] = useState<StudentService[]>(mockStudents);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedIdentityTag, setSelectedIdentityTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name");

  // Get all unique skills from students
  const allSkills = Array.from(
    new Set(mockStudents.flatMap(student => student.skills))
  ).sort();

  useEffect(() => {
    let filtered = mockStudents;

    if (searchQuery) {
      filtered = filtered.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedSkill) {
      filtered = filtered.filter((student) =>
        student.skills.includes(selectedSkill)
      );
    }

    if (selectedIdentityTag) {
      filtered = filtered.filter((student) =>
        student.identityTags.includes(selectedIdentityTag)
      );
    }

    // Sort students
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
          return priceA - priceB;
        case "rating":
          // For demo purposes, using a mock rating based on name length
          return b.name.length - a.name.length;
        default:
          return 0;
      }
    });

    setFilteredStudents(filtered);
  }, [searchQuery, selectedSkill, selectedIdentityTag, sortBy]);

  const handleStudentView = (id: number) => {
    navigate(`/student/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Browse Talented Students
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover skilled students ready to help with your projects
          </p>
        </div>

        <SearchFilters
          search={searchQuery}
          setSearch={setSearchQuery}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          selectedIdentityTag={selectedIdentityTag}
          setSelectedIdentityTag={setSelectedIdentityTag}
          activeTab="students"
          allSkills={allSkills}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resultsCount={filteredStudents.length}
        />

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {filteredStudents.length} Student{filteredStudents.length !== 1 ? 's' : ''} Available
          </h2>
        </div>

        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredStudents.map((student, index) => (
              <div 
                key={student.id} 
                className="animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <StudentServiceCard
                  student={student}
                  onView={() => handleStudentView(student.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-primary/20 max-w-lg mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                No Students Found
              </h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any students matching your criteria. 
                Try adjusting your search or filters.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseStudents;
