import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="wrap">
      <a className="brand hero-brand" href="#top">
        <span className="brand-emblem" aria-hidden="true">
          <span></span>
        </span>{" "}
        Promptlane
      </a>
      <nav className="hero-nav" aria-label="Main navigation">
        <a href="#top" aria-current="page">
          Home
        </a>
        <a href="#project">Project</a>
      </nav>
      <Button href="#project">Explore the workshop</Button>
    </header>
  );
}
