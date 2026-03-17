export interface AffiliateLink {
  id: string;
  text: string;
  url: string;
  retailer: string;
  category: string;
}

// Centralized affiliate link registry
// Replace placeholder URLs with actual affiliate links after joining programs
export const affiliateLinks: Record<string, AffiliateLink> = {
  // Amazon Associates
  'concrete-mixer': {
    id: 'concrete-mixer',
    text: 'concrete mixer on Amazon',
    url: 'https://www.amazon.com/s?k=concrete+mixer&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'wheelbarrow': {
    id: 'wheelbarrow',
    text: 'wheelbarrow on Amazon',
    url: 'https://www.amazon.com/s?k=wheelbarrow&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'paint-sprayer': {
    id: 'paint-sprayer',
    text: 'paint sprayer on Amazon',
    url: 'https://www.amazon.com/s?k=paint+sprayer&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'paint-roller-kit': {
    id: 'paint-roller-kit',
    text: 'paint roller kit on Amazon',
    url: 'https://www.amazon.com/s?k=paint+roller+kit&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'tile-saw': {
    id: 'tile-saw',
    text: 'tile saw on Amazon',
    url: 'https://www.amazon.com/s?k=tile+saw&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'tile-spacers': {
    id: 'tile-spacers',
    text: 'tile spacers on Amazon',
    url: 'https://www.amazon.com/s?k=tile+spacers&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'supplies',
  },
  'drywall-tools': {
    id: 'drywall-tools',
    text: 'drywall tool kit on Amazon',
    url: 'https://www.amazon.com/s?k=drywall+tool+kit&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'insulation-stapler': {
    id: 'insulation-stapler',
    text: 'insulation stapler on Amazon',
    url: 'https://www.amazon.com/s?k=insulation+stapler&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'fence-post-driver': {
    id: 'fence-post-driver',
    text: 'fence post driver on Amazon',
    url: 'https://www.amazon.com/s?k=fence+post+driver&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'sod-roller': {
    id: 'sod-roller',
    text: 'lawn roller on Amazon',
    url: 'https://www.amazon.com/s?k=lawn+roller&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'masonry-trowel': {
    id: 'masonry-trowel',
    text: 'masonry trowel set on Amazon',
    url: 'https://www.amazon.com/s?k=masonry+trowel+set&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },
  'landscape-fabric': {
    id: 'landscape-fabric',
    text: 'landscape fabric on Amazon',
    url: 'https://www.amazon.com/s?k=landscape+fabric&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'supplies',
  },
  'gravel-rake': {
    id: 'gravel-rake',
    text: 'landscape rake on Amazon',
    url: 'https://www.amazon.com/s?k=landscape+rake&tag=YOURTAG-20',
    retailer: 'Amazon',
    category: 'tools',
  },

  // Home Depot (replace with Impact Radius links)
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

  // Lowe's (replace with Impact Radius links)
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
