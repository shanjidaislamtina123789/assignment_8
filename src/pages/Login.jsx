import React from 'react';

export default function Login({ loginEmail, setLoginEmail, loginPassword, setLoginPassword, handleLogin, navigateTo }) {
  
  const handleGoogleLogin = () => {
    navigateTo('home');
  };

  return (
    <section className="px-4 py-20 max-w-md mx-auto">
      <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <h1 className="font-serif text-2xl font-black text-stone-900">Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Email Coordinates</label>
            <input type="email" required placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">Password</label>
            <input type="password" required placeholder="••••••••" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-stone-50 border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-md">Authenticate Account</button>
        </form>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-stone-200"></div>
          <span className="flex-shrink mx-4 text-stone-400 text-[10px] font-bold uppercase tracking-widest">Or</span>
          <div className="flex-grow border-t border-stone-200"></div>
        </div>

        <button type="button" onClick={handleGoogleLogin} className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-stone-50 text-stone-700 font-bold text-xs uppercase tracking-wider py-3 px-4 border border-stone-200 rounded-xl transition-all shadow-sm">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.292 1.62 15.534 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.79-.085-1.393-.19-1.945H12.24z" />
            <path fill="#4285F4" d="M23.62 10.53c.1-.55.19-1.15.19-1.94H12.24v4.11h6.89c-.14.77-.52 1.48-1.07 2.06l3.11 2.42c1.82-1.68 2.45-4.16 2.45-6.65z" />
            <path fill="#34A853" d="M12.24 24c3.24 0 5.97-1.07 7.96-2.92l-3.11-2.42c-.93.63-2.13 1.02-3.85 1.02-3.34 0-6.17-2.25-7.18-5.29H2.84v2.51C4.9 20.93 8.33 24 12.24 24z" />
            <path fill="#FBBC05" d="M5.06 14.39a7.175 7.175 0 0 1 0-4.78V7.1H2.84a11.936 11.936 0 0 0 0 9.8l2.22-2.51z" />
            <path fill="#EA4335" d="M12.24 4.68c1.72 0 3.27.59 4.49 1.76l3.15-3.15C17.91 1.41 15.28 0 12.24 0 8.33 0 4.9 3.07 2.84 7.1l2.22 2.51c1.01-3.04 3.84-5.29 7.18-5.29z" />
          </svg>
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-xs text-stone-500 font-medium pt-2">New to the platform? <button onClick={() => navigateTo('register')} className="text-emerald-800 font-bold hover:underline">Create an Account</button></p>
      </div>
    </section>
  );
}
