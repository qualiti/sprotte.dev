'use client';
import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { ArrowUp, RotateCcw, Send } from 'lucide-react';
import { mailto, profile, services } from './content';
import { Avatar } from './Avatar';

type Stage = 'service' | 'timeline' | 'name' | 'email' | 'message' | 'review' | 'sent';

type Line = { text: string; summary?: boolean };
type Message = Line & { id: number; from: 'tony' | 'you' };

type Answers = {
  service: string;
  timeline: string;
  name: string;
  email: string;
  message: string;
};

const SOMETHING_ELSE = 'Something else';
const serviceOptions = [...services, SOMETHING_ELSE];
const timelineOptions = [
  'As soon as possible',
  'In the next 1–3 months',
  'Later this year',
  'Just exploring',
];

const greeting: Line[] = [
  { text: `Hi, I'm ${profile.firstName}. Thanks for stopping by!` },
  { text: 'What are you planning? Pick whatever fits best.' },
];

const emptyAnswers: Answers = { service: '', timeline: '', name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function buildMailto(a: Answers) {
  const body = [
    `Hi ${profile.firstName},`,
    '',
    `I'm looking for help with: ${a.service}`,
    `Timeline: ${a.timeline}`,
    '',
    a.message || '(No extra details yet.)',
    '',
    'Best,',
    a.name,
    a.email,
  ].join('\n');
  return mailto(`Project inquiry: ${a.service}`, body);
}

function summaryOf(a: Answers) {
  return [
    `What: ${a.service}`,
    `When: ${a.timeline}`,
    `From: ${a.name} · ${a.email}`,
    a.message ? `Note: ${a.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * A scripted conversation that collects a project inquiry and ends in a prefilled email.
 * No AI involved: Tony's lines are fixed, the visitor answers with chips and short inputs.
 */
export function ChatThread({
  start = true,
  className = '',
}: {
  /** The conversation begins once this turns true (e.g. when the inline chat scrolls into view). */
  start?: boolean;
  className?: string;
}) {
  const uid = useId();
  const [messages, setMessages] = useState<Message[]>([]);
  // Tony's lines waiting to be "typed"; delivery only runs once `start` is true.
  const [queue, setQueue] = useState<Line[]>(greeting);
  const [stage, setStage] = useState<Stage>('service');
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');

  const idRef = useRef(0);
  const interactedRef = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputAreaRef = useRef<HTMLDivElement>(null);

  const typing = start && queue.length > 0;

  // Deliver Tony's queued lines one by one, with a short "typing" pause.
  useEffect(() => {
    if (!start || queue.length === 0) return;
    const [next, ...rest] = queue;
    const delay = prefersReducedMotion() ? 0 : Math.min(1300, 450 + next.text.length * 14);
    const t = setTimeout(() => {
      const id = ++idRef.current;
      setMessages((m) => [...m, { ...next, id, from: 'tony' }]);
      setQueue(rest);
    }, delay);
    return () => clearTimeout(t);
  }, [start, queue]);

  // Keep the newest message in view.
  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTo({
        top: list.scrollHeight,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }
  }, [messages, typing]);

  // After the visitor answered, move focus to the next control so keyboard users can keep going.
  useEffect(() => {
    if (typing || !interactedRef.current) return;
    const target = inputAreaRef.current?.querySelector<HTMLElement>('input, textarea, button, a');
    target?.focus({ preventScroll: true });
  }, [stage, typing]);

  function reply(text: string, next: Stage, lines: Line[]) {
    interactedRef.current = true;
    const id = ++idRef.current;
    setMessages((m) => [...m, { id, from: 'you', text }]);
    setStage(next);
    setDraft('');
    setError('');
    setQueue((q) => [...q, ...lines]);
  }

  function pickService(service: string) {
    setAnswers((a) => ({ ...a, service }));
    reply(service, 'timeline', [
      {
        text:
          service === SOMETHING_ELSE
            ? "Sounds interesting. I'm curious!"
            : `${service}, nice. That's right up my alley.`,
      },
      { text: 'When would you like to get started?' },
    ]);
  }

  function pickTimeline(timeline: string) {
    setAnswers((a) => ({ ...a, timeline }));
    reply(timeline, 'name', [{ text: 'Got it. And what should I call you?' }]);
  }

  function submitText(event: FormEvent) {
    event.preventDefault();
    const value = draft.trim();

    if (stage === 'name') {
      if (!value) return setError('Just a first name is fine.');
      setAnswers((a) => ({ ...a, name: value }));
      reply(value, 'email', [
        { text: `Nice to meet you, ${value}.` },
        { text: 'Which email address should I reply to?' },
      ]);
    } else if (stage === 'email') {
      if (!emailPattern.test(value)) return setError('That email address looks incomplete.');
      setAnswers((a) => ({ ...a, email: value }));
      reply(value, 'message', [
        { text: 'Anything else I should know? A sentence or two is plenty, or skip it.' },
      ]);
    } else if (stage === 'message') {
      finish(value);
    }
  }

  function finish(message: string) {
    const final = { ...answers, message };
    setAnswers(final);
    reply(message || 'Nothing else for now.', 'review', [
      { text: "Perfect. Here's what I'll receive:" },
      { text: summaryOf(final), summary: true },
    ]);
  }

  function markSent() {
    reply(`Send to ${profile.firstName}`, 'sent', [
      { text: 'Your email app should open with everything filled in. Just hit send.' },
      { text: `I usually reply ${profile.replyTime}. Talk soon!` },
    ]);
  }

  function restart() {
    interactedRef.current = true;
    setMessages([]);
    setAnswers(emptyAnswers);
    setStage('service');
    setDraft('');
    setError('');
    setQueue([{ text: "Let's start over. What are you planning?" }]);
  }

  return (
    <div className={`flex min-h-0 flex-col ${className}`}>
      <div
        ref={listRef}
        aria-live="polite"
        aria-relevant="additions"
        className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-5 sm:px-5"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`au-msg flex items-end gap-2 ${m.from === 'you' ? 'justify-end' : ''}`}
          >
            {m.from === 'tony' && <Avatar size={26} className="mb-0.5" />}
            <p
              className={
                m.from === 'you'
                  ? 'max-w-[80%] rounded-2xl rounded-br-md bg-(--au-blue) px-3.5 py-2 text-[0.94rem] leading-snug text-white'
                  : m.summary
                    ? 'max-w-[85%] rounded-2xl rounded-bl-md border border-(--au-line) bg-(--au-soft) px-3.5 py-3 text-[0.9rem] leading-relaxed whitespace-pre-line text-(--au-ink)'
                    : 'max-w-[80%] rounded-2xl rounded-bl-md bg-[#eef2f7] px-3.5 py-2 text-[0.94rem] leading-snug text-(--au-ink)'
              }
            >
              <span className="sr-only">
                {m.from === 'tony' ? `${profile.firstName}: ` : 'You: '}
              </span>
              {m.text}
            </p>
          </div>
        ))}

        {typing && (
          <div className="flex items-end gap-2">
            <Avatar size={26} className="mb-0.5" />
            <span className="au-typing inline-flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#eef2f7] px-3.5 py-3">
              <span />
              <span />
              <span />
              <span className="sr-only">{profile.firstName} is typing</span>
            </span>
          </div>
        )}
      </div>

      <div
        ref={inputAreaRef}
        // Inert (not just faded) so keyboard users can't answer before the question appears.
        inert={typing || messages.length === 0}
        className={`border-t border-(--au-line) px-4 py-3.5 transition-opacity sm:px-5 ${
          typing || messages.length === 0 ? 'opacity-40' : ''
        }`}
        aria-busy={typing}
      >
        {stage === 'service' && (
          <Chips label="What are you planning?" options={serviceOptions} onPick={pickService} />
        )}
        {stage === 'timeline' && (
          <Chips label="When to start" options={timelineOptions} onPick={pickTimeline} />
        )}

        {(stage === 'name' || stage === 'email' || stage === 'message') && (
          <form onSubmit={submitText} noValidate>
            <div className="flex items-end gap-2">
              <label htmlFor={`${uid}-${stage}`} className="sr-only">
                {stage === 'name'
                  ? 'Your name'
                  : stage === 'email'
                    ? 'Your email address'
                    : 'Anything else (optional)'}
              </label>
              {stage === 'message' ? (
                <textarea
                  id={`${uid}-${stage}`}
                  rows={2}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      finish(draft.trim());
                    }
                  }}
                  placeholder="A link, an idea, a problem you're stuck on…"
                  className="min-h-11 flex-1 resize-none rounded-2xl border border-(--au-line) bg-white px-3.5 py-2.5 text-[0.94rem] outline-none placeholder:text-(--au-muted)/70 focus:border-(--au-blue)"
                />
              ) : (
                <input
                  id={`${uid}-${stage}`}
                  type={stage === 'email' ? 'email' : 'text'}
                  autoComplete={stage === 'email' ? 'email' : 'name'}
                  value={draft}
                  onChange={(e) => {
                    setDraft(e.target.value);
                    setError('');
                  }}
                  placeholder={stage === 'email' ? 'you@company.com' : 'Your name'}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${uid}-${stage}-error` : undefined}
                  className="h-11 flex-1 rounded-full border border-(--au-line) bg-white px-4 text-[0.94rem] outline-none placeholder:text-(--au-muted)/70 focus:border-(--au-blue)"
                />
              )}
              <button
                type="submit"
                aria-label="Send answer"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-(--au-blue) text-white transition hover:bg-(--au-blue-deep)"
              >
                <ArrowUp className="size-4.5" />
              </button>
            </div>
            <div className="mt-2 flex min-h-5 items-center justify-between text-xs">
              <span id={`${uid}-${stage}-error`} className="text-[#c2410c]" role="alert">
                {error}
              </span>
              {stage === 'message' && (
                <button
                  type="button"
                  onClick={() => finish('')}
                  className="font-medium text-(--au-muted) hover:text-(--au-ink)"
                >
                  Skip
                </button>
              )}
            </div>
          </form>
        )}

        {stage === 'review' && (
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={buildMailto(answers)}
              onClick={markSent}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-(--au-blue) px-5 text-sm font-semibold text-white transition hover:bg-(--au-blue-deep)"
            >
              Send to {profile.firstName} <Send className="size-4" />
            </a>
            <button
              type="button"
              onClick={restart}
              className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-(--au-muted) hover:text-(--au-ink)"
            >
              <RotateCcw className="size-3.5" /> Start over
            </button>
          </div>
        )}

        {stage === 'sent' && (
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-(--au-muted)">
            <span>
              Nothing opened?{' '}
              <a href={mailto()} className="font-medium text-(--au-blue)">
                {profile.email}
              </a>
            </span>
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center gap-1.5 font-medium hover:text-(--au-ink)"
            >
              <RotateCcw className="size-3.5" /> New message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Chips({
  label,
  options,
  onPick,
}: {
  label: string;
  options: string[];
  onPick: (value: string) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onPick(option)}
          className="rounded-full border border-(--au-blue)/30 bg-white px-3.5 py-2 text-sm font-medium text-(--au-blue-deep) transition hover:border-(--au-blue) hover:bg-(--au-blue)/5"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
