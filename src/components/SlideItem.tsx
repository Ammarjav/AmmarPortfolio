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
    <div className="relative w-full h-[85vh] min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Centralized Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 w-full text-center -mt-24 md:-mt-32">
        <div className={`transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase bg-primary/90 backdrop-blur-md rounded-full shadow-xl">
            {tag}
          </span>
          
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-8 leading-[1.2] md:leading-[1.1] tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          
          <p className="text-base md:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg px-4 md:px-0">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-4 md:px-0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-6 md:px-10 py-5 md:py-8 text-base md:text-xl font-bold bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl group"
              onClick={() => window.open(link, '_blank')}
            >
              View Project
              <ExternalLink className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-6 md:px-10 py-5 md:py-8 text-base md:text-xl font-bold bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl group"
            >
              Learn More
              <Info className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
};

export default SlideItem;