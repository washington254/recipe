import React from 'react'

const Reviews = () => {
    const reviews = [
        {
            name: 'Sarah Johnson',
            rating: 5,
            date: '2 days ago',
            comment: 'This recipe was absolutely delicious! The chicken was so tender and the flavors were perfect. Highly recommend!',
            image: '/person1.jpg'
        },
        {
            name: 'Michael Chen',
            rating: 4,
            date: '3 days ago',
            comment: 'Great recipe overall. The instructions were clear and easy to follow. I added a bit more spice to mine.',
            image: '/person2.jpg'
        },
        {
            name: 'Emily Rodriguez',
            rating: 5,
            date: '5 days ago',
            comment: 'Best chicken recipe I\u2019ve tried in a long time! My family loved it. Will definitely make it again.',
            image: '/person3.jpg'
        }
    ];
  return (
    <div className="w-full flex-col flex gap-5 h-[100%] justify-between">
        {reviews.slice(0, 2).map((review, idx) => (
            <div 
                key={idx} 
                className={`flex flex-col justify-center w-full rounded-[2.5rem] p-6 shadow-sm overflow-hidden flex-1 ${idx === 1 ? 'bg-[#000000] text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]' : 'bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-gray-900'}`}
            >
                <div className="flex items-center w-full gap-5 z-10 pl-2">
                    {/* Fake user avatar or food representation */}
                    <div className="w-20 h-20 rounded-full shrink-0 shadow-lg relative bg-white flex items-center justify-center p-[2px]">
                        <img src="/bottom.png" alt={review.name} className="w-full h-full object-cover scale-[1.3] drop-shadow-md rounded-full" />
                    </div>
                    
                    <div className="flex flex-col gap-[2px] w-full">
                        <h3 className={`font-serif font-bold text-[17px] leading-tight ${idx === 1 ? 'text-white' : 'text-gray-900'}`}>{review.name}</h3>
                        
                        <div className="flex items-center gap-[2px] mb-2 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill={i < review.rating ? "#ffb703" : (idx === 1 ? "#333" : "#e5e7eb")} stroke="none">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ))}
                            <span className={`text-[12px] ml-1.5 font-medium ${idx === 1 ? 'text-gray-500' : 'text-gray-400'}`}>({review.rating} Reviews)</span>
                        </div>
                        
                        <a href="#" className="inline-flex items-center gap-[4px] text-[#00b37e] font-semibold text-[13px] transition-colors group w-max hover:text-[#009267]">
                            Get The Offer
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Reviews