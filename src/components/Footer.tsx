import { FOOTER } from "@/constants";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-emerald-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute opacity-30 inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  RealEs
                </span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-lg">
              {FOOTER.description}
            </p>

            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {FOOTER.categories.map((category, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 text-emerald-500"
                      />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-slate-800">
          <div className="flex items-start">
            <div className="p-2 bg-emerald-500/10 rounded-lg mr-4">
              <MapPin className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Our Location</h4>
              <p className="text-slate-400">
                123 Real Estate Ave, San Francisco, CA 94103
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 bg-emerald-500/10 rounded-lg mr-4">
              <Mail className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Email Us</h4>
              <p className="text-slate-400">info@reales.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 bg-emerald-500/10 rounded-lg mr-4">
              <Phone className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Call Us</h4>
              <p className="text-slate-400">(123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-slate-500">
            {FOOTER.copyright.replace("2024", currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
