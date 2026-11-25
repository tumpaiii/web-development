import { cn } from "@/lib/utils";
import speaker_1_webp from "@/assets/images/speaker-1.webp";
import speaker_2_webp from "@/assets/images/speaker-2.webp";
import speaker_3_webp from "@/assets/images/speaker-3.webp";
import speaker_4_webp from "@/assets/images/speaker-4.webp";
import speaker_5_webp from "@/assets/images/speaker-5.webp";

interface SpeakersProps {
  className?: string;
}

export default function Speakers({ className }: SpeakersProps) {
  return (
    <section
      className={cn("speakers", className)}
      id="speakers"
      aria-labelledby="speaker-title"
    >
      <div className="wrap">
        <div className="speaker-heading">
          <p className="overlap-label">
            <span aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󲤣
              </i>
            </span>{" "}
            Workshop speakers
          </p>
          <h2 id="speaker-title">
            Meet your <span className="underlined">workshop team.</span>
          </h2>
          <p>
            Get guidance as you prompt, build, and publish your first website
            with AI.
          </p>
        </div>
      </div>
      <div className="speaker-stage">
        <div className="speaker-list">
          <article
            className="speaker-card"
            tabIndex={0}
            aria-label="Maya Rahman, AI Workshop Lead at Pixel Current"
          >
            <img
              src={speaker_1_webp}
              alt="Portrait of Maya Rahman"
              width={400}
              height={600}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="speaker-overlay" aria-hidden="true">
              <h3>Maya Rahman</h3>
              <p>Pixel Current</p>
              <p>AI Workshop Lead</p>
            </div>
          </article>
          <article
            className="speaker-card"
            tabIndex={0}
            aria-label="Omar Haddad, Frontend Engineer at Interface Lab"
          >
            <img
              src={speaker_2_webp}
              alt="Portrait of Omar Haddad"
              width={400}
              height={600}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="speaker-overlay" aria-hidden="true">
              <h3>Omar Haddad</h3>
              <p>Interface Lab</p>
              <p>Frontend Engineer</p>
            </div>
          </article>
          <article
            className="speaker-card"
            tabIndex={0}
            aria-label="Jin Park, Product Designer at Form &amp; Field"
          >
            <img
              src={speaker_3_webp}
              alt="Portrait of Jin Park"
              width={400}
              height={600}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="speaker-overlay" aria-hidden="true">
              <h3>Jin Park</h3>
              <p>Form &amp; Field</p>
              <p>Product Designer</p>
            </div>
          </article>
          <article
            className="speaker-card"
            tabIndex={0}
            aria-label="Daniel Brooks, Web Developer at Studio North"
          >
            <img
              src={speaker_4_webp}
              alt="Portrait of Daniel Brooks"
              width={400}
              height={600}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="speaker-overlay" aria-hidden="true">
              <h3>Daniel Brooks</h3>
              <p>Studio North</p>
              <p>Web Developer</p>
            </div>
          </article>
          <article
            className="speaker-card"
            tabIndex={0}
            aria-label="Sofia Reyes, Creative Technologist at Orbit Studio"
          >
            <img
              src={speaker_5_webp}
              alt="Portrait of Sofia Reyes"
              width={400}
              height={600}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="speaker-overlay" aria-hidden="true">
              <h3>Sofia Reyes</h3>
              <p>Orbit Studio</p>
              <p>Creative Technologist</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
