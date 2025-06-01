import { HOW_IT_WORKS } from "../constants";
import { ChevronRight, Home, Calendar, FileCheck } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  const stepIcons = [Home, Calendar, FileCheck];
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute opacity-20 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
              {HOW_IT_WORKS.title}
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
            Simple three-step process to find and secure your perfect property.
          </p>
        </div>

        <div className="text-center mb-12">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-full shadow-xl transition-all duration-300 hover:shadow-emerald-500/30 transform hover:translate-y-[-2px] animate-fadeIn-delay-3 border border-emerald-500/20 group">
            <span>Start Your Journey</span>
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-emerald-900/20 transition-all duration-500 animate-fadeIn-delay-${
                  index + 1
                } border border-slate-700/30 hover:border-emerald-500/30`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="absolute top-6 right-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold shadow-lg z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">{index + 1}</span>
                </div>

                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6 inline-block">
                    <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700/50 mb-6 inline-block relative group-hover:shadow-emerald-500/10 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {React.createElement(stepIcons[index], {
                        className: "h-7 w-7 text-emerald-400 relative z-10",
                      })}
                    </div>
                  </div>

                  <div className="mb-4 relative">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <div className="h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:w-16 transition-all duration-500 ease-out"></div>
                  </div>

                  <p className="text-slate-300 leading-relaxed flex-1">
                    {step.text}
                  </p>

                  {index < 2 && (
                    <div className="hidden md:flex justify-end mt-6 opacity-50 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 text-emerald-400 font-medium hover:bg-slate-800 hover:text-emerald-300 transition-all duration-300 group/link shadow-md hover:shadow-emerald-900/20"
            >
              Learn more about our process
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8 animate-bounce opacity-50">
          <svg
            className="w-6 h-6 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
