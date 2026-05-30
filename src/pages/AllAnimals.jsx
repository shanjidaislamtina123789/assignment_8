import React from 'react';
import { Scale, MapPin } from 'lucide-react';

export default function AllAnimals({ sortedAnimals, priceFilter, setPriceFilter, navigateTo }) {
  return (
    <section className="px-4 lg:px-12 py-12 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-6 gap-4">
        <div>
          <h1 className="font-serif text-3xl font-black text-stone-900">Explore Active Haat Listing</h1>

        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <span className="text-xs font-bold text-stone-500 whitespace-nowrap">Sort By Price:</span>
          <select 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(e.target.value)}
            className="bg-white border border-stone-200 text-xs font-bold rounded-xl p-3 focus:outline-none focus:border-emerald-800 w-full sm:w-auto"
          >
            <option value="all">Default Tracking ID</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAnimals.map(animal => (
          <div key={animal.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
            <div className="relative overflow-hidden aspect-video bg-stone-100">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm uppercase">{animal.category}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  <span>{animal.breed}</span>
                  <span className="bg-emerald-50 text-emerald-900 px-2 py-0.5 rounded-full lowercase normal-case text-[10px]">Verified Age: {animal.age} yrs</span>
                </div>
                <h3 className="font-bold text-stone-900 text-lg line-clamp-1 mt-1">{animal.name}</h3>
                <p className="text-stone-500 text-xs line-clamp-2 mt-2 leading-relaxed">{animal.description}</p>
                
                <div className="grid grid-cols-2 gap-3 pt-4 text-xs font-medium text-stone-600">
                  <div className="bg-stone-50 p-2.5 rounded-xl flex items-center"><Scale size={14} className="mr-2 text-stone-400" /> <b>{animal.weight}</b> &nbsp;KG</div>
                  <div className="bg-stone-50 p-2.5 rounded-xl flex items-center"><MapPin size={14} className="mr-2 text-stone-400" /> <b>{animal.location}</b></div>
                </div>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-stone-400">Total Valuation</span>
                  <span className="text-xl font-black text-emerald-950">৳{animal.price.toLocaleString()}</span>
                </div>
                <button onClick={() => navigateTo('details', animal.id)} className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors shadow-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}