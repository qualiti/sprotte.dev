import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/config';
import { APP_SLUG, getMeetingPoBriefCopy } from '@/i18n/apps/meeting-po-brief';
import { mailto } from '@/app/content';
import { AppShell, buildMeetingPoBriefMetadata } from '../AppShell';
import {
  LegalFooterNav,
  LegalHero,
  LegalLayout,
  LegalSections,
  splitNumberedTitle,
} from '../LegalDocument';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildMeetingPoBriefMetadata(lang, 'terms');
}

export default async function MeetingPoBriefTermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { terms, common } = getMeetingPoBriefCopy(lang);
  const contactHref = mailto(common.emailSupportSubject);

  const toc = terms.sections.map((section) => ({
    id: section.id,
    ...splitNumberedTitle(section.title),
  }));

  return (
    <AppShell lang={lang} activePage="terms">
      <LegalHero
        eyebrow={terms.eyebrow}
        title={terms.title}
        subtitle={terms.subtitle}
        common={common}
        contactHref={contactHref}
      />

      <LegalLayout tocTitle={common.onThisPage} toc={toc}>
        <p className="au-display mb-12 border-l-2 border-(--au-blue) pl-5 text-lg leading-relaxed text-(--au-ink)/90 md:text-xl">
          {terms.intro}
        </p>

        <LegalSections sections={terms.sections} />

        <LegalFooterNav
          relatedHref={`/${lang}${APP_SLUG}/privacy`}
          relatedLabel={terms.relatedLinkLabel}
          contactHref={contactHref}
        />
      </LegalLayout>
    </AppShell>
  );
}
