import { cn } from "@/lib/utils";
import avatar_1_webp from "@/assets/images/avatar-1.webp";
import avatar_2_webp from "@/assets/images/avatar-2.webp";
import avatar_3_webp from "@/assets/images/avatar-3.webp";

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  return (
    <section
      className={cn("workshop-overlap", className)}
      id="project"
      aria-labelledby="workshop-intro-title"
    >
      <div className="wrap overlap-content">
        <p className="overlap-label">
          <span aria-hidden="true">
            <i className="hi" aria-hidden="true">
              󱺴
            </i>
          </span>{" "}
          About Promptlane
        </p>
        <h2 id="workshop-intro-title">
          Build with{" "}
          <span className="inline-code" aria-hidden="true">
            <i className="hi" aria-hidden="true">
              󲙦
            </i>
          </span>{" "}
          AI.
          <br /> <span className="underlined">Launch with confidence.</span>
        </h2>
        <div className="intro-avatars" aria-hidden="true">
          <img
            src={avatar_1_webp}
            alt="Alternate view of the web development workshop"
            aria-hidden="true"
          />
          <img
            src={avatar_2_webp}
            alt="Alternate view of the web development workshop"
            aria-hidden="true"
          />
          <img
            src={avatar_3_webp}
            alt="Alternate view of the web development workshop"
            aria-hidden="true"
          />
          <span className="intro-plus">
            <i className="hi" aria-hidden="true">
              󱔌
            </i>
          </span>
        </div>
        <p className="intro-lead">
          <span aria-hidden="true">
            <i className="hi" aria-hidden="true">
              󱙀
            </i>
          </span>{" "}
          12 project ideas across three build paths
        </p>
        <p className="intro-detail">
          For designers, founders, and anyone building their first landing page.
        </p>
      </div>
      <div className="outcome-panel">
        <div className="outcome-grid">
          <div className="outcome-copy">
            <p className="overlap-label">
              <span aria-hidden="true">
                <i className="hi" aria-hidden="true">
                  󱟈
                </i>
              </span>{" "}
              What you’ll build
            </p>
            <h3>
              From your first prompt to a{" "}
              <span className="underlined">live website.</span>
            </h3>
            <p>
              Create a responsive landing page for a portfolio, product, or side
              project.
            </p>
          </div>
          <dl className="outcome-stats" aria-label="Workshop outcomes">
            <div className="outcome-stat">
              <dt>Project ideas</dt>
              <dd>
                <span aria-hidden="true" data-count="12">
                  12
                </span>
                <span className="sr-only">12</span>
              </dd>
            </div>
            <div className="outcome-stat">
              <dt>Build tasks</dt>
              <dd>
                <span aria-hidden="true" data-count="12">
                  12
                </span>
                <span className="sr-only">12</span>
              </dd>
            </div>
            <div className="outcome-stat">
              <dt>Launch checks</dt>
              <dd>
                <span aria-hidden="true" data-count="10">
                  10
                </span>
                <span className="sr-only">10</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="outcome-flow">
          <strong className="workflow-label">Workshop workflow</strong>
          <div className="workflow-window">
            <div className="workflow-track">
              <div className="workflow-set">
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲈡
                  </i>
                  Plan
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲙦
                  </i>
                  Build
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲘞
                  </i>
                  Refine
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲒒
                  </i>
                  Publish
                </span>
              </div>
              <div className="workflow-set" aria-hidden="true">
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲈡
                  </i>
                  Plan
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲙦
                  </i>
                  Build
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲘞
                  </i>
                  Refine
                </span>
                <span className="workflow-mark">
                  <i className="hi" aria-hidden="true">
                    󲒒
                  </i>
                  Publish
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
