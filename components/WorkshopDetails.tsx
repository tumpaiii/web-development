import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import strip_collaboration_webp from "@/assets/images/strip-collaboration.webp";
import strip_coding_webp from "@/assets/images/strip-coding.webp";
import strip_responsive_webp from "@/assets/images/strip-responsive.webp";
import strip_collaboration_hover_webp from "@/assets/images/strip-collaboration-hover.webp";

interface WorkshopDetailsProps {
  className?: string;
}

export default function WorkshopDetails({ className }: WorkshopDetailsProps) {
  return (
    <section
      className={cn("event-details", className)}
      id="workshop-details"
      aria-labelledby="event-title"
    >
      <div className="wrap">
        <p className="overlap-label">
          <span aria-hidden="true">
            <i className="hi" aria-hidden="true">
              󱡑
            </i>
          </span>{" "}
          Workshop details
        </p>
        <h2 id="event-title">Plan your workshop day.</h2>
      </div>
      <div className="scroll-sequence" id="details-sequence">
        <div
          className="event-gallery scroll-sequence-panel"
          id="event-gallery"
          tabIndex={0}
          aria-label="Workshop details cards"
        >
          <Card className="event-slide">
            <img
              src={strip_collaboration_webp}
              alt="Workshop participants reviewing a website together"
              width={720}
              height={480}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="event-caption">
              <p className="label">Format</p>
              <h3>Live online</h3>
              <p>
                Follow a guided build in your browser, from project brief to
                published page.
              </p>
            </div>
          </Card>
          <Card className="event-slide">
            <img
              src={strip_coding_webp}
              alt="Web code displayed on a laptop"
              width={720}
              height={480}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="event-caption">
              <p className="label">Proposed date &amp; time</p>
              <h3>
                <time dateTime="2027-01-23T10:00:00-05:00">
                  Saturday, January 23, 2027
                </time>
              </h3>
              <p>10:00 AM EST · 9:00 PM Bangladesh time</p>
            </div>
          </Card>
          <Card className="event-slide">
            <img
              src={strip_responsive_webp}
              alt="A responsive website across devices"
              width={720}
              height={480}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="event-caption">
              <p className="label">Duration</p>
              <h3>To be announced</h3>
              <p>The final schedule will list session length and any breaks.</p>
            </div>
          </Card>
          <Card className="event-slide">
            <img
              src={strip_collaboration_hover_webp}
              alt="Collaborators drafting a website layout"
              width={720}
              height={480}
              loading="lazy"
              aria-hidden="true"
            />
            <div className="event-caption">
              <p className="label">Platform</p>
              <h3>Joining details to come</h3>
              <p>
                The online platform and joining instructions will be confirmed
                before the workshop.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
