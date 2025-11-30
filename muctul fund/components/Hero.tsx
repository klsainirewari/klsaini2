import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, ShieldCheck, BarChart3, Users, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-600 opacity-20 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-teal-600 opacity-20 blur-[100px]"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-emerald-500/30 rounded-full px-5 py-2 mb-8 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            </span>
            <span className="text-emerald-300 text-sm font-semibold tracking-wide">
              Trusted by Investors | Managing ₹{CONTACT_INFO.aum} AUM
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Smart Investing for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Secured Future
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for Mutual Fund investments. We simplify wealth creation through expert SIP planning, portfolio reviews, and goal-based investing.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href={CONTACT_INFO.signupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/30 transform hover:-translate-y-1"
            >
              Start SIP Now <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href={`tel:${CONTACT_INFO.mobile}`}
              className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center gap-3"
            >
              <Phone className="h-5 w-5 text-emerald-400" /> Call Now
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center border-t border-slate-700/50 pt-10">
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-slate-800 rounded-lg mb-4 group-hover:bg-slate-700 transition-colors">
                <ShieldCheck className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl text-white mb-1">AMFI Registered</h3>
              <p className="text-slate-400">{CONTACT_INFO.arn}</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-slate-800 rounded-lg mb-4 group-hover:bg-slate-700 transition-colors">
                <BarChart3 className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl text-white mb-1">Expert Analysis</h3>
              <p className="text-slate-400">Top Performing Funds</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-3 bg-slate-800 rounded-lg mb-4 group-hover:bg-slate-700 transition-colors">
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-xl text-white mb-1">Personalized Care</h3>
              <p className="text-slate-400">1-on-1 Financial Advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;