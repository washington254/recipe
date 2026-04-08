import SideNav from "./components/SideNav"
import BottomCTA from "./components/BottomCTA"
import MainContent from "./components/MainContent"

function App() {

  return (
    <div className="flex w-full h-screen bg-[#f7efe6] overflow-hidden font-sans">
      <SideNav />
      
      <main className="flex-1 h-full overflow-y-auto p-4 md:p-10 md:pt-12 w-full">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-16 pb-20">
          
          {/* Main Dashboard UI */}
          <MainContent />
          
          {/* Bottom CTA Component */}
          <BottomCTA />

        </div>
      </main>
    </div>
  )
}

export default App
