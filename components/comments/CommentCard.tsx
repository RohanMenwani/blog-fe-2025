import Image from 'next/image';
import { Comment } from '@/lib/types';
import styles from './CommentsSection.module.css';

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating));
  };

  return (
    <div className={styles.commentCard}>
      <div className={styles.commentHeaderRow}>
        <Image
          className={styles.commentAvatar}
          src={comment.avatar}
          alt="User avatar"
          width={30}
          height={30}
        />
        <div className={styles.commentAuthorMeta}>
          <div className={styles.commentAuthor}>{comment.author}</div>
          <div className={styles.commentDate}>{comment.date}</div>
        </div>
        <div className={styles.commentRating}>
          {renderStars(comment.rating)} {comment.rating.toFixed(1)}
        </div>
      </div>
      <div className={styles.commentBody}>{comment.content}</div>
    </div>
  );
}
