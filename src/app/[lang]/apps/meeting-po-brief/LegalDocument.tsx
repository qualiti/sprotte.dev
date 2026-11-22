import type { ReactNode } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { LAST_UPDATED_ISO, type MeetingPoBriefCopy } from '@/i18n/apps/meeting-po-brief';
import { profile } from '@/app/content';
import { LegalToc, type TocItem } from './LegalToc';

type LegalSectionData = MeetingPoBriefCopy['terms']['sections'][number];

/** "3. Purpose & Legal Basis" → { num: '03', label: 'Purpose & Legal Basis' } */
export function splitNumberedTitle(title: string) {
  const match = /^(\d+)\.\s+(.*)$/.exec(title);
  if (!match) return { num: '', label: title };
  return { num: match[1].padStart(2, '0'), label: match[2] };
}

export function LegalHero({
  eyebrow,
  title,
  subtitle,
  common,
  contactHref,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  common: MeetingPoBriefCopy['common'];
  contactHref: string;
}) {
  const facts: { label: string; value: ReactNode }[] = [
    { label: common.vendorLabel, value: common.vendorValue },
    {
      label: common.contactLabel,
      value: (
        <a
          href={contactHref}
          className="inline-flex items-center gap-1.5 text-(--au-blue) underline-offset-4 hover:underline"
        >
          <Mail className="size-3.5" />
          {profile.email}
        </a>
      ),
    },
    { label: common.platformLabel, value: common.platformValue },
    {
      label: common.lastUpdatedLabel,
      value: <time dateTime={LAST_UPDATED_ISO}>{common.lastUpdatedDate}</time>,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-(--au-line) px-5 pt-14 pb-12 md:pt-20 md:pb-14">
      <div className="au-mesh opacity-70" aria-hidden>
        <span className="au-mesh-sky" />
        <span className="au-mesh-mint" />
      </div>

      <div className="mx-auto max-w-6xl">
        <p className="au-rise inline-flex items-center gap-2 text-sm font-semibold text-(--au-blue)">
          <span className="h-px w-6 bg-(--au-blue)/50" aria-hidden />
          {eyebrow}
        </p>
        <h1
          className="au-display au-rise mt-4 max-w-3xl text-[2.6rem] leading-[1.05] font-semibold text-balance md:text-6xl"
          style={{ animationDelay: '60ms' }}
        >
          {title}
        </h1>
        <p
          className="au-rise mt-4 max-w-2xl text-lg text-(--au-muted)"
          style={{ animationDelay: '120ms' }}
        >
          {subtitle}
        </p>

        {/* Document ledger: hairline-divided facts */}
        <dl
          className="au-rise mt-10 grid gap-px overflow-hidden rounded-2xl border border-(--au-line) bg-(--au-line) shadow-[0_1px_2px_rgb(11_18_32/0.04),0_18px_40px_-24px_rgb(11_18_32/0.2)] sm:grid-cols-2 lg:grid-cols-4"
          style={{ animationDelay: '180ms' }}
        >
          {facts.map((fact) => (
            <div key={fact.label} className="bg-white/92 px-5 py-4">
              <dt className="text-[0.7rem] font-semibold tracking-[0.1em] text-(--au-muted) uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Two-column reading layout: sticky contents rail + editorial measure. */
export function LegalLayout({
  tocTitle,
  toc,
  children,
}: {
  tocTitle: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <div className="px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[14.5rem_minmax(0,1fr)] lg:gap-16">
        <aside>
          <LegalToc title={tocTitle} items={toc} />
        </aside>
        <article className="max-w-[43rem] min-w-0">{children}</article>
      </div>
    </div>
  );
}

export function SectionHeading({ num, children }: { num: string; children: ReactNode }) {
  return (
    <h2 className="au-display flex items-baseline gap-4 text-2xl leading-tight font-semibold md:text-[1.75rem]">
      {num && (
        <span className="font-mono text-sm font-medium text-(--au-blue) tabular-nums">{num}</span>
      )}
      <span className="text-balance">{children}</span>
    </h2>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-[1.75] text-(--au-ink)/75">
          <span
            className="mt-[0.72em] size-1.5 shrink-0 rounded-full bg-(--au-blue)/70"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalSections({ sections }: { sections: LegalSectionData[] }) {
  return (
    <div className="divide-y divide-(--au-line)">
      {sections.map((section) => {
        const { num, label } = splitNumberedTitle(section.title);
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 space-y-4 py-10 first:pt-0 last:pb-0"
          >
            <SectionHeading num={num}>{label}</SectionHeading>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-[1.75] text-(--au-ink)/75">
                {paragraph}
              </p>
            ))}
            {section.bullets && <BulletList items={section.bullets} />}
          </section>
        );
      })}
    </div>
  );
}

export function LegalFooterNav({
  relatedHref,
  relatedLabel,
  contactHref,
}: {
  relatedHref: string;
  relatedLabel: string;
  contactHref: string;
}) {
  return (
    <div className="mt-14 grid gap-3 sm:grid-cols-2">
      <a
        href={relatedHref}
        className="au-card group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-sm font-semibold transition hover:-translate-y-0.5"
      >
        {relatedLabel}
        <ArrowRight className="size-4 shrink-0 text-(--au-blue) transition group-hover:translate-x-0.5" />
      </a>
      <a
        href={contactHref}
        className="group flex items-center justify-between gap-4 rounded-2xl border border-(--au-line) bg-(--au-soft) px-5 py-4 text-sm font-medium text-(--au-muted) transition hover:text-(--au-ink)"
      >
        <span className="inline-flex items-center gap-2">
          <Mail className="size-4" />
          {profile.email}
        </span>
        <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
