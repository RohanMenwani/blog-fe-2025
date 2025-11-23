import Image from 'next/image';
import styles from './BlogContent.module.css';

export default function BlogContent() {
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
        <div className={styles.pubDate}>23 JANUARY 2025</div>
        {/* <span className={styles.exploreMoreLink}>Explore more</span> */}
      </div>

      <div className={styles.blogBody}>
        Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...
      </div>

      <div className={styles.highlightBox}>
        <b>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness.</b><br />
        Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
      </div>

      <div className={styles.blogBody}>
        With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
      </div>

      <div className={styles.blogBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...
      </div>
    </div>
  );
}
