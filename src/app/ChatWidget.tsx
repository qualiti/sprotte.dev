'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import { X } from 'lucide-react';
import { ChatThread } from './ChatThread';
import { Avatar } from './Avatar';
import { useChatDictionary } from '@/i18n/chat';
import { profile } from './content';

type ChatContextValue = { open: boolean; openChat: () => void; closeChat: () => void };

const ChatContext = createContext<ChatContextValue | null>(null);

function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used inside <ChatProvider>');
  return ctx;
}

/** Set once the visitor opened the chat or dismissed the teaser; the teaser stays hidden after. */
const TEASER_KEY = 'chat-teaser-dismissed';

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  // The conversation mounts on first open and stays mounted, so closing doesn't lose progress.
  const [everOpened, setEverOpened] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const openChat = useCallback(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    sessionStorage.setItem(TEASER_KEY, '1');
    setEverOpened(true);
    setOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setOpen(false);
    // The opener may be gone (the teaser unmounts on open) or be <body> (Safari doesn't focus
    // buttons on click); fall back to the launcher so keyboard focus isn't lost.
    const target = returnFocusRef.current;
    if (target?.isConnected && target !== document.body) target.focus();
    else launcherRef.current?.focus();
  }, []);

  return (
    <ChatContext.Provider value={{ open, openChat, closeChat }}>
      {children}
      <ChatLauncher everOpened={everOpened} launcherRef={launcherRef} />
    </ChatContext.Provider>
  );
}

/** Any button on the page can open the chat panel. */
export function OpenChatButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openChat } = useChat();
  return (
    <button type="button" onClick={openChat} aria-haspopup="dialog" className={className}>
      {children}
    </button>
  );
}

function ChatHeader({ titleId, children }: { titleId?: string; children?: ReactNode }) {
  const dict = useChatDictionary();
  return (
    <div className="flex items-center gap-3 border-b border-(--au-line) px-4 py-3.5 sm:px-5">
      <Avatar size={38} online />
      <div className="min-w-0 flex-1">
        <p id={titleId} className="text-[0.95rem] font-semibold">
          {profile.displayName}
        </p>
        <p className="text-xs text-(--au-muted)">{dict.replies}</p>
      </div>
      {children}
    </div>
  );
}

function ChatLauncher({
  everOpened,
  launcherRef,
}: {
  everOpened: boolean;
  launcherRef: RefObject<HTMLButtonElement | null>;
}) {
  const { open, openChat, closeChat } = useChat();
  const t = useChatDictionary().launcher;
  const [teaser, setTeaser] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // A gentle teaser bubble, unless the visitor already opened the chat or dismissed it.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!sessionStorage.getItem(TEASER_KEY)) setTeaser(true);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeChat();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeChat]);

  function dismissTeaser() {
    sessionStorage.setItem(TEASER_KEY, '1');
    setTeaser(false);
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby="chat-title"
        tabIndex={-1}
        inert={!open}
        className={`au-surface flex h-[min(36rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-3xl outline-none motion-safe:transition motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[23rem] ${
          open
            ? 'pointer-events-auto visible translate-y-0 scale-100 opacity-100'
            : 'invisible translate-y-3 scale-95 opacity-0'
        }`}
      >
        <ChatHeader titleId="chat-title">
          <button
            type="button"
            onClick={closeChat}
            aria-label={t.closePanel}
            className="grid size-9 place-items-center rounded-full text-(--au-muted) transition hover:bg-black/5 hover:text-(--au-ink)"
          >
            <X className="size-4.5" />
          </button>
        </ChatHeader>
        {everOpened && <ChatThread className="flex-1" />}
      </div>

      <div className="pointer-events-auto flex items-center gap-3">
        {teaser && !everOpened && (
          <div className="au-pop au-surface flex items-center gap-1 rounded-2xl rounded-br-md py-1 pr-1 pl-4">
            <button type="button" onClick={openChat} className="py-2 text-sm font-medium">
              {t.teaser}
            </button>
            <button
              type="button"
              onClick={dismissTeaser}
              aria-label={t.dismiss}
              className="grid size-7 place-items-center rounded-full text-(--au-muted) hover:bg-black/5"
            >
              <X className="size-3.5" />
            </button>
          </div>
        )}

        <button
          ref={launcherRef}
          type="button"
          onClick={open ? closeChat : openChat}
          aria-expanded={open}
          aria-label={open ? t.close : t.open}
          className="rounded-full bg-(--au-blue) p-0.5 shadow-[0_10px_30px_-8px_rgb(10_124_255/0.55)] ring-2 ring-white transition hover:-translate-y-0.5"
        >
          <Avatar size={52} online />
        </button>
      </div>
    </div>
  );
}

/** The same conversation, embedded in the page. Starts typing once it scrolls into view. */
export function InlineChat() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="au-surface flex h-[30rem] flex-col overflow-hidden rounded-3xl">
      <ChatHeader />
      <ChatThread start={visible} className="flex-1" />
    </div>
  );
}
