import { Link } from "react-router-dom";
import styles from './Header.module.css';
import HeaderLink from "components/HeaderLink";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./" className={styles.logoLink}>
                <img src="/img/loading-logo.png" alt="Logo do cinetag" width={60} height={60}/>
                <span className={styles.logoText}>AmpliFlix</span>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Início
                </HeaderLink>
                <HeaderLink url="./favorites">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;