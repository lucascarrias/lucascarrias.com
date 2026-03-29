export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-background px-6 py-4 flex justify-between items-center border-b border-white/5">
      <span className="text-text font-semibold tracking-tight">Lucas Carrias Bruno</span>
      <div className="flex gap-6 text-sm">
        <a href="#about" className="text-muted hover:text-text transition-colors">About</a>
        <a href="#career" className="text-muted hover:text-text transition-colors">Career</a>
        <a href="#contact" className="text-muted hover:text-text transition-colors">Contact</a>
      </div>
    </nav>
  );
}
