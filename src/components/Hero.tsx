import { HERO } from "@/constants";
import SearchForm from "./SearchForm";
import TableSearchForm from "./TableSearchForm";

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute opacity-30 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-6xl mx-auto gap-12 pb-10">
          <div className="space-y-6 text-center animate-fadeIn">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
              <span className="block mb-2">{HERO.title}</span>
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
                Find Your Dream Home
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-200 leading-relaxed">
              {HERO.description}
            </p>
          </div>
          <div className="w-full mt-2 justify-center">
            <TableSearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
