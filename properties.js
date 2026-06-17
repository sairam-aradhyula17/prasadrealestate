/*
  EASY EDIT AREA
  1) Change business details in siteConfig.
  2) Add/Edit/Delete properties in properties array.
  3) Put your real images inside assets/images/ and update image paths below.
*/

const siteConfig = {
  businessName: "Prasad Real Estate",
  tagline: "Buy, Sell & Invest in Trusted Properties",
  phone: "+91 9866830856",
  whatsapp: "919866830856",
  email: "aradhyulaprasad@gmail.com",
  address: "Tadepalligudem, West Godavari, Andhra Pradesh",
  mapEmbedUrl: "https://www.google.com/maps?q=Tadepalligudem%20Andhra%20Pradesh&output=embed",
  instagramUrl: "#",
  facebookUrl: "#"
};

const properties = [
  {
    id: 1,
    title: "2BHK Independent House",
    type: "House",
    location: "Pentapadu Road, Tadepalligudem",
    price: "₹42 Lakhs",
    budget: 4200000,
    area: "1200 Sq. Ft",
    status: "For Sale",
    image: "house-exterior.jpg",
    gallery: ["house-exterior.jpg", "hero.jpg", "about.jpg"],
    shortDescription: "Ready-to-move independent house with elegant front elevation and parking space.",
    description: "This 2BHK independent house is ideal for families looking for a peaceful residential location. It offers a neat front elevation, spacious interior planning, and easy access to schools, markets, and daily essentials.",
    features: ["2 Bedrooms", "2 Bathrooms", "Parking", "Ready to move", "Family-friendly area"],
    mapUrl: "https://www.google.com/maps?q=Pentapadu%20Road%20Tadepalligudem&output=embed"
  },
  {
    id: 2,
    title: "Premium Residential Plot Near Highway",
    type: "Plot",
    location: "Near Tadepalligudem Bypass",
    price: "₹18 Lakhs",
    budget: 1800000,
    area: "200 Sq. Yards",
    status: "For Sale",
    image: "venture-plots.jpg",
    gallery: ["venture-plots.jpg", "club-house.jpg", "agri-land.webp"],
    shortDescription: "Clear-title residential layout plot with internal roads and fast development scope.",
    description: "A well-planned residential plot venture suitable for home construction or investment. The layout offers good road connectivity, plotted demarcation, and future development potential in a growing area.",
    features: ["Clear title", "Layout roads", "Residential zone", "Good investment area", "Near main road"],
    mapUrl: "https://www.google.com/maps?q=Tadepalligudem%20Bypass&output=embed"
  },
  {
    id: 3,
    title: "Agricultural Land With Road Access",
    type: "Land",
    location: "Prathipadu, West Godavari",
    price: "₹32 Lakhs / Acre",
    budget: 3200000,
    area: "1 Acre",
    status: "For Sale",
    image: "agri-land.webp",
    gallery: ["agri-land.webp", "venture-plots.jpg", "hero.jpg"],
    shortDescription: "Fertile agricultural land with greenery, open surroundings, and road approach.",
    description: "Agricultural land suitable for farming and long-term investment. The land has road access and is located in a calm area with water potential and future value appreciation.",
    features: ["Road approach", "Water availability", "Fertile soil", "Good investment", "Peaceful location"],
    mapUrl: "https://www.google.com/maps?q=Prathipadu%20West%20Godavari&output=embed"
  },
  {
    id: 4,
    title: "Commercial Space Near Main Market",
    type: "Commercial",
    location: "Main Road, Tadepalligudem",
    price: "₹65 Lakhs",
    budget: 6500000,
    area: "900 Sq. Ft",
    status: "For Sale",
    image: "commercial-space.jpg",
    gallery: ["commercial-space.jpg", "about.jpg", "house-exterior.jpg"],
    shortDescription: "Spacious commercial hall suitable for shop, office, showroom, or rental use.",
    description: "A commercial space in a busy locality with good visibility and flexible interior space. It is best suited for retail shops, a small office, clinic, or showroom business.",
    features: ["Main road facing", "Open hall layout", "Good rental value", "Suitable for shop", "Busy location"],
    mapUrl: "https://www.google.com/maps?q=Main%20Road%20Tadepalligudem&output=embed"
  },
  {
    id: 5,
    title: "Modern Apartment Flat",
    type: "Apartment",
    location: "Tanuku Road, Tadepalligudem",
    price: "₹38 Lakhs",
    budget: 3800000,
    area: "1050 Sq. Ft",
    status: "For Sale",
    image: "modern-apartment-flat.webp",
    gallery: ["modern-apartment-flat.webp", "club-house.jpg", "about.jpg"],
    shortDescription: "Modern apartment flat with stylish elevation, parking, and nearby transport access.",
    description: "A modern apartment flat designed for comfortable city living. It features a contemporary look, easy access to nearby amenities, and a pleasant residential atmosphere.",
    features: ["Modern elevation", "Parking", "Balcony", "Premium design", "Near transport"],
    mapUrl: "https://www.google.com/maps?q=Tanuku%20Road%20Tadepalligudem&output=embed"
  },
  {
    id: 6,
    title: "Open Venture Plots With Club House",
    type: "Plot",
    location: "Near Tadepalligudem Bypass",
    price: "₹9,500 / Sq. Yard",
    budget: 9500,
    area: "150 - 300 Sq. Yards",
    status: "Booking Open",
    image: "club-house.jpg",
    gallery: ["club-house.jpg", "venture-plots.jpg", "agri-land.webp"],
    shortDescription: "Open venture plots with club house facility, planned layout, and easy booking options.",
    description: "Affordable venture plots in a developing location with the added appeal of a club house and organized layout. Best for buyers who want an investment plot with future growth potential.",
    features: ["Club house", "Layout plots", "Different sizes", "Booking open", "Investment option"],
    mapUrl: "https://www.google.com/maps?q=Tadepalligudem%20Bypass&output=embed"
  }
];
