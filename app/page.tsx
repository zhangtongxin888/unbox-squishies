import Image from "next/image";
import { EvidenceBadge } from "@/components/guide/evidence-badge";
import { FAQList } from "@/components/guide/faq-list";
import { GameplayLoop } from "@/components/guide/gameplay-loop";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { MistakeDoctor } from "@/components/guide/mistake-doctor";
import { ProgressionMatrix } from "@/components/guide/progression-matrix";
import { StarterRoute } from "@/components/guide/starter-route";
import { GuideShell } from "@/components/site/guide-shell";
import { officialSources, site } from "@/content/game-data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}/`,
    description: "A fact-checked beginner guide to the official Unbox Squishies gameplay loop.",
    about: {
      "@type": "VideoGame",
      name: site.gameName,
      author: { "@type": "Organization", name: site.creator },
      gamePlatform: "Roblox",
      sameAs: officialSources.experience,
    },
  };

  return (
    <GuideShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="guide-hero">
        <div className="hero-copy">
          <p className="section-kicker">Unbox Squishies · Beginner field kit</p>
          <h1>Open your first box. <em>Build the loop.</em></h1>
          <p className="hero-lede">Use the verified four-action route: get a box, unbox a Squishy, squish to earn, and start collecting rare finds.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/beginner-guide#step-1">Start step 1 <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="/core-loop">See the full loop</a>
          </div>
          <div className="trust-row" aria-label="Evidence policy">
            <span>Official listing checked</span><span>Official media checked</span><span>No guessed prices or odds</span>
          </div>
        </div>
        <div className="hero-kit">
          <div className="hero-image-wrap">
            <Image src="/game-icon.png" alt="Official Unbox Squishies icon showing a hand holding a blue Squishy over an open orange box" fill priority sizes="(max-width: 900px) 88vw, 40vw" />
            <p>Official game icon · reviewed {site.reviewedLabel}</p>
          </div>
          <article className="first-step-card">
            <div><span>New player route</span><b>Step 1 of 3</b></div>
            <h2>Get one box.</h2>
            <dl>
              <div><dt>Do now</dt><dd>Find the way to get a box and take one.</dd></div>
              <div><dt>Done when</dt><dd>A box is ready to open.</dd></div>
            </dl>
            <a href="/beginner-guide#step-1">Open the full checklist <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <nav className="stuck-picker" aria-label="Find help by situation">
        <p>Where are you stuck?</p>
        <a href="/beginner-guide#step-1"><span>01</span>I just joined</a>
        <a href="/core-loop#loop-map"><span>02</span>I lost the loop</a>
        <a href="/progression#observe"><span>03</span>I found something new</a>
        <a href="/sources#not-published"><span>04</span>A claim feels uncertain</a>
      </nav>

      <section className="section-wrap route-overview" id="quick-start">
        <header className="section-heading split-heading">
          <div><p className="section-kicker">Quick start</p><h2>Three actions for your first session.</h2></div>
          <div><p>This route only uses actions named in the official description. It does not invent a currency name, prices, upgrades, or drop rates.</p><a className="inline-link" href="/beginner-guide">Open the complete beginner guide <span aria-hidden="true">→</span></a></div>
        </header>
        <StarterRoute compact />
      </section>

      <section className="loop-panel">
        <div className="section-wrap">
          <header className="section-heading split-heading light-heading">
            <div><p className="section-kicker">Core gameplay loop</p><h2>Four verified actions. One clear route.</h2></div>
            <div><p>When a tip conflicts with this loop, check whether it belongs to another game. This experience is identified by Place ID {site.rootPlaceId}.</p><a className="inline-link" href="/core-loop">Learn how to read the loop <span aria-hidden="true">→</span></a></div>
          </header>
          <GameplayLoop />
        </div>
      </section>

      <section className="section-wrap progression-overview">
        <header className="section-heading centered-heading">
          <p className="section-kicker">Progression route</p>
          <h2>Progress by observing, not guessing.</h2>
          <p>The public listing names rare Squishies and special events, but not exact prices, odds, tiers, upgrades, or a final completion rule.</p>
        </header>
        <ProgressionMatrix />
        <a className="button button-primary centered-button" href="/progression">Use the full progression plan <span aria-hidden="true">→</span></a>
      </section>

      <section className="media-break">
        <div className="media-image">
          <Image src="/game-thumbnail.png" alt="Official Unbox Squishies thumbnail showing an orange box, a blue Squishy, question marks, and promotional rarity text" fill sizes="(max-width: 900px) 100vw, 51vw" />
        </div>
        <div className="media-note">
          <EvidenceBadge kind="official-media" />
          <h2>Media is evidence—within limits.</h2>
          <p>The current official thumbnail shows a box reveal, a blue Squishy, mystery symbols, and “.00001%” promotional text. It supports the rare-reveal theme, but it is not a complete drop table.</p>
          <a className="inline-link" href="/sources#media">Read the media rule <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section-wrap mistakes-overview">
        <header className="section-heading split-heading">
          <div><p className="section-kicker">Common mistakes</p><h2>Spot advice from the wrong game.</h2></div>
          <div><p>The biggest early risk is not a bad pull. It is following confident advice about systems this target game does not publicly document.</p><a className="inline-link" href="/common-mistakes">Open the full mistake clinic <span aria-hidden="true">→</span></a></div>
        </header>
        <MistakeDoctor />
      </section>

      <section className="evidence-board">
        <div className="section-wrap evidence-grid">
          <div><p className="section-kicker">Evidence board</p><h2>What is confirmed—and what stays unknown.</h2><p>Every important claim is labeled so you can tell official facts from guide strategy.</p></div>
          <article><EvidenceBadge kind="official-listing" /><h3>Confirmed in writing</h3><p>Game identity, creator, get a box, unbox, squish to earn, rare collection, and special events.</p></article>
          <article><EvidenceBadge kind="not-published" /><h3>Not publicly documented</h3><p>Currency name, prices, exact odds, upgrades, offline earnings, active slots, and active codes.</p></article>
          <article><EvidenceBadge kind="guide-strategy" /><h3>Editorial route</h3><p>Repeat the official actions, observe your screen, record current values, and avoid imported claims.</p></article>
          <a className="button button-cream" href="/sources">Open every source <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section-wrap faq-preview">
        <header className="section-heading centered-heading"><p className="section-kicker">FAQ</p><h2>Answers with their evidence attached.</h2><p>Start with the questions that most often cause this game to be confused with similar experiences.</p></header>
        <FAQList limit={5} />
        <a className="inline-link centered-link" href="/faq">Read all questions <span aria-hidden="true">→</span></a>
      </section>

      <section className="section-wrap continue-section">
        <p className="section-kicker">Continue the route</p>
        <h2>Your next useful page is already picked.</h2>
        <InternalNextLinks links={[
          { eyebrow: "Step 1", title: "Beginner guide", description: "Turn the official loop into a first-session checklist.", href: "/beginner-guide" },
          { eyebrow: "Step 2", title: "Core loop", description: "See what each confirmed action does—and does not prove.", href: "/core-loop" },
          { eyebrow: "Step 3", title: "Progression", description: "Use observable milestones instead of invented values.", href: "/progression" },
        ]} />
      </section>
    </GuideShell>
  );
}
