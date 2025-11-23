import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import Hero from '@/components/hero/Hero';
import BlogContent from '@/components/blog/BlogContent';
import AboutAuthor from '@/components/blog/AboutAuthor';
import NavigationButtons from '@/components/blog/NavigationButtons';
import CommentsSection from '@/components/comments/CommentsSection';
import AddCommentForm from '@/components/comments/AddCommentForm';
import Sidebar from '@/components/sidebar/Sidebar';
import RelatedArticles from '@/components/related/RelatedArticles';
import { BlogPost } from '@/lib/types';
import { postsAPI } from '@/lib/api';
import styles from '@/styles/Home.module.css';


interface HomeProps {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
}

export default function Home({ post, relatedPosts }: HomeProps) {
  const [isEditingOpen, setIsEditingOpen] = useState(false);

  if (!post) {
    return (
      <div className={styles.errorContainer}>
        <h1>Post Not Found</h1>
        <p>The blog post could not be loaded.</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body.substring(0, 160)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero title={post.title} />

      <div className={styles.container}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/workout.svg"
            alt={post.title}
            className={styles.heroImage}
            width={1200}
            height={400}
            priority
          />
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.mainContent}>
            <BlogContent
              body={post.body}
              date={formatDate(post.date)}
              commentCount={post.commentCount || 0}
              averageRating={post.averageRating || 0}
            />
            <AboutAuthor />
            <NavigationButtons />
          </div>

          <Sidebar />
        </div>
      </div>
      <div className={styles.footerContainer}>

            <CommentsSection postSlug={post.slug} postId={post._id} />
            <AddCommentForm postId={post._id} postSlug={post.slug} />
      </div>

      <RelatedArticles posts={relatedPosts} currentPostId={post._id} />

    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const allPosts = await postsAPI.getAll();
    
    if (!allPosts || allPosts.length === 0) {
      return {
        props: {
          post: null,
          relatedPosts: [],
        },
      };
    }

    // Get the first post (or you can use a specific slug)
    const post = allPosts[0];
    
    // Get related posts (exclude current post)
    const relatedPosts = allPosts.filter(p => p._id !== post._id).slice(0, 4);

    return {
      props: {
        post,
        relatedPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null,
        relatedPosts: [],
      },
    };
  }
};
