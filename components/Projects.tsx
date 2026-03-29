type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
};

const projects = [
  {
    title: "Ticketing Platform Performance & Reliability",
    description:
      "Improved performance and stability of a large-scale ticketing platform used by millions of users.",
    problem:
      "High latency and instability during peak traffic, affecting checkout experience and system reliability.",
    solution:
      "Optimized backend queries, improved API interactions, and worked on system-wide performance fixes across a multi-service architecture.",
    impact:
      "Reduced response times and improved system stability during high-traffic events.",
    tech: ["Ruby on Rails", "React", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Large-Scale Rails Migration & Modernization",
    description:
      "Contributed to the migration and modernization of a complex legacy application at Autodesk.",
    problem:
      "A large, aging codebase with outdated dependencies and performance bottlenecks.",
    solution:
      "Refactored critical parts of the system, resolved integration issues, and updated external dependencies while maintaining system stability.",
    impact:
      "Improved maintainability, reduced technical debt, and enabled continued evolution of the platform.",
    tech: ["Ruby on Rails", "JavaScript", "Docker"],
  },
  {
    title: "Payments & Third-Party Integrations",
    description:
      "Led and contributed to integrations with payment systems and external services in a production environment.",
    problem:
      "Need for reliable and scalable integrations with payment providers and third-party services.",
    solution:
      "Implemented and maintained integrations with services such as Stripe and PayPal, ensuring consistency, reliability, and proper error handling.",
    impact:
      "Enabled secure and scalable payment flows, supporting critical business operations.",
    tech: ["Stripe", "PayPal", "Ruby", "APIs"],
  },
  {
    title: "Technical Leadership & Team Enablement",
    description:
      "Acted as a tech lead across multiple projects, supporting teams and improving delivery processes.",
    problem:
      "Teams facing complex technical challenges, coordination issues, and evolving product requirements.",
    solution:
      "Mentored developers, guided architectural decisions, and facilitated communication between stakeholders and engineering teams.",
    impact:
      "Improved team efficiency, delivery quality, and overall project outcomes.",
    tech: ["Leadership", "Architecture", "Mentorship"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-3xl mx-auto px-4 space-y-16">
        <h2 className="text-2xl font-semibold text-text-primary">
          Selected Work
        </h2>

        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-text-primary">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary">
              {project.description}
            </p>

            {/* Details */}
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-medium text-text-primary">
                  Problem:
                </span>{" "}
                <span className="text-text-secondary">
                  {project.problem}
                </span>
              </p>

              <p>
                <span className="font-medium text-text-primary">
                  Solution:
                </span>{" "}
                <span className="text-text-secondary">
                  {project.solution}
                </span>
              </p>

              <p>
                <span className="font-medium text-text-primary">
                  Impact:
                </span>{" "}
                <span className="text-text-secondary">
                  {project.impact}
                </span>
              </p>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 border border-border rounded-md text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="pt-6 border-b border-border" />
          </div>
        ))}
      </div>
    </section>
  );
}