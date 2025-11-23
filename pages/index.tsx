
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {

  return (
    <>
      <Head>
        <title>The Ultimate Guide to Full-Body Workouts</title>
        <meta
          name="description"
          content="Discover exercises that target every muscle group, helping you build strength and endurance."
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      MAin hero image
      <div className={styles.container}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/f5bfade2-45a6-41aa-bd9c-d0b9c1077a28"
            alt="Hero image for Full-Body Workouts"
            className={styles.heroImage}
            width={1200}
            height={400}
            priority
          />
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.mainContent}>
            Contains blog detqails, Main center

          </div>

          {/* Right sidebar */}
          Sidebar On the right side
        </div>
      </div>

      Articelss section
    </>
  );
}
