import styles from './support.module.scss';

export function Support() {
  return (
    <div className={styles.support}>
      <main className={styles.support__content}>
        <div className={styles.support__container}>
          <div className={styles.support__emptypage}>
            <h2>This is Support Page</h2>
          </div>
        </div>
      </main>
    </div>

  );
}
