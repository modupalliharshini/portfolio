import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import {
  ElementType,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useRef,
  useState,
} from "react";

const projectImages = [
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  ],
  [
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  ],
];

const projects = [
  {
    name: "Peak Fitness",
    category: "AI Voice Experience",
    description: "A high-performance fitness landing page with responsive visuals, smooth interactions, a multilingual Gemini Live voice assistant, and an integrated AI chatbot for memberships, trainer matching, and booking support.",
    live: "https://peak-fitness-voice-assistant-584484050512.asia-southeast1.run.app",
    images: [projectImages[2][0], projectImages[0][2], projectImages[2][2]],
  },
  {
    name: "VoiceWithin",
    category: "Freelance",
    description: "A responsive client website focused on clear presentation, intuitive navigation, and a smooth experience across devices.",
    live: "https://voicewithin.vercel.app",
    github: "https://github.com/modupalliharshini/VoiceWithin",
    images: projectImages[0],
  },
  {
    name: "UltraEdit Clone",
    category: "Front-end",
    description: "A clean, responsive recreation of the UltraEdit homepage built to practice precise layouts, spacing, and adaptive styling.",
    live: "https://modupalliharshini.github.io/UE-Website/",
    github: "https://github.com/modupalliharshini/UE-Website",
    images: projectImages[1],
  },
  {
    name: "Language Translation",
    category: "Python",
    description: "A Python translation application that provides practical multilingual support through a simple, focused interface.",
    live: "https://github.com/modupalliharshini/Language-Translation-Application",
    github: "https://github.com/modupalliharshini/Language-Translation-Application",
    images: [projectImages[1][2], projectImages[0][1], projectImages[2][0]],
  },
];

const services = [
  ["Front-end Development", "Responsive, accessible interfaces built with modern HTML, CSS, JavaScript, and React."],
  ["Full-stack Development", "Practical web applications with Express, databases, APIs, and thoughtfully connected front ends."],
  ["I Build AI Agents", "Useful n8n agents and automated workflows that connect tools, move data, and reduce repetitive work."],
  ["Prompt Engineering", "Clear, structured prompts and AI workflows designed for reliable, useful, and repeatable results."],
  ["UI / UX Design", "Clear layouts and intuitive flows that balance visual polish with everyday usability."],
  ["Responsive Design", "Experiences carefully tuned for mobile, tablet, desktop, and everything in between."],
];

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
};

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className = "",
}: FadeInProps) {
  const Component = motion.create(as);
  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}

function ContactButton() {
  return (
    <a
      href="mailto:harshinimodupalli123@gmail.com"
      className="contact-button inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
    >
      Contact me <ArrowUpRight size={18} />
    </a>
  );
}

function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");

  const move = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - (rect.left + rect.width / 2)) / 3;
    const y = (event.clientY - (rect.top + rect.height / 2)) / 3;
    setTransform(`translate3d(${x}px, ${y}px, 0)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setTransform("translate3d(0,0,0)")}
      style={{ transform, transition: "transform .3s ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-scene relative flex h-[100svh] min-h-[560px] flex-col overflow-hidden sm:min-h-[600px]">
      <div className="hero-glow pointer-events-none absolute bottom-[-18%] left-1/2 h-[48%] w-[55%] -translate-x-1/2 rounded-[50%]" />
      <FadeIn y={-20} className="relative z-30">
        <nav className="flex justify-between px-5 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] sm:px-8 md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          <a className="transition-opacity hover:opacity-70" href="#about">About</a>
          <a className="transition-opacity hover:opacity-70" href="#services">Skills</a>
          <a className="transition-opacity hover:opacity-70" href="#projects">Projects</a>
          <a className="transition-opacity hover:opacity-70" href="#contact">Contact</a>
        </nav>
      </FadeIn>

      <div className="mt-7 overflow-visible px-3 sm:mt-4 sm:px-5 md:-mt-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading w-full whitespace-nowrap text-center text-[8.4vw] font-black uppercase leading-none tracking-[-0.045em]">
            Hi, I&apos;m Harshini
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="hero-portrait absolute bottom-0 right-[-6px] z-10 w-[235px] sm:right-auto sm:left-1/2 sm:w-[260px] sm:-translate-x-1/2 md:w-[290px] lg:w-[340px]"
      >
        <Magnet>
          <img
            src="/assets/harshini-hero-cartoon.png"
            alt="3D cartoon portrait of a woman developer"
            className="hero-character w-full select-none object-contain"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-5 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="hero-intro max-w-[118px] text-[clamp(.62rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide sm:max-w-[170px] md:max-w-[200px] lg:max-w-[270px]">
            A front-end developer crafting thoughtful and responsive digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="hidden sm:block">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", setProgress);

  return (
    <p
      ref={ref}
      className="max-w-[650px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed"
    >
      {text.split("").map((char, index, chars) => {
        const start = index / chars.length;
        const opacity = Math.min(1, Math.max(0.2, (progress - start) * 8));
        return (
          <motion.span key={index} animate={{ opacity }} transition={{ duration: 0.1 }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}

const decorations = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className: "left-[2%] top-[5%] w-[110px] sm:w-[160px] md:left-[4%] md:w-[210px]",
    x: -80,
    delay: 0.1,
    float: 0,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className: "bottom-[7%] left-[4%] w-[90px] sm:left-[7%] sm:w-[140px] md:left-[10%] md:w-[180px]",
    x: -80,
    delay: 0.25,
    float: 1.4,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className: "right-[2%] top-[5%] w-[110px] sm:w-[160px] md:right-[4%] md:w-[210px]",
    x: 80,
    delay: 0.15,
    float: 0.8,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className: "bottom-[7%] right-[4%] w-[110px] sm:right-[7%] sm:w-[170px] md:right-[10%] md:w-[220px]",
    x: 80,
    delay: 0.3,
    float: 2,
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-10">
      {decorations.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          x={item.x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute opacity-70 sm:opacity-100 ${item.className}`}
        >
          <motion.img
            src={item.src}
            loading="lazy"
            alt=""
            className="w-full drop-shadow-[0_25px_25px_rgba(118,33,176,.22)]"
            animate={{
              y: [0, -16, 0],
              rotate: [-2, 3, -2],
              rotateY: [-6, 7, -6],
            }}
            transition={{
              duration: 7.5,
              delay: item.float,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </FadeIn>
      ))}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="I’m a front-end developer who loves turning ideas into clean, responsive, and user-friendly interfaces. I explore the back end too, because understanding the full picture makes every interface stronger. I enjoy figuring things out and making digital experiences that simply work." />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          What I do
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl border-t border-black/15">
        {services.map(([name, description], index) => (
          <FadeIn key={name} delay={index * 0.1}>
            <article className="grid grid-cols-[90px_1fr] gap-4 border-b border-black/15 py-8 sm:grid-cols-[150px_1fr] sm:gap-8 sm:py-10 md:grid-cols-[220px_1fr] md:py-12">
              <span className="text-[clamp(3rem,10vw,8.75rem)] font-black leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1 md:pt-3">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase">{name}</h3>
                <p className="mt-3 max-w-2xl text-[clamp(.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (projects.length - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="mb-8 h-auto md:mb-0 md:h-[66vh] md:min-h-[500px]">
      <motion.article
        style={{ scale, top: `calc(5.5rem + ${index * 28}px)` }}
        className="project-card relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/20 bg-[#141218] p-3 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:rounded-[34px] sm:p-4 md:sticky md:rounded-[40px] md:p-5"
      >
        <div className="project-card-glow pointer-events-none absolute -right-24 -top-32 size-72 rounded-full" />
        <div className="relative z-10 mb-3 grid grid-cols-[auto_1fr] items-center gap-3 sm:mb-4 sm:grid-cols-[auto_1fr_auto] sm:gap-5">
          <span className="grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/[.06] text-2xl font-black shadow-[inset_0_1px_0_rgba(255,255,255,.12)] sm:size-16 sm:text-3xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[.25em] opacity-55 sm:text-sm">{project.category}</p>
            <h3 className="text-[clamp(1.15rem,2.5vw,2.2rem)] font-medium uppercase leading-tight">{project.name}</h3>
            <p className="mt-1 max-w-xl text-[.68rem] font-light leading-snug text-white/55 sm:text-xs sm:leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="col-span-2 flex gap-2 sm:col-span-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="grid size-10 place-items-center rounded-full border border-white/25 bg-white/[.04] transition hover:-translate-y-1 hover:bg-white/10 sm:size-12"
              >
                <Github size={20} />
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[.04] px-4 py-2.5 text-[.68rem] font-medium uppercase tracking-widest transition hover:-translate-y-1 hover:bg-white/10 sm:px-6 sm:text-xs"
            >
              Live project <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="relative z-10 grid h-[270px] grid-cols-[34%_66%] gap-2 sm:h-[320px] sm:gap-3 md:h-[340px]">
          <div className="grid grid-rows-2 gap-2 sm:gap-3">
            {project.images.slice(0, 2).map((image) => (
              <div key={image} className="project-image overflow-hidden rounded-[18px] border border-white/10 sm:rounded-[24px] md:rounded-[28px]">
                <img src={image} loading="lazy" alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="project-image overflow-hidden rounded-[18px] border border-white/10 sm:rounded-[24px] md:rounded-[28px]">
            <img src={project.images[2]} loading="lazy" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-3 pb-24 pt-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32 md:pt-32">
      <FadeIn>
        <h2 className="hero-heading mb-20 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Projects
        </h2>
      </FadeIn>
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
      <div aria-hidden="true" className="h-24 sm:h-32 md:h-48" />
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-20 px-5 pb-10 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-28">
      <div className="mx-auto max-w-7xl border-t border-white/20 pt-10">
        <p className="hero-heading text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[.9]">
          Let&apos;s make<br />something good.
        </p>
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a className="text-lg underline underline-offset-4 hover:opacity-70 sm:text-2xl" href="mailto:harshinimodupalli123@gmail.com">
              harshinimodupalli123@gmail.com
            </a>
            <a
              className="mt-3 flex w-fit items-center gap-2 uppercase tracking-wider opacity-70 transition hover:opacity-100"
              href="https://github.com/modupalliharshini"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
          <p className="text-sm uppercase tracking-widest opacity-50">© 2026 Modupalli Harshini</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
