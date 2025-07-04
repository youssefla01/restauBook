export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  city: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  description: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  gallery: string[];
  specialties: string[];
  menu: {
    category: string;
    items: {
      name: string;
      description: string;
      price: number;
    }[];
  }[];
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Le Jardin Secret',
    cuisine: 'Française',
    city: 'Paris',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviewCount: 127,
    priceRange: '€€€',
    description: 'Un restaurant gastronomique français niché dans un jardin secret au cœur de Paris. Notre chef étoilé vous propose une cuisine raffinée avec des produits de saison.',
    address: '15 Rue de la Paix, 75001 Paris',
    phone: '01 42 61 77 88',
    hours: {
      'Lundi': 'Fermé',
      'Mardi': '19h00 - 23h00',
      'Mercredi': '19h00 - 23h00',
      'Jeudi': '19h00 - 23h00',
      'Vendredi': '19h00 - 23h30',
      'Samedi': '19h00 - 23h30',
      'Dimanche': '12h00 - 15h00, 19h00 - 22h00'
    },
    gallery: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Foie gras', 'Truffe', 'Homard', 'Wagyu'],
    menu: [
      {
        category: 'Entrées',
        items: [
          { name: 'Foie gras mi-cuit', description: 'Accompagné de chutney de figues', price: 32 },
          { name: 'Tartare de thon rouge', description: 'Avocat, mangue et sésame', price: 28 },
          { name: 'Velouté de champignons', description: 'Truffe et crème de châtaigne', price: 24 }
        ]
      },
      {
        category: 'Plats',
        items: [
          { name: 'Bœuf Wagyu', description: 'Légumes de saison et jus corsé', price: 68 },
          { name: 'Homard grillé', description: 'Risotto aux petits légumes', price: 58 },
          { name: 'Pigeon fermier', description: 'Confit de cuisses et jus au thym', price: 48 }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Sakura Sushi',
    cuisine: 'Japonaise',
    city: 'Paris',
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviewCount: 89,
    priceRange: '€€',
    description: 'Authentique restaurant japonais tenu par un chef originaire de Tokyo. Sushis, sashimis et plats traditionnels dans un cadre zen.',
    address: '23 Rue Saint-Anne, 75001 Paris',
    phone: '01 42 97 48 15',
    hours: {
      'Lundi': '12h00 - 14h30, 19h00 - 22h30',
      'Mardi': '12h00 - 14h30, 19h00 - 22h30',
      'Mercredi': '12h00 - 14h30, 19h00 - 22h30',
      'Jeudi': '12h00 - 14h30, 19h00 - 22h30',
      'Vendredi': '12h00 - 14h30, 19h00 - 23h00',
      'Samedi': '12h00 - 14h30, 19h00 - 23h00',
      'Dimanche': '19h00 - 22h30'
    },
    gallery: [
      'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Sushi', 'Sashimi', 'Ramen', 'Tempura'],
    menu: [
      {
        category: 'Sushis',
        items: [
          { name: 'Saumon', description: 'Sushi traditionnel au saumon frais', price: 4 },
          { name: 'Thon rouge', description: 'Sushi au thon rouge de qualité', price: 5 },
          { name: 'Anguille', description: 'Sushi à l\'anguille grillée', price: 6 }
        ]
      },
      {
        category: 'Plats',
        items: [
          { name: 'Ramen Tonkotsu', description: 'Bouillon de porc, chashu et œuf', price: 18 },
          { name: 'Tempura Mix', description: 'Crevettes et légumes frits', price: 22 },
          { name: 'Chirashi', description: 'Sashimis variés sur riz vinaigré', price: 28 }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Bella Vista',
    cuisine: 'Italienne',
    city: 'Lyon',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviewCount: 156,
    priceRange: '€€',
    description: 'Restaurant italien authentique avec une vue magnifique sur la ville. Pâtes fraîches, pizzas au feu de bois et vins italiens sélectionnés.',
    address: '8 Place Bellecour, 69002 Lyon',
    phone: '04 78 37 45 12',
    hours: {
      'Lundi': '12h00 - 14h00, 19h00 - 22h00',
      'Mardi': '12h00 - 14h00, 19h00 - 22h00',
      'Mercredi': '12h00 - 14h00, 19h00 - 22h00',
      'Jeudi': '12h00 - 14h00, 19h00 - 22h00',
      'Vendredi': '12h00 - 14h00, 19h00 - 22h30',
      'Samedi': '12h00 - 14h00, 19h00 - 22h30',
      'Dimanche': '12h00 - 14h00, 19h00 - 21h30'
    },
    gallery: [
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Pizza', 'Pasta', 'Risotto', 'Tiramisu'],
    menu: [
      {
        category: 'Pizzas',
        items: [
          { name: 'Margherita', description: 'Tomate, mozzarella, basilic', price: 14 },
          { name: 'Quattro Stagioni', description: 'Tomate, mozzarella, jambon, champignons, artichauts, olives', price: 18 },
          { name: 'Prosciutto', description: 'Tomate, mozzarella, jambon de Parme, roquette', price: 20 }
        ]
      },
      {
        category: 'Pâtes',
        items: [
          { name: 'Carbonara', description: 'Pâtes aux œufs, pancetta, parmesan', price: 16 },
          { name: 'Bolognese', description: 'Tagliatelles, sauce bolognaise maison', price: 18 },
          { name: 'Cacio e Pepe', description: 'Spaghetti, pecorino, poivre noir', price: 15 }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Le Petit Bistrot',
    cuisine: 'Française',
    city: 'Lyon',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.5,
    reviewCount: 98,
    priceRange: '€€',
    description: 'Bistrot traditionnel français avec une atmosphère chaleureuse. Plats du terroir et spécialités lyonnaises dans un cadre authentique.',
    address: '12 Rue des Bouchons, 69001 Lyon',
    phone: '04 78 28 35 67',
    hours: {
      'Lundi': '12h00 - 14h00, 19h00 - 22h00',
      'Mardi': '12h00 - 14h00, 19h00 - 22h00',
      'Mercredi': '12h00 - 14h00, 19h00 - 22h00',
      'Jeudi': '12h00 - 14h00, 19h00 - 22h00',
      'Vendredi': '12h00 - 14h00, 19h00 - 22h30',
      'Samedi': '12h00 - 14h00, 19h00 - 22h30',
      'Dimanche': 'Fermé'
    },
    gallery: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Quenelle', 'Coq au vin', 'Tarte tatin', 'Fromages'],
    menu: [
      {
        category: 'Entrées',
        items: [
          { name: 'Salade lyonnaise', description: 'Salade verte, lardons, œuf poché', price: 12 },
          { name: 'Escargots de Bourgogne', description: '6 escargots au beurre persillé', price: 14 },
          { name: 'Terrine de campagne', description: 'Terrine maison, cornichons, pain grillé', price: 10 }
        ]
      },
      {
        category: 'Plats',
        items: [
          { name: 'Coq au vin', description: 'Coq mijoté au vin rouge, champignons', price: 22 },
          { name: 'Quenelle de brochet', description: 'Sauce Nantua, riz pilaf', price: 20 },
          { name: 'Bœuf bourguignon', description: 'Mijoté aux légumes, purée maison', price: 24 }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Spice Route',
    cuisine: 'Indienne',
    city: 'Marseille',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    reviewCount: 73,
    priceRange: '€',
    description: 'Restaurant indien authentique proposant des currys parfumés, des tandoori et des naans fraîchement préparés. Ambiance colorée et épices d\'exception.',
    address: '45 Rue de la République, 13001 Marseille',
    phone: '04 91 54 32 18',
    hours: {
      'Lundi': '12h00 - 14h30, 19h00 - 22h30',
      'Mardi': '12h00 - 14h30, 19h00 - 22h30',
      'Mercredi': '12h00 - 14h30, 19h00 - 22h30',
      'Jeudi': '12h00 - 14h30, 19h00 - 22h30',
      'Vendredi': '12h00 - 14h30, 19h00 - 23h00',
      'Samedi': '12h00 - 14h30, 19h00 - 23h00',
      'Dimanche': '19h00 - 22h30'
    },
    gallery: [
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Curry', 'Tandoori', 'Biryani', 'Naan'],
    menu: [
      {
        category: 'Currys',
        items: [
          { name: 'Butter Chicken', description: 'Poulet dans une sauce crémeuse aux épices', price: 16 },
          { name: 'Lamb Vindaloo', description: 'Agneau épicé aux pommes de terre', price: 18 },
          { name: 'Dal Makhani', description: 'Lentilles noires crémeuses', price: 14 }
        ]
      },
      {
        category: 'Tandoori',
        items: [
          { name: 'Chicken Tikka', description: 'Morceaux de poulet marinés et grillés', price: 15 },
          { name: 'Seekh Kebab', description: 'Brochettes d\'agneau épicées', price: 17 },
          { name: 'Tandoori Mixed Grill', description: 'Assortiment de grillades', price: 22 }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Ocean Breeze',
    cuisine: 'Fruits de mer',
    city: 'Nice',
    image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviewCount: 201,
    priceRange: '€€€',
    description: 'Restaurant de fruits de mer avec vue sur la Méditerranée. Poissons frais du jour, plateaux de fruits de mer et spécialités niçoises.',
    address: '7 Promenade des Anglais, 06000 Nice',
    phone: '04 93 88 12 34',
    hours: {
      'Lundi': '12h00 - 14h30, 19h00 - 22h30',
      'Mardi': '12h00 - 14h30, 19h00 - 22h30',
      'Mercredi': '12h00 - 14h30, 19h00 - 22h30',
      'Jeudi': '12h00 - 14h30, 19h00 - 22h30',
      'Vendredi': '12h00 - 14h30, 19h00 - 23h00',
      'Samedi': '12h00 - 14h30, 19h00 - 23h00',
      'Dimanche': '12h00 - 14h30, 19h00 - 22h30'
    },
    gallery: [
      'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specialties: ['Bouillabaisse', 'Plateau de fruits de mer', 'Loup grillé', 'Socca'],
    menu: [
      {
        category: 'Entrées',
        items: [
          { name: 'Plateau de fruits de mer', description: 'Huîtres, crevettes, bulots, langoustines', price: 45 },
          { name: 'Carpaccio de thon', description: 'Thon rouge, roquette, parmesan', price: 24 },
          { name: 'Soupe de poissons', description: 'Rouille, gruyère, croûtons', price: 18 }
        ]
      },
      {
        category: 'Plats',
        items: [
          { name: 'Bouillabaisse', description: 'Soupe de poissons traditionnelle', price: 48 },
          { name: 'Loup grillé', description: 'Fenouil, tomates confites, huile d\'olive', price: 38 },
          { name: 'Risotto aux fruits de mer', description: 'Crevettes, moules, encornets', price: 32 }
        ]
      }
    ]
  }
];