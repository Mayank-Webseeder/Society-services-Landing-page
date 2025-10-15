import React, { useState, useEffect } from 'react';
import { Heart, Linkedin, Facebook, Twitter, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'How We Work', section: 'howItWorks' },
    { label: 'Contact', section: 'contact' },
  ];

  const resources = [
    { label: 'FAQs', section: 'faqs' },
    { label: 'Reviews', section: 'reviews' },
    { label: 'About Us', section: 'about' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', section: 'privacy' },
    { label: 'Terms & Conditions', section: 'terms' },
    { label: 'Cookie Policy', section: 'cookies' },
  ];

  const socialLinks = [
    { icon: Linkedin, color: '#0077b5', name: 'LinkedIn', href: '#' },
    { icon: Facebook, color: '#1877f2', name: 'Facebook', href: '#' },
    { icon: Twitter, color: '#1da1f2', name: 'Twitter', href: '#' },
    { icon: Mail, color: '#ea4335', name: 'Email', href: 'mailto:contact@mysocietyneeds.com' },
  ];

  const handleSectionClick = (section) => {
    console.log(`Navigating to: ${section}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(251,146,60,0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(251,146,60,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          transform: `translate(-${mousePosition.x * 0.1}px, -${mousePosition.y * 0.1}px)`
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div 
        className="relative max-w-[90vw] mx-auto px-6 lg:px-8"
        onMouseMove={handleMouseMove}
      >
        {/* Main Footer Content */}
        <div className="py-5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <div className="lg:flex-1 lg:max-w-md">
              <div className="mb-6 group">
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent transition-all duration-300">
                  My Society Needs
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded-full group-hover:w-32 transition-all duration-300"></div>
              </div>
              
              <p className="text-slate-400 text-base leading-relaxed mb-6 max-w-sm">
                Empowering residential communities with innovative solutions for society management, vendor coordination, and seamless service delivery.
              </p>

              {/* Contact Info with Hover Effects */}
              {/* <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-slate-400 text-sm group cursor-pointer hover:text-orange-400 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>123 Society Street, Community Plaza, Mumbai, India</span>
                </div>
                <a href="tel:+919876543210" className="flex no-underline items-center gap-3 text-slate-400 text-sm group hover:text-orange-400 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:contact@mysocietyneeds.com" className="flex no-underline items-center gap-3 text-slate-400 text-sm group hover:text-orange-400 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>contact@mysocietyneeds.com</span>
                </a>
              </div> */}

              {/* Enhanced Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="group relative w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 overflow-hidden"
                    aria-label={social.name}
                    style={{
                      animation: `float ${3 + idx * 0.5}s ease-in-out infinite`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-transparent transition-all duration-300"></div>
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-all relative z-10 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links Container */}
            <div className="flex flex-wrap gap-12 lg:gap-16 lg:flex-1">
              
              {/* Quick Links */}
              <div className="flex-1 min-w-[150px]">
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block group">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      onClick={() => handleSectionClick(link.section)}
                      className="group no-underline flex items-center text-slate-400 hover:text-orange-500 transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>

              {/* Resources */}
              <div className="flex-1 min-w-[150px]">
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block group">
                Resources
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-3">
                {resources.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      onClick={() => handleSectionClick(link.section)}
                      className="group no-underline flex items-center text-slate-400 hover:text-orange-500 transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>

              {/* Legal */}
              <div className="flex-1 min-w-[150px]">
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block group">
                Legal
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-orange-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      onClick={() => handleSectionClick(link.section)}
                      className="group flex no-underline items-center text-slate-400 hover:text-orange-500 transition-all duration-300 text-sm hover:translate-x-1"
                    >
                      <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-pulse"></div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-slate-400 gap-2  text-sm order-2 md:order-1">
              <span>Developed by</span>
              <a href="https://www.webseeder.in/" className=" no-underline font-medium text-slate-400 transition-colors cursor-pointer">Webseeder Technologies</a>
            </div>
            
            <div className="text-slate-400 text-sm order-1 md:order-2">
              <p>© 2025 My Society Needs. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

   

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default LandingFooter;