import Link from "next/link";
import { primaryNav } from "@/content/game-data";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Unbox Squishies Guide home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><b>Unbox</b> Squishies <small>Starter Route</small></span>
    </Link>
  );
}

function NavLinks() {
  return primaryNav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>);
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><NavLinks /></nav>
      <Link className="header-cta" href="/beginner-guide#step-1">Start the tutorial <span aria-hidden="true">→</span></Link>
      <details className="mobile-nav">
        <summary><span className="menu-open">Open menu</span><span className="menu-close">Close menu</span><b aria-hidden="true">＋</b></summary>
        <nav aria-label="Mobile navigation"><NavLinks /></nav>
      </details>
    </header>
  );
}
