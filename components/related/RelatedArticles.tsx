import Image from 'next/image';
import { relatedArticles } from '@/lib/mockData';
import styles from './RelatedArticles.module.css';

export default function RelatedArticles() {
  return (
    <section className={styles.relatedArticlesSection}>
      <div className={styles.container}>
        <h2 className={styles.relatedTitle}>Related articles</h2>
        <div className={styles.relatedList}>
          {relatedArticles.map((article, index) => (
            <div key={index} className={styles.relatedCard}>
              <Image
                className={styles.relatedImg}
                src={article.image}
                alt={article.title}
                width={300}
                height={110}
              />
              <div className={styles.relatedContent}>
                <h3 className={styles.relatedTitleCard}>{article.title}</h3>
                <div className={styles.relatedMeta}>By {article.author}</div>
                <div className={styles.relatedAuthor}>{article.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
