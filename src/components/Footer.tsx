import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0b0d] text-gray-400 overflow-hidden">
      {/* === CTA Section === */}
      <div className="text-center px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What are you waiting for?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Start simplifying your tasks today and sign up now!
        </p>


{/* Card contact form */}
<div className="mx-auto w-full max-w-lg rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg p-8">
  <div className="flex flex-col items-center text-center">
    {/* Logo / Icon */}
    <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4">
      O.
    </div>

    <h3 className="text-2xl font-semibold text-white mb-2">
      Trimite o cerere
    </h3>
    <p className="text-gray-400 text-sm mb-6">
      Completează formularul, iar noi revenim către tine cât mai repede cu toate detaliile necesare.
    </p>

    <form className="w-full max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nume *"
        required
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Telefon *"
        required
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        name="cui"
        placeholder="CUI (opțional)"
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        name="message"
        placeholder="Mesaj *"
        required
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />

      {/* Upload fișier */}
      <div className="w-full text-left">
        <label className="block text-sm text-gray-300 mb-2">
          Încarcă fișier (opțional)
        </label>
        <input
          type="file"
          name="attachment"
          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-gray-300 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Hidden field pentru produsele din coș */}
      <input
        type="hidden"
        name="cartProducts"
        value=""
      />

      <button
        type="submit"
        className="w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition duration-300 ease-in-out"
      >
        Trimite mesajul
      </button>
    </form>
  </div>
</div>
      </div>

      {/* === Footer main === */}
      <div className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">ORION.</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              SHOWROOM ORION GRUP Șoseaua Mihai Bravu 12, București 021326
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Company</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
            </ul>
          </div>

          {/* Col 3: Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
            </ul>
          </div>

          {/* Col 4: Webflow Stuff */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stuff</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Style Guide</a></li>
              <li><a href="#" className="hover:text-white">Licensing</a></li>
              <li><a href="#" className="hover:text-white">Instructions</a></li>
              <li><a href="#" className="hover:text-white">Change Log</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p>
          CREATED BY Macarie Mihai-Alexandru
        </p>
        <p>
          COPYRIGHT BY ORION GRUP
        </p>
      </div>
    </footer>
  );
}
