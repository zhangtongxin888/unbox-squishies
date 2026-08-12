import { evidenceLabels, type EvidenceKind } from "@/content/game-data";

export function EvidenceBadge({ kind }: { kind: EvidenceKind }) {
  return <span className={`evidence-badge evidence-${kind}`}>{evidenceLabels[kind]}</span>;
}
