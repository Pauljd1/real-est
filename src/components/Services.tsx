import { SERVICES_TEXT } from "@/constants";
import Image from "next/image";
import { CheckCircle, Globe, Building, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to properties across 40+ countries worldwide",
    },
    {
      icon: Building,
      title: "Premium Properties",
      description: "Exclusive access to high-end luxury real estate",
    },
    {
      icon: Users,
      title: "Expert Agents",
      description: "Professional guidance from certified local experts",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-20 -bottom-40 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute opacity-20 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
              Our Services
            </span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            <div className="mx-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          </div>
          <p className="mx-auto max-w-xl text-slate-300 text-lg leading-relaxed">
            Premium real estate solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fadeIn-delay-1 group">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 mix-blend-overlay"></div>
              <Image
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/service.jpeg"
                width={600}
                height={600}
                alt="Premium Real Estate Services"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-emerald-600/90 backdrop-blur-sm py-3 px-6 rounded-full text-white font-bold">
                Serving 40+ Countries Worldwide
              </div>
            </div>
          </div>

          <div className="animate-fadeIn-delay-2">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                <span className="text-white">We deliver </span>
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  exceptional
                </span>
                <span className="text-white"> real estate experiences</span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed">
                {SERVICES_TEXT}
              </p>

              <div className="space-y-4 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 p-2 bg-emerald-500/10 rounded-lg">
                      {<feature.icon className="h-5 w-5 text-emerald-400" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-full shadow-xl transition-all duration-300 hover:shadow-emerald-500/30 transform hover:translate-y-[-2px] group">
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
