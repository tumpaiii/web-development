import { cn } from "@/lib/utils";

interface WorkshopAgendaProps {
  className?: string;
}

export default function WorkshopAgenda({ className }: WorkshopAgendaProps) {
  return (
    <section
      className={cn("workshop-agenda", className)}
      id="agenda"
      aria-labelledby="agenda-title"
    >
      <div className="wrap">
        <div className="new-section-heading">
          <p className="overlap-label">
            <span aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󱡓
              </i>
            </span>{" "}
            Workshop agenda
          </p>
          <h2 id="agenda-title">
            From prompt to <span className="underlined">published page.</span>
          </h2>
        </div>
        <div className="scroll-sequence" id="agenda-sequence">
          <div className="agenda-cards scroll-sequence-panel">
            <div className="agenda-rail" aria-hidden="true"></div>
            <details className="agenda-card" name="workshop-agenda" open>
              <summary>
                <span>
                  <i className="hi" aria-hidden="true">
                    󲞺
                  </i>
                </span>
                <strong>Plan</strong>
              </summary>
              <div className="agenda-card-copy">
                <p>Turn an idea into a clear project brief.</p>
                <ul>
                  <li>Choose your audience</li>
                  <li>Define a page goal</li>
                  <li>Write your first prompt</li>
                </ul>
              </div>
            </details>
            <details className="agenda-card" name="workshop-agenda">
              <summary>
                <span>
                  <i className="hi" aria-hidden="true">
                    󱟈
                  </i>
                </span>
                <strong>Build</strong>
              </summary>
              <div className="agenda-card-copy">
                <p>Generate the first working version of your page.</p>
                <ul>
                  <li>Outline the sections</li>
                  <li>Generate a draft</li>
                  <li>Review the code</li>
                </ul>
              </div>
            </details>
            <details className="agenda-card" name="workshop-agenda">
              <summary>
                <span>
                  <i className="hi" aria-hidden="true">
                    󲕿
                  </i>
                </span>
                <strong>Refine</strong>
              </summary>
              <div className="agenda-card-copy">
                <p>Improve the page on desktop and mobile.</p>
                <ul>
                  <li>Tighten the copy</li>
                  <li>Check the layout</li>
                  <li>Test keyboard navigation</li>
                </ul>
              </div>
            </details>
            <details className="agenda-card" name="workshop-agenda">
              <summary>
                <span>
                  <i className="hi" aria-hidden="true">
                    󱨅
                  </i>
                </span>
                <strong>Publish</strong>
              </summary>
              <div className="agenda-card-copy">
                <p>Put your finished landing page online.</p>
                <ul>
                  <li>Deploy your project</li>
                  <li>Check the public URL</li>
                  <li>
                    Run ten launch checks covering mobile, tablet, desktop,
                    links, buttons, forms, keyboard access, contrast, image
                    descriptions, and page titles.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
