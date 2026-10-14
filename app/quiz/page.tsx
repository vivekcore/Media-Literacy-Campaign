import QuizPractice from "./quiz-practice";
import { ShieldAlert, FileSearch, Sparkles } from "lucide-react";

export const metadata = {
  title: "News Detective: Forensic Simulation Lab | Sift It",
  description:
    "Step into the newsroom: Inspect real-world social media hoaxes, manipulated graphs, spoofed handles, and deepfakes.",
};

export default function QuizPage() {
  return (
    <div className="quiz-route">
      <section className="quiz-page-intro shell">
        <p className="eyebrow">Interactive Forensic Simulation / 02</p>
        <h1>
          Can you spot the <em>hoax?</em>
          <br />
          Test your forensic instincts.
        </h1>
        <p>
          Investigate 8 realistic case studies spanning Twitter impersonations, viral WhatsApp chains,
          cheapfakes, manipulated charts, and AI deepfakes. Inspect forensic clues, render your verdict,
          and receive your Investigator Rank dossier.
        </p>

        {/* Investigator Field Briefing Strip */}
        <div className="detective-briefing-strip">
          <div className="briefing-card">
            <Sparkles size={16} className="text-acid" />
            <div>
              <strong>Username Letter Inspection</strong>
              <p>Paid blue checkmarks can be bought; exact username spellings cannot lie.</p>
            </div>
          </div>

          <div className="briefing-card">
            <FileSearch size={16} className="text-acid" />
            <div>
              <strong>Truncated Y-Axis Checks</strong>
              <p>Non-zero baselines visually magnify tiny 0.2% shifts into giant spikes.</p>
            </div>
          </div>

          <div className="briefing-card">
            <ShieldAlert size={16} className="text-coral" />
            <div>
              <strong>Cheapfakes (Recycled Media)</strong>
              <p>Real un-photoshopped images with false dates are the #1 form of viral hoaxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detective Simulation Desk */}
      <section className="detective-workspace shell" aria-label="News detective simulation">
        <QuizPractice />
      </section>
    </div>
  );
}
