export const site = {
  name: 'CenPho Wax',
  tagline: 'Central Phoenix Brazilian Wax',
  url: 'https://cenphowax.com',
  email: 'sales@desertrich.com',
  ga4Id: '',
  priceRange: '$$',
  address: {
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areasServed: [
    'Central Phoenix',
    'Arcadia',
    'Midtown Phoenix',
    'Encanto',
    'Uptown Phoenix',
    'Biltmore',
    'Downtown Phoenix',
  ],
  neighborhoods:
    'Arcadia, Midtown, Encanto, Uptown, Biltmore, and downtown Phoenix',
} as const;

export const siteUrl = (path = '/') => new URL(path, site.url).href;
