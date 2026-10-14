"use client";

import { useState } from "react";
import {
  analyzeHeadline,
  SAMPLE_HEADLINES,
  AnalysisReport,
  LinguisticFlag,
} from "../lib/analysis-engine";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Flame,
  Info,
  Layers,
  Search,
  ShieldAlert,
  Sliders,
  Sparkles,
  Copy,
  Check,
  Zap,
  Target,
  Thermometer,
  Shield,
} from "lucide-react";

export default function HeadlineCheck() {
  const [draft, setDraft] = useState("");
  const [report, setReport] = useState<AnalysisReport | null>(null);
  const [activeTab, setActiveTab] = useState<"manipulation" | "anatomy" | "psychology" | "reframe" | "verify">("manipulation");
  const [selectedFlag, setSelectedFlag] = useState<LinguisticFlag | null>(null);
  const [copied, setCopied] = useState(false);

  function handleAnalyze(textToAnalyze?: string) {
    const target = (textToAnalyze !== undefined ? textToAnalyze : draft).trim();
    if (!target) return;
    const res = analyzeHeadline(target);
    setReport(res);
    setSelectedFlag(res.flags[0] || null);
    setActiveTab("manipulation");
  }

  function handleSelectSample(sample: (typeof SAMPLE_HEADLINES)[0]) {
    setDraft(sample.text);
    handleAnalyze(sample.text);
  }

  function handleClear() {
    setDraft("");
    setReport(null);
    setSelectedFlag(null);
  }

  function handleCopyReport() {
    if (!report) return;
    const textToCopy = `[SIFT IT Forensic Intelligence Dossier]
Headline: "${report.rawHeadline}"
Manipulation Risk: ${report.manipulationRisk.overallScore}/100 (${report.manipulationRisk.tier})
Primary Manipulation Tactic: ${report.manipulationRisk.primaryTactic}
Emotional Temperature: ${report.manipulationRisk.emotionalTemperature}
Sensationalism Score: ${report.sensationalismScore}/100 (${report.sensationalismLevel})
Credibility Assessment: ${report.credibilityRisk} (${report.credibilityScore}/100)
Attribution: ${report.attribution.status}
Objective Reframe: "${report.neutralReframe}"
Linguistic Flags Detected: ${report.flags.map(f => `"${f.term}" (${f.category})`).join(", ") || "None"}
Verified with SIFT IT Forensic Engine`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="checker-tool">
      <div className="checker-tool-head">
        <div>
          <span className="checker-tool-step">FORENSIC LINGUISTIC INTELLIGENCE</span>
          <h2>Headline &amp; Claim Analyzer</h2>
        </div>
        <span className="checker-local">
          <Sparkles className="inline-icon" size={13} /> Manipulation Risk Engine
        </span>
      </div>

      <p className="checker-subhead">
        Enter any breaking headline, viral forward, or article title.
        Our linguistic engine evaluates <strong>Manipulation Risk</strong> across 5 vectors,
        identifies psychological vulnerabilities targeted, and produces an objective neutral reframe.
      </p>

      {/* Preset Samples */}
      <div className="checker-sample-block">
        <span className="checker-example-label">Try a real-world case study:</span>
        <div className="checker-examples">
          {SAMPLE_HEADLINES.map((sample) => (
            <button
              key={sample.category}
              onClick={() => handleSelectSample(sample)}
              type="button"
              className={draft === sample.text ? "is-active-sample" : ""}
            >
              <span className="sample-badge">{sample.badge}</span>
              <span className="sample-name">{sample.category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="checker-input-wrapper">
        <label className="checker-label" htmlFor="headline-text">
          Headline to Inspect:
        </label>
        <textarea
          className="checker-input"
          id="headline-text"
          maxLength={350}
          onChange={(e) => {
            setDraft(e.target.value);
            if (report) setReport(null);
          }}
          placeholder="Paste or type a headline (e.g., 'BREAKING: Secret government order leaks online, minister slams critics...')"
          value={draft}
        />
        <div className="checker-input-meta">
          <span>Scans for psychological hooks, manipulation vectors, and sourcing quality.</span>
          <span>{draft.length} / 350 chars</span>
        </div>
      </div>

      <div className="checker-actions">
        <button
          className="button-primary"
          disabled={!draft.trim()}
          onClick={() => handleAnalyze()}
          type="button"
        >
          <Search size={14} /> Calculate Manipulation Risk &amp; Audit
        </button>
        <button
          className="checker-clear"
          disabled={!draft && !report}
          onClick={handleClear}
          type="button"
        >
          Clear Input
        </button>
      </div>

      {/* ANALYSIS DASHBOARD RESULT */}
      <div className="checker-results" aria-live="polite">
        {!report ? (
          <div className="checker-empty">
            <span className="checker-empty-symbol" aria-hidden="true">
              <Sliders size={20} />
            </span>
            <div>
              <strong>Your forensic analysis dossier will appear here.</strong>
              <p>
                Select one of the sample case studies above or paste any news headline
                to inspect its Manipulation Risk Index, cognitive vulnerability profile,
                sensationalism score, and recommended lateral fact-checking queries.
              </p>
            </div>
          </div>
        ) : (
          <div className="analysis-dossier fade-up">
            {/* Top Score Matrix */}
            <div className="analysis-summary-header">
              <div>
                <span className="eyebrow">Forensic Audit Dossier</span>
                <h3>Manipulation Risk &amp; Credibility Audit</h3>
              </div>
              <button
                className="button-copy-report"
                onClick={handleCopyReport}
                type="button"
                title="Copy analysis summary to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-teal" /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy size={13} /> Copy Forensic Dossier
                  </>
                )}
              </button>
            </div>

            {/* Score Grid Cards: 3 High-Impact Cards */}
            <div className="analysis-metric-grid">
              {/* Card 1: Manipulation Risk Index */}
              <div
                className={`analysis-metric-card ${
                  report.manipulationRisk.overallScore >= 65
                    ? "card-danger"
                    : report.manipulationRisk.overallScore >= 35
                    ? "card-warning"
                    : "card-success"
                }`}
              >
                <div className="metric-header">
                  <span>MANIPULATION RISK INDEX</span>
                  <Zap size={16} />
                </div>
                <div className="metric-primary-value">
                  <strong>{report.manipulationRisk.overallScore}%</strong>
                  <small>risk score</small>
                </div>
                <div className="metric-badge">{report.manipulationRisk.tier}</div>
                <div className="metric-meter-bar">
                  <div
                    className="meter-fill"
                    style={{ width: `${report.manipulationRisk.overallScore}%` }}
                  />
                </div>
                <div className="metric-temp-indicator">
                  <Thermometer size={12} className="inline-icon" />
                  <span>Temp: <strong>{report.manipulationRisk.emotionalTemperature}</strong></span>
                </div>
              </div>

              {/* Card 2: Sensationalism Meter */}
              <div
                className={`analysis-metric-card ${
                  report.sensationalismScore >= 60
                    ? "card-danger"
                    : report.sensationalismScore >= 35
                    ? "card-warning"
                    : "card-success"
                }`}
              >
                <div className="metric-header">
                  <span>SENSATIONALISM INDEX</span>
                  <Flame size={16} />
                </div>
                <div className="metric-primary-value">
                  <strong>{report.sensationalismScore}</strong>
                  <small>/ 100</small>
                </div>
                <div className="metric-badge">{report.sensationalismLevel}</div>
                <div className="metric-meter-bar">
                  <div
                    className="meter-fill"
                    style={{ width: `${report.sensationalismScore}%` }}
                  />
                </div>
                <p className="metric-footnote">
                  Measures hyperbole, urgency modifiers, and reflex clickbait hooks.
                </p>
              </div>

              {/* Card 3: Credibility Readiness */}
              <div
                className={`analysis-metric-card ${
                  report.credibilityScore < 40
                    ? "card-danger"
                    : report.credibilityScore < 70
                    ? "card-warning"
                    : "card-success"
                }`}
              >
                <div className="metric-header">
                  <span>VERIFICATION READINESS</span>
                  <ShieldAlert size={16} />
                </div>
                <div className="metric-primary-value">
                  <strong>{report.credibilityScore}</strong>
                  <small>/ 100</small>
                </div>
                <div className="metric-badge">{report.credibilityRisk}</div>
                <div className="metric-meter-bar">
                  <div
                    className="meter-fill"
                    style={{ width: `${report.credibilityScore}%` }}
                  />
                </div>
                <p className="metric-footnote">
                  Attribution: <strong>{report.attribution.status}</strong>
                </p>
              </div>
            </div>

            {/* Interactive Headline Highlighter */}
            <div className="annotated-headline-box">
              <span className="annotation-label">HEADLINE ANATOMY INSPECTION</span>
              <p className="annotated-text">
                {renderAnnotatedHeadline(report.rawHeadline, report.flags, selectedFlag, setSelectedFlag)}
              </p>
              <div className="annotation-helper">
                <Info size={13} />
                <span>
                  {report.flags.length > 0
                    ? `Click any highlighted word above to inspect its manipulation mechanism (${report.flags.length} linguistic flags detected).`
                    : "No high-risk emotional or clickbait words detected in the headline phrasing."}
                </span>
              </div>
            </div>

            {/* Selected Flag Details Inspector */}
            {selectedFlag && (
              <div className="flag-inspector-card">
                <div className="flag-inspector-head">
                  <span className="flag-word">“{selectedFlag.term}”</span>
                  <span className={`flag-category-badge severity-${selectedFlag.severity}`}>
                    {selectedFlag.category}
                  </span>
                </div>
                <p className="flag-explanation">{selectedFlag.explanation}</p>
              </div>
            )}

            {/* Interactive Analysis Tabs */}
            <div className="analysis-tabs-nav" role="tablist">
              <button
                className={`tab-btn ${activeTab === "manipulation" ? "is-active" : ""}`}
                onClick={() => setActiveTab("manipulation")}
                type="button"
                role="tab"
              >
                <Zap size={14} /> 1. Manipulation Vectors
              </button>
              <button
                className={`tab-btn ${activeTab === "anatomy" ? "is-active" : ""}`}
                onClick={() => setActiveTab("anatomy")}
                type="button"
                role="tab"
              >
                <Layers size={14} /> 2. Linguistic Flags ({report.flags.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "psychology" ? "is-active" : ""}`}
                onClick={() => setActiveTab("psychology")}
                type="button"
                role="tab"
              >
                <Flame size={14} /> 3. Psychological Triggers
              </button>
              <button
                className={`tab-btn ${activeTab === "reframe" ? "is-active" : ""}`}
                onClick={() => setActiveTab("reframe")}
                type="button"
                role="tab"
              >
                <CheckCircle2 size={14} /> 4. Neutral Reframe
              </button>
              <button
                className={`tab-btn ${activeTab === "verify" ? "is-active" : ""}`}
                onClick={() => setActiveTab("verify")}
                type="button"
                role="tab"
              >
                <Search size={14} /> 5. Fact-Check Action Plan
              </button>
            </div>

            <div className="tab-content-area">
              {/* TAB 1: MANIPULATION VECTORS (NEW) */}
              {activeTab === "manipulation" && (
                <div className="tab-pane">
                  <div className="tab-pane-intro">
                    <h4>Multi-Vector Manipulation Diagnosis</h4>
                    <p>
                      Disinformation does not rely on random exaggeration. It systematically targets 5 psychological
                      vulnerability channels to hijack attention and bypass critical skepticism.
                    </p>
                  </div>

                  {/* Primary Manipulation Strategy Card */}
                  <div className="manipulation-strategy-card">
                    <div className="strategy-header">
                      <Target size={18} className="text-coral" />
                      <div>
                        <span className="strategy-label">PRIMARY MANIPULATION STRATEGY</span>
                        <h5>{report.manipulationRisk.primaryTactic}</h5>
                      </div>
                    </div>
                    <div className="strategy-vulnerability">
                      <strong>Targeted Audience Vulnerability:</strong>
                      <p>{report.manipulationRisk.targetVulnerability}</p>
                    </div>
                  </div>

                  {/* 5 Vectors Grid */}
                  <div className="manipulation-vectors-grid">
                    {Object.values(report.manipulationRisk.vectors).map((vec) => (
                      <div key={vec.name} className="vector-card">
                        <div className="vector-head">
                          <strong>{vec.name}</strong>
                          <span className={`vector-level level-${vec.level.toLowerCase()}`}>
                            {vec.level}
                          </span>
                        </div>
                        <div className="vector-meter">
                          <div className="vector-fill" style={{ width: `${vec.score}%` }} />
                        </div>
                        <p>{vec.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Detected Tactics & Countermoves */}
                  {report.manipulationRisk.detectedTactics.length > 0 && (
                    <div className="tactics-audit-box">
                      <h5>Tactics Identified in Headline:</h5>
                      <div className="tactics-audit-list">
                        {report.manipulationRisk.detectedTactics.map((t) => (
                          <div key={t.name} className="tactic-audit-item">
                            <div className="tactic-audit-name">
                              <AlertTriangle size={14} className="text-coral" />
                              <strong>{t.name}</strong>
                            </div>
                            <p className="tactic-audit-desc">{t.description}</p>
                            <div className="tactic-audit-counter">
                              <Shield size={13} className="text-teal" />
                              <span><strong>Forensic Countermove:</strong> {t.countermove}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: LINGUISTIC FLAGS */}
              {activeTab === "anatomy" && (
                <div className="tab-pane">
                  <div className="tab-pane-intro">
                    <h4>Identified Language Patterns</h4>
                    <p>
                      Words chosen to maximize virality, convey false certainty, or obscure
                      the true source of evidence.
                    </p>
                  </div>
                  {report.flags.length === 0 ? (
                    <div className="no-flags-notice">
                      <CheckCircle2 size={24} className="text-teal" />
                      <div>
                        <strong>Clean linguistic profile</strong>
                        <p>
                          No obvious clickbait modifiers, manufactured urgency, or loaded
                          verbs detected. Note: A clean tone does not guarantee the underlying claim is true; always verify facts laterally.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flags-list">
                      {report.flags.map((flag, idx) => (
                        <div
                          key={`${flag.start}-${idx}`}
                          className={`flag-item severity-${flag.severity} ${
                            selectedFlag?.start === flag.start ? "is-selected-flag" : ""
                          }`}
                          onClick={() => setSelectedFlag(flag)}
                        >
                          <div className="flag-item-header">
                            <span className="flag-token">“{flag.term}”</span>
                            <span className="flag-type">{flag.category}</span>
                          </div>
                          <p>{flag.explanation}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {report.punctuationFlags.length > 0 && (
                    <div className="punctuation-warnings">
                      <h5>Punctuation &amp; Typography Alerts:</h5>
                      <ul>
                        {report.punctuationFlags.map((p, i) => (
                          <li key={i}>
                            <AlertTriangle size={13} className="text-coral" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PSYCHOLOGY & EMOTIONAL TRIGGERS */}
              {activeTab === "psychology" && (
                <div className="tab-pane">
                  <div className="tab-pane-intro">
                    <h4>Cognitive Bias &amp; Emotional Triggers</h4>
                    <p>
                      Misinformation exploits evolutionary psychology. The radar below reveals
                      which brain reflex this headline attempts to hijack.
                    </p>
                  </div>

                  <div className="triggers-grid">
                    {report.emotionalTriggers.map((trigger) => (
                      <div key={trigger.name} className="trigger-card">
                        <div className="trigger-card-header">
                          <strong>{trigger.name}</strong>
                          <span className={`trigger-intensity intensity-${trigger.intensity}`}>
                            {trigger.intensity.toUpperCase()}
                          </span>
                        </div>
                        <div className="trigger-bar">
                          <div
                            className="trigger-bar-fill"
                            style={{ width: `${trigger.score}%` }}
                          />
                        </div>
                        <p>{trigger.description}</p>
                        {trigger.matchedWords.length > 0 && (
                          <div className="trigger-matched-tokens">
                            <span>Trigger words:</span>
                            {trigger.matchedWords.map((w) => (
                              <code key={w}>{w}</code>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: NEUTRAL REFRAME */}
              {activeTab === "reframe" && (
                <div className="tab-pane">
                  <div className="tab-pane-intro">
                    <h4>How an Objective Newsroom Would Frame This</h4>
                    <p>
                      Responsible wire services (like Reuters or The Associated Press) strip
                      emotional adjectives and present only attributed, verifiable assertions.
                    </p>
                  </div>

                  <div className="reframe-comparison">
                    <div className="reframe-card original">
                      <span className="reframe-tag">ORIGINAL SENSATIONAL HEADLINE</span>
                      <blockquote>“{report.rawHeadline}”</blockquote>
                      <div className="reframe-issues">
                        <span>Linguistic Issues:</span>
                        <ul>
                          {report.flags.map((f, i) => (
                            <li key={i}>
                              Uses {f.category.toLowerCase()} (<em>{f.term}</em>)
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="reframe-arrow" aria-hidden="true">
                      →
                    </div>

                    <div className="reframe-card objective">
                      <span className="reframe-tag tag-success">OBJECTIVE JOURNALISTIC REFRAME</span>
                      <blockquote>“{report.neutralReframe}”</blockquote>
                      <p className="reframe-explainer">
                        Neutralized emotional intensifiers, replaced loaded conflict verbs with
                        standard reporting terminology, and eliminated artificial urgency.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: FACT-CHECK ACTION PLAN */}
              {activeTab === "verify" && (
                <div className="tab-pane">
                  <div className="tab-pane-intro">
                    <h4>SIFT Lateral Reading Action Plan</h4>
                    <p>
                      Don&apos;t just read the headline—verify it laterally across trusted investigative
                      fact-check databases with one click.
                    </p>
                  </div>

                  {/* SIFT Moves Checklist */}
                  <div className="sift-action-steps">
                    {report.verificationSteps.map((step) => (
                      <div key={step.move} className="sift-action-row">
                        <div className="sift-letter-box">{step.move}</div>
                        <div className="sift-action-content">
                          <strong>{step.label}</strong>
                          <p>{step.instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct One-Click Fact-Checking Search Links */}
                  <div className="fact-check-links-section">
                    <h5>Search Pre-Configured Queries in Verified Fact-Checking Archives:</h5>
                    <div className="fact-check-links-grid">
                      {report.factCheckLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fact-check-card-link"
                        >
                          <div className="link-title-row">
                            <strong>{link.name}</strong>
                            <ExternalLink size={13} className="text-coral" />
                          </div>
                          <p>{link.purpose}</p>
                          <span className="link-action-hint">Launch Query ↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="checker-footer-notice">
          <Info size={14} />
          <span>
            <strong>Educational Methodology Note:</strong> This analyzer evaluates heuristic manipulation
            vectors in your browser. It reveals how language is constructed to influence human behavior.
            Always cross-check primary documents before reaching a final conclusion.
          </span>
        </div>
      </div>
    </div>
  );
}

// Helper to highlight flagged terms in headline
function renderAnnotatedHeadline(
  headline: string,
  flags: LinguisticFlag[],
  selectedFlag: LinguisticFlag | null,
  onSelect: (flag: LinguisticFlag) => void
) {
  if (flags.length === 0) return <span>{headline}</span>;

  const parts = [];
  let cursor = 0;

  for (const flag of flags) {
    if (flag.start > cursor) {
      parts.push(
        <span key={`text-${cursor}`}>{headline.slice(cursor, flag.start)}</span>
      );
    }

    const isSelected = selectedFlag?.start === flag.start;
    parts.push(
      <mark
        key={`flag-${flag.start}-${flag.end}`}
        className={`interactive-flag severity-${flag.severity} ${
          isSelected ? "is-selected" : ""
        }`}
        onClick={() => onSelect(flag)}
        title={`${flag.category}: ${flag.explanation}`}
      >
        {headline.slice(flag.start, flag.end)}
        <span className="flag-cat-pill">{flag.category.split(" ")[0]}</span>
      </mark>
    );

    cursor = flag.end;
  }

  if (cursor < headline.length) {
    parts.push(<span key={`text-end`}>{headline.slice(cursor)}</span>);
  }

  return <>{parts}</>;
}
