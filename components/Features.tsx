import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import strip_collaboration_hover_webp from "@/assets/images/strip-collaboration-hover.webp";
import strip_coding_webp from "@/assets/images/strip-coding.webp";
import strip_responsive_hover_webp from "@/assets/images/strip-responsive-hover.webp";
import strip_responsive_webp from "@/assets/images/strip-responsive.webp";

interface FeaturesProps {
  className?: string;
}

export default function Features({ className }: FeaturesProps) {
  return (
    <section
      className={cn("workshop-skills", className)}
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="wrap skills-pin">
        <div className="skills-heading">
          <div>
            <p className="overlap-label">
              <span aria-hidden="true">
                <i className="hi" aria-hidden="true">
                  󱨊
                </i>
              </span>{" "}
              What you’ll learn
            </p>
            <h2 id="skills-title">
              Build with AI.
              <br />
              <span className="underlined">Learn by doing.</span>
            </h2>
          </div>
          <p>
            Take one landing page from a clear prompt to a live website.
            Practice the skills you’ll use on your next project.
          </p>
        </div>
        <div className="skills-scroll-area">
          <div className="skills-cards">
            <article className="skill-card is-open">
              <h3>
                <Button
                  className="skill-trigger"
                  id="skill-button-1"
                  aria-expanded="true"
                  aria-controls="skill-panel-1"
                >
                  <span className="skill-name">Prompt</span>
                </Button>
              </h3>
              <div
                className="skill-panel"
                id="skill-panel-1"
                role="region"
                aria-labelledby="skill-button-1"
              >
                <div className="skill-copy">
                  <h4>Write a clear brief</h4>
                  <p>
                    Give AI a specific audience, a page structure, and one
                    action visitors should take.
                  </p>
                  <p className="skill-topics">
                    Audience · Page goals · Prompt structure
                  </p>
                </div>
                <img
                  src={strip_collaboration_hover_webp}
                  alt="Collaborators drafting a website layout"
                  width={720}
                  height={480}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </article>
            <article className="skill-card">
              <h3>
                <Button
                  className="skill-trigger"
                  id="skill-button-2"
                  aria-expanded="false"
                  aria-controls="skill-panel-2"
                >
                  <span className="skill-name">Build</span>
                </Button>
              </h3>
              <div
                className="skill-panel"
                id="skill-panel-2"
                role="region"
                aria-labelledby="skill-button-2"
                inert
              >
                <div className="skill-copy">
                  <h4>Generate the first draft</h4>
                  <p>
                    Turn your prompt into a working page. Review the generated
                    layout and code before refining it.
                  </p>
                  <p className="skill-topics">
                    Layout · Components · Code review
                  </p>
                </div>
                <img
                  src={strip_coding_webp}
                  alt="Web code displayed on a laptop"
                  width={720}
                  height={480}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </article>
            <article className="skill-card">
              <h3>
                <Button
                  className="skill-trigger"
                  id="skill-button-3"
                  aria-expanded="false"
                  aria-controls="skill-panel-3"
                >
                  <span className="skill-name">Refine</span>
                </Button>
              </h3>
              <div
                className="skill-panel"
                id="skill-panel-3"
                role="region"
                aria-labelledby="skill-button-3"
                inert
              >
                <div className="skill-copy">
                  <h4>Design for every screen</h4>
                  <p>
                    Adjust spacing, hierarchy, and navigation. Check the
                    experience on desktop and mobile.
                  </p>
                  <p className="skill-topics">
                    Responsive design · Usability · Accessibility
                  </p>
                </div>
                <img
                  src={strip_responsive_hover_webp}
                  alt="Alternate view of the web development workshop"
                  width={720}
                  height={480}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </article>
            <article className="skill-card">
              <h3>
                <Button
                  className="skill-trigger"
                  id="skill-button-4"
                  aria-expanded="false"
                  aria-controls="skill-panel-4"
                >
                  <span className="skill-name">Launch</span>
                </Button>
              </h3>
              <div
                className="skill-panel"
                id="skill-panel-4"
                role="region"
                aria-labelledby="skill-button-4"
                inert
              >
                <div className="skill-copy">
                  <h4>Publish and test</h4>
                  <p>
                    Deploy the page, open the live URL, and check that links and
                    calls to action work.
                  </p>
                  <p className="skill-topics">
                    Deployment · Link checks · Live preview
                  </p>
                </div>
                <img
                  src={strip_responsive_webp}
                  alt="A responsive website across devices"
                  width={720}
                  height={480}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
