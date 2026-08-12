import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/guide/evidence-badge";
import { GameplayLoop } from "@/components/guide/gameplay-loop";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { PageHero } from "@/components/guide/page-hero";
import { GuideShell } from "@/components/site/guide-shell";

export const metadata: Metadata = {
  title: "Unbox Squishies Core Gameplay Loop",
  description: "Learn the verified Unbox Squishies loop: get a box, unbox a Squishy, squish to earn, and collect rare finds.",
  alternates: { canonical: "/core-loop" },
};

export default function CoreLoopPage() {
  return (
    <GuideShell>
      <PageHero eyebrow="Core gameplay loop" title="Four actions define the route." description="The official description is short, but precise enough to give new players a reliable sequence. Here is what each action proves—and where the public facts stop." />
      <section className="section-wrap guide-body">
        <GameplayLoop />
        <div className="reading-grid">
          <article><EvidenceBadge kind="official-listing" /><h2>What the listing says</h2><p>“Get a box,” “Unbox a Squishy,” “Squish to earn,” collect hundreds of cute rare Squishies, and watch for special events.</p></article>
          <article><EvidenceBadge kind="not-published" /><h2>What it does not say</h2><p>It does not publicly name the currency, publish prices or drop tables, describe upgrades, promise offline earnings, or confirm active codes.</p></article>
          <article><EvidenceBadge kind="guide-strategy" /><h2>How to use the gap</h2><p>Repeat the confirmed actions once, observe the response on your screen, and make decisions from current visible information instead of borrowing another game’s systems.</p></article>
        </div>
        <aside className="callout"><strong>Lost after an unbox?</strong><p>Return to the exact next verb in the official description: squish to earn. Then start another cycle and compare only what your session actually shows.</p></aside>
      </section>
      <section className="section-wrap continue-section compact-section"><InternalNextLinks links={[
        { eyebrow: "Previous", title: "Beginner route", description: "Complete the three first-session checks.", href: "/beginner-guide" },
        { eyebrow: "Next", title: "Progression plan", description: "Turn observations into safe milestones.", href: "/progression" },
      ]} /></section>
    </GuideShell>
  );
}
