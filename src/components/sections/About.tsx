import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hakkımızda</h2>
        <p className={styles.description}>
          Hayallerinizi süsleyen o özel günü, profesyonel ekibimiz ve büyüleyici
          atmosferimizle unutulmaz kılıyoruz. Yılların tecrübesiyle, her detayı
          özenle planlıyor ve size sadece anın tadını çıkarmak kalıyor. Geniş ve
          ferah salonumuz, modern dekorasyonumuz ve eşsiz hizmet anlayışımızla
          en mutlu gününüzde yanınızdayız.
        </p>
      </div>
    </section>
  );
};

export default About;
