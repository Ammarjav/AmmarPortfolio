"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Code, HeartPulse, Layout, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSlider />

        {/* Services Section Preview */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">What I Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Specialized Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Combining technical expertise with healthcare knowledge to deliver unique digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Web Development",
                  desc: "Building responsive, high-performance web applications using modern frameworks like React and Tailwind."
                },
                {
                  icon: <HeartPulse className="w-8 h-8" />,
                  title: "Health Tech Solutions",
                  desc: "Creating specialized software for clinics and healthcare providers to manage patient care efficiently."
                },
                {
                  icon: <Layout className="w-8 h-8" />,
                  title: "UI/UX Design",
                  desc: "Designing intuitive and accessible user interfaces that prioritize user experience and accessibility."
                }
              ].map((service, i) => (
                <div key={i} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
            <Sparkles size={400} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Projects Completed", value: "12+" },
                { label: "Happy Clients", value: "10+" },
                { label: "Years Experience", value: "2+" },
                { label: "Code Commits", value: "500+" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;