"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact', isSpecial: true }
  ];

  return (
    <>
      {/* Desktop Header */}
      <div className="flex justify-center items-center fixed top-3 w-full z-50">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-0 p-0 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-items ${
                item.isSpecial
                  ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
                  : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={toggleMenu}
            className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/15 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/15">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                item.isSpecial
                  ? 'bg-white text-gray-900 hover:bg-white/90'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* CSS for nav-items class */}
      <style jsx>{`
        .nav-items {
          @apply px-6 py-3 text-white hover:bg-white/10 transition-all duration-200 first:rounded-l-full last:rounded-r-full;
        }
      `}</style>
    </>
  );
};

export default Header;