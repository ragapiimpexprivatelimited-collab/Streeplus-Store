export const products = [
  // ---------------------------------------------------------------------
  // STREEPLUS™ — Ragapi Impex's menstrual hygiene product line
  // Same core schema as above (id, name, category, price, rating, stock,
  // image, imageAlt, shortDescription, description, features, details)
  // plus extra fields (marked below) reserved for the store/PDP redesign.
  // ---------------------------------------------------------------------
  {
    id: 'streeplus-sanitary-pads',
    name: 'STREEPLUS Sanitary Pads – Soft & Dry | Pack of 3 Pads MOQ: 100 Packs',
    title: 'STREEPLUS Sanitary Pads – Soft & Dry | Pack of 3 Pads MOQ: 100 Packs | RAGAPI IMPEX',
    category: 'Menstrual Hygiene',
    navLabel: 'STREEPLUS Sanitary Pads — Pack of 3',
    navTag: 'BULK ORDER',
    price: 1500,
    rating: 4.8,
    stock: 500,
    image: '/images/products/streeplus-sanitary-pads.png',
    imageAlt: 'STREEPLUS Sanitary Pads pack of 3, soft and dry',
    shortDescription:
      'Soft & dry sanitary pads offering comfort, care, and confidence for everyday use.',
    description:
      'STREEPLUS Sanitary Pads – Pack of 3 offer a perfect balance of comfort, care, and confidence for women. These pads feature a soft & dry surface, ensuring maximum comfort and irritation-free use. Designed for everyday menstrual hygiene, STREEPLUS pads are lightweight, easy to carry, and hygienically packed, making them suitable for home, travel, schools, and workplace. Trusted for quality and safety, STREEPLUS promotes women\u2019s health with reliable and affordable menstrual care solutions.',
    features: [
      'Soft & Dry top layer for extra comfort',
      'Safe protection against leaks',
      'Fresh feel for all-day confidence',
      'Skin-friendly & hygienic material',
      'Compact & travel-friendly pack',
      'Suitable for regular menstrual flow',
    ],
    details: [
      'Brand: STREEPLUS',
      'Product Type: Sanitary Pads',
      'Pack Size: 3 Pads',
      'Ideal For: Women\u2019s menstrual hygiene',
      'Usage: Single use',
      'Mfg / Marketed By: Ragapi Impex Pvt. Ltd.',
    ],

    // --- extra fields, reserved for later use on the store/PDP pages ---
    brand: 'STREEPLUS',
    sku: 'RSP012-26',
    badge: 'New Arrivals',
    currency: 'INR',
    mrp: 2000,
    moq: 100,
    moqUnit: 'Packets',
    productType: 'physical',
    images: [
      '/images/products/streeplus-sanitary-pads.png',
      '/images/products/streeplus-sanitary-pads-2.png',
      '/images/products/streeplus-sanitary-pads-3.png',
    ],
    specifications: [
      { label: 'Brand', value: 'STREEPLUS' },
      { label: 'Product Type', value: 'Sanitary Pads' },
      { label: 'Pack Size', value: '3 Pads' },
      { label: 'Ideal For', value: 'Women\u2019s menstrual hygiene' },
      { label: 'Usage', value: 'Single use' },
      { label: 'Mfg / Marketed By', value: 'Ragapi Impex Pvt. Ltd.' },
    ],
  },
  {
    id: 'streeplus-awareness-campaigns',
    name: 'STREEPLUS\u2122 Female Health & Hygiene Awareness Campaigns',
    title: 'STREEPLUS™ Female Health &amp; Hygiene Awareness Campaigns | RAGAPI IMPEX',
    category: 'Menstrual Hygiene',
    navLabel: 'STREEPLUS™ Awareness Campaigns',
    navTag: 'OUTREACH',
    price: 999,
    rating: 4.9,
    stock: 999,
    image: '/images/products/streeplus-awareness-campaigns.png',
    imageAlt: 'STREEPLUS Female Health & Hygiene Awareness Campaign platform on laptop and phone',
    shortDescription:
      'On-ground and digital awareness campaigns educating women and girls on menstrual health.',
    description:
      'Ragapi Impex Pvt. Ltd., under its socially driven brand STREEPLUS\u2122, is committed to improving female health, menstrual hygiene, and wellness awareness across India. Through our Health & Hygiene Awareness Campaigns, we combine on-ground activities with digital engagement tools to educate, empower, and support women and adolescent girls in both urban and rural communities.',
    features: [
      'On-ground awareness drives across schools, colleges, offices, and community centers',
      'Sessions led by trained female educators, healthcare experts, and volunteers',
      'Product demonstration & distribution of STREEPLUS kits and machines',
      'Digital health awareness platform with tracking and education tools',
      'CSR & NGO collaboration with impact reports and data analytics',
    ],
    details: [
      'Menstrual hygiene & safe practices, myths vs. facts, proper disposal, eco-friendly alternatives',
      'Guidance on reusable menstrual cups and biodegradable pads',
      'Digital platform: menstrual tracking, health education modules, period care checklists',
      '100% Made in India initiative, aligned with Swachh Bharat Mission, Beti Bachao Beti Padhao, and UN SDG 3 & 5',
    ],

    // --- extra fields, reserved for later use on the store/PDP pages ---
    brand: 'STREEPLUS',
    badge: 'Digital',
    currency: 'INR',
    mrp: null,
    moq: null,
    moqUnit: null,
    productType: 'service',
    images: ['/images/products/streeplus-awareness-campaigns.png'],
    sections: [
      {
        title: 'Our Objective',
        items: [
          'Accurate information about menstrual and reproductive health',
          'Safe, hygienic, and eco-friendly menstrual care products',
          'Digital health tools for tracking, learning, and awareness',
          'A stigma-free environment that promotes confidence and well-being',
        ],
      },
      {
        title: 'On-Ground Awareness Drives',
        items: [
          'Large-scale campaigns and workshops across schools, colleges, corporate offices, panchayats, and community centers',
          'Interactive sessions led by trained female educators, healthcare experts, and volunteers',
        ],
      },
      {
        title: 'Product Demonstration & Distribution',
        items: [
          'STREEPLUS\u2122 Menstrual Hygiene Kits',
          'STREEPLUS\u2122 IoT-enabled Vending & Incinerator Combo Machines',
          'Guidance on reusable menstrual cups and biodegradable pads',
          'CSR and institutional partners can sponsor free distribution drives for schools and rural areas',
        ],
      },
      {
        title: 'Digital Health Awareness Platform',
        items: [
          'Menstrual tracking tools',
          'Health education modules',
          'Period care tips & hygiene checklists',
          'Online engagement for awareness events',
        ],
      },
      {
        title: 'CSR & NGO Collaboration',
        items: [
          'Customized CSR campaigns focused on women\u2019s health with corporates, government bodies, and NGOs',
          'Impact reports, photo documentation, and data analytics via digital dashboard for CSR audits and impact submissions',
        ],
      },
      {
        title: 'Why Partner with STREEPLUS\u2122',
        items: [
          '100% Made in India initiative',
          'Backed by technology, education & innovation',
          'Aligned with Swachh Bharat Mission, Beti Bachao Beti Padhao, and UN SDG 3 & 5',
          'End-to-end menstrual health ecosystem \u2014 from awareness to access to disposal',
        ],
      },
    ],
    aboutCompany:
      'Ragapi Impex Pvt. Ltd. is a social-impact enterprise dedicated to promoting female hygiene, menstrual health, and sustainable sanitation solutions. Under its trademark STREEPLUS\u2122, the company designs IoT-enabled Vending & Incinerator Machines, Menstrual Hygiene Kits, and Awareness Campaigns & Digital Education Programs.',
  },
  {
    id: 'streeplus-hygiene-kit',
    name: 'STREEPLUS\u2122 Menstrual Hygiene Kit',
    title: 'STREEPLUS™ Menstrual Hygiene Kit | RAGAPI IMPEX',
    category: 'Menstrual Hygiene',
    navLabel: 'STREEPLUS™ Menstrual Hygiene Kit',
    navTag: 'HYGIENE KIT',
    price: 699,
    rating: 4.8,
    stock: 300,
    image: '/images/products/streeplus-hygiene-kit.png',
    imageAlt: 'STREEPLUS Menstrual Hygiene Kit box with pads, menstrual cup, essential oil, and pouch',
    shortDescription:
      'A curated kit promoting safe, hygienic, and eco-friendly menstrual care.',
    description:
      'Empowering Women Through Hygiene, Health & Dignity. The STREEPLUS\u2122 Menstrual Hygiene Kit is an innovative and socially impactful product designed to promote safe, hygienic, and eco-friendly menstrual care among women and girls. Developed by Ragapi Impex Pvt. Ltd., this kit is thoughtfully curated for CSR initiatives, schools, colleges, corporates, NGOs, and government health programs aimed at menstrual awareness and empowerment.',
    features: [
      'Sanitary Pads (Multiple Sizes) \u2013 ultra-soft, high-absorbency, leak protection',
      'Menstrual Cup \u2013 reusable, medical-grade silicone, sustainable period care',
      'Essential Oil \u2013 natural soothing oil to relieve cramps and promote relaxation',
      'Personal Hygiene Wipes / Cotton Napkin \u2013 for cleanliness during the cycle',
      'Reusable Cotton Pouch \u2013 eco-friendly, discreet storage and portability',
    ],
    details: [
      'Thoughtfully curated for CSR initiatives, schools, colleges, corporates, NGOs, and government health programs',
      'Nicely packed and customisable based on client or project needs',
    ],

    // --- extra fields, reserved for later use on the store/PDP pages ---
    brand: 'STREEPLUS',
    badge: 'Kit',
    currency: 'INR',
    mrp: 1599,
    moq: null,
    moqUnit: null,
    productType: 'physical',
    images: ['/images/products/streeplus-hygiene-kit.png','/images/products/streeplus-hygiene-kit-2.png'],
    kitContents: [
      { item: 'Sanitary Pads (Multiple Sizes)', note: 'Ultra-soft, high-absorbency pads providing comfort and leak protection' },
      { item: 'Menstrual Cup', note: 'Reusable, medical-grade silicone cup offering a sustainable option for period care' },
      { item: 'Essential Oil', note: 'Natural soothing oil to relieve cramps and promote relaxation' },
      { item: 'Personal Hygiene Wipes / Cotton Napkin', note: 'For maintaining cleanliness during the cycle' },
      { item: 'Reusable Cotton Pouch', note: 'Eco-friendly pouch for discreet storage and portability' },
    ],
  },
  {
    id: 'streeplus-vending-incinerator-combo',
    name: 'STREEPLUS\u2122 IoT-Enabled Sanitary Pad Vending & Incinerator Combo',
    title: 'STREEPLUS™ IoT-Enabled Sanitary Pad Vending & Incinerator Combo | RAGAPI IMPEX',
    category: 'Menstrual Hygiene',
    navLabel: 'STREEPLUS™ Vending & Incinerator Combo',
    navTag: 'IOT · HARDWARE',
    price: 59999,
    rating: 4.9,
    stock: 15,
    image: '/images/products/streeplus-vending-incinerator-combo.png',
    imageAlt: 'STREEPLUS IoT-Enabled Sanitary Napkin Vending & Incinerator Combo machine',
    shortDescription:
      'Smart IoT-enabled machine combining sanitary pad vending with smoke-free disposal.',
    description:
      'Revolutionizing Menstrual Hygiene & Sanitary Waste Management. To address the dual challenge of distribution of sanitary pads and eco-friendly disposal of sanitary waste, Ragapi Impex Pvt. Ltd. has introduced STREEPLUS\u2122 \u2014 an advanced IoT-enabled Vending & Incinerator Combo Machine designed to promote hygiene, dignity, and sustainability in every community. This smart combo unit combines automatic vending of sanitary pads with safe, smoke-free disposal \u2014 powered by real-time IoT monitoring and 4G connectivity for seamless operation.',
    features: [
      '4G LTE, IoT-enabled, 24x7 connectivity',
      'Automatic sanitary napkin vending machine',
      'Smoke-free sanitary napkin incinerator',
      'Real-time IoT monitoring for remote maintenance',
      'Coin-operated vending with simple 4-step use',
    ],
    details: [
      'Vending side: insert coin, push the button, collect the napkin, use the napkin',
      'Incinerator side: place used napkin, close the door, press the START button',
      'Clean the ash tray every 15 days',
      'Display panel with Heater On, Start Button, and Master Switch indicators',
    ],

    // --- extra fields, reserved for later use on the store/PDP pages ---
    brand: 'STREEPLUS',
    badge: 'Machines',
    currency: 'INR',
    mrp: 85000,
    moq: null,
    moqUnit: null,
    productType: 'machine',
    images: ['/images/products/streeplus-vending-incinerator-combo.png'],
    machineSpecs: {
      connectivity: '4G LTE, IoT Enabled 24x7',
      vendingSteps: [
        'Insert coin',
        'Push the button',
        'Collect the napkin',
        'Use the napkin',
      ],
      incineratorSteps: [
        'Place used napkin',
        'Close the door',
        'Press the START button',
      ],
      maintenanceNote: 'Please clean ash tray in 15 days',
      indicators: ['Display', 'Heater On', 'Start Button', 'Master Switch', 'NICB'],
    },
  },
]

export const getProductById = (productId) =>
  products.find((product) => product.id === productId)