import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function GuideShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to guide content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <a className="mobile-continue" href="/beginner-guide#step-1">Continue beginner route <span aria-hidden="true">→</span></a>
    </>
  );
}
