export default function Career() {
  return (
    <section id="career">
      <h2 className="text-text text-2xl font-semibold mb-4">Career</h2>
      <p className="text-muted text-base leading-relaxed mb-6">
        {/* TODO: Short career summary */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </p>
      <a
        href="/cv.pdf"
        download
        className="inline-block px-5 py-2.5 border border-accent text-accent text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
      >
        Download CV
      </a>
    </section>
  );
}
