import Image from "next/image";
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
    "@graph": [
      {
        "@type": "WebSite",
        name: site.name,
        url: `${site.url}/`,
        description: "A fact-checked beginner guide to the official Unbox Squishies gameplay loop.",
      },
      {
        "@type": "VideoGame",
        name: site.gameName,
        author: { "@type": "Organization", name: site.creator },
        gamePlatform: "Roblox",
        sameAs: officialSources.experience,
      },
    ],
  };

  return (
    <GuideShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="guide-hero">
        <div className="hero-copy">
          <p className="section-kicker">Unbox Squishies · Verified starter route</p>
          <h1>Start with one box. <em>Learn the whole loop.</em></h1>
          <p className="hero-lede">Get a box, reveal one Squishy, squish to earn, then collect what the game shows. Your next move is the beginner tutorial below.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/beginner-guide#step-1">Start the beginner tutorial <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="/core-loop#loop-map">See the 4-step loop</a>
          </div>
          <ol className="hero-mini-rail" aria-label="First three actions">
            <li><span>01</span>Get one box</li>
            <li><span>02</span>Reveal a Squishy</li>
            <li><span>03</span>Squish and observe</li>
          </ol>
        </div>

        <div className="open-box-stage" aria-label="Official Unbox Squishies game art presented as an open-box reveal">
          <div className="box-glow" />
          <div className="packing packing-one" /><div className="packing packing-two" /><div className="packing packing-three" />
          <div className="box-flap box-flap-left" /><div className="box-flap box-flap-right" />
          <div className="revealed-squishy">
            <Image src="/game-icon.png" alt="Official Unbox Squishies icon showing a glossy blue Squishy lifted from an orange box" fill priority sizes="(max-width: 760px) 74vw, 38vw" />
          </div>
          <article className="next-action-ticket">
            <span>Your next action</span>
            <h2>Get one box.</h2>
            <p><b>Done when</b> a box is ready to open.</p>
            <a href="/beginner-guide#step-1">Open step 1 <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section className="section-wrap first-session" id="quick-start">
        <header className="section-heading split-heading">
          <div><p className="section-kicker">Your first session</p><h2>Three actions. One clear finish line.</h2></div>
          <div><p>Complete one cycle before chasing rare finds or following outside advice. Each action tells you what to do and how to know you are finished.</p><a className="inline-link" href="/beginner-guide">Open the full first-session checklist <span aria-hidden="true">→</span></a></div>
        </header>
        <StarterRoute compact />
      </section>

      <nav className="stuck-picker" aria-label="Choose help for your current situation">
        <p>Choose your next move</p>
        <a href="/beginner-guide#step-1"><span>Start</span>I just joined</a>
        <a href="/core-loop#loop-map"><span>Recover</span>I lost the loop</a>
        <a href="/progression#observe"><span>Compare</span>I found something new</a>
        <a href="/sources#not-published"><span>Verify</span>A claim feels uncertain</a>
      </nav>

      <section className="loop-panel">
        <div className="section-wrap">
          <header className="section-heading split-heading light-heading">
            <div><p className="section-kicker">Squish loop rail</p><h2>When you feel lost, follow four verbs.</h2></div>
            <div><p>Get → unbox → squish → collect. If you stop after a reveal, your next verified action is squish.</p><a className="inline-link" href="/core-loop">Learn the loop in detail <span aria-hidden="true">→</span></a></div>
          </header>
          <GameplayLoop />
        </div>
      </section>

      <section className="section-wrap progression-overview">
        <header className="section-heading centered-heading">
          <p className="section-kicker">Choose your next move</p>
          <h2>Use what you can see to progress.</h2>
          <p>Learn the route, observe current values, then collect. Exact prices, odds, upgrades, and a final completion rule are not published in the official sources reviewed here.</p>
        </header>
        <ProgressionMatrix />
        <a className="button button-primary centered-button" href="/progression">Build your no-guess progression plan <span aria-hidden="true">→</span></a>
      </section>

      <section className="scanner-section">
        <div className="section-wrap scanner-layout">
          <article className="identity-scanner">
            <p className="section-kicker">Wrong-game scanner</p>
            <h2>A confident tip can still describe the wrong game.</h2>
            <div className="scanner-readout">
              <span>Target locked</span>
              <strong>{site.gameName}</strong>
              <dl><div><dt>Universe</dt><dd>{site.universeId}</dd></div><div><dt>Place</dt><dd>{site.rootPlaceId}</dd></div></dl>
            </div>
            <a className="inline-link" href="/sources#identity">Run the 5-second identity check <span aria-hidden="true">→</span></a>
          </article>
          <div className="scanner-mistakes"><MistakeDoctor /></div>
        </div>
      </section>

      <section className="section-wrap faq-preview">
        <header className="section-heading centered-heading"><p className="section-kicker">Quick answers</p><h2>Know what is confirmed—and what is not.</h2><p>Every answer carries its evidence state, with a direct route to more useful detail.</p></header>
        <FAQList limit={5} />
        <a className="inline-link centered-link" href="/faq">Read all fact-checked answers <span aria-hidden="true">→</span></a>
      </section>

      <section className="section-wrap continue-section">
        <p className="section-kicker">Keep your route moving</p>
        <h2>Your next useful guide is already picked.</h2>
        <InternalNextLinks links={[
          { eyebrow: "Do now", title: "Beginner guide", description: "Finish one full box cycle with a clear checkpoint at every step.", href: "/beginner-guide" },
          { eyebrow: "Learn next", title: "Core loop", description: "Use the four verified verbs whenever you get lost.", href: "/core-loop" },
          { eyebrow: "Go deeper", title: "Progression", description: "Turn visible results into safe next-session decisions.", href: "/progression" },
        ]} />
      </section>

      <aside className="evidence-strip">
        <div><strong>Facts reviewed {site.reviewedLabel}</strong><span>Universe {site.universeId} · Place {site.rootPlaceId}</span></div>
        <p>Official identity checked. Unknown values stay unknown.</p>
        <a href="/sources">See the source ledger <span aria-hidden="true">→</span></a>
      </aside>
    </GuideShell>
  );
}
