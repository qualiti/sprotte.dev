import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/config';
import { APP_SLUG, getBlockerIndicatorCopy } from '@/i18n/apps/blocker-indicator';
import { mailto } from '@/app/content';
import { AppShell, buildBlockerIndicatorMetadata } from '../AppShell';
import {
  DocumentFooterNav,
  DocumentHero,
  DocumentLayout,
  LegalSections,
  splitNumberedTitle,
} from '../DocumentPrimitives';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return buildBlockerIndicatorMetadata(lang, 'terms');
}

export default async function BlockerIndicatorTermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { terms, common } = getBlockerIndicatorCopy(lang);
  const contactHref = mailto(common.emailSupportSubject);

  const toc = terms.sections.map((section) => ({
    id: section.id,
    ...splitNumberedTitle(section.title),
  }));

  return (
    <AppShell lang={lang} activePage="terms">
      <DocumentHero
        eyebrow={terms.eyebrow}
        title={terms.title}
        subtitle={terms.subtitle}
        common={common}
        contactHref={contactHref}
      />

      <DocumentLayout tocTitle={common.onThisPage} toc={toc}>
        <p className="au-display mb-12 border-l-2 border-(--au-blue) pl-5 text-lg leading-relaxed text-(--au-ink)/90 md:text-xl">
          {terms.intro}
        </p>

        <LegalSections sections={terms.sections} />

        <DocumentFooterNav
          links={[{ href: `/${lang}${APP_SLUG}/privacy`, label: terms.relatedLinkLabel }]}
          contactHref={contactHref}
        />
      </DocumentLayout>
    </AppShell>
  );
}
