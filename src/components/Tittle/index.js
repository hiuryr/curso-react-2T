import styles from './Tittle.module.css';

function Tittle({ children }) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}

export default Tittle;