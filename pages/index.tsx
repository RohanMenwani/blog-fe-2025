
import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/hero/Hero';
import styles from '@/styles/Home.module.css';
import Sidebar from '@/components/sidebar/Sidebar';
import AboutAuthor from '@/components/blog/AboutAuthor';
import BlogContent from '@/components/blog/BlogContent';
import NavigationButtons from '@/components/blog/NavigationButtons';
import AddCommentForm from '@/components/comments/AddCommentForm';
import CommentsSection from '@/components/comments/CommentsSection';
import RelatedArticles from '@/components/related/RelatedArticles';

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
      <Hero />
      <div className={styles.container}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/workout.svg"
            alt="Hero image for Full-Body Workouts"
            className={styles.heroImage}
            width={1200}
            height={400}
            priority
          />
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.mainContent}>
            <BlogContent />
            <AboutAuthor />
            <NavigationButtons />
            <CommentsSection />
            <AddCommentForm />
             
          </div>

          {/* Right sidebar */}
           <Sidebar />
        </div>
      </div>
      
      <RelatedArticles />
      </>
  );
}
