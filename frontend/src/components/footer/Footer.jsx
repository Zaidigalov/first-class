import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer({ color, image, width }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container} style={{ backgroundColor: color ? color : "#d9d9d9" }}>
        <p className={styles.description}>
          JSC «First Class Solutions» offers premium bookings for hotels, villas, private jets, and yachts through trusted top partners.
        </p>
        <a className={styles.phone} href=" tel:89033844842">
          +7 903 384-48-42
        </a>

        <Link to="/public-offer" className={`${styles.offer} ${styles["offer-mobile"]}`}>
          Public Offer
        </Link>

        <div className={styles.docs}>
          <p>INN: 9707025574</p>
          <p>OGRN: 1247700148959</p>
        </div>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.networks}>
          <a target="_blank" href="">
            Telegram
          </a>
          <a target="_blank" href="">
            instagram
          </a>
          <a target="_blank" href="">
            WhatsApp
          </a>
        </div>

        <div className={styles.bottom}>
          <p className={styles.fc}>2024 © JSC «First Class Solutions»</p>

          <Link className={styles.privacy} to="/privacy-policy">
            {width > 600 ? "Privacy & Cookie Policy" : "Privacy Policy"}
          </Link>

          {width >= 834 && (
            <Link to="/public-offer" className={styles.offer}>
              Public Offer
            </Link>
          )}
          <p className={styles.development}>Developed By Digital Trinity</p>
        </div>
      </div>
    </footer>
  );
}
