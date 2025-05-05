
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Workflow?</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-10 text-lg">
          Join thousands of teams who have already upgraded their productivity. Get started today with our 14-day free trial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:text-white bg-transparent hover:bg-white/10 px-8 py-6 text-lg">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
