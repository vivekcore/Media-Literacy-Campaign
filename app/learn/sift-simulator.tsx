"use client";

import { useState } from "react";
import { SIFT_SIMULATION } from "../lib/learn-data";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

export default function SiftSimulator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [history, setHistory] = useState<
    { step: string; optionId: string; isOptimal: boolean }[]
  >([]);

  const step = SIFT_SIMULATION[currentStepIndex];
  const isFinished = currentStepIndex >= SIFT_SIMULATION.length;

  const optimalCount = history.filter((h) => h.isOptimal).length;

  function handleSelect(optionId: string) {
    if (selectedOptionId !== null) return;
    setSelectedOptionId(optionId);
    const chosen = step.userOptions.find((o) => o.id === optionId);
    setHistory((prev) => [
      ...prev,
      { step: step.step, optionId, isOptimal: chosen?.isOptimal ?? false },
    ]);
  }

  function handleNext() {
    setSelectedOptionId(null);
    setCurrentStepIndex((prev) => prev + 1);
  }

  function handleReset() {
    setCurrentStepIndex(0);
    setSelectedOptionId(null);
    setHistory([]);
  }

  if (isFinished) {
    return (
      <div className="sift-simulator-card simulator-finished fade-up">
        <Award size={48} className="text-acid" />
        <span className="eyebrow">Interactive Simulation Completed</span>
        <h3>You Mastered the 4 SIFT Moves!</h3>
        <p className="finished-desc">
          You made the optimal investigative move in <strong>{optimalCount} of 4</strong> scenario stages.
          By stopping emotional impulses, reading laterally, checking official domains, and tracing primary circulars,
          you successfully prevented a viral misinformation outbreak.
        </p>

        <div className="simulation-recap-grid">
          {SIFT_SIMULATION.map((s) => {
            const h = history.find((x) => x.step === s.step);
            return (
              <div key={s.step} className="recap-pill">
                <span className="pill-letter">{s.letter}</span>
                <span className="pill-name">{s.name}</span>
                {h?.isOptimal ? (
                  <CheckCircle2 size={14} className="text-teal" />
                ) : (
                  <XCircle size={14} className="text-coral" />
                )}
              </div>
            );
          })}
        </div>

        <button className="button-primary" onClick={handleReset} type="button">
          <RotateCcw size={14} /> Replay SIFT Simulation
        </button>
      </div>
    );
  }

  const selectedOption = step.userOptions.find((o) => o.id === selectedOptionId);

  return (
    <div className="sift-simulator-card" aria-live="polite">
      {/* Step Tracker Header */}
      <div className="simulator-header">
        <div className="step-tracker-pills">
          {SIFT_SIMULATION.map((s, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isDone = idx < currentStepIndex;
            return (
              <div
                key={s.step}
                className={`tracker-pill ${isCurrent ? "is-current" : isDone ? "is-done" : ""}`}
              >
                <span className="tracker-letter">{s.letter}</span>
                <span className="tracker-name">{s.name}</span>
              </div>
            );
          })}
        </div>
        <span className="simulator-mode-badge">
          <Sparkles size={12} /> Interactive Lab
        </span>
      </div>

      {/* Scenario Stage */}
      <div className="simulator-stage-content">
        <div className="stage-title-row">
          <span className="stage-tag">MOVE {step.letter} / OBJECTIVE</span>
          <h4>{step.objective}</h4>
        </div>

        <div className="stage-prompt-box">
          <p>{step.scenarioPrompt}</p>
        </div>

        <div className="simulator-options-list">
          <span className="options-instruction">Choose your move:</span>
          {step.userOptions.map((opt) => {
            const isChosen = selectedOptionId === opt.id;
            const isAnswered = selectedOptionId !== null;

            let optClass = "simulator-opt-btn";
            if (isAnswered) {
              if (opt.isOptimal) optClass += " is-optimal";
              else if (isChosen) optClass += " is-suboptimal";
              else optClass += " is-dimmed";
            }

            return (
              <button
                key={opt.id}
                className={optClass}
                disabled={isAnswered}
                onClick={() => handleSelect(opt.id)}
                type="button"
              >
                <span className="opt-indicator" />
                <span>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback Card */}
        {selectedOption && (
          <div
            className={`simulator-feedback-card fade-up ${
              selectedOption.isOptimal ? "feedback-optimal" : "feedback-suboptimal"
            }`}
          >
            <div className="feedback-head">
              {selectedOption.isOptimal ? (
                <>
                  <ShieldCheck size={20} className="text-teal" />
                  <strong>Optimal Move!</strong>
                </>
              ) : (
                <>
                  <HelpCircle size={20} className="text-coral" />
                  <strong>Common Cognitive Trap:</strong>
                </>
              )}
            </div>
            <p className="feedback-text">{selectedOption.feedback}</p>
            <div className="feedback-insight">
              <strong>💡 Forensic Insight:</strong> {selectedOption.insight}
            </div>

            <div className="feedback-action-row">
              <button className="button-primary" onClick={handleNext} type="button">
                Continue to Move {currentStepIndex < 3 ? SIFT_SIMULATION[currentStepIndex + 1].letter : "Summary"}{" "}
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
