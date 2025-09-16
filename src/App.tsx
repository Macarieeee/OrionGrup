import './App.css'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Shop from "./components/Shop";
import Brands from "./components/Brands";
import MiddleSection from "./components/SplitScrollSection";
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full overflow-x-hidden" style={{ minHeight: "100svh" }}>
      <Navbar />
      <Hero /> 
      <MiddleSection />
      <Shop />
      <AboutUs />
      <Brands speedMs={18000} />
      <Footer />
    </main>
  );
}
