import { Download } from "lucide-react";

export default function Career() {
  return (
    <section id="career" className="bg-surface-muted py-24">
      <div className="max-w-3xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl font-semibold text-text-primary">Career</h2>

        <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            Currently working as a Fullstack Developer at Autodesk, contributing
            to large-scale applications and migration efforts across complex
            codebases.
          </p>

          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            Previously, I worked at Universe (a Ticketmaster company), where I
            helped build and maintain a global ticketing platform. My work
            involved backend systems, frontend applications, performance
            improvements, and third-party integrations such as Stripe and
            PayPal.
          </p>

          <p className="text-text-secondary leading-relaxed text-base md:text-lg text-left">
            I’ve also contributed as a tech lead at Globant, mentoring
            developers, supporting teams, and helping deliver high-impact
            features across multiple projects.
          </p>
        </div>

        <div className="flex gap-4 pt-4 flex-wrap">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv.pdf`}
            download
            className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
