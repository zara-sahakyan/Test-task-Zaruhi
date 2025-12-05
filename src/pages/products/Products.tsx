import styles from './products.module.scss';

export function Products() {
  return (
    <div className={styles.products}>
      <main className={styles.products__content}>
        <div className={styles.products__container}>
          <div className={styles.products__emptypage}>
            <h2>This is Products Page</h2>
          </div>
        </div>
      </main>
    </div>

  );
}
