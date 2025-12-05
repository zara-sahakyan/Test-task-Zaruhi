import Navigation from '../navigation/Navigation';
import { TopBar } from '../topbar/TopBar';
import { TopMenu } from '../topmenu/TopMenu';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <TopMenu/>
        <TopBar/>
        <Navigation />
      </div>
    </header>
  );
}
