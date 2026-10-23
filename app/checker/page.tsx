import HeadlineCheck from "./headline-check";
import {
  AlertOctagon,
  BookOpen,
  Flame,
  Layers,
  Search,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Headline & Claim Intelligence Engine | Sift It",
  description:
    "Evaluate headline sensationalism, emotional triggers, attribution quality, and generate objective reframes with one-click fact-checking queries.",
};

export default function CheckerPage() {
  return (
    <div className="checker-route">
      <header className="checker-page-heading">
        <h1>Headline analysis</h1>
        <p>
          Some headlines are engineered to win clicks, provoke emotion, and
          shape perception before you reach the article. Inspect their language,
          assess manipulation risk, and compare them with objective journalism.
        </p>
      </header>

      <section
        className="checker-workbench"
        aria-label="Headline intelligence analyzer"
      >
        <HeadlineCheck />
      </section>

      <section
        className="checker-methodology"
        aria-labelledby="checker-methodology-title"
      >
        <h2 id="checker-methodology-title">How the analysis works</h2>
        <ol className="checker-methodology-steps">
          <li className="checker-methodology-step">
            <span className="checker-step-number" aria-hidden="true">
              01
            </span>
            <Layers
              size={16}
              className="checker-step-icon"
              aria-hidden="true"
            />
            <div>
              <h3>Linguistic deconstruction</h3>
              <p>
                Scans for emotional hyperbole, loaded verbs, and weasel
                attribution.
              </p>
            </div>
          </li>
          <li className="checker-methodology-step">
            <span className="checker-step-number" aria-hidden="true">
              02
            </span>
            <Flame
              size={16}
              className="checker-step-icon"
              aria-hidden="true"
            />
            <div>
              <h3>Manipulation vectors</h3>
              <p>
                Diagnoses cognitive exploitation, context splicing, and
                virality pressure.
              </p>
            </div>
          </li>
          <li className="checker-methodology-step">
            <span className="checker-step-number" aria-hidden="true">
              03
            </span>
            <ShieldCheck
              size={16}
              className="checker-step-icon"
              aria-hidden="true"
            />
            <div>
              <h3>Neutral wire reframe</h3>
              <p>
                Rewrites sensationalized phrasing to sober, objective wire
                standards.
              </p>
            </div>
          </li>
          <li className="checker-methodology-step">
            <span className="checker-step-number" aria-hidden="true">
              04
            </span>
            <Search
              size={16}
              className="checker-step-icon"
              aria-hidden="true"
            />
            <div>
              <h3>Lateral fact-checking</h3>
              <p>
                Generates targeted search queries for Alt News, BOOM, Google
                Fact Check, and PIB.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section
        className="checker-reminders"
        aria-labelledby="checker-reminders-title"
      >
        <h2 id="checker-reminders-title">Reading reminders</h2>
        <div className="checker-reminder-list">
          <article className="checker-reminder">
            <h3>
              <BookOpen size={16} aria-hidden="true" />
              The 30-second lateral reading rule
            </h3>
            <p>
              Before sharing any breaking story, spend 30 seconds reading
              laterally in a second tab. 90% of viral hoaxes are debunked within
              the first two search results of established fact-checkers.
            </p>
          </article>

          <article className="checker-reminder checker-reminder-caution">
            <h3>
              <AlertOctagon size={16} aria-hidden="true" />
              Critical thinking reminder
            </h3>
            <p>
              An emotional headline doesn&apos;t automatically make a claim
              false, and a calm headline doesn&apos;t make it true. Always
              follow claims back to primary documents, clinical trials, or
              official gazettes.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
