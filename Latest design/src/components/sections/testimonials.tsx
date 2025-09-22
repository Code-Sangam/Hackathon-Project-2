import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonialData = [
  {
    review: "Highly intuitive and polished. It's everything we needed and more!",
    rating: 5.0,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/ETgoVdeITLLIYCHTFNeVuZDMyQY-1.png?",
    name: "Alex jonas",
    company: "JS Marketing"
  },
  {
    review: "This is truly Incredible and have saved us countless hours!",
    rating: 5.0,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/QmmaDSjXyuZNNDsZdt23lDVXI-5.png?",
    name: "John Robert",
    company: "SM Strategy"
  },
  {
    review: "Pure brilliance! This has streamlined our workflow massively.",
    rating: 4.8,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/0zuVQ2JmvxEtdnpdOq5FtRJxmNY-6.png?",
    name: "Maggie Hue",
    company: "BS Growth Ceo"
  },
  {
    review: "A top-notch solution! It's been transformative for our entire team.",
    rating: 5.0,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/4EiFhjIPXbRF4y7hS6k9U484AQM-7.jpg?",
    name: "Tappo kao",
    company: "PO Marketing"
  },
  {
    review: "Amazing product! It’s made our processes seamless and effective.",
    rating: 5.0,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/7qBFv2WmuOwj4qUFS7XUzQSFL4-8.jpg?",
    name: "jack hanma",
    company: "JK Finance"
  },
  {
    review: "Incredible design and functionality! This has exceeded our expectations.",
    rating: 5.0,
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/tvip64h9JcqV1xA68gzm2QrLSM-9.png?",
    name: "John Robert",
    company: "JO Strategy"
  }
];

const customerAvatars = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/ETgoVdeITLLIYCHTFNeVuZDMyQY-1.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/bnJJiW5Vfixlrz7M2pzoeyHBU-2.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/rlizSNVuxrrqd6I5hGaSxwqn0Os-3.png?",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a86602da-edd7-43e7-9c89-7da1f5b3a489-individual-screenshot-602569-framer-app/assets/icons/X0pqhTmlK8gdYqPbljhuLXlyd0I-4.png?",
];

interface Testimonial {
  review: string;
  rating: number;
  avatar: string;
  name: string;
  company: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="break-inside-avoid bg-card p-8 rounded-[24px] flex flex-col gap-6">
      <p className="text-foreground text-lg leading-relaxed">"{testimonial.review}"</p>
      <div className="flex items-center gap-2 mt-auto pt-6 border-t border-white/5">
        <Image 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          width={48} 
          height={48} 
          className="rounded-full object-cover h-12 w-12"
        />
        <div className="flex-grow">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
        <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">{testimonial.rating.toFixed(1)}</span>
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-[120px]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block bg-primary/10 text-[#817aff] border border-primary/50 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            WALL OF LOVE
          </div>
          <h2 className="text-5xl font-semibold text-foreground" style={{ lineHeight: 1.2 }}>
            Loved by thinkers
          </h2>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            Here’s what people worldwide are saying about us
          </p>
        </div>

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonialData.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="flex -space-x-4">
            {customerAvatars.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Customer ${index + 1}`}
                width={48}
                height={48}
                className="rounded-full border-2 border-background object-cover h-12 w-12"
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <p className="text-base">Join</p>
            <p className="font-semibold text-foreground text-base">1,000+</p>
            <p className="text-base">other loving customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;