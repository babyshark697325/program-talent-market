
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, MapPin, Clock, Mail, Phone, Award, Users } from 'lucide-react';
import { mockStudents } from '@/data/mockStudents';

const StudentProfile = () => {
  const { id } = useParams();
  const student = mockStudents.find(s => s.id === parseInt(id || '0'));

  if (!student) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="text-center py-12">
            <h2 className="text-2xl font-bold">Student Not Found</h2>
            <p className="text-muted-foreground">The student profile you're looking for doesn't exist.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={student.avatarUrl} alt={student.name} />
              <AvatarFallback className="text-xl">
                {student.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{student.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{student.title}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(124 reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Usually responds within 2 hours</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {student.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Student
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Schedule Call
                </Button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-primary mb-1">{student.price}</div>
              <div className="text-muted-foreground">per hour</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {student.aboutMe || student.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services Offered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{student.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {student.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rate</span>
                    <span className="font-semibold text-primary">{student.price}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Sarah Johnson", days: 2 },
                  { name: "Mike Chen", days: 5 },
                  { name: "Emily Rodriguez", days: 8 }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">{review.name}</span>
                      <span className="text-muted-foreground text-sm">{review.days} days ago</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Great work with {student.skills[0].toLowerCase()}! {student.name.split(' ')[0]} delivered exactly what I needed. 
                      Highly recommend for {student.title.toLowerCase()} projects."
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Projects Completed</span>
                </div>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Success Rate</span>
                </div>
                <span className="font-semibold">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Response Time</span>
                </div>
                <span className="font-semibold">2 hours</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm font-medium">9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Weekend</span>
                  <span className="text-sm font-medium">10AM - 4PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Timezone</span>
                  <span className="text-sm font-medium">PST (UTC-8)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">AWS Cloud Practitioner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">React Developer Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">Google Analytics Certified</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
