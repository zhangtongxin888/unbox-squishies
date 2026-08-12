type JourneyLink = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export function InternalNextLinks({ links }: { links: readonly JourneyLink[] }) {
  return (
    <nav className="journey-links" aria-label="Continue reading">
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          <span>{link.eyebrow}</span>
          <strong>{link.title}</strong>
          <p>{link.description}</p>
          <b aria-hidden="true">→</b>
        </a>
      ))}
    </nav>
  );
}
