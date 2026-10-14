import HeadlineCheck from "./headline-check";
import { BookOpen, AlertOctagon, Layers, Search, ShieldCheck, Flame } from "lucide-react";

export const metadata = {
  title: "Headline & Claim Intelligence Engine | Sift It",
  description:
    "Evaluate headline sensationalism, emotional triggers, attribution quality, and generate objective reframes with one-click fact-checking queries.",
};

export default function CheckerPage() {
  return (
    <div className="checker-route">
      {/* Intro Header */}
      <section className="checker-intro shell">
        <p className="eyebrow">Interactive Forensic Lab / 03</p>
        <h1>
          Decode the <em>framing.</em>
          <br />
          Uncover the manipulation.
        </h1>
        <p>
          Headlines are engineered to harvest clicks, provoke emotional reactions, and shape perception
          before you ever read the article. Analyze the linguistic hooks, evaluate manipulation risk,
          and explore how objective journalism reframes the story.
        </p>

        {/* 4-Step Forensic Methodology Bar */}
        <div className="checker-methodology-strip">
          <div className="method-step-card">
            <div className="method-num">01</div>
            <div className="method-info">
              <Layers size={14} className="text-teal" />
              <strong>Linguistic Deconstruction</strong>
              <p>Scans for emotional hyperbole, loaded verbs, and weasel attribution.</p>
            </div>
          </div>

          <div className="method-step-card">
            <div className="method-num">02</div>
            <div className="method-info">
              <Flame size={14} className="text-coral" />
              <strong>Manipulation Vectors</strong>
              <p>Diagnoses cognitive exploitation, context splicing, and virality pressure.</p>
            </div>
          </div>

          <div className="method-step-card">
            <div className="method-num">03</div>
            <div className="method-info">
              <ShieldCheck size={14} className="text-teal" />
              <strong>Neutral Wire Reframe</strong>
              <p>Rewrites sensationalized phrasing to sober, objective wire standards.</p>
            </div>
          </div>

          <div className="method-step-card">
            <div className="method-num">04</div>
            <div className="method-info">
              <Search size={14} className="text-coral" />
              <strong>Lateral Fact-Checking</strong>
              <p>Generates targeted search queries for Alt News, BOOM, Google Fact Check, and PIB.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analyzer Workbench (Spacious, Un-Cramped Layout) */}
      <section className="checker-workspace shell" aria-label="Headline intelligence analyzer">
        <HeadlineCheck />
      </section>

      {/* Reference & Field Reminders */}
      <section className="checker-footer-reminders shell">
        <div className="reminder-card">
          <div className="reminder-head">
            <BookOpen size={16} className="text-teal" />
            <strong>THE 30-SECOND LATERAL READING RULE</strong>
          </div>
          <p>
            Before sharing any breaking story, spend 30 seconds reading laterally in a second tab.
            90% of viral hoaxes are debunked within the first two search results of established fact-checkers.
          </p>
        </div>

        <div className="reminder-card card-caution">
          <div className="reminder-head">
            <AlertOctagon size={16} className="text-coral" />
            <strong>CRITICAL THINKING REMINDER</strong>
          </div>
          <p>
            An emotional headline doesn&apos;t automatically make a claim false, and a calm headline doesn&apos;t make it true.
            Always follow claims back to primary documents, clinical trials, or official gazettes.
          </p>
        </div>
      </section>
    </div>
  );
}
