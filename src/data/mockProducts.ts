import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Apple iPhone 15 Pro Max',
    description: 'The most advanced iPhone ever with A17 Pro chip, titanium design, and Pro camera system.',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    category: 'Electronics',
    subcategory: 'Smartphones',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 2547,
    inStock: true,
    stockQuantity: 150,
    features: [
      'A17 Pro chip with 6-core GPU',
      'Titanium design',
      'Pro camera system',
      '6.7-inch Super Retina XDR display',
      'All-day battery life'
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Storage': '256GB',
      'Color': 'Natural Titanium'
    },
    isFeatured: true,
    isNewArrival: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Samsung 55" 4K OLED Smart TV',
    description: 'Experience stunning picture quality with Quantum Dot technology and smart features.',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    category: 'Electronics',
    subcategory: 'TVs',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1201997/pexels-photo-1201997.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 1832,
    inStock: true,
    stockQuantity: 45,
    features: [
      '4K Ultra HD resolution',
      'Quantum Dot technology',
      'Smart TV with built-in streaming',
      'HDR10+ support',
      'Alexa and Google Assistant compatible'
    ],
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Technology': 'OLED with Quantum Dot',
      'Smart Platform': 'Tizen OS',
      'Connectivity': 'Wi-Fi, Bluetooth, HDMI x4, USB x2'
    },
    isFeatured: true,
    createdAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise cancellation with premium sound quality and 30-hour battery life.',
    price: 399,
    originalPrice: 449,
    discount: 11,
    category: 'Electronics',
    subcategory: 'Audio',
    brand: 'Sony',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviewCount: 3421,
    inStock: true,
    stockQuantity: 200,
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Quick charge: 3 minutes for 3 hours',
      'Speak-to-chat technology',
      'Multipoint connection'
    ],
    specifications: {
      'Type': 'Over-ear wireless',
      'Battery Life': '30 hours with ANC',
      'Charging': 'USB-C fast charging',
      'Weight': '250g',
      'Colors': 'Black, Silver'
    },
    isFeatured: true,
    createdAt: '2024-01-08T09:15:00Z'
  },
  {
    id: '4',
    title: 'MacBook Pro 14-inch M3 Pro',
    description: 'Supercharged for pros with the M3 Pro chip, Liquid Retina XDR display, and all-day battery life.',
    price: 1999,
    originalPrice: 2199,
    discount: 9,
    category: 'Electronics',
    subcategory: 'Laptops',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/812265/pexels-photo-812265.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 1205,
    inStock: true,
    stockQuantity: 75,
    features: [
      'M3 Pro chip with 11-core CPU',
      '14.2-inch Liquid Retina XDR display',
      '18-hour battery life',
      '512GB SSD storage',
      'Magic Keyboard with Touch ID'
    ],
    specifications: {
      'Processor': 'Apple M3 Pro chip',
      'Memory': '18GB unified memory',
      'Storage': '512GB SSD',
      'Display': '14.2-inch Liquid Retina XDR',
      'Ports': '3x Thunderbolt 4, HDMI, SD card slot'
    },
    isNewArrival: true,
    createdAt: '2024-01-12T16:20:00Z'
  },
  {
    id: '5',
    title: 'Nike Air Max 270 Running Shoes',
    description: 'Max Air cushioning and lightweight design for ultimate comfort during your runs.',
    price: 130,
    originalPrice: 150,
    discount: 13,
    category: 'Fashion',
    subcategory: 'Shoes',
    brand: 'Nike',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529149/pexels-photo-2529149.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviewCount: 5671,
    inStock: true,
    stockQuantity: 300,
    features: [
      'Max Air heel unit',
      'Lightweight mesh upper',
      'Rubber outsole for traction',
      'Padded collar and tongue',
      'Multiple colorways available'
    ],
    specifications: {
      'Material': 'Mesh and synthetic leather',
      'Sole': 'Rubber with Max Air',
      'Weight': '310g (size 9)',
      'Sizes': 'US 6-14',
      'Colors': 'Black/White, Navy/Red, Grey/Orange'
    },
    createdAt: '2024-01-05T11:45:00Z'
  },
  {
    id: '6',
    title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    description: '7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.',
    price: 89,
    originalPrice: 119,
    discount: 25,
    category: 'Home & Kitchen',
    subcategory: 'Appliances',
    brand: 'Instant Pot',
    images: [
      'https://images.pexels.com/photos/4226860/pexels-photo-4226860.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226861/pexels-photo-4226861.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 12847,
    inStock: true,
    stockQuantity: 150,
    features: [
      '7-in-1 functionality',
      '6-quart capacity',
      'Stainless steel inner pot',
      '14 smart programs',
      'Safety features with UL certification'
    ],
    specifications: {
      'Capacity': '6 quarts',
      'Material': 'Stainless steel',
      'Power': '1000W',
      'Dimensions': '13.2 x 12.2 x 12.5 inches',
      'Weight': '11.8 pounds'
    },
    isFeatured: true,
    createdAt: '2024-01-03T08:30:00Z'
  },
  {
    id: '7',
    title: 'Kindle Paperwhite (11th Generation)',
    description: 'The most popular Kindle with a glare-free display, waterproof design, and weeks of battery life.',
    price: 139,
    category: 'Electronics',
    subcategory: 'E-readers',
    brand: 'Amazon',
    images: [
      'https://images.pexels.com/photos/1482232/pexels-photo-1482232.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1482233/pexels-photo-1482233.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 8934,
    inStock: true,
    stockQuantity: 400,
    features: [
      '6.8-inch glare-free display',
      'Waterproof (IPX8)',
      'Up to 10 weeks of battery life',
      'Adjustable warm light',
      '8GB or 32GB storage options'
    ],
    specifications: {
      'Display': '6.8-inch E Ink Carta',
      'Resolution': '300 PPI',
      'Storage': '8GB',
      'Connectivity': 'Wi-Fi',
      'Battery': 'Up to 10 weeks'
    },
    isNewArrival: true,
    createdAt: '2024-01-07T13:15:00Z'
  },
  {
    id: '8',
    title: 'YETI Rambler 20 oz Tumbler',
    description: 'Double-wall vacuum insulated tumbler that keeps drinks cold or hot for hours.',
    price: 35,
    category: 'Sports & Outdoors',
    subcategory: 'Drinkware',
    brand: 'YETI',
    images: [
      'https://images.pexels.com/photos/6591267/pexels-photo-6591267.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6591268/pexels-photo-6591268.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.9,
    reviewCount: 3456,
    inStock: true,
    stockQuantity: 500,
    features: [
      'Double-wall vacuum insulation',
      'DurCoat finish',
      'No sweat design',
      'Dishwasher safe',
      'MagSlider lid included'
    ],
    specifications: {
      'Capacity': '20 oz',
      'Material': '18/8 stainless steel',
      'Height': '6.875 inches',
      'Weight': '1.1 pounds',
      'Colors': 'Multiple options available'
    },
    createdAt: '2024-01-02T15:45:00Z'
  }
];

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Sports & Outdoors',
  'Books',
  'Health & Beauty',
  'Toys & Games',
  'Automotive'
];

export const brands = [
  'Apple',
  'Samsung',
  'Sony',
  'Nike',
  'Adidas',
  'Amazon',
  'YETI',
  'Instant Pot'
];