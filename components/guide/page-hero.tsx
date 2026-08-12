import type { ReactNode } from "react";
import Link from "next/link";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <Link className="breadcrumb" href="/">Unbox Squishies Guide <span aria-hidden="true">/</span></Link>
      <p className="section-kicker">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
