import Navbar from "./Navbar";
import About from "./About";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import avatar_1_webp from "@/assets/images/avatar-1.webp";
import avatar_2_webp from "@/assets/images/avatar-2.webp";
import avatar_3_webp from "@/assets/images/avatar-3.webp";
import HeroVideo from "./HeroVideo";
import strip_coding_webp from "@/assets/images/strip-coding.webp";
import strip_coding_hover_webp from "@/assets/images/strip-coding-hover.webp";
import strip_collaboration_webp from "@/assets/images/strip-collaboration.webp";
import strip_collaboration_hover_webp from "@/assets/images/strip-collaboration-hover.webp";
import strip_responsive_webp from "@/assets/images/strip-responsive.webp";
import strip_responsive_hover_webp from "@/assets/images/strip-responsive-hover.webp";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <div className={cn("workshop-intro", className)}>
      <section className="hero" id="top">
        <Navbar />
        <div className="wrap hero-layout">
          <div className="hero-intro">
            <p className="hero-kicker">
              <span className="workshop-avatars" aria-hidden="true">
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
              </span>{" "}
              Live, hands-on AI web development workshop
            </p>
            <h1>
              Build a website.
              <br />
              <span className="underlined">Launch it live.</span>
            </h1>
            <div className="hero-actions">
              <Button href="#project">Explore the workshop</Button>
            </div>
          </div>
          <figure className="hero-aside">
            <HeroVideo />
            <figcaption>
              Build a responsive landing page with AI in a hands-on workshop.
              Start with a prompt, refine the design, and publish a live link
              you can share.
            </figcaption>
          </figure>
        </div>
        <div
          className="hero-gallery"
          aria-label="Web development workshop imagery"
        >
          <div className="gallery-track">
            <div className="gallery-set">
              <figure className="reel-tile">
                <img
                  src={strip_coding_webp}
                  alt="Hands coding on a laptop"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_coding_hover_webp}
                  alt="Alternate view of the web development workshop"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
              <figure className="reel-tile">
                <img
                  src={strip_collaboration_webp}
                  alt="Web designers working together"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_collaboration_hover_webp}
                  alt="Collaborators drafting a website layout"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
              <figure className="reel-tile">
                <img
                  src={strip_responsive_webp}
                  alt="Responsive website on desktop and mobile"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_responsive_hover_webp}
                  alt="Alternate view of the web development workshop"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
            </div>
            <div className="gallery-set" aria-hidden="true">
              <figure className="reel-tile">
                <img
                  src={strip_coding_webp}
                  alt="Hands coding on a laptop"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_coding_hover_webp}
                  alt="Alternate view of the web development workshop"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
              <figure className="reel-tile">
                <img
                  src={strip_collaboration_webp}
                  alt="Web designers working together"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_collaboration_hover_webp}
                  alt="Collaborators drafting a website layout"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
              <figure className="reel-tile">
                <img
                  src={strip_responsive_webp}
                  alt="Responsive website on desktop and mobile"
                  width={720}
                  height={480}
                />
                <img
                  className="reel-alternate"
                  src={strip_responsive_hover_webp}
                  alt="Alternate view of the web development workshop"
                  width={720}
                  height={480}
                  aria-hidden="true"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <About />
    </div>
  );
}
