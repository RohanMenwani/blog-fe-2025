import Image from 'next/image';
import { Comment } from '@/lib/types';
import styles from './CommentsSection.module.css';

interface CommentCardProps {
  comment: Comment;
  formatDate: (date: string) => string;
}

export default function CommentCard({ comment, formatDate }: CommentCardProps) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author)}&background=random&size=80`;

  return (
    <div className={styles.commentCard}>
      <div className={styles.commentHeaderRow}>
        <Image
          className={styles.commentAvatar}
          src={avatarUrl}
          alt={`${comment.author} avatar`}
          width={30}
          height={30}
        />
        <div className={styles.commentAuthorMeta}>
          <div className={styles.commentAuthor}>{comment.author}</div>
          <div className={styles.commentDate}>{formatDate(comment.createdAt)}</div>
        </div>
      </div>
      <div className={styles.commentBody}>{comment.comment}</div>
    </div>
  );
}
