"use client";

import { useState } from "react";
import { Sparkles, ShieldAlert, CheckCircle2 } from "lucide-react";

interface InspectionPoint {
  id: string;
  feature: string;
  realSignal: string;
  aiArtifactSignal: string;
  forensicClue: string;
}

const INSPECTION_POINTS: InspectionPoint[] = [
  {
    id: "hands",
    feature: "Hand Anatomy & Fingers",
    realSignal: "Natural finger articulation with clear joints, distinct nailbeds, and realistic skin folds.",
    aiArtifactSignal: "Fingers often merge, multiply (6 fingers), or lack knuckles; jewelry melts into the skin.",
    forensicClue: "Diffusion models struggle with complex 3D skeletal geometry under perspective foreshortening."
  },
  {
    id: "eyes",
    feature: "Pupils & Light Reflections (Catchlights)",
    realSignal: "Matching specular reflections in both eyes corresponding to the actual light sources in the scene.",
    aiArtifactSignal: "Mismatched catchlights (e.g., circular glare in left eye, rectangular glare in right eye); non-circular pupils.",
    forensicClue: "Generative AI creates each eye independently, failing physics-based ray-tracing consistency."
  },
  {
    id: "text",
    feature: "Background Typography & Signage",
    realSignal: "Legible, coherent words on road signs, storefronts, and badges with standard typography.",
    aiArtifactSignal: "Garbled pseudo-letters, gibberish script, and warped letterforms that look like alien language.",
    forensicClue: "Image synthesis models predict visual pixel patches, not actual language semantics."
  },
  {
    id: "ears",
    feature: "Ear Cartilage & Symmetry",
    realSignal: "Distinct helix, tragus, and earlobe structure with consistent earrings and hair separation.",
    aiArtifactSignal: "Asymmetrical or melted ears; earrings on one side that disappear or fuse into the jawline.",
    forensicClue: "Ears have high anatomical variation in training sets, leading to blurry, unresolved renders."
  },
  {
    id: "texture",
    feature: "Skin Porosity vs Plastic Gloss",
    realSignal: "Organic micro-textures: pores, fine wrinkles, blemishes, and natural subsurface scattering.",
    aiArtifactSignal: "Hyper-smooth, airbrushed, plastic-like sheen resembling ceramic figurines or video-game CGI.",
    forensicClue: "Denoising algorithms average out high-frequency texture details, creating artificial smoothness."
  }
];

export default function DeepfakeInspector() {
  const [selectedPointId, setSelectedPointId] = useState<string>("hands");
  const [activeView, setActiveView] = useState<"ai" | "real">("ai");

  const currentPoint = INSPECTION_POINTS.find((p) => p.id === selectedPointId) || INSPECTION_POINTS[0];

  return (
    <div className="deepfake-inspector-box">
      <div className="inspector-head-row">
        <div>
          <span className="eyebrow">Forensic Visual Inspection Lab</span>
          <h3>Spotting Synthetic &amp; AI-Generated Media</h3>
        </div>
        <div className="view-mode-toggle">
          <button
            className={`mode-btn ${activeView === "ai" ? "is-active mode-ai" : ""}`}
            onClick={() => setActiveView("ai")}
            type="button"
          >
            <Sparkles size={13} /> Inspect AI Artifacts
          </button>
          <button
            className={`mode-btn ${activeView === "real" ? "is-active mode-real" : ""}`}
            onClick={() => setActiveView("real")}
            type="button"
          >
            <CheckCircle2 size={13} /> Genuine Photojournalism
          </button>
        </div>
      </div>

      <p className="inspector-intro-p">
        While AI image generators (Midjourney, DALL-E, Flux) produce stunning compositions,
        they routinely fail microscopic physical and anatomical tests. Select a forensic check below:
      </p>

      {/* Point Selector Chips */}
      <div className="inspection-chips-bar">
        {INSPECTION_POINTS.map((pt) => (
          <button
            key={pt.id}
            className={`point-chip ${selectedPointId === pt.id ? "is-selected-point" : ""}`}
            onClick={() => setSelectedPointId(pt.id)}
            type="button"
          >
            {pt.feature}
          </button>
        ))}
      </div>

      {/* Visual Diagnostic Display */}
      <div className="inspector-display-stage fade-up">
        <div className="stage-side visual-preview-pane">
          <div className={`simulated-lens-frame ${activeView === "ai" ? "frame-ai" : "frame-real"}`}>
            <div className="lens-overlay-badge">
              {activeView === "ai" ? (
                <>
                  <ShieldAlert size={14} className="text-coral" />
                  <span>SYNTHETIC MEDIA ANOMALY</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} className="text-teal" />
                  <span>AUTHENTIC PHOTOJOURNALISM</span>
                </>
              )}
            </div>

            <div className="lens-focus-circle">
              <span className="focus-crosshair" />
              <div className="focus-text-callout">
                {activeView === "ai" ? currentPoint.aiArtifactSignal : currentPoint.realSignal}
              </div>
            </div>

            <div className="lens-footer-meta">
              <span>FORENSIC TEST: {currentPoint.feature.toUpperCase()}</span>
              <span>MAGNIFICATION: 400%</span>
            </div>
          </div>
        </div>

        <div className="stage-side audit-notes-pane">
          <div className="audit-note-card">
            <span className="note-label">THE FORENSIC PRINCIPLE</span>
            <h4>{currentPoint.feature}</h4>
            <p className="note-text">{currentPoint.forensicClue}</p>

            <div className="comparison-detail-block">
              <div className="detail-item item-ai">
                <strong>🚨 AI Generative Weakness:</strong>
                <p>{currentPoint.aiArtifactSignal}</p>
              </div>
              <div className="detail-item item-real">
                <strong>✓ Real Camera Physics:</strong>
                <p>{currentPoint.realSignal}</p>
              </div>
            </div>

            <div className="lateral-verification-tip">
              <strong>💡 SIFT Lateral Move:</strong>
              <p>
                Never rely solely on visual inspection! Reverse-search the image using Google Lens or TinEye.
                If world leaders were truly captured in a crisis, established wire photographers (AP, Reuters, AFP)
                would have published hundreds of verified frames.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
