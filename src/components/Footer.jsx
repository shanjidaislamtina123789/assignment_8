import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-stone-400 py-12 px-6 border-t border-stone-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-emerald-800 text-white font-black px-3 py-1.5 rounded-xl text-lg tracking-wider">Q</span>
            <h3 className="text-white font-serif font-black text-xl tracking-tight">Qurbani Hat Online</h3>
          </div>
          <p className="text-xs leading-relaxed text-stone-400 max-w-sm">
            Bangladesh's premium automated digital marketplace providing ethical, healthy livestock integration according to absolute standard Shariah compliance benchmarks.
          </p>
        </div>
      
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest text-stone-200">Contacts</h4>
          <div className="flex items-center space-x-4 pt-1">
 
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-stone-800 hover:bg-emerald-800 text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-300 shadow-md group" title="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-stone-800 hover:bg-emerald-800 text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-300 shadow-md group" title="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-stone-800 hover:bg-emerald-800 text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-300 shadow-md group" title="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-stone-850 text-center text-xs text-stone-500 font-medium">
        © 2026 Qurbani Hat Online Ecosystem. Developed for Academic Assignment validation. All Rights Reserved.
      </div>
    </footer>
  );
}