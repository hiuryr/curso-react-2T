import Header from 'components/Header';
import FavoritesProvider from "contexts/Favorites";
import Container from 'components/Container';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';

function Base() {
    return (
        <div className="layout">
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </div>
    )
}

export default Base;