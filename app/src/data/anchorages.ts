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
      name: 'Konoba Gego buoys Zarace',
      region: 'Croatia',
      coords: { lat: 120, lng: 120},
      description: 'Sheltered anchorage with sandy bottom and crystal waters.',
    },
    {
      id: '2',
      name: 'Vis Town',
      region: 'Croatia',
      coords: { lat: 100, lng: 100 },
      description: 'Quiet bay with tavernas ashore and good holding.',
    },
  ];