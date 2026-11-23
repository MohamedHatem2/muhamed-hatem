import { ArrowRight, UsersRound } from "lucide-react";
import { Link } from "react-router";
import { profile, technologies } from "../../data/portfolio";
import TechLogo from "../ui/TechLogo";
import DeveloperCard from "./DeveloperCard";

function SketchArrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 70 85"
      fill="none"
      className={`motion-sketch ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 5c35 17 43 43 24 68m0 0 3-20m-3 20 18-8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroVisual() {
  return (
    <div
      data-reveal="zoom"
      className="motion-portrait relative mx-auto h-[400px] w-full max-w-[650px] min-[380px]:h-[450px] sm:h-[560px] lg:h-[min(520px,calc(100svh-152px))] lg:max-w-[600px]"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[14%] right-[15%] h-[68%] w-[57%] -skew-x-25 rounded-[70px] border border-primary/10 bg-gradient-to-b from-glow-strong to-glow" />
        <div className="absolute top-[6%] right-[9%] h-[80%] w-[33%] -skew-x-30 rounded-[65px] bg-glow" />
        <div className="absolute right-[17%] bottom-[4%] h-[47%] w-[63%] -skew-x-25 rounded-[60px] bg-gradient-to-br from-glow-strong to-glow" />
        <div className="absolute top-[25%] left-[-2%] h-[180px] w-[180px] opacity-60 [background-image:radial-gradient(var(--color-dot)_1.5px,transparent_1.5px)] [background-size:17px_17px]" />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[4%] left-[2%] z-20 -rotate-7 font-handwriting text-[26px] leading-[0.95] text-accent sm:top-[2%] sm:left-[8%] sm:text-[34px] lg:left-[3%] lg:text-[28px]"
      >
        Understand
        <br />
        Build
        <br />
        Automate
        <br />
        Improve.
        <SketchArrow className="absolute top-12 left-[86%] h-20 w-16 rotate-[-8deg]" />
      </div>

      <DeveloperCard />

      <img
        src={profile.image}
        alt="Mohamed Hatem, Product and AI Automation"
        width="1122"
        height="1402"
        fetchPriority="high"
        className="absolute top-0 right-0 z-10 h-[76%] w-[80%] rounded-[2rem] object-cover object-top [mask-image:linear-gradient(to_bottom,black_85%,transparent)] sm:top-auto sm:right-[8%] sm:bottom-[4%] sm:h-[92%] sm:w-[78%]"
      />

      <ul
        aria-label="Technologies I work with"
        className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-2 gap-2.5 sm:inset-x-auto sm:top-[10%] sm:right-[-2%] sm:bottom-auto sm:flex sm:flex-col lg:right-[-4%] lg:gap-2"
      >
        {technologies.map(({ name, id }, index) => (
          <li
            key={id}
            data-glass
            data-reveal="slide"
            data-reveal-delay={160 + index * 70}
            style={{ "--float-delay": `${index * -1.4}s` }}
            className="motion-float relative flex h-11 items-center gap-2 rounded-2xl border border-border bg-surface/90 px-3 shadow-card backdrop-blur-sm sm:h-14 sm:w-[160px] sm:gap-3 sm:px-4 lg:h-[clamp(2.25rem,6.5svh,3rem)] lg:w-[136px] lg:gap-2 lg:px-3"
          >
            <TechLogo
              name={id}
              className="size-6 shrink-0 sm:size-8 lg:size-7"
            />
            <span className="text-[10px] font-semibold whitespace-nowrap text-ink sm:text-xs lg:text-[11px]">
              {name}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/experience"
        data-glass
        data-reveal="rise"
        data-reveal-delay="320"
        className="motion-float group absolute right-0 bottom-[10%] z-20 hidden w-[148px] rounded-[22px] border border-border bg-surface/95 p-5 shadow-card transition-shadow hover:shadow-card-hover sm:block lg:right-[-4%] lg:bottom-[18%] lg:w-[136px] lg:p-3.5"
      >
        <UsersRound
          size={30}
          strokeWidth={1.7}
          className="mb-3 text-accent lg:mb-2 lg:size-6"
          aria-hidden="true"
        />
        <p className="text-xs leading-relaxed font-bold sm:text-sm lg:text-xs">
          AI Automation
          <br />
          Builder
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted">ITI</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-surface-soft text-accent transition-transform group-hover:translate-x-1">
            <ArrowRight size={17} aria-hidden="true" />
          </span>
        </div>
      </Link>

      <div
        aria-hidden="true"
        className="absolute right-0 bottom-[-5%] z-20 hidden -rotate-8 font-handwriting text-[30px] leading-[0.9] text-accent sm:block lg:right-[-2%] lg:bottom-0 lg:text-[26px]"
      >
        Understand
        <br />
        Build
        <br />
        <span className="ml-4">Improve</span>
        <span className="mt-2 block h-0.5 w-24 -rotate-5 rounded-full bg-primary/60" />
      </div>
    </div>
  );
}
