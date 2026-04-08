import React from 'react';

const BottomCTA = () => {
  return (
    <div className="relative w-full max-w-[850px] mx-auto bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center overflow-hidden py-10 md:py-0">
      
      {/* Left side (Image) */}
      <div className="relative w-[80%] md:w-[45%] h-[280px] md:h-[340px] shrink-0 flex items-center justify-center -mb-8 md:mb-0">
        {/* Subtle green glow behind the image */}
        <div className="absolute inset-0 bg-emerald-400/20 blur-[60px] rounded-full scale-[0.7] md:translate-x-10"></div>
        {/* We use negative margins/translation to create that overflow look on the left edge as in design */}
        <img 
          src="/bottom.png" 
          alt="Instant Pot Greek Chicken Bowls" 
          className="absolute w-[115%] max-w-none md:top-1/2 md:-translate-y-1/2 md:-left-8 drop-shadow-2xl object-contain object-center z-10 scale-[1.05]" 
        />
      </div>

      {/* Right side (Content) */}
      <div className="w-full md:w-[55%] p-8 md:p-14 md:pl-4 flex flex-col justify-center z-20">
        <h2 className="text-3xl font-bold font-serif text-[#1e2329] leading-tight mb-5">
          Instant Pot Greek<br />Chicken Bowls
        </h2>
        <p className="text-gray-500 font-sans text-[15px] leading-relaxed mb-7 max-w-md antialiased">
          The flavors of the Mediterranean are cooked up in 30 minutes in an Instant Pot® for a quick and filling, souvlaki-inspired weeknight dinner.
        </p>
        
        <div className="flex flex-wrap items-center gap-6 md:gap-8 text-[14.5px] text-gray-500 font-semibold mb-8">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Serving - 4
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <rect x="3" y="8" width="18" height="12" rx="2" />
              <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
              <line x1="8" y1="14" x2="16" y2="14" />
            </svg>
            Cook Time - 1 hour 20 min
          </div>
        </div>

        <a href="#" className="inline-flex items-center gap-[6px] text-[#00b37e] font-bold text-[15px] transition-colors group w-max hover:text-[#009267]">
          Get The Offer
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default BottomCTA;