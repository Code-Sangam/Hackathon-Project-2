"use client";

import Image from 'next/image';
import { useId } from 'react';

const avatarImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/ETgoVdeITLLIYCHTFNeVuZDMyQY-1.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/bnJJiW5Vfixlrz7M2pzoeyHBU-2.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/rlizSNVuxrrqd6I5hGaSxwqn0Os-3.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/X0pqhTmlK8gdYqPbljhuLXlyd0I-4.png?",
];

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/otv1rEDn2X7h8TFtKPCksQmAEKQ-1.svg?", name: 'Ebooks', width: 75, height: 17 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/rrRoFs4icQtustYbIGm5r5DXREI-2.svg?", name: 'Opal', width: 50, height: 17 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/hhTRf8RciR9bakkAgIckAkEiQM-3.svg?", name: 'Dune', width: 57, height: 18 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/1ph1389RD4RtUDEfqVhWbujyF7s-4.svg?", name: 'Oasis', width: 56, height: 20 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/svgs/Yn3MOOL9rTXhK9U8MLvSnEoNP8-5.svg?", name: 'Asterisk', width: 45, height: 14 },
];

const Marquee = () => {
    const id = useId();
    // Duplicating logos for a seamless loop effect
    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee-${id} {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }
        `}} />
        <div className="relative mt-24 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div 
                className="flex w-max flex-shrink-0"
                style={{ animation: `marquee-${id} 60s linear infinite` }}
            >
                {extendedLogos.map((logo, index) => (
                    <div key={index} className="flex-shrink-0 px-8" style={{ minWidth: '150px' }}>
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={logo.width}
                            height={logo.height}
                            className="h-5 w-auto object-contain brightness-0 invert opacity-40"
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};


export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#0F0F23] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem' }}></div>
      <div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%)]"></div>
      
      <section id="hero" className="relative z-10 pt-[120px] pb-[120px] text-center">
        <div className="container mx-auto flex flex-col items-center px-6">
          
          <div className="mb-6 flex items-center justify-center gap-3 rounded-full bg-secondary/30 px-3 py-1.5 text-sm shadow-md backdrop-blur-sm">
            <div className="flex -space-x-2.5">
              {avatarImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Customer ${index + 1}`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-[#1A1B33]"
                />
              ))}
            </div>
            <p className="text-muted-foreground">
              Join <span className="font-semibold text-foreground">15,725+</span> other loving customers
            </p>
          </div>

          <h1 className="max-w-4xl text-[4.5rem] font-bold leading-none text-foreground tracking-tighter">
            The best platform to grow your business
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-muted-foreground/80 leading-relaxed">
            The most powerful tools to boost sales, hire the best people, and access exclusive market insights.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://framer.link/DX0edsv"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Get Started Now
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-transparent px-8 text-base font-medium text-foreground shadow-lg transition-colors hover:bg-white/5"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <Marquee />
      </section>
    </div>
  );
}