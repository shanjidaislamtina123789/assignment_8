import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 text-xs border-t border-stone-800 pt-16 pb-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2 text-white">
            <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center font-bold text-base">Q</div>
            <span className="font-serif font-black text-lg tracking-tight text-white">Qurbani Hat Online</span>
          </div>
          <p className="max-w-sm text-stone-400/80 leading-relaxed">
            Bangladesh's premium automated digital marketplace providing ethical, healthy livestock integration according to absolute standard Shariah compliance benchmarks.
          </p>
        </div>
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Channels</h4>
          <p className="text-stone-400">Sector 11, Uttara, Dhaka, Bangladesh</p>
          <p className="text-stone-300 font-semibold">Support: support@qurbanihat.com</p>
        </div>
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase">Stay Tuned</h4>
          <p className="text-stone-400/80">Connect with our active social tracking architectures for farm insights updates.</p>
          <div className="flex space-x-4 pt-1 text-white font-bold">
            <a href="#facebook" className="hover:text-emerald-400 transition-colors">Facebook</a>
            <a href="#instagram" className="hover:text-emerald-400 transition-colors">Instagram</a>
            <a href="#youtube" className="hover:text-emerald-400 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-12 pt-6 text-center text-stone-600 font-medium">
        © 2026 Qurbani Hat Online Ecosystem. Developed for Academic Assignment validation. All Rights Reserved.
      </div>
    </footer>
  );
}