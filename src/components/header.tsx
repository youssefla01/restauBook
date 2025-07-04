import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Moon, Sun, User, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/contexts/language-context';
import { frenchRegions } from '@/data/regions';
import { useState, useEffect } from 'react';
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
            <div className="flex items-center space-x-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder={t('header.search_category')}
                  className="h-12 pl-4 pr-10 rounded-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-white"
                />
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 relative">
                <Select>
                  <SelectTrigger className="h-12 rounded-full border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 dark:bg-gray-800 dark:text-white">
                    <SelectValue placeholder={t('header.search_location')} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                    {frenchRegions.map((region) => (
                      <div key={region.id}>
                        <SelectItem value={region.id} className="font-semibold dark:text-white">
                          {region.name}
                        </SelectItem>
                        {region.cities.map((city) => (
                          <SelectItem key={`${region.id}-${city}`} value={city} className="pl-6 dark:text-gray-300">
                            {city}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="h-12 w-12 rounded-full bg-pink-400 hover:bg-pink-500 text-white p-0">
                <Search className="h-5 w-5" />
              </Button>
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