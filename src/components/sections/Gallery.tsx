import React from "react";
import styles from "./Gallery.module.css";

const images = [
  "https://picsum.photos/seed/wedding1/600/400",
  "https://picsum.photos/seed/wedding2/600/400",
  "https://picsum.photos/seed/wedding3/600/400",
  "https://picsum.photos/seed/wedding4/600/400",
  "https://picsum.photos/seed/wedding5/600/400",
  "https://picsum.photos/seed/wedding6/600/400",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <h2 className={styles.title}>Galerimiz</h2>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={image} alt={`Düğün Salonu Galerisi ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
