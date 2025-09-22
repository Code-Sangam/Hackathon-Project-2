"use client";

import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-start rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2d4780] to-[#1a1b3380] p-10 text-left backdrop-blur-xl">
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-violet-600">
      <Image src={icon} alt={`${title} icon`} width={32} height={32} />
    </div>
    <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-base text-muted-foreground">{description}</p>
  </div>
);

interface TabItemProps {
  icon: string;
  text: string;
}

const TabItem = ({ icon, text }: TabItemProps) => (
  <div className="flex items-center gap-3">
    <Image src={icon} alt="" width={20} height={20} className="h-5 w-5" />
    <p className="font-medium text-indigo-100">{text}</p>
  </div>
);

const features: FeatureCardProps[] = [
  {
    icon: "https://framerusercontent.com/images/kC7Gg1VqDq63nJ9bCvLhOAVmU.svg",
    title: "Effortless Integration",
    description: "Your data is synced in real-time across devices, ensuring you stay connected and informed—online or offline.",
  },
  {
    icon: "https://framerusercontent.com/images/22jPOPVe1fQp0kTMK8z8Jg2SA.svg",
    title: "Secure & Scalable",
    description: "Enterprise-grade encryption protects your information, while flexible tools adapt to your business needs.",
  },
  {
    icon: "https://framerusercontent.com/images/CrcJYSX2Y71360iuz0iA5W9nY.svg",
    title: "Actionable Insights",
    description: "Leverage AI-powered analytics to identify trends, predict outcomes, and optimize your workflow effortlessly.",
  },
];

const tabs: TabItemProps[] = [
  {
    icon: "https://framerusercontent.com/images/HnF3A3fPYTjINdNEpsD661p4U.svg",
    text: "Smart Analytics",
  },
  {
    icon: "https://framerusercontent.com/images/p0W0dJmG0QkC3k2nJ8l4uYF6Q.svg",
    text: "Real-Time Collaboration",
  },
  {
    icon: "https://framerusercontent.com/images/x6g4sXm7170E4YhC4B8tVUk.svg",
    text: "Task Prioritization",
  },
];

const AiEfficiency = () => {
  return (
    <section className="relative overflow-hidden py-[120px]">
      <div className="absolute top-[-90px] left-1/2 -z-10 h-[970px] w-[1200px] -translate-x-1/2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/images/ubO6hprNRTUPSD1LOKrAqhScc-5.png?"
          alt="AI-driven efficiency background illustration"
          width={1200}
          height={970}
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        <div className="inline-block rounded-full border border-violet-600/30 bg-indigo-500/10 py-1.5 px-4">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-200">
            AI-DRIVEN EFFICIENCY
          </p>
        </div>

        <h2 className="mt-6 text-center text-[48px] font-semibold leading-[1.2] text-white">
          Never Miss an Opportunity
        </h2>

        <p className="mt-6 max-w-xl text-center text-xl text-muted-foreground">
          Capture leads, analyze trends, and centralize critical insights
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tabs.map((tab, index) => (
            <TabItem key={index} {...tab} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiEfficiency;