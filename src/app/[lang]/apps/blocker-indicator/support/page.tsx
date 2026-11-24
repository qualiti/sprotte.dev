import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bug, Clock, CreditCard, Lightbulb, Mail, Plus } from 'lucide-react';
import { isLocale } from '@/i18n/config';
import { APP_SLUG, getBlockerIndicatorCopy } from '@/i18n/apps/blocker-indicator';
import { CopyEmail } from '@/app/CopyEmail';
import { mailto, profile } from '@/app/content';
import { AppShell, buildBlockerIndicatorMetadata } from '../AppShell';
import {
  BulletList,
  DocumentFooterNav,
  DocumentHero,
  DocumentLayout,
  SectionHeading,
} from '../DocumentPrimitives';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildBlockerIndicatorMetadata(lang, 'support');
}

export default async function BlockerIndicatorSupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { support, common } = getBlockerIndicatorCopy(lang);
  const supportHref = mailto(common.emailSupportSubject);
  const bugHref = mailto(common.emailBugSubject);
  const featureHref = mailto(common.emailFeatureSubject);

  const toc = [
    { id: 'response-times', num: '01', label: support.responseTitle },
    { id: 'bug-reports', num: '02', label: support.bugReport.title },
    { id: 'feature-requests', num: '03', label: support.featureRequest.title },
    { id: 'billing', num: '04', label: support.billing.title },
    { id: 'faq', num: '05', label: support.faqTitle },
  ];

  return (
    <AppShell lang={lang} activePage="support">
      <DocumentHero
        eyebrow={support.eyebrow}
        title={support.title}
        subtitle={support.subtitle}
        common={common}
        contactHref={supportHref}
      />

      <DocumentLayout tocTitle={common.onThisPage} toc={toc}>
        <p className="au-display border-l-2 border-(--au-blue) pl-5 text-lg leading-relaxed text-(--au-ink)/90 md:text-xl">
          {support.intro}
        </p>

        {/* Direct Email CTA Card */}
        <div className="au-card mt-10 rounded-3xl p-6 sm:p-8">
          <h2 className="au-display text-2xl font-semibold">{support.channelsTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-(--au-muted)">{support.channelsText}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={supportHref}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-(--au-ink) px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <CopyEmail />
          </div>
        </div>

        {/* 01 Response times */}
        <section id="response-times" className="mt-14 scroll-mt-32 space-y-5">
          <SectionHeading num="01">{support.responseTitle}</SectionHeading>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-(--au-line) bg-(--au-line) sm:grid-cols-3">
            {support.responseItems.map((item) => (
              <div key={item.label} className="bg-white p-5">
                <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.08em] text-(--au-muted) uppercase">
                  <Clock className="size-3 text-(--au-blue)" />
                  {item.label}
                </p>
                <p className="au-display mt-2 text-lg font-semibold">{item.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-(--au-muted)">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 02 Bug reports */}
        <section
          id="bug-reports"
          className="mt-14 scroll-mt-32 space-y-5 border-t border-(--au-line) pt-12"
        >
          <SectionHeading num="02">{support.bugReport.title}</SectionHeading>
          <p className="leading-[1.75] text-(--au-ink)/75">{support.bugReport.intro}</p>
          <div className="au-card rounded-2xl p-6">
            <BulletList items={support.bugReport.items} />
            <div className="mt-6 border-t border-(--au-line) pt-5">
              <a
                href={bugHref}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-(--au-blue) px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-(--au-blue-deep)"
              >
                <Bug className="size-4" />
                {support.bugReport.cta}
              </a>
            </div>
          </div>
        </section>

        {/* 03 Feature requests */}
        <section
          id="feature-requests"
          className="mt-14 scroll-mt-32 space-y-5 border-t border-(--au-line) pt-12"
        >
          <SectionHeading num="03">{support.featureRequest.title}</SectionHeading>
          <p className="leading-[1.75] text-(--au-ink)/75">{support.featureRequest.intro}</p>
          <div className="au-card rounded-2xl p-6">
            <BulletList items={support.featureRequest.items} />
            <div className="mt-6 border-t border-(--au-line) pt-5">
              <a
                href={featureHref}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-(--au-line) bg-white px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-(--au-soft)"
              >
                <Lightbulb className="size-4 text-(--au-blue)" />
                {support.featureRequest.cta}
              </a>
            </div>
          </div>
        </section>

        {/* 04 Billing */}
        <section
          id="billing"
          className="mt-14 scroll-mt-32 space-y-5 border-t border-(--au-line) pt-12"
        >
          <SectionHeading num="04">{support.billing.title}</SectionHeading>
          <div className="rounded-2xl border border-(--au-line) bg-(--au-soft) p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-(--au-blue) shadow-sm">
                <CreditCard className="size-5" />
              </span>
              <p className="text-sm leading-relaxed text-(--au-ink)/80">{support.billing.text}</p>
            </div>
          </div>
        </section>

        {/* 05 Troubleshooting FAQ */}
        <section
          id="faq"
          className="mt-14 scroll-mt-32 space-y-5 border-t border-(--au-line) pt-12"
        >
          <SectionHeading num="05">{support.faqTitle}</SectionHeading>
          <div className="space-y-3">
            {support.faq.map((item) => (
              <details key={item.q} className="au-card rounded-2xl">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-semibold sm:text-base">
                  <span>{item.q}</span>
                  <Plus className="au-faq-icon size-4 shrink-0 text-(--au-muted) transition duration-200" />
                </summary>
                <p className="border-t border-(--au-line) px-5 py-4 text-sm leading-relaxed text-(--au-muted)">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <DocumentFooterNav
          links={[
            { href: `/${lang}${APP_SLUG}/docs`, label: support.relatedDocsLabel },
            { href: `/${lang}${APP_SLUG}/privacy`, label: support.relatedPrivacyLabel },
          ]}
        />
      </DocumentLayout>
    </AppShell>
  );
}
