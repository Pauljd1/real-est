import { ABOUT_US_TEXT } from "../constants";
import { Users, Home, Award, ChevronRight } from "lucide-react";
import Image from "next/image";

export const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: "Michael Chen",
      role: "CEO & Founder",
      photo: "/profile-pictures/user1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Lead Agent",
      photo: "/profile-pictures/user2.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Marketing Director",
      photo: "/profile-pictures/user3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-40 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute opacity-20 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
              About Us
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
            {ABOUT_US_TEXT}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Stat Card 1 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/30 p-8 hover:border-emerald-500/30 transition-all duration-500 group animate-fadeIn-delay-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 mr-4">
                <Users className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Our Clients</h3>
            </div>
            <p className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent text-5xl font-bold lg:text-7xl mb-3">
              100+
            </p>
            <p className="text-slate-400">Satisfied clients since 2020</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:w-24 transition-all duration-500 ease-out"></div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/30 p-8 hover:border-emerald-500/30 transition-all duration-500 group animate-fadeIn-delay-2">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 mr-4">
                <Home className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Properties Sold
              </h3>
            </div>
            <p className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent text-5xl font-bold lg:text-7xl mb-3">
              3,000+
            </p>
            <p className="text-slate-400">Premium properties worldwide</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:w-24 transition-all duration-500 ease-out"></div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/30 p-8 hover:border-emerald-500/30 transition-all duration-500 group animate-fadeIn-delay-3 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 mr-4">
                <Award className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Experience</h3>
            </div>
            <p className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent text-5xl font-bold lg:text-7xl mb-3">
              5+ Years
            </p>
            <p className="text-slate-400">Of real estate excellence</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-emerald-500 to-emerald-400 group-hover:w-24 transition-all duration-500 ease-out"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Meet Our <span className="text-emerald-400">Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">
                    {member.name}
                  </h4>
                  <p className="text-emerald-400">{member.role}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group">
            Learn More About Our Company
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
