import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-semibold text-text-primary">Contact</h2>

        <p className="text-text-secondary leading-relaxed text-base md:text-lg">
          Feel free to reach out — I&apos;m always open to discussing
          interesting problems, opportunities, or collaborations.
        </p>

        <div className="space-y-3">
          <a
            href="mailto:lucascarriasbruno@gmail.com"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <img src="./gmail.svg" alt="Gmail" width={20} height={16} />{" "}
            lucascarriasbruno@gmail.com
          </a>

          <a
            href="https://github.com/lucascarrias"
            target="_blank"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition"
          >
            <img src="./github.svg" alt="GitHub" width={20} height={16} />{" "}
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/lucas-carrias"
            target="_blank"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition"
          >
            <img src="./linkedin.svg" alt="LinkedIn" width={20} height={16} />{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
