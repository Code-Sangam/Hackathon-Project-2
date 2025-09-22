import { DollarSign, Headset, Lock, Settings, Shuffle, TrendingUp } from 'lucide-react';
import React from 'react';

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: DollarSign,
    title: 'Instant Savings',
    description: 'Get immediate savings on every purchase, powered by AI to optimize your transactions.',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Insights',
    description: 'Make smarter decisions with live data and actionable insights, delivered in real-time to stay ahead of the curve',
  },
  {
    icon: Shuffle,
    title: 'Flexible Plans',
    description: 'Choose plans that adapt to your business needs, offering unparalleled scalability and cost-effectiveness',
  },
  {
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Prioritize safety with cutting-edge encryption and robust security features for every interaction',
  },
  {
    icon: Settings,
    title: 'Adaptive Systems',
    description: 'Leverage AI-driven systems that evolve with your business, ensuring efficiency and innovation at every step',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'Access expert assistance 24/7 to ensure you’re never alone on your growth journey',
  },
];

const marqueeTags1 = ["Instant Savings", "Flexible Payments", "Intelligent Spending", "Customizable Plans", "Smart Insights"];
const marqueeTags2 = ["Real-Time Automation", "Real-Time Reports", "Custom AI Plans", "Dedicated Support", "Growth With AI"];


const Marquee = ({ tags, reverse = false }: { tags: string[], reverse?: boolean }) => (
  <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul className={`flex items-center justify-center animate-infinite-scroll [&_li]:mx-3 ${reverse ? '[animation-direction:reverse]' : ''}`}>
      {tags.map((tag, i) => (
        <li key={i} className="bg-card text-muted-foreground px-5 py-2 rounded-full whitespace-nowrap text-sm">{tag}</li>
      ))}
    </ul>
    <ul className={`flex items-center justify-center animate-infinite-scroll [&_li]:mx-3 ${reverse ? '[animation-direction:reverse]' : ''}`} aria-hidden="true">
      {tags.map((tag, i) => (
        <li key={i} className="bg-card text-muted-foreground px-5 py-2 rounded-full whitespace-nowrap text-sm">{tag}</li>
      ))}
    </ul>
  </div>
);


const BenefitsSection = () => {
    return (
      <section id="benefits" className="relative py-30 bg-transparent overflow-x-hidden">
        <div 
          className="absolute inset-x-0 top-0 h-[600px] -z-10"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(79, 70, 229, 0.1), transparent 70%)'
          }}
        />
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-card text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-primary/20">
              BENEFITS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-16">
              Innovative tools and powerful insights designed to elevate your business
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-10 rounded-xl border border-border flex flex-col items-start transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-lg mb-6">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <Marquee tags={marqueeTags1} />
          <Marquee tags={marqueeTags2} reverse={true} />
        </div>
      </section>
    );
};

export default BenefitsSection;