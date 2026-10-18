import { CalendarClock, Cpu, FolderSearch, Search } from "lucide-react";
import "./Landing.css";

const benefitCards = [
  {
    icon: FolderSearch,
    title: "Lost in the clutter.",
    description:
      "Too many files. Too many folders. Not enough time to find what matters.",
  },
  {
    icon: CalendarClock,
    title: "Deadlines hide.",
    description:
      "Critical dates sit inside documents instead of on your calendar.",
  },
  {
    icon: Search,
    title: "Answers take too long.",
    description:
      "Finding one name, amount, or clause can mean reading an entire file.",
  },
];

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <article className="info-card">
      <Icon className="card-icon" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function Header() {
  return (
    <header className="papertrail-header">
      <div className="papertrail-header-inner">
        <a className="papertrail-brand" href="/" aria-label="PaperTrail home">
          PaperTrail
        </a>

        <nav className="papertrail-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
        </nav>

        <a className="papertrail-cta" href="#start">
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="papertrail-hero" aria-labelledby="papertrail-title">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/gemini_generated_video_275ed14b.mp4.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-content">
        <div className="ai-badge">
          <Cpu className="ai-pill-icon" aria-hidden="true" />
          <span>AI-powered document management</span>
        </div>

        <h1 id="papertrail-title" className="hero-title">
          <span className="hero-title-accent">Your documents.</span>
          <span>Under control.</span>
        </h1>

        <p className="hero-subtitle">
          Organize documents, find information instantly, and stay ahead of
          important deadlines — all in one workspace.
        </p>

        <div className="hero-actions">
          <a href="#start" className="primary-button">
            Get Started
          </a>
          <a href="#explore" className="secondary-button">
            Explore
          </a>
        </div>
      </div>
    </main>
  );
}

function Features() {
  return (
    <section className="papertrail-features" id="features">
      <div className="feature-shell">
        <div className="eyebrow">Sound familiar?</div>

        <h2>Important things shouldn&apos;t get lost in documents.</h2>

        <p className="feature-intro">
          A contract buried in a folder. An invoice nobody remembers. A deadline
          hiding on page 14. The information is there — finding it shouldn&apos;t
          be the hard part.
        </p>

        <div className="cards" aria-label="PaperTrail benefits">
          {benefitCards.map((card) => (
            <BenefitCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="papertrail-page">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
