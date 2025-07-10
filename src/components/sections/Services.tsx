import React from "react";
import styles from "./Services.module.css";

const servicesData = [
  {
    title: "Düğün Organizasyonları",
    description:
      "Hayatınızın en özel gününü, şık ve modern salonumuzda unutulmaz bir anıya dönüştürün.",
  },
  {
    title: "Nişan Törenleri",
    description:
      "Evliliğe ilk adımı atarken, size ve sevdiklerinize özel, samimi ve zarif bir ortam sunuyoruz.",
  },
  {
    title: "Kına Geceleri",
    description:
      "Geleneksel ve moderni birleştiren konseptlerimizle, eğlence dolu bir kına gecesi sizi bekliyor.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>Hizmetlerimiz</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
