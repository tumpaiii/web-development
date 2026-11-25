import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  return (
    <section
      className={cn("pricing-section", className)}
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="wrap">
        <div className="new-section-heading">
          <p className="overlap-label">
            <span aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󲠳
              </i>
            </span>{" "}
            Workshop pricing
          </p>
          <h2 id="pricing-title">
            Choose your <span className="underlined">workshop pass.</span>
          </h2>
          <p>
            Pick the level of support you’d like. Prices are in US dollars per
            person.
          </p>
        </div>
        <div className="pricing-stage">
          <div className="pricing-word" aria-hidden="true">
            Pricing
          </div>
          <div className="pricing-grid">
            <article>
              <div className="pass-header">
                <h3>Workshop</h3>
                <p className="pass-price">
                  <Badge className="price-currency">US</Badge>$49
                </p>
                <Button href="#register">Registration details</Button>
              </div>
              <ul>
                <li>Live guided build</li>
                <li>Sample project brief</li>
                <li>Publishing walkthrough</li>
              </ul>
            </article>
            <div className="pass-mark" aria-hidden="true">
              <i className="hi" aria-hidden="true">
                󲙦
              </i>
            </div>
            <article>
              <div className="pass-header">
                <h3>Workshop + Review</h3>
                <p className="pass-price">
                  <Badge className="price-currency">US</Badge>$99
                </p>
                <Button href="#register">Registration details</Button>
              </div>
              <ul>
                <li>Live workshop and replay</li>
                <li>Feedback on your landing page</li>
                <li>Suggested next steps</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
