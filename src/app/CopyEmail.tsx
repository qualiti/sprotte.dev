'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useChatDictionary } from '@/i18n/chat';
import { profile } from './content';

export function CopyEmail() {
  const t = useChatDictionary().copyEmail;
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const resetRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetRef.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    clearTimeout(resetRef.current);
    resetRef.current = setTimeout(() => setStatus('idle'), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-(--au-line) bg-white px-3 py-1.5 text-xs font-medium text-(--au-muted) transition hover:text-(--au-ink)"
    >
      {status === 'copied' ? (
        <Check className="size-3.5 text-[#16a34a]" />
      ) : (
        <Copy className="size-3.5" />
      )}
      <span aria-live="polite">{t[status]}</span>
    </button>
  );
}
