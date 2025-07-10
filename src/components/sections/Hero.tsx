import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import weddingVideo from "../../assets/videos/wedding-bg.mp4";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure the video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle autoplay block
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src={weddingVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Hayalinizdeki Düğün Gerçek Olsun</h1>
        <p className={styles.subtitle}>Unutulmaz anlar için mükemmel mekan.</p>
        <a href="#contact" className={styles.ctaButton}>
          Teklif Alın
        </a>
      </div>
    </section>
  );
};

export default Hero;
