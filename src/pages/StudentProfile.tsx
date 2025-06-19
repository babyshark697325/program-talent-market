
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { mockStudents } from "@/data/mockStudents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Laptop, Mail, Phone } from "lucide-react";

const StudentProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = mockStudents.find((s) => String(s.id) === id);

  if (!student) {
    return (
      <div className="max-w-lg mx-auto py-24 px-4 text-center">
        <div className="text-2xl font-semibold mb-4">Profile Not Found</div>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2" size={18} /> Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-slate-100 py-10">
      <div className="max-w-3xl w-full mx-auto rounded-xl bg-card shadow p-8 flex flex-col md:flex-row gap-10 animate-fade-in">
        {/* Avatar and summary */}
        <div className="w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
          <div className="flex flex-col items-center mb-2">
            <Laptop size={36} className="text-primary mb-2 animate-pulse" />
            <img
              src={student.avatarUrl}
              alt={`${student.name} profile`}
              className="w-32 h-32 rounded-full border mb-4 object-cover shadow"
            />
          </div>
          <div className="text-2xl font-bold mb-1 text-center">{student.name}</div>
          <div className="text-[16px] text-green-700 font-semibold mb-2 text-center">
            MyVillage Program · Tech Talent
          </div>
          <div className="text-primary font-medium mb-1">{student.title}</div>
          {student.aboutMe && (
            <div className="mt-2 mb-2 w-full bg-muted/50 text-muted-foreground rounded-lg px-3 py-2 text-sm text-left">
              <span className="block font-semibold text-muted-foreground mb-1">About Me & My Tech Journey</span>
              <span>{student.aboutMe}</span>
            </div>
          )}
          <div className="text-muted-foreground text-base mb-2">{student.description}</div>
          <div className="flex flex-wrap gap-2 my-3">
            {student.skills.map((skill) => (
              <Badge key={skill} className="bg-accent/40 text-accent-foreground px-3 py-1 text-xs rounded-lg">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="text-lg font-semibold text-green-700 mt-2">{student.price}</div>
          
          {/* Contact Information */}
          {student.contact && (
            <div className="mt-4 w-full bg-white border rounded-lg p-3">
              <div className="text-sm font-semibold text-muted-foreground mb-2">Contact Information</div>
              <div className="space-y-2">
                {student.contact.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-muted-foreground" />
                    <a 
                      href={`mailto:${student.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {student.contact.email}
                    </a>
                  </div>
                )}
                {student.contact.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-muted-foreground" />
                    <a 
                      href={`tel:${student.contact.phone}`}
                      className="text-primary hover:underline"
                    >
                      {student.contact.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          <Link to="/">
            <Button variant="outline" size="sm" className="mt-5">
              <ArrowLeft className="mr-1" size={16} />
              Back to Directory
            </Button>
          </Link>
        </div>
        {/* Portfolio */}
        <div className="flex-1">
          <div className="text-xl font-bold mb-2 text-primary">Portfolio</div>
          {student.portfolio && student.portfolio.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {student.portfolio.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-muted rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <div className="font-semibold text-base mb-1">{item.title}</div>
                    {item.description && (
                      <div className="text-sm text-muted-foreground mb-1">{item.description}</div>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs underline hover:text-primary/80"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground italic">No portfolio items yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
