"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

const SearchForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Property Type Icon
  const HomeIcon = () => (
    <svg
      className="h-3.5 w-3.5 text-emerald-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );

  // Address Icon
  const LocationIcon = () => (
    <svg
      className="h-3.5 w-3.5 text-emerald-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="w-full backdrop-blur-sm bg-gradient-to-r from-black/80 to-slate-900/80 rounded-xl p-5 shadow-lg border border-slate-800/50">
      {/* Desktop Layout - Using HTML Table for perfect alignment */}
      <table className="w-full border-collapse hidden lg:table">
        <thead>
          <tr>
            <th className="pb-2 text-left font-normal w-1/4">
              <label className="text-white font-semibold text-sm flex items-center gap-2">
                Property Type
                <HomeIcon />
              </label>
            </th>
            <th className="pb-2 text-left font-normal w-1/4">
              <label className="text-white font-semibold text-sm flex items-center gap-2">
                Address
                <LocationIcon />
              </label>
            </th>
            <th className="pb-2 text-left font-normal w-1/4">
              <label className="text-white font-semibold text-sm flex items-center gap-2">
                Date
                <CalendarIcon className="h-3.5 w-3.5 text-emerald-400" />
              </label>
            </th>
            <th className="pb-2 text-left font-normal w-1/4">
              <span className="invisible text-sm">Search</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-4 align-top">
              <Select>
                <SelectTrigger className="bg-white/10 border border-slate-700 focus:border-emerald-400 hover:border-slate-500 text-white h-10 transition-colors w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border border-slate-700 text-white z-[100]">
                  <SelectItem value="Buy">Buy</SelectItem>
                  <SelectItem value="Sell">Sell</SelectItem>
                  <SelectItem value="Rent">Rent</SelectItem>
                </SelectContent>
              </Select>
            </td>
            <td className="pr-4 align-top">
              <div className="relative">
                <Input
                  placeholder="Search by location"
                  className="bg-white/10 border border-slate-700 hover:border-slate-500 focus-visible:ring-emerald-500 text-white pl-9 h-10 transition-colors"
                />
                <Search className="absolute left-2.5 top-3 h-4 w-4 text-slate-400" />
              </div>
            </td>
            <td className="pr-4 align-top">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full text-left bg-white/10 border border-slate-700 hover:bg-white/20 hover:border-slate-500 hover:text-emerald-400 flex items-center justify-between h-10 transition-colors",
                      !selectedDate ? "text-slate-400" : "text-white"
                    )}
                  >
                    <span>
                      {selectedDate
                        ? format(selectedDate, "PPP")
                        : "Select date"}
                    </span>
                    <CalendarIcon className="h-4 w-4 opacity-70 ml-2 flex-shrink-0" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-slate-900 border border-slate-700 z-[100]"
                  align="start"
                  sideOffset={5}
                >
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="bg-slate-900 text-white"
                  />
                </PopoverContent>
              </Popover>
            </td>
            <td className="align-top">
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium h-10 transition-all duration-300 shadow-md hover:shadow-emerald-600/20 border border-emerald-700"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col space-y-4">
        <div>
          <div className="mb-2">
            <label className="text-white font-semibold text-sm flex items-center gap-2">
              Property Type
              <HomeIcon />
            </label>
          </div>
          <Select>
            <SelectTrigger className="bg-white/10 border border-slate-700 focus:border-emerald-400 hover:border-slate-500 text-white h-10 transition-colors w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border border-slate-700 text-white z-[100]">
              <SelectItem value="Buy">Buy</SelectItem>
              <SelectItem value="Sell">Sell</SelectItem>
              <SelectItem value="Rent">Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="mb-2">
            <label className="text-white font-semibold text-sm flex items-center gap-2">
              Address
              <LocationIcon />
            </label>
          </div>
          <div className="relative">
            <Input
              placeholder="Search by location"
              className="bg-white/10 border border-slate-700 hover:border-slate-500 focus-visible:ring-emerald-500 text-white pl-9 h-10 transition-colors"
            />
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div>
          <div className="mb-2">
            <label className="text-white font-semibold text-sm flex items-center gap-2">
              Date
              <CalendarIcon className="h-3.5 w-3.5 text-emerald-400" />
            </label>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full text-left bg-white/10 border border-slate-700 hover:bg-white/20 hover:border-slate-500 hover:text-emerald-400 flex items-center justify-between h-10 transition-colors",
                  !selectedDate ? "text-slate-400" : "text-white"
                )}
              >
                <span>
                  {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                </span>
                <CalendarIcon className="h-4 w-4 opacity-70 ml-2 flex-shrink-0" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-slate-900 border border-slate-700 z-[100]"
              align="start"
              sideOffset={5}
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                className="bg-slate-900 text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <div className="mb-2 invisible">
            <span className="text-white text-sm">Search</span>
          </div>
          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium h-10 transition-all duration-300 shadow-md hover:shadow-emerald-600/20 border border-emerald-700"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
