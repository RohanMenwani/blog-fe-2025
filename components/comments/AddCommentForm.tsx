import { useState, FormEvent } from 'react';
import Image from 'next/image';
import styles from './AddCommentForm.module.css';

export default function AddCommentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [selectedRating, setSelectedRating] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, comment, selectedRating });
    // Reset form
    setName('');
    setEmail('');
    setComment('');
    setSelectedRating('');
  };

  return (
    <form className={styles.addCommentForm} onSubmit={handleSubmit}>
      <div className={styles.addCommentTitle}>Add A Comment</div>
      
      <div className={styles.inputRow}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.inputRow}>
        <textarea
          rows={2}
          className={styles.input}
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      
      <div className={styles.rateArticleRow}>
        Rate The Usefulness Of The Article
        <span className={styles.ratingEmojiRow}>
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/e2aee86f-4e26-4f11-9fef-9f2a6db576c6"
            alt="Bad"
            width={20}
            height={20}
          />
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/e2aee86f-4e26-4f11-9fef-9f2a6db576c6"
            alt="Average"
            width={20}
            height={20}
          />
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/e2aee86f-4e26-4f11-9fef-9f2a6db576c6"
            alt="Normal"
            width={20}
            height={20}
          />
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/e2aee86f-4e26-4f11-9fef-9f2a6db576c6"
            alt="Nice"
            width={20}
            height={20}
          />
          <Image
            src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/e2aee86f-4e26-4f11-9fef-9f2a6db576c6"
            alt="Good"
            width={20}
            height={20}
          />
        </span>
        <button
          type="button"
          className={`${styles.rateBtn} ${styles.rateGood}`}
          onClick={() => setSelectedRating('good')}
        >
          Good
        </button>
      </div>
      
      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  );
}
