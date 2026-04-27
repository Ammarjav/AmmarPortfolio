"use client";

import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">M. Ammar Javed</h3>
            <p className="text-gray-600 max-w-sm leading-relaxed">
              A passionate developer and physiotherapist dedicated to building digital solutions that improve lives and streamline professional workflows.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-primary hover:shadow-md transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 Ammar Javed. All rights reserved.</p>
          <p className="text-sm text-gray-400">Designed with precision & passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;