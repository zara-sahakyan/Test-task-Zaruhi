import { useState } from "react";
import styles from "./categories.module.scss";
import cart1 from "../../assets/images/cart1.png";
import cart2 from "../../assets/images/cart2.png";
import cart3 from "../../assets/images/cart3.png";
import cart4 from "../../assets/images/cart4.png";
import cart5 from "../../assets/images/cart5.png";
import cart6 from "../../assets/images/cart6.png";
import cart7 from "../../assets/images/cart7.png";

interface Category {
  img: string;
  name: string;
}

const categories = [
    { img: cart1, name: "Abrasives" },
    { img: cart2, name: "Electrical" },
    { img: cart3, name: "Welding" },
    { img: cart4, name: "Safety" },
    { img: cart5, name: "Fasteners" },
    { img: cart6, name: "Hand Tools" },
    { img: cart7, name: "Lorem Ipsum" }
];

export default function Categories() {
    const [current, setCurrent] = useState(0);
    const visible = 6;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % categories.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? categories.length - 1 : prev - 1));

    const getVisibleItems = () => {
        return Array.from({ length: visible }, (_, i) => categories[(current + i) % categories.length]);
    };

    return (
        <div className={styles["category-slider"]}>
            <div>
                <h2 className={styles["category-slider__heading"]}>Categories</h2>
                <button
                    className={`${styles["category-slider__arrow"]} ${styles["category-slider__arrow--prev"]}`}
                    onClick={prevSlide}
                >
                    <i className="icon-Caret-Down"></i>
                </button>
                <button
                    className={`${styles["category-slider__arrow"]} ${styles["category-slider__arrow--next"]}`}
                    onClick={nextSlide}
                >
                    <i className="icon-Caret-Down"></i>
                </button>
            </div>
            <div className={styles["category-slider__wrapper"]}>
                <div className={styles["category-slider__items"]}>
                    {getVisibleItems().map((cat, idx) => (
                        <div key={idx} className={styles["category-slider__item"]}>
                            <img
                                src={cat.img}
                                alt={cat.name}
                            />
                            <p>{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
