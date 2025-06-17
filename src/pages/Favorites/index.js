import Banner from 'components/Banner';
import styles from './Favorites.module.css';
import Tittle from 'components/Tittle';
import { useFavoriteContext } from 'contexts/Favorites';
import Card from 'components/Card';

function Favorites() {
    const { favorite } = useFavoriteContext();

    return (
        <>
            <Banner img="favorite" />
            <Tittle>
                <h1>Meus Favoritos</h1>
            </Tittle>
            <section className={styles.container}>
                {favorite.length === 0 ? (
                    <p className={styles.emptyMessage}>Você ainda não adicionou nenhum favorito.</p>
                ) : (
                    favorite.map((fav) => (
                        <Card {...fav} key={fav.id} />
                    ))
                )}
            </section>
        </>
    );
}

export default Favorites;
