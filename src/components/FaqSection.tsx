
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 14 days. No credit card required. At the end of the trial, you can choose the plan that suits your needs or continue with the free version with limited features."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your billing cycle."
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer: "The Starter plan allows up to 5 team members. The Professional and Enterprise plans allow unlimited team members."
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer: "Yes, we offer special pricing for nonprofit organizations, educational institutions, and open-source projects. Please contact our sales team for more information."
  },
  {
    question: "How secure is my data?",
    answer: "We take security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform complies with GDPR, CCPA, and other privacy regulations."
  },
  {
    question: "Can I import data from other tools?",
    answer: "Yes, we offer easy import tools for most popular platforms. Our customer success team can also assist with custom migrations for enterprise customers."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, feel free to contact our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="reveal">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
