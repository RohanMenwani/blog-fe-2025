import { useState, useEffect } from 'react';
import { Comment } from '@/lib/types';
import CommentCard from './CommentCard';
import styles from './CommentsSection.module.css';
import { mockComments } from '@/lib/mockData';

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true);
        // const response = await fetch('/api/comments');
        
        // console.log('__respn', response);
        
        
        // const data = await response.json();
        setComments(mockComments);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  return (
    <div className={styles.commentSection}>
      <div className={styles.commentTitle}>Comments</div>
      
      {loading && (
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading comments...</p>
        </div>
      )}
      
      {error && (
        <div className={styles.errorState}>
          <p>❌ {error}</p>
          <button onClick={() => window.location.reload()} className={styles.retryBtn}>
            Retry
          </button>
        </div>
      )}
      
      {!loading && !error && (
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
