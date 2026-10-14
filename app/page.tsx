import Link from "next/link";
import HomeScanner from "./components/home-scanner";
import BiasComparator from "./components/bias-comparator";
import {
  ArrowRight,
  FileSearch,
  Flame,
  Search,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Sift It | Digital Media Literacy & Forensic Analysis Hub",
  description:
    "Learn to spot fake news, decode clickbait, inspect media framing, and practice lateral reading with interactive simulations and AI linguistic tools.",
};

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Interactive Headline Scanner */}
      <section className="home-hero shell">
        <div className="home-copy fade-up">
          <p className="eyebrow">Digital Forensic Field Guide</p>
          <h1>
            Read past
            <br />
            <em>the headline.</em>
          </h1>
          <p className="home-lede">
            Viral misinformation travels <strong>6 times faster</strong> than verified facts because it is engineered
            to provoke rapid emotional reactions. Sift It equips students, researchers, and citizens with the forensic
            instincts to slow down, analyze linguistic manipulation, and verify evidence.
          </p>
          <div className="home-actions">
            <Link className="button-primary" href="/checker">
              <Search size={14} /> Launch Headline Analyzer
            </Link>
            <Link className="button-secondary" href="/quiz">
              <FileSearch size={14} /> Play News Detective (8 Cases)
            </Link>
          </div>
          <div className="home-stats-strip">
            <div className="stat-item">
              <strong>6x</strong>
              <span>Faster spread of false claims over truth (MIT Study)</span>
            </div>
            <div className="stat-item">
              <strong>70%</strong>
              <span>Of viral hoaxes are out-of-context cheapfakes, not AI</span>
            </div>
            <div className="stat-item">
              <strong>30s</strong>
              <span>Average lateral reading time to debunk 90% of hoaxes</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Scanner Widget */}
        <div className="home-hero-widget">
          <HomeScanner />
        </div>
      </section>

      {/* Pathways / Three Interactive Toolkits */}
      <section className="home-pathways shell" aria-labelledby="pathways-title">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Interactive Verification Toolkits</p>
            <h2 id="pathways-title">Three ways to get sharper.</h2>
          </div>
          <p>
            Master the SIFT methodology, challenge yourself in the forensic newsroom,
            or analyze any live headline with our linguistic intelligence engine.
          </p>
        </div>

        <div className="pathway-grid">
          {/* Pathway 1: Learn */}
          <Link className="pathway-card pathway-learn" href="/learn">
            <span className="pathway-index">01 / LEARN & SIMULATE</span>
            <div className="pathway-art sift-art" aria-hidden="true">
              <span>S</span>
              <span>I</span>
              <span>F</span>
              <span>T</span>
            </div>
            <span className="pathway-title">SIFT Field Guide & Simulator</span>
            <span className="pathway-description">
              Interactive 4-step lateral reading simulator, Disinformation Tactics Decoder,
              and a directory of certified fact-checking organizations.
            </span>
            <span className="pathway-link">
              Explore Guide & Simulator <ArrowRight size={14} />
            </span>
          </Link>

          {/* Pathway 2: Quiz */}
          <Link className="pathway-card pathway-quiz" href="/quiz">
            <span className="pathway-index">02 / FORENSIC NEWSROOM</span>
            <div className="pathway-art quiz-art" aria-hidden="true">
              <span className="detective-art-badge">
                <FileSearch size={36} className="text-coral" />
              </span>
              <i>8 Investigative Cases</i>
            </div>
            <span className="pathway-title">News Detective: Spot The Hoax</span>
            <span className="pathway-description">
              Inspect real-world social posts, fake Twitter handles, deceptive truncated charts,
              and AI deepfakes. Earn your Investigator Rank dossier.
            </span>
            <span className="pathway-link">
              Start Investigation <ArrowRight size={14} />
            </span>
          </Link>

          {/* Pathway 3: Checker */}
          <Link className="pathway-card pathway-check" href="/checker">
            <span className="pathway-index">03 / INTELLIGENCE ENGINE</span>
            <div className="pathway-art check-art" aria-hidden="true">
              <span>“URGENT”</span>
              <b>!</b>
            </div>
            <span className="pathway-title">Headline & Claim Analyzer</span>
            <span className="pathway-description">
              Paste any headline to evaluate sensationalism, psychological outrage hooks,
              and receive an objective neutral reframe with one-click verification links.
            </span>
            <span className="pathway-link">
              Inspect a Headline <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* Interactive Bias Comparator Section */}
      <section className="home-bias-section shell">
        <BiasComparator />
      </section>

      {/* Visual Anatomy of Misinformation */}
      <section className="home-anatomy shell">
        <div className="route-section-heading">
          <div>
            <p className="eyebrow">Psychology & Algorithms</p>
            <h2>The Anatomy of a Viral Hoax.</h2>
          </div>
          <p>
            Understanding why our brains fall for fake news is the first step toward digital immunity.
          </p>
        </div>

        <div className="anatomy-steps-grid">
          <div className="anatomy-card">
            <div className="card-step-num">STAGE 01</div>
            <div className="card-icon-row">
              <Flame size={20} className="text-coral" />
              <strong>The Emotional Hook</strong>
            </div>
            <p>
              Bad actors craft a headline targeting moral outrage, fear, or tribal grievance.
              Strong emotion floods your brain with dopamine and adrenaline, turning off critical doubts.
            </p>
          </div>

          <div className="anatomy-card">
            <div className="card-step-num">STAGE 02</div>
            <div className="card-icon-row">
              <TrendingUp size={20} className="text-teal" />
              <strong>Algorithmic Rocket Fuel</strong>
            </div>
            <p>
              Social media algorithms optimize for engagement, not accuracy. Every angry comment, quote-tweet,
              and forward boosts the post onto thousands of new recommendation feeds.
            </p>
          </div>

          <div className="anatomy-card">
            <div className="card-step-num">STAGE 03</div>
            <div className="card-icon-row">
              <ShieldAlert size={20} className="text-coral" />
              <strong>The Illusion of Consensus</strong>
            </div>
            <p>
              Once a rumor is shared by trusted friends or family in WhatsApp groups, the Bandwagon Effect
              takes hold: &ldquo;If everyone is talking about it, it must have some truth.&rdquo;
            </p>
          </div>

          <div className="anatomy-card card-solution">
            <div className="card-step-num">THE INTERVENTION</div>
            <div className="card-icon-row">
              <ShieldCheck size={20} className="text-acid" />
              <strong>The 30-Second SIFT Pause</strong>
            </div>
            <p>
              Taking a single 30-second breath to search the claim laterally in an independent browser tab
              breaks the viral chain reaction and stops the spread cold.
            </p>
          </div>
        </div>
      </section>

      {/* Quote / Principle */}
      <section className="home-principle">
        <div className="shell principle-inner">
          <span className="principle-mark" aria-hidden="true">
            “
          </span>
          <p>
            When a story makes you feel something fast, give the evidence a
            chance to catch up.
          </p>
          <Link href="/learn">
            Explore the SIFT Methodology <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
