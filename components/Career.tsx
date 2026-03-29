export default function Career() {
  return (
    <section id="career" className="bg-surface-muted">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Career</h2>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        <p className="text-text-secondary leading-relaxed">
          Currently working as a Fullstack Developer at Autodesk, contributing
          to large-scale applications and migration efforts across complex
          codebases.
        </p>

        <p className="text-text-secondary leading-relaxed">
          Previously, I worked at Universe (a Ticketmaster company), where I
          helped build and maintain a global ticketing platform. My work involved
          backend systems, frontend applications, performance improvements, and
          third-party integrations such as Stripe and PayPal.
        </p>

        <p className="text-text-secondary leading-relaxed">
          I’ve also contributed as a tech lead at Globant, mentoring developers,
          supporting teams, and helping deliver high-impact features across
          multiple projects.
        </p>
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
