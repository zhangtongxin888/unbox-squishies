import Image from "next/image";
import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/guide/evidence-badge";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { PageHero } from "@/components/guide/page-hero";
import { GuideShell } from "@/components/site/guide-shell";
import { officialSources, site } from "@/content/game-data";

export const metadata: Metadata = {
  title: "Unbox Squishies Sources | Official IDs and Fact Checks",
  description: "Official Roblox sources, IDs, review date, media notes, and unknowns used by the independent Unbox Squishies beginner guide.",
  alternates: { canonical: "/sources" },
};

const sourceRows = [
  ["Official experience", officialSources.experience, "Confirms the target Place and public game page."],
  ["Place → Universe mapping", officialSources.placeToUniverse, "Maps Place 93740767919502 to Universe 10558440509."],
  ["Official game data", officialSources.gameDetails, "Used for creator, description, creation time, update time, and player limit."],
  ["Official search data", officialSources.search, "Independently confirms the name, Universe ID, Root Place ID, and canonical path."],
  ["Official icon API", officialSources.icon, "Returns the current 512×512 game icon."],
  ["Official media API", officialSources.media, "Returns the current public 768×432 thumbnail."],
] as const;

export default function SourcesPage() {
  return (
    <GuideShell>
      <PageHero eyebrow={`Source ledger · Reviewed ${site.reviewedLabel}`} title="Every fact has a boundary." description="This page records which experience we checked, where the facts came from, what the official media shows, and what remains unpublished." />
      <section className="section-wrap guide-body source-ledger">
        <article className="identity-card" id="identity">
          <div><EvidenceBadge kind="official-listing" /><h2>Target identity</h2><p>Use these values to prevent mix-ups with similarly named experiences.</p></div>
          <dl><div><dt>Official name</dt><dd>{site.gameName}</dd></div><div><dt>Creator</dt><dd>{site.creator}</dd></div><div><dt>Universe ID</dt><dd>{site.universeId}</dd></div><div><dt>Root Place ID</dt><dd>{site.rootPlaceId}</dd></div><div><dt>Created</dt><dd>{site.createdAt}</dd></div><div><dt>Data updated</dt><dd>{site.updatedAt}</dd></div></dl>
        </article>

        <div className="source-table" aria-label="Official sources">
          {sourceRows.map(([name, href, note]) => <article key={name}><div><h3>{name}</h3><p>{note}</p></div><a href={href} rel="noreferrer">Open official source <span aria-hidden="true">↗</span></a></article>)}
        </div>

        <article className="media-evidence" id="media">
          <div className="media-evidence-image"><Image src="/game-thumbnail.png" alt="Current official Unbox Squishies thumbnail with an orange box, a blue Squishy, question marks, and promotional rarity text" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <div><EvidenceBadge kind="official-media" /><h2>What the current media can prove</h2><p>The thumbnail supports a box reveal, a blue Squishy, a mystery/rarity theme, and the presence of “.00001%” promotional text. It does not publish a complete, durable drop table.</p></div>
        </article>

        <article className="unknown-panel" id="not-published">
          <EvidenceBadge kind="not-published" />
          <h2>Not publicly confirmed in the sources above</h2>
          <ul><li>A currency officially named Cash</li><li>Box prices or exact drop-rate tables</li><li>An upgrade system or upgrade values</li><li>Offline or passive earnings</li><li>Active slots, placement, replacement, or retirement mechanics</li><li>A current active-code system</li><li>A guaranteed 30-minute completion route</li></ul>
          <p>If the experience itself adds or displays one of these later, the live game can be newer than this review. The source date should always travel with the claim.</p>
        </article>
      </section>
      <section className="section-wrap continue-section compact-section"><InternalNextLinks links={[
        { eyebrow: "Apply", title: "Beginner guide", description: "Use the confirmed facts in a first-session checklist.", href: "/beginner-guide" },
        { eyebrow: "Resolve", title: "FAQ", description: "Read evidence-labeled answers to common claims.", href: "/faq" },
      ]} /></section>
    </GuideShell>
  );
}
