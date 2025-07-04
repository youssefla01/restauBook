import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart, X, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { restaurants } from '@/data/restaurants';
import { useLanguage } from '@/contexts/language-context';

export default function Restaurants() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('categories-scroll');
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update arrow visibility after scroll
      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }, 300);
    }
  };

  // Filter restaurants based on selected category
  const filteredRestaurants = restaurants.filter(restaurant => {
    if (!selectedCategory) return true;
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
          <div className="relative">
            {/* Boutons de navigation - Version Mobile */}
            {showLeftArrow && (
              <button
                onClick={() => handleScroll('left')}
                className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 border border-gray-200 dark:border-gray-700"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}
            
            {showRightArrow && (
              <button
                onClick={() => handleScroll('right')}
                className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}
            
                         <div 
               id="categories-scroll"
               className="flex items-center space-x-8 overflow-x-auto py-4 scrollbar-hide md:px-0 px-12"
               onScroll={(e) => {
                 const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
                 setShowLeftArrow(scrollLeft > 0);
                 setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
               }}
             >
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
       </div>

      {/* Sub-categories */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          {/* Version Desktop */}
          <div className="hidden md:flex justify-center items-center gap-6 py-3">
            {subCategories.map((subCat) => (
              <button
                key={subCat}
                onClick={() => setSelectedSubCategory(subCat === selectedSubCategory ? '' : subCat)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
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
          
          {/* Version Mobile - Dropdown */}
          <div className="md:hidden py-3">
            <div className="relative">
              <button
                onClick={() => setSelectedSubCategory(selectedSubCategory ? '' : 'dropdown')}
                className="flex items-center justify-between w-full max-w-sm mx-auto px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200 text-sm"
              >
                <span className="font-medium truncate">
                  {selectedSubCategory && selectedSubCategory !== 'dropdown' ? selectedSubCategory : 'Sous-catégories'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${selectedSubCategory === 'dropdown' ? 'rotate-180' : ''}`} />
              </button>
              
              {selectedSubCategory === 'dropdown' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
                  {subCategories.map((subCat) => (
                    <button
                      key={subCat}
                      onClick={() => {
                        setSelectedSubCategory(subCat);
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                    >
                      {subCat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Reset button pour mobile */}
            {selectedSubCategory && selectedSubCategory !== 'dropdown' && (
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setSelectedSubCategory('')}
                  className="flex items-center space-x-1 text-sm text-pink-500 hover:text-pink-600"
                >
                  <X className="h-4 w-4" />
                  <span>{t('subcategory.reset_filters')}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
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
                    className="w-full h-80 object-cover"
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
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{restaurant.description}</p>
                  </Link>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{restaurant.city}</span>
                    <span>•</span>
                    <span>{restaurant.cuisine}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium dark:text-white">{restaurant.rating}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">({restaurant.reviewCount})</span>
                    </div>
                    <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                      {restaurant.priceRange}
                    </Badge>
                  </div>

                  {/* Booking Button */}
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors">
                      <Calendar className="h-4 w-4 mr-2" />
                      {t('restaurant.book_table')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="flex space-x-3">
            {[1,2,3,4,5,6,7].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400
                  ${page === 1 ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}