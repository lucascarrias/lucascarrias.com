export default function Contact() {
  return (
    <section id="contact" className="pb-24">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
          Feel free to reach out — I&apos;m always open to discussing
        interesting problems, opportunities, or collaborations.
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <a
          href="mailto:lucascarriasbruno@gmail.com"
          className="text-accent hover:underline"
        >
          lucascarriasbruno@gmail.com
        </a>
        <a
          href="github.com/lucascarrias"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        <a
          href="linkedin.com/in/lucas-carrias"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
