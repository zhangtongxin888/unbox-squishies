import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/game-data";

export function PageHero({ eyebrow, title, description, current, children }: { eyebrow: string; title: string; description: string; current: string; children?: ReactNode }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Unbox Squishies Guide", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: current },
    ],
  };
  return (
    <section className="page-hero">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <Link className="breadcrumb" href="/">Unbox Squishies Guide <span aria-hidden="true">/</span></Link>
      <p className="section-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
