"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, User, Settings, LogOut, Bell } from "lucide-react";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F23]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-white font-semibold text-lg">Sangam</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/profile"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/profile"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              <User className="h-4 w-4" />
              <span className="font-medium">Profile</span>
            </Link>

            <Link
              href="/chat"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/chat"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium">Chat</span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications - Hidden on profile page */}
            {pathname !== "/profile" && (
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                <Bell className="h-4 w-4" />
              </Button>
            )}

            {/* Settings - Only visible on profile page */}
            {pathname === "/profile" && (
              <Link href="/settings">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-white/5">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {/* User Avatar */}
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/api/placeholder/32/32" alt="User" />
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  AJ
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Logout - Hidden on chat page */}
            {pathname !== "/chat" && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                className="text-muted-foreground hover:text-white hover:bg-white/5"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}