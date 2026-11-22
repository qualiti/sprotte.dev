import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Ban, CloudOff, Database, EyeOff, KeyRound, ShieldCheck, Trash2 } from 'lucide-react';
import { isLocale } from '@/i18n/config';
import { APP_SLUG, getMeetingPoBriefCopy } from '@/i18n/apps/meeting-po-brief';
import { mailto } from '@/app/content';
import { AppShell, buildMeetingPoBriefMetadata } from '../AppShell';
import {
  BulletList,
  LegalFooterNav,
  LegalHero,
  LegalLayout,
  LegalSections,
  SectionHeading,
  splitNumberedTitle,
} from '../LegalDocument';

const glanceIcons = [CloudOff, EyeOff, Trash2];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMeetingPoBriefMetadata(lang, 'privacy');
}

export default async function MeetingPoBriefPrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { privacy, common } = getMeetingPoBriefCopy(lang);
  const contactHref = mailto(common.emailPrivacySubject);

  const toc = [
    { id: 'permissions', num: 'A', label: privacy.permissionsTitle },
    { id: 'stored-data', num: 'B', label: privacy.storedDataTitle },
    ...privacy.sections.map((section) => ({
      id: section.id,
      ...splitNumberedTitle(section.title),
    })),
  ];

  return (
    <AppShell lang={lang} activePage="privacy">
      <LegalHero
        eyebrow={privacy.eyebrow}
        title={privacy.title}
        subtitle={privacy.subtitle}
        common={common}
        contactHref={contactHref}
      />

      <LegalLayout tocTitle={common.onThisPage} toc={toc}>
        <p className="au-display border-l-2 border-(--au-blue) pl-5 text-lg leading-relaxed text-(--au-ink)/90 md:text-xl">
          {privacy.intro}
        </p>

        {/* At a glance */}
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-(--au-line) bg-(--au-line) sm:grid-cols-3">
          {privacy.atAGlance.map((item, i) => {
            const Icon = glanceIcons[i];
            return (
              <li key={item.title} className="bg-white p-5">
                <span className="grid size-9 place-items-center rounded-xl bg-(--au-blue)/10 text-(--au-blue)">
                  <Icon className="size-4.5" />
                </span>
                <h2 className="mt-4 text-sm font-semibold">{item.title}</h2>
                <p className="mt-1.5 text-[0.825rem] leading-relaxed text-(--au-muted)">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

        {/* A — Forge permissions, presented like a manifest */}
        <section id="permissions" className="mt-16 scroll-mt-32 space-y-5">
          <SectionHeading num="A">{privacy.permissionsTitle}</SectionHeading>
          <p className="leading-[1.75] text-(--au-ink)/75">{privacy.permissionsIntro}</p>

          <div className="overflow-hidden rounded-2xl border border-(--au-line) bg-white shadow-[0_1px_2px_rgb(11_18_32/0.04),0_18px_40px_-24px_rgb(11_18_32/0.2)]">
            <div className="flex items-center gap-2 border-b border-(--au-line) bg-(--au-soft) px-5 py-2.5 font-mono text-xs text-(--au-muted)">
              <KeyRound className="size-3.5" />
              manifest.yml · permissions.scopes
            </div>
            <ul className="divide-y divide-(--au-line)">
              {privacy.permissions.map((perm, i) => {
                const isStorage = perm.scope.startsWith('storage');
                return (
                  <li
                    key={perm.scope}
                    className="grid gap-x-5 gap-y-2 px-5 py-5 sm:grid-cols-[11.5rem_minmax(0,1fr)]"
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start">
                      <code className="font-mono text-[0.825rem] font-semibold text-(--au-ink)">
                        <span className="mr-2 text-(--au-muted)/60 select-none" aria-hidden>
                          {i + 1}
                        </span>
                        {perm.scope}
                      </code>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${
                          isStorage
                            ? 'bg-[#e6f8f0] text-[#11795a]'
                            : 'bg-(--au-blue)/10 text-(--au-blue-deep)'
                        }`}
                      >
                        {isStorage ? (
                          <Database className="size-3" />
                        ) : (
                          <ShieldCheck className="size-3" />
                        )}
                        {perm.access}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-(--au-muted)">{perm.purpose}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* B — Stored data */}
        <section id="stored-data" className="mt-16 scroll-mt-32 space-y-5">
          <SectionHeading num="B">{privacy.storedDataTitle}</SectionHeading>
          <p className="leading-[1.75] text-(--au-ink)/75">{privacy.storedDataIntro}</p>

          <ol className="space-y-4">
            {privacy.storedData.map((category, i) => (
              <li
                key={category.title}
                className="au-card grid gap-4 rounded-2xl p-6 sm:grid-cols-[2.5rem_minmax(0,1fr)]"
              >
                <span className="au-display text-2xl leading-none font-semibold text-(--au-blue)/35 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{category.title}</h3>
                  <p className="mt-1 text-sm text-(--au-muted)">{category.description}</p>
                  <div className="mt-4 border-t border-dashed border-(--au-line) pt-4 text-sm">
                    <BulletList items={category.details} />
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative overflow-hidden rounded-2xl border border-[#f3d2cf] bg-[#fff7f6] p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[#c2412d] shadow-sm">
                <Ban className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{privacy.notStoredTitle}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-(--au-ink)/75">
                  {privacy.notStoredText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 border-t border-(--au-line) pt-12">
          <LegalSections sections={privacy.sections} />
        </div>

        <LegalFooterNav
          relatedHref={`/${lang}${APP_SLUG}/terms`}
          relatedLabel={privacy.relatedLinkLabel}
          contactHref={contactHref}
        />
      </LegalLayout>
    </AppShell>
  );
}
