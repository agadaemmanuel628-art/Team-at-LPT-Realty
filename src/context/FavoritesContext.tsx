import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (propertyId: string) => void;
  isFavorite: (propertyId: string) => boolean;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('usa_realty_favorites');
      return saved ? JSON.parse(saved) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('usa_realty_favorites', JSON.stringify(favorites));
    } catch {
      // Storage unavailable
    }
  }, [favorites]);

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev =>
      prev.includes(propertyId) ? prev.filter(id => id !== propertyId) : [...prev, propertyId]
    );
  };

  const isFavorite = (propertyId: string) => favorites.includes(propertyId);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
