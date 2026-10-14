"use client";

import { useState } from "react";
import { DISINFORMATION_TACTICS } from "../lib/learn-data";
import {
  AlertTriangle,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Flame,
  Globe,
  History,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";

export default function TacticsDecoder() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("rage-farming");

  const categories = [
    "All",
    "Psychological Hooks",
    "Media & AI Manipulation",
    "Context & Data Distortion",
  ];

  const filteredTactics =
    selectedCategory === "All"
      ? DISINFORMATION_TACTICS
      : DISINFORMATION_TACTICS.filter((t) => t.category === selectedCategory);

  function toggleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function getIcon(name: string) {
    switch (name) {
      case "Flame":
        return <Flame size={18} className="text-coral" />;
      case "History":
        return <History size={18} className="text-teal" />;
      case "Sparkles":
        return <Sparkles size={18} className="text-acid" />;
      case "Globe":
        return <Globe size={18} className="text-coral" />;
      case "BarChart3":
        return <BarChart3 size={18} className="text-teal" />;
      case "Scale":
        return <Scale size={18} className="text-acid" />;
      default:
        return <AlertTriangle size={18} />;
    }
  }

  return (
    <div className="tactics-decoder-section">
      {/* Category Filter Pills */}
      <div className="tactics-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tactics-filter-chip ${selectedCategory === cat ? "is-active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            type="button"
          >
            {cat} {cat === "All" ? `(${DISINFORMATION_TACTICS.length})` : ""}
          </button>
        ))}
      </div>

      {/* Grid of Tactics Cards */}
      <div className="tactics-cards-grid">
        {filteredTactics.map((tactic) => {
          const isExpanded = expandedId === tactic.id;
          return (
            <article
              key={tactic.id}
              className={`tactic-card ${isExpanded ? "is-expanded" : ""}`}
            >
              <div
                className="tactic-card-header"
                onClick={() => toggleExpand(tactic.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(tactic.id);
                  }
                }}
              >
                <div className="tactic-icon-box">{getIcon(tactic.iconName)}</div>
                <div className="tactic-title-group">
                  <div className="tactic-meta-row">
                    <span className="tactic-category">{tactic.category}</span>
                    <span className={`severity-tag sev-${tactic.severity.toLowerCase()}`}>
                      {tactic.severity} Risk
                    </span>
                  </div>
                  <h3>{tactic.name}</h3>
                </div>
                <button
                  className="tactic-toggle-btn"
                  aria-label={isExpanded ? "Collapse details" : "Expand details"}
                  type="button"
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              <p className="tactic-summary">{tactic.summary}</p>

              {/* Expanded Forensic Dossier */}
              {isExpanded && (
                <div className="tactic-expanded-body fade-up">
                  <div className="tactic-detail-block">
                    <strong>The Psychological Mechanism:</strong>
                    <p>{tactic.howItWorks}</p>
                  </div>

                  <div className="tactic-detail-block block-example">
                    <strong>Real-World Example in the Wild:</strong>
                    <p>“{tactic.realWorldExample}”</p>
                  </div>

                  <div className="tactic-countermeasure-box">
                    <div className="cm-header">
                      <Shield size={14} className="text-teal" />
                      <strong>SIFT Forensic Countermeasure:</strong>
                    </div>
                    <p>{tactic.countermeasure}</p>
                    <div className="cm-sift-callout">{tactic.siftTip}</div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
