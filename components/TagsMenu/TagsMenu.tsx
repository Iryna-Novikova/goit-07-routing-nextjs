'use client';
import { useState } from 'react';
import css from './TagsMenu.module.css';

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuSwitcher = () => setIsOpen(!isOpen);
  return (
    <div className={css.menuContainer}>
      <button onClick={menuSwitcher} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {/* список тегів */}
          <li className={css.menuItem}>
            <a
              href={`url до сторінки за відповідним тегом`}
              className={css.menuLink}
            >
              Назва тегу
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
