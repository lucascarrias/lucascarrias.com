export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-semibold text-text-primary">About</h2>

        <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            I&apos;m a fullstack developer with experience across backend-heavy
            systems and modern frontend applications.
          </p>

          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            Over the past years, I&apos;ve worked on large-scale platforms,
            including ticketing systems used by millions of users, focusing on
            performance, system reliability, and maintainability.
          </p>

          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            Beyond coding, I enjoy solving complex problems, mentoring
            developers, and contributing to healthier engineering environments.
          </p>
        </div>
      </div>
    </section>
  );
}
