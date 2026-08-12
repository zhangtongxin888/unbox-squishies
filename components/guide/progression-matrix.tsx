import { progressionStages } from "@/content/game-data";

export function ProgressionMatrix() {
  return (
    <div className="progression-matrix">
      {progressionStages.map((stage) => (
        <article key={stage.number}>
          <div className="matrix-heading"><span>{stage.number}</span><h3>{stage.title}</h3></div>
          <dl>
            <div><dt>Goal</dt><dd>{stage.goal}</dd></div>
            <div><dt>Watch</dt><dd>{stage.watch}</dd></div>
            <div><dt>Avoid</dt><dd>{stage.avoid}</dd></div>
            <div><dt>Move on when</dt><dd>{stage.moveOn}</dd></div>
          </dl>
        </article>
      ))}
    </div>
  );
}
