import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'header.home': 'Accueil',
    'header.services': 'Restaurants',
    'header.more': 'Plus',
    'header.become_partner': 'Devenir prestataire',
    'header.search_category': 'Catégorie de service',
    'header.search_location': 'Région / Ville',
    
    // Categories
    'category.french': 'Française',
    'category.italian': 'Italienne',
    'category.japanese': 'Japonaise',
    'category.indian': 'Indienne',
    'category.chinese': 'Chinoise',
    'category.mexican': 'Mexicaine',
    'category.seafood': 'Fruits de mer',
    'category.vegetarian': 'Végétarienne',
    'category.fast_food': 'Fast Food',
    'category.gourmet': 'Gastronomique',
    'category.brasserie': 'Brasserie',
    'category.favorites': 'Favoris',
    
    // Sub-categories
    'subcategory.traditional': 'Restaurant traditionnel',
    'subcategory.bistrot': 'Bistrot',
    'subcategory.brasserie': 'Brasserie',
    'subcategory.gourmet': 'Restaurant gastronomique',
    'subcategory.world_cuisine': 'Cuisine du monde',
    'subcategory.fast_casual': 'Fast casual',
    'subcategory.reset_filters': 'Réinitialiser les filtres',
    
    // Restaurant details
    'restaurant.see_more': 'Voir plus',
    'restaurant.back': 'Retour',
    'restaurant.share': 'Partager',
    'restaurant.save': 'Sauvegarder',
    'restaurant.address': 'Adresse',
    'restaurant.phone': 'Téléphone',
    'restaurant.hours': 'Horaires d\'ouverture',
    'restaurant.specialties': 'Spécialités',
    'restaurant.menu': 'Menu',
    'restaurant.book_table': 'Réserver une table',
    
    // Booking form
    'booking.date': 'Date',
    'booking.time': 'Heure',
    'booking.guests': 'Nombre de personnes',
    'booking.name': 'Nom complet',
    'booking.email': 'Email',
    'booking.phone': 'Téléphone',
    'booking.confirm': 'Confirmer la réservation',
    'booking.confirming': 'Confirmation en cours...',
    'booking.success': 'Réservation confirmée !',
    
    // Footer
    'footer.enterprise': 'Entreprise',
    'footer.about': 'À propos',
    'footer.careers': 'Carrière',
    'footer.blog': 'Blog',
    'footer.resources': 'Ressources',
    'footer.help_center': 'Centre d\'aide',
    'footer.contact_us': 'Contactez-nous',
    'footer.api_status': 'Statut API',
    'footer.legal': 'Légal',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.cookies': 'Politique des cookies',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 RestauBook. Tous droits réservés.',
    'footer.confidentiality': 'Confidentialité',
    'footer.conditions': 'Conditions',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.services': 'Restaurants',
    'header.more': 'More',
    'header.become_partner': 'Become a partner',
    'header.search_category': 'Service category',
    'header.search_location': 'Region / City',
    
    // Categories
    'category.french': 'French',
    'category.italian': 'Italian',
    'category.japanese': 'Japanese',
    'category.indian': 'Indian',
    'category.chinese': 'Chinese',
    'category.mexican': 'Mexican',
    'category.seafood': 'Seafood',
    'category.vegetarian': 'Vegetarian',
    'category.fast_food': 'Fast Food',
    'category.gourmet': 'Gourmet',
    'category.brasserie': 'Brasserie',
    'category.favorites': 'Favorites',
    
    // Sub-categories
    'subcategory.traditional': 'Traditional restaurant',
    'subcategory.bistrot': 'Bistrot',
    'subcategory.brasserie': 'Brasserie',
    'subcategory.gourmet': 'Gourmet restaurant',
    'subcategory.world_cuisine': 'World cuisine',
    'subcategory.fast_casual': 'Fast casual',
    'subcategory.reset_filters': 'Reset filters',
    
    // Restaurant details
    'restaurant.see_more': 'See more',
    'restaurant.back': 'Back',
    'restaurant.share': 'Share',
    'restaurant.save': 'Save',
    'restaurant.address': 'Address',
    'restaurant.phone': 'Phone',
    'restaurant.hours': 'Opening hours',
    'restaurant.specialties': 'Specialties',
    'restaurant.menu': 'Menu',
    'restaurant.book_table': 'Book a table',
    
    // Booking form
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.guests': 'Number of guests',
    'booking.name': 'Full name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.confirm': 'Confirm reservation',
    'booking.confirming': 'Confirming...',
    'booking.success': 'Reservation confirmed!',
    
    // Footer
    'footer.enterprise': 'Enterprise',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.resources': 'Resources',
    'footer.help_center': 'Help Center',
    'footer.contact_us': 'Contact us',
    'footer.api_status': 'API Status',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 RestauBook. All rights reserved.',
    'footer.confidentiality': 'Confidentiality',
    'footer.conditions': 'Conditions',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}