import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";
import projectAutovista from "@/assets/project-autovista.jpg";
import projectFire from "@/assets/firefighter.jpg";
import projectRov from "@/assets/rov.jpg";

type Media =
  | { type: "image"; src: string; alt?: string; caption?: string; aspect?: string }
  | { type: "gif"; src: string; alt?: string; caption?: string; aspect?: string }
  | { type: "youtube"; id: string; title?: string; caption?: string };

type Section = {
  heading: string;
  body: string;
  media?: Media[]; // optional media displayed under this section
};

type Project = {
  slug: string;
  code: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  image: string; // hero
  stack: string[];
  role: string; // kept in data for reference, not rendered
  duration: string; // kept in data for reference, not rendered
  overview: string;
  overviewMedia?: Media[]; // media right under overview
  gallery?: Media[]; // end-of-page gallery
  sections: Section[];
  highlights: string[];
  links?: { label: string; href: string; icon?: "github" | "external" | "youtube" }[];
};

const PROJECTS: Record<string, Project> = {
  "emotion-ser": {
    slug: "emotion-ser",
    code: "01",
    title: "Emotion-Aware Automated Response System for Speech Recognition",
    tag: "Machine Learning · Deep Learning",
    year: "2025",
    role: "ML Engineer — model architecture, audio processing, web interface",
    duration: "Jan 2025 – Apr 2025",
    summary:
      "A hybrid CNN-Transformer model for Speech Emotion Recognition achieving 90% accuracy across multiple datasets with real-time contextual verbal feedback.",
    image: projectRov,
    stack: ["TensorFlow", "Keras", "MFCCs", "Mel Spectrograms", "ZCR", "RMSE", "gTTS", "Python"],
    overview:
      "Designed a hybrid CNN-Transformer model for Speech Emotion Recognition (SER) using MFCCs, Mel spectrograms, ZCR, and RMSE features. The system achieves 90% accuracy across RAVDESS, CREMA-D, TESS, and SAVEE datasets with data augmentation, and includes a real-time emotion-aware feedback system.",
    sections: [
      {
        heading: "Model Architecture",
        body: "The system uses a hybrid CNN-Transformer architecture that combines convolutional feature extraction with transformer attention mechanisms. Audio features including MFCCs, Mel spectrograms, Zero Crossing Rate (ZCR), and Root Mean Square Energy (RMSE) are extracted and fed into the model for multi-class emotion classification.",
      },
      {
        heading: "Dataset & Training",
        body: "The model was trained and validated across four major speech emotion datasets: RAVDESS, CREMA-D, TESS, and SAVEE. Data augmentation techniques were applied to increase robustness and generalization, achieving a combined accuracy of 90% across all datasets.",
      },
      {
        heading: "Real-Time Feedback",
        body: "Integrated a real-time emotion-aware feedback system using Google Text-to-Speech (gTTS) to generate contextual verbal responses based on predicted emotions. This significantly enhances human–computer interaction by providing emotionally intelligent replies.",
      },
      {
        heading: "Web Interface",
        body: "Created a responsive web interface with real-time audio recording, live visualization of speech patterns, prediction display, and automated feedback generation for an intuitive user experience.",
      },
    ],
    highlights: [
      "Achieved 90% accuracy across RAVDESS, CREMA-D, TESS, and SAVEE datasets.",
      "Designed hybrid CNN-Transformer architecture with MFCCs and Mel spectrogram features.",
      "Integrated real-time emotion-aware feedback using Google Text-to-Speech (gTTS).",
      "Built responsive web interface with live audio recording and prediction display.",
    ],
  },
  "aws-voting": {
    slug: "aws-voting",
    code: "02",
    title: "Deployment of Real-Time Voting Application on AWS",
    tag: "Cloud · DevOps",
    year: "2023",
    role: "Cloud Engineer — infrastructure, orchestration, monitoring",
    duration: "Jun 2023 – Dec 2023",
    summary:
      "Enterprise-grade application deployed on AWS EKS with Datadog monitoring, auto-scaling, and fault-tolerant MongoDB StatefulSets.",
    image: projectAutovista,
    stack: ["AWS EKS", "EC2", "S3", "Datadog", "MongoDB", "Docker", "Kubernetes"],
    overview:
      "Designed and deployed an enterprise-grade real-time voting application using AWS EKS for container orchestration and EC2 for frontend hosting with cloud-based storage. The system implements auto-scaling to handle thousands of concurrent users.",
    sections: [
      {
        heading: "Infrastructure & Deployment",
        body: "The application is deployed using AWS EKS for container orchestration and EC2 for frontend hosting. Cloud-based storage ensures persistent data availability. Auto-scaling policies dynamically adjust resources to handle thousands of concurrent users during peak voting periods.",
      },
      {
        heading: "Monitoring & Reliability",
        body: "Implemented a comprehensive monitoring stack with Datadog for application health monitoring, load balancing, and service policies. MongoDB StatefulSets ensure fault-tolerant data persistence across cluster restarts and node failures.",
      },
      {
        heading: "Scalability & Disaster Recovery",
        body: "Built scalable storage, indexing, and query systems that are fault-tolerant, low cost, and easy to manage. The architecture achieves auto-scaling and disaster recovery in an agile environment through automated health checks and rolling deployments.",
      },
    ],
    highlights: [
      "Deployed enterprise-grade application using AWS EKS for container orchestration.",
      "Implemented Datadog monitoring for application health and load balancing.",
      "Built fault-tolerant systems with MongoDB StatefulSets.",
      "Achieved auto-scaling and disaster recovery in agile environment.",
    ],
  },
  maru: {
    slug: "maru",
    code: "03",
    title: "AutoVista — Virtual Car Showroom Website (MERN Stack)",
    tag: "Web Dev · MERN",
    year: "2023",
    role: "Full-stack developer — MERN, UI/UX, deployment",
    duration: "Aug 2023 – Nov 2023",
    summary:
      "End-to-end e-commerce platform built with MERN stack handling complex transactions, inventory management, and real-time search.",
    image: projectAutovista,
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    overview:
      "AutoVista is an end-to-end e-commerce platform handling complex user transactions, inventory management, and real-time search functionality with advanced filtering using scalable architecture principles.",
    sections: [
      {
        heading: "Overview & Role",
        body: "Built the entire platform end-to-end as a solo project — designing the data model, building RESTful APIs in Express.js, the React.js frontend with state management, and deploying it live.",
      },
      {
        heading: "Backend Architecture",
        body: "Engineered scalable backend services with Node.js and Express.js, implementing secure authentication, payment integration, and RESTful API design patterns in microservices architecture.",
      },
      {
        heading: "Frontend & UX",
        body: "Delivered a responsive user experience with React.js frontend, ensuring cross-device compatibility and optimal performance. The interface includes dynamic inventory browsing, search, and filtering capabilities.",
      },
    ],
    highlights: [
      "Built end-to-end e-commerce platform handling complex user transactions.",
      "Engineered scalable backend with Node.js and Express.js.",
      "Implemented secure authentication and payment integration.",
      "Delivered responsive React.js frontend with cross-device compatibility.",
    ],
    links: [
      { label: "Live Site", href: "https://autovista.vercel.app/", icon: "external" },
      { label: "Source", href: "https://github.com/saisasir", icon: "github" },
    ],
  },
  critter: {
    slug: "critter",
    code: "03",
    title: "Autonomous Remote Operated Vehicle",
    tag: "Robotics · Embedded",
    year: "2024",
    role: "Hardware + firmware — chassis, electronics, CV pipeline",
    duration: "10 weeks",
    summary:
      "An ML-assisted ROV with real-time sensor fusion, wireless control, and computer-vision feedback.",
    image: projectRov,
    stack: ["Arduino", "Bluetooth Module", "Python", "OpenCV", "RF"],
    overview:
      "A four-wheeled remote-operated vehicle controlled over Bluetooth, with onboard sensors providing telemetry and an ML-assisted obstacle awareness layer. Built around an Arduino UNO with a motor driver, custom chassis, and modular firmware.",
    sections: [
      {
        heading: "Problem",
        body: "The goal was to build a low-cost, modular ROV platform that could be controlled wirelessly and extended with ML-based perception — useful for inspection, prototyping, and learning.",
      },
      {
        heading: "Mechanical Design",
        body: "I designed and prototyped the chassis from scratch — a four-wheel-drive layout powered by 18650 lithium cells, with the motor driver and microcontroller mounted on a vibration-dampened deck. The chassis is rigid enough for off-road driving while remaining lightweight.",
      },
      {
        heading: "Control & Wireless Protocol",
        body: "Control is handled via a Bluetooth module paired with a mobile companion app. I designed a compact command protocol that maps directional inputs and speed adjustments to PWM signals on the L298 motor driver — supporting differential steering for tight turns.",
      },
      {
        heading: "Computer Vision Layer",
        body: "An OpenCV pipeline (running on a host machine, with a streaming camera onboard) detects obstacles and drivable paths in real-time. This gives the operator a 'second pair of eyes' and lays groundwork for autonomous navigation in future iterations.",
      },
    ],
    highlights: [
      "Designed and prototyped the chassis, wiring, and power-distribution.",
      "Implemented a Bluetooth control protocol with mobile companion commands.",
      "Integrated motor-driver control with PWM speed regulation.",
      "Added a CV pipeline for obstacle awareness using OpenCV.",
    ],
  },
  web: {
    slug: "web",
    code: "04",
    title: "Fire Fighting Robot",
    tag: "Robotics · Embedded",
    year: "2023",
    role: "Hardware + firmware — sensors, actuators, control loop",
    duration: "6 weeks",
    summary:
      "An autonomous fire-detection robot with flame sensing, water-pump actuation, and motor control.",
    image: projectFire,
    stack: ["Arduino", "L298 Motor Driver", "Flame Sensor", "Water Pump", "C++"],
    overview:
      "An Arduino-based autonomous robot that detects flames using IR flame sensors and actuates a pump-fed water nozzle to extinguish them. Designed for rapid prototyping and demonstrating real-world embedded control loops.",
    sections: [
      {
        heading: "Problem",
        body: "Early fire detection and suppression in confined spaces (server rooms, kitchens, labs) is critical. The aim was to prototype a low-cost autonomous unit that can patrol, detect a flame, navigate to it, and suppress it without human input.",
      },
      {
        heading: "Sensing & Detection",
        body: "An array of three IR flame sensors mounted at different angles provides directional flame detection. The firmware applies thresholding and angle estimation to compute a heading toward the flame source — giving the robot enough information to drive toward it accurately.",
      },
      {
        heading: "Drive & Suppression",
        body: "The robot uses an L298 motor driver controlled via PWM for differential steering on a 4-wheel drive chassis powered by 18650 cells. Once aligned with the flame, a relay-driven 5V water pump activates the suppression nozzle, which is aimed using a small servo for fine adjustment.",
      },
      {
        heading: "Control Loop",
        body: "The main loop runs at ~50 Hz on an Arduino UNO — sampling the sensor array, updating motor commands, and managing the pump activation state machine. The firmware is written in modular C++ for easy extension with additional sensors or actuators.",
      },
    ],
    highlights: [
      "Custom chassis with 4-wheel drive powered by 18650 cells.",
      "L298 motor driver controlled via PWM for differential steering.",
      "Flame sensor array with thresholded detection and angle estimation.",
      "Servo-aimed water pump with relay-driven activation.",
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — Sai Sasir K" }] };
    const title = `${p.title} — Sai Sasir K`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
          404
        </p>
        <h1 className="text-3xl font-medium tracking-tight mb-4">
          Project not found
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-2 text-sm text-foreground hover:text-stellar transition-colors link-underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function MediaBlock({ media }: { media: Media }) {
  if (media.type === "youtube") {
    return (
      <figure className="rounded-xl border border-border bg-deep overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${media.id}`}
            title={media.title ?? "YouTube video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {media.caption && (
          <figcaption className="px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="rounded-xl border border-border bg-deep overflow-hidden">
      <div className={`overflow-hidden ${media.aspect ?? "aspect-[16/9]"}`}>
        <img
          src={media.src}
          alt={media.alt ?? ""}
          loading="lazy"
          className="w-full h-full object-cover opacity-95"
        />
      </div>
      {media.caption && (
        <figcaption className="px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

function MediaGrid({ items }: { items: Media[] }) {
  if (!items.length) return null;
  return (
    <div
      className={`mt-6 grid gap-4 ${
        items.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"
      }`}
    >
      {items.map((m, i) => (
        <MediaBlock key={i} media={m} />
      ))}
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="relative pt-32 pb-24">
      <div className="absolute inset-0 ambient-top pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground transition-colors mb-14"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All projects
        </Link>

        <div className="flex items-center gap-3 mb-6 text-[11px] text-muted-foreground font-mono">
          <span className="tabular-nums">/ {project.code}</span>
          <span className="w-1 h-1 rounded-full bg-border-bright" />
          <span>{project.tag}</span>
          <span className="w-1 h-1 rounded-full bg-border-bright" />
          <span className="tabular-nums">{project.year}</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">
          {project.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {project.summary}
        </p>

        {project.links && (
          <div className="flex flex-wrap gap-3 mt-8">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-bright px-5 py-2.5 text-sm text-foreground hover:bg-surface transition-colors"
              >
                {l.icon === "github" ? (
                  <Github className="w-4 h-4" />
                ) : l.icon === "youtube" ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* Hero image */}
        <div className="mt-14 rounded-xl border border-border bg-deep overflow-hidden">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Overview
              </p>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                {project.overview}
              </p>
              {project.overviewMedia && <MediaGrid items={project.overviewMedia} />}
            </div>

            {project.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-foreground">
                  {s.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {s.body}
                </p>
                {s.media && <MediaGrid items={s.media} />}
              </div>
            ))}

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Key Contributions
              </p>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={h} className="flex gap-5 text-foreground/90">
                    <span className="font-mono text-[11px] text-stellar tabular-nums mt-1.5 flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  Gallery
                </p>
                <MediaGrid items={project.gallery} />
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-surface/40 p-6 sticky top-24">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 pb-3 border-b border-border">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
