import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>HOME / ARTICLES /</div>
        <h1 className={styles.blogTitle}>The Ultimate Guide to Full-Body Workouts</h1>
      </div>
    </header>
  );
}
