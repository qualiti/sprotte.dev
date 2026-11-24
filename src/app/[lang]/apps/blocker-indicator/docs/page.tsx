import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AlertTriangle, Info, Terminal } from 'lucide-react';
import { isLocale } from '@/i18n/config';
import { APP_SLUG, getBlockerIndicatorCopy } from '@/i18n/apps/blocker-indicator';
import { mailto } from '@/app/content';
import { AppShell, buildBlockerIndicatorMetadata } from '../AppShell';
import {
  BulletList,
  DocumentFooterNav,
  DocumentHero,
  DocumentLayout,
  SectionHeading,
  splitNumberedTitle,
} from '../DocumentPrimitives';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildBlockerIndicatorMetadata(lang, 'docs');
}

export default async function BlockerIndicatorDocsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { docs, common } = getBlockerIndicatorCopy(lang);
  const contactHref = mailto(common.emailSupportSubject);

  const toc = [
    { id: docs.quickStartId, num: 'QS', label: docs.quickStartTitle },
    ...docs.features.map((feature) => ({
      id: feature.id,
      ...splitNumberedTitle(feature.title),
    })),
  ];

  return (
    <AppShell lang={lang} activePage="docs">
      <DocumentHero
        eyebrow={docs.eyebrow}
        title={docs.title}
        subtitle={docs.subtitle}
        common={common}
        contactHref={contactHref}
      />

      <DocumentLayout tocTitle={common.onThisPage} toc={toc}>
        <p className="au-display border-l-2 border-(--au-blue) pl-5 text-lg leading-relaxed text-(--au-ink)/90 md:text-xl">
          {docs.intro}
        </p>

        {/* Quick Start Guide */}
        <section id={docs.quickStartId} className="mt-14 scroll-mt-32 space-y-5">
          <SectionHeading num="QS">{docs.quickStartTitle}</SectionHeading>
          <p className="leading-[1.75] text-(--au-ink)/75">{docs.quickStartIntro}</p>

          <ol className="space-y-3">
            {docs.quickStartSteps.map((item) => (
              <li
                key={item.step}
                className="au-card grid gap-4 rounded-2xl p-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:p-6"
              >
                <span className="au-display text-2xl leading-none font-semibold text-(--au-blue)/40 tabular-nums">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-(--au-muted)">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Feature Reference */}
        <div className="mt-16 divide-y divide-(--au-line) border-t border-(--au-line)">
          {docs.features.map((feature) => {
            const { num, label } = splitNumberedTitle(feature.title);
            return (
              <section
                key={feature.id}
                id={feature.id}
                className="scroll-mt-32 space-y-5 py-12 last:pb-0"
              >
                <div className="space-y-2">
                  <SectionHeading num={num}>{label}</SectionHeading>
                  <p className="text-base font-medium text-(--au-ink)/85">{feature.summary}</p>
                </div>

                {feature.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-[1.75] text-(--au-ink)/75">
                    {paragraph}
                  </p>
                ))}

                {feature.bullets && <BulletList items={feature.bullets} />}

                {feature.codeBlock && (
                  <div className="overflow-hidden rounded-2xl border border-(--au-line) bg-white shadow-[0_1px_2px_rgb(11_18_32/0.04),0_16px_32px_-20px_rgb(11_18_32/0.18)]">
                    <div className="flex items-center gap-2 border-b border-(--au-line) bg-(--au-soft) px-4 py-2.5 font-mono text-xs font-semibold text-(--au-muted)">
                      <Terminal className="size-3.5" />
                      {feature.codeBlock.label}
                    </div>
                    <pre className="overflow-x-auto p-4 font-mono text-[0.825rem] leading-relaxed text-(--au-ink)">
                      <code>{feature.codeBlock.lines.join('\n')}</code>
                    </pre>
                  </div>
                )}

                {feature.callout && (
                  <div
                    className={`rounded-2xl border p-5 ${
                      feature.callout.tone === 'warning'
                        ? 'border-[#f3d49c] bg-[#fffaf0]'
                        : 'border-(--au-blue)/20 bg-[#f4f9ff]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-xl bg-white shadow-sm ${
                          feature.callout.tone === 'warning' ? 'text-[#b56600]' : 'text-(--au-blue)'
                        }`}
                      >
                        {feature.callout.tone === 'warning' ? (
                          <AlertTriangle className="size-4.5" />
                        ) : (
                          <Info className="size-4.5" />
                        )}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{feature.callout.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-(--au-ink)/75">
                          {feature.callout.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <DocumentFooterNav
          links={[
            { href: `/${lang}${APP_SLUG}/support`, label: docs.relatedSupportLabel },
            { href: `/${lang}${APP_SLUG}/privacy`, label: docs.relatedPrivacyLabel },
          ]}
        />
      </DocumentLayout>
    </AppShell>
  );
}
