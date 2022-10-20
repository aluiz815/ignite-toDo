import styles from './style.module.css';
import TodoLogo from '../../assets/logo.svg';
export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
        <img src={TodoLogo} alt="" />
    </header>
  )
}
