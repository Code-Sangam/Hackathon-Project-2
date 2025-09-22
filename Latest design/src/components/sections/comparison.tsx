import Image from 'next/image';
import { CheckCircle2, XCircle, Library } from 'lucide-react';

const lanXFeatures = [
  'Effortless global collaboration',
  'Highly scalable & flexible solutions',
  'Advanced dashboard control',
  'Built-in data-driven analytics',
  'Latest automation solutions',
];

const othersLimitations = [
  'Limited global collaboration',
  'Rigid and non-scalable options',
  'Basic dashboard functionalities',
  'Lack of advanced analytics',
  'Outdated and complex interfaces',
];

const ComparisonSection = () => {
  return (
    <section className="py-30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full border border-border bg-card px-4 py-1.5">
            <p className="text-sm font-medium text-muted-foreground">COMPARISON</p>
          </div>
          <h2 className="text-5xl font-semibold leading-[1.2] text-white">Why Sangam Stands Out</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            See how we compare against others in performance, growth
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Sangam Card */}
          <div className="rounded-[20px] border border-border bg-secondary p-10">
            <div className="mb-8 flex h-10 items-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/images/FbO4dnbdmZd5UO3ULm6CTPenvIo-1.png?"
                alt="Sangam Logo"
                width={107}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <ul className="space-y-4">
              {lanXFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-base text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Card */}
          <div className="rounded-[20px] border border-border bg-secondary p-10">
            <div className="mb-8 flex h-10 items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center">
                 <Library className="h-full w-full text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Others</h3>
            </div>
            <ul className="space-y-4">
              {othersLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-muted-foreground" />
                  <span className="text-base text-muted-foreground">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;