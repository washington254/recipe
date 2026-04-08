import SideNav from "./components/SideNav"
import BottomCTA from "./components/BottomCTA"
import MainContent from "./components/MainContent"
import Reviews from "./components/Reviews"

function App() {

  return (
    <div className="flex w-full h-screen bg-[#f7efe6] overflow-hidden font-sans">
      <SideNav />
      
      <main className="flex-1 h-full flex flex-col w-full md:w-[70%] px-4 md:px-10 pt-4 md:pt-[2%] pb-0 overflow-y-auto overflow-x-hidden hide-scrollbar">
        
        {/* Top ~70% Height Content */}
        <div className="w-full min-h-[auto] 2xl:min-h-[66%] shrink-0 pb-10 xl:pb-4 flex flex-col justify-center">
          <MainContent />
        </div>
        
        {/* Bottom ~30% Height Content */}
        <div className="w-full min-h-[auto] 2xl:min-h-[30%] shrink-0 flex flex-col xl:flex-row gap-6 pb-8">
          <div className="w-full xl:w-[65%] shrink-0 flex">
            <BottomCTA />
          </div>
          
          <div className="w-full xl:w-[35%] shrink-0 flex flex-col pb-4 h-full">
            <Reviews />
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
