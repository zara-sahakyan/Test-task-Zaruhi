import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import { SearchBar } from '../searchbar/SearchBar';
import styles from './topbar.module.scss';

export function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__left}>
          <Logo />
          <SearchBar />
      </div>
      <div className={styles.topbar__menu}>
        <Menu />
      </div>
    </div>
  );
}
