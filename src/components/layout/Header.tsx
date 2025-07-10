import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">Düğün Sarayı</a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#about">Hakkımızda</a>
          </li>
          <li>
            <a href="#services">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="#gallery">Galeri</a>
          </li>
          <li>
            <a href="#contact">İletişim</a>
          </li>
          <li>
            <a href="#location">Konum</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
