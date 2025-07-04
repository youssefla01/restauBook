import { Link } from 'react-router-dom';
import { Search, ArrowRight, Star, Users, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';

export default function Landing() {
  const { t } = useLanguage();

  const featuredCategories = [
    {
      id: 'french',
      name: t('category.french'),
      icon: '🇫🇷',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Cuisine traditionnelle française'
    },
    {
      id: 'italian',
      name: t('category.italian'),
      icon: '🇮🇹',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Authentique cuisine italienne'
    },
    {
      id: 'japanese',
      name: t('category.japanese'),
      icon: '🇯🇵',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sushi et cuisine japonaise'
    },
    {
      id: 'seafood',
      name: t('category.seafood'),
      icon: '🦞',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fruits de mer frais'
    },
    {
      id: 'indian',
      name: t('category.indian'),
      icon: '🇮🇳',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Épices et saveurs indiennes'
    },
    {
      id: 'gourmet',
      name: t('category.gourmet'),
      icon: '⭐',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Haute gastronomie'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Restaurants partenaires' },
    { number: '50K+', label: 'Réservations mensuelles' },
    { number: '4.8', label: 'Note moyenne' },
    { number: '24/7', label: 'Support client' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 dark:from-red-500/5 dark:to-pink-500/5"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-4 py-2 text-sm font-medium">
              ✨ Nouvelle plateforme de réservation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Votre expérience culinaire
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                commence ici !
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              RestauBook réunit les meilleurs restaurants pour toutes vos envies culinaires.
              <span className="block mt-2">
                Parcourez, découvrez et réservez en quelques clics.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/restaurants">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Search className="mr-2 h-5 w-5" />
                  Découvrir les restaurants
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                Comment ça marche
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 px-4 py-2">
              Parcourir par catégorie
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trouvez les restaurants dont vous avez besoin par catégories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez notre collection complète de restaurants par catégorie pour trouver exactement ce dont vous avez besoin
              pour votre prochaine sortie culinaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link key={category.id} to="/restaurants" className="group">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-700">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="text-3xl bg-white/90 dark:bg-gray-800/90 rounded-full w-12 h-12 flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/restaurants">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                Voir toutes les catégories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2">
              Comment ça marche
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Réservez en 3 étapes simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Recherchez</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Parcourez notre sélection de restaurants par cuisine, localisation ou ambiance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Choisissez</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consultez les menus, photos et avis pour faire votre choix parfait.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Réservez</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sélectionnez votre créneau et confirmez votre réservation instantanément.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à découvrir votre prochain restaurant favori ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de gourmets qui font confiance à RestauBook pour leurs sorties culinaires.
          </p>
          <Link to="/restaurants">
            <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Search className="mr-2 h-5 w-5" />
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}