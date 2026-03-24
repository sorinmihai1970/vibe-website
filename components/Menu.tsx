'use client';

import { useState, useEffect } from 'react';

const menuData = {
  Espresso: [
    { name: 'Espresso', price: 12, description: 'Shot dublu de espresso intens', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&auto=format&fit=crop' },
    { name: 'Americano', price: 14, description: 'Espresso diluat cu apă caldă', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&auto=format&fit=crop' },
    { name: 'Cappuccino', price: 16, description: 'Espresso cu lapte spumat', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&auto=format&fit=crop' },
    { name: 'Flat White', price: 17, description: 'Microfoam mătăsos peste espresso', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop' },
    { name: 'Latte', price: 17, description: 'Espresso cu lapte abundent', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop' },
    { name: 'Cortado', price: 15, description: 'Espresso echilibrat cu lapte cald', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop' },
  ],
  Specialty: [
    { name: 'Pour Over', price: 22, description: 'Cafea filtrată manual, aromă delicată', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop' },
    { name: 'AeroPress', price: 20, description: 'Extracție sub presiune, corp plin', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop' },
    { name: 'Cold Drip', price: 24, description: 'Picurare la rece, 8 ore de preparare', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop' },
    { name: 'Matcha Latte', price: 22, description: 'Matcha ceremonial cu lapte de ovăz', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&auto=format&fit=crop' },
    { name: 'Turmeric Latte', price: 20, description: 'Golden milk cu condimente aromate', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop' },
    { name: 'Chemex', price: 23, description: 'Filtrare lentă pentru claritate maximă', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop' },
  ],
  'Cold Brew': [
    { name: 'Cold Brew Classic', price: 18, description: 'Infuzat 24h la rece, fin și răcoritor', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop' },
    { name: 'Cold Brew Tonic', price: 22, description: 'Cold brew cu apă tonică și lime', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop' },
    { name: 'Nitro Cold Brew', price: 24, description: 'Cremă naturală de azot, fără lapte', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop' },
    { name: 'Iced Latte', price: 19, description: 'Espresso cu lapte rece și gheață', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop' },
    { name: 'Iced Matcha', price: 21, description: 'Matcha shake cu lapte de cocos', image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&auto=format&fit=crop' },
    { name: 'Frappé Caramel', price: 23, description: 'Blended cu caramel și frișcă', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop' },
  ],
  Patiserie: [
    { name: 'Croissant cu Unt', price: 12, description: 'Foietaj franțuzesc, crocant și fraged', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop' },
    { name: 'Croissant Migdale', price: 15, description: 'Umplut cu cremă de migdale', image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&auto=format&fit=crop' },
    { name: 'Cinnamon Roll', price: 16, description: 'Rulou cu scorțișoară și glazură', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop' },
    { name: 'Brownie', price: 14, description: 'Ciocolată neagră 70%, umed și intens', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&auto=format&fit=crop' },
    { name: 'Cheesecake Fistic', price: 18, description: 'Cremă de fistic pe blat digestiv', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop' },
    { name: 'Banana Bread', price: 13, description: 'Pâine cu banane, nuci și scorțișoară', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&auto=format&fit=crop' },
  ],
};

type Category = keyof typeof menuData;
const categories = Object.keys(menuData) as Category[];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Category>('Espresso');
  const [visible, setVisible] = useState(true);

  const handleTabChange = (cat: Category) => {
    if (cat === activeTab) return;
    // fade out → schimbă tab → fade in
    setVisible(false);
    setTimeout(() => {
      setActiveTab(cat);
      setVisible(true);
    }, 200);
  };

  return (
    <section id="menu" className="py-20 px-6 bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Meniul Nostru
          </h2>
          <p className="text-xl text-gray-600">
            Ingrediente premium, preparate cu pasiune
          </p>
        </div>

        {/* Tab-uri categorii */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-amber-500 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid produse cu fade transition */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {menuData[activeTab].map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-lg"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              }}
            >
              {/* Imagine 4:3 */}
              <div className="relative w-full" style={{ paddingTop: '75%' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold text-lg whitespace-nowrap ml-4">
                    {item.price} RON
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
