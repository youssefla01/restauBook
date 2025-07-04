import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, ChevronLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { restaurants } from '@/data/restaurants';
import BookingForm from '@/components/booking-form';
import { useLanguage } from '@/contexts/language-context';

export default function RestaurantDetail() {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Restaurant non trouvé</h1>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <ChevronLeft className="h-5 w-5" />
              <span>{t('restaurant.back')}</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="dark:text-gray-300 dark:hover:text-white">
                <Share2 className="h-4 w-4 mr-2" />
                {t('restaurant.share')}
              </Button>
              <Button variant="ghost" size="sm" className="dark:text-gray-300 dark:hover:text-white">
                <Heart className="h-4 w-4 mr-2" />
                {t('restaurant.save')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={restaurant.gallery[selectedImage]}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {restaurant.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${restaurant.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{restaurant.name}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span>({restaurant.reviewCount} avis)</span>
                    </div>
                    <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-200">{restaurant.cuisine}</Badge>
                    <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">{restaurant.priceRange}</Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{restaurant.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center dark:text-white">
                    <MapPin className="h-5 w-5 mr-2 text-red-500" />
                    {t('restaurant.address')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{restaurant.address}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center dark:text-white">
                    <Phone className="h-5 w-5 mr-2 text-red-500" />
                    {t('restaurant.phone')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{restaurant.phone}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center dark:text-white">
                  <Clock className="h-5 w-5 mr-2 text-red-500" />
                  {t('restaurant.hours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(restaurant.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-medium dark:text-white">{day}</span>
                      <span className="text-gray-600 dark:text-gray-300">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">{t('restaurant.specialties')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {restaurant.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="dark:bg-gray-700 dark:text-gray-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Menu */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">{t('restaurant.menu')}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {restaurant.menu.map((category, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="dark:border-gray-700">
                      <AccordionTrigger className="text-left dark:text-white dark:hover:text-gray-200">
                        {category.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium dark:text-white">{item.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                              </div>
                              <span className="font-bold text-red-600 ml-4">
                                {item.price}€
                              </span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <BookingForm restaurant={restaurant} />
            </div>
          </div>
        </div>

        {/* Carte de localisation */}
        <div className="mt-10">
          <Card className="overflow-hidden shadow-lg rounded-2xl bg-white dark:bg-gray-800 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-500 text-xl">
                <MapPin className="h-6 w-6 text-pink-500" />
                Localisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 text-gray-700 dark:text-gray-200 font-medium">
                {restaurant.address}
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  title="Carte du restaurant"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.address)}&output=embed`}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}