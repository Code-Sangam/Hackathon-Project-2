import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="14"
    height="19"
    viewBox="0 0 14 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0L4.5 9.5L9 0H0Z" fill="currentColor" />
    <path d="M0 9.5L4.5 19L9 9.5H0Z" fill="currentColor" />
    <path d="M4.5 0L9 9.5H13.5L4.5 0Z" fill="currentColor" />
  </svg>
);

const navLinks = [
  { name: "Pricing", href: "/#pricing" },
  { name: "Benefits", href: "/#features" },
  { name: "Contact", href: "/contact#contact" },
  { name: "Blog", href: "/blog#changelog-section" },
  { name: "Privacy", href: "/privacy-policy" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter/ X", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-background pt-30 pb-20 mt-30">
      <div className="container max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://framerusercontent.com/images/FbO4dnbdmZd5UO3ULm6CTPenvIo.png"
                alt="Sangam Logo"
                width={88}
                height={26}
                className="h-auto"
              />
            </Link>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-base"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:landerx@mail.com"
              className="text-white/70 hover:text-white transition-colors text-base"
            >
              landerx@mail.com
            </a>
            <Button
              asChild
              className="bg-[#252A52] text-white text-base font-medium py-3 px-5 rounded-lg border border-primary/50 hover:bg-primary/20 transition-colors h-11"
            >
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>

        <hr className="my-12 border-white/10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span>{social.name}</span>
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© 2025 — Copyright</p>
          <div className="flex items-center gap-4">
            <a
              href="https://framer.link/DX0edsv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0f0f23] text-sm font-medium py-2 px-4 rounded-md flex items-center gap-2"
            >
              Get template (Free)
            </a>
            <a
              href="https://www.framer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#252A52] text-white text-sm font-medium py-2 px-4 rounded-md flex items-center gap-2"
            >
              <FramerIcon className="opacity-70" />
              Made in Framer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}