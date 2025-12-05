import styles from './locations.module.scss';

export function Locations() {
  return (
    <div className={styles.locations}>
      <main className={styles.locations__content}>
        <div className={styles.locations__container}>
          <div className={styles.locations__emptypage}>
            <h2>This is Locations Page</h2>
          </div>
        </div>
      </main>
    </div>

  );
}
