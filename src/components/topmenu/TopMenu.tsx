import { NavLink } from 'react-router-dom';
import styles from './topmenu.module.scss';

interface TopMenuItem {
  label: string;
  path: string;
}

const topMenuItems: TopMenuItem[] = [
  { label: 'Request a Sample', path: '/sample' },
  { label: 'Help', path: '/help' },
  { label: 'Contact', path: '/contact' },
];

export function TopMenu() {
  return (
    <nav className={styles.topmenu} aria-label="Top Menu">
      <ul className={styles.topmenu__list}>
        {topMenuItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path} className={styles.topmenu__link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
