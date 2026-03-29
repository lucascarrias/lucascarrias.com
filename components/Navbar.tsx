export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-surface/80 backdrop-blur px-6 py-4 flex justify-between items-center border-b border-border">
      <span className="text-text-primary font-semibold tracking-tight">Lucas Carrias Bruno</span>
      <div className="flex gap-6 text-sm">
        <a href="#about" className="text-text-secondary hover:text-text-primary transition">About</a>
        <a href="#career" className="text-text-secondary hover:text-text-primary transition">Career</a>
        <a href="#contact" className="text-text-secondary hover:text-text-primary transition">Contact</a>
      </div>
    </nav>
  );
}
