import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface WorkshopInteractionsProps {
  className?: string;
}

interface ScrollSequence {
  track: HTMLElement;
  cards: HTMLElement[];
  index?: number;
  select(index: number): void;
}

function element<T extends HTMLElement = HTMLElement>(
  selector: string,
  scope: ParentNode = document,
): T {
  const result = scope.querySelector<T>(selector);
  if (!result) throw new Error(`Missing workshop element: ${selector}`);
  return result;
}

function mountWorkshopInteractions() {
  const controller = new AbortController();
  const { signal } = controller;
  const disposers: (() => void)[] = [];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const agendaSequence = element("#agenda-sequence");
  const agendaCards = [
    ...agendaSequence.querySelectorAll<HTMLDetailsElement>(".agenda-card"),
  ];
  const detailsSequence = element("#details-sequence");
  const eventGallery = element("#event-gallery");
  const eventCards = [
    ...eventGallery.querySelectorAll<HTMLElement>(".event-slide"),
  ];
  const sequenceMotion = matchMedia(
    "(min-height: 580px) and (prefers-reduced-motion: no-preference)",
  );
  const sequences: ScrollSequence[] = [
    {
      track: agendaSequence,
      cards: agendaCards,
      select(index) {
        agendaCards[index].open = true;
      },
    },
    {
      track: detailsSequence,
      cards: eventCards,
      select(index) {
        const left = eventCards[index].offsetLeft - eventCards[0].offsetLeft;
        eventGallery.scrollTo({
          left:
            index === eventCards.length - 1 ? eventGallery.scrollWidth : left,
          behavior: "smooth",
        });
      },
    },
  ];
  let sequenceFrame = 0;
  function updateSequences() {
    sequenceFrame = 0;
    for (const sequence of sequences) {
      const enabled = sequenceMotion.matches;
      if (!enabled) {
        sequence.index = undefined;
        continue;
      }
      const bounds = sequence.track.getBoundingClientRect();
      const viewportHeight = document.documentElement.clientHeight;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (0.66 * viewportHeight - bounds.top) / (0.72 * viewportHeight),
        ),
      );
      const index = Math.round(progress * (sequence.cards.length - 1));
      if (index === sequence.index) continue;
      sequence.index = index;
      sequence.select(index);
    }
  }
  function requestSequenceUpdate() {
    if (!sequenceFrame) sequenceFrame = requestAnimationFrame(updateSequences);
  }
  window.addEventListener("scroll", requestSequenceUpdate, {
    passive: true,
    signal,
  });
  window.addEventListener("resize", requestSequenceUpdate, { signal });
  sequenceMotion.addEventListener("change", requestSequenceUpdate, { signal });
  updateSequences();

  const setup = element("#setup");
  const setupSteps = [
    ...setup.querySelectorAll<HTMLElement>(".setup-steps li"),
  ];
  const pricingStage = element(".pricing-stage", document);
  const pricingWord = element(".pricing-word", pricingStage);
  let priceFrame = 0;
  function updatePriceMotion() {
    priceFrame = 0;
    if (reduced.matches) {
      pricingWord.style.removeProperty("--price-offset");
      return;
    }
    const viewport = document.documentElement.clientHeight;
    const top = pricingStage.getBoundingClientRect().top;
    const progress = Math.max(
      0,
      Math.min(1, (viewport * 0.88 - top) / (viewport * 0.52)),
    );
    const eased = 1 - Math.pow(1 - progress, 2);
    pricingWord.style.setProperty("--price-offset", (1 - eased) * -110 + "%");
  }
  function requestPriceMotion() {
    if (!priceFrame) priceFrame = requestAnimationFrame(updatePriceMotion);
  }
  window.addEventListener("scroll", requestPriceMotion, {
    passive: true,
    signal,
  });
  window.addEventListener("resize", requestPriceMotion, { signal });
  reduced.addEventListener("change", requestPriceMotion, { signal });
  updatePriceMotion();
  let setupFrame = 0;
  function updateSetup() {
    setupFrame = 0;
    const line = document.documentElement.clientHeight * 0.48;
    let active = 0;
    let progress = 0;
    for (const [index, step] of setupSteps.entries()) {
      const rect = step.getBoundingClientRect();
      if (rect.top > line) continue;
      active = index;
      progress = index + Math.min(1, (line - rect.top) / rect.height);
    }
    setupSteps.forEach((step, index) =>
      step.classList.toggle("is-active", index === active),
    );
    setup.style.setProperty(
      "--setup-spread",
      (reduced.matches ? 0 : Math.min(progress, 3) * 8) + "px",
    );
  }
  function requestSetupUpdate() {
    if (!setupFrame) setupFrame = requestAnimationFrame(updateSetup);
  }
  window.addEventListener("scroll", requestSetupUpdate, {
    passive: true,
    signal,
  });
  window.addEventListener("resize", requestSetupUpdate, { signal });
  reduced.addEventListener("change", requestSetupUpdate, { signal });
  updateSetup();

  const speakers = element("#speakers");
  const speakerStage = element(".speaker-stage", speakers);
  const speakerCards = [
    ...speakers.querySelectorAll<HTMLElement>(".speaker-card"),
  ];
  let speakerTravel = 0;
  let speakerFrame = 0;
  function updateSpeakers() {
    speakerFrame = 0;
    const stepped = speakers.classList.contains("is-stepped");
    const offset = speakerStage.getBoundingClientRect().top;
    const progress = (16 - offset) / Math.max(1, speakerTravel);
    speakerCards.forEach((card, index) => {
      const visible = stepped
        ? progress >= index * 0.14
        : card.getBoundingClientRect().top <
          document.documentElement.clientHeight * 0.92;
      card.classList.toggle("is-revealed", reduced.matches || visible);
    });
  }
  function configureSpeakers() {
    const height = document.documentElement.clientHeight;
    speakerTravel = Math.round(height * 1.15);
    speakers.style.setProperty("--speaker-travel", speakerTravel + "px");
    speakers.classList.toggle("has-reveal", !reduced.matches);
    speakers.classList.toggle(
      "is-stepped",
      !reduced.matches &&
        matchMedia("(min-width: 761px)").matches &&
        height >= 360,
    );
    updateSpeakers();
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!speakerFrame) speakerFrame = requestAnimationFrame(updateSpeakers);
    },
    { passive: true, signal },
  );
  window.addEventListener("resize", configureSpeakers, { signal });
  reduced.addEventListener("change", configureSpeakers, { signal });
  configureSpeakers();

  const skillCards = [...document.querySelectorAll<HTMLElement>(".skill-card")];
  const hoverSkills = matchMedia("(hover: hover) and (pointer: fine)");
  function openSkill(selected: HTMLElement) {
    for (const card of skillCards) {
      const active = card === selected;
      card.classList.toggle("is-open", active);
      element("button", card).setAttribute("aria-expanded", String(active));
      element(".skill-panel", card).inert = !active;
    }
  }
  for (const card of skillCards) {
    const trigger = element("button", card);
    card.addEventListener(
      "pointermove",
      (event) => {
        if (
          hoverSkills.matches &&
          event.pointerType === "mouse" &&
          (event.movementX || event.movementY) &&
          !card.classList.contains("is-open")
        )
          openSkill(card);
      },
      { signal },
    );
    trigger.addEventListener(
      "focus",
      () => {
        if (trigger.matches(":focus-visible")) openSkill(card);
      },
      { signal },
    );
    trigger.addEventListener("click", () => openSkill(card), { signal });
  }

  const skillsSection = element("#skills");
  const skillsCardsRow = element(".skills-cards", skillsSection);
  const skillsHeading = element(".skills-heading", skillsSection);
  const desktopSkills = matchMedia(
    "(min-width: 821px) and (hover: hover) and (pointer: fine)",
  );
  let scrollSkill = -1;
  let skillScrollFrame = 0;
  function updateScrollSkills() {
    skillScrollFrame = 0;
    if (!skillsSection.classList.contains("is-scroll-stepped")) return;
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const padding = parseFloat(getComputedStyle(skillsSection).paddingTop);
    const travel = parseFloat(
      skillsSection.style.getPropertyValue("--skills-travel"),
    );
    const cardOffset =
      skillsHeading.offsetHeight +
      parseFloat(getComputedStyle(skillsCardsRow).marginTop);
    const progress = (16 - sectionTop - padding - cardOffset) / travel;
    const index = Math.max(
      0,
      Math.min(skillCards.length - 1, Math.floor(progress * skillCards.length)),
    );
    if (index !== scrollSkill) {
      scrollSkill = index;
      openSkill(skillCards[index]);
    }
  }
  function configureScrollSkills() {
    const height = document.documentElement.clientHeight;
    const enabled = desktopSkills.matches && !reduced.matches;
    skillsSection.style.setProperty(
      "--skills-travel",
      Math.round(height * 1.15) + "px",
    );

    skillsSection.classList.toggle("is-scroll-stepped", enabled);
    skillsSection.style.setProperty(
      "--skills-row-height",
      skillsCardsRow.offsetHeight +
        parseFloat(getComputedStyle(skillsCardsRow).marginTop) +
        "px",
    );
    scrollSkill = -1;
    updateScrollSkills();
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!skillScrollFrame)
        skillScrollFrame = requestAnimationFrame(updateScrollSkills);
    },
    { passive: true, signal },
  );
  window.addEventListener("resize", configureScrollSkills, { signal });
  reduced.addEventListener("change", configureScrollSkills, { signal });
  desktopSkills.addEventListener("change", configureScrollSkills, { signal });
  configureScrollSkills();

  const outcome = element(".outcome-panel", document);
  if ("IntersectionObserver" in window) {
    const outcomeObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        outcome.classList.add("is-visible");
        if (!reduced.matches) {
          const counts = [
            ...outcome.querySelectorAll<HTMLElement>("[data-count]"),
          ];
          const targets = counts.map((count) => Number(count.dataset.count));
          const start = performance.now();
          function countUp(time: number) {
            if (signal.aborted) return;
            let complete = true;
            counts.forEach((count, index) => {
              const progress = reduced.matches
                ? 1
                : Math.max(0, Math.min(1, (time - start - index * 180) / 2700));
              count.textContent = String(Math.floor(targets[index] * progress));
              if (progress < 1) complete = false;
            });
            if (!complete) requestAnimationFrame(countUp);
          }
          counts.forEach((count) => {
            count.textContent = "0";
          });
          requestAnimationFrame(countUp);
        }
        outcomeObserver.disconnect();
      },
      { threshold: 0.18 },
    );
    outcomeObserver.observe(outcome);
    disposers.push(() => outcomeObserver.disconnect());
  }

  const workflowTrack = element(".workflow-track", outcome);
  const workflowMotion = workflowTrack.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
    { duration: 19000, iterations: Infinity },
  );
  let workflowScroll = window.scrollY;
  let workflowSettle: number | undefined;
  function syncWorkflowMotion() {
    if (reduced.matches) {
      workflowMotion.currentTime = 0;
      workflowMotion.pause();
    } else {
      workflowMotion.play();
    }
  }
  window.addEventListener(
    "scroll",
    () => {
      const current = window.scrollY;
      const delta = current - workflowScroll;
      workflowScroll = current;
      if (reduced.matches || !delta) return;
      workflowMotion.updatePlaybackRate(Math.min(5, 1 + Math.abs(delta) / 12));
      clearTimeout(workflowSettle);
      workflowSettle = window.setTimeout(
        () => workflowMotion.updatePlaybackRate(1),
        150,
      );
    },
    { passive: true, signal },
  );
  reduced.addEventListener("change", syncWorkflowMotion, { signal });
  syncWorkflowMotion();

  const intro = element(".workshop-intro", document);
  const hero = element("#top");
  if ("ResizeObserver" in window) {
    function updateHeroPin() {
      const visibleHeight = document.documentElement.clientHeight;
      intro.style.setProperty(
        "--hero-pin-top",
        Math.min(0, visibleHeight - hero.offsetHeight) + "px",
      );
    }
    updateHeroPin();
    intro.classList.add("is-pinned");
    const heroObserver = new ResizeObserver(updateHeroPin);
    heroObserver.observe(hero);
    disposers.push(() => heroObserver.disconnect());
    window.addEventListener("resize", updateHeroPin, { signal });
  }

  const reel = element(".hero-gallery", document);
  const track = element(".gallery-track", reel);
  const heroVideo = element<HTMLVideoElement>(".workshop-photo");
  if (!reduced.matches) heroVideo.play().catch(() => {});
  reduced.addEventListener(
    "change",
    () => {
      if (reduced.matches) heroVideo.pause();
    },
    { signal },
  );
  let position = window.innerWidth * 0.21;
  let velocity = 0;
  let lastScroll = window.scrollY;
  let lastTime = 0;
  let frame = 0;
  let visible = false;
  const pointer = matchMedia("(hover: hover) and (pointer: fine)");
  function animateReel(time: number) {
    const dt = Math.min(32, time - (lastTime || time));
    lastTime = time;
    const width = (track.firstElementChild as HTMLElement).offsetWidth + 12;
    if (!reel.matches(":hover") || Math.abs(velocity) > 0.08) {
      position =
        (((position + (0.027 + velocity) * dt) % width) + width) % width;
    }
    velocity *= Math.pow(0.93, dt / 16);
    track.style.transform = "translateX(" + -position + "px)";
    frame = requestAnimationFrame(animateReel);
  }
  function syncReel() {
    cancelAnimationFrame(frame);
    lastTime = 0;
    const moving = !reduced.matches && pointer.matches;
    reel.classList.toggle("is-manual", !moving);
    if (!moving) track.style.transform = "";
    if (moving && visible) frame = requestAnimationFrame(animateReel);
  }
  window.addEventListener(
    "scroll",
    () => {
      const current = window.scrollY;
      velocity = Math.max(
        -1.6,
        Math.min(1.6, velocity + (current - lastScroll) * 0.007),
      );
      lastScroll = current;
    },
    { passive: true, signal },
  );
  const reelObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncReel();
  });
  reelObserver.observe(reel);
  disposers.push(() => reelObserver.disconnect());
  reduced.addEventListener("change", syncReel, { signal });
  pointer.addEventListener("change", syncReel, { signal });
  syncReel();

  return () => {
    controller.abort();
    disposers.forEach((dispose) => dispose());
    [
      sequenceFrame,
      priceFrame,
      setupFrame,
      speakerFrame,
      skillScrollFrame,
      frame,
    ].forEach(cancelAnimationFrame);
    clearTimeout(workflowSettle);
    workflowMotion.cancel();
  };
}

export default function WorkshopInteractions({
  className,
}: WorkshopInteractionsProps) {
  useEffect(mountWorkshopInteractions, []);
  return <span className={cn("hidden", className)} aria-hidden="true" />;
}
