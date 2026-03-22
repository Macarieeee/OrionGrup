import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Portofoliu from "./pages/Portofoliu";
import DespreNoi from "./pages/DespreNoi";
import Shop from "./pages/Shop";
import Proiect1 from "./pages/Proiecte/Proiect1";
import Proiect2 from "./pages/Proiecte/Proiect2";
import Proiect3 from "./pages/Proiecte/Proiect3";
import ProductPage from "./pages/ProductPage";
import ScrollRestoration from "./components/ScrollRestoration";
import Admin from "./pages/admin/Admin";
import AdminResetPassword from "./pages/admin/AdminResetPassword";

export default function App() {
  return (
    <>
      <Navbar />

      {/* padding-top pentru navbar fixed */}
      <main className="w-full overflow-x-hidden" style={{ minHeight: "100svh" }}>
        <ScrollRestoration />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reset" element={<AdminResetPassword />} />
          <Route path="/" element={<Index />} />
          <Route path="/portofoliu" element={<Portofoliu />} />
          <Route path="/despre" element={<DespreNoi />} />
          <Route path="/proiect1" element={<Proiect1 />} />
          <Route path="/proiect2" element={<Proiect2 />} />
          <Route path="/proiect3" element={<Proiect3 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
