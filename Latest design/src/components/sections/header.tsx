"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Remove body scroll lock since we're not using overlay

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex h-[68px] items-center justify-between px-4 sm:px-10">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="https://framerusercontent.com/images/MOqF7onSVtSRNWWCZMTltu70.png"
              alt="Sangam Logo"
              width={90}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Shows below header and pushes content down */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 z-40 bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-6">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="w-full justify-start text-base font-medium h-12"
              >
                <Link href="/login" onClick={handleLinkClick}>
                  Login
                </Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg" 
                className="w-full justify-start text-base font-medium h-12"
              >
                <Link href="/register" onClick={handleLinkClick}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer to push content down when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden h-[280px] mt-[68px]"></div>
      )}
    </>
  );
}