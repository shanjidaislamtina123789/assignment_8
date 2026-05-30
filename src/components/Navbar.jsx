import React from 'react';
import { LogOut } from 'lucide-react';

export default function Navbar({ currentRoute, navigateTo, user, handleLogout }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-100 px-4 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
        <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-white font-bold text-xl">Q</div>
        <div>
          <span className="block font-serif font-black text-xl tracking-tight text-emerald-900">Qurbani</span>
          <span className="block text-[10px] tracking-widest text-emerald-700 uppercase font-semibold">Hat Online</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-stone-600">
        <button onClick={() => navigateTo('home')} className={`hover:text-emerald-800 transition-colors ${currentRoute === 'home' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1' : ''}`}>Home</button>
        <button onClick={() => navigateTo('animals')} className={`hover:text-emerald-800 transition-colors ${currentRoute === 'animals' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1' : ''}`}>All Animals</button>
        {user.isLoggedIn && (
          <button onClick={() => navigateTo('profile')} className={`hover:text-emerald-800 transition-colors ${currentRoute === 'profile' ? 'text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1' : ''}`}>My Profile</button>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <span className="hidden lg:inline text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full">📞 01712-345678</span>
        {user.isLoggedIn ? (
          <div className="flex items-center space-x-3 bg-stone-50 p-1.5 pr-4 rounded-full border border-stone-100">
            <img src={user.photo} alt={user.name} className="w-8 h-8 rounded-full object-cover border-2 border-emerald-700" />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-stone-800 line-clamp-1">{user.name}</p>
            </div>
            <button onClick={handleLogout} className="text-stone-400 hover:text-rose-600 transition-colors pl-2" title="Logout">
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <button onClick={() => navigateTo('login')} className="text-xs font-bold text-emerald-900 px-4 py-2 hover:bg-stone-50 rounded-lg transition-all">Login</button>
            <button onClick={() => navigateTo('register')} className="text-xs font-bold bg-emerald-800 text-white px-4 py-2.5 rounded-xl hover:bg-emerald-900 transition-all shadow-md">Register</button>
          </div>
        )}
      </div>
    </nav>
  );
}