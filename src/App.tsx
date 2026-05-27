import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Index from "./pages/Index";
import Portofoliu from "./pages/Portofoliu";
import DespreNoi from "./pages/DespreNoi";
import Shop from "./pages/Shop";
import Proiect1 from "./pages/Proiecte/Proiect1";
import Proiect2 from "./pages/Proiecte/Proiect2";
import Proiect3 from "./pages/Proiecte/Proiect3";
import Proiect4 from "./pages/Proiecte/Proiect4";
import Proiect5 from "./pages/Proiecte/Proiect5";
import Proiect6 from "./pages/Proiecte/Proiect6";
import Proiect7 from "./pages/Proiecte/Proiect7";
import Proiect8 from "./pages/Proiecte/Proiect8";
import ProductPage from "./pages/ProductPage";
import ScrollRestoration from "./components/ScrollRestoration";
import Admin from "./pages/admin/Admin";
import AdminResetPassword from "./pages/admin/AdminResetPassword";
import Cataloage from "./pages/Cataloage";
import ProtectedRoute from "./components/ProtectedRoute";
import WorkInProgressPage from "./pages/WorkInProgressPage";
import ProjectPageSupabase from "./pages/ProjectPageSupabase";
import TermsAndConditions from "./pages/TermsAndConditions";
export default function App() {
  return (
    <>
      <Navbar />

      {/* padding-top pentru navbar fixed */}
      <main className="w-full overflow-x-hidden" style={{ minHeight: "100svh" }}>
        <ScrollRestoration />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/reset" element={<AdminResetPassword />} />
          <Route path="/" element={<Index />} />
          <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
          <Route path="/portofoliu" element={<Portofoliu />} />
          <Route path="/despre" element={<DespreNoi />} />
          <Route path="/proiect1" element={<Proiect1 />} />
          <Route path="/proiect2" element={<Proiect2 />} />
          <Route path="/proiect3" element={<Proiect3 />} />
          <Route path="/proiect4" element={<Proiect4 />} />
          <Route path="/proiect5" element={<Proiect5 />} />
          <Route path="/proiect6" element={<Proiect6 />} />
          <Route path="/proiect7" element={<Proiect7 />} />
          <Route path="/proiect8" element={<Proiect8 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/portofoliu/:slug" element={<ProjectPageSupabase />} />
          <Route
  path="/cataloage"
  element={
    <ProtectedRoute>
      <Cataloage />
    </ProtectedRoute>
  }
/>

<Route
  path="/work-in-progress"
  element={
    <ProtectedRoute>
      <WorkInProgressPage />
    </ProtectedRoute>
  }
/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}
