import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png';
import { Link } from 'react-router-dom';

function Card({ id, tittle, cape }) {
    const { favorite, addFavorite } = useFavoriteContext();

    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? unfavoriteIcon : favoriteIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cape} alt={tittle} className={styles.cape} />
                <h2>{tittle}</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite} 
                onClick={() => {
                    addFavorite({ id, tittle, cape })
                }} />
        </div>

    )
}

export default Card;