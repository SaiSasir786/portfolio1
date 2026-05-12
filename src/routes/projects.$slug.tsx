import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";
import projectFire from "@/assets/firefighter.jpg";
import fire1 from "@/assets/fire1 (1).gif";
import fire2 from "@/assets/fire2 (1).jpg";
import fire3 from "@/assets/fire3 (1).gif";
import fire4 from "@/assets/fire4 (1).gif";
import remotecrl1 from "@/assets/remotecrl (1).jpg";
import remotecrl2 from "@/assets/remotecrl2 (1).jpg";
import remotecrl3 from "@/assets/remotecrl3 (1).jpg";
import remotecrl4 from "@/assets/remotecrl4 (1).jpg";
import rmcl1 from "@/assets/rmcl1 (1).gif";
import rmcl2 from "@/assets/rmcl2 (1).gif";
import rmcl3 from "@/assets/rmcl3 (1).gif";
import rmcl4 from "@/assets/rmcl4 (1).gif";
import avbrand from "@/assets/avbrand (1).png";
import avcar from "@/assets/avcar (1).png";
import avgif from "@/assets/avgif (1).gif";
import avhome from "@/assets/avhome (1).png";
import avll from "@/assets/avll (1).png";
import avov from "@/assets/avov (1).png";
import avy from "@/assets/avy (1).png";
import emo1 from "@/assets/emo1.png";
import emo2 from "@/assets/emo2.png";
import emo3 from "@/assets/emo3.png";
import emo4 from "@/assets/emo4.png";
import emo5 from "@/assets/emo5.png";
import aws1 from "@/assets/aws1.png";
import codesense1 from "@/assets/codesense1.png";
import codesense2 from "@/assets/codesense2.jpg";
import codesense3 from "@/assets/codesense3.png";

type Media =
  | { type: "image"; src: string; alt?: string; caption?: string; aspect?: string; fit?: string }
  | { type: "gif"; src: string; alt?: string; caption?: string; aspect?: string; fit?: string }
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
  heroFit?: string; // added to control hero image fit
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
    tag: "Affective Computing",
    year: "2025",
    role: "ML Engineer — model architecture, audio processing, web interface",
    duration: "Jan 2025 – Apr 2025",
    summary:
      "A hybrid deep learning architecture integrating CNNs with Transformer encoders for robust Speech Emotion Recognition.",
    image: emo1,
    stack: ["PyTorch", "CNN", "Transformer", "MFCC", "gTTS", "Python"],
    overview:
      "This project introduces a hybrid deep learning architecture that integrates Convolutional Neural Networks (CNNs) with Transformer encoders to effectively model both local and global patterns within speech signals. The system is designed to advance robust and empathetic Speech Emotion Recognition (SER) systems suitable for real-world applications.",
    sections: [
      {
        heading: "Introduction",
        body: "Speech Emotion Recognition (SER) is a critical component in the development of emotionally intelligent and responsive human-computer interaction systems. Traditional approaches often fail to capture complex temporal and spectral relationships. Deep learning models, particularly hybrid architectures, offer a powerful alternative by automatically learning discriminative representations from raw or preprocessed audio inputs.",
        media: [
          { type: "image", src: emo2, caption: "System Overview" },
        ]
      },
      {
        heading: "Proposed Methodology",
        body: "The model processes 2D feature matrices extracted from preprocessed audio signals, such as MFCC, delta coefficients, Mel spectrogram, ZCR, RMSE, and roll-off features. The architecture combines a 2-layer CNN block for local feature extraction with a 2-layer Transformer encoder for modeling long-range dependencies and contextual relationships.",
        media: [
          { type: "image", src: emo3, caption: "Model Architecture" },
        ]
      },
      {
        heading: "Emotion-Aware Response System",
        body: "Beyond classification, the system incorporates an emotion-aware response module using Google Text-to-Speech (gTTS). This transforms the system from a passive recognizer into an interactive agent capable of generating contextually appropriate audio feedback based on the detected emotional state.",
        media: [
          { type: "image", src: emo4, caption: "Response System Output" },
        ]
      },
      {
        heading: "Results and Evaluation",
        body: "The system was evaluated on four widely adopted emotional speech datasets—RAVDESS, CREMA-D, TESS, and SAVEE. The hybrid CNN-Transformer model consistently achieved superior performance across multiple emotion classes.",
        media: [
          { type: "image", src: emo5, caption: "Confusion Matrix" },
        ]
      },
    ],
    gallery: [
      { type: "image", src: emo1, caption: "Project Poster", fit: "contain" },
      { type: "image", src: emo2, caption: "System Pipeline", fit: "contain" },
      { type: "image", src: emo3, caption: "Architecture Details", fit: "contain" },
    ],
    highlights: [
      "Achieved high accuracy across four benchmark datasets.",
      "Hybrid CNN-Transformer architecture for local and global feature modeling.",
      "Integrated real-time emotion-aware feedback using Google Text-to-Speech (gTTS).",
      "Outperformed CNN-LSTM baseline by approximately 29%.",
    ],
  },
  "codesense-mini": {
    slug: "codesense-mini",
    code: "02",
    title: "CodeSense Mini: AI-Powered Development Assistant",
    tag: "AI · Developer Tools",
    year: "2024",
    role: "Full-stack Developer — AI integration, vector search, UI",
    duration: "Hackathon Project",
    summary:
      "An AI-powered development assistant that analyzes code errors and provides contextual solutions using TiDB Serverless vector search and Gemini AI.",
    image: codesense1,
    stack: ["Next.js", "Gemini API", "TiDB Serverless", "TypeScript", "Tailwind CSS"],
    overview:
      "CodeSense Mini is an AI-powered development assistant that instantly analyzes code errors and provides intelligent, contextual solutions through a sophisticated multi-step agentic workflow. It combines TiDB's vector search capabilities with AI reasoning to create a truly intelligent debugging assistant.",
    sections: [
      {
        heading: "Inspiration",
        body: "Every developer has experienced the frustration of encountering a cryptic error message. CodeSense Mini was inspired by the concept of 'agentic' AI - systems that autonomously orchestrate multiple services to solve problems, mimicking how experienced developers actually approach debugging.",
      },
      {
        heading: "What it does",
        body: "Accepts error messages and problematic code, generates vector embeddings using Gemini AI, performs hybrid search combining TiDB's vector similarity with text pattern matching, and uses AI reasoning to synthesize solutions.",
        media: [
          { type: "image", src: codesense2, caption: "Error input interface with quick example buttons and code context" },
        ]
      },
      {
        heading: "Hybrid Search Strategy",
        body: "Implemented an intelligent combination of vector similarity and text matching with deduplication and relevance ranking to provide the most accurate solutions.",
        media: [
          { type: "image", src: codesense3, caption: "AI solution with 95% confidence showing original vs fixed React code" },
        ]
      },

    ],
    gallery: [
      { type: "image", src: codesense1, caption: "Project Overview", fit: "contain" },
      { type: "image", src: codesense2, caption: "Error input interface with quick example buttons and code context", fit: "contain" },
      { type: "image", src: codesense3, caption: "AI solution with 95% confidence showing original vs fixed React code", fit: "contain" },
    ],
    highlights: [
      "Successfully implemented autonomous decision-making for search strategies.",
      "Seamlessly combined TiDB's vector search with traditional text matching.",
      "Built a fully functional application deployed on Vercel with real-time visualization.",
    ],
    links: [
      { label: "Live Site", href: "https://codesense-mini.vercel.app", icon: "external" },
      { label: "GitHub", href: "https://github.com/saisasir/codesense-mini", icon: "github" },
      { label: "Video", href: "https://youtu.be/ZznHwks77QQ?si=VG7UQca8-Ymq91-M", icon: "youtube" },
    ],
  },
  "aws-voting": {
    slug: "aws-voting",
    code: "03",
    title: "Deployment of Real-Time Voting Application on AWS",
    tag: "Cloud · DevOps",
    year: "2023",
    role: "Cloud Engineer — infrastructure, orchestration, monitoring",
    duration: "Jun 2023 – Dec 2023",
    summary:
      "A highly available, scalable three-tier voting application deployed on Amazon EKS with React and MongoDB.",
    image: aws1,
    stack: ["AWS EKS", "React", "MongoDB", "Kubernetes", "EBS CSI", "Datadog"],
    overview:
      "This project details the deployment of a sophisticated three-tier voting system utilizing React for the user interface and a backend API with MongoDB for the persistent data layer, all orchestrated on Amazon EKS.",
    sections: [
      {
        heading: "1. Executive Project Vision",
        body: "The project aims to deploy a scalable, high-availability web service by leveraging Amazon EKS. Orchestrating multi-tier applications on managed Kubernetes ensures that the frontend, logic, and data layers remain resilient, independent, and operationally efficient. The system utilizes React for the UI and a backend API with MongoDB for the persistent data layer.",
      },
      {
        heading: "2. Infrastructure Foundation",
        body: "Amazon EKS provides control plane abstraction with a cluster named 'cluster-1' running K8s version 1.27. The Amazon EBS CSI add-on is utilized to facilitate the lifecycle management of Persistent Volumes, ensuring durable storage for stateful workloads on T2.Medium worker nodes.",
      },
      {
        heading: "3. Resilience in the Data Layer",
        body: "The project utilizes MongoDB StatefulSets to manage the database tier with stable network identities. It is deployed as a three-pod replica set: mongo-0 (Primary) handling write operations, and mongo-1 & mongo-2 (Secondaries) providing high availability and read-scaling.",
      },
      {
        heading: "4. Logic & Security",
        body: "The API serves as the stateless logic tier. Security is enforced through Kubernetes Secrets to manage MongoDB authentication. The API is managed via the Deployment controller with two replicas and exposed via a Load Balancer Service.",
      },
      {
        heading: "5. Frontend Orchestration",
        body: "The React application handles traffic volatility with multi-replica deployment. A critical step involves mapping the API's Load Balancer DNS to the frontend's environment variables (API_ELB_PUBLIC_FQDN) to route API calls correctly.",
      },
      {
        heading: "6. Technical Troubleshooting: IAM & RBAC",
        body: "Resolved access conflicts between AWS IAM and Kubernetes' internal RBAC by editing the aws-auth ConfigMap in the kube-system namespace, granting the system:masters privilege to the management role.",
      },
      {
        heading: "7. Integrated System Validation",
        body: "Success was measured by querying the MongoDB state directly. By exec-ing into the mongo-0 pod and querying the LangDB database, votes cast on the React interface were verified to be accurately reflected in the database.",
      },
    ],
    highlights: [
      "Designed and deployed enterprise-grade application using AWS EKS for container orchestration and EC2 for frontend hosting with cloud-based storage, implementing auto-scaling to handle thousands of concurrent users.",
      "Implemented comprehensive monitoring stack with Datadog for application health, load balancing, service policies, and MongoDB StatefulSets ensuring fault-tolerant systems.",
      "Built scalable storage, indexing, and query systems that are fault-tolerant, low cost, and easy to manage/use, achieving auto-scaling and disaster recovery in agile environment.",
    ],
  },
  maru: {
    slug: "maru",
    code: "04",
    title: "AutoVista — Virtual Car Showroom Website (MERN Stack)",
    tag: "MERN Stack",
    year: "2023",
    role: "Full-stack developer — MERN, UI/UX, deployment",
    duration: "Aug 2023 – Nov 2023",
    summary:
      "A digital showroom for exploring car models with detailed specs and images, built with MERN stack.",
    image: avhome,
    stack: ["MongoDB", "Express", "React", "Node.js", "UX/UI"],
    overview:
      "Auto Vista is a web application designed to enhance the car buying experience by offering a digital showroom where users can explore various car models. The site provides detailed information, specifications, and images of different vehicles, allowing potential buyers to research and compare cars conveniently online. This platform aims to make the car shopping process more accessible and informative without the need to visit a physical showroom.",
    sections: [
      {
        heading: "Home page that piques curiosity and invites interaction",
        body: "The home page of Auto Vista features a sleek design with a moving GIF background of a car driving, creating a dynamic and engaging atmosphere. It has a prominent search bar allowing users to search for car models or types, with options to shop for new, used, and electric vehicles. The top navigation menu provides access to different car categories, user profiles, and listings, ensuring a user-friendly experience for browsing and researching vehicles. The overall layout is modern and intuitive, enhancing the online car shopping experience.",
        media: [
          { type: "gif", src: avgif, caption: "Dynamic Home Page" },
        ]
      },
      {
        heading: "Latest Launches",
        body: "After researching the best methods for showcasing new car models, I decided to use a modern approach for the 'Latest Launches' section of the Auto Vista webpage. This section features the newest car releases, such as the 2024 Volvo S60 Recharge, 2024 Mitsubishi Eclipse Cross, and 2024 BMW X3 M. I utilized a static site generator with React to render individual car pages, ensuring a streamlined and scalable process for displaying the latest vehicles dynamically and efficiently.",
        media: [
          { type: "image", src: avll, caption: "Latest Launches Section" },
        ]
      },
      {
        heading: "Brands",
        body: "To help users easily find their preferred vehicles, the 'Shop your favorite brand' section on the Auto Vista webpage features a selection of popular car brands. Users can browse cars from brands such as Audi, BMW, Lamborghini, Ford, Honda, Hyundai, Jaguar, Kia, Mercedes Benz, Porsche, Toyota, and Volkswagen. This organized layout simplifies the search process, allowing users to quickly navigate to their desired brand and explore available models.",
        media: [
          { type: "image", src: avbrand, caption: "Shop by Brand" },
        ]
      },
      {
        heading: "Why Choose Auto Vista?",
        body: "Transparent Pricing: Know exactly what you'll pay without hidden fees or surprises. Efficiency: Our time-saving tools help you find the perfect car quickly and easily. Flexible Shopping: Shop at your convenience, whether from home or on the go, at your own pace. Easy Sign-Up: Quickly create an account to get started with personalized car recommendations and listings.",
        media: [
          { type: "image", src: avy, caption: "Key Benefits" },
        ]
      },
      {
        heading: "Learning Resources on Auto Vista",
        body: "Auto Vista offers detailed information on car models, specifications, and features throughout the website. While there isn't a dedicated learning resources section, users can explore the site for insights and knowledge about different vehicles. For further assistance, check the FAQs, help sections, or customer support.",
        media: [
          { type: "image", src: avov, caption: "Vehicle Information" },
        ]
      },
    ],
    gallery: [
      { type: "image", src: avcar, caption: "Car Listing Page", fit: "contain" },
      { type: "image", src: avhome, caption: "Home Page View", fit: "contain" },
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
    code: "05",
    title: "Autonomous Remote Operated Vehicle",
    tag: "Robotics",
    year: "2024",
    role: "Hardware + firmware",
    duration: "10 weeks",
    summary:
      "A DIY Bluetooth-controlled car project using Arduino Uno for wireless operation, supporting manual, gesture, and voice commands.",
    image: remotecrl1,
    stack: ["Arduino", "Bluetooth", "L298 Driver", "C++"],
    overview:
      "This DIY Bluetooth-controlled car project offers a unique opportunity for hobbyists and enthusiasts to explore the exciting world of Arduino-based robotics. By harnessing the power of the Arduino Uno, a versatile microcontroller, and integrating a Bluetooth module, users can create a custom, wireless-controlled vehicle. This vehicle can be operated through manual controls, gesture commands, and even voice commands.",
    sections: [
      {
        heading: "Inspiration and Ideation",
        body: "The DIY Bluetooth-controlled car project was inspired by the desire to create an accessible way to explore robotics and electronics. It combines practical engineering skills with modern technology, making it suitable for both beginners and enthusiasts. Using an Arduino Uno and a Bluetooth module, the project demonstrates simple yet effective wireless communication and control. The goal is to inspire creativity, innovation, and a passion for learning through hands-on experience in building and programming a remote-controlled vehicle.",
        media: [
          { type: "gif", src: rmcl1, caption: "Robot Movement Test" },
        ]
      },
      {
        heading: "How it Works",
        body: "The vehicle operates using an Arduino Uno microcontroller and a Bluetooth module to receive commands from a smartphone. The motor driver shield controls the wheels and motors, while a Li-ion battery powers the system. Users send commands through a mobile app, which the Bluetooth module relays to the Arduino. The Arduino then directs the motors, enabling remote control of the car.",
        media: [
          { type: "gif", src: rmcl2, caption: "Command Reception" },
        ]
      },
      {
        heading: "Computing Speed and Internal Workings",
        body: "The vehicle is powered by an Arduino Uno microcontroller, operating at 16 MHz for efficient signal processing. A Bluetooth module enables real-time wireless communication, while the motor driver shield translates commands into precise movements, controlling the gear motors' speed and direction. A Li-ion battery provides consistent power, ensuring smooth and responsive control for accurate maneuvering.",
        media: [
          { type: "gif", src: rmcl3, caption: "Internal Processing" },
        ]
      },
      {
        heading: "Internal and External Setup",
        body: "Internally, the vehicle uses an Arduino Uno microcontroller to process signals, with a Bluetooth module for wireless communication and a motor driver shield to control the motors. A Li-ion battery powers the system, ensuring smooth operation. Externally, it features a lightweight chassis with four wheels for mobility and a battery holder with a switch for easy power management. This setup enables precise and responsive control for various maneuvers.",
        media: [
          { type: "image", src: remotecrl2, caption: "Chassis and Components" },
        ]
      },
      {
        heading: "Adjusting and Adapting Plans",
        body: "The project allows for flexibility in adjusting and adapting plans. The use of a breadboard and modular components makes it easy to modify the circuit and integrate new features. The Arduino microcontroller's programmable nature allows for software updates and changes to improve functionality. This adaptability ensures the vehicle can be refined and enhanced based on testing and new requirements, making it a versatile platform for various applications.",
        media: [
          { type: "image", src: remotecrl3, caption: "Modular Setup" },
        ]
      },
      {
        heading: "The Next Iteration",
        body: "The next iteration of the project focuses on enhancing performance and expanding capabilities. Improvements may include upgrading to more powerful motors for better speed and torque, integrating advanced sensors for improved navigation and obstacle detection, and incorporating a more robust wireless communication system. Additionally, enhancing the software with more sophisticated algorithms will allow for more complex maneuvers and autonomous functions. These upgrades aim to make the vehicle more efficient, versatile, and capable of handling a wider range of tasks.",
        media: [
          { type: "image", src: remotecrl4, caption: "Future Upgrades" },
        ]
      },
    ],
    gallery: [
      { type: "gif", src: rmcl4, caption: "Testing Maneuvers", fit: "contain" },
      { type: "image", src: remotecrl1, caption: "Remote Operated Vehicle", fit: "contain" },
    ],
    highlights: [
      "Powered by Arduino Uno microcontroller at 16 MHz.",
      "Real-time wireless communication via Bluetooth module.",
      "Motor driver shield for precise wheel and motor control.",
      "Supports manual controls, gesture commands, and voice commands.",
    ],
    links: [
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=nWS_uZ6fSDc&t=5s", icon: "youtube" },
    ],
  },
  web: {
    slug: "web",
    code: "06",
    title: "Fire Fighting Robot",
    tag: "Robotics · Embedded",
    year: "2023",
    role: "Hardware + firmware — sensors, actuators, control loop",
    duration: "6 weeks",
    summary:
      "An autonomous fire-detection robot with flame sensing, water-pump actuation, and motor control.",
    image: projectFire,
    heroFit: "contain",
    stack: ["Arduino", "L298 Motor Driver", "Flame Sensor", "Water Pump", "C++"],
    overview:
      "This homemade firefighting robot is designed to detect and extinguish small fires. It features a lightweight chassis with four wheels for mobility, powered by a battery pack. The Arduino microcontroller serves as the brain, processing inputs from various sensors and controlling the robot's actions. A breadboard facilitates easy connections between components, including a relay module and a water pump system. The onboard water reservoir supplies a mini water pump used to spray water onto detected flames.",
    sections: [
      {
        heading: "Implementation and Use",
        body: "The firefighting robot is built to autonomously detect and extinguish small fires. It is equipped with sensors that identify fire sources, sending data to the Arduino microcontroller. Upon detection, the controller activates the water pump, which draws water from the reservoir and sprays it onto the fire. This project demonstrates a practical approach to using robotics in fire safety, providing a reliable and effective solution for managing small-scale fire emergencies.",
        media: [
          { type: "gif", src: fire1, caption: "Robot Operation" },
        ]
      },
      {
        heading: "Prototyping and Development",
        body: "This project features a firefighting robot designed for efficiency and functionality. The robot's chassis is lightweight, mounted on four wheels for mobility. Central to its design is an Arduino microcontroller, which processes sensor inputs and manages the robot's operations. A breadboard is used for prototyping, allowing easy connections and modifications of electronic components. The design includes a relay module to handle high-power components and a water pump system connected to a reservoir, enabling the robot to extinguish fires.",
        media: [
          { type: "gif", src: fire3, caption: "Flame Sensor Testing" },
        ]
      },
    ],
    gallery: [
      { type: "gif", src: fire4, caption: "Testing and Extinguishing", fit: "contain" },
      { type: "image", src: projectFire, caption: "Fire Fighting Robot Model", fit: "contain" },
      { type: "image", src: fire2, caption: "Chassis and Components", fit: "contain" },
    ],
    highlights: [
      "Custom chassis with 4-wheel drive powered by 18650 cells.",
      "L298 motor driver controlled via PWM for differential steering.",
      "Multi-directional flame sensor array with threshold-based fire localization and directional angle estimation.",
      "Servo-aimed water pump with relay-driven activation.",
    ],
    links: [
      { label: "Watch Demo", href: "https://www.youtube.com/watch?v=vMzMbW26u1Q", icon: "youtube" },
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
      <div className={media.aspect ? `relative ${media.aspect} overflow-hidden` : "overflow-hidden"}>
        <img
          src={media.src}
          alt={media.alt ?? ""}
          loading="lazy"
          className={`w-full ${media.aspect ? "absolute inset-0 h-full object-cover" : "h-auto"} opacity-95`}
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
        <div className="mt-14 max-w-3xl mx-auto rounded-xl border border-border bg-deep overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto opacity-95"
          />
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
