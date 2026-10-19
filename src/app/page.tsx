import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Mail, MessagesSquare, Plus, Rocket, Wrench } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { experiences, mailto, profile, projects, type Project } from './content';
import { Avatar } from './Avatar';
import { ChatProvider, InlineChat, OpenChatButton } from './ChatWidget';
import { CopyEmail } from './CopyEmail';

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQ' },
];

const steps = [
  {
    icon: MessagesSquare,
    title: 'Talk',
    text: 'We start with a short call or a few messages. You explain the problem, I ask questions and suggest a realistic scope.',
  },
  {
    icon: Wrench,
    title: 'Build',
    text: 'I build in small steps and share progress regularly, so you see working software early and can steer along the way.',
  },
  {
    icon: Rocket,
    title: 'Launch & support',
    text: 'I take care of deployment and stay around after launch for fixes, improvements and questions.',
  },
];

const faqs = [
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. Most of my own projects are for small teams and founders. We can start small, with a single feature or a prototype, and grow from there.',
  },
  {
    q: 'How quickly do you reply?',
    a: "Usually within a day on weekdays. Since I also work full-time, project work happens on a planned schedule, and I'll tell you upfront which timeline is realistic.",
  },
  {
    q: 'Can you take over an existing project?',
    a: "Often, yes. I'll first go through the codebase and give you an honest picture of its state and what it would take to move forward.",
  },
  {
    q: 'What does a project cost?',
    a: 'That depends on the scope. After a first conversation you get a clear estimate before any work starts, with no obligation.',
  },
];

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
];

/** The project shown large in the hero: the first one with a real screenshot and a live link. */
const featured = projects.find((p): p is Project & { link: string; screenshot: string } =>
  Boolean(p.screenshot && p.link),
);

const primaryButton =
  'inline-flex h-12 items-center gap-2 rounded-full bg-(--au-blue) px-6 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgb(10_124_255/0.6)] transition hover:-translate-y-0.5 hover:bg-(--au-blue-deep)';
const secondaryButton =
  'inline-flex h-12 items-center gap-2 rounded-full border border-(--au-line) bg-white/80 px-6 text-[0.95rem] font-semibold transition hover:-translate-y-0.5 hover:bg-white';

function hostOf(url?: string) {
  return url ? new URL(url).host.replace(/^www\./, '') : 'private client project';
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold text-(--au-blue)">{eyebrow}</p>
      <h2 className="au-display mt-2 text-4xl font-semibold md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-(--au-muted)">{text}</p>}
    </div>
  );
}

function BrowserFrame({
  src,
  alt,
  url,
  priority,
  sizes = '(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw',
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-(--au-line) bg-white p-1.5 shadow-[0_1px_2px_rgb(11_18_32/0.04),0_24px_48px_-24px_rgb(11_18_32/0.25)]">
      <div className="flex items-center gap-3 px-2.5 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto max-w-[60%] truncate rounded-md bg-(--au-soft) px-6 py-1 text-center text-xs text-(--au-muted)">
          {url}
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      <div className="relative aspect-16/9 overflow-hidden rounded-xl bg-(--au-soft)">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ChatProvider>
      <header className="sticky top-0 z-40 border-b border-(--au-line) bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="au-display flex items-center gap-2 text-lg font-semibold">
            <span className="grid size-7 place-items-center rounded-lg bg-(--au-ink) text-xs text-white">
              TS
            </span>
            sprotte.dev
          </a>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-(--au-muted)">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-(--au-ink)">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <OpenChatButton className="inline-flex h-10 items-center gap-1.5 rounded-full bg-(--au-ink) px-4 text-sm font-semibold text-white transition hover:bg-black">
            Start a project <ArrowRight className="size-4" />
          </OpenChatButton>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate overflow-hidden px-5 pt-20 pb-24 md:pt-28">
          <div className="au-mesh" aria-hidden>
            <span className="au-mesh-sky" />
            <span className="au-mesh-mint" />
            <span className="au-mesh-apricot" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="au-rise au-surface mx-auto inline-flex items-center gap-2.5 rounded-full py-1 pr-4 pl-1 text-sm">
              <Avatar size={30} priority />
              <span className="font-semibold">{profile.displayName}</span>
              <span className="text-(--au-muted)">· Full Stack Engineer</span>
            </div>

            <h1
              className="au-rise au-display mt-8 text-[clamp(2.4rem,5.2vw,4.25rem)] leading-[1.05] font-semibold text-balance"
              style={{ animationDelay: '80ms' }}
            >
              Web software that just works.
              <span className="block text-(--au-muted)">
                Built by a full stack engineer in Hamburg.
              </span>
            </h1>

            <p
              className="au-rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-(--au-muted) md:text-xl"
              style={{ animationDelay: '160ms' }}
            >
              I build web apps, automations and integrations for small teams and founders, from
              first idea to launch. Writing TypeScript and React since {profile.since}.
            </p>

            <div
              className="au-rise mt-10 flex flex-wrap justify-center gap-3"
              style={{ animationDelay: '240ms' }}
            >
              <OpenChatButton className={primaryButton}>
                Start a project <ArrowRight className="size-4" />
              </OpenChatButton>
              <a href="#work" className={secondaryButton}>
                See my work
              </a>
            </div>

            <p
              className="au-rise mt-6 inline-flex items-center gap-2 text-sm text-(--au-muted)"
              style={{ animationDelay: '320ms' }}
            >
              <span className="size-2 rounded-full bg-[#22c55e]" />
              Open to new projects · replies {profile.replyTime}
            </p>
          </div>

          {/* Product-style showcase of a live project, opens the live site. No fade-in: this
              screenshot is the largest contentful paint. */}
          {featured && (
            <a
              href={featured.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${featured.name} (opens in a new tab)`}
              className="group relative mx-auto mt-16 block max-w-5xl rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--au-blue)"
            >
              <div className="transition duration-500 group-hover:-translate-y-1.5">
                <BrowserFrame
                  src={featured.screenshot}
                  alt=""
                  url={hostOf(featured.link)}
                  priority
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>
              <div className="au-glass relative mt-4 rounded-2xl p-4 text-left sm:absolute sm:-bottom-6 sm:left-4 sm:mt-0 sm:max-w-xs md:-left-8">
                <p className="text-xs font-semibold text-(--au-blue)">Live project</p>
                <p className="mt-1 font-semibold">{featured.name}</p>
                <p className="mt-0.5 text-sm text-(--au-muted)">{featured.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-(--au-blue) group-hover:underline">
                  Visit {hostOf(featured.link)} <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          )}
        </section>

        {/* Stack strip */}
        <section aria-label="Tech stack" className="border-y border-(--au-line) bg-(--au-soft)/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 md:flex-row md:justify-between">
            <p className="text-sm font-medium text-(--au-muted)">My everyday stack</p>
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {profile.stack.map((tech) => (
                <li key={tech} className="au-display text-xl font-semibold text-(--au-ink)/75">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 px-5 py-28">
          <SectionHeading
            eyebrow="Selected work"
            title="Things I've built"
            text="Client platforms, my own products and the community project where it all started."
          />
          <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group relative">
                <div className="transition duration-500 group-hover:-translate-y-1.5">
                  <BrowserFrame
                    src={project.image}
                    alt={`${project.name} illustration`}
                    url={hostOf(project.link)}
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="au-display text-2xl font-semibold">
                      {project.link ? (
                        // The link's ::after covers the whole card, so the card is one click target.
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="decoration-(--au-blue) decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0 after:content-['']"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className="mt-1 text-(--au-muted)">{project.tagline}</p>
                  </div>
                  {project.link && (
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-full border border-(--au-line) transition group-hover:border-(--au-blue) group-hover:text-(--au-blue)"
                    >
                      <ArrowUpRight className="size-4.5" />
                    </span>
                  )}
                </div>
                <p className="mt-3 leading-relaxed text-(--au-muted)">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-(--au-soft) px-3 py-1 text-xs font-medium text-(--au-muted)"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-(--au-soft) px-5 py-28">
          <SectionHeading eyebrow="How I work" title="Simple, from first message to launch" />
          <ol className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="au-card rounded-3xl p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-(--au-blue)/10 text-(--au-blue)">
                    <step.icon className="size-5.5" />
                  </span>
                  <span aria-hidden className="au-display text-sm font-semibold text-(--au-muted)">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="au-display mt-8 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-(--au-muted)">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 px-5 py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold text-(--au-blue)">Experience</p>
              <h2 className="au-display mt-2 text-4xl font-semibold md:text-5xl">A bit about me</h2>
              <p className="mt-5 leading-relaxed text-(--au-muted)">{profile.bio}</p>
              <p className="mt-4 leading-relaxed text-(--au-muted)">{profile.intro}</p>
              <div className="mt-6 flex gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-(--au-line) px-4 text-sm font-medium transition hover:border-(--au-blue) hover:text-(--au-blue)"
                  >
                    <Icon className="size-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {experiences.map((exp) => (
                <li
                  key={exp.title + exp.company}
                  className="au-card rounded-2xl p-6 transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold text-(--au-blue)">{exp.period}</p>
                  <h3 className="mt-2 text-lg leading-snug font-semibold">{exp.title}</h3>
                  <p className="text-sm text-(--au-muted)">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-(--au-muted)">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-(--au-line) px-5 py-28">
          <SectionHeading eyebrow="FAQ" title="Good questions" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-(--au-line) border-y border-(--au-line)">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-semibold">
                  {faq.q}
                  <Plus className="au-faq-icon size-5 shrink-0 text-(--au-muted) transition-transform duration-300" />
                </summary>
                <p className="-mt-2 pb-6 leading-relaxed text-(--au-muted)">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA with the inline chat */}
        <section id="contact" className="scroll-mt-20 px-5 pb-24">
          <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#e6f3ff_0%,#e9f9f2_55%,#fff1e4_100%)] px-6 py-14 md:px-14 md:py-16">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="au-display text-4xl leading-tight font-semibold md:text-5xl">
                  Have a project in mind? Let&apos;s talk it through.
                </h2>
                <p className="mt-5 max-w-md text-lg text-(--au-muted)">
                  Answer a few quick questions in the chat and your email is ready to send. No
                  forms, no pressure.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={mailto()}
                      className="inline-flex items-center gap-2 font-semibold hover:text-(--au-blue)"
                    >
                      <Mail className="size-4.5 text-(--au-blue)" />
                      {profile.email}
                    </a>
                    <CopyEmail />
                  </div>
                  <p className="text-sm text-(--au-muted)">
                    Based in {profile.location} · usually replies {profile.replyTime}
                  </p>
                </div>
              </div>
              <InlineChat />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-(--au-line)">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-(--au-muted) sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.company} · {profile.location}
          </p>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-(--au-ink)"
              >
                <Icon className="size-4.5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </ChatProvider>
  );
}
