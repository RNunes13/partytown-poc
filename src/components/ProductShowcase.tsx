
import { Check } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Digital Productivity</h2>
            <p className="text-gray-600 mb-8">
              Our intuitive dashboard brings all your work together in one place, making it easier than ever to stay organized, track progress, and collaborate with your team.
            </p>
            
            <div className="space-y-4">
              {[
                "Intuitive drag-and-drop interface",
                "Real-time collaboration tools",
                "Customizable workflows and templates",
                "Powerful automation capabilities"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">productflow.app</div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-full h-full">
                    <div className="flex justify-between mb-6">
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                        <div className="h-3 w-16 bg-gray-100 rounded-md mt-2"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="h-8 w-8 bg-indigo-100 rounded-md"></div>
                        <div className="h-8 w-8 bg-purple-100 rounded-md"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-16 bg-gray-100 rounded-md flex items-center justify-center">
                          <div className={`h-6 w-6 rounded-full bg-gradient-to-br from-indigo-${100 + i*100} to-purple-${100 + i*100}`}></div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 h-24 bg-gray-50 rounded-md border border-gray-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
