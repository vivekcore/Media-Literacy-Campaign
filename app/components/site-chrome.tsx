import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <div className="wordmark-lockup">
        <Link className="wordmark" href="/" aria-label="Sift It home">
          <span className="wordmark-mark" aria-hidden="true">
            S
          </span>
          <span className="wordmark-text">SIFT IT</span>
        </Link>
          <span className="wordmark-caption">
            Digital media literacy and forensic claim analysis
          </span>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/learn">SIFT guide</Link>
          <Link href="/quiz">News cases</Link>
          <Link href="/checker" className="nav-highlight">Analyze</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner shell">
        <p className="footer-statement">Pause. Check context. Read laterally.</p>
        <div className="footer-bottom">
          <Link className="wordmark" href="/" aria-label="Sift It home">
            <span className="wordmark-mark" aria-hidden="true">S</span>
            <span className="wordmark-text">SIFT IT</span>
          </Link>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/learn#sift-title">The 4 SIFT Moves</Link>
            <Link href="/learn#resources">Fact-checkers</Link>
            <Link href="/checker">Headline Analyzer</Link>
            <Link href="/quiz">Forensic Quiz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
