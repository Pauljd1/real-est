"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-black to-slate-900 shadow-md border-b border-slate-800/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/reales_icon.svg"
              alt="RealEs Logo"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className="text-lg font-medium tracking-tight text-white">
              RealEs
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {NAV_LINKS.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-400 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3">
              <Button
                variant={"outline"}
                className="text-em border-white  font-bold hover:text-emerald-400 hover:border-emerald-400 transition-colors duration-200"
              >
                Sign In
              </Button>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200">
                Sign Up
              </Button>
            </div>
          </div>

          <button
            onClick={toggleNavbar}
            className="lg:hidden text-white p-1"
            aria-label="Toggle mobile menu"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed left-0 right-0 mt-0 z-20 bg-black/95 backdrop-blur-sm shadow-lg transition-all duration-300 lg:hidden">
          <div className="container mx-auto px-4 py-3">
            <ul className="flex flex-col items-center divide-y divide-gray-800 w-full">
              {NAV_LINKS.map((item, index) => (
                <li key={index} className="py-4 w-full text-center">
                  <Link
                    className="text-base font-medium text-white hover:text-emerald-400 transition-colors duration-200 inline-block"
                    href={item.url}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-3 py-5 mt-2">
              <Button
                variant={"outline"}
                className="text-white border-white hover:text-emerald-400 hover:border-emerald-400 transition-colors duration-200"
              >
                Sign In
              </Button>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
