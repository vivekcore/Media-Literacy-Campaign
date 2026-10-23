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
      <section className="home-hero home-stage shell">
        <div className="home-copy home-stage-copy">
          <h1>
            Read past
            <br />
            the headline.
          </h1>
          <p className="home-lede">
            Scan a headline, then choose how you want to investigate it.
          </p>
          <div className="home-actions">
            <Link className="button-primary" href="/checker">
              <Search size={14} /> Analyze
            </Link>
            <Link className="button-secondary" href="/quiz">
              <FileSearch size={14} /> Try the cases
            </Link>
          </div>
        </div>
        <div className="home-hero-widget">
          <HomeScanner />
        </div>
      </section>

      <section
        className="home-evidence shell"
        aria-label="Why verification matters"
      >
        <p className="home-evidence-copy">
          Viral misinformation travels <strong>6 times faster</strong> than
          verified facts because it is engineered to provoke rapid emotional
          reactions. Sift It equips students, researchers, and citizens with the
          forensic instincts to slow down, analyze linguistic manipulation, and
          verify evidence.
        </p>
        <dl className="home-stats-strip">
          <div className="stat-item">
            <dt>
              <strong>6x</strong>
            </dt>
            <dd>Faster spread of false claims over truth (MIT Study)</dd>
          </div>
          <div className="stat-item">
            <dt>
              <strong>70%</strong>
            </dt>
            <dd>Of viral hoaxes are out-of-context cheapfakes, not AI</dd>
          </div>
          <div className="stat-item">
            <dt>
              <strong>30s</strong>
            </dt>
            <dd>Average lateral reading time to debunk 90% of hoaxes</dd>
          </div>
        </dl>
      </section>

      <section
        className="home-pathways home-feature-stack shell"
        aria-labelledby="pathways-title"
      >
        <div className="home-stack-rail">
          <h2 id="pathways-title">Three ways to get sharper.</h2>
          <p className="home-section-context">
            Interactive verification toolkits.
          </p>
          <p>
            Master the SIFT methodology, challenge yourself in the forensic
            newsroom, or analyze any live headline with our linguistic
            intelligence engine.
          </p>
        </div>

        <div className="pathway-grid home-feature-list">
          <Link className="pathway-card pathway-learn" href="/learn">
            <div className="pathway-art sift-art" aria-hidden="true">
              <span>S</span>
              <span>I</span>
              <span>F</span>
              <span>T</span>
            </div>
            <h3 className="pathway-title">SIFT field guide &amp; simulator</h3>
            <span className="pathway-index">01 / learn and simulate</span>
            <span className="pathway-description">
              Interactive 4-step lateral reading simulator, Disinformation
              Tactics Decoder, and a directory of certified fact-checking
              organizations.
            </span>
            <span className="pathway-link">
              SIFT guide <ArrowRight size={14} />
            </span>
          </Link>

          <Link className="pathway-card pathway-quiz" href="/quiz">
            <div className="pathway-art quiz-art" aria-hidden="true">
              <span className="detective-art-badge">
                <FileSearch size={36} className="text-coral" />
              </span>
              <span
                className="pathway-art-note"
                aria-label="8 investigative cases"
              >
                8 cases
              </span>
            </div>
            <h3 className="pathway-title">
              News Detective:
              <br />
              spot the hoax
            </h3>
            <span className="pathway-index">02 / forensic newsroom</span>
            <span className="pathway-description">
              Inspect real-world social posts, fake Twitter handles, deceptive
              truncated charts, and AI deepfakes. Earn your Investigator Rank
              dossier.
            </span>
            <span className="pathway-link">
              Start Investigation <ArrowRight size={14} />
            </span>
          </Link>

          <Link className="pathway-card pathway-check" href="/checker">
            <div className="pathway-art check-art" aria-hidden="true">
              <span>“URGENT”</span>
              <b>!</b>
            </div>
            <h3 className="pathway-title">Headline &amp; claim analyzer</h3>
            <span className="pathway-index">03 / intelligence engine</span>
            <span className="pathway-description">
              Paste any headline to evaluate sensationalism, psychological
              outrage hooks, and receive an objective neutral reframe with
              one-click verification links.
            </span>
            <span className="pathway-link">
              Inspect a Headline <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      <section className="home-bias-section shell" aria-labelledby="bias-title">
        <h2 id="bias-title">See how framing changes a story.</h2>
        <BiasComparator />
      </section>

      <section className="home-anatomy home-feature shell">
        <div className="home-section-heading">
          <h2>The anatomy of a viral hoax.</h2>
          <p className="home-section-context">Psychology and algorithms.</p>
          <p>
            Understanding why our brains fall for fake news is the first step
            toward digital immunity.
          </p>
        </div>

        <div className="anatomy-steps-grid">
          <article className="anatomy-card">
            <div className="card-step-num">Stage 1</div>
            <div className="card-icon-row">
              <Flame size={20} className="text-coral" />
              <h3>The Emotional Hook</h3>
            </div>
            <p>
              Bad actors craft a headline targeting moral outrage, fear, or
              tribal grievance. Strong emotion floods your brain with dopamine
              and adrenaline, turning off critical doubts.
            </p>
          </article>

          <article className="anatomy-card">
            <div className="card-step-num">Stage 2</div>
            <div className="card-icon-row">
              <TrendingUp size={20} className="text-teal" />
              <h3>Algorithmic Rocket Fuel</h3>
            </div>
            <p>
              Social media algorithms optimize for engagement, not accuracy.
              Every angry comment, quote-tweet, and forward boosts the post onto
              thousands of new recommendation feeds.
            </p>
          </article>

          <article className="anatomy-card">
            <div className="card-step-num">Stage 3</div>
            <div className="card-icon-row">
              <ShieldAlert size={20} className="text-coral" />
              <h3>The Illusion of Consensus</h3>
            </div>
            <p>
              Once a rumor is shared by trusted friends or family in WhatsApp
              groups, the Bandwagon Effect takes hold: &ldquo;If everyone is
              talking about it, it must have some truth.&rdquo;
            </p>
          </article>

          <article className="anatomy-card card-solution">
            <div className="card-step-num">The intervention</div>
            <div className="card-icon-row">
              <ShieldCheck size={20} className="text-acid" />
              <h3>The 30-Second SIFT Pause</h3>
            </div>
            <p>
              Taking a single 30-second breath to search the claim laterally in
              an independent browser tab breaks the viral chain reaction and
              stops the spread cold.
            </p>
          </article>
        </div>
      </section>

      <section className="home-principle">
        <div className="shell principle-inner">
          <span className="principle-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            When a story makes you feel something fast, give the evidence a
            chance to catch up.
          </blockquote>
          <Link href="/learn">
            SIFT guide <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
