"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Edit, ArrowLeft, LogOut, User, Shield, Link as LinkIcon, Computer, Activity, Smartphone, ChevronDown } from "lucide-react";

export default function SettingsPage() {
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

  const [expandedSections, setExpandedSections] = useState({
    manageAccount: false
  });

  const [activeSection, setActiveSection] = useState('edit-profile');

  const handleSignOut = () => {
    // Handle sign out logic here
    window.location.href = "/";
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log("Saving user data:", userData);
    alert("Settings saved successfully!");
  };

  return (
    <div className="relative w-full bg-[#0F0F23] min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      {/* Custom Settings Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F23]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Go Back Button */}
            <Link href="/profile" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Go back</span>
            </Link>

            {/* Centered Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-lg">Sangam</span>
            </Link>

            {/* Empty space for balance */}
            <Button 
              onClick={handleSignOut}
              variant="ghost" 
              className="flex items-center gap-2 text-muted-foreground hover:text-white hover:bg-white/5"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Sign Out</span>
            </Button>
          </div>
        </div>
      </nav>
      
      <div className="flex pt-[88px]">
        {/* Left Sidebar */}
        <div className="w-64 bg-card/80 border-r border-white/10 backdrop-blur-sm min-h-screen">
          <div className="p-6">
            <h2 className="text-white font-semibold text-lg mb-4">Settings</h2>
            <nav className="space-y-2">
              {/* Edit Profile */}
              <button 
                onClick={() => setActiveSection('edit-profile')}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                  activeSection === 'edit-profile' 
                    ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <User className="h-4 w-4" />
                <span className="font-medium">Edit Profile</span>
              </button>
              
              {/* Change Password */}
              <button 
                onClick={() => setActiveSection('change-password')}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                  activeSection === 'change-password' 
                    ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <Shield className="h-4 w-4" />
                <span className="font-medium">Change Password</span>
              </button>
              
              {/* Linked Account */}
              <button 
                onClick={() => setActiveSection('linked-account')}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full text-left ${
                  activeSection === 'linked-account' 
                    ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <LinkIcon className="h-4 w-4" />
                <span className="font-medium">Linked Account</span>
              </button>
              
              {/* Manage Account */}
              <div>
                <button 
                  onClick={() => toggleSection('manageAccount')}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-muted-foreground hover:text-white hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="h-4 w-4" />
                    <span className="font-medium">Manage Account</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.manageAccount ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Sub-buttons */}
                {expandedSections.manageAccount && (
                  <div className="ml-6 mt-2 space-y-1">
                    <button 
                      onClick={() => setActiveSection('activity')}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm w-full text-left ${
                        activeSection === 'activity' 
                          ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Activity className="h-3 w-3" />
                      <span>Activity</span>
                    </button>
                    <button 
                      onClick={() => setActiveSection('devices')}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm w-full text-left ${
                        activeSection === 'devices' 
                          ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Smartphone className="h-3 w-3" />
                      <span>Devices</span>
                    </button>
                    <button 
                      onClick={() => setActiveSection('sessions')}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm w-full text-left ${
                        activeSection === 'sessions' 
                          ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                          : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Computer className="h-3 w-3" />
                      <span>Active Sessions</span>
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
        </div>

        <div className="max-w-4xl">
          {/* Dynamic Content Based on Active Section */}
          {activeSection === 'edit-profile' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Edit Profile Information
                </CardTitle>
                <CardDescription>Update your personal and professional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name" className="text-white">Full Name</Label>
                    <Input
                      id="edit-name"
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="bg-secondary/40 border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edit-email" className="text-white">Email</Label>
                    <Input
                      id="edit-email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      className="bg-secondary/40 border-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edit-location" className="text-white">Location</Label>
                    <Input
                      id="edit-location"
                      value={userData.location}
                      onChange={(e) => setUserData({...userData, location: e.target.value})}
                      className="bg-secondary/40 border-input"
                    />
                  </div>

                  {userData.userType === "alumni" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="edit-company" className="text-white">Company</Label>
                        <Input
                          id="edit-company"
                          value={userData.company}
                          onChange={(e) => setUserData({...userData, company: e.target.value})}
                          className="bg-secondary/40 border-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="edit-position" className="text-white">Position</Label>
                        <Input
                          id="edit-position"
                          value={userData.position}
                          onChange={(e) => setUserData({...userData, position: e.target.value})}
                          className="bg-secondary/40 border-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="edit-college" className="text-white">College/University</Label>
                        <Input
                          id="edit-college"
                          value={userData.college}
                          onChange={(e) => setUserData({...userData, college: e.target.value})}
                          className="bg-secondary/40 border-input"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="edit-university" className="text-white">University</Label>
                        <Input
                          id="edit-university"
                          value={userData.university}
                          onChange={(e) => setUserData({...userData, university: e.target.value})}
                          className="bg-secondary/40 border-input"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="edit-major" className="text-white">Major</Label>
                        <Input
                          id="edit-major"
                          value={userData.major}
                          onChange={(e) => setUserData({...userData, major: e.target.value})}
                          className="bg-secondary/40 border-input"
                        />
                      </div>
                    </>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="edit-bio" className="text-white">Bio</Label>
                  <textarea
                    id="edit-bio"
                    value={userData.bio}
                    onChange={(e) => setUserData({...userData, bio: e.target.value})}
                    className="w-full min-h-[100px] px-3 py-2 bg-secondary/40 border border-input rounded-md text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                    Save Changes
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Change Password Section */}
          {activeSection === 'change-password' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Change Password
                </CardTitle>
                <CardDescription>Update your account password for better security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-white">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter your current password"
                    className="bg-secondary/40 border-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-white">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter your new password"
                    className="bg-secondary/40 border-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-white">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your new password"
                    className="bg-secondary/40 border-input"
                  />
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="text-yellow-400 text-sm font-medium mb-2">Password Requirements:</div>
                  <ul className="text-yellow-300/80 text-sm space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Contains at least one uppercase letter</li>
                    <li>• Contains at least one lowercase letter</li>
                    <li>• Contains at least one number</li>
                    <li>• Contains at least one special character</li>
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Update Password
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Linked Account Section */}
          {activeSection === 'linked-account' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <LinkIcon className="h-5 w-5" />
                  Linked Accounts
                </CardTitle>
                <CardDescription>Manage your connected social media and professional accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Google Account */}
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Google</div>
                      <div className="text-muted-foreground text-sm">alex.johnson@gmail.com</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                    Disconnect
                  </Button>
                </div>

                {/* LinkedIn Account */}
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">in</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-muted-foreground text-sm">Connected</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10">
                    Disconnect
                  </Button>
                </div>

                {/* GitHub Account */}
                <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg opacity-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">GH</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-muted-foreground text-sm">Not connected</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                    Connect
                  </Button>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-blue-400 text-sm font-medium mb-2">Why Connect Accounts?</div>
                  <ul className="text-blue-300/80 text-sm space-y-1">
                    <li>• Easier sign-in process</li>
                    <li>• Sync professional information</li>
                    <li>• Enhanced networking opportunities</li>
                    <li>• Streamlined profile updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Activity Section */}
          {activeSection === 'activity' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Account Activity
                </CardTitle>
                <CardDescription>Review your recent account activity and interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { action: "Profile updated", time: "2 hours ago", details: "Changed bio and location" },
                    { action: "Password changed", time: "1 day ago", details: "Successfully updated account password" },
                    { action: "New message sent", time: "3 days ago", details: "Sent message to Sarah Miller" },
                    { action: "Profile viewed", time: "1 week ago", details: "Your profile was viewed 15 times" },
                    { action: "Account created", time: "1 month ago", details: "Welcome to Sangam!" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-white/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{activity.action}</div>
                        <div className="text-muted-foreground text-sm">{activity.details}</div>
                        <div className="text-muted-foreground text-xs mt-1">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Devices Section */}
          {activeSection === 'devices' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Connected Devices
                </CardTitle>
                <CardDescription>Manage devices that have access to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { device: "MacBook Pro", browser: "Chrome", location: "San Francisco, CA", current: true, lastActive: "Active now" },
                    { device: "iPhone 14", browser: "Safari", location: "San Francisco, CA", current: false, lastActive: "2 hours ago" },
                    { device: "Windows PC", browser: "Edge", location: "New York, NY", current: false, lastActive: "1 week ago" }
                  ].map((device, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center">
                          {device.device.includes('iPhone') ? (
                            <Smartphone className="h-5 w-5 text-white" />
                          ) : (
                            <Computer className="h-5 w-5 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="text-white font-medium flex items-center gap-2">
                            {device.device}
                            {device.current && (
                              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-muted-foreground text-sm">{device.browser} • {device.location}</div>
                          <div className="text-muted-foreground text-xs">{device.lastActive}</div>
                        </div>
                      </div>
                      {!device.current && (
                        <Button variant="outline" size="sm" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Active Sessions Section */}
          {activeSection === 'sessions' && (
            <Card className="bg-card/80 border border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Computer className="h-5 w-5" />
                  Active Sessions
                </CardTitle>
                <CardDescription>Monitor and manage your active login sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
                  <div className="text-blue-400 text-sm font-medium mb-2">Security Tip</div>
                  <div className="text-blue-300/80 text-sm">
                    If you notice any suspicious activity or unrecognized sessions, terminate them immediately and change your password.
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { 
                      sessionId: "sess_abc123", 
                      ip: "192.168.1.1", 
                      location: "San Francisco, CA", 
                      device: "MacBook Pro - Chrome", 
                      startTime: "2 hours ago", 
                      current: true 
                    },
                    { 
                      sessionId: "sess_def456", 
                      ip: "10.0.0.1", 
                      location: "San Francisco, CA", 
                      device: "iPhone 14 - Safari", 
                      startTime: "1 day ago", 
                      current: false 
                    },
                    { 
                      sessionId: "sess_ghi789", 
                      ip: "172.16.0.1", 
                      location: "New York, NY", 
                      device: "Windows PC - Edge", 
                      startTime: "3 days ago", 
                      current: false 
                    }
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex-1">
                        <div className="text-white font-medium flex items-center gap-2">
                          Session {session.sessionId.split('_')[1]}
                          {session.current && (
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-muted-foreground text-sm">{session.device}</div>
                        <div className="text-muted-foreground text-xs">
                          {session.ip} • {session.location} • Started {session.startTime}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {!session.current && (
                          <Button variant="outline" size="sm" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                            Terminate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <Button variant="outline" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                    Terminate All Other Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}