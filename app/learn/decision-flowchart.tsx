"use client";

import { useState } from "react";
import { CheckCircle2, AlertOctagon, HelpCircle, RotateCcw, ShieldCheck } from "lucide-react";

interface FlowNode {
  id: string;
  question: string;
  context: string;
  yesNext: string | "SAFE" | "UNVERIFIED" | "STOP_DONT_SHARE";
  noNext: string | "SAFE" | "UNVERIFIED" | "STOP_DONT_SHARE";
  yesLabel: string;
  noLabel: string;
}

const FLOW_NODES: Record<string, FlowNode> = {
  root: {
    id: "root",
    question: "1. Did the post trigger sudden intense emotion (anger, fear, or excitement)?",
    context: "Emotional triggers are intentional cues. High adrenaline suppresses rational scrutiny.",
    yesNext: "node-source",
    noNext: "node-source",
    yesLabel: "Yes, felt an immediate urge to share/react",
    noLabel: "No, read it calmly"
  },
  "node-source": {
    id: "node-source",
    question: "2. Can you identify who originated this story (specific named author or institution)?",
    context: "Look beyond the account handle: who actually conducted the research or spoke the quote?",
    yesNext: "node-domain",
    noNext: "STOP_DONT_SHARE",
    yesLabel: "Yes, names accredited agency or author",
    noLabel: "No, anonymous or 'insiders say'"
  },
  "node-domain": {
    id: "node-domain",
    question: "3. Did you verify the domain address outside the page (e.g. checked Wikipedia)?",
    context: "Impostor domains use `.co.in` or slight spelling variations to disguise fake publications.",
    yesNext: "node-wires",
    noNext: "UNVERIFIED",
    yesLabel: "Yes, confirmed legitimate official registry",
    noLabel: "No, only saw the website logo"
  },
  "node-wires": {
    id: "node-wires",
    question: "4. Do at least 2 independent news wires (Reuters, AP, PIB, BBC) report this?",
    context: "Major events or government policies are never exclusive to an anonymous viral account.",
    yesNext: "SAFE",
    noNext: "UNVERIFIED",
    yesLabel: "Yes, corroborated across independent wires",
    noLabel: "No, exclusive to viral social feeds"
  }
};

export default function DecisionFlowchart() {
  const [currentNodeId, setCurrentNodeId] = useState<string>("root");
  const [path, setPath] = useState<{ question: string; answer: string }[]>([]);

  const currentNode = FLOW_NODES[currentNodeId];
  const isTerminal = ["SAFE", "UNVERIFIED", "STOP_DONT_SHARE"].includes(currentNodeId);

  function handleAnswer(choice: "yes" | "no") {
    if (!currentNode) return;
    const nextId = choice === "yes" ? currentNode.yesNext : currentNode.noNext;
    const answerLabel = choice === "yes" ? currentNode.yesLabel : currentNode.noLabel;
    
    setPath((prev) => [...prev, { question: currentNode.question, answer: answerLabel }]);
    setCurrentNodeId(nextId);
  }

  function handleReset() {
    setCurrentNodeId("root");
    setPath([]);
  }

  return (
    <div className="decision-flowchart-card">
      <div className="flowchart-header">
        <span className="eyebrow">Interactive Decision Engine</span>
        <h3>Should I Share This Story?</h3>
        <p>
          Walk through the interactive verification matrix before hitting &ldquo;repost&rdquo; or forwarding to a group.
        </p>
      </div>

      {!isTerminal && currentNode ? (
        <div className="flow-step-box fade-up">
          <div className="flow-question-banner">
            <h4>{currentNode.question}</h4>
            <p className="flow-context">{currentNode.context}</p>
          </div>

          <div className="flow-button-choices">
            <button
              className="flow-choice-btn choice-yes"
              onClick={() => handleAnswer("yes")}
              type="button"
            >
              <CheckCircle2 size={16} />
              <span>{currentNode.yesLabel}</span>
            </button>
            <button
              className="flow-choice-btn choice-no"
              onClick={() => handleAnswer("no")}
              type="button"
            >
              <AlertOctagon size={16} />
              <span>{currentNode.noLabel}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flow-terminal-card fade-up">
          {currentNodeId === "SAFE" && (
            <div className="terminal-result result-safe">
              <ShieldCheck size={36} className="text-teal" />
              <h4>Verification Cleared: Safe to Share with Context</h4>
              <p>
                The story has named primary attribution, a verified institutional domain, and independent corroboration.
                When sharing, link to the primary reporting wire rather than an editorialized social caption.
              </p>
            </div>
          )}

          {currentNodeId === "UNVERIFIED" && (
            <div className="terminal-result result-unverified">
              <HelpCircle size={36} className="text-warning" />
              <h4>Hold On: Claim is Currently Unverified</h4>
              <p>
                Lack of independent confirmation or unknown domain credentials means this claim could be a rumor,
                outdated recycled media, or deliberate spin. Pause until established fact-checkers verify it.
              </p>
            </div>
          )}

          {currentNodeId === "STOP_DONT_SHARE" && (
            <div className="terminal-result result-stop">
              <AlertOctagon size={36} className="text-coral" />
              <h4>Red Flag Triggered: Do Not Share!</h4>
              <p>
                Anonymous attribution and unverified sourcing are the hallmarks of viral disinformation.
                Forwarding this accelerates the spread of unverified claims and harms public trust.
              </p>
            </div>
          )}

          <div className="flow-path-recap">
            <h5>Your Decision Trail:</h5>
            <ul>
              {path.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.question}</strong>
                  <span>➔ {item.answer}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="button-primary" onClick={handleReset} type="button">
            <RotateCcw size={14} /> Test Another Post in Decision Engine
          </button>
        </div>
      )}
    </div>
  );
}
