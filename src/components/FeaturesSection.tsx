
import { CheckCircle, Zap, BarChart3, Users, Shield, Search } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    title: "Lightning Fast",
    description: "Optimize your workflow with our high-performance platform that delivers results in seconds."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive data analysis and visualization tools."
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time, no matter where they are located."
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected with bank-level encryption and security protocols."
  },
  {
    icon: <Search className="h-6 w-6 text-purple-500" />,
    title: "Smart Search",
    description: "Find exactly what you need with our powerful, AI-enhanced search functionality."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-indigo-500" />,
    title: "Task Management",
    description: "Stay organized and on track with intuitive task management and progress tracking."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need to streamline your workflow, boost productivity, and achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group hover:border-indigo-200 reveal"
            >
              <div className="mb-4 p-3 rounded-lg bg-gray-50 inline-block group-hover:bg-indigo-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
