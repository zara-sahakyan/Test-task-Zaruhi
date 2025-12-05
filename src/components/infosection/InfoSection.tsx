import styles from './infosection.module.scss'

export default function InfoSection() {
  return (
    <section className={styles['info-section']}>
      <div className={styles['info-section__overlay']}>
        <div className={styles['info-section__content']}>
          <h2 className={styles['info-section__title']}>
            Large Inventory Of Power Tools & Accessories
          </h2>
          <p className={styles['info-section__txt']}>Find the Aluminum and Stainless Steel items for your 
            project in stock and ready to ship today! Avoid project 
            delays and long lead times in a challenging supply chain 
            for specialty metals and non-ferrous items. We are well stocked 
            and here to serve you with guided support.</p>
          <button className={styles['info-section__button']}>
            Shop Now
          </button>

        </div>
      </div>
    </section>
  )
}
