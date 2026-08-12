import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function GuideShell({
  children,
  nextHref = "/beginner-guide#step-1",
  nextLabel = "Start the beginner tutorial",
}: {
  children: ReactNode;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to guide content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <a className="mobile-continue" href={nextHref}>{nextLabel} <span aria-hidden="true">→</span></a>
    </>
  );
}
