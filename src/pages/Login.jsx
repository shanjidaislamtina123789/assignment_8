import React from 'react';

export default function Login({ loginEmail, setLoginEmail, loginPassword, setLoginPassword, handleLogin, handleSocialLogin, navigateTo }) {
  return (
    <section className="px-4 py-20 max-w-md mx-auto">
      <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="font-serif text-2xl font-black text-stone-900">System Gateway Login</h1>
          <p className="text-stone-400 text-xs">Access profile parameters and secure automated checkout workflows</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Email Coordinates</label>
            <input type="email" required placeholder="tina@varsity.edu" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">System Password</label>
            <input type="password" required placeholder="••••••••" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-md">Authenticate Account</button>
        </form>

        <div className="relative flex py-2 items-center text-xs text-stone-400">
          <div className="flex-grow border-t border-stone-200"></div>
          <span className="flex-shrink mx-4 font-bold uppercase tracking-widest">OR SSO LINK</span>
          <div className="flex-grow border-t border-stone-200"></div>
        </div>

        <button onClick={handleSocialLogin} className="w-full border border-stone-200 hover:bg-stone-50 text-stone-700 font-bold text-xs py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors">
          <span>Google Account Sign In</span>
        </button>

        <p className="text-center text-xs text-stone-500 font-medium">New to the platform? <button onClick={() => navigateTo('register')} className="text-emerald-800 font-bold hover:underline">Create an Account</button></p>
      </div>
    </section>
  );
}