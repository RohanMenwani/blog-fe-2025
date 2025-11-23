import styles from './Hero.module.css';

interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>HOME / ARTICLES /</div>
        <h1 className={styles.blogTitle}>{title}</h1>
      </div>
    </header>
  );
}
