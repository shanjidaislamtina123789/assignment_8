import React from 'react';
import { ShieldCheck, Edit3 } from 'lucide-react';

export default function Profile({ user, navigateTo }) {
  return (
    <section className="px-4 py-12 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-stone-100 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-900 to-stone-900 h-32 relative" />
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between -mt-16 mb-6 gap-4">
            <img 
              src={user.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'} 
              alt={user.name} 
              className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-md bg-white" 
            />
            <button 
              onClick={() => navigateTo('update-profile')} 
              className="sm:mt-16 flex items-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <Edit3 size={14} />
              <span>Update Profile</span>
            </button>
          </div>

          <div className="space-y-4 pt-2">
            <div className="border-b border-stone-100 pb-3">
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest block">Account Full Name</span>
              <p className="text-xl font-bold text-stone-900 mt-0.5">{user.name}</p>
            </div>
            <div className="border-b border-stone-100 pb-3">
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest block">Verified Email Address</span>
              <p className="text-sm font-medium text-stone-700 mt-0.5">{user.email}</p>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-bold tracking-widest block">Security Authentication State</span>
              <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-100 px-2.5 py-1 rounded-md text-xs font-bold mt-1.5">
                <ShieldCheck size={14} />
                <span>Authenticated via Better-Auth Ecosystem</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}