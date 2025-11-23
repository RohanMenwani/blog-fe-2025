import Image from 'next/image';
import styles from './BlogContent.module.css';

interface BlogContentProps {
  body: string;
  date: string;
  commentCount: number;
  averageRating: number;
}

export default function BlogContent({ body, date, commentCount, averageRating }: BlogContentProps) {

  const paragraphs = body.split('\n\n').filter(p => p.trim());

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div>
      <div className={styles.authorMetaRow}>
        <div className={styles.authorInfo}>
          <Image
            className={styles.authorAvatar}
            src="/author.svg"
            alt="Author avatar"
            width={34}
            height={34}
          />
          <div className={styles.authorName}>ALEX CARTER</div>
        </div>
        <div className={styles.pubDate}>{date}</div>

      </div>

      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className={styles.heading2}>
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className={styles.heading3}>
              {paragraph.replace('### ', '')}
            </h3>
          );
        }

        if (paragraph.includes('\n- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className={styles.bulletList}>
              {items.map((item, i) => (
                <li key={i}>{item.replace('- ', '')}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className={styles.blogBody}>
            {paragraph}
          </p>
        );
      })}

      <div className={styles.highlightBox}>
        <b>Pro Tip:</b> Stay consistent with your workout routine and track your progress regularly. Small improvements compound over time!
      </div>
    </div>
  );
}
