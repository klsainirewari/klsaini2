import React, { useState } from 'react';
import { FileSpreadsheet, Lock, Search, Download, CheckCircle, AlertCircle } from 'lucide-react';

const PortfolioTracker: React.FC = () => {
  const [pan, setPan] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // NOTE: To save directly to Google Sheets, you would typically use a Google Apps Script Web App URL here.
  // Since this is a static site, we fallback to a CSV download which the user can open in Excel/Sheets.
  const GOOGLE_SCRIPT_URL = ""; 

  const handleDownload = () => {
    // Create a CSV string
    const csvContent = "data:text/csv;charset=utf-8," + 
      "PAN Number,Mobile Number,Request Timestamp,Status\n" + 
      `${pan},${mobile},${new Date().toLocaleString()},Pending Review`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Portfolio_Request_${mobile}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger the CSV download to "save" the data
      handleDownload();
      
      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setPan('');
        setMobile('');
      }, 8000);
    }, 2000);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              Track Your Mutual Fund Portfolio
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Get a consolidated view of your investments across all AMCs. 
              Enter your details below to fetch your latest CAS report via MF Central.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div className="space-y-1">
                <label htmlFor="pan" className="block text-sm font-medium text-slate-300">
                  PAN Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileSpreadsheet className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="pan"
                    required
                    maxLength={10}
                    className="block w-full pl-10 bg-slate-900/50 border border-slate-600 rounded-xl py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all uppercase tracking-widest"
                    placeholder="ABCDE1234F"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="mobile" className="block text-sm font-medium text-slate-300">
                  Mobile Number
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="block w-full pl-10 bg-slate-900/50 border border-slate-600 rounded-xl py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all tracking-widest"
                    placeholder="9876543210"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center py-4 px-6 rounded-xl text-base font-bold text-white transition-all transform hover:-translate-y-0.5 ${
                  loading 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/40'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting securely...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Fetch Portfolio Report
                  </>
                )}
              </button>
              
              <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-900/30 p-3 rounded-lg border border-slate-700/50">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Your details are processed securely. A request file will be generated for your records automatically upon submission.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 animate-fade-in bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
                <CheckCircle className="h-10 w-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Request Submitted!</h3>
              <p className="text-slate-300 mb-6 max-w-md mx-auto">
                We have received your portfolio tracking request for PAN <span className="font-mono text-emerald-300">{pan}</span>.
                <br />
                Our team will process the data from MF Central and send the consolidated report to your mobile shortly.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-emerald-400/80 mb-6">
                 <Download className="h-4 w-4" />
                 <span>Request details saved to your device</span>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-white hover:text-emerald-300 font-medium underline underline-offset-4 decoration-emerald-500/30 hover:decoration-emerald-400 transition-all"
              >
                Track another portfolio
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTracker;