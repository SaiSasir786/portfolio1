import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Briefcase,
  Download,
  Signal,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Starfield } from "@/components/Starfield";
import { StatCounter } from "@/components/StatCounter";

import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const expertise = [
  {
    code: "01",
    title: "Machine Learning & AI",
    desc: "Developing predictive models and hybrid CNN-Transformer architectures for speech emotion recognition, achieving 90% accuracy with advanced feature engineering.",
    tags: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "CNNs"],
  },
  {
    code: "02",
    title: "Full-Stack & Web Development",
    desc: "Building production-grade web applications with React, Three.js, Node.js, and Express.js — from 3D observability consoles to e-commerce platforms.",
    tags: ["React.js", "Three.js", "Node.js", "FastAPI", "WebSockets"],
  },
  {
    code: "03",
    title: "Cloud & Scalable Infrastructure",
    desc: "Architecting enterprise-grade applications on AWS EKS with auto-scaling, load balancing, container orchestration, and fault-tolerant microservices.",
    tags: ["AWS EKS", "EC2", "Docker", "Kubernetes", "Datadog"],
  },
  {
    code: "04",
    title: "Data Science & Engineering",
    desc: "Designing data processing frameworks with PostgreSQL, Pandas, and web scraping pipelines — enhancing predictive modeling accuracy and reducing preprocessing time.",
    tags: ["Pandas", "PostgreSQL", "BeautifulSoup", "Selenium", "GridSearchCV"],
  },
];

const projects = [
  {
    slug: "emotion-ser",
    code: "01",
    title: "Emotion-Aware Speech Recognition System",
    desc: "Hybrid CNN-Transformer model for Speech Emotion Recognition achieving 90% accuracy with real-time gTTS feedback.",
    tag: "Machine Learning",
    year: "2025",
    image: projectRov,
    stack: ["TensorFlow", "MFCCs", "Transformers", "gTTS"],
  },
  {
    slug: "aws-voting",
    code: "02",
    title: "Real-Time Voting App on AWS",
    desc: "Enterprise-grade application deployed on AWS EKS with Datadog monitoring, auto-scaling, and MongoDB StatefulSets.",
    tag: "Cloud & DevOps",
    year: "2023",
    image: projectAutovista,
    stack: ["AWS EKS", "EC2", "Datadog", "MongoDB"],
  },
  {
    slug: "maru",
    code: "03",
    title: "AutoVista — Virtual Car Showroom",
    desc: "End-to-end MERN stack e-commerce platform with secure authentication, inventory management, and RESTful microservices.",
    tag: "Web Engineering",
    year: "2023",
    image: projectAutovista,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    slug: "critter",
    code: "04",
    title: "Autonomous Remote-Operated Vehicle",
    desc: "ML-assisted ROV with real-time sensor fusion, wireless control, and computer vision-based obstacle feedback.",
    tag: "Robotics",
    year: "2024",
    image: projectRov,
    stack: ["Arduino", "OpenCV", "Python", "RF"],
  },
  {
    slug: "web",
    code: "05",
    title: "Autonomous Fire-Fighting Robot",
    desc: "Intelligent robotic system for autonomous navigation and fire suppression using sensor fusion and embedded control.",
    tag: "Robotics",
    year: "2023",
    image: projectFire,
    stack: ["Arduino", "L298 Driver", "C++", "Sensors"],
  },
];

const corestack = [
  {
    title: "Machine Learning & AI",
    items: ["TensorFlow", "Keras", "Scikit-learn", "Random Forest", "XGBoost", "CNNs", "Transformers", "NLP", "PCA"],
  },
  {
    title: "Web & Full-Stack",
    items: ["React.js", "Three.js", "Node.js", "Express.js", "FastAPI", "RESTful APIs", "WebSockets"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS (EC2, EKS, S3, RDS)", "Docker", "Kubernetes", "MongoDB", "Auto-Scaling", "Load Balancing"],
  },
  {
    title: "Data Science & Engineering",
    items: ["Pandas", "PostgreSQL", "BeautifulSoup", "Selenium", "Feature Engineering", "GridSearchCV"],
  },
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "NetworkX", "Datadog", "librosa", "MFCCs", "Mel Spectrograms", "gTTS", "GDPR Compliance"],
  },
];

/* ===================== Hero supporting components ===================== */

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="w-10 h-10 rounded-full border border-border bg-surface/30 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-stellar hover:border-stellar/40 transition-colors"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function BigStat({
  value,
  suffix = "",
  label,
  sub,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
  decimals?: number;
}) {
  return (
    <div className="bg-background/60 p-6 lg:p-7 hover:bg-surface/40 transition-colors">
      <div className="font-serif text-4xl lg:text-5xl text-foreground tracking-tight tabular-nums">
        {decimals > 0 ? (
          <>
            <StatCounter value={Math.floor(value)} />
            <span className="text-stellar">
              .{Math.round((value - Math.floor(value)) * Math.pow(10, decimals))}
            </span>
            {suffix}
          </>
        ) : (
          <StatCounter value={value} suffix={suffix} />
        )}
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      {sub && (
        <p
          className="mt-1.5 text-[12px] text-muted-foreground/80"
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      )}
    </div>
  );
}

function DossierCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-5 hover:bg-surface transition-colors">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
        <Icon className="w-3.5 h-3.5 text-stellar" />
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function ContactLink({
  href,
  icon: Icon,
  external,
  primary,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        primary
          ? "group inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
          : "group inline-flex items-center gap-2.5 rounded-full border border-border-bright px-5 py-3 text-sm text-foreground hover:bg-surface transition-colors"
      }
    >
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </a>
  );
}

/* ===================== Page ===================== */

function Home() {
  return (
    <>
      {/* ============ HERO — Vallabhaneni centered serif × Patil HUD signal × Dewan minimalism ============ */}
      <section className="relative min-h-[100vh] flex flex-col justify-center pt-28 pb-20 overflow-hidden cosmos-bg">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_30%,black,transparent_90%)]">
          <Starfield density={170} />
        </div>
        <div className="absolute inset-0 grid-hairline opacity-[0.22] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent_75%)]" />
        <div className="absolute inset-0 ambient-top pointer-events-none" />

        <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 w-full">
          {/* ===== Patil-style top HUD strip ===== */}
          <div className="flex items-center justify-between mb-14 lg:mb-20 animate-fade-up">
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-stellar animate-pulse-soft" />
              <span className="hidden sm:inline">Bengaluru, IND · 12.97°N · 77.59°E</span>
              <span className="sm:hidden">IND · 12.97°N</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
              <span>Portfolio · v3.0</span>
              <span className="h-3 w-px bg-border" />
              <span>2026 / Q1</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-beacon/30 bg-beacon/5 text-[10px] font-mono uppercase tracking-[0.22em] text-beacon">
              <Signal className="w-3 h-3" />
              <span className="hidden sm:inline">Signal · Available</span>
              <span className="sm:hidden">Available</span>
            </div>
          </div>

          {/* ===== Centered name block — Vallabhaneni style ===== */}
          <div className="text-center max-w-6xl mx-auto">
            <p
              className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.42em] text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              AI & ML Engineer · Full-Stack Developer
            </p>

            <h1
              className="mt-7 font-serif font-light text-[56px] sm:text-7xl md:text-8xl lg:text-[128px] xl:text-[152px] leading-[0.95] tracking-[-0.035em] text-foreground animate-fade-up"
              style={{ animationDelay: "0.4s", fontVariationSettings: "'opsz' 144" }}
            >
              Sai Sasir{" "}
              <em className="italic font-serif font-normal text-stellar" style={{ fontVariationSettings: "'opsz' 144" }}>Kosuri</em>
            </h1>

            {/* Single vertical accent bar */}
            <div
              className="flex justify-center mt-8 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <span className="block w-[2px] h-10 bg-stellar shadow-[0_0_18px_rgba(231,180,90,0.5)]" />
            </div>

            <p
              className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              B.Tech Computer Science · VIT (GPA 8.22/10) — I build
              distributed computing systems, scalable full-stack applications,
              and production ML pipelines.
            </p>

            {/* Vallabhaneni-style chips */}
            <div
              className="mt-9 flex flex-wrap justify-center gap-2 animate-fade-up"
              style={{ animationDelay: "0.75s" }}
            >
              {["React · Three.js", "AWS · Docker · K8s", "TensorFlow · Keras", "FastAPI · WebSockets", "PostgreSQL · MongoDB"].map((s) => (
                <span
                  key={s}
                  className="text-[12px] px-3.5 py-1.5 rounded-full border border-border bg-surface/40 backdrop-blur-sm text-foreground/85"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="mt-11 flex flex-wrap justify-center items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.85s" }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-stellar text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-stellar/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-border-bright bg-surface/40 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                View selected work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-1.5 ml-1">
                <SocialIcon href="https://github.com/saisasir" icon={Github} label="GitHub" />
                <SocialIcon
                  href="https://www.linkedin.com/in/saisasirkosuri/"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialIcon href="mailto:saisasir99@gmail.com" icon={Mail} label="Email" />
              </div>
            </div>
          </div>

          {/* ===== Bottom telemetry strip ===== */}
          <div
            className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border bg-surface/30 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <BigStat value={4} suffix="+" label="Years building" sub="AI, cloud &amp; full-stack" />
            <BigStat value={5} suffix="+" label="Production projects" sub="ML, web, cloud, robotics" />
            <BigStat value={8.22} suffix=" / 10" label="GPA" sub="VIT — Computer Science" decimals={2} />
            <BigStat value={3} label="Certifications" sub="AWS · Oracle · Duke" />
          </div>
        </div>
      </section>


      {/* ============ WORK — Vallabhaneni numbered list × Patil cinematic preview ============ */}
      <Section
        id="work"
        index="01 / 04"
        eyebrow="Selected Work"
        title="Recent projects across AI, full-stack, and robotics."
        description="A focused selection of systems I've designed and shipped end-to-end — from research prototype to production deployment."
      >
        <div className="border-t border-border">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative grid grid-cols-12 items-center gap-6 py-8 lg:py-10 border-b border-border hover:bg-surface/30 transition-colors px-2"
            >
              {/* Number */}
              <div className="col-span-2 lg:col-span-1 font-mono text-[11px] text-stellar tabular-nums tracking-[0.18em]">
                / {p.code}
              </div>

              {/* Title + tag */}
              <div className="col-span-10 lg:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-foreground group-hover:text-stellar transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {p.tag} · {p.year}
                </p>
              </div>

              {/* Stack — fades out on hover so the preview image is unobstructed */}
              <div className="hidden lg:flex col-span-5 flex-wrap gap-1.5 justify-end transition-opacity duration-300 group-hover:opacity-0">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="col-span-12 lg:col-span-1 flex justify-end">
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-stellar group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Patil-style cinematic hover preview — desktop only */}
              <div className="hidden lg:block pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 w-64 aspect-[16/10] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 z-10">
                <div className="relative w-full h-full rounded-md overflow-hidden border border-beacon/30 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-stellar/10" />
                  <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-beacon/70" />
                  <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-beacon/70" />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-beacon/70" />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-beacon/70" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ EXPERTISE ============ */}
      <Section
        id="expertise"
        index="02 / 04"
        eyebrow="Expertise"
        title="Where I focus."
        description="Core domains where I architect, build, and deploy scalable systems across the full ML, cloud, and software stack."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {expertise.map(({ code, title, desc, tags }) => (
            <div
              key={title}
              className="group relative bg-background p-8 lg:p-10 hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                  / {code}
                </span>
                <span className="h-px flex-1 ml-6 bg-gradient-to-r from-border to-transparent" />
              </div>
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-3 text-foreground">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ CORESTACK — Patil-style grouped grid ============ */}
      <Section
        id="stack"
        index="03 / 04"
        eyebrow="Corestack"
        title="Technical stack."
        description="The frameworks, platforms, and languages I use to build distributed computing systems and production applications."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {corestack.map((cat) => (
            <div
              key={cat.title}
              className="bg-background p-7 lg:p-8 hover:bg-surface/40 transition-colors relative"
            >
              <div className="absolute top-7 right-7 text-[9px] font-mono uppercase tracking-[0.22em] text-stellar/70">
                CORE
              </div>
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-stellar" />
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/85 hover:border-stellar/40 hover:text-stellar transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ ABOUT ============ */}
      <Section
        id="about"
        index="04 / 04"
        eyebrow="About"
        title="Computer Science graduate building scalable systems."
      >
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-serif italic">
              "Computer Science graduate with expertise in distributed computing
              environments, scalable systems, and full-stack development — with a
              proven ability to solve complex problems through cross-disciplinary collaboration."
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm an AI and ML Engineer at{" "}
              <span className="text-foreground">Gannetz Technologies</span>,
              where I engineered a 3D database observability console using React,
              Three.js, and InstancedMesh to render 1,000+ nodes. I built an
              autonomous schema engine fusing{" "}
              <span className="text-foreground">Google Gemini LLM</span> with
              NetworkX Louvain algorithms and PCA embeddings, achieving 95%
              accuracy in organizing logical domains.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My foundation in cloud infrastructure, microservices architecture,
              and machine learning gives me a unique perspective on building
              fault-tolerant systems. I've also worked as a Data Science Intern
              at SkillDzire, developing ML models for cardiovascular disease
              prediction achieving 87% accuracy.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <DossierCard icon={GraduationCap} label="Education">
              <div className="text-foreground font-medium">
                Vellore Institute of Technology
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                B.Tech, Computer Science · 2021–2025
              </div>
              <div className="text-[12px] text-muted-foreground mt-1">
                Chennai, Tamil Nadu
              </div>
              <div className="text-[12px] text-stellar mt-2 font-mono tabular-nums">
                GPA · 8.22 / 10
              </div>
              <div className="text-[11px] text-muted-foreground mt-2">
                DSA, AI, Database Systems, Networking
              </div>
            </DossierCard>
            <DossierCard icon={Award} label="Certifications">
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>· Java Programming — Duke University</li>
                <li>· Oracle Cloud Infrastructure 2025 — AI Foundations</li>
                <li>· AWS Certified Cloud Practitioner</li>
              </ul>
            </DossierCard>
            <DossierCard icon={Briefcase} label="Experience">
              <div className="text-sm text-foreground font-medium">
                AI & ML Engineer
              </div>
              <div className="text-[12px] text-muted-foreground mt-1">
                Gannetz Technologies · Hyderabad
              </div>
              <div className="text-[12px] text-muted-foreground">
                Oct 2025 – Present
              </div>
              <div className="text-sm text-foreground font-medium mt-3">
                Data Science Intern
              </div>
              <div className="text-[12px] text-muted-foreground mt-1">
                SkillDzire · Nov 2024 – Dec 2024
              </div>
            </DossierCard>
          </div>
        </div>
      </Section>

      {/* ============ CONTACT ============ */}
      <section
        id="contact"
        className="relative scroll-mt-20 py-28 lg:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 ambient-top pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-10 md:p-16 lg:p-20 relative overflow-hidden noise">
            <div className="relative max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Contact · 05
              </p>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-foreground">
                Let's build something
                <br />
                <em className="italic text-stellar">together.</em>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                LLM-powered products, ML infrastructure, or experimental
                agents — I'd love to hear about what you're working on.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <ContactLink href="mailto:saisasir99@gmail.com" icon={Mail} primary>
                  saisasir99@gmail.com
                </ContactLink>
                <ContactLink href="https://github.com/saisasir" icon={Github} external>
                  github.com/saisasir
                </ContactLink>
                <ContactLink
                  href="https://www.linkedin.com/in/saisasirkosuri/"
                  icon={Linkedin}
                  external
                >
                  linkedin/saisasirkosuri
                </ContactLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
