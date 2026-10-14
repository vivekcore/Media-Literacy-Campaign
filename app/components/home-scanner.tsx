"use client";

import { useState } from "react";
import Link from "next/link";
import { analyzeHeadline } from "../lib/analysis-engine";
import { Flame, ArrowRight, ShieldCheck } from "lucide-react";

const QUICK_TESTS = [
  "SHOCKING: Secret spice cures diabetes in 48 hours!",
  "NASA telescope detects organic molecules on exoplanet.",
  "Opposition leader SLAMS government in furious debate!",
];

export default function HomeScanner() {
  const [input, setInput] = useState(QUICK_TESTS[0]);
  const [result, setResult] = useState(() => analyzeHeadline(QUICK_TESTS[0]));

  function handleScan(text: string) {
    setInput(text);
    setResult(analyzeHeadline(text));
  }

  return (
    <div className="home-scanner-card fade-up">
      <div className="scanner-badge-row">
        <span className="live-pulse-dot" />
        <span className="scanner-tag">LIVE LINGUISTIC SCANNER</span>
        <span className="scanner-subtag">Interactive Demo</span>
      </div>

      <div className="scanner-input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => handleScan(e.target.value)}
          placeholder="Test any headline..."
          className="scanner-text-input"
        />
        <div className="scanner-quick-chips">
          <span>Quick examples:</span>
          {QUICK_TESTS.map((t, idx) => (
            <button
              key={idx}
              onClick={() => handleScan(t)}
              type="button"
              className={input === t ? "is-active-chip" : ""}
            >
              {idx === 0 ? "🚨 Viral Health Myth" : idx === 1 ? "🔭 Science Wire" : "⚡ Political Conflict"}
            </button>
          ))}
        </div>
      </div>

      {/* Live Result Gauge Bar */}
      <div className="scanner-mini-report">
        <div className="mini-metric">
          <span className="mini-label">Sensationalism Score</span>
          <div className="mini-score-row">
            <Flame
              size={18}
              className={result.sensationalismScore > 50 ? "text-coral" : "text-teal"}
            />
            <strong>{result.sensationalismScore} / 100</strong>
            <span
              className={`mini-tag ${
                result.sensationalismScore > 50 ? "tag-danger" : "tag-success"
              }`}
            >
              {result.sensationalismLevel}
            </span>
          </div>
        </div>

        <div className="mini-metric">
          <span className="mini-label">Verification Risk</span>
          <div className="mini-score-row">
            <ShieldCheck size={18} className="text-teal" />
            <strong>{result.credibilityRisk}</strong>
          </div>
        </div>

        <div className="mini-metric">
          <span className="mini-label">Linguistic Red Flags</span>
          <div className="mini-score-row">
            <strong>{result.flags.length} terms flagged</strong>
          </div>
        </div>
      </div>

      <div className="scanner-action-footer">
        <span className="reframe-preview">
          <strong>Objective Reframe:</strong> “{result.neutralReframe}”
        </span>
        <Link className="button-primary mini-btn" href={`/checker`}>
          Deep Analysis in Analyzer <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
