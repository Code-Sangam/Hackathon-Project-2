import React from 'react';
import Image from 'next/image';

const CtaFinal = () => {
  return (
    <section className="relative pt-[120px] overflow-hidden">
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-primary/10 blur-[200px] rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <p className="font-semibold text-sm text-primary uppercase tracking-[0.2em]">
          WHAT YOU STILL WAITING FOR
        </p>

        <h2 className="mt-6 text-5xl font-semibold text-white" style={{ lineHeight: 1.2 }}>
          Grow Now with Sangam
        </h2>

        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          Unlock the power of data to drive smarter decisions and faster growth with our platform.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://framer.link/DX0edsv"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium h-[54px] px-6 bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-px"
          >
            Get Started Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium h-[54px] px-6 bg-secondary border border-border text-secondary-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-px"
          >
            Book a Demo
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 relative z-0">
        <div className="w-full max-w-6xl mx-auto [perspective:2000px] mb-[-260px]">
          <div
            className="rounded-t-[20px] bg-secondary border border-b-0 border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] [transform:rotateX(15deg)]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/images/MOqF7onSVtSRNWWCZMTltu70-6.png?"
              width={3492}
              height={2397}
              alt="Sangam dashboard preview"
              className="w-full h-auto rounded-t-[20px] select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;