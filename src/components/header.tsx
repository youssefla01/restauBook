import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Moon, Sun, User, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/contexts/language-context';
import { frenchRegions } from '@/data/regions';
import { useState, useEffect, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionQuery, setRegionQuery] = useState('');
  const [showRegionList, setShowRegionList] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const regionInputRef = useRef(null);
  const allRegionsAndCities = frenchRegions.flatMap(region => [region.name, ...region.cities]);
  const filteredRegions = regionQuery
    ? allRegionsAndCities.filter(item => item.toLowerCase().includes(regionQuery.toLowerCase()))
    : allRegionsAndCities;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between h-16 w-full">
          {/* Mobile menu toggle */}
          <button
            className="md:hidden mr-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-7 w-7 text-gray-700 dark:text-gray-200" />
          </button>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pink-500">RestauBook</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`relative font-semibold px-3 py-1 rounded-lg transition-all duration-200
                ${isLanding
                  ? 'text-pink-500'
                  : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'}
              `}
            >
              {t('header.home')}
              {isLanding && (
                <span className="absolute left-1/2 -bottom-1.5 w-6 h-1 bg-pink-400 rounded-full -translate-x-1/2 animate-fadeIn"></span>
              )}
            </Link>
            <Link 
              to="/restaurants" 
              className={`relative font-semibold px-3 py-1 rounded-lg transition-all duration-200
                ${!isLanding
                  ? 'text-pink-500'
                  : 'text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400'}
              `}
            >
              {t('header.services')}
              {!isLanding && (
                <span className="absolute left-1/2 -bottom-1.5 w-6 h-1 bg-pink-400 rounded-full -translate-x-1/2 animate-fadeIn"></span>
              )}
            </Link>
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer px-3 py-1 rounded-lg transition-colors">
              <span className="font-semibold">{t('header.more')}</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex text-gray-700 dark:text-gray-300">
              {t('header.become_partner')}
            </Button>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px]">
                <DropdownMenuItem
                  onClick={() => setLanguage('fr')}
                  className={`flex justify-between items-center ${language === 'fr' ? 'text-pink-500 font-semibold' : ''}`}
                >
                  Français
                  {language === 'fr' && <span className="ml-2 text-pink-500">&#10003;</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`flex justify-between items-center ${language === 'en' ? 'text-pink-500 font-semibold' : ''}`}
                >
                  English
                  {language === 'en' && <span className="ml-2 text-pink-500">&#10003;</span>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar - Only on restaurants page */}
        {!isLanding && (
          <div className="pb-4">
            {/* Version Desktop */}
            <div className="hidden md:flex items-center space-x-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Rechercher un restaurant..."
                  className="h-12 pl-4 pr-10 rounded-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-white"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
              </div>
              {/* Autocomplete Région/Ville */}
              <div className="flex-1 relative">
                <Input
                  type="text"
                  ref={regionInputRef}
                  value={regionQuery}
                  onChange={e => { setRegionQuery(e.target.value); setShowRegionList(true); }}
                  onFocus={() => setShowRegionList(true)}
                  onBlur={() => setTimeout(() => setShowRegionList(false), 150)}
                  placeholder="Région / Ville"
                  className="h-12 pl-4 pr-10 rounded-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-white"
                  autoComplete="off"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
                  <Search />
                </span>
                {showRegionList && filteredRegions.length > 0 && (
                  <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-56 overflow-auto">
                    {filteredRegions.map((item, idx) => (
                      <div
                        key={item + idx}
                        className="px-4 py-2 cursor-pointer hover:bg-pink-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                        onMouseDown={() => { setRegionQuery(item); setShowRegionList(false); }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Version Mobile */}
            <div className="md:hidden px-4">
              <div className="relative">
                <div 
                  className="w-full h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center px-4 cursor-pointer shadow-sm"
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                >
                  <Search className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-500 dark:text-gray-400">Commencer une recherche</span>
                  <ChevronDown className={`ml-auto h-4 w-4 text-gray-400 transition-transform ${mobileSearchOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Dropdown */}
                {mobileSearchOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-4 z-50 animate-slideDown">
                    {/* Champs de recherche */}
                    <div className="space-y-3">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Commencer une recherche"
                          className="h-12 pl-4 pr-10 rounded-xl border-2 border-blue-400 focus:border-blue-500 focus:ring-0 dark:bg-gray-800 dark:text-white"
                          autoFocus
                        />
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                      
                      <div className="relative">
                        <select className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 appearance-none">
                          <option>Catégorie de service</option>
                          <option>Restaurant traditionnel</option>
                          <option>Bistrot</option>
                          <option>Brasserie</option>
                          <option>Restaurant gastronomique</option>
                          <option>Cuisine du monde</option>
                          <option>Fast casual</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      
                      <div className="relative">
                        <select className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 appearance-none">
                          <option>Région / Ville</option>
                          {frenchRegions.map((region) => (
                            <optgroup key={region.id} label={region.name}>
                              {region.cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      
                      <Button 
                        className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-base font-medium mt-4"
                        onClick={() => setMobileSearchOpen(false)}
                      >
                        <Search className="h-5 w-5 mr-2" />
                        Rechercher
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Drawer Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <div className="relative ml-0 w-72 max-w-full h-full bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col animate-slideInLeft">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <span className="text-2xl">×</span>
              </button>
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 mb-8" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-pink-500">RestauBook</span>
              </Link>
              {/* Navigation */}
              <nav className="flex flex-col gap-4 mt-4">
                <Link to="/" className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>
                  {t('header.home')}
                </Link>
                <Link to="/restaurants" className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>
                  {t('header.services')}
                </Link>
                <div className="flex items-center gap-1 text-lg font-semibold text-gray-500 dark:text-gray-300 cursor-pointer">
                  <span>{t('header.more')}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
              <div className="flex-1" />
              {/* Actions */}
              <div className="flex gap-3 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <Globe className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Animation CSS */}
            <style>{`
              @keyframes slideInLeft {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
              }
              .animate-slideInLeft {
                animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </div>
    </header>
  );
}