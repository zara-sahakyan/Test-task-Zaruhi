import styles from "./supportsection.module.scss";
import cartIcon from "../../assets/images/bag.svg";
import docIcon from "../../assets/images/hear.svg";
import userIcon from "../../assets/images/lamp.svg";

export default function SupportSection() {
  const links = [
    { icon: cartIcon, text: "Products Catalog", href: "#" },
    { icon: docIcon, text: "24/7 Customer Support", href: "#" },
    { icon: userIcon, text: "Product Ideas", href: "#" },
  ];

  return (
    <div className={styles["quick-links"]}>
      {links.map((link, index) => (
        <a key={index} href={link.href} className={styles["quick-links__item"]}>
          <img
            src={link.icon}
            alt={link.text}
            className={styles["quick-links__icon"]}
          />
          <span className={styles["quick-links__text"]}>{link.text}</span>
        </a>
      ))}
    </div>
  );
}
