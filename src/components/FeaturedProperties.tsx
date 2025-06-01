import { FEATURED_PROPERTIES } from "../constants";
import { Star, MapPin, BedDouble, Bath, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-40 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute opacity-20 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_auto]">
              Featured Properties
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
            Explore our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {FEATURED_PROPERTIES.map((property, index) => (
            <div
              key={index}
              className={`group relative animate-fadeIn-delay-${
                (index % 4) + 1
              }`}
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-emerald-900/20 transition-all duration-500 border border-slate-700/30 hover:border-emerald-500/30 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    src={property.image}
                    width={500}
                    height={300}
                    alt={property.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ${property.price}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Location */}
                  <div className="flex items-center text-slate-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-emerald-400" />
                    <span>San Francisco, CA</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {property.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-slate-300">
                    <div className="flex items-center">
                      <BedDouble className="h-4 w-4 text-emerald-400 mr-1" />
                      <span className="text-sm">3 Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 text-emerald-400 mr-1" />
                      <span className="text-sm">2 Baths</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center text-slate-400 border-t border-slate-700/30 pt-4">
                    <div className="flex items-center">
                      <Star
                        fill="#10b981"
                        className="h-4 w-4 text-emerald-400"
                      />
                      <span className="ml-1 text-sm font-medium text-emerald-400">
                        {property.rating}
                      </span>
                    </div>
                    <span className="mx-2 text-slate-600">•</span>
                    <span className="text-sm">{property.reviews} reviews</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Link
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium text-sm hover:bg-emerald-500"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
          >
            View All Properties
            <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
