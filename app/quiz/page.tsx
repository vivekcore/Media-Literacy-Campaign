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
      <div className="quiz-workbench shell">
        <header className="quiz-workbench-header">
          <h1>News Detective</h1>
          <p>Interactive forensic simulation. Can you spot the hoax? Test your forensic instincts.</p>
          <p>
            Investigate 8 realistic case studies spanning Twitter impersonations, viral WhatsApp chains,
            cheapfakes, manipulated charts, and AI deepfakes. Inspect forensic clues, render your verdict,
            and receive your Investigator Rank dossier.
          </p>
        </header>

        <section className="quiz-field-notes" aria-label="Forensic field notes">
          <ul className="quiz-field-note-list">
            <li className="quiz-field-note">
              <Sparkles size={16} className="quiz-field-note-icon text-acid" aria-hidden="true" />
              <div>
                <h2>Username Letter Inspection</h2>
                <p>Paid blue checkmarks can be bought; exact username spellings cannot lie.</p>
              </div>
            </li>

            <li className="quiz-field-note">
              <FileSearch size={16} className="quiz-field-note-icon text-acid" aria-hidden="true" />
              <div>
                <h2>Truncated Y-Axis Checks</h2>
                <p>Non-zero baselines visually magnify tiny 0.2% shifts into giant spikes.</p>
              </div>
            </li>

            <li className="quiz-field-note">
              <ShieldAlert size={16} className="quiz-field-note-icon text-coral" aria-hidden="true" />
              <div>
                <h2>Cheapfakes (Recycled Media)</h2>
                <p>Real un-photoshopped images with false dates are the #1 form of viral hoaxes.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="quiz-simulation" aria-label="News detective simulation">
          <QuizPractice />
        </section>
      </div>
    </div>
  );
}
