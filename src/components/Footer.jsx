const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-gold">Captured by Angie</h3>
            <p className="text-white/70">
              Creating timeless memories through the art of photography.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/capturedby__angie/?next=%2Fthe.gb.shop%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-copper rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <p className="text-white/70 text-sm">
              <a href="mailto:angieshvaya.photo@gmail.com" className="hover:text-gold transition-colors">
                angieshvaya.photo@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Captured by Angie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

