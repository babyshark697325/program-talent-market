
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StudentService, identityTagsConfig } from "@/data/mockStudents";

interface Props {
  student: StudentService;
  onView?: () => void;
}

const StudentServiceCard: React.FC<Props> = ({ student, onView }) => (
  <div className="flex flex-col bg-white border border-muted rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer h-full">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={student.avatarUrl}
        alt={`${student.name} profile`}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div>
        <div className="text-lg font-semibold">{student.name}</div>
        <div className="text-sm text-muted-foreground">{student.title}</div>
      </div>
    </div>
    
    {student.identityTags && student.identityTags.length > 0 && (
      <div className="flex flex-wrap gap-1 mb-3">
        {student.identityTags.map((tag) => {
          const config = identityTagsConfig[tag as keyof typeof identityTagsConfig];
          return (
            <Badge 
              key={tag} 
              className={`${config.color} text-xs px-2 py-1 rounded-md font-medium`}
            >
              {config.emoji} {config.label}
            </Badge>
          );
        })}
      </div>
    )}
    
    <div className="flex-1 mb-4 text-[15px] text-gray-700">
      {student.description}
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {student.skills.map((skill) => (
        <Badge key={skill} className="bg-accent/40 text-accent-foreground px-3 py-1 text-xs rounded-lg">
          {skill}
        </Badge>
      ))}
    </div>
    <div className="flex items-center justify-between mt-auto">
      <span className="font-medium text-primary">{student.price}</span>
      <Button
        size="sm"
        className="rounded px-4 py-2 text-[15px]"
        onClick={onView}
        variant="default"
      >
        View Details
      </Button>
    </div>
  </div>
);

export default StudentServiceCard;
