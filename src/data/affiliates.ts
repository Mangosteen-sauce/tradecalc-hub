export interface AffiliateLink {
  id: string;
  text: string;
  url: string;
  retailer: string;
  category: string;
}

// Centralized affiliate/product link registry
// PAYPAL-ONLY MONETIZATION STRATEGY:
// - Home Depot / Lowe's: Impact.com affiliate links (pays via PayPal, $10 min)
// - All other product links: plain URLs auto-monetized by Skimlinks (pays via PayPal, $65 min)
//   and/or Sovrn Commerce (pays via PayPal, $10 min, no fees)
// - Skimlinks auto-converts outbound product links across 48,500+ merchants
// - No Amazon Associates needed — Skimlinks covers Amazon automatically
export const affiliateLinks: Record<string, AffiliateLink> = {
  // Plain product links — Skimlinks auto-converts these
  'concrete-mixer': {
    id: 'concrete-mixer',
    text: 'concrete mixer',
    url: 'https://www.amazon.com/s?k=concrete+mixer',
    retailer: 'Product Link',
    category: 'tools',
  },
  'wheelbarrow': {
    id: 'wheelbarrow',
    text: 'wheelbarrow',
    url: 'https://www.amazon.com/s?k=wheelbarrow',
    retailer: 'Product Link',
    category: 'tools',
  },
  'paint-sprayer': {
    id: 'paint-sprayer',
    text: 'paint sprayer',
    url: 'https://www.amazon.com/s?k=paint+sprayer',
    retailer: 'Product Link',
    category: 'tools',
  },
  'paint-roller-kit': {
    id: 'paint-roller-kit',
    text: 'paint roller kit',
    url: 'https://www.amazon.com/s?k=paint+roller+kit',
    retailer: 'Product Link',
    category: 'tools',
  },
  'tile-saw': {
    id: 'tile-saw',
    text: 'tile saw',
    url: 'https://www.amazon.com/s?k=tile+saw',
    retailer: 'Product Link',
    category: 'tools',
  },
  'tile-spacers': {
    id: 'tile-spacers',
    text: 'tile spacers',
    url: 'https://www.amazon.com/s?k=tile+spacers',
    retailer: 'Product Link',
    category: 'supplies',
  },
  'drywall-tools': {
    id: 'drywall-tools',
    text: 'drywall tool kit',
    url: 'https://www.amazon.com/s?k=drywall+tool+kit',
    retailer: 'Product Link',
    category: 'tools',
  },
  'insulation-stapler': {
    id: 'insulation-stapler',
    text: 'insulation stapler',
    url: 'https://www.amazon.com/s?k=insulation+stapler',
    retailer: 'Product Link',
    category: 'tools',
  },
  'fence-post-driver': {
    id: 'fence-post-driver',
    text: 'fence post driver',
    url: 'https://www.amazon.com/s?k=fence+post+driver',
    retailer: 'Product Link',
    category: 'tools',
  },
  'sod-roller': {
    id: 'sod-roller',
    text: 'lawn roller',
    url: 'https://www.amazon.com/s?k=lawn+roller',
    retailer: 'Product Link',
    category: 'tools',
  },
  'masonry-trowel': {
    id: 'masonry-trowel',
    text: 'masonry trowel set',
    url: 'https://www.amazon.com/s?k=masonry+trowel+set',
    retailer: 'Product Link',
    category: 'tools',
  },
  'landscape-fabric': {
    id: 'landscape-fabric',
    text: 'landscape fabric',
    url: 'https://www.amazon.com/s?k=landscape+fabric',
    retailer: 'Product Link',
    category: 'supplies',
  },
  'gravel-rake': {
    id: 'gravel-rake',
    text: 'landscape rake',
    url: 'https://www.amazon.com/s?k=landscape+rake',
    retailer: 'Product Link',
    category: 'tools',
  },

  // Home Depot (Impact.com affiliate links — pays via PayPal)
  'homedepot-concrete': {
    id: 'homedepot-concrete',
    text: 'concrete mix at Home Depot',
    url: 'https://www.homedepot.com/s/concrete%20mix?NCNI-5',
    retailer: 'Home Depot',
    category: 'materials',
  },
  'homedepot-mulch': {
    id: 'homedepot-mulch',
    text: 'mulch at Home Depot',
    url: 'https://www.homedepot.com/s/mulch?NCNI-5',
    retailer: 'Home Depot',
    category: 'materials',
  },
  'homedepot-paint': {
    id: 'homedepot-paint',
    text: 'interior paint at Home Depot',
    url: 'https://www.homedepot.com/s/interior%20paint?NCNI-5',
    retailer: 'Home Depot',
    category: 'materials',
  },

  // Lowe's (Impact.com affiliate links — pays via PayPal)
  'lowes-drywall': {
    id: 'lowes-drywall',
    text: 'drywall sheets at Lowe\'s',
    url: 'https://www.lowes.com/search?searchTerm=drywall+sheets',
    retailer: 'Lowe\'s',
    category: 'materials',
  },
  'lowes-insulation': {
    id: 'lowes-insulation',
    text: 'insulation at Lowe\'s',
    url: 'https://www.lowes.com/search?searchTerm=insulation',
    retailer: 'Lowe\'s',
    category: 'materials',
  },
  'lowes-fencing': {
    id: 'lowes-fencing',
    text: 'fence panels at Lowe\'s',
    url: 'https://www.lowes.com/search?searchTerm=fence+panels',
    retailer: 'Lowe\'s',
    category: 'materials',
  },
};

// Helper to get affiliate links by calculator
export function getAffiliateLinksForCalculator(slug: string): AffiliateLink[] {
  const mapping: Record<string, string[]> = {
    concrete: ['concrete-mixer', 'wheelbarrow', 'homedepot-concrete'],
    mulch: ['landscape-fabric', 'wheelbarrow', 'homedepot-mulch'],
    gravel: ['gravel-rake', 'landscape-fabric', 'wheelbarrow'],
    paint: ['paint-sprayer', 'paint-roller-kit', 'homedepot-paint'],
    drywall: ['drywall-tools', 'lowes-drywall'],
    tile: ['tile-saw', 'tile-spacers'],
    fencing: ['fence-post-driver', 'lowes-fencing'],
    sod: ['sod-roller', 'landscape-fabric'],
    brick: ['masonry-trowel', 'homedepot-concrete'],
    insulation: ['insulation-stapler', 'lowes-insulation'],
  };

  return (mapping[slug] || []).map(id => affiliateLinks[id]).filter(Boolean);
}
