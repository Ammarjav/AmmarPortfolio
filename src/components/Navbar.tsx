"use client";

import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Muhammad Ammar Javed</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Projects</a>
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</a>
            <Button className="rounded-full px-6">Contact Me</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50">Home</a>
            <a href="#projects" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50">Projects</a>
            <a href="#services" className="block px-3 py-4 text-base font-medium text-gray-900 border-b border-gray-50">Services</a>
            <div className="pt-4">
              <Button className="w-full rounded-xl py-6">Contact Me</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;