export default function Hero() {
  return (
    <section className="pt-24 pb-12">
      <p className="text-accent text-sm font-mono mb-3">// TODO: your tagline</p>
      <h1 className="text-text text-5xl font-bold tracking-tight mb-4">
        {/* TODO: Your Name */}
        Lucas Carrias Bruno
      </h1>
      <p className="text-accent text-xl font-medium mb-6">
        {/* TODO: Your Role */}
        Software Engineer
      </p>
      <p className="text-muted text-base leading-relaxed max-w-xl mb-8">
        {/* TODO: Short description */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="#career"
          className="px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          View Work
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-5 py-2.5 border border-accent text-accent text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
