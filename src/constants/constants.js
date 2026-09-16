import { products } from "@/data/products"

export const COMPANY_INFO = {
  name: 'Ragapi Impex Pvt. Ltd. - STREEPLUS™',
  shortName: 'Ragapi Impex',
  tagline: 'STREEPLUS™',
  initials: 'R',
  year: '2026',
}


// ---------------------------------------------------------------------
// Testimonials were intentionally dropped — inventing fake client
// quotes/names would be misleading marketing copy. Swap in real ones
// once you have them (see note in the chat reply).
// ---------------------------------------------------------------------

export const HOME_CONTENT = {
  hero: {
    eyebrow: "Women's Health & Hygiene",
    headingLine1: 'Empowering Community',
    headingLine2Prefix: 'through ',
    headingLine2Accent: 'Menstrual Hygiene',
    headingLine2Suffix: ' Innovations',
    subheading:
      'RAGAPI Impex builds dignified, affordable menstrual hygiene solutions \u2014 from biodegradable pads to IoT-enabled vending and disposal systems \u2014 for institutions, rural communities, and corporates across India.',
    ctaPrimary: 'Explore STREE+ Store',
    ctaSecondary: 'Request Sample Kit for Bulk Order',
    trustLine: 'Trusted by',
    trustTags: ['Schools', 'Corporates (CSR)', 'NGOs', 'Government Bodies'],
  },
  highlights: [
    { icon: 'Leaf', label: '100% Made in India' },
    { icon: 'Wifi', label: '24x7 IoT Monitoring' },
    { icon: 'Users', label: 'Women-Led Enterprise' },
    { icon: 'Boxes', label: '4 Product Lines' },
  ],
  about: {
    eyebrow: 'About Ragapi',
    heading: 'About Ragapi',
    paragraphs: [
      "RAGAPI Impex Pvt. Ltd. is a B2B female health and menstrual hygiene impact startup based in Gurugram, India, pioneering dignified access to menstrual hygiene solutions across institutional, rural, and corporate sectors. Founded by Mrs. Rajni Verma and Ms. Anjali, the company combines decades of educational leadership with modern entrepreneurial vision to address India's menstrual hygiene crisis through innovative, sustainable, and culturally sensitive solutions.",
      'Our comprehensive product portfolio includes biodegradable sanitary pads, IoT-enabled vending machines, CPCB-compliant incinerators, combo disposal systems, and educational CSR hygiene kits. With a focus on women empowerment, environmental sustainability, and social impact, RAGAPI directly contributes to UN Sustainable Development Goals 3, 5, 6, 12, and 13.',
    ],
    ctaLabel: 'Know More',
    ctaPath: '/about',
  },
  offerings: {
    eyebrow: 'What we offer',
    heading: 'Solutions built for every stage of menstrual hygiene management.',
    items: [
      {
        title: 'Menstrual Products',
        description:
          'Premium quality, comfort hygiene products and kits designed for single-user needs as well as bulk distribution and community programs.',
        productId: 'streeplus-hygiene-kit',
        linkPath: '/products/streeplus-hygiene-kit',
      },
      {
        title: 'Hygiene Machinery',
        description:
          'IoT-enabled vending & incinerator machines with real-time monitoring for schools, offices, and public spaces.',
        productId: 'streeplus-vending-incinerator-combo',
        linkPath: '/products/streeplus-vending-incinerator-combo',
      },
      {
        title: 'Digital Wellness',
        description:
          'Awareness campaigns and digital education platforms promoting menstrual health literacy and wellness.',
        productId: 'streeplus-awareness-campaigns',
        linkPath: '/products/streeplus-awareness-campaigns',
      },
    ],
  },
  whyRagapi: {
    eyebrow: 'Why Ragapi',
    heading: 'Why RAGAPI?',
    videoLabel: 'Company overview',
    items: [
      {
        icon: 'Truck',
        title: 'Supply Reliability',
        text: 'Consistent, high-quality product delivery with robust supply chain management and quality assurance protocols.',
      },
      {
        icon: 'Cpu',
        title: 'Digital 1st Approach',
        text: 'Leveraging technology and IoT solutions to create smart, scalable, and data-driven hygiene management systems.',
      },
      {
        icon: 'Users',
        title: 'Women-Led Innovation',
        text: 'Founded and operated by women who understand the real challenges and needs of menstrual hygiene management.',
      },
      {
        icon: 'Target',
        title: 'Purpose Aligned Solutions',
        text: 'Purpose-built programs that align with corporate social responsibility goals and create measurable community impact.',
      },
    ],
  },
  cta: {
    eyebrow: "Let's build what's next",
    heading: 'Ready to bring dignified hygiene access to your community?',
    ctaLabel: 'Partner with us',
    ctaPath: '/partner-with-us',
  },
}

export const CONTACT_DETAILS = {
  // Corp office
  addressLine1: '83, Sector-09, Gurugram',
  addressLine2: 'Haryana 122001, India',

  // Factory unit
  factoryLine1: 'Plot #10, Khasra 708, 709, Basai',
  factoryLine2: 'Haryana, India',

  // Phones
  primaryPhone: '+91 95555 35036',
  primaryPhoneLabel: 'Business & Collaborations',
  secondaryPhone: '+91 93184 45957',
  secondaryPhoneLabel: 'Technical Assistance',

  // Emails (kept as an array so the footer can list all three;
  // email/primaryEmail below is kept for any existing code that
  // reads a single email field)
  email: 'info@ragapiimpex.com',
  emails: [
    'info@ragapiimpex.com',
    'bd@ragapiimpex.com',
    'ragapiimpexprivatelimited@gmail.com',
  ],

  // Map — resolved from your Google Maps share link to the exact pin
  // "Ragapi Impex Pvt. Ltd. – STREEPLUS™"
  mapCoordinates: { lat: 28.462990691758655, lng: 76.99086507604119 },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5495994493713!2d76.99086507604119!3d28.462990691758655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d177588577d51%3A0x96bd30f8c40e1801!2sRagapi%20Impex%20Pvt.%20Ltd.%20%E2%80%93%20STREEPLUS%E2%84%A2!5e0!3m2!1sen!2sin!4v1786814894746!5m2!1sen!2sin',
  mapDirectionsUrl: 'https://maps.app.goo.gl/1SS7xj5HKmhdFUR59',
  navLocationLabel: 'Sector 9, Gurugram',
  cin: 'U70100DL2005PTC134816',
  officeHours: {
    weekdays: 'Mon-Fri 9:00 am - 5:00 pm',
    saturday: 'Saturday 9:00 am - 2:00 pm',
  },
  businessContact: {
    name: 'Mr. Piyush Verma',
    phone: '+91-95555-35036', // see discrepancy note above
  },
  technicalSupport: {
    phone: '+91-93184-45957',
  },
  whatsappNumber: '919555535036',
  whatsappMessage: "Hi, I'd like to know more about STREEPLUS™.",
}

// Web3Forms access key — sign up free at https://web3forms.com,
// create a form, and paste the key it gives you here.
export const WEB3FORMS_ACCESS_KEY = '78490260-1511-4567-9132-8504a50f9537'

// Web3Forms access key used on the CHECKOUT page — this points to a
// DIFFERENT Web3Forms form from the one used for the Contact page.
// TODO: Replace with your dedicated Checkout form's access key.
export const CHECKOUT_WEB3FORMS_ACCESS_KEY = 'ab5eb559-286d-4860-b6d2-dd4cc625a895'

// New — legal links row in the footer bottom bar.
// Point these at real routes/pages once they exist.
export const FOOTER_LEGAL_LINKS = [
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/shipping-policy', label: 'Shipping & Delivery Policy' },
  { path: '/refund-policy', label: 'Cancellation & Refund Policy' },
]

// New — social links row in the footer bottom bar.
// Swap in your real profile URLs.
export const FOOTER_SOCIAL_LINKS = [
  { label: 'LinkedIn', url: 'https://linkedin.com/company/ragapi-impex' },
  { label: 'X', url: 'https://x.com/ragapiimpex' },
  { label: 'Facebook', url: 'https://facebook.com/ragapiimpex' },
  { label: 'YouTube', url: 'https://youtube.com/@ragapiimpex' },
]

export const NAVBAR_CONFIG = {
  mapLinkLabel: 'Location',
  showRoleSwitcher: true,
}

export const FOOTER_CONFIG = {
  mapTitle: 'Google Map Location',
  mapCtaLabel: 'Open location',
  heading: "Let's connect!",
  corpOfficeLabel: 'Corp. Office:',
  factoryUnitLabel: 'Factory Unit:',
  mapTitle: 'Ragapi Office',
}

// export const NAV_ITEMS = [
//   { label: 'Home', path: '/' },
//   { label: 'About', path: '/about' },
//   { label: 'Services', path: '/services' },
//   { label: 'Projects', path: '/projects' },
//   { label: 'Products', path: '/products' },
//   { label: 'Contact', path: '/contact' },
//   { label: 'Cart', path: '/cart' },
//   { label: 'Admin', path: '/admin' },
// ]
export const NAV_ITEMS = [
  { path: '/about', label: 'About Us' },
  // { path: '/team', label: 'Our Team' },
  { path: '/impact', label: 'Impact' },
  { path: '/partner-with-us', label: 'Partner with Us' },
  {
    path: '/store',
    label: 'STREE+ Store',
    children: products
      .slice(0, 4) // any 4 random products for the dropdown; adjust as needed
      .filter((product) => product.brand === 'STREEPLUS')
      .map((product) => ({
        path: `/products/${product.id}`,
        label: product.navLabel ?? product.name,
        tag: product.navTag,
        note: product.moq ? `MOQ ${product.moq} ${product.moqUnit ?? ''}`.trim() : undefined,
      })),
  },
  { path: '/admin', label: 'Admin' },
  { path: '/contact', label: 'Contact Us' },
]
export const FOOTER_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
]

export const SITE_MEDIA = {
  heroImage: '/images/hero-main.svg',
  aboutImage: '/images/about-team.svg',
}

export const HERO_CONTENT = {
  eyebrow: 'Premium menstrual-care products',
  heading: 'STREEPLUS™ — Trusted by women across India',
  subheading:
    'High-quality, comfortable and eco-conscious sanitary protection designed for everyday confidence. Manufactured with care in Gurugram.',
  ctaPrimary: 'Shop products',
  ctaSecondary: 'Learn more',
  trustLine: 'Trusted by women, hospitals and clinics',
}

export const TEAM_MEMBERS = [
  // {
  //   name: 'Ananya Sharma',
  //   role: 'Managing Director',
  //   phone: '+91 99887 77665',
  //   email: 'ananya@ragaimpex.com',
  //   image: '/images/team-ananya-sharma.svg',
  // },
  // {
  //   name: 'Rohit Menon',
  //   role: 'Head of Operations',
  //   phone: '+91 98777 12345',
  //   email: 'rohit@ragaimpex.com',
  //   image: '/images/team-rohit-menon.svg',
  // },
  // {
  //   name: 'Kavya Rao',
  //   role: 'Client Success Lead',
  //   phone: '+91 97654 32109',
  //   email: 'kavya@ragaimpex.com',
  //   image: '/images/team-kavya-rao.svg',
  // },
]


export const ABOUT_CONTENT = {
  eyebrow: 'About us',
  hero: {
    heading: 'At Ragapi..',
    paragraphs: [
      'We pioneer menstrual hygiene innovation with a women-first approach.',
      'Our mission is to transform communities through sustainable, affordable, and inclusive solutions. We integrate digital empowerment to break barriers, create awareness, and foster lasting impact.',
      'Driven by dignity and care, we are shaping a healthier, more equitable future for women everywhere.',
    ],
  },
  story: {
    heading: 'Our Story',
    paragraphs: [
      'RAGAPI IMPEX PVT LTD was born from a profound understanding of the challenges faced by women and girls in accessing quality menstrual hygiene products. Founded with the vision of creating a world where menstruation is never a barrier to education, work, or personal dignity, our company represents the convergence of purpose, innovation, and social impact.',
      'Our journey began when we recognized the stark reality that millions of women across India lack access to safe, affordable, and sustainable menstrual hygiene solutions. This realization sparked our commitment to developing not just products, but comprehensive ecosystems that address the multifaceted challenges of menstrual health management.',
      'As a women-led organization, we bring authentic understanding and empathy to every solution we create. Our approach goes beyond traditional product supply to encompass digital education, IoT-enabled accessibility, and community empowerment programs that create lasting change.',
    ],
  },
  mission: {
    heading: 'Our Mission',
    text: 'A world where every woman and girl has uninterrupted access to safe, affordable menstrual hygiene products, comprehensive education, and the support needed to manage their menstrual health with confidence.',
  },
  vision: {
    heading: 'Our Vision',
    text: 'To democratize access to menstrual hygiene products and education through innovative, sustainable, and technology-driven solutions that empower women and girls to live with dignity, health, and confidence.',
  },
  values: {
    heading: 'Our Values',
    items: [
      {
        label: 'Women-Centric Innovation',
        icon: 'Sparkles',
        description: 'Every solution starts with the realities women actually face.',
      },
      {
        label: 'Sustainable Solutions',
        icon: 'Leaf',
        description: 'Eco-friendly materials and processes at every stage.',
      },
      {
        label: 'Digital Accessibility',
        icon: 'Smartphone',
        description: 'Awareness and tracking tools that reach beyond the shelf.',
      },
      {
        label: 'Community Empowerment',
        icon: 'Users',
        description: 'Programs built with and for the communities we serve.',
      },
      {
        label: 'Quality & Reliability',
        icon: 'ShieldCheck',
        description: 'Trusted, hygienically manufactured, safety-first products.',
      },
    ],
  },
  team: {
    eyebrow: 'Leadership team',
  },
}
 

// ---------------------------------------------------------------------
// The percentage stats are placeholder/demo figures from that mockup, 
// not independently verified. Swap in sourced numbers before this goes live.
// ---------------------------------------------------------------------

export const IMPACT_CONTENT = {
  hero: {
    heading: 'Empowering Women, Transforming Lives',
    intro: [
      'At Ragapi Impex Private Limited, we are driven by a simple yet powerful belief: no woman should ever have to compromise her dignity because of something as natural as her menstrual cycle. For millions of women and girls, particularly in underserved communities, access to safe, affordable, and comprehensive menstrual hygiene solutions remains a daily challenge. This is not just a matter of convenience — it\u2019s a matter of health, dignity, and equality.',
      'We are committed to changing this reality through a three-pronged approach: Providing Accessible Solutions, Building Awareness and Breaking Stigma, and Fostering Community-Driven Change. Our mission is to ensure that every woman, regardless of her socio-economic background, can manage her menstrual cycle with confidence, safety, and pride.',
    ],
  },
  stages: [
    {
      id: 'challenge',
      label: 'Stage 1',
      title: 'The Challenge \u2014 A Widespread Issue',
      body: 'Millions of women and girls lack access to safe menstrual hygiene solutions. In India, only 42% of adolescent women in rural areas use hygienic methods, and 1 in 10 globally lack a private place to manage periods. This leads to missed school days, health risks, and stigma, with 50% of Indian girls unaware of menstruation before their first period.',
      stats: [
        { value: 42, suffix: '%', label: 'Rural adolescent women using hygienic methods' },
        { value: 10, prefix: '1 in ', label: 'People globally lack a private place for periods' },
        { value: 50, suffix: '%', label: 'Indian girls unaware of menstruation before their first period' },
      ],
    },
    {
      id: 'solution',
      label: 'Stage 2',
      title: 'Our Solution \u2014 Affordable, Comprehensive Kits',
      body: 'Our menstrual hygiene kits provide essentials \u2014 pads, soap, disposal bags, and educational guides \u2014 at nominal rates. Designed for accessibility, they include eco-friendly options to promote sustainability. In areas where only 49.8% of women use proper hygiene, our kits boost confidence and school attendance, contributing to the 76.15% shift toward hygienic products in India.',
      stats: [
        { value: 49.8, suffix: '%', label: 'Women using proper hygiene in target areas' },
        { value: 76.15, suffix: '%', label: 'Shift toward hygienic products in India' },
      ],
    },
    {
      id: 'vision',
      label: 'Stage 3',
      title: 'Our Vision \u2014 A Movement for Change',
      body: 'We\u2019re building a movement with NGOs, CSR initiatives, and self-help groups to reach underserved communities, where hygienic practices are as low as 29.6%. Through education and distribution, we\u2019re removing stigma and empowering women. Every kit is a step toward equality, supporting the 78% of women now using hygienic methods. Join us to make menstrual hygiene a universal right.',
      stats: [
        { value: 29.6, suffix: '%', label: 'Hygienic practice rate in underserved communities' },
        { value: 78, suffix: '%', label: 'Women now using hygienic methods' },
      ],
    },
  ],
  cta: {
    heading: 'Break the silence, embrace hygiene.',
    body: 'Partner with us to bring accessible menstrual hygiene solutions to more communities.',
    buttonLabel: 'Partner with us',
    buttonPath: '/partner-with-us',
  },
}

export const PARTNER_CONTENT = {
  hero: {
    badge: 'Partner with us',
    heading: 'Partner with STREEPLUS\u2122',
    tags: ['Empowering Women', 'Promoting Hygiene', 'Creating Sustainable Impact'],
  },
  intro: {
    heading: 'Join Hands with Us',
    segments: [
      { text: 'At ' },
      { text: 'Ragapi Impex Pvt. Ltd.', bold: true },
      { text: ', under our trademark ' },
      { text: 'STREEPLUS\u2122', bold: true },
      {
        text: ', we are committed to transforming menstrual hygiene management through innovation, awareness, and accessibility. By partnering with us, you can be part of a movement that empowers women, supports sustainable hygiene, and drives measurable social impact across India.',
      },
    ],
  },
  whyPartner: {
    heading: 'Why Partner with STREEPLUS\u2122',
    items: [
      'Work with a women-led social enterprise promoting menstrual hygiene and sustainability.',
      'Implement CSR menstrual hygiene projects in schools, colleges, and rural communities.',
      'Access smart IoT-enabled vending and incinerator solutions for sanitary waste management.',
      'Get end-to-end campaign support \u2013 awareness drives, data dashboards, and impact reports.',
    ],
  },
  collaboration: {
    heading: 'Collaboration Opportunities',
    segments: [
      { text: "Whether you're a " },
      { text: 'corporate CSR head, NGO, educational institution,', bold: true },
      { text: ' or ' },
      { text: 'government department', bold: true },
      { text: ', STREEPLUS\u2122 offers flexible partnership models:' },
    ],
    items: [
      'CSR and government initiatives for menstrual hygiene awareness',
      'Installation of IoT-enabled vending & incinerator combo machines',
      'Distribution of eco-friendly menstrual hygiene kits',
      'Community outreach and educational programs',
    ],
  },
  cta: {
    heading: "Let's Create Impact Together!",
    emails: ['info@ragapiimpex.com', 'bd@ragapiimpex.com'],
    mobileDisplay: '+91-95555-35036',
    whatsappNumber: '919555535036',
    whatsappMessage: "Hi STREEPLUS team, I'd like to explore a partnership.",
  },
}