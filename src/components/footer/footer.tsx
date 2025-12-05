import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__col}>
                    <h4 className={styles.footer__title}>Helpful Links</h4>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}><a href="#">Buyer's Guides</a></li>
                        <li className={styles.footer__item}><a href="#">Calculators</a></li>
                        <li className={styles.footer__item}><a href="#">All Brands</a></li>
                        <li className={styles.footer__item}><a href="#">Catalg Updates</a></li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <h4 className={styles.footer__title}>Customer Services</h4>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}><a href="#">Express Delivery</a></li>
                        <li className={styles.footer__item}><a href="#">Privacy Statement</a></li>
                        <li className={styles.footer__item}><a href="#">Terms of Use</a></li>
                        <li className={styles.footer__item}><a href="#">Pricing Policy</a></li>
                        <li className={styles.footer__item}><a href="#">Returns and Refunds</a></li>
                        <li className={styles.footer__item}><a href="#">Help and FAQ</a></li>
                        <li className={styles.footer__item}><a href="#">Return Points</a></li>
                        <li className={styles.footer__item}><a href="#">Returns and Orders</a></li>
                    </ul>
                </div>
                <div className={styles.footer__col}>
                    <h4 className={styles.footer__title}>Support</h4>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}><a href="#">Contact Us</a></li>
                        <li className={styles.footer__item}><a href="#">FAQ</a></li>
                        <li className={styles.footer__item}><a href="#">Feedback</a></li>
                        <li className={styles.footer__item}><a href="#">Live Chat</a></li>
                        <li className={styles.footer__item}><a href="#">My Account</a></li>
                        <li className={`${styles.footer__item} ${styles.footer__contact}`}>
                            <i className="icon-tel"></i>
                            <a href="tel:+844434672">
                                +(844) 434-672</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__subscribe}>
                    <h4 className={`${styles.footer__title} ${styles.footer__sbscribetxt}`}>Subscribe to our mailing list to receive exclusive
                        offers and the latest product updates</h4>
                    <form className={styles.footer__form}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className={styles.footer__input}
                        />
                        <button className={styles.footer__btn}>
                            Subscribe
                        </button>
                    </form>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/src/assets/images/cards.png"
                            alt="Promo"
                            className={styles.footer__image}
                        />
                    </a>
                </div>

            </div>

            <div className={styles.footer__bottom}>
                <p>© {new Date().getFullYear()} «Brand» 2022, All Rights Reserved.</p>
            </div>
        </footer>
    );
}
