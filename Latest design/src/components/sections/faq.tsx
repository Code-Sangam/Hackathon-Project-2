"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What makes this template unique?",
    answer:
      "This template is designed to streamline your SaaS or startup’s online presence with modern, user-centric design and seamless functionality, ensuring you stand out from competitors.",
  },
  {
    question: "Can I customize the template to match my brand?",
    answer:
      "Absolutely! The template is fully customizable, allowing you to change colors, fonts, images, and content to perfectly align with your brand identity.",
  },
  {
    question: "Is this template optimized for SEO and speed?",
    answer:
      "Yes, this template is built with Framer, ensuring exceptional performance, fast loading times, and SEO-friendly design to boost your online visibility.",
  },
  {
    question: "Is the template mobile-friendly?",
    answer:
      "Yes, the template is fully responsive, ensuring a seamless user experience across desktop, tablet, and mobile devices.",
  },
  {
    question: "Can I use this template for commercial projects?",
    answer:
      "Yes. You’re free to use this template for both personal and commercial projects — no attribution required.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-30">
      <div className="container flex flex-col items-center">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <div className="bg-secondary text-foreground text-sm font-medium tracking-[1.4px] uppercase rounded-full py-2 px-4 border border-border w-fit">
            <p>FAQ'S SECTION</p>
          </div>
          <h2 className="text-5xl font-semibold text-foreground">
            Some Common FAQ's
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            Get answers to your questions and learn about our platform
          </p>
        </div>

        <div className="w-full max-w-[896px] mx-auto text-left">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-card"
              >
                <AccordionTrigger className="p-6 text-xl font-medium text-left hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-base text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;