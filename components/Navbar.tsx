export default function Navbar() {
  return (
    <nav className="bg-surface/80 backdrop-blur border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-medium text-text-primary">
          Lucas Carrias
        </a>

        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="text-text-secondary hover:text-text-primary transition"
          >
            About
          </a>
          <a
            href="#career"
            className="text-text-secondary hover:text-text-primary transition"
          >
            Career
          </a>
          <a
            href="#contact"
            className="text-text-secondary hover:text-text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
