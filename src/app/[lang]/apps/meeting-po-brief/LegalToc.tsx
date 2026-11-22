'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type TocItem = { id: string; num: string; label: string };

/** Highlights the section currently in view. Without JS it is still a plain list of anchors. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(undefined);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        // The first section (in document order) that is inside the reading band wins.
        const first = ids.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: '-120px 0px -55% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function TocList({ items, active }: { items: TocItem[]; active?: string }) {
  return (
    <ol className="relative space-y-0.5 border-l border-(--au-line)">
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={`-ml-px flex gap-3 border-l-2 py-1.5 pr-2 pl-4 text-[0.825rem] leading-snug transition ${
                isActive
                  ? 'border-(--au-blue) font-semibold text-(--au-ink)'
                  : 'border-transparent text-(--au-muted) hover:border-(--au-ink)/20 hover:text-(--au-ink)'
              }`}
            >
              <span
                className={`w-5 shrink-0 font-mono text-[0.7rem] tabular-nums ${
                  isActive ? 'text-(--au-blue)' : 'text-(--au-muted)/70'
                }`}
              >
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function LegalToc({ items, title }: { items: TocItem[]; title: string }) {
  const active = useActiveSection(items.map((i) => i.id));

  return (
    <>
      {/* Phones and tablets: a compact disclosure above the text */}
      <details className="au-card group rounded-2xl lg:hidden">
        <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold">
          {title}
          <ChevronDown className="size-4 text-(--au-muted) transition group-open:rotate-180" />
        </summary>
        <nav aria-label={title} className="border-t border-(--au-line) px-4 pt-3 pb-4">
          <TocList items={items} />
        </nav>
      </details>

      {/* Desktop: sticky rail */}
      <nav aria-label={title} className="sticky top-28 hidden lg:block">
        <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-(--au-muted) uppercase">
          {title}
        </p>
        <TocList items={items} active={active} />
      </nav>
    </>
  );
}
