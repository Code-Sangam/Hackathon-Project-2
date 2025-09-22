"use client";

import { useState } from "react";
import Image from "next/image";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, Mail, MapPin, Calendar, Building, GraduationCap, Briefcase } from "lucide-react";

export default function ProfilePage() {

  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    userType: "alumni", // or "student"
    college: "Stanford University",
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    graduationYear: "2020",
    major: "Computer Science",
    university: "Stanford University",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    bio: "Passionate software engineer with 4+ years of experience in full-stack development. Love building innovative solutions and mentoring junior developers."
  });



  return (
    <div className="relative w-full bg-[#0F0F23] min-h-screen overflow-hidden">
      {/* Background pattern matching home page */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      {/* Navigation */}
      <DashboardNavbar />
      
      <div className="relative z-10 container mx-auto px-6 py-8 pt-[120px]">
        {/* Header */}
        <div className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Profile</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="/api/placeholder/150/150" alt={userData.name} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h2 className="text-2xl font-semibold text-white mb-2">{userData.name}</h2>
                  <Badge variant="secondary" className="mb-4">
                    {userData.userType === "alumni" ? "Alumni" : "Student"}
                  </Badge>
                  
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{userData.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{userData.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Joined {userData.joinedDate}</span>
                    </div>
                    
                    {userData.userType === "alumni" ? (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="text-sm">{userData.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm">{userData.position}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span className="text-sm">{userData.college} '{userData.graduationYear}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span className="text-sm">{userData.university}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="text-sm">{userData.major}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary/30 border border-white/10">
                <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">About</CardTitle>
                    <CardDescription>Personal information and bio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {userData.bio}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {userData.userType === "alumni" ? "Professional Experience" : "Academic Information"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {userData.userType === "alumni" ? (
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-white">{userData.position}</h4>
                          <p className="text-primary">{userData.company}</p>
                          <p className="text-sm text-muted-foreground">Current Position</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Education</h4>
                          <p className="text-primary">{userData.college}</p>
                          <p className="text-sm text-muted-foreground">Graduated {userData.graduationYear}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-white">{userData.university}</h4>
                          <p className="text-primary">{userData.major}</p>
                          <p className="text-sm text-muted-foreground">Current Studies</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>



              <TabsContent value="activity" className="space-y-6">
                <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Activity</CardTitle>
                    <CardDescription>Your recent actions and connections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div>
                          <p className="text-white text-sm">Profile created</p>
                          <p className="text-muted-foreground text-xs">{userData.joinedDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-white text-sm">Account verified</p>
                          <p className="text-muted-foreground text-xs">Email verification completed</p>
                        </div>
                      </div>
                      
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">More activity will appear here as you use the platform</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}