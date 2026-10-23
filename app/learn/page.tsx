import Link from "next/link";
import SiftSimulator from "./sift-simulator";
import TacticsDecoder from "./tactics-decoder";
import DecisionFlowchart from "./decision-flowchart";
import DeepfakeInspector from "./deepfake-inspector";
import LateralBrowser from "./lateral-browser";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Learn SIFT & Forensics | Sift It",
  description:
    "Master the 4 SIFT moves with interactive simulators, decode manipulation tactics, and test lateral reading with hands-on tools.",
};

const posters = [
  {
    letter: "S",
    title: "Stop",
    prompt: "What did this make me feel?",
    description:
      "Pause before reacting or sharing. Strong emotional reflex (anger, fear, sudden excitement) is an intentional cue to slow down.",
    color: "poster-coral",
  },
  {
    letter: "I",
    title: "Investigate the source",
    prompt: "Who is really behind this?",
    description:
      "Read laterally. Open a new tab, search Wikipedia or verified registries to evaluate the creator's credentials and institutional funding.",
    color: "poster-lime",
  },
  {
    letter: "F",
    title: "Find better coverage",
    prompt: "Who else reports this?",
    description:
      "Look for independent consensus across recognized news wires. If a major story is only on anonymous feeds, caution is warranted.",
    color: "poster-blue",
  },
  {
    letter: "T",
    title: "Trace to the original",
    prompt: "Where did this begin?",
    description:
      "Follow quotes, statistics, and images back to the primary research DOI, official circular, or unedited raw video recording.",
    color: "poster-paper",
  },
];

const factCheckers = [
  {
    name: "Alt News",
    href: "https://www.altnews.in/",
    desc: "Pioneering Indian fact-checking service debunking communal hoaxes, doctored videos, and social media misinformation.",
  },
  {
    name: "BOOM Live",
    href: "https://www.boomlive.in/",
    desc: "IFCN-certified fact-checking organization tracking political claims, viral WhatsApp medical rumors, and financial scams.",
  },
  {
    name: "PIB Fact Check",
    href: "https://factcheck.pib.gov.in/",
    desc: "Government of India's official portal countering rumors, fraudulent circulars, and fake recruitment notices.",
  },
  {
    name: "Snopes Fact Archive",
    href: "https://www.snopes.com/",
    desc: "The world's oldest digital fact-checking archive tracking urban legends, viral claims, and internet hoaxes.",
  },
];

export default function LearnPage() {
  return (
    <div className="learn-page">
      <section className="learn-hero shell" aria-labelledby="learn-title">
        <div className="learn-hero-copy">
          <h1 id="learn-title">Four moves for a sharper read.</h1>
          <p>Check credibility with four SIFT habits in under 60 seconds.</p>
          <p className="learn-first-step">
            <strong>Start with Stop.</strong> Pause before reacting or sharing,
            and notice what the information makes you feel.
          </p>
          <p className="learn-workbench-note">
            Digital literacy scholar Mike Caulfield created the SIFT method.
            Five interactive workbenches include an AI deepfake lab and a
            decision flow engine.
          </p>
        </div>
        <div className="learn-hero-art">
          <ol className="learn-sift-sequence" aria-label="The SIFT sequence">
            <li>
              <span aria-hidden="true">S</span>
              <strong>Stop</strong>
            </li>
            <li>
              <span aria-hidden="true">I</span>
              <strong>Investigate the source</strong>
            </li>
            <li>
              <span aria-hidden="true">F</span>
              <strong>Find better coverage</strong>
            </li>
            <li>
              <span aria-hidden="true">T</span>
              <strong>Trace to the original</strong>
            </li>
          </ol>
        </div>
      </section>

      <section className="learn-posters shell" aria-labelledby="sift-title">
        <div className="route-section-heading">
          <h2 id="sift-title">The Four SIFT Moves.</h2>
          <p>
            Four instinctive questions to ask whenever information surprises,
            alarms, or flatters your existing beliefs.
          </p>
        </div>
        <div className="poster-grid">
          {posters.map((poster) => (
            <article
              className={`teaching-poster ${poster.color}`}
              key={poster.letter}
            >
              <span className="poster-letter" aria-hidden="true">
                {poster.letter}
              </span>
              <div className="poster-copy">
                <h3>{poster.title}</h3>
                <p className="poster-prompt">{poster.prompt}</p>
                <p className="poster-description">{poster.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learn-lateral-section shell">
        <LateralBrowser />
      </section>

      <section className="learn-simulator-section shell">
        <div className="route-section-heading">
          <h2>Interactive SIFT Simulator.</h2>
          <p>
            Step through a viral exam-cancellation breaking rumor in real time.
            Practice the right forensic moves at each phase.
          </p>
        </div>
        <SiftSimulator />
      </section>

      <section className="learn-decision-section shell">
        <DecisionFlowchart />
      </section>

      <section className="learn-deepfake-section shell">
        <DeepfakeInspector />
      </section>

      <section className="learn-tactics-section shell">
        <div className="route-section-heading">
          <h2>Disinformation Tactics Decoder.</h2>
          <p>
            Learn how bad actors engineer viral deception. Filter by category,
            inspect the psychological mechanism, and learn the countermeasure.
          </p>
        </div>
        <TacticsDecoder />
      </section>

      <section className="worked-example">
        <div className="shell worked-layout">
          <div className="worked-copy">
            <h2>A headline is a prompt to question, not a conclusion.</h2>
            <p>
              Notice how the urgency marker &ldquo;BREAKING&rdquo; triggers a
              rush to share. Tracing the primary municipal bulletin reveals that
              the schedule was an ordinary routine revision announced two weeks
              earlier.
            </p>
            <Link className="button-secondary" href="/checker">
              Launch Headline Analyzer
            </Link>
          </div>
          <figure className="headline-poster">
            <div className="headline-poster-meta">
              <span>Classroom forensic study</span>
              <span>Analysis example</span>
            </div>
            <blockquote>
              BREAKING: City announces new Saturday library hours.
            </blockquote>
            <div className="headline-annotation">
              <span className="annotation-line" aria-hidden="true" />
              <p>
                BREAKING signals artificial urgency. Check the library&apos;s
                official website schedule rather than reposting the social
                announcement.
              </p>
            </div>
            <div className="headline-source">
              <span>The lateral move</span>
              <span>Search: [City Library official weekend hours 2024]</span>
            </div>
          </figure>
        </div>
      </section>

      <section
        className="learn-checklist shell"
        aria-labelledby="checklist-title"
      >
        <h2 id="checklist-title">The 30-Second Field Checklist</h2>
        <div className="checklist-grid">
          <p>
            <span>01</span>
            <strong>Who published this?</strong> Search their name outside their
            own site. Are they an accredited newsroom or an anonymous handle?
          </p>
          <p>
            <span>02</span>
            <strong>What is the date &amp; location?</strong> Reverse-search
            suspicious photos. Often, the footage is real but five years old.
          </p>
          <p>
            <span>03</span>
            <strong>Who else reports it?</strong> If a major national disaster
            or policy leak is true, every global wire will have it within 20
            minutes.
          </p>
        </div>
      </section>

      <section className="learn-resources-hub shell" id="resources">
        <div className="route-section-heading">
          <h2>Trusted Fact-Checking Directory.</h2>
          <p>
            Bookmark these independent, IFCN-certified organizations for
            reliable debunkings and deep dives.
          </p>
        </div>
        <div className="fact-checker-cards-grid">
          {factCheckers.map((fc) => (
            <a
              key={fc.name}
              href={fc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="fact-checker-profile-card"
            >
              <div className="fc-card-head">
                <strong>{fc.name}</strong>
                <ExternalLink
                  size={14}
                  className="text-coral"
                  aria-hidden="true"
                />
              </div>
              <p>{fc.desc}</p>
              <span className="fc-visit-link">Visit Fact-Checker</span>
            </a>
          ))}
        </div>
      </section>

      <section className="learn-next shell" aria-label="Continue learning">
        <p>Ready to put these skills to the test in the newsroom?</p>
        <Link className="button-primary" href="/quiz">
          Play News Detective Game <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
