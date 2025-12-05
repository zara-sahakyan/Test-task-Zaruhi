import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.module.scss';
import '../../assets/style.css'; 

interface IconItem {
  iconClass: string;   
  text: string;        
  path?: string;       
  url?: string;        
  onClick?: () => void; 
  badge?: number;      
}

const items: IconItem[] = [
  { iconClass: 'icon-Document', text: 'List', path: '/list' },
  { iconClass: 'icon-user1', text: 'Account', path: '/account' },
  { iconClass: 'icon-order', text: 'Quick Order', path: '/quick-order' },
  { iconClass: 'icon-cart', text: 'Cart', onClick: () => alert('Empty Cart!'), badge: 32 },
];

export function Menu() {
  return (
    <ul className={styles.menu__list}>
      {items.map((item, index) => {
        const iconWithBadge = (
          <span className={styles.menu__iconWrapper}>
            <i className={`${item.iconClass} ${styles.menu__icon}`}></i>
            {item.badge && <span className={styles.menu__badge}>{item.badge}</span>}
          </span>
        );

        if (item.path) {
          return (
            <li key={index} className={styles.menu__item}>
              <NavLink to={item.path} className={styles.menu__link}>
                {iconWithBadge}
                <span className={styles.menu__text}>{item.text}</span>
              </NavLink>
            </li>
          );
        } else if (item.url) {
          return (
            <li key={index} className={styles.menu__item}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.menu__link}
              >
                {iconWithBadge}
                <span className={styles.menu__text}>{item.text}</span>
              </a>
            </li>
          );
        } else if (item.onClick) {
          return (
            <li key={index} className={styles.menu__item}>
              <button
                className={styles.menu__link}
                type="button"
                onClick={item.onClick}
              >
                {iconWithBadge}
                <span className={styles.menu__text}>{item.text}</span>
              </button>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}
