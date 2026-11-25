import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import strip_responsive_webp from "@/assets/images/strip-responsive.webp";
import strip_responsive_hover_webp from "@/assets/images/strip-responsive-hover.webp";
import strip_collaboration_hover_webp from "@/assets/images/strip-collaboration-hover.webp";

interface BenefitsProps {
  className?: string;
}

export default function Benefits({ className }: BenefitsProps) {
  return (
    <section
      className={cn("build-stories", className)}
      id="project-paths"
      aria-labelledby="paths-title"
    >
      <div className="wrap overlap-content">
        <p className="overlap-label">
          <span aria-hidden="true">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="6" r="2" />
                <path d="M9 18h6a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6" />
              </svg>
          </span>{" "}
          Who it’s for
        </p>
        <h2 id="paths-title">
          What will{" "}
          <span className="inline-code" aria-hidden="true">
            <i className="hi" aria-hidden="true">
              󲙦
            </i>
          </span>{" "}
          you build?
          <br />
          <span className="underlined">Make it yours.</span>
        </h2>
        <p className="intro-detail">
          Bring a portfolio, a product idea, or the first website you’ve been
          meaning to make.
        </p>
      </div>
      <div className="wrap project-stack">
        <Card className="project-stack-card">
          <div className="stack-copy">
            <span className="stack-index" aria-hidden="true">
              01
            </span>
            <p className="label">Designer</p>
            <h3>Build your portfolio.</h3>
            <p>
              Build a case-study portfolio, photo gallery, résumé site, or
              freelance services page.
            </p>
          </div>
          <div className="stack-visual">
            <img
              src={strip_responsive_webp}
              width={720}
              height={480}
              alt="Portfolio preview on desktop and mobile"
              loading="lazy"
            />
          </div>
        </Card>
        <Card className="project-stack-card">
          <div className="stack-copy">
            <span className="stack-index" aria-hidden="true">
              02
            </span>
            <p className="label">Founder</p>
            <h3>Launch your product.</h3>
            <p>
              Build a SaaS waitlist, app launch page, course sales page, or
              product preorder page.
            </p>
          </div>
          <div className="stack-visual">
            <img
              src={strip_responsive_hover_webp}
              width={720}
              height={480}
              alt="Responsive product launch page on a tablet and phone"
              loading="lazy"
            />
          </div>
        </Card>
        <Card className="project-stack-card">
          <div className="stack-copy">
            <span className="stack-index" aria-hidden="true">
              03
            </span>
            <p className="label">Beginner</p>
            <h3>Publish your first site.</h3>
            <p>
              Build an event invite, newsletter signup, community homepage, or
              personal bio site.
            </p>
          </div>
          <div className="stack-visual">
            <img
              src={strip_collaboration_hover_webp}
              width={720}
              height={480}
              alt="Wireframe sketches for a first website"
              loading="lazy"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
