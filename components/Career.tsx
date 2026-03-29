export default function Career() {
  return (
    <section id="career" className="bg-surface-muted">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Career</h2>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        {/* TODO: Short career summary */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <a
        href="/cv.pdf"
        download
        className="inline-block px-5 py-2.5 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-white transition"
      >
        Download CV
      </a>
    </section>
  );
}
