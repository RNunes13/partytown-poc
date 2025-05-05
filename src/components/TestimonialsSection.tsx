
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "This product has revolutionized how our team works together. We've seen a 40% increase in productivity since implementing it.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/placeholder.svg",
    stars: 5
  },
  {
    quote: "The intuitive interface and powerful features make this a must-have for any modern business. Customer support is also outstanding.",
    author: "Michael Chen",
    role: "CTO at StartupX",
    avatar: "/placeholder.svg",
    stars: 5
  },
  {
    quote: "We've tried many productivity tools, but this one stands out for its seamless integration and robust feature set.",
    author: "Jessica Williams",
    role: "Operations Director at CreativeHub",
    avatar: "/placeholder.svg",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience with our product.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-gray-100 shadow-md bg-white relative reveal"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-400">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
              <div className="flex mb-4 mt-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i + testimonial.stars} className="w-4 h-4 text-gray-200" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
