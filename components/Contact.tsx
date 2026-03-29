export default function Contact() {
  return (
    <section id="contact" className="pb-24">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-text-secondary text-base leading-relaxed mb-6">
        {/* TODO: Short contact intro */}
        Feel free to reach out — I&apos;m always open to interesting conversations.
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <a
          href="mailto:todo@example.com"
          className="text-accent hover:underline"
        >
          {/* TODO: your email */}
          todo@example.com
        </a>
        <a
          href="https://github.com/TODO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub {/* TODO: your GitHub handle */}
        </a>
        <a
          href="https://linkedin.com/in/TODO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn {/* TODO: your LinkedIn handle */}
        </a>
      </div>
    </section>
  );
}
