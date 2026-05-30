import React from 'react';
import { Scale, MapPin, Star, Calendar } from 'lucide-react';

export default function AnimalDetails({ targetAnimal, user, bookPhone, setBookPhone, bookAddress, setBookAddress, handleBookingSubmit, navigateTo }) {
  return (
    <section className="px-4 lg:px-12 py-12 max-w-6xl mx-auto">
      <button onClick={() => navigateTo('animals')} className="text-xs font-bold text-stone-500 hover:text-emerald-800 flex items-center space-x-1 mb-6">
        <span>← Back to Marketplace inventory database</span>
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 lg:p-10 rounded-3xl border border-stone-100 shadow-xl">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl overflow-hidden bg-stone-50 border border-stone-100">
            <img src={targetAnimal.image} alt={targetAnimal.name} className="w-full h-auto max-h-[460px] object-cover" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="bg-stone-900 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">{targetAnimal.category}</span>
              <span className="bg-emerald-50 text-emerald-800 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">{targetAnimal.type}</span>
            </div>
            <h1 className="font-serif text-3xl font-black text-stone-900">{targetAnimal.name}</h1>
            <p className="text-stone-600 text-sm leading-relaxed pt-2">{targetAnimal.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { label: 'Live Weight', value: `${targetAnimal.weight} KG`, icon: <Scale size={16} /> },
              { label: 'Origin Track', value: targetAnimal.location, icon: <MapPin size={16} /> },
              { label: 'Breed Lineage', value: targetAnimal.breed, icon: <Star size={16} /> },
              { label: 'Certified Age', value: `${targetAnimal.age} Years`, icon: <Calendar size={16} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-stone-50/80 border border-stone-100 p-4 rounded-xl text-center space-y-1">
                <div className="text-emerald-800 flex justify-center">{stat.icon}</div>
                <p className="text-[10px] uppercase text-stone-400 font-bold tracking-wider pt-1">{stat.label}</p>
                <p className="text-sm font-bold text-stone-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-stone-50 border border-stone-100 p-6 lg:p-8 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="pb-4 border-b border-stone-200">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">Standard Safe Booking</span>
              <p className="text-2xl font-black text-emerald-950 mt-1">৳{targetAnimal.price.toLocaleString()}</p>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">User Identity (Read Only)</label>
                <input type="text" value={user.name} disabled className="w-full bg-stone-200/60 border border-stone-200 rounded-xl p-3 text-xs font-medium text-stone-500 cursor-not-allowed focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Email Account Indicator</label>
                <input type="email" value={user.email} disabled className="w-full bg-stone-200/60 border border-stone-200 rounded-xl p-3 text-xs font-medium text-stone-500 cursor-not-allowed focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Active Contact Number *</label>
                <input type="tel" required placeholder="e.g., +8801XXXXXXXXX" value={bookPhone} onChange={(e) => setBookPhone(e.target.value)} className="w-full bg-white border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">Delivery Address Destination *</label>
                <textarea required rows="3" placeholder="Provide deep geographical trace parameters..." value={bookAddress} onChange={(e) => setBookAddress(e.target.value)} className="w-full bg-white border border-stone-200 focus:border-emerald-800 rounded-xl p-3 text-xs font-medium text-stone-800 focus:outline-none resize-none" />
              </div>
              <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-colors shadow-md">Confirm Instant Booking</button>
            </form>
          </div>
          <p className="text-[10px] text-stone-400 text-center leading-relaxed mt-6">🔒 Encrypted authentication interface.</p>
        </div>
      </div>
    </section>
  );
}