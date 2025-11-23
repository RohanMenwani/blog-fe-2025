import { useState, useEffect } from 'react';
import { Comment } from '@/lib/types';
import { commentsAPI } from '@/lib/api';
import CommentCard from './CommentCard';
import styles from './CommentsSection.module.css';

interface CommentsSectionProps {
  postSlug: string;
  postId: string;
}

export default function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        setLoading(true);
        setError(null);
        const data = await commentsAPI.getBySlug(postSlug);
        setComments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load comments');
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [postSlug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.commentSection}>
      <div className={styles.commentTitle}>
        Comments {comments.length > 0 && `(${comments.length})`}
      </div>

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

      {!loading && !error && comments.length === 0 && (
        <div className={styles.emptyState}>
          <p>No comments yet. Be the first to comment!</p>
        </div>
      )}

      {!loading && !error && comments.length > 0 && (
        <div className={styles.commentsList}>
          {comments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} formatDate={formatDate} />
          ))}
        </div>
      )}
    </div>
  );
}
