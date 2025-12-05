import { useState, useEffect } from 'react';
import styles from './imageslider.module.scss';
import slide1 from '../../assets/images/slide1.jpeg';
import slide2 from '../../assets/images/slide2.jpeg';
import slide3 from '../../assets/images/slide3.jpeg';

interface Slide {
  image: string;
  text: string;
}

const slidesData: Slide[] = [
  {
    image: slide1,
    text: "Fiberglass and specialty metals are in stock across the United States",
  },
  {
    image: slide2,
    text: "Lorem Ipsum is simply dummy text of the printing and.",
  },
  {
    image: slide3,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState<number>(0);
  const length = slidesData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className={styles.slider}>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className={styles.slide__content}>
            <h1>{slide.text}</h1>
            <button className={styles.shopBtn}>Shop Now</button>
          </div>
        </div>
      ))}

      <div className={styles.dots}>
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
