import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface CTAProps {
  className?: string;
}

export default function CTA({
  className,
}: CTAProps) {
  return (
    <section
      className={cn("registration-section", className)}
      id="register"
      aria-labelledby="register-title"
    >
      <div className="wrap registration-layout">
        <div className="registration-art" aria-hidden="true">
          <div className="registration-orbit"></div>
          <i className="registration-route route-one"></i>
          <i className="registration-route route-two"></i>
          <span>
            <b>
              <i className="hi" aria-hidden="true">
                󲙫
              </i>
            </b>{" "}
            Prompt
          </span>
          <span>
            <b>
              <i className="hi" aria-hidden="true">
                󲙦
              </i>
            </b>{" "}
            Build
          </span>
          <span>
            <b>
              <i className="hi" aria-hidden="true">
                󱙀
              </i>
            </b>{" "}
            Publish
          </span>
        </div>
        <div className="registration-copy">
          <p className="overlap-label">
            <span aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󲤔
              </i>
            </span>{" "}
            Registration
          </p>
          <h2 id="register-title">
            Your first website <span className="underlined">starts here.</span>
          </h2>
          <p>
            Join Promptlane for a hands-on AI web development workshop. Leave
            with a responsive landing page and a live link you can share.
          </p>
          <div className="registration-actions">
            <Button href="#pricing">View passes</Button>
            <Button href="#setup">Check the setup</Button>
          </div>
          <p className="registration-status">
            Live online · Registration details coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
