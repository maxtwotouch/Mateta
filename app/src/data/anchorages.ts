export interface Anchorage {
    id: string;
    name: string;
    region: string;
    coords: { lat: number; lng: number };
    description: string;
  }
  
  export const anchorages: Anchorage[] = [
    {
      id: '1',
      name: 'Hidden Cove, Kornati',
      region: 'Croatia',
      coords: { lat: 43.8525, lng: 15.3583 },
      description: 'Sheltered anchorage with sandy bottom and crystal waters.',
    },
    {
      id: '2',
      name: 'Meganisi Bay',
      region: 'Greece',
      coords: { lat: 38.6714, lng: 20.7931 },
      description: 'Quiet bay with tavernas ashore and good holding.',
    },
  ];