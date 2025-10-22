import React, { useState, useEffect } from "react";
import { Linkedin, Facebook, Twitter, Mail } from "lucide-react";

const LandingFooter = ({ refs }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to section helper
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const quickLinks = [
    { label: "Home", ref: refs?.servicesRef },
    { label: "How It Work", ref: refs?.howItWorksRef },
    { label: "Contact", ref: refs?.contactRef },
  ];

  const resources = [
    { label: "FAQs", ref: refs?.faqsRef },
    { label: "Testimonials", ref: refs?.testimonialsRef },
    { label: "About Us", ref: refs?.aboutUsRef },
  ];

  const legalLinks = [
    { label: "Privacy Policy", ref: null },
    { label: "Terms & Conditions", ref: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "#0077b5" },
    { icon: Facebook, href: "#", color: "#1877f2" },
    { icon: Twitter, href: "#", color: "#1da1f2" },
    { icon: Mail, href: "mailto:contact@mysocietyneeds.com", color: "#ea4335" },
  ];

  return (
    <footer className="relative bg-[#2B518E] text-white overflow-hidden px-5 py-10">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-[#2B518E] to-blue-800/20"></div>

      {/* Main content box */}
      <div className="relative bg-[#355993] z-10 p-6 md:p-10 rounded-2xl">
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 justify-between">
          {/* Brand section */}
          <div className="max-w-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              My Society Needs
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Empowering residential communities with modern, efficient, and
              tech-driven management solutions. Built for connected living.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-slate-800/40 border border-slate-600/40 flex items-center justify-center"
                >
                  <s.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-1">
            {/* Quick Links */}
            <div className="text-start">
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3 list-none">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(link.ref)}
                      className="text-slate-300 text-sm hover:text-orange-400 transition-all duration-300 hover:translate-x-1 block text-left bg-transparent border-none focus:outline-none"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="text-start">
              <h3 className="text-lg font-semibold mb-5">Resources</h3>
              <ul className="space-y-3 list-none">
                {resources.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(link.ref)}
                      className="text-slate-300 text-sm hover:text-orange-400 transition-all duration-300 hover:translate-x-1 block text-left bg-transparent border-none focus:outline-none"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="text-start">
              <h3 className="text-lg font-semibold mb-5">Legal</h3>
              <ul className="space-y-3 list-none">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.ref ? (
                      <button
                        onClick={() => scrollToSection(link.ref)}
                        className="text-slate-300 text-sm hover:text-orange-400 transition-all duration-300 hover:translate-x-1 block text-left bg-transparent border-none focus:outline-none"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-slate-400 text-sm cursor-default">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-700/40"></div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4 text-center">
          <p>© 2025 My Society Needs. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.webseeder.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 no-underline hover:text-orange-400 transition"
            >
              Webseeder Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
