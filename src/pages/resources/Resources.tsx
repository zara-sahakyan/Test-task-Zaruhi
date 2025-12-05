import styles from './resources.module.scss';

export function Resources() {
  return (
    <div className={styles.resources}>
      <main className={styles.resources__content}>
        <div className={styles.resources__container}>
          <div className={styles.resources__emptypage}>
            <h2>This is Resources Page</h2>
          </div>
        </div>
      </main>
    </div>

  );
}
