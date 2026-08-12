import type { Metadata } from "next";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { PageHero } from "@/components/guide/page-hero";
import { StarterRoute } from "@/components/guide/starter-route";
import { GuideShell } from "@/components/site/guide-shell";

export const metadata: Metadata = {
  title: "Unbox Squishies Beginner Guide | First Session Route",
  description: "Follow three fact-checked steps for your first Unbox Squishies session: get a box, unbox it, and squish to earn.",
  alternates: { canonical: "/beginner-guide" },
  openGraph: { title: "Unbox Squishies Beginner Guide", description: "Three fact-checked actions for your first session.", url: "/beginner-guide" },
};

export default function BeginnerGuidePage() {
  return (
    <GuideShell>
      <PageHero eyebrow="Beginner guide · 3-step route" title="Your first session, without invented mechanics." description="Complete one box cycle using only actions the official game description confirms. Every step includes a finish line and the next useful move.">
        <a className="button button-primary" href="#step-1">Start step 1 <span aria-hidden="true">↓</span></a>
      </PageHero>
      <section className="section-wrap guide-body">
        <StarterRoute />
        <aside className="callout"><strong>Keep your own evidence.</strong><p>When the game shows a cost, reward, rarity name, or event notice, treat that live screen as more current than an undated third-party list. This guide deliberately avoids filling those gaps with guesses.</p></aside>
      </section>
      <section className="section-wrap continue-section compact-section">
        <InternalNextLinks links={[
          { eyebrow: "Next", title: "Read the core loop", description: "Understand what each official action confirms.", href: "/core-loop" },
          { eyebrow: "Then", title: "Build a progression plan", description: "Use visible milestones and current in-game values.", href: "/progression" },
        ]} />
      </section>
    </GuideShell>
  );
}
