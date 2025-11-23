import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { commentsAPI, ratingsAPI } from '@/lib/api';
import styles from './AddCommentForm.module.css';

interface AddCommentFormProps {
  postId: string;
  postSlug: string;
}

export default function AddCommentForm({ postId, postSlug }: AddCommentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const ratingOptions = [
    { value: 1, label: 'Bad', emoji: '😞', color: 'rateBad' },
    { value: 2, label: 'Average', emoji: '😐', color: 'rateAverage' },
    { value: 3, label: 'Normal', emoji: '🙂', color: 'rateNormal' },
    { value: 4, label: 'Nice', emoji: '😊', color: 'rateNice' },
    { value: 5, label: 'Good', emoji: '😃', color: 'rateGood' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim()) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    try {
      setSubmitting(true);
      setMessage(null);

      await commentsAPI.create(postId, name.trim(), comment.trim());

      if (selectedRating > 0) {
        await ratingsAPI.create(postId, name.trim(), selectedRating, comment.trim());
      }

      setMessage({ type: 'success', text: 'Comment submitted successfully! Refresh to see it.' });
      
      // Reset form
      setName('');
      setEmail('');
      setComment('');
      setSelectedRating(0);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error submitting comment:', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to submit comment',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit}>
      <div className={styles.addCommentTitle}>Add A Comment</div>

      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          {message.text}
        </div>
      )}

      <div className={styles.inputRow}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitting}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
        />
      </div>

      <div className={styles.inputRow}>
        <textarea
          rows={3}
          className={styles.input}
          placeholder="Comment *"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          disabled={submitting}
        />
      </div>

      <div className={styles.rateArticleRow}>
        <span>Rate The Usefulness Of The Article</span>
        <div className={styles.ratingButtons}>
          {ratingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles.rateBtn} ${styles[option.color]} ${
                selectedRating === option.value ? styles.selected : ''
              }`}
              onClick={() => setSelectedRating(option.value)}
              disabled={submitting}
              title={option.label}
            >
              {option.emoji} {option.label}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.sendBtn} type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Send'}
      </button>
    </form>
  );
}
