import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TOP_FUNDS } from '../constants';

const TopFunds: React.FC = () => {
  return (
    <section id="funds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Performing Equity Funds</h2>
          <p className="text-gray-600">Based on last 3 years annualized returns (CAGR). Past performance is not an indicator of future returns.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Chart Area */}
          <div className="w-full lg:w-1/2 h-[400px]">
             <div className="bg-slate-50 p-6 rounded-2xl shadow-inner h-full border border-slate-100">
               <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">3-Year Returns Comparison (%)</h3>
               <ResponsiveContainer width="100%" height="90%">
                <BarChart data={TOP_FUNDS} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={10} tick={false} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="returns3Yr" radius={[0, 4, 4, 0]} barSize={24}>
                    {TOP_FUNDS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10b981' : '#059669'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
             </div>
          </div>

          {/* List Area */}
          <div className="w-full lg:w-1/2 space-y-4">
            {TOP_FUNDS.map((fund) => (
              <div key={fund.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-emerald-200 hover:shadow-md transition-all">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{fund.name}</h4>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{fund.category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      fund.risk === 'Very High' ? 'bg-red-100 text-red-700' : 
                      fund.risk === 'High' ? 'bg-orange-100 text-orange-700' : 
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {fund.risk} Risk
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600">{fund.returns3Yr}%</div>
                  <div className="text-xs text-gray-500">3Y Return</div>
                </div>
              </div>
            ))}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
              <p><strong>Note:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFunds;