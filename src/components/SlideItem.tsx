"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';

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
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`max-w-2xl transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-primary/80 backdrop-blur-sm rounded-full">
            {tag}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-7 text-lg group bg-white text-black hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => window.open(link, '_blank')}
            >
              View Project
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-7 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;