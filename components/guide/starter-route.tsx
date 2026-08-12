import { beginnerSteps } from "@/content/game-data";
import { EvidenceBadge } from "./evidence-badge";

export function StarterRoute({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`starter-route${compact ? " starter-route-compact" : ""}`}>
      {beginnerSteps.map((step) => (
        <li id={step.id} key={step.id}>
          <div className="step-index"><span>{step.number}</span><i aria-hidden="true" /></div>
          <article>
            <div className="card-heading">
              <h3>{step.title}</h3>
              <EvidenceBadge kind={step.evidence} />
            </div>
            <dl>
              <div><dt>Do now</dt><dd>{step.doNow}</dd></div>
              <div><dt>Why</dt><dd>{step.why}</dd></div>
              <div><dt>Done when</dt><dd>{step.done}</dd></div>
              {!compact && <div><dt>Next</dt><dd>{step.next}</dd></div>}
            </dl>
          </article>
        </li>
      ))}
    </ol>
  );
}
