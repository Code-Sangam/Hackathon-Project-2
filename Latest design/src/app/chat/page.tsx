"use client";

import { useState, useRef, useEffect } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile, MessageCircle, ChevronDown, Filter, X, MapPin, Briefcase, GraduationCap, Calendar, Star, Users } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: string;
  senderName?: string;
}

interface ChatContact {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  userType: "student" | "alumni";
}

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState<string>("1");
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "alumni" | "student">("alumni");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<"all" | "unread" | "active" | "archived">("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const contacts: ChatContact[] = [
    {
      id: "1",
      name: "Sarah Wilson",
      lastMessage: "Thanks for the career advice!",
      timestamp: "2 min ago",
      unreadCount: 2,
      isOnline: true,
      userType: "student"
    },
    {
      id: "2", 
      name: "Michael Chen",
      lastMessage: "The networking event was great",
      timestamp: "1h ago",
      unreadCount: 0,
      isOnline: true,
      userType: "alumni"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      lastMessage: "Can we schedule a mentorship session?",
      timestamp: "3h ago",
      unreadCount: 1,
      isOnline: false,
      userType: "student"
    },
    {
      id: "4",
      name: "David Park",
      lastMessage: "Looking forward to the project collaboration",
      timestamp: "1d ago",
      unreadCount: 0,
      isOnline: false,
      userType: "alumni"
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I saw your profile and I'm really interested in learning more about your career path in software engineering.",
      sender: "other",
      timestamp: "10:30 AM",
      senderName: "Sarah Wilson"
    },
    {
      id: "2",
      text: "Hi Sarah! I'd be happy to help. What specific aspects are you most curious about?",
      sender: "user",
      timestamp: "10:32 AM"
    },
    {
      id: "3",
      text: "I'm particularly interested in how you transitioned from university to your first job. What skills were most important?",
      sender: "other",
      timestamp: "10:35 AM",
      senderName: "Sarah Wilson"
    },
    {
      id: "4",
      text: "Great question! I'd say the most important skills were problem-solving, communication, and being willing to learn continuously. The technical skills matter, but adaptability is key.",
      sender: "user",
      timestamp: "10:38 AM"
    },
    {
      id: "5",
      text: "Thanks for the career advice!",
      sender: "other",
      timestamp: "10:40 AM",
      senderName: "Sarah Wilson"
    }
  ]);

  const selectedContactData = contacts.find(c => c.id === selectedContact);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || contact.userType === selectedFilter;
    const matchesStatusFilter = selectedStatusFilter === "all" || 
      (selectedStatusFilter === "unread" && contact.unreadCount > 0) ||
      (selectedStatusFilter === "active" && contact.isOnline) ||
      (selectedStatusFilter === "archived" && false); // Add archived logic later
    return matchesSearch && matchesFilter && matchesStatusFilter;
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative w-full bg-[#0F0F23] min-h-screen overflow-hidden">
      {/* Background pattern matching home page */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      {/* Navigation */}
      <DashboardNavbar />

      <div className="relative z-10 pt-[88px] h-screen">
        <div className="h-full flex">
          {/* Contacts Sidebar */}
          <div className="w-80 bg-card/80 border-r border-white/10 backdrop-blur-sm flex flex-col">
            {/* Search Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex gap-2 mb-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-secondary/40 border-input"
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="relative p-2 bg-secondary/40 border border-input rounded-md hover:bg-white/5 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    {selectedStatusFilter !== "all" && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </button>
                  {showFilterDropdown && (
                    <div className="absolute right-0 top-full mt-1 min-w-[120px] bg-secondary border border-input rounded-md shadow-lg z-50">
                      {["all", "unread", "active", "archived"].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedStatusFilter(option as "all" | "unread" | "active" | "archived");
                            setShowFilterDropdown(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-sm capitalize hover:bg-white/5 transition-colors first:rounded-t-md last:rounded-b-md ${
                            selectedStatusFilter === option ? 'text-primary' : 'text-white'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={() => setSelectedFilter("alumni")}
                  variant={selectedFilter === "alumni" ? "default" : "outline"}
                  size="sm"
                  className={`flex-1 text-xs ${
                    selectedFilter === "alumni" 
                      ? "bg-primary text-primary-foreground" 
                      : "border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white"
                  }`}
                >
                  Alumni
                </Button>
                <Button
                  onClick={() => setSelectedFilter("student")}
                  variant={selectedFilter === "student" ? "default" : "outline"}
                  size="sm"
                  className={`flex-1 text-xs ${
                    selectedFilter === "student" 
                      ? "bg-primary text-primary-foreground" 
                      : "border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white"
                  }`}
                >
                  Students
                </Button>
              </div>
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`p-2 cursor-pointer transition-colors hover:bg-white/5 ${
                    selectedContact === contact.id ? "bg-primary/20 border-r-2 border-primary" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {contact.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0F0F23]"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-medium truncate text-xs">{contact.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {contact.userType === "alumni" ? "Alumni" : "Student"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm truncate">{contact.lastMessage}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
                      {contact.unreadCount > 0 && (
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground font-medium">
                            {contact.unreadCount}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedContactData ? (
              <>
                {/* Chat Header */}
                <div className="p-4 bg-card/80 border-b border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={selectedContactData.avatar} alt={selectedContactData.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {selectedContactData.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {selectedContactData.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0F0F23]"></div>
                        )}
                      </div>
                      <div>
                        <h2 className="text-white font-semibold text-sm hover:text-primary cursor-pointer transition-colors" onClick={() => setShowProfilePopup(true)}>{selectedContactData.name}</h2>
                        <p className="text-muted-foreground text-sm">
                          {selectedContactData.isOnline ? "Online" : "Last seen recently"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-white"
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === "user" 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="p-4 bg-card/80 border-t border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="bg-secondary/40 border-input pr-12"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white hover:bg-white/5"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a contact to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Popup */}
      {showProfilePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-white/10 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            {/* Popup Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-white font-semibold text-lg">Profile Details</h3>
              <button
                onClick={() => setShowProfilePopup(false)}
                className="text-muted-foreground hover:text-white transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="p-6 space-y-6">
              {/* Avatar and Basic Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={selectedContactData?.avatar} alt={selectedContactData?.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {selectedContactData?.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {selectedContactData?.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xl">{selectedContactData?.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {selectedContactData?.userType === "alumni" ? "Alumni" : "Student"}
                    </Badge>
                    <span className="text-muted-foreground text-sm">
                      {selectedContactData?.isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-4">
                {/* Education */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Education</p>
                    <p className="text-muted-foreground text-sm">Computer Science, University of Technology</p>
                    <p className="text-muted-foreground text-xs">Class of 2023</p>
                  </div>
                </div>

                {/* Work */}
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Current Position</p>
                    <p className="text-muted-foreground text-sm">
                      {selectedContactData?.userType === "alumni" ? "Software Engineer at Tech Corp" : "Student"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {selectedContactData?.userType === "alumni" ? "2 years experience" : "Seeking opportunities"}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                  </div>
                </div>

                {/* Member Since */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Member Since</p>
                    <p className="text-muted-foreground text-sm">January 2024</p>
                  </div>
                </div>

                {/* Mentorship */}
                {selectedContactData?.userType === "alumni" && (
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-white font-medium">Mentorship</p>
                      <p className="text-muted-foreground text-sm">Providing career guidance in Software Engineering</p>
                      <div className="mt-2">
                        <span className="text-green-400 text-sm font-medium">$50/hour</span>
                        <span className="text-muted-foreground text-xs ml-2">• Paid mentorship</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${
                                star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-muted-foreground text-xs">4.8 (24 reviews)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat
                </Button>
                {selectedContactData?.userType === "alumni" && (
                  <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5">
                    <Users className="h-4 w-4 mr-2" />
                    Mentorship
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}