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

export const domain = {
  name: 'cenphowax.com',
  price: 50000,
  priceCurrency: 'USD',
  priceValidUntil: '2027-12-31',
  status: 'Available for acquisition',
  seller: 'Desert Rich',
  escrow: 'Escrow.com protected transfer',
  salePage: '/domain-for-sale/',
} as const;

export const priceLabel = `$${domain.price.toLocaleString('en-US')}`;

export const acquisitionMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  `${domain.name} — Domain Acquisition Inquiry`
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring cenphowax.com. Please confirm availability, terms, and next steps.\n\nName:\nCompany / intended use:\nOffer:\n\n— '
)}`;

export const sameAs = ['https://github.com/Mrerg7/cenphowax-com-v1'];

export const siteUrl = (path = '/') => new URL(path, site.url).href;
