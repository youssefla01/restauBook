import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Landing from '@/pages/landing';
import Restaurants from '@/pages/restaurants';
import RestaurantDetail from '@/pages/restaurant-detail';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="restaurant-booking-theme">
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;