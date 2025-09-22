"use client";

import { useState, useEffect } from "react";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showUserTypeSelection, setShowUserTypeSelection] = useState(false);
  const [userType, setUserType] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const text = "Welcome, to our Connection hub";
  
  useEffect(() => {
    if (currentCharIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 100); // 100ms delay between letters
      return () => clearTimeout(timer);
    } else {
      // All letters have been shown, wait a moment then show user type selection
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 1500);
      
      const showSelectionTimer = setTimeout(() => {
        setShowUserTypeSelection(true);
      }, 2500);
      
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(showSelectionTimer);
      };
    }
  }, [currentCharIndex, text.length]);

  const handleUserTypeSelection = (type: string) => {
    setUserType(type);
    setShowUserTypeSelection(false);
    setTimeout(() => {
      setShowForm(true);
    }, 300);
  };

  return (
    <div className="relative w-full bg-[#0F0F23] min-h-screen overflow-hidden">
      {/* Background pattern matching home page */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      <section className="relative z-10 container min-h-screen pt-[120px] pb-20 flex items-center justify-center">
        {!showUserTypeSelection && !showForm ? (
          // Typewriter animation
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-white tracking-tight transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
              {text.slice(0, currentCharIndex)}
              {currentCharIndex <= text.length && (
                <span className="inline-block w-1 h-12 md:h-16 bg-primary animate-pulse ml-1 align-middle"></span>
              )}
            </h1>
          </div>
        ) : showUserTypeSelection ? (
          // User type selection
          <div className="w-full max-w-md flex flex-col items-center gap-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white mb-4">Choose Your Path</h2>
              <p className="text-muted-foreground">Are you a current student or an alumni?</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => handleUserTypeSelection("student")}
                className="w-full p-6 rounded-xl border border-white/10 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">Student</h3>
                  <p className="text-muted-foreground text-sm">Currently pursuing your education</p>
                </div>
              </button>
              <button
                onClick={() => handleUserTypeSelection("alumni")}
                className="w-full p-6 rounded-xl border border-white/10 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">Alumni</h3>
                  <p className="text-muted-foreground text-sm">Graduated and building your career</p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          // Signup form with fade-in animation
          <div className="w-full flex flex-col items-center gap-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white">Sign up as {userType === "student" ? "Student" : "Alumni"}</h1>
              <p className="text-muted-foreground">Create your Sangam account</p>
            </div>
            <RegisterForm userType={userType} />
          </div>
        )}
      </section>
    </div>
  );
}