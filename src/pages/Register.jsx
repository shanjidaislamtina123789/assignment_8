import React from 'react';

export default function Register({ regName, setRegName, regEmail, setRegEmail, regPhoto, setRegPhoto, regPassword, setRegPassword, handleRegister, handleSocialLogin, navigateTo }) {
  return (
    <section className="px-4 py-16 max-w-md mx-auto">
      <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="font-serif text-2xl font-black text-stone-900">Account Onboarding</h1>
          <p className="text-stone-400 text-xs">Join our verified dynamic livestock distribution ecosystem</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Full Legal Name</label>
            <input type="text" required placeholder="Tina" value={regName} onChange={(e) => setRegName(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Email Account</label>
            <input type="email" required placeholder="tina@varsity.edu" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Profile Photo Image URL</label>
            <input type="url" placeholder="https://images.unsplash.com/..." value={regPhoto} onChange={(e) => setRegPhoto(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Secure Password</label>
            <input type="password" required placeholder="••••••••" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-md">Register Infrastructure</button>
        </form>

        <div className="relative flex py-2 items-center text-xs text-stone-400">
          <div className="flex-grow border-t border-stone-200"></div>
          <span className="flex-shrink mx-4 font-bold uppercase tracking-widest">OR SSO LINK</span>
          <div className="flex-grow border-t border-stone-200"></div>
        </div>

        <button onClick={handleSocialLogin} className="w-full border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors">
          <span>Google Account Quick Sign On</span>
        </button>

        <p className="text-center text-xs text-stone-500 font-medium">Already registered? <button onClick={() => navigateTo('login')} className="text-emerald-800 font-bold hover:underline">Login Securely</button></p>
      </div>
    </section>
  );
}