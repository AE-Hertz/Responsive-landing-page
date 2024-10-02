import Navbar from "./components/Navabar"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Services from "./Services"
const App = () => {

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
    </main>
  )
}


export default App