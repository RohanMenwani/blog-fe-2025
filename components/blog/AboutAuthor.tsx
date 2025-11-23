import Image from 'next/image';
import styles from './AboutAuthor.module.css';

export default function AboutAuthor() {
  return (
    <section className={styles.aboutAuthorSection}>
      <Image
        className={styles.aboutAuthorAvatar}
        src="/author.svg"
        alt="Author avatar"
        width={58}
        height={58}
      />
      <div className={styles.aboutAuthorTitle}>About Alex Carter</div>
      <div className={styles.aboutAuthorDesc}>
        With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
      </div>
    </section>
  );
}
