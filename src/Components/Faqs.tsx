import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion";

export default function Faqs() {
  return (
    <section className="text-white flex justify-center" id="FAQs">
      <div className="mx-[36px] md:mx-[150px] w-[1140px] my-[64px] md:my-[100px] flex flex-col items-center gap-y-[64px]">
        <span className="font-bold text-[28px] md:text-[37px] text-center">
          Frequently Asked Questions
        </span>
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="flex-col flex gap-y-[36px]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold md:text-[25px] hover:cursor-pointer">
                What service do you offer?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/80">
                  We offer a wide range of services including web development,
                  mobile app development, UI/UX design, digital marketing, and
                  consulting services. Our team specializes in creating custom
                  solutions tailored to your business needs.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold md:text-[25px] hover:cursor-pointer">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/80">
                  Project timelines vary depending on scope and complexity.
                  Simple websites might take 2-4 weeks, while complex
                  applications could take several months. After discussing your
                  requirements, we'll provide a detailed timeline and
                  milestones.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold md:text-[25px] hover:cursor-pointer">
                What are your pricing models?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/80">
                  We offer flexible pricing options including fixed-price
                  projects for well-defined work and time-and-materials for more
                  flexible engagements. We also provide retainers for ongoing
                  support and maintenance.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold md:text-[25px] hover:cursor-pointer">
                Do you provide after-launch support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-white/80">
                  Yes, we offer various support packages ranging from basic bug
                  fixes to comprehensive maintenance plans. Our goal is to
                  ensure your solution continues to perform optimally long after
                  launch.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
