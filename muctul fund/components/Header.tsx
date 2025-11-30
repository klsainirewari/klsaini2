import React, { useState } from 'react';
import { Menu, X, Phone, TrendingUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 tracking-tight">Kanaram Saini</span>
                <span className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">AMFI Regd. Distributor</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Services</a>
            <a href="#funds" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Top Funds</a>
            <a href="#portfolio" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Track Portfolio</a>
            <a 
              href={CONTACT_INFO.signupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign Up Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50">Services</a>
            <a href="#funds" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50">Top Funds</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50">Track Portfolio</a>
            <a 
              href={CONTACT_INFO.signupLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-emerald-600 text-white px-3 py-3 rounded-lg font-medium"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;