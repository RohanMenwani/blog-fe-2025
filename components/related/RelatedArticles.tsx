import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';
import styles from './RelatedArticles.module.css';

interface RelatedArticlesProps {
  posts: BlogPost[];
  currentPostId: string;
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getExcerpt = (body: string, maxLength: number = 120) => {
    const cleaned = body.replace(/#{1,6}\s/g, '').replace(/\n/g, ' ');
    return cleaned.length > maxLength ? cleaned.substring(0, maxLength) + '...' : cleaned;
  };

  const placeholderImage = '/workout.svg';

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={styles.relatedArticlesSection}>
      <div className={styles.container}>
        <h2 className={styles.relatedTitle}>Related articles</h2>
        <div className={styles.relatedList}>
          {posts.map((post) => (
            <Link key={post._id} href={`/?slug=${post.slug}`} className={styles.relatedCard}>
              <Image
                className={styles.relatedImg}
                src={placeholderImage}
                alt={post.title}
                width={300}
                height={110}
              />
              <div className={styles.relatedContent}>
                <h3 className={styles.relatedTitleCard}>{post.title}</h3>
                <div className={styles.relatedMeta}>
                  {formatDate(post.date)}
                  {post.averageRating && post.averageRating > 0 && (
                    <span className={styles.rating}>
                      ⭐ {post.averageRating.toFixed(1)}
                    </span>
                  )}
                </div>
                <div className={styles.relatedAuthor}>{getExcerpt(post.body)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
