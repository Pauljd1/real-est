import { TESTIMONIALS } from "../constants";
import Image from "next/image";
import { Quote, Star, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-40 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute opacity-20 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
              What Our Clients Say
            </span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            <div className="mx-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          </div>
          <p className="mx-auto max-w-2xl text-slate-300 text-lg leading-relaxed">
            Real stories from our satisfied clients around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-500 animate-fadeIn-delay-${
                (index % 4) + 1
              }`}
            >
              <div className="relative p-6">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-500" />

                <div className="relative mb-6">
                  <p className="text-slate-300 italic leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-emerald-400 mr-1"
                      fill="#10b981"
                    />
                  ))}
                </div>

                <div className="flex items-center mt-6 pt-6 border-t border-slate-700/30">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-sm transform -translate-y-1 translate-x-1 group-hover:bg-emerald-500/30 transition-colors duration-500"></div>
                    <Image
                      className="relative rounded-full border-2 border-emerald-500/50 w-12 h-12 object-cover"
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center">
                      <span className="text-sm text-emerald-400">
                        {testimonial.instagram}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full">
                    {testimonial.city_country}
                  </span>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
            View All Testimonials
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
