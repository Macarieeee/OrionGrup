import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Portofoliu from "./pages/Portofoliu";

export default function App() {
  return (
    <>
      <Navbar />

      {/* padding-top pentru navbar fixed */}
      <main className="w-full overflow-x-hidden" style={{ minHeight: "100svh" }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portofoliu" element={<Portofoliu />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
