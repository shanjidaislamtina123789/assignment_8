import React from 'react';

export default function UpdateProfile({ updateName, setUpdateName, updatePhoto, setUpdatePhoto, handleProfileUpdate, navigateTo }) {
  return (
    <section className="px-4 py-12 max-w-md mx-auto">
      <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-xl space-y-6">
        <div className="space-y-1">
          <h1 className="font-serif text-xl font-black text-stone-900">Modify Account Parameters</h1>
          <p className="text-stone-400 text-xs">System sync via better-auth specifications context.</p>
        </div>
        
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Target Name String</label>
            <input type="text" required value={updateName} onChange={(e) => setUpdateName(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Photo Image Hosted Link</label>
            <input type="url" required value={updatePhoto} onChange={(e) => setUpdatePhoto(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div className="flex space-x-3 pt-2">
            <button type="button" onClick={() => navigateTo('profile')} className="w-1/3 border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold text-xs py-3 rounded-xl transition-all">Cancel</button>
            <button type="submit" className="w-2/3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow-md">Update Information</button>
          </div>
        </form>
      </div>
    </section>
  );
}