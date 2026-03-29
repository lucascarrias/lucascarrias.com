/* eslint-disable react/jsx-no-comment-textnodes */
export default function Hero() {
  return (
    <section className="pt-24 pb-12">
      <p className="text-accent text-sm font-mono mb-3">
        // building scalable systems and thoughtful solutions
      </p>
      <h1 className="text-text-primary text-5xl font-bold tracking-tight mb-4">
        Lucas Carrias Bruno
      </h1>
      <p className="text-primary text-xl font-medium mb-6">
        {/* TODO: Your Role */}
        Senior Fullstack Engineer
      </p>
      <p className="text-text-secondary text-base leading-relaxed max-w-xl mb-8">
        I build and improve complex web applications, focusing on performance,
        scalability, and clean architecture. Experienced in leading teams and
        delivering real-world impact across large-scale systems.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="#career"
          className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-md hover:opacity-90 transition"
        >
          View Work
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-5 py-2.5 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-white transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
