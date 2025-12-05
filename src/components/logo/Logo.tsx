import { Link } from 'react-router-dom';
import styles from './logo.module.scss';
import LogoSVG from '../../assets/images/logo.svg'; 

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={LogoSVG} alt="Logo" className={styles.logo__img} />
      </Link>
    </div>
  );
}
