import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("site-footer", className)}>
      <div className="wrap">
        <div className="footer-panel">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#top">
                <span className="brand-emblem" aria-hidden="true">
                  <span></span>
                </span>{" "}
                Promptlane
              </a>
              <p>
                A hands-on AI web development workshop. Build a responsive page
                and publish it live.
              </p>
            </div>
            <nav aria-label="Footer workshop">
              <h2>Workshop</h2>
              <a href="#project">About</a>
              <a href="#project-paths">Project paths</a>
              <a href="#skills">What you’ll learn</a>
              <a href="#agenda">Agenda</a>
            </nav>
            <nav aria-label="Footer preparation">
              <h2>Prepare</h2>
              <a href="#speakers">Speakers</a>
              <a href="#setup">Tools &amp; setup</a>
              <a href="#workshop-details">Workshop details</a>
            </nav>
            <nav aria-label="Footer registration">
              <h2>Join</h2>
              <a href="#pricing">Pricing</a>
              <a href="#register">Registration</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© Promptlane</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-word" aria-hidden="true">
          <span className="brand-emblem">
            <span></span>
          </span>
          <span>Promptlane</span>
        </div>
      </div>
    </footer>
  );
}
