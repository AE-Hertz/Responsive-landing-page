import Contact from "./components/Contact";
import Navbar from "./components/Navabar"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

const App = () => {
  
    return (
        <main className="overflow-x-hidden antialiased text-neutral-800">
            <Navbar />
            <div className="pt-20">
                <Hero />
                <Services />
                <Portfolio />
                <Contact />
            </div>
        </main>
    );
};

export default App;
