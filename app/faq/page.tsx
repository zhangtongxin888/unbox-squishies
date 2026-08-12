import type { Metadata } from "next";
import { FAQList } from "@/components/guide/faq-list";
import { InternalNextLinks } from "@/components/guide/internal-next-links";
import { PageHero } from "@/components/guide/page-hero";
import { GuideShell } from "@/components/site/guide-shell";
import { faqs, site } from "@/content/game-data";

export const metadata: Metadata = {
  title: "Unbox Squishies FAQ | Codes, Odds, Currency and Creator",
  description: "Fact-checked answers about Unbox Squishies: first actions, creator, codes, odds, currency, upgrades, and offline earnings.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "Unbox Squishies FAQ", description: "Evidence-labeled answers about codes, odds, currency, creator, and more.", url: "/faq" },
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  return (
    <GuideShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={`FAQ · Reviewed ${site.reviewedLabel}`} title="Answers that show their evidence." description="Each answer is labeled as an official fact, official media observation, guide strategy, or information the public listing does not document." />
      <section className="section-wrap guide-body"><FAQList /></section>
      <section className="section-wrap continue-section compact-section"><InternalNextLinks links={[
        { eyebrow: "Verify", title: "Source ledger", description: "Review every official URL and the limits of each source.", href: "/sources" },
        { eyebrow: "Restart", title: "Beginner guide", description: "Return to the three actions for your first session.", href: "/beginner-guide" },
      ]} /></section>
    </GuideShell>
  );
}
