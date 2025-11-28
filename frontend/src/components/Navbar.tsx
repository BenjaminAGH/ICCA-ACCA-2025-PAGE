"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Congreso",
      href: "#about",
      submenu: [
        { label: "Sobre ICA-ACCA", href: "#about" },
        { label: "Comité Organizador", href: "#committee" },
        { label: "Sede y Ubicación", href: "#venue" }
      ]
    },
    {
      label: "Papers",
      href: "#paper-submission",
      submenu: [
        { label: "Envío de Papers", href: "#paper-submission" },
        { label: "Fechas Importantes", href: "#paper-submission" },
        { label: "Directrices", href: "#paper-submission" }
      ]
    },
    {
      label: "Sponsors",
      href: "#sponsors",
      submenu: [
        { label: "Nuestros Sponsors", href: "#sponsors" },
        { label: "Ser Sponsor", href: "#sponsors" }
      ]
    },
    {
      label: "Contacto",
      href: "#contact"
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className={`text-xl transition-colors ${isScrolled ? "text-white" : "text-white"
              }`}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/logowhite.png" alt="ICA-ACCA 2026" className="h-13 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors hover:text-blue-600 ${isScrolled ? "text-white" : "text-white"
                    }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <motion.a
              href="#paper-submission"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Enviar Paper
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-white" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#paper-submission"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enviar Paper
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
