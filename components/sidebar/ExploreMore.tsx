import Image from 'next/image';
import { exploreItems } from '@/lib/mockData';
import styles from './Sidebar.module.css';

export default function ExploreMore() {
  console.log('__exploreItems ',exploreItems);
  
  return (
    <div>
      <div className={styles.exploreMoreTitle}>Explore more</div>
      <div className={styles.exploreMoreList}>
        {exploreItems.map((item, index) => (
          <div key={index} className={styles.exploreMoreItem}>
            <Image
              className={styles.exploreMoreImg}
              src={`/${item.image}.svg`}
              alt={item.category}
              width={93}
              height={78}
            />
            <div className={styles.exploreMoreContent}>
              <b>{item.category}</b><br />
              {item.date}<br />
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
