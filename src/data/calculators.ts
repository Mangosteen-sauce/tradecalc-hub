export interface Calculator {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  metaDescription: string;
  category: string;
  related: string[];
}

export const calculators: Calculator[] = [
  {
    slug: 'concrete',
    name: 'Concrete Calculator',
    shortName: 'Concrete',
    icon: '/icons/concrete.svg',
    description: 'Calculate cubic yards and bags of concrete needed for slabs, footings, and post holes.',
    metaDescription: 'Free concrete calculator. Estimate cubic yards, bags (40/60/80 lb), and cost for slabs, footings, columns, and post holes. Imperial & metric.',
    category: 'Masonry',
    related: ['brick', 'gravel', 'fencing'],
  },
  {
    slug: 'mulch',
    name: 'Mulch Calculator',
    shortName: 'Mulch',
    icon: '/icons/mulch.svg',
    description: 'Calculate cubic yards of mulch needed for garden beds and landscaping at any depth.',
    metaDescription: 'Free mulch calculator. Estimate cubic yards and bags of mulch for garden beds and landscaping projects. Choose depth and get instant results.',
    category: 'Landscaping',
    related: ['gravel', 'sod', 'fencing'],
  },
  {
    slug: 'gravel',
    name: 'Gravel & Stone Calculator',
    shortName: 'Gravel',
    icon: '/icons/gravel.svg',
    description: 'Calculate tons of gravel or crushed stone needed for driveways, patios, and drainage.',
    metaDescription: 'Free gravel calculator. Estimate tons and cubic yards of gravel, crushed stone, or road base for driveways, patios, and landscaping.',
    category: 'Landscaping',
    related: ['concrete', 'mulch', 'sod'],
  },
  {
    slug: 'paint',
    name: 'Paint Calculator',
    shortName: 'Paint',
    icon: '/icons/paint.svg',
    description: 'Calculate gallons of paint needed for walls and ceilings by room dimensions.',
    metaDescription: 'Free paint calculator. Estimate gallons of paint needed for walls and ceilings. Account for doors, windows, and number of coats.',
    category: 'Interior',
    related: ['drywall', 'tile', 'insulation'],
  },
  {
    slug: 'drywall',
    name: 'Drywall Calculator',
    shortName: 'Drywall',
    icon: '/icons/drywall.svg',
    description: 'Calculate sheets of drywall and joint compound needed for walls and ceilings.',
    metaDescription: 'Free drywall calculator. Estimate sheets (4x8, 4x10, 4x12), joint compound, tape, and screws for walls and ceilings.',
    category: 'Interior',
    related: ['paint', 'insulation', 'tile'],
  },
  {
    slug: 'tile',
    name: 'Tile & Flooring Calculator',
    shortName: 'Tile',
    icon: '/icons/tile.svg',
    description: 'Calculate square footage of tile or flooring with waste factor for any room shape.',
    metaDescription: 'Free tile and flooring calculator. Estimate tiles, boxes, and cost with customizable waste factor. Works for ceramic, porcelain, vinyl, and hardwood.',
    category: 'Flooring',
    related: ['gravel', 'paint', 'drywall'],
  },
  {
    slug: 'fencing',
    name: 'Fence Calculator',
    shortName: 'Fencing',
    icon: '/icons/fence.svg',
    description: 'Calculate posts, rails, pickets, and concrete for wood, vinyl, or chain-link fences.',
    metaDescription: 'Free fence calculator. Estimate posts, rails, pickets, concrete, and cost for wood, vinyl, or chain-link fences by linear feet.',
    category: 'Outdoor',
    related: ['concrete', 'gravel', 'sod'],
  },
  {
    slug: 'sod',
    name: 'Sod & Grass Seed Calculator',
    shortName: 'Sod',
    icon: '/icons/sod.svg',
    description: 'Calculate sod rolls or grass seed needed based on lawn area and coverage rates.',
    metaDescription: 'Free sod and grass seed calculator. Estimate rolls of sod or pounds of seed for new lawns and overseeding. Imperial & metric.',
    category: 'Landscaping',
    related: ['mulch', 'fencing', 'gravel'],
  },
  {
    slug: 'brick',
    name: 'Brick & Block Calculator',
    shortName: 'Brick',
    icon: '/icons/brick.svg',
    description: 'Calculate bricks, blocks, and mortar needed for walls, patios, and walkways.',
    metaDescription: 'Free brick and block calculator. Estimate bricks, concrete blocks (CMU), and mortar bags for walls, patios, and walkways.',
    category: 'Masonry',
    related: ['concrete', 'tile', 'gravel'],
  },
  {
    slug: 'insulation',
    name: 'Insulation Calculator',
    shortName: 'Insulation',
    icon: '/icons/insulation.svg',
    description: 'Calculate batts, rolls, or blown-in insulation needed for walls, attics, and floors.',
    metaDescription: 'Free insulation calculator. Estimate batts, rolls, or blown-in insulation for walls, attics, and crawl spaces. Includes R-value guidance.',
    category: 'Interior',
    related: ['drywall', 'paint', 'tile'],
  },
];
