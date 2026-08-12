import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/guide/evidence-badge";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { PageHero } from "@/components/guide/page-hero";
import { ProgressionMatrix } from "@/components/guide/progression-matrix";
import { GuideShell } from "@/components/site/guide-shell";

export const metadata: Metadata = {
  title: "Unbox Squishies Progression Guide | Learn, Observe, Collect",
  description: "A no-guess progression route for Unbox Squishies using visible results instead of invented prices, upgrades, or drop rates.",
  alternates: { canonical: "/progression" },
  openGraph: { title: "Unbox Squishies Progression Guide", description: "Learn, observe, and collect without invented values.", url: "/progression" },
};

export default function ProgressionPage() {
  return (
    <GuideShell nextHref="/common-mistakes" nextLabel="Next: avoid common mistakes">
      <PageHero current="Progression guide" eyebrow="Progression guide" title="Use visible milestones, not borrowed numbers." description="Unbox Squishies advertises rare collecting and special events, but does not publicly document an upgrade tree, exact odds, or fixed costs. This route stays useful by focusing on what you can observe." />
      <section className="section-wrap guide-body" id="observe">
        <ProgressionMatrix />
        <div className="notebook-panel">
          <div><EvidenceBadge kind="guide-strategy" /><h2>Your tiny session notebook</h2><p>You do not need a spreadsheet. Record only what the current game shows so you can make your next decision from evidence.</p></div>
          <ul><li>The box name or source you used</li><li>The displayed cost, if any</li><li>The Squishy name and rarity cue</li><li>What visibly changed after squishing</li><li>Any current event notice</li></ul>
        </div>
        <aside className="callout warning"><strong>Do not convert thumbnail text into a universal drop rate.</strong><p>The official media includes “.00001%” as promotional text. Without a current public drop table, it cannot establish the odds for every box or Squishy.</p></aside>
      </section>
      <section className="section-wrap continue-section compact-section"><InternalNextLinks links={[
        { eyebrow: "Previous", title: "Core loop", description: "Recheck the four confirmed actions.", href: "/core-loop" },
        { eyebrow: "Next", title: "Common mistakes", description: "Catch advice imported from a different game.", href: "/common-mistakes" },
      ]} /></section>
    </GuideShell>
  );
}
