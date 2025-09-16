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

        {/* Card newsletter */}
        <div className="mx-auto w-full max-w-lg rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg p-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo / Icon */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-4">
              O.
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2">
              Get early access
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Aliquam et tellus urna. Phasellus eget adipiscing elit. Mauris id nunc
              odio. Aliquam et tellus urna. Phasellus eget.
            </p>

            {/* Input + Button */}
            <form className="flex w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter email here"
                className="flex-1 px-4 py-3 rounded-l-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-r-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
              >
                Enter
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
