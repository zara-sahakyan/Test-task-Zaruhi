import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.scss';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Resources", path: "/resources" },
  { name: "Services", path: "/services" },
  { name: "Locations", path: "/locations" },
  { name: "Careers", path: "/careers" },
  { name: "Support", path: "/support" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.navigation} role="navigation" aria-label="Navigation">
      <nav className={styles.navigation__nav} aria-label="Main Navigation">
        <button
          className={styles.navigation__burger}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <span className={styles.navigation__burgerLine}></span>
          <span className={styles.navigation__burgerLine}></span>
          <span className={styles.navigation__burgerLine}></span>
        </button>
        <div
          className={`${styles.navigation__links} ${
            isOpen ? styles['navigation__links--open'] : ''
          }`}
        >
          {navItems
            .filter(item => item.name !== "Home")
            .map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${styles.navigation__link}${
                    isActive ? ` ${styles['navigation__link--active']}` : ''
                  }`
                }
                onClick={() => setIsOpen(false)} 
              >
                {name}
              </NavLink>
            ))}
        </div>
        <div className={styles.navigation__contact}>
          <i className="icon-tel"></i>
          <a href="tel:+844434672">+(844) 434-672</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
