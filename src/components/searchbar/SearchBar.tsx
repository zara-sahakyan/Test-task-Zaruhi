import styles from './searchbar.module.scss'
import '../../assets/style.css' 

export function SearchBar() {
  return (
    <div className={styles.search}>
      <i className="icon-search-icon"></i>
      <input
        type="text"
        placeholder="Product SKU, Name…"
        className={styles.search__input}
      />
    </div>
  )
}
