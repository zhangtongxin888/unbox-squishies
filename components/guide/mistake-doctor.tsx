import { mistakes } from "@/content/game-data";

export function MistakeDoctor() {
  return (
    <div className="mistake-doctor">
      {mistakes.map((mistake, index) => (
        <article key={mistake.symptom}>
          <span className="doctor-number">0{index + 1}</span>
          <dl>
            <div><dt>Symptom</dt><dd>{mistake.symptom}</dd></div>
            <div><dt>Likely cause</dt><dd>{mistake.cause}</dd></div>
            <div><dt>Fix now</dt><dd>{mistake.fix}</dd></div>
          </dl>
          <a href={mistake.href}>{mistake.label} <span aria-hidden="true">→</span></a>
        </article>
      ))}
    </div>
  );
}
