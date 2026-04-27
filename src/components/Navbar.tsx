"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, Briefcase, Settings, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#', icon: <Home size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Services', href: '#services', icon: <Settings size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">M. Ammar Javed</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full px-6">Contact Me</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition-colors relative z-[110]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={cn(
        "fixed inset-0 z-[105] bg-white transition-all duration-500 ease-in-out md:hidden",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          <div className="space-y-2">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-lg transition-all duration-300 group",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {link.icon}
                  </div>
                  <span className="text-xl font-bold text-gray-900">{link.name}</span>
                </div>
                <ChevronRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <div className={cn(
            "mt-auto space-y-6 transition-all duration-500 delay-300",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <div className="p-6 rounded-3xl bg-primary text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                <p className="text-primary-foreground/80 text-sm mb-6">Let's build something amazing together.</p>
                <Button 
                  variant="secondary" 
                  className="w-full rounded-xl py-6 font-bold text-lg shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contact Me
                </Button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Code2 size={120} />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400">© 2024 M. Ammar Javed</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;