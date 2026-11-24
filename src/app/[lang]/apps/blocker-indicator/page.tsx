import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Database,
  FileText,
  Flag,
  LifeBuoy,
  Lock,
  ServerOff,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { isLocale } from '@/i18n/config';
import {
  APP_SLUG,
  getBlockerIndicatorCopy,
  type BlockerIndicatorCopy,
} from '@/i18n/apps/blocker-indicator';
import { AppShell, buildBlockerIndicatorMetadata, pagePaths } from './AppShell';

const highlightIcons = [ShieldCheck, Lock, Database];
const nodeIcons = [Workflow, ShieldCheck, Database];

const pageCardIcons = {
  docs: BookOpen,
  support: LifeBuoy,
  privacy: ShieldCheck,
  terms: FileText,
};

const primaryButton =
  'inline-flex h-12 items-center gap-2 rounded-full bg-(--au-blue) px-6 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgb(10_124_255/0.6)] transition hover:-translate-y-0.5 hover:bg-(--au-blue-deep)';
const secondaryButton =
  'inline-flex h-12 items-center gap-2 rounded-full border border-(--au-line) bg-white/80 px-6 text-[0.95rem] font-semibold transition hover:-translate-y-0.5 hover:bg-white';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildBlockerIndicatorMetadata(lang, 'overview');
}

/** Illustrative Epic Blocker Panel & Blocked Status card preview in crisp HTML. */
function BlockerPreview({ preview }: { preview: BlockerIndicatorCopy['overview']['preview'] }) {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="relative">
        <div
          className="absolute inset-x-6 -top-3 h-full rounded-3xl border border-(--au-line) bg-white/50"
          aria-hidden
        />
        <div
          className="absolute inset-x-3 -top-1.5 h-full rounded-3xl border border-(--au-line) bg-white/70"
          aria-hidden
        />

        <div className="au-glass relative rounded-3xl p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1ee] px-2.5 py-1 text-[0.7rem] font-semibold text-[#c2412d]">
              <Flag className="size-3 fill-[#ef5b4b]/25" />
              {preview.panelLabel}
            </span>
            <span className="rounded-md border border-(--au-line) bg-white/90 px-2 py-0.5 font-mono text-[0.7rem] font-semibold text-(--au-muted)">
              {preview.epicKey}
            </span>
          </div>

          <p className="au-display mt-4 text-xl font-semibold">{preview.epicTitle}</p>

          <div className="mt-4 flex gap-1.5 rounded-full border border-(--au-line) bg-white/75 p-1 text-xs font-semibold">
            <span className="flex-1 rounded-full px-3 py-1.5 text-center text-(--au-muted)">
              {preview.tabs[0]}
            </span>
            <span className="flex-1 rounded-full bg-(--au-ink) px-3 py-1.5 text-center text-white">
              {preview.tabs[1]}
            </span>
          </div>

          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#f5d59c] bg-[#fff9ec] px-3.5 py-3">
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.08em] text-[#9a5c00] uppercase">
                  {preview.fieldLabel}
                </dt>
                <dd className="mt-0.5 font-semibold text-(--au-ink)">{preview.fieldValue}</dd>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffe8e4] px-2.5 py-1 text-xs font-semibold text-[#c2412d]">
                <Flag className="size-3 fill-[#ef5b4b]" />
                {preview.flagBadge}
              </span>
            </div>

            <div>
              <dt className="text-xs font-semibold tracking-[0.08em] text-(--au-muted) uppercase">
                {preview.bottleneckLabel}
              </dt>
              <dd className="mt-2 space-y-2">
                {preview.bottlenecks.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-3 rounded-xl border border-(--au-line) bg-white/85 px-3.5 py-2.5"
                  >
                    <div className="min-w-0">
                      <span className="font-mono text-xs font-semibold text-(--au-blue-deep)">
                        {item.key}
                      </span>
                      <p className="truncate text-xs text-(--au-ink)/85">{item.summary}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#fff1ee] px-2.5 py-0.5 text-[0.7rem] font-semibold text-[#c2412d]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </dd>
            </div>

            <div className="rounded-2xl border border-(--au-blue)/15 bg-(--au-blue)/[0.05] px-3.5 py-3 text-xs leading-relaxed text-(--au-ink)/80">
              {preview.manualNote}
            </div>
          </dl>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-(--au-muted)">
        {preview.caption}
      </figcaption>
    </figure>
  );
}

/** Trust boundary diagram: everything runs inside Atlassian Cloud with zero external egress. */
function ArchitectureDiagram({
  architecture,
  scopes,
}: {
  architecture: BlockerIndicatorCopy['overview']['architecture'];
  scopes: string[];
}) {
  const connectors = [architecture.readLabel, architecture.storeLabel];

  return (
    <div className="au-card overflow-hidden rounded-3xl">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_15rem]">
        {/* Inside the boundary */}
        <div className="relative p-5 sm:p-8">
          <div className="relative rounded-2xl border border-dashed border-(--au-blue)/35 bg-[radial-gradient(rgb(10_124_255/0.1)_1px,transparent_1px)] [background-size:16px_16px] p-5 pt-9 sm:p-7 sm:pt-10">
            <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full border border-(--au-blue)/20 bg-white px-3 py-1 text-xs font-semibold text-(--au-blue-deep)">
              <Lock className="size-3" />
              {architecture.boundaryLabel}
            </span>

            <ol className="flex flex-col items-stretch gap-0 md:flex-row md:items-center">
              {architecture.nodes.map((node, i) => {
                const Icon = nodeIcons[i];
                return (
                  <li key={node.title} className="contents">
                    <div
                      className={`rounded-2xl border bg-white p-4 md:flex-1 ${
                        i === 1
                          ? 'border-(--au-blue)/30 shadow-[0_10px_30px_-14px_rgb(10_124_255/0.45)]'
                          : 'border-(--au-line)'
                      }`}
                    >
                      <span
                        className={`grid size-8 place-items-center rounded-lg ${
                          i === 1 ? 'bg-(--au-blue) text-white' : 'bg-(--au-soft) text-(--au-ink)'
                        }`}
                      >
                        <Icon className="size-4" />
                      </span>
                      <p className="mt-3 text-sm font-semibold">{node.title}</p>
                      <p className="mt-0.5 text-xs text-(--au-muted)">{node.text}</p>
                    </div>
                    {i < connectors.length && (
                      <div
                        className="flex shrink-0 items-center justify-center py-2 md:w-24 md:flex-col md:py-0"
                        aria-hidden
                      >
                        <span className="order-2 ml-2 rounded-full bg-white px-2 py-0.5 font-mono text-[0.65rem] text-(--au-muted) ring-1 ring-(--au-line) md:order-1 md:mb-1.5 md:ml-0">
                          {connectors[i]}
                        </span>
                        <span className="order-1 h-6 w-px bg-linear-to-b from-(--au-blue)/20 via-(--au-blue) to-(--au-blue)/20 md:order-2 md:h-px md:w-full md:bg-linear-to-r" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold text-(--au-muted)">
              {architecture.scopesLabel}
            </span>
            {scopes.map((scope) => (
              <code
                key={scope}
                className="rounded-md border border-(--au-line) bg-(--au-soft) px-2 py-1 font-mono text-xs font-semibold text-(--au-ink)"
              >
                {scope}
              </code>
            ))}
          </div>
        </div>

        {/* Outside the boundary: nothing */}
        <div className="flex flex-col justify-center gap-3 border-t border-(--au-line) bg-(--au-soft) p-6 sm:p-8 lg:border-t-0 lg:border-l">
          <span className="grid size-10 place-items-center rounded-xl border border-dashed border-(--au-ink)/20 text-(--au-muted)">
            <ServerOff className="size-5" />
          </span>
          <p className="text-sm font-semibold text-(--au-ink)/60 line-through decoration-(--au-ink)/30">
            {architecture.outsideTitle}
          </p>
          <p className="au-display text-lg leading-snug font-semibold">
            {architecture.outsideText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function BlockerIndicatorOverviewPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getBlockerIndicatorCopy(lang);
  const { overview } = copy;

  return (
    <AppShell lang={lang} activePage="overview">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pt-14 pb-20 md:pt-20 md:pb-24">
        <div className="au-mesh" aria-hidden>
          <span className="au-mesh-sky" />
          <span className="au-mesh-mint" />
          <span className="au-mesh-apricot" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="au-surface au-rise inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-(--au-ink)/80">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-[#22b07d]/60 motion-reduce:animate-none" />
                <span className="relative size-2 rounded-full bg-[#22b07d]" />
              </span>
              {copy.appBadge}
            </p>

            <h1
              className="au-display au-rise mt-6 text-5xl leading-[1.02] font-semibold md:text-7xl"
              style={{ animationDelay: '60ms' }}
            >
              {overview.title}
            </h1>

            <p
              className="au-display au-rise mt-5 max-w-xl text-xl leading-snug text-(--au-ink)/85 md:text-2xl"
              style={{ animationDelay: '120ms' }}
            >
              {overview.subtitle}
            </p>

            <p
              className="au-rise mt-4 max-w-xl leading-relaxed text-(--au-muted)"
              style={{ animationDelay: '180ms' }}
            >
              {overview.intro}
            </p>

            <div className="au-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <a href={`/${lang}${APP_SLUG}/docs`} className={primaryButton}>
                {overview.ctaDocs}
                <ArrowRight className="size-4" />
              </a>
              <a href={`/${lang}${APP_SLUG}/support`} className={secondaryButton}>
                {overview.ctaSupport}
              </a>
            </div>
          </div>

          <div className="au-rise" style={{ animationDelay: '200ms' }}>
            <BlockerPreview preview={overview.preview} />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-(--au-line) px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-(--au-blue)">{copy.common.platformValue}</p>
            <h2 className="au-display mt-2 text-4xl font-semibold text-balance md:text-5xl">
              {overview.highlightsTitle}
            </h2>
            <p className="mt-4 text-lg text-(--au-muted)">{overview.highlightsText}</p>
          </div>

          <div className="mt-12">
            <ArchitectureDiagram
              architecture={overview.architecture}
              scopes={copy.privacy.permissions.map((p) => p.scope)}
            />
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-(--au-line) bg-(--au-line) md:grid-cols-3">
            {overview.highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <article key={item.title} className="bg-white p-7">
                  <span className="grid size-10 place-items-center rounded-xl bg-(--au-blue)/10 text-(--au-blue)">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="au-display mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-(--au-muted)">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation, Support & Legal cards */}
      <section className="border-t border-(--au-line) bg-(--au-soft) px-5 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-(--au-blue)">{overview.pagesSection.eyebrow}</p>
          <h2 className="au-display mt-2 text-3xl font-semibold md:text-4xl">
            {overview.pagesSection.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {overview.pagesSection.cards.map((card) => {
              const Icon = pageCardIcons[card.key];
              const href = `/${lang}${pagePaths[card.key]}`;
              return (
                <a
                  key={card.key}
                  href={href}
                  className="au-card group relative flex flex-col overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(11_18_32/0.04),0_24px_48px_-24px_rgb(11_18_32/0.28)] md:p-8"
                >
                  <span
                    className="pointer-events-none absolute top-7 right-7 flex w-16 flex-col gap-1.5 opacity-60 transition group-hover:opacity-100"
                    aria-hidden
                  >
                    <span className="h-1 w-full rounded-full bg-(--au-line)" />
                    <span className="h-1 w-4/5 rounded-full bg-(--au-line)" />
                    <span className="h-1 w-full rounded-full bg-(--au-line)" />
                    <span className="h-1 w-3/5 rounded-full bg-(--au-blue)/30" />
                  </span>
                  <span className="grid size-11 place-items-center rounded-2xl bg-(--au-blue)/10 text-(--au-blue)">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="au-display mt-6 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-(--au-muted)">
                    {card.text}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-1.5 border-t border-(--au-line) pt-5 text-sm font-semibold text-(--au-blue)">
                    {overview.pagesSection.openLink}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
