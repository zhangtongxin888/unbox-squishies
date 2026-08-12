import { faqs } from "@/content/game-data";
import { EvidenceBadge } from "./evidence-badge";

export function FAQList({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map((faq, index) => (
        <details id={faq.id} key={faq.id} open={index === 0 && !limit}>
          <summary><span>{faq.question}</span><b aria-hidden="true">＋</b></summary>
          <div className="faq-answer"><p>{faq.answer}</p><EvidenceBadge kind={faq.evidence} /></div>
        </details>
      ))}
    </div>
  );
}
