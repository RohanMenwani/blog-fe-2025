import ExploreMore from './ExploreMore';
import TourGuides from './TourGuides';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ExploreMore />
      <TourGuides />
    </aside>
  );
}
