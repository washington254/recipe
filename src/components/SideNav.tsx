import React, { useState } from 'react';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle Menu"
        className="md:hidden fixed z-50 top-4 left-4 bg-white p-2 rounded-lg shadow-md border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Navigation Menu */}
      <nav className={`fixed top-0 left-0 h-screen bg-white md:border-r md:border-gray-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] md:shadow-none flex flex-col items-center py-4 transition-transform duration-300 ease-in-out z-50 overflow-hidden ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* Logo Section */}
        <div className="w-full flex justify-center mb-3">
           <h1 className="font-logo text-4xl font-bold  text-[#111] tracking-tight antialiased">Chefie</h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-4 px-4 w-full">
            <div className="relative mb-3 group mt-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-[#ffb703] opacity-50 blur-[14px] group-hover:opacity-70 transition-opacity duration-300"></div>
                {/* Yellow Gradient Ring */}
                <div className="relative rounded-full p-[4px] bg-gradient-to-tr from-[#fb8500] to-[#ffb703] shadow-md">
                   <div className="rounded-full bg-white p-[3px]">
                       <img src="/profile.webp" className="w-[100px] h-[100px] rounded-full object-cover" alt="Theresa Webb profile" />
                   </div>
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 font-serif tracking-wide text-center">Theresa Webb</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">Master Chef</p>
        </div>
            
        {/* Navigation Links */}
        <ul className="flex flex-col w-full px-8 gap-3">
            {/* Recipes - Active State */}
            <li>
                <a href="#" className="flex items-center gap-4 bg-[#ffb703] text-black rounded-xl py-2 px-5 font-semibold text-[15px] shadow-[0_8px_20px_rgba(255,183,3,0.35)] transition-transform duration-200 hover:scale-[1.03]">
                    {/* Chef Hat/Recipe Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M12 2a3 3 0 0 0-3 3v2H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-3V5a3 3 0 0 0-3-3z"/><path d="M9 13h6"/></svg>
                    Recipes
                </a>
            </li>
            
            {/* Favorites */}
            <li>
                <a href="#" className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl py-2 px-5 font-medium text-gray-400 text-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-gray-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    Favorites
                </a>
            </li>
            
            {/* Courses */}
            <li>
                <a href="#" className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl py-2 px-5 font-medium text-gray-400 text-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M2.5 12a5.25 5.25 0 0 1 5.25-5.25h8.5A5.25 5.25 0 0 1 21.5 12a5.25 5.25 0 0 1-5.25 5.25h-8.5A5.25 5.25 0 0 1 2.5 12Z" /><path d="M10.25 14.5a.75.75 0 0 0 1.13.65l3.5-2.5a.75.75 0 0 0 0-1.3l-3.5-2.5a.75.75 0 0 0-1.13.65v5Z" /></svg>
                    Courses
                </a>
            </li>
            
            {/* Community */}
            <li>
                <a href="#" className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl py-2 px-5 font-medium text-gray-400 text-[15px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-200 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                    Community
                </a>
            </li>
        </ul>


        {/* Chef Illustration */}
        <div className="w-full flex justify-center mt-auto px-2 overflow-hidden shrink-0 pb-0">
            <img src="/chef.webp" alt="chef friendly illustration" className="w-full max-w-[200px] object-contain object-bottom scale-[1] translate-y-2 origin-bottom" />
        </div>

      </nav>
    </>
  )
}

export default SideNav