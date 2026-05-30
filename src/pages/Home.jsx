import React from 'react';
import { Star, ArrowRight, Play, Scale, MapPin, CheckCircle } from 'lucide-react';

export default function Home({ animals, loading, navigateTo }) {
  return (
    <div>
 
      <section className="px-4 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-100 px-4 py-2 rounded-full text-xs font-semibold">

          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-[1.1]">
            Qurbani Made <span className="text-emerald-800 italic font-medium">Easy</span>,<br />
            Worship Made <span className="text-emerald-700 decoration-emerald-200">Meaningful</span>
          </h1>
          <p className="text-stone-600 text-base max-w-xl leading-relaxed">
            We make your Qurbani simple, transparent, fully trackable, and 100% Shariah compliant. Secure standard livestock from elite sub-farms across Bangladesh.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button onClick={() => navigateTo('animals')} className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-3 group transition-all shadow-lg shadow-emerald-900/10">
              <span>Book Your Qurbani</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigateTo('animals')} className="border-2 border-stone-200 hover:border-emerald-800 text-stone-800 font-bold px-6 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all">
              <Play size={16} className="fill-stone-800" />
              <span>How It Works</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-amber-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10" />
          <div className="bg-white border-4 border-white rounded-[2.5rem] shadow-2xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=800" alt="Qurbani Premium Cattle" className="w-full h-[380px] object-cover" />
            <div className="p-6 bg-stone-50 border-t border-stone-100 grid grid-cols-3 gap-2 text-center text-xs">
              <div><p className="font-bold text-emerald-900 text-sm">100%</p><p className="text-stone-500 font-medium">Shariah Ready</p></div>
              <div className="border-x border-stone-200"><p className="font-bold text-emerald-900 text-sm">Everywhere</p><p className="text-stone-500 font-medium">BD Presence</p></div>
              <div><p className="font-bold text-emerald-900 text-sm">5000+</p><p className="text-stone-500 font-medium">Happy Buyers</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 border-y border-stone-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-xs tracking-widest text-emerald-800 uppercase font-bold">How It Works</p>
          <h2 className="font-serif text-3xl font-black text-stone-900">Simple Steps, Complete Peace of Mind</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12">
            {[
              { step: '1', title: 'Choose Your Animal', desc: 'Select your preferred animal based on your budget & breed interest.' },
              { step: '2', title: 'Book & Pay Online', desc: 'Secure your booking using automated cloud transaction checkouts.' },
              { step: '3', title: 'We Perform Qurbani', desc: 'Our certified slaughter team executes sacrifice according to core Shariah steps.' },
              { step: '4', title: 'Distribution', desc: 'Meat is hygienically packed & safely delivered to your target or the needy.' }
            ].map((x, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 text-left relative group hover:shadow-md transition-shadow">
                <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center text-sm mb-4">{x.step}</span>
                <h3 className="font-bold text-stone-900 text-lg mb-1">{x.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-12 py-16 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-emerald-800 uppercase font-bold">Highly Curated</p>
            <h2 className="font-serif text-3xl font-black text-stone-900">Featured Premium Cattle</h2>
          </div>
          <button onClick={() => navigateTo('animals')} className="text-sm font-bold text-emerald-800 hover:underline flex items-center space-x-1">
            <span>Explore all active livestock listing</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-stone-400 font-medium">Crunching data streams dynamically...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.slice(0, 4).map(animal => (
              <div key={animal.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="relative overflow-hidden aspect-video bg-stone-100">
                  <img src={animal.image} alt={animal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">{animal.category}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-[11px] text-emerald-800 font-bold uppercase tracking-wider">{animal.breed}</p>
                    <h3 className="font-bold text-stone-900 text-base line-clamp-1 mt-0.5">{animal.name}</h3>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-1 pt-3 text-xs text-stone-500">
                      <span className="flex items-center"><Scale size={13} className="mr-1.5 text-stone-400" /> {animal.weight} KG</span>
                      <span className="flex items-center"><MapPin size={13} className="mr-1.5 text-stone-400" /> {animal.location}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-stone-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-stone-400">Fixed Price</span>
                      <span className="text-lg font-black text-emerald-950">৳{animal.price.toLocaleString()}</span>
                    </div>
                    <button onClick={() => navigateTo('details', animal.id)} className="bg-stone-900 hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-emerald-950 text-stone-100 py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-widest block">Educational Overview</span>
            <h3 className="font-serif text-3xl font-bold tracking-tight text-white">Authentic Qurbani Guidelines & Health Screening Tips</h3>
            <div className="space-y-4 text-sm text-emerald-100/80 leading-relaxed">
              <p className="flex items-start"><CheckCircle size={18} className="mr-3 text-emerald-400 shrink-0 mt-0.5" /> Ensure the animal matches minimum age specifications prescribed by Shariah authorities (Cows 2+ years, Goats 1+ year).</p>
              <p className="flex items-start"><CheckCircle size={18} className="mr-3 text-emerald-400 shrink-0 mt-0.5" /> Observe visual posture metrics: active behavioral movement, clear vision channels, straight spine alignment, clean teeth profiles.</p>
              <p className="flex items-start"><CheckCircle size={18} className="mr-3 text-emerald-400 shrink-0 mt-0.5" /> Avoid highly steroid-pumped cattle; look for sleek natural muscle growth profiles and clear coat validation.</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-widest block">Premium Categories</span>
            <h4 className="font-serif text-2xl font-bold text-white">Highly Demanded Top Livestock Breeds of 2026</h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              {['Shahiwal Bull (Organic Fed)', 'Pure Mirzapur Deshi', 'Black Bengal Premium Goat', 'Red Chittagong Breed (RCC)', 'Cross Brahman Elite Line', 'Jamunapari Long Ear Goat'].map((breed, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-xl border border-white/5 text-emerald-100 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{breed}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}