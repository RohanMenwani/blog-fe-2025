import styles from './NavigationButtons.module.css';

export default function NavigationButtons() {
  return (
    <div className={styles.navButtonsRow}>
      <button className={styles.navBtn}>&lt; Previous</button>
      <button className={styles.navBtn}>Next &gt;</button>
    </div>
  );
}
