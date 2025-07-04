import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendarDays, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';
import { Restaurant } from '@/data/restaurants';
import { useLanguage } from '@/contexts/language-context';

const bookingSchema = z.object({
  date: z.date({ required_error: 'Veuillez sélectionner une date' }),
  time: z.string({ required_error: 'Veuillez sélectionner un horaire' }),
  guests: z.string({ required_error: 'Veuillez sélectionner le nombre de personnes' }),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().min(10, 'Veuillez entrer un numéro de téléphone valide'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  restaurant: Restaurant;
}

export default function BookingForm({ restaurant }: BookingFormProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const guestOptions = Array.from({ length: 8 }, (_, i) => i + 1);

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t('booking.success'), {
      description: `Votre table pour ${data.guests} personne${parseInt(data.guests) > 1 ? 's' : ''} est réservée le ${format(data.date, 'PPP', { locale: fr })} à ${data.time} chez ${restaurant.name}.`,
    });
    
    form.reset();
    setIsLoading(false);
  };

  return (
    <Card className="w-full dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center dark:text-white">
          <CalendarDays className="h-5 w-5 mr-2 text-red-500" />
          {t('restaurant.book_table')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Date Selection */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="dark:text-gray-200">{t('booking.date')}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal dark:bg-gray-700 dark:border-gray-600 dark:text-white',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP', { locale: fr })
                          ) : (
                            <span>Sélectionner une date</span>
                          )}
                          <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 dark:bg-gray-800 dark:border-gray-600" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
                        className="dark:bg-gray-800"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time Selection */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-200">{t('booking.time')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Sélectionner un horaire" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="dark:text-white dark:hover:bg-gray-700">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guests Selection */}
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-200">{t('booking.guests')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <SelectValue placeholder="Sélectionner le nombre de personnes" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                      {guestOptions.map((guests) => (
                        <SelectItem key={guests} value={guests.toString()} className="dark:text-white dark:hover:bg-gray-700">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {guests} personne{guests > 1 ? 's' : ''}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-200">{t('booking.name')}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Votre nom complet" 
                      {...field} 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-200">{t('booking.email')}</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="votre@email.com" 
                      {...field} 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-200">{t('booking.phone')}</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="06 12 34 56 78" 
                      {...field} 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? t('booking.confirming') : t('booking.confirm')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}