import { cn } from "@/lib/utils";
import setup_cover_hd_webp from "@/assets/images/setup-cover-hd.webp";

interface ToolsSetupProps {
  className?: string;
}

export default function ToolsSetup({ className }: ToolsSetupProps) {
  return (
    <section
      className={cn("setup-section", className)}
      id="setup"
      aria-labelledby="setup-title"
    >
      <figure className="setup-cover">
        <img
          src={setup_cover_hd_webp}
          alt="Two designers working together on a laptop"
          loading="lazy"
        />
        <figcaption>
          <div className="setup-cover-content">
            <strong>Build something you can put online.</strong>
            <span>
              Bring an idea and turn it into a working landing page during the
              workshop.
            </span>
            <div className="setup-cover-details">
              <div className="setup-byline">
                <span className="brand-emblem" aria-hidden="true">
                  <span></span>
                </span>
                <div>
                  <b>Promptlane</b>
                  <small>Live AI web development workshop</small>
                </div>
              </div>
              <div className="setup-cover-card">
                <b>4 steps</b>
                <small>From prompt to publish</small>
              </div>
              <div className="setup-cover-card">
                <b>1 page</b>
                <small>Build a responsive site</small>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="wrap">
        <div className="new-section-heading setup-heading">
          <p className="overlap-label">
            <span aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󱩙
              </i>
            </span>{" "}
            Tools &amp; setup
          </p>
          <h2 id="setup-title">
            Ready to <span className="underlined">build?</span>
          </h2>
          <p>
            Bring a laptop and set up the tools you’ll use to go from a prompt
            to a published page.
          </p>
        </div>
        <div className="setup-layout">
          <ol className="setup-steps">
            <li>
              <p className="label">Step 01</p>
              <h3>Get your workspace ready.</h3>
              <p>
                Bring a laptop with an up-to-date browser and a stable internet
                connection.
              </p>
            </li>
            <li>
              <p className="label">Step 02</p>
              <h3>Open an AI builder.</h3>
              <p>
                Have an AI coding tool ready so you can generate and refine your
                first draft.
              </p>
            </li>
            <li>
              <p className="label">Step 03</p>
              <h3>Choose a project.</h3>
              <p>
                Bring a portfolio or product idea, or follow the sample brief
                during the workshop.
              </p>
            </li>
            <li>
              <p className="label">Step 04</p>
              <h3>Prepare to publish.</h3>
              <p>
                Set up a hosting account so you can deploy your finished page
                and share a live URL.
              </p>
            </li>
          </ol>
          <div className="setup-visual" aria-hidden="true">
            <div className="setup-art">
              <div className="setup-layer layer-base"></div>
              <div className="setup-layer layer-host">
                <i className="hi" aria-hidden="true">
                  󱙀
                </i>
              </div>
              <div className="setup-layer layer-build">
                <i className="hi" aria-hidden="true">
                  󲙫
                </i>
              </div>
              <div className="setup-layer layer-code">
                <span>
                  <i className="hi" aria-hidden="true">
                    󲙦
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
