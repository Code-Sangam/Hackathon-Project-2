"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface RegisterFormProps {
  userType?: string;
}

export const RegisterForm = ({ userType }: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Placeholder: implement actual registration later
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to profile page after successful signup
      window.location.href = "/profile";
    }, 800);
  };

  return (
    <Card className="w-full max-w-md bg-card/80 border border-border">
      <CardHeader>
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>Start your journey with Sangam</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Alex Johnson"
              required
              className="bg-secondary/40 border-input"
            />
          </div>
          {userType === "student" && (
            <div className="space-y-2">
              <Label htmlFor="university">University/Institution</Label>
              <Input
                id="university"
                type="text"
                placeholder="Your University Name"
                required
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          {userType === "student" && (
            <div className="space-y-2">
              <Label htmlFor="major">Major/Field of Study</Label>
              <Input
                id="major"
                type="text"
                placeholder="Computer Science"
                required
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          {userType === "alumni" && (
            <div className="space-y-2">
              <Label htmlFor="college">College/University</Label>
              <Input
                id="college"
                type="text"
                placeholder="Your College/University Name"
                required
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          {userType === "alumni" && (
            <div className="space-y-2">
              <Label htmlFor="company">Current Company</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company Name"
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          {userType === "alumni" && (
            <div className="space-y-2">
              <Label htmlFor="position">Job Title/Position</Label>
              <Input
                id="position"
                type="text"
                placeholder="Software Engineer"
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          {userType === "alumni" && (
            <div className="space-y-2">
              <Label htmlFor="graduation">Graduation Year</Label>
              <Input
                id="graduation"
                type="number"
                placeholder="2020"
                className="bg-secondary/40 border-input"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-secondary/40 border-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="••••••••"
              required
              className="bg-secondary/40 border-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              id="confirm"
              type="password"
              autoComplete="off"
              placeholder="••••••••"
              required
              className="bg-secondary/40 border-input"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the terms and privacy policy
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account? {" "}
            <Link href="/login" className="text-foreground underline underline-offset-4">Login</Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};