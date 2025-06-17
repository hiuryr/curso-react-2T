import styles from './Banner.module.css';

function Banner({ img }) {
    return (
        <div className={styles.cape} style={{ backgroundImage: `url('/img/banner-${img}.png')` }}>
            <div className={styles.overlay}></div>
        </div>
    )
}

export default Banner;