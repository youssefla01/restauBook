import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { restaurants } from '@/data/restaurants';
import { useLanguage } from '@/contexts/language-context';

export default function Home() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('francaise');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
console.log(t('category.french'));
  const categories = [
    { id: 'francaise', name: t('category.french'), icon: '🇫🇷', active: true },
    { id: 'italienne', name: t('category.italian'), icon: '🇮🇹', active: false },
    { id: 'japonaise', name: t('category.japanese'), icon: '🇯🇵', active: false },
    { id: 'indienne', name: t('category.indian'), icon: '🇮🇳', active: false },
    { id: 'chinoise', name: t('category.chinese'), icon: '🇨🇳', active: false },
    { id: 'mexicaine', name: t('category.mexican'), icon: '🇲🇽', active: false },
    { id: 'fruits-de-mer', name: t('category.seafood'), icon: '🦞', active: false },
    { id: 'vegetarienne', name: t('category.vegetarian'), icon: '🥗', active: false },
    { id: 'fast-food', name: t('category.fast_food'), icon: '🍔', active: false },
    { id: 'gastronomique', name: t('category.gourmet'), icon: '⭐', active: false },
    { id: 'brasserie', name: t('category.brasserie'), icon: '🍺', active: false },
  ];

  const subCategories = [
    t('subcategory.traditional'),
    t('subcategory.bistrot'), 
    t('subcategory.brasserie'),
    t('subcategory.gourmet'),
    t('subcategory.world_cuisine'),
    t('subcategory.fast_casual')
  ];

  const serviceTypes = [
    { name: 'Premium', color: 'bg-yellow-500', textColor: 'text-white' },
    { name: 'Standard', color: 'bg-gray-400', textColor: 'text-white' },
    { name: 'Économique', color: 'bg-orange-600', textColor: 'text-white' },
  ];

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getRandomServiceType = () => {
    return serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
  };

  // Filter restaurants based on selected category
  const filteredRestaurants = restaurants.filter(restaurant => {
    if (selectedCategory === 'francaise') return restaurant.cuisine === 'Française';
    if (selectedCategory === 'italienne') return restaurant.cuisine === 'Italienne';
    if (selectedCategory === 'japonaise') return restaurant.cuisine === 'Japonaise';
    if (selectedCategory === 'indienne') return restaurant.cuisine === 'Indienne';
    if (selectedCategory === 'fruits-de-mer') return restaurant.cuisine === 'Fruits de mer';
    return true; // Show all for other categories
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Categories Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center space-y-2 min-w-max px-3 py-2 rounded-lg transition-colors ${
                  category.id === selectedCategory
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
                {category.id === selectedCategory && (
                  <div className="w-full h-0.5 bg-gray-900 dark:bg-white rounded-full"></div>
                )}
              </button>
            ))}
            <div className="flex items-center space-x-2 min-w-max px-3">
              <Heart className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('category.favorites')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-categories */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 py-3">
            {subCategories.map((subCat) => (
              <button
                key={subCat}
                onClick={() => setSelectedSubCategory(subCat === selectedSubCategory ? '' : subCat)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                  subCat === selectedSubCategory
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {subCat}
              </button>
            ))}
            {selectedSubCategory && (
              <button
                onClick={() => setSelectedSubCategory('')}
                className="flex items-center space-x-1 text-sm text-pink-500 hover:text-pink-600"
              >
                <X className="h-4 w-4" />
                <span>{t('subcategory.reset_filters')}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => {
            const serviceType = getRandomServiceType();
            const isFavorite = favorites.includes(restaurant.id);
            
            return (
              <Card key={restaurant.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl">
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Service Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`${serviceType.color} ${serviceType.textColor} text-xs font-medium px-2 py-1`}>
                      {serviceType.name}
                    </Badge>
                  </div>
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(restaurant.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        isFavorite 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600 hover:text-red-500'
                      }`} 
                    />
                  </button>
                </div>
                
                <CardContent className="p-4">
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {restaurant.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{restaurant.city}</span>
                    <span>•</span>
                    <span>{restaurant.cuisine}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium dark:text-white">{restaurant.rating}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">({restaurant.reviewCount})</span>
                    </div>
                    <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                      {restaurant.priceRange}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}