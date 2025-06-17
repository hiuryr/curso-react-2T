import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
        value={{favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const isRepeated = favorite.some(item => item.id === newFavorite.id);

        let newList = [...favorite];

        if (!isRepeated) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        newList.splice(newList.indexOf(newFavorite), 1);
        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorite
    };
}
