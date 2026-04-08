import React from 'react';

const recipes = [
  {
    title: 'Special Salad Chicken',
    rating: 4,
    reviews: 7,
    time: '20 mins',
    btnStyle: 'bg-[#10b981] text-white hover:bg-[#059669]',
    img: '/bottom.png'
  },
  {
    title: 'Noodle Chicken',
    rating: 4,
    reviews: 7,
    time: '20 mins',
    btnStyle: 'bg-[#ecfdf5] text-[#10b981] hover:bg-[#d1fae5]',
    img: '/bottom.png'
  },
  {
    title: 'Chicken with green veg',
    rating: 4,
    reviews: 7,
    time: '20 mins',
    btnStyle: 'bg-[#ecfdf5] text-[#10b981] hover:bg-[#d1fae5]',
    img: '/bottom.png'
  },
  {
    title: 'Spicy Chicken Bowl',
    rating: 4,
    reviews: 7,
    time: '20 mins',
    btnStyle: 'bg-[#ecfdf5] text-[#10b981] hover:bg-[#d1fae5]',
    img: '/bottom.png'
  }
];

const categories = [
  { name: 'Pizza', active: true },
  { name: 'Dessert', active: false },
  { name: 'Noodle', active: false },
  { name: 'Cocktails', active: false },
  { name: 'Salad', active: false },
];

const MainContent = () => {
  return (
    <div className="relative w-full  top-0 right-0  flex flex-col  gap-1">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 w-full">
        {/* Search */}
        <div className="w-full md:max-w-md relative">
          <input 
            type="text" 
            placeholder="Search recipes..." 
            className="w-full p-2 rounded-xl border border-amber-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-700 font-medium placeholder-gray-400"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          {/* Settings/Filter Icon */}
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>
          </button>
          
          {/* Premium Button */}
          <button className="bg-[#ffbf40] text-gray-900 font-semibold p-2 rounded-xl flex items-center gap-2 hover:bg-[#fca311] transition-transform hover:scale-[1.02] shadow-sm">
            Premium
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Hero / Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 gap-4 md:gap-0">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1e2329] leading-tight tracking-tight">
          Learn, Cook, &<br className="hidden md:block" /> Eat your food
        </h1>
        
        {/* Stats */}
        <div className="flex items-center gap-10 md:gap-13 mr-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-[2.75rem] font-serif font-bold text-[#10b981] tracking-tight">120</span>
            <span className="text-gray-400 font-medium tracking-wide mt-1 text-[15px]">Videos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-[2.75rem] font-serif font-bold text-[#10b981] tracking-tight">201</span>
            <span className="text-gray-400 font-medium tracking-wide mt-1 text-[15px]">Recipes</span>
          </div>
        </div>
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="flex items-center gap-2  p-2 ">
        {categories.map((cat, idx) => (
          <button 
            key={idx}
            className={`shrink-0 px-6 py-2.5 rounded-full font-semibold text-[15px] transition-all duration-200 border ${
              cat.active 
                ? 'bg-[#111111] text-white border-[#111111] shadow-md' 
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  mt-20 md:mb-10 w-full place-items-center">
        {recipes.map((recipe, index) => (
          <div key={index} className="relative w-full  bg-white rounded-[2rem] shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col pt-18 pb-2 px-1 border border-gray-100/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
            
            {/* Overlapping Image */}
            <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 size-40 transition-transform duration-300 ">
              <img src={recipe.img} alt={recipe.title} className="w-full h-full object-cover" />
            </div>

            {/* Card Content Wrapper */}
            <div className="flex flex-col items-center px-4">
              <h3 className="font-bold text-gray-900 text-sm mb-2 text-center leading-snug h-9 flex items-center">{recipe.title}</h3>
              
              {/* Stars & Reviews */}
              <div className="flex items-center text-[#ffb703] text-sm mb-1 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={i < recipe.rating ? "currentColor" : "#e5e7eb"} stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
                <span className="text-gray-400 font-medium ml-2 text-[13px]">({recipe.reviews} Reviews)</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="w-full border-t border-gray-100 flex justify-between items-center pt-5 pb-4 px-5 mt-auto">
              <span className="text-gray-400 font-medium text-[15px]">{recipe.time}</span>
              <button className={`px-4 py-2 rounded-xl font-bold text-[14px] transition-colors ${recipe.btnStyle}`}>
                View Recipe
              </button>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
}

export default MainContent;
