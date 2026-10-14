"use client";

import { useState } from "react";
import { DETECTIVE_CASES } from "../lib/detective-cases";
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  ChevronRight,
  Eye,
  Globe,
  Layers,
  MessageSquare,
  Newspaper,
  Repeat2,
  RotateCcw,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  XCircle,
  Zap,
} from "lucide-react";

export default function QuizPractice() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [selectedVerdict, setSelectedVerdict] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<
    { caseId: string; selected: string; isCorrect: boolean }[]
  >([]);
  const [activeTool, setActiveTool] = useState<"clues" | "domain" | "image" | "wire">("clues");
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);

  const currentCase = DETECTIVE_CASES[caseIndex];
  const isComplete = caseIndex >= DETECTIVE_CASES.length;

  const score = userAnswers.filter((a) => a.isCorrect).length;

  function handleSelectVerdict(verdict: string) {
    if (selectedVerdict !== null) return;
    setSelectedVerdict(verdict);
    const isCorrect = verdict === currentCase.correctVerdict;
    if (isCorrect) {
      setStreak((prev) => prev + 1);
      setXp((prev) => prev + 150);
    } else {
      setStreak(0);
    }
    setUserAnswers((prev) => [
      ...prev,
      { caseId: currentCase.id, selected: verdict, isCorrect },
    ]);
  }

  function handleNextCase() {
    setSelectedVerdict(null);
    setSelectedClueId(null);
    setActiveTool("clues");
    setCaseIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setCaseIndex(0);
    setSelectedVerdict(null);
    setUserAnswers([]);
    setSelectedClueId(null);
    setActiveTool("clues");
    setStreak(0);
    setXp(0);
  }

  if (isComplete) {
    let rank = "Senior Verification Specialist";
    let rankClass = "rank-gold";
    let rankDesc = "You possess sharp lateral reading instincts and rarely fall for emotional baits or cheapfakes.";

    if (score === DETECTIVE_CASES.length) {
      rank = "Chief Fact-Checking Investigator";
      rankClass = "rank-diamond";
      rankDesc = "Flawless forensic eye! You spotted every fake account handle, truncated chart axis, out-of-context video, and AI artifact.";
    } else if (score < 5) {
      rank = "Vulnerable to Viral Hoaxes";
      rankClass = "rank-bronze";
      rankDesc = "You occasionally fall for urgent phrasing, professional-looking impostor styling, and deceptive graph axes. Review the SIFT field guide to level up.";
    }

    return (
      <div className="awareness-panel detective-dossier-result fade-up">
        <div className="dossier-header">
          <Award size={48} className="dossier-icon text-teal" />
          <span className="eyebrow">Forensic Audit Closed</span>
          <h2>Field Detective Dossier</h2>
          <div className="dossier-score-badge">
            <strong>{score}</strong>
            <span>/ {DETECTIVE_CASES.length} cases verified correctly • {xp} XP Earned</span>
          </div>
        </div>

        <div className={`dossier-rank-card ${rankClass}`}>
          <span className="rank-tag">ASSIGNED INVESTIGATOR RANK</span>
          <h3>{rank}</h3>
          <p>{rankDesc}</p>
        </div>

        {/* Detailed Breakdown Table */}
        <div className="dossier-case-breakdown">
          <h4>Case-by-Case Forensic Audit:</h4>
          <div className="dossier-table">
            {DETECTIVE_CASES.map((c) => {
              const ans = userAnswers.find((a) => a.caseId === c.id);
              const isCorrect = ans?.isCorrect ?? false;
              return (
                <div key={c.id} className={`dossier-row ${isCorrect ? "row-correct" : "row-wrong"}`}>
                  <div className="row-num">{c.caseNumber}</div>
                  <div className="row-info">
                    <strong>{c.headline}</strong>
                    <span className="row-cat">{c.category}</span>
                  </div>
                  <div className="row-status">
                    {isCorrect ? (
                      <span className="badge-pass">
                        <CheckCircle2 size={13} /> Verified
                      </span>
                    ) : (
                      <span className="badge-fail">
                        <XCircle size={13} /> Tricked
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="dossier-actions">
          <button className="button-primary" onClick={handleRestart} type="button">
            <RotateCcw size={14} /> Reopen Forensic Simulation
          </button>
          <a className="button-secondary" href="/checker">
            Test Live Headlines in Analyzer ↗
          </a>
        </div>
      </div>
    );
  }

  const selectedClue = currentCase.clues.find((c) => c.id === selectedClueId);

  // Check if a specific target tag is currently selected for visual highlighting
  const isTargetActive = (tag: string) => {
    return selectedClue?.hotspotTag === tag;
  };

  return (
    <div className="awareness-panel detective-game-panel" aria-live="polite">
      {/* Dossier Header Bar */}
      <div className="detective-case-topline">
        <div className="case-id-group">
          <span className="case-file-stamp">{currentCase.caseNumber}</span>
          <span className="case-confidential-tag">FORENSIC SIMULATION</span>
          <span className={`case-difficulty diff-${currentCase.difficulty.toLowerCase()}`}>
            {currentCase.difficulty}
          </span>
        </div>
        <div className="case-stats-pills">
          <span className="xp-pill">
            <Zap size={11} className="text-acid" /> {xp} XP
          </span>
          {streak > 1 && (
            <span className="streak-pill">
              🔥 {streak} Streak!
            </span>
          )}
          <span className="score-pill">
            Score: <strong>{score}</strong> / {caseIndex}
          </span>
        </div>
      </div>

      <div
        className="awareness-progress"
        role="progressbar"
        aria-label="Simulation progress"
        aria-valuemin={0}
        aria-valuemax={DETECTIVE_CASES.length}
        aria-valuenow={caseIndex}
      >
        <span style={{ width: `${(caseIndex / DETECTIVE_CASES.length) * 100}%` }} />
      </div>

      {/* MOCKUP CONTAINER WITH CLEAN EVIDENCE PINS BAR */}
      <div className="detective-post-card-container">
        {/* Interactive Evidence Pins Strip */}
        <div className="mockup-forensic-hotspots-bar">
          <span className="hotspot-bar-title">
            <Sparkles size={12} className="text-teal" /> Forensic Pins:
          </span>
          <div className="hotspot-pins-row">
            {currentCase.clues.map((clue, idx) => (
              <button
                key={clue.id}
                className={`evidence-pin-badge ${selectedClueId === clue.id ? "is-active" : ""}`}
                onClick={() => setSelectedClueId(selectedClueId === clue.id ? null : clue.id)}
                type="button"
              >
                <span className="pin-number">0{idx + 1}</span>
                <span className="pin-target">{clue.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected clue callout box if active */}
        {selectedClue && (
          <div className="active-pin-detail-bar fade-up">
            <AlertTriangle size={15} className="text-coral flex-shrink-0" />
            <div>
              <strong>Pin Observation ({selectedClue.label}):</strong>
              <p>{selectedClue.hint}</p>
            </div>
          </div>
        )}

        <div className="detective-post-card">
          {/* Post Type: Tweet / X Style */}
          {currentCase.postType === "tweet" && (
            <div className="mockup-tweet">
              <div className={`mockup-header ${isTargetActive("USER_HANDLE") ? "is-highlighted-evidence" : ""}`}>
                <div className="mockup-avatar">{currentCase.author.avatarInitials}</div>
                <div className="mockup-user-info">
                  <div className="user-name-line">
                    <strong>{currentCase.author.name}</strong>
                    {currentCase.author.isVerified && (
                      <span className="verified-badge" title="Verified Badge">
                        ✓
                      </span>
                    )}
                  </div>
                  <span className="user-handle">{currentCase.author.handle}</span>
                </div>
              </div>

              <div className={`mockup-body-wrapper ${isTargetActive("HEADLINE_TONE") ? "is-highlighted-evidence" : ""}`}>
                <p className="mockup-body">{currentCase.content}</p>
              </div>

              <div className={`mockup-metrics ${isTargetActive("TIMESTAMP_METRIC") ? "is-highlighted-evidence" : ""}`}>
                <span>
                  <MessageSquare size={13} /> {currentCase.metrics.comments}
                </span>
                <span>
                  <Repeat2 size={13} /> {currentCase.metrics.reposts}
                </span>
                <span>
                  <Share2 size={13} /> {currentCase.metrics.likes}
                </span>
              </div>
            </div>
          )}

          {/* Post Type: WhatsApp Viral Forward */}
          {currentCase.postType === "whatsapp" && (
            <div className="mockup-whatsapp">
              <div className={`wa-top-pill ${isTargetActive("TIMESTAMP_METRIC") ? "is-highlighted-evidence" : ""}`}>
                <span>➔➔ Forwarded many times</span>
              </div>
              <p className={`mockup-body ${isTargetActive("HEADLINE_TONE") ? "is-highlighted-evidence" : ""}`}>
                {currentCase.content}
              </p>
              <div className="wa-footer">
                <span className="wa-time">11:42 PM</span>
                <span className="wa-meta">{currentCase.metrics.reposts}</span>
              </div>
            </div>
          )}

          {/* Post Type: Breaking Banner */}
          {currentCase.postType === "breaking-banner" && (
            <div className="mockup-breaking">
              <div className={`breaking-ticker ${isTargetActive("HEADLINE_TONE") ? "is-highlighted-evidence" : ""}`}>
                <span className="ticker-label">BREAKING BULLETIN</span>
                <span className="ticker-source">{currentCase.author.name}</span>
              </div>
              <p className="mockup-body">{currentCase.content}</p>
              {currentCase.mediaNote && (
                <div className={`mockup-media-card ${isTargetActive("MEDIA_ATTACHMENT") ? "is-highlighted-evidence" : ""}`}>
                  <Eye size={14} />
                  <span>{currentCase.mediaNote}</span>
                </div>
              )}
            </div>
          )}

          {/* Post Type: Chart */}
          {currentCase.postType === "chart" && (
            <div className="mockup-chart">
              <div className={`chart-header ${isTargetActive("HEADLINE_TONE") ? "is-highlighted-evidence" : ""}`}>
                <strong>{currentCase.author.name}</strong>
                <span>Infographic Wire</span>
              </div>
              <p className="mockup-body">{currentCase.content}</p>
              <div className={`simulated-graph-box ${isTargetActive("MEDIA_ATTACHMENT") ? "is-highlighted-evidence" : ""}`}>
                <div className="graph-y-axis">
                  <span>6.2%</span>
                  <span>6.0%</span>
                  <span>5.8% (Truncated!)</span>
                </div>
                <div className="graph-bars">
                  <div className="bar bar-1">
                    <div className="bar-fill" style={{ height: "25%" }} />
                    <span>Q2 (5.9%)</span>
                  </div>
                  <div className="bar bar-2">
                    <div className="bar-fill" style={{ height: "95%" }} />
                    <span>Q3 (6.1%)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post Type: AI Synthetic Media */}
          {currentCase.postType === "ai-image" && (
            <div className="mockup-ai">
              <div className="ai-header">
                <strong>{currentCase.author.name}</strong>
                <span className="ai-tag">Viral Photo Post</span>
              </div>
              <p className="mockup-body">{currentCase.content}</p>
              <div className={`ai-simulated-render ${isTargetActive("MEDIA_ATTACHMENT") ? "is-highlighted-evidence" : ""}`}>
                <Sparkles size={20} className="ai-sparkle-icon" />
                <div className="ai-render-text">
                  <strong>Simulated Visual Artifacts:</strong>
                  <p>{currentCase.mediaNote}</p>
                </div>
              </div>
            </div>
          )}

          {/* Post Type: Quote Card */}
          {currentCase.postType === "quote-card" && (
            <div className="mockup-quote">
              <div className={`quote-header ${isTargetActive("USER_HANDLE") ? "is-highlighted-evidence" : ""}`}>
                <strong>{currentCase.author.name}</strong>
                <span>Quote Card</span>
              </div>
              <blockquote className={`quote-body ${isTargetActive("HEADLINE_TONE") ? "is-highlighted-evidence" : ""}`}>
                {currentCase.content}
              </blockquote>
              {currentCase.mediaNote && (
                <div className={`mockup-media-card ${isTargetActive("MEDIA_ATTACHMENT") ? "is-highlighted-evidence" : ""}`}>
                  <Eye size={14} />
                  <span>{currentCase.mediaNote}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* FORENSIC TOOLS WORKBENCH */}
      <div className="forensic-tools-workbench">
        <div className="tools-tab-bar">
          <button
            className={`tool-tab-btn ${activeTool === "clues" ? "is-active" : ""}`}
            onClick={() => setActiveTool("clues")}
            type="button"
          >
            <Eye size={13} /> Clues &amp; Anomalies ({currentCase.clues.length})
          </button>
          <button
            className={`tool-tab-btn ${activeTool === "domain" ? "is-active" : ""}`}
            onClick={() => setActiveTool("domain")}
            type="button"
          >
            <Globe size={13} /> Domain &amp; Account Audit
          </button>
          <button
            className={`tool-tab-btn ${activeTool === "image" ? "is-active" : ""}`}
            onClick={() => setActiveTool("image")}
            type="button"
          >
            <Layers size={13} /> Visual &amp; Media Inspection
          </button>
          <button
            className={`tool-tab-btn ${activeTool === "wire" ? "is-active" : ""}`}
            onClick={() => setActiveTool("wire")}
            type="button"
          >
            <Newspaper size={13} /> Wire Service Cross-Check
          </button>
        </div>

        <div className="tool-body-pane">
          {activeTool === "clues" && (
            <div className="clues-grid-pane">
              <span className="pane-lead">Select an investigative clue to inspect:</span>
              <div className="clue-chips-row">
                {currentCase.clues.map((clue, idx) => (
                  <button
                    key={clue.id}
                    className={`clue-inspect-chip ${selectedClueId === clue.id ? "is-selected-chip" : ""}`}
                    onClick={() => setSelectedClueId(selectedClueId === clue.id ? null : clue.id)}
                    type="button"
                  >
                    <span className="chip-num">0{idx + 1}</span>
                    <span>{clue.label}</span>
                  </button>
                ))}
              </div>

              {selectedClue ? (
                <div className="active-clue-card fade-up">
                  <AlertTriangle size={16} className="text-coral flex-shrink-0" />
                  <div>
                    <strong>Forensic Observation:</strong>
                    <p>{selectedClue.hint}</p>
                  </div>
                </div>
              ) : (
                <p className="no-clue-picked-hint">
                  Click any clue chip above or a forensic pin to inspect the anomaly.
                </p>
              )}
            </div>
          )}

          {activeTool === "domain" && (
            <div className="forensic-audit-pane fade-up">
              <div className="audit-icon-row">
                <Globe size={18} className="text-teal" />
                <strong>Simulated Source &amp; WHOIS Inspection</strong>
              </div>
              <p>{currentCase.simulatedForensics.domainCheck}</p>
              <small>Source Audit Status: SIFT Move I (Investigate the Source)</small>
            </div>
          )}

          {activeTool === "image" && (
            <div className="forensic-audit-pane fade-up">
              <div className="audit-icon-row">
                <Layers size={18} className="text-coral" />
                <strong>Reverse Search &amp; Image Forensics</strong>
              </div>
              <p>{currentCase.simulatedForensics.imageAudit}</p>
              <small>Visual Forensics: SIFT Move T (Trace to Original Context)</small>
            </div>
          )}

          {activeTool === "wire" && (
            <div className="forensic-audit-pane fade-up">
              <div className="audit-icon-row">
                <Newspaper size={18} className="text-teal" />
                <strong>Lateral Wire &amp; Agency Cross-Check</strong>
              </div>
              <p>{currentCase.simulatedForensics.lateralWireCoverage}</p>
              <small>Consensus Check: SIFT Move F (Find Better Coverage)</small>
            </div>
          )}
        </div>
      </div>

      {/* VERDICT BUTTONS */}
      <div className="detective-verdict-section">
        <span className="verdict-prompt">Render your forensic verdict:</span>
        <div className="verdict-options-grid">
          {currentCase.options.map((opt) => {
            const isChosen = selectedVerdict === opt;
            const isAnswered = selectedVerdict !== null;
            const isThisCorrect = opt === currentCase.correctVerdict;

            let buttonClass = "verdict-btn";
            if (isAnswered) {
              if (isThisCorrect) buttonClass += " is-correct-verdict";
              else if (isChosen) buttonClass += " is-wrong-verdict";
              else buttonClass += " is-dimmed";
            }

            return (
              <button
                key={opt}
                className={buttonClass}
                disabled={isAnswered}
                onClick={() => handleSelectVerdict(opt)}
                type="button"
              >
                <span className="verdict-radio-mark" />
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DEBRIEFING CARD WITH OFFICIAL VERIFICATION STAMP */}
      {selectedVerdict !== null && (
        <div
          className={`detective-debrief-card fade-up ${
            selectedVerdict === currentCase.correctVerdict ? "debrief-pass" : "debrief-fail"
          }`}
        >
          {/* Official Animated Forensic Stamp */}
          <div className="case-verdict-stamp-box">
            <div
              className={`case-stamp ${
                currentCase.correctVerdict === "Legitimate Verified News"
                  ? "stamp-verified"
                  : "stamp-debunked"
              }`}
            >
              {currentCase.correctVerdict === "Legitimate Verified News"
                ? "✓ VERIFIED REPORT"
                : `🚨 ${currentCase.correctVerdict.toUpperCase()}`}
            </div>
          </div>

          <div className="debrief-heading">
            {selectedVerdict === currentCase.correctVerdict ? (
              <>
                <ShieldCheck size={24} className="text-teal flex-shrink-0" />
                <div>
                  <strong>Correct Forensic Assessment! (+150 XP)</strong>
                  <p>You classified this case accurately as: <em>{currentCase.correctVerdict}</em></p>
                </div>
              </>
            ) : (
              <>
                <ShieldAlert size={24} className="text-coral flex-shrink-0" />
                <div>
                  <strong>Hoax Trap Triggered!</strong>
                  <p>
                    You voted <em>{selectedVerdict}</em>, but the correct forensic verdict is:{" "}
                    <strong>{currentCase.correctVerdict}</strong>.
                  </p>
                </div>
              </>
            )}
          </div>

          <p className="debrief-summary">{currentCase.forensicDebrief.summary}</p>

          <div className="debrief-flags-list">
            <strong>Key Investigative Red Flags:</strong>
            <ul>
              {currentCase.forensicDebrief.keyRedFlags.map((flag, idx) => (
                <li key={idx}>
                  <AlertTriangle size={13} className="text-coral flex-shrink-0" /> {flag}
                </li>
              ))}
            </ul>
          </div>

          {/* SIFT Move Callout */}
          <div className="debrief-sift-box">
            <div className="sift-pill-badge">
              SIFT MOVE: {currentCase.forensicDebrief.siftMoveApplied.letter}
            </div>
            <div className="sift-pill-content">
              <strong>{currentCase.forensicDebrief.siftMoveApplied.step}</strong>
              <p>{currentCase.forensicDebrief.siftMoveApplied.actionTaken}</p>
            </div>
          </div>

          <div className="debrief-lesson-takeaway">
            <strong>💡 Media Literacy Takeaway:</strong>
            <p>{currentCase.forensicDebrief.realWorldLesson}</p>
          </div>

          <div className="debrief-next-row">
            <button className="button-primary" onClick={handleNextCase} type="button">
              Next Case File <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
