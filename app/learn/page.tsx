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
      {/* Hero */}
      <section className="learn-hero shell">
        <div className="learn-hero-copy">
          <p className="eyebrow">Interactive Verification Suite / 01</p>
          <h1>
            Four moves for a <em>sharper</em> read.
          </h1>
          <p>
            When a breaking headline or viral post hits your feed, don&apos;t rely on your immediate reaction.
            The SIFT methodology (created by digital literacy scholar Mike Caulfield) gives you four practical,
            forensic habits to evaluate credibility in under 60 seconds.
          </p>
          <div className="lesson-stamp">
            <span>5 INTERACTIVE WORKBENCHES</span>
            <span>AI DEEPFAKE LAB</span>
            <span>DECISION FLOW ENGINE</span>
          </div>
        </div>
        <div className="learn-hero-art" aria-hidden="true">
          <span className="learn-art-ring ring-one" />
          <span className="learn-art-ring ring-two" />
          <span className="learn-art-cross">+</span>
          <span className="learn-art-word">
            SIFT
            <br />
            FIRST
          </span>
          <span className="learn-art-caption">STOP / INVESTIGATE / FIND / TRACE</span>
        </div>
      </section>

      {/* 4 SIFT Posters */}
      <section className="learn-posters shell" aria-labelledby="sift-title">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Core Methodology</p>
            <h2 id="sift-title">The Four SIFT Moves.</h2>
          </div>
          <p>
            Four instinctive questions to ask whenever information surprises, alarms, or flatters your existing beliefs.
          </p>
        </div>
        <div className="poster-grid">
          {posters.map((poster) => (
            <article
              className={`teaching-poster ${poster.color}`}
              key={poster.letter}
            >
              <div className="poster-topline">
                <span>MEDIA LITERACY / FIELD NOTE</span>
                <span>0{posters.indexOf(poster) + 1}</span>
              </div>
              <span className="poster-letter" aria-hidden="true">
                {poster.letter}
              </span>
              <div className="poster-copy">
                <h3>{poster.title}</h3>
                <p className="poster-prompt">{poster.prompt}</p>
                <p className="poster-description">{poster.description}</p>
              </div>
              <span className="poster-foot">SIFT IT / LATERAL READING</span>
            </article>
          ))}
        </div>
      </section>

      {/* TOOL 1: Multi-Tab Lateral Reading Simulator */}
      <section className="learn-lateral-section shell">
        <LateralBrowser />
      </section>

      {/* TOOL 2: Interactive SIFT Step-by-Step Simulator */}
      <section className="learn-simulator-section shell">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Scenario Simulation Lab</p>
            <h2>Interactive SIFT Simulator.</h2>
          </div>
          <p>
            Step through a viral exam-cancellation breaking rumor in real-time. Practice making the right forensic moves at each phase.
          </p>
        </div>
        <SiftSimulator />
      </section>

      {/* TOOL 3: "Should I Share This?" Interactive Decision Flowchart */}
      <section className="learn-decision-section shell">
        <DecisionFlowchart />
      </section>

      {/* TOOL 4: AI Deepfake & Synthetic Media Forensic Lab */}
      <section className="learn-deepfake-section shell">
        <DeepfakeInspector />
      </section>

      {/* TOOL 5: Disinformation Tactics Decoder */}
      <section className="learn-tactics-section shell">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Manipulation Taxonomy</p>
            <h2>Disinformation Tactics Decoder.</h2>
          </div>
          <p>
            Learn how bad actors engineer viral deception. Filter by category, inspect the psychological mechanism, and learn the countermeasure.
          </p>
        </div>
        <TacticsDecoder />
      </section>

      {/* Worked Case Study */}
      <section className="worked-example">
        <div className="shell worked-layout">
          <div className="worked-copy">
            <p className="eyebrow">Case Forensics / 02</p>
            <h2>A headline is a prompt to question, not a conclusion.</h2>
            <p>
              Notice how the urgency marker &ldquo;BREAKING&rdquo; triggers a rush to share. By tracing the primary municipal bulletin,
              readers discover the schedule was an ordinary routine revision announced two weeks earlier.
            </p>
            <Link className="button-secondary" href="/checker">
              Launch Headline Analyzer ↗
            </Link>
          </div>
          <figure className="headline-poster">
            <div className="headline-poster-meta">
              <span>CLASSROOM FORENSIC STUDY</span>
              <span>ANALYSIS EXAMPLE</span>
            </div>
            <blockquote>
              BREAKING: City announces new Saturday library hours.
            </blockquote>
            <div className="headline-annotation">
              <span className="annotation-line" aria-hidden="true" />
              <p>
                <mark>BREAKING</mark> signals artificial urgency. Forensic move: Check the library&apos;s
                official website schedule rather than reposting the social announcement.
              </p>
            </div>
            <div className="headline-source">
              <span>THE LATERAL MOVE</span>
              <span>
                Search: [City Library official weekend hours 2024]
              </span>
            </div>
          </figure>
        </div>
      </section>

      {/* Checklist Protocol */}
      <section className="learn-checklist shell">
        <p className="eyebrow">Verification Protocol / 03</p>
        <h2>The 30-Second Field Checklist:</h2>
        <div className="checklist-grid">
          <p>
            <span>01</span>
            <strong>Who published this?</strong> Search their name outside their own site. Are they an accredited newsroom or an anonymous handle?
          </p>
          <p>
            <span>02</span>
            <strong>What is the date &amp; location?</strong> Reverse-search suspicious photos. Often the footage is real, but 5 years old.
          </p>
          <p>
            <span>03</span>
            <strong>Who else reports it?</strong> If a major national disaster or policy leak is true, every global wire will have it within 20 minutes.
          </p>
        </div>
      </section>

      {/* Fact-Checking Organizations Hub */}
      <section className="learn-resources-hub shell" id="resources">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Verified Fact-Checking Network</p>
            <h2>Trusted Fact-Checking Directory.</h2>
          </div>
          <p>
            Bookmark these independent, IFCN-certified organizations for reliable debunkings and deep dives.
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
                <ExternalLink size={14} className="text-coral" />
              </div>
              <p>{fc.desc}</p>
              <span className="fc-visit-link">Visit Fact-Checker ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Next Step Banner */}
      <section className="learn-next shell">
        <p>Ready to put these skills to the test in the newsroom?</p>
        <Link className="button-primary" href="/quiz">
          Play News Detective Game <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
