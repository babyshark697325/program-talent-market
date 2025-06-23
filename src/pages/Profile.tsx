
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, Mail, Phone, MapPin, Edit, Save, Camera } from 'lucide-react';

const Profile: React.FC = () => {
  const { role } = useRole();
  const [isEditing, setIsEditing] = React.useState(false);

  // Mock student data - in a real app this would come from a database
  const [profileData, setProfileData] = React.useState({
    name: 'Alex Johnson',
    title: 'Full Stack Developer',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    aboutMe: 'Passionate developer with 2 years of experience in React and Node.js. I love building user-friendly applications and solving complex problems.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    price: '$35/hour',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  });

  if (role !== 'student') {
    return (
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-4">Access Restricted</h1>
          <p className="text-muted-foreground">
            Profile management is only available for students. Please switch to student view to access this feature.
          </p>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, save data to database here
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-white via-gray-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <Button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center gap-2"
          >
            {isEditing ? <Save size={16} /> : <Edit size={16} />}
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src={profileData.avatarUrl}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                  >
                    <Camera size={14} />
                  </Button>
                )}
              </div>
              <CardTitle className="text-xl">{profileData.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {profileData.title}
              </CardDescription>
              <div className="text-lg font-semibold text-green-700 mt-2">
                {profileData.price}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-muted-foreground" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-muted-foreground" />
                <span>{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-muted-foreground" />
                <span>{profileData.location}</span>
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={profileData.title}
                      onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Hourly Rate</Label>
                    <Input
                      id="price"
                      value={profileData.price}
                      onChange={(e) => setProfileData({...profileData, price: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Me */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={profileData.aboutMe}
                  onChange={(e) => setProfileData({...profileData, aboutMe: e.target.value})}
                  disabled={!isEditing}
                  rows={4}
                  placeholder="Tell clients about yourself, your experience, and what makes you unique..."
                />
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>
                  Your technical skills and expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="mt-4">
                    <Label htmlFor="skills">Add/Edit Skills (comma separated)</Label>
                    <Input
                      id="skills"
                      placeholder="React, TypeScript, Node.js..."
                      className="mt-2"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Portfolio Section */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>
                  Showcase your work and projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <User size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No portfolio items yet.</p>
                  {isEditing && (
                    <Button variant="outline" className="mt-4">
                      Add Portfolio Item
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
