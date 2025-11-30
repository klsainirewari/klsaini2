import React from 'react';
import { SERVICES } from '../constants';
import { TrendingUp, DollarSign, PieChart, Shield } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="h-8 w-8 text-white" />,
  DollarSign: <DollarSign className="h-8 w-8 text-white" />,
  PieChart: <PieChart className="h-8 w-8 text-white" />,
  Shield: <Shield className="h-8 w-8 text-white" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to meet your life goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-emerald-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;