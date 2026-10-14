"use client";

import { useState } from "react";


interface OutletFraming {
  id: string;
  source: string;
  biasType: "Sensationalist Tabloid" | "Corporate Slanted" | "Objective Wire Service";
  headline: string;
  loadedWords: string[];
  neutralityScore: number;
  narrativeGoal: string;
  tone: string;
}

const FRAMINGS: OutletFraming[] = [
  {
    id: "tabloid",
    source: "Daily Viral Alert",
    biasType: "Sensationalist Tabloid",
    headline: "INFLATION PANIC: Business owners SLAM catastrophic wage hike as economic disaster looms!",
    loadedWords: ["PANIC", "SLAM", "catastrophic", "disaster looms"],
    neutralityScore: 18,
    narrativeGoal: "Maximizes fear and alarm to capture quick social media clicks.",
    tone: "Alarmist / High Outrage"
  },
  {
    id: "corporate",
    source: "Financial Opinion Post",
    biasType: "Corporate Slanted",
    headline: "Struggling small enterprises crushed by reckless new bureaucratic payroll mandate.",
    loadedWords: ["crushed", "reckless", "bureaucratic payroll mandate"],
    neutralityScore: 38,
    narrativeGoal: "Frames a labor policy exclusively through employer burden while omitting worker benefit.",
    tone: "Selectively Grievance-Oriented"
  },
  {
    id: "objective",
    source: "Independent News Wire (AP/Reuters)",
    biasType: "Objective Wire Service",
    headline: "Government approves 5% minimum wage increase following annual cost-of-living review.",
    loadedWords: [],
    neutralityScore: 96,
    narrativeGoal: "Reports the factual action, numerical scale, and institutional justification with zero emotive adjectives.",
    tone: "Neutral / Informative"
  }
];

export default function BiasComparator() {
  const [activeId, setActiveId] = useState<string>("tabloid");

  const current = FRAMINGS.find((f) => f.id === activeId) || FRAMINGS[0];

  return (
    <div className="bias-comparator-box">
      <div className="bias-header-bar">
        <div>
          <span className="eyebrow">Interactive Media Framing Lab</span>
          <h3>Compare 3 Framings of the Exact Same Event</h3>
        </div>
        <div className="bias-outlet-selector">
          {FRAMINGS.map((f) => (
            <button
              key={f.id}
              className={`outlet-pill-btn ${activeId === f.id ? "is-active" : ""}`}
              onClick={() => setActiveId(f.id)}
              type="button"
            >
              {f.source}
            </button>
          ))}
        </div>
      </div>

      <div className="bias-card fade-up">
        <div className="bias-card-top">
          <span className={`bias-type-badge type-${current.id}`}>
            {current.biasType}
          </span>
          <span className="bias-neutrality-label">
            Neutrality Index: <strong>{current.neutralityScore}%</strong>
          </span>
        </div>

        <blockquote className="bias-headline-display">
          “{current.headline}”
        </blockquote>

        <div className="bias-breakdown-row">
          <div className="bias-detail-col">
            <span className="col-label">Narrative Framing:</span>
            <p>{current.narrativeGoal}</p>
          </div>
          <div className="bias-detail-col">
            <span className="col-label">Emotional Tone:</span>
            <p>{current.tone}</p>
          </div>
          <div className="bias-detail-col">
            <span className="col-label">Loaded Language:</span>
            <div className="loaded-tags-row">
              {current.loadedWords.length > 0 ? (
                current.loadedWords.map((w) => (
                  <span key={w} className="loaded-tag">
                    {w}
                  </span>
                ))
              ) : (
                <span className="text-teal text-sm font-semibold">
                  ✓ None detected (Neutral vocabulary)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
