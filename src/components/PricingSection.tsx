
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals and small teams just getting started.",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "25 projects",
      "10GB storage",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$49",
    description: "Ideal for growing teams that need more power and flexibility.",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Custom workflows",
      "Advanced security"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific requirements.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited storage",
      "24/7 phone support",
      "On-premise option",
      "SSO and advanced security"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${
                plan.popular 
                  ? 'border-indigo-200 shadow-xl' 
                  : 'border-gray-100 shadow-md'
              } bg-white relative reveal`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-indigo-50 to-purple-50' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="p-8 border-t border-gray-100">
                <p className="font-medium mb-4">What&apos;s included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need something special? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact us</a> for a custom solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
