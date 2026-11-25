import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  return (
    <section
      className={cn("workshop-faq", className)}
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="wrap faq-panel">
        <div className="faq-aside">
          <div>
            <p className="overlap-label">
              <span aria-hidden="true">
                <i className="hi" aria-hidden="true">
                  󱸑
                </i>
              </span>{" "}
              FAQ
            </p>
            <h2 id="faq-title">
              Frequently asked
              <br /> questions.
            </h2>
          </div>
          <div className="faq-help">
            <h3>Still have a question?</h3>
            <p>Check what to bring and how to get ready.</p>
            <Button href="#setup">View setup guide</Button>
          </div>
        </div>
        <div className="faq-list">
          <details name="workshop-faq" open>
            <summary>
              <span className="faq-number">01</span>
              <span>Do I need coding experience?</span>
              <span className="faq-symbol" aria-hidden="true"></span>
            </summary>
            <p>
              No. The workshop takes you through a guided build, with
              explanations of the decisions you make along the way.
            </p>
          </details>
          <details name="workshop-faq">
            <summary>
              <span className="faq-number">02</span>
              <span>What should I bring?</span>
              <span className="faq-symbol" aria-hidden="true"></span>
            </summary>
            <p>
              Bring a laptop, a current browser, and a stable internet
              connection. You can bring your own idea or use the sample project.
            </p>
          </details>
          <details name="workshop-faq">
            <summary>
              <span className="faq-number">03</span>
              <span>What will I build during the workshop?</span>
              <span className="faq-symbol" aria-hidden="true"></span>
            </summary>
            <p>
              You’ll build a responsive landing page and practice publishing it
              so you can share a live link.
            </p>
          </details>
          <details name="workshop-faq">
            <summary>
              <span className="faq-number">04</span>
              <span>Will there be a replay?</span>
              <span className="faq-symbol" aria-hidden="true"></span>
            </summary>
            <p>
              Replay availability will be confirmed when the workshop passes go
              on sale.
            </p>
          </details>
          <details name="workshop-faq">
            <summary>
              <span className="faq-number">05</span>
              <span>When does registration open?</span>
              <span className="faq-symbol" aria-hidden="true"></span>
            </summary>
            <p>
              The opening date will be shared once the schedule is confirmed.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
