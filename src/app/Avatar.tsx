import Image from 'next/image';
import { profile } from './content';

/** Round avatar, optionally with a green "online" dot. */
export function Avatar({
  size,
  online = false,
  priority = false,
  className = '',
}: {
  size: number;
  online?: boolean;
  /** For the above-the-fold avatar, which can be the largest paint on short screens. */
  priority?: boolean;
  className?: string;
}) {
  return (
    <span className={`relative block shrink-0 ${className}`} style={{ width: size, height: size }}>
      <Image
        src={profile.avatar}
        alt=""
        width={size}
        height={size}
        priority={priority}
        // One shared size so every avatar on the page reuses the same optimized file.
        sizes="104px"
        className="size-full rounded-full bg-[#e9eef5] object-cover"
      />
      {online && (
        <span
          className="absolute right-0 bottom-0 rounded-full border-2 border-white bg-[#22c55e]"
          style={{ width: Math.max(10, size * 0.27), height: Math.max(10, size * 0.27) }}
        />
      )}
    </span>
  );
}
