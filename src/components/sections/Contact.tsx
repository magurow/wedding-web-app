import React, { useState } from "react";
import styles from "./Contact.module.css";

const serviceOptions = ["Düğün", "Nişan", "Kına", "Diğer Kurumsal Etkinlikler"];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: serviceOptions[0],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server or email service.
    console.log("Form submitted:", formData);
    alert("Mesajınız başarıyla gönderildi!");
    setFormData({ name: "", service: serviceOptions[0], message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Bize Ulaşın</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.contactInfo}>
            <h3>İletişim Bilgileri</h3>
            <p>
              <strong>Adres:</strong> Örnek Mahallesi, Düğün Sokak No:123,
              Çankaya, Ankara
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+905551234567">+90 555 123 45 67</a>
            </p>
            <p>
              <strong>E-posta:</strong>{" "}
              <a href="mailto:info@dugunsarayi.com">info@dugunsarayi.com</a>
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Adınız Soyadınız</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="service">İlgilendiğiniz Hizmet</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
