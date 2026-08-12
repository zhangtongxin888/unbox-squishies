import type { Metadata } from "next";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { MistakeDoctor } from "@/components/guide/mistake-doctor";
import { PageHero } from "@/components/guide/page-hero";
import { GuideShell } from "@/components/site/guide-shell";
import { site } from "@/content/game-data";

export const metadata: Metadata = {
  title: "Unbox Squishies Common Mistakes | Wrong-Game Check",
  description: "Avoid the most common Unbox Squishies guide mistakes: mixed-up games, unverified odds, invented codes, and borrowed mechanics.",
  alternates: { canonical: "/common-mistakes" },
  openGraph: { title: "Unbox Squishies Common Mistakes", description: "Catch wrong-game advice, invented odds, and borrowed mechanics.", url: "/common-mistakes" },
};

export default function CommonMistakesPage() {
  return (
    <GuideShell nextHref="/faq" nextLabel="Next: read fact-checked answers">
      <PageHero current="Common mistakes" eyebrow="Common mistakes" title="The wrong game can look almost right." description={`Similar experience names make confident but irrelevant advice easy to copy. Use the identity check—Universe ${site.universeId}, Place ${site.rootPlaceId}—before trusting a mechanic.`} />
      <section className="section-wrap guide-body">
        <MistakeDoctor />
        <aside className="callout"><strong>The five-second identity check</strong><p>Confirm the title is “[📦] Unbox Squishies,” the creator is “Squish Squish Squish,” and the Place ID is {site.rootPlaceId}. If any one differs, the guide may describe another game.</p></aside>
      </section>
      <section className="section-wrap continue-section compact-section"><InternalNextLinks links={[
        { eyebrow: "Verify", title: "Open the sources", description: "See IDs, dates, official endpoints, and media limits.", href: "/sources" },
        { eyebrow: "Continue", title: "Read the FAQ", description: "Resolve codes, odds, currency, upgrades, and offline claims.", href: "/faq" },
      ]} /></section>
    </GuideShell>
  );
}
