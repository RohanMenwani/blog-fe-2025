import Image from 'next/image';
import { tourGuides } from '@/lib/mockData';
import styles from './Sidebar.module.css';

export default function TourGuides() {
  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating));
  };

  return (
    <div>
      <div className={styles.tourGuidesTitle}>Tour Guides</div>
      <div className={styles.tourGuidesList}>
        {tourGuides.map((guide, index) => (
          <div key={index} className={styles.guideRow}>
            <Image
              className={styles.guideAvatar}
              src={`/${guide.avatar}.svg`}
              alt="Guide avatar"
              width={33}
              height={33}
            />
            <div className={styles.guideInfo}>
              <div className={styles.guideName}>{guide.name}</div>
              <div className={styles.guideMeta}>{guide.location}</div>
            </div>
            <div className={styles.guideRating}>
              {renderStars(guide.rating)} {guide.rating.toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
