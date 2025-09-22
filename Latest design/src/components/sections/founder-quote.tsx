import Image from "next/image";

const FounderQuote = () => {
  return (
    <section className="relative py-[120px]">
      <div
        className="absolute inset-0 top-1/2 -translate-y-1/2 h-1/2 bg-[radial-gradient(circle,rgba(79,70,229,0.45)_0%,rgba(15,15,35,0)_65%)] blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center gap-8 max-w-[900px] mx-auto text-center">
          <div className="py-2 px-4 bg-[#2a2d47]/50 border border-white/10 rounded-full">
            <p className="text-sm font-medium uppercase tracking-wider text-[#e6ecff]">
              Founders Note
            </p>
          </div>
          <h3 className="text-[32px] font-medium leading-[1.4] text-white">
            “We <span className="text-[#8297FF]">gather your site data.</span> We{" "}
            <span className="text-[#8297FF]">know your target audience</span> &amp; how
            your brand can <span className="text-[#8297FF]">stand out from crowd.</span> Best
            part is we also help you with <span className="text-[#8297FF]">Solutions</span>„
          </h3>
          <div className="flex items-center gap-4 mt-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/W7xYkGKzPzvnPv58ZBNzxS3JZI-10.jpg"
              alt="user pic"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <p className="text-base font-medium text-[#A1A8C0]">
              Co-founder & ex google designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;