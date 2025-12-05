import styles from './services.module.scss';

export function Services() {
  return (
    <div className={styles.services}>
      <main className={styles.services__content}>
        <div className={styles.services__container}>
          <div className={styles.services__emptypage}>
            <h2>This is Services Page</h2>
          </div>
        </div>
      </main>
    </div>

  );
}
