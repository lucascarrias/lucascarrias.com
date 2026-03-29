/* eslint-disable react/jsx-no-comment-textnodes */
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div className="space-y-6">
          <p className="text-sm text-accent font-mono">
            // building scalable systems and thoughtful solutions
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            Lucas Carrias
          </h1>

          <h2 className="text-xl md:text-2xl text-primary">
            Senior Fullstack Engineer
          </h2>

          <p className="text-text-secondary leading-relaxed text-base md:text-lg">
            I build and improve complex web applications, focusing on
            performance, scalability, and clean architecture. Experienced in
            leading teams and delivering real-world impact across large-scale
            systems.
          </p>

          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="#career"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              View Work <ArrowRight size={16} />
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/profile.webp"
            alt="Lucas Carrias"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl border border-border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
