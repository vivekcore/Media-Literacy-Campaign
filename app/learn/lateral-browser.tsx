"use client";

import { useState } from "react";
import { Globe, Search, BookOpen, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";

export default function LateralBrowser() {
  const [activeTab, setActiveTab] = useState<"site" | "search" | "wiki">("site");

  return (
    <div className="lateral-browser-box">
      <div className="lateral-header">
        <span className="eyebrow">Lateral vs. Vertical Reading Simulator</span>
        <h3>Experience Lateral Reading in Practice</h3>
        <p>
          Untrained readers read <em>vertically</em>: they scroll down a suspect website, inspecting its sleek logo and testimonials.
          Professional fact-checkers read <em>laterally</em>: they immediately open new browser tabs to see what outside sources say.
        </p>
      </div>

      {/* Simulated Browser Chrome */}
      <div className="simulated-browser-window">
        {/* Browser Top Tab Bar */}
        <div className="browser-tab-bar">
          <button
            className={`browser-tab ${activeTab === "site" ? "is-active-tab" : ""}`}
            onClick={() => setActiveTab("site")}
            type="button"
          >
            <Globe size={13} className="tab-icon" />
            <span>Tab 1: Viral Blog (The Claim)</span>
          </button>
          <button
            className={`browser-tab ${activeTab === "search" ? "is-active-tab tab-lateral" : ""}`}
            onClick={() => setActiveTab("search")}
            type="button"
          >
            <Search size={13} className="tab-icon text-coral" />
            <span>Tab 2: Lateral Google Search</span>
          </button>
          <button
            className={`browser-tab ${activeTab === "wiki" ? "is-active-tab tab-lateral" : ""}`}
            onClick={() => setActiveTab("wiki")}
            type="button"
          >
            <BookOpen size={13} className="tab-icon text-teal" />
            <span>Tab 3: Wikipedia Background</span>
          </button>
        </div>

        {/* Address Bar */}
        <div className="browser-address-bar">
          <div className="address-url-box">
            <span className="url-protocol">https://</span>
            <span className="url-domain">
              {activeTab === "site"
                ? "www.miracle-health-remediez.co/cure-all-cancer"
                : activeTab === "search"
                ? "www.google.com/search?q=miracle+health+remediez+fda+warning+scam"
                : "en.wikipedia.org/wiki/Miracle_Health_Remediez_Controversies"}
            </span>
          </div>
          <span className={`browser-status-tag ${activeTab === "site" ? "status-suspect" : "status-verified"}`}>
            {activeTab === "site" ? "⚠ SUSPECT SITE" : "✓ LATERAL FACT CHECK"}
          </span>
        </div>

        {/* Browser Viewport Content */}
        <div className="browser-viewport-content">
          {/* TAB 1: Suspect Blog */}
          {activeTab === "site" && (
            <div className="viewport-page page-suspect fade-up">
              <div className="suspect-hero">
                <span className="suspect-tag">EXCLUSIVE NATURAL MEDICINE DISCOVERY</span>
                <h2>Ancient Himalayan Root Extract Proven to Cure 98% of Illnesses Doctors Won&apos;t Mention!</h2>
                <p className="suspect-sub">
                  Big Pharma has suppressed this natural compound for 40 years. Our certified wellness clinic reveals the truth.
                </p>
                <div className="suspect-trust-badges">
                  <span>★ 100% Guaranteed</span>
                  <span>✓ Clinically Tested</span>
                  <span>🔒 Certified Lab Verified</span>
                </div>
              </div>

              <div className="vertical-trap-warning">
                <AlertTriangle size={18} className="text-coral flex-shrink-0" />
                <div>
                  <strong>The Vertical Reading Trap:</strong>
                  <p>
                    If you only stay on this page, the badges and confident claims look convincing.
                    Now switch to <strong>Tab 2 (Lateral Search)</strong> above to see what independent regulators discovered!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Lateral Google Search */}
          {activeTab === "search" && (
            <div className="viewport-page page-search fade-up">
              <div className="search-results-mock">
                <div className="search-result-item">
                  <span className="result-source">fda.gov / regulatory-actions / warnings</span>
                  <h4>FDA Warning Letter: Miracle Health Remediez LLC</h4>
                  <p>
                    Agency cites company for marketing unapproved new drugs with false curative claims regarding cancer and diabetes. Civil injunction initiated.
                  </p>
                </div>

                <div className="search-result-item">
                  <span className="result-source">ftc.gov / consumer-enforcement</span>
                  <h4>FTC Orders $2.4M Restitution for Deceptive Medical Advertising</h4>
                  <p>
                    Federal Trade Commission penalizes product founder for fabricated clinical trial claims and fake doctor endorsements.
                  </p>
                </div>
              </div>

              <div className="lateral-triumph-card">
                <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                <div>
                  <strong>Lateral Reading Victory:</strong>
                  <p>
                    In 15 seconds, you discovered regulatory injunctions that the original website deliberately hid.
                    Now check <strong>Tab 3 (Wikipedia)</strong> for who owns the company.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Wikipedia Background (No Floats) */}
          {activeTab === "wiki" && (
            <div className="viewport-page page-wiki fade-up">
              <div className="wiki-mock-article">
                <div className="wiki-article-header">
                  <h2>Miracle Health Remediez (Commercial Enterprise)</h2>
                  <span className="wiki-subtitle">From Wikipedia, the free encyclopedia</span>
                </div>

                <div className="wiki-content-grid">
                  <div className="wiki-infobox">
                    <div className="infobox-title">Miracle Health Remediez LLC</div>
                    <div className="infobox-row">
                      <span>Type:</span>
                      <strong>Private LLC</strong>
                    </div>
                    <div className="infobox-row">
                      <span>Founded:</span>
                      <strong>2021</strong>
                    </div>
                    <div className="infobox-row">
                      <span>Medical Consensus:</span>
                      <strong className="text-coral">Debunked / Ineffective</strong>
                    </div>
                  </div>

                  <div className="wiki-body-text">
                    <p>
                      <strong>Miracle Health Remediez</strong> is an e-commerce dietary supplement brand.
                      Multiple medical watchdog organizations and oncology societies have published position statements
                      warning patients against substituting prescribed chemotherapy with unverified herbal powders.
                    </p>
                    <p>
                      In 2023, independent investigative journalists revealed that the founder possessed no medical degree
                      and had previously been fined for selling unauthorized weight-loss concoctions online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lateral-summary-banner">
                <ShieldAlert size={18} className="text-teal flex-shrink-0" />
                <span>
                  <strong>The Media Literacy Rule:</strong> Lateral reading turns a 10-minute argument into a 30-second verification.
                  Never ask a suspect website if it is honest—ask the wider web.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
