import { officialLoop } from "@/content/game-data";
import { EvidenceBadge } from "./evidence-badge";

export function GameplayLoop() {
  return (
    <ol className="gameplay-loop" id="loop-map">
      {officialLoop.map((item, index) => (
        <li key={item.verb}>
          <span className="loop-index">0{index + 1}</span>
          <strong>{item.verb}</strong>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <EvidenceBadge kind={item.evidence} />
          {index < officialLoop.length - 1 && <i aria-hidden="true">→</i>}
        </li>
      ))}
    </ol>
  );
}
