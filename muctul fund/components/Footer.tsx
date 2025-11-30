import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kanaram Saini</h3>
            <p className="mb-2">AMFI Registered Mutual Fund Distributor</p>
            <p className="text-emerald-400 font-mono">{CONTACT_INFO.arn}</p>
            <p className="mt-4">
              Providing wealth management solutions to help you achieve financial freedom.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Mobile: <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-white transition-colors">{CONTACT_INFO.mobile}</a></p>
            <p className="mb-2">Email: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a></p>
            <p className="mb-2">Managed AUM: {CONTACT_INFO.aum}</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#funds" className="hover:text-emerald-400 transition-colors">Top Funds</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Track Portfolio</a></li>
              <li><a href={CONTACT_INFO.signupLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Sign Up</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 text-center">
          <p className="mb-2">Disclaimer: Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.</p>
          <p>&copy; {new Date().getFullYear()} Kanaram Saini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;