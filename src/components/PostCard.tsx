import Link from 'next/link';
import type { SlimPost } from '@nukipa/site-sdk';

/**
 * Card used by the blog index and the related-posts strip on a post
 * detail page. Restyle freely - the prop is the canonical `SlimPost`
 * shape from the SDK (`client.listPosts(...)` /
 * `client.listRelatedPosts(...)`); don't redefine it.
 *
 * Bilingual: pass `hrefPrefix="/en"` from the EN routes so the card
 * links to `/en/blog/<slug>`. Pass `locale="en-US"` so the date is
 * formatted in English. Defaults stay DE-friendly (German date locale,
 * root `/blog/<slug>` href).
 */
export function PostCard({
  post,
  hrefPrefix = '',
  locale = 'de-DE'
}: {
  post: SlimPost;
  hrefPrefix?: string;
  locale?: string;
}) {
  return (
    <Link
      href={`${hrefPrefix}/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[color:var(--color-accent)] hover:shadow-[0_12px_40px_-8px_rgba(0,84,201,0.12)]"
    >
      {post.cover?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover.url}
          alt={post.cover.alt || post.title}
          className="aspect-[16/9] w-full object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-[color:var(--color-fg)]">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {post.excerpt}
          </p>
        )}
        {post.published_at && (
          <time className="mt-4 block text-xs tracking-[0.01em] text-[color:var(--color-muted)]">
            {new Date(post.published_at).toLocaleDateString(locale, {
              year: 'numeric', month: 'short', day: 'numeric'
            })}
          </time>
        )}
      </div>
    </Link>
  );
}
