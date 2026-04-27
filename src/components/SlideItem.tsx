"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from 'lucide-react';

interface SlideProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  isActive: boolean;
}

const SlideItem = ({ title, description, image, link, tag, isActive }: SlideProps) => {
  return (
    <div className="relative w-full h-[85vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image with Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
        />
        {/* Multi-layered overlay for better text readability and professional depth */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Centralized Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className={`transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-white uppercase bg-primary/90 backdrop-blur-md rounded-full shadow-xl">
            {tag}
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-10 py-8 text-xl font-bold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl group"
              onClick={() => window.open(link, '_blank')}
            >
              View Project
              <ExternalLink className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-10 py-8 text-xl font-bold bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl group"
            >
              Learn More
              <Info className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element for unique look */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default SlideItem;