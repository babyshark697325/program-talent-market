
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StudentService } from "@/data/mockStudents";

interface Props {
  student: StudentService;
  onView?: () => void;
}

const StudentServiceCard: React.FC<Props> = ({ student, onView }) => (
  <div className="flex flex-col bg-white border border-muted rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-4 md:p-6 cursor-pointer h-full">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 mb-4 text-center sm:text-left">
      <img
        src={student.avatarUrl}
        alt={`${student.name} profile`}
        className="w-14 md:w-16 h-14 md:h-16 rounded-full object-cover border"
      />
      <div className="flex-1 min-w-0">
        <div className="text-base md:text-lg font-semibold truncate">{student.name}</div>
        <div className="text-sm text-muted-foreground">{student.title}</div>
      </div>
    </div>
    <div className="flex-1 mb-4 text-sm md:text-[15px] text-gray-700 line-clamp-3">
      {student.description}
    </div>
    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
      {student.skills.slice(0, 3).map((skill) => (
        <Badge key={skill} className="bg-accent/40 text-accent-foreground px-2 md:px-3 py-1 text-xs rounded-lg">
          {skill}
        </Badge>
      ))}
      {student.skills.length > 3 && (
        <Badge className="bg-gray-100 text-gray-600 px-2 md:px-3 py-1 text-xs rounded-lg">
          +{student.skills.length - 3}
        </Badge>
      )}
    </div>
    <div className="flex items-center justify-between mt-auto gap-2">
      <span className="font-medium text-primary text-sm md:text-base">{student.price}</span>
      <Button
        size="sm"
        className="rounded px-3 md:px-4 py-2 text-xs md:text-sm"
        onClick={onView}
        variant="default"
      >
        View Details
      </Button>
    </div>
  </div>
);

export default StudentServiceCard;
