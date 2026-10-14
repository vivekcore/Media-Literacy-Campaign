import Link from "next/link";
import { BookOpen, Search, FileSearch } from "lucide-react";

export function SiteHeader() {
  return (
    <>
      <div className="topline">
        <span>SIFT IT • DIGITAL MEDIA LITERACY &amp; FORENSIC CLAIM ANALYSIS PLATFORM</span>
      </div>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Sift It home">
          <span className="wordmark-mark" aria-hidden="true">
            s
          </span>
          <span className="wordmark-text">SIFT IT</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/learn">
            <BookOpen size={13} className="inline-nav-icon" /> Learn &amp; SIFT
          </Link>
          <Link href="/quiz">
            <FileSearch size={13} className="inline-nav-icon" /> News Detective
          </Link>
          <Link href="/checker" className="nav-highlight">
            <Search size={13} className="inline-nav-icon" /> Headline Analyzer
          </Link>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-left">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true">
            s
          </span>
          <span className="wordmark-text">SIFT IT</span>
        </Link>
        <span className="footer-tagline">
          Pause. Check context. Read laterally.
        </span>
      </div>
      <div className="footer-links">
        <Link href="/learn#sift-title">The 4 SIFT Moves</Link>
        <Link href="/learn#resources">Fact-Checking Network</Link>
        <Link href="/checker">Headline Analyzer</Link>
        <Link href="/quiz">Forensic Quiz</Link>
      </div>
    </footer>
  );
}
