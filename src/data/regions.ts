export interface Region {
  id: string;
  name: string;
  cities: string[];
}

export const frenchRegions: Region[] = [
  {
    id: 'ile-de-france',
    name: 'Île-de-France',
    cities: ['Paris', 'Versailles', 'Boulogne-Billancourt', 'Saint-Denis', 'Argenteuil', 'Montreuil', 'Créteil', 'Nanterre']
  },
  {
    id: 'auvergne-rhone-alpes',
    name: 'Auvergne-Rhône-Alpes',
    cities: ['Lyon', 'Grenoble', 'Saint-Étienne', 'Villeurbanne', 'Clermont-Ferrand', 'Annecy', 'Chambéry', 'Valence']
  },
  {
    id: 'provence-alpes-cote-azur',
    name: 'Provence-Alpes-Côte d\'Azur',
    cities: ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Avignon', 'Antibes', 'Cannes', 'La Seyne-sur-Mer']
  },
  {
    id: 'occitanie',
    name: 'Occitanie',
    cities: ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan', 'Béziers', 'Narbonne', 'Carcassonne', 'Albi']
  },
  {
    id: 'nouvelle-aquitaine',
    name: 'Nouvelle-Aquitaine',
    cities: ['Bordeaux', 'Limoges', 'Poitiers', 'Pau', 'La Rochelle', 'Bayonne', 'Angoulême', 'Périgueux']
  },
  {
    id: 'grand-est',
    name: 'Grand Est',
    cities: ['Strasbourg', 'Reims', 'Metz', 'Nancy', 'Mulhouse', 'Troyes', 'Charleville-Mézières', 'Colmar']
  },
  {
    id: 'hauts-de-france',
    name: 'Hauts-de-France',
    cities: ['Lille', 'Amiens', 'Roubaix', 'Tourcoing', 'Dunkerque', 'Calais', 'Valenciennes', 'Boulogne-sur-Mer']
  },
  {
    id: 'pays-de-la-loire',
    name: 'Pays de la Loire',
    cities: ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'Cholet', 'La Roche-sur-Yon', 'Laval', 'Saumur']
  },
  {
    id: 'bretagne',
    name: 'Bretagne',
    cities: ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Vannes', 'Saint-Malo', 'Saint-Brieuc', 'Concarneau']
  },
  {
    id: 'normandie',
    name: 'Normandie',
    cities: ['Le Havre', 'Rouen', 'Caen', 'Cherbourg-en-Cotentin', 'Évreux', 'Dieppe', 'Bayeux', 'Lisieux']
  },
  {
    id: 'centre-val-de-loire',
    name: 'Centre-Val de Loire',
    cities: ['Orléans', 'Tours', 'Bourges', 'Blois', 'Chartres', 'Châteauroux', 'Dreux', 'Vierzon']
  },
  {
    id: 'bourgogne-franche-comte',
    name: 'Bourgogne-Franche-Comté',
    cities: ['Dijon', 'Besançon', 'Belfort', 'Chalon-sur-Saône', 'Nevers', 'Auxerre', 'Mâcon', 'Montbéliard']
  }
];