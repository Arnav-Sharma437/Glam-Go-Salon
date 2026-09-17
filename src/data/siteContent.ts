export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  bookingType: "salon" | "clinical";
  duration?: string;
  startingPrice?: string;
  treatments?: {
    name: string;
    duration?: string;
    price?: string;
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date?: string;
  text: string;
  source: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: string;
}

export const BOOKING_LINKS = {
  salonFresha: "https://www.fresha.com", // Client configurable Fresha booking URL
  clinicalPhorest: "https://www.phorest.com", // Client configurable Phorest clinical booking URL
};

export const SITE_INFO = {
  name: "Glam & Go",
  fullName: "Glam & Go Beauty Salon",
  tagline: "Luxury Aesthetic & Beauty Salon",
  address: "Unit 21, Treaty Centre, High St, Hounslow TW3 1ES, United Kingdom",
  shortAddress: "Unit 21, Treaty Centre, High St, Hounslow TW3 1ES",
  googleMapsUrl: "https://maps.google.com/?q=Unit+21,+Treaty+Centre,+High+St,+Hounslow+TW3+1ES",
  phonePrimary: "+44-20-8577-1333",
  phoneSecondary: "+44-74-4059-1153",
  phonePrimaryClean: "+442085771333",
  phoneSecondaryClean: "+447440591153",
  whatsAppUrl: "https://wa.me/447440591153",
  email: "glamandgohounslow@gmail.com",
  openingHours: "Mon - Sat: 9:30 AM - 6:30 PM | Sun: 11:00 AM - 5:00 PM",
  hiringNotice: "We’re Hiring: Salon Manager — Join Glam & Go Beauty Salon Today",
  academyUrl: "https://glamandgotrainingacademy.com/",
  googleReviewsCount: "1,015 Google reviews",
  googleRating: "5.0",
  copyrightYear: 2026,
};

// 2 Authentic Salon Hero Slides (Academy removed from Hero as per client requirements)
export const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "Elegance Refined, Beauty Redefined",
    title: "Advanced Aesthetics. Exceptional Salon Care.",
    description: "Welcome to Glam and Go — where expertise meets the latest technology in Hounslow.",
    image: "/images/banners/banner-salon.jpg",
    primaryCta: { label: "Salon Services", href: "/services" },
    secondaryCta: { label: "Clinical Booking", href: "/book?type=clinical" },
  },
  {
    id: "slide-2",
    eyebrow: "Glow Differently with Expert Touch",
    title: "Step In Beautiful, Step Out Glamorous",
    description: "Delivering exceptional care and results tailored to every client under one roof.",
    image: "/images/banners/banner-beauty.png",
    primaryCta: { label: "Salon Services", href: "/services" },
    secondaryCta: { label: "Clinical Booking", href: "/book?type=clinical" },
  },
];

// Statistics exactly from live website
export const STATS = [
  { value: "3.5K", label: "Happy Clients" },
  { value: "25+", label: "Years Of Experience" },
  { value: "5+", label: "Academy Courses" },
  { value: "35+", label: "Professional Team" },
];

// About Us verbatim copy from live website
export const ABOUT_CONTENT = {
  eyebrow: "About us",
  title: "Welcome To The Luxury Aesthetic & Beauty Salon",
  lead: "Welcome to Glam and Go — where expertise meets the latest technology. We provide premium hair, beauty, and aesthetic services all under one roof, delivering exceptional care and results tailored to every client.",
  paragraph1: "We are also proud to introduce our Training Academy, led by experienced and highly qualified educators dedicated to helping students develop professional skills and confidence. Our commitment to innovation, education, and excellence has taken our services to the next level, creating a complete beauty destination for both clients and aspiring professionals.",
  founderNote: "Glam & Go is a Hounslow beauty haven with a rich legacy spanning over two decades. Founded by visionary Zaida, the salon has blossomed into a destination for hairstyling artistry and luxurious experiences.",
  image1: "/images/salon/salon-interior-main.jpg",
  image2: "/images/salon/treatment-suite.jpg",
};

// 4 Pure Salon Services (Academy services moved exclusively to dedicated Academy portal link)
export const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    slug: "beauty-makeup",
    title: "BEAUTY & MAKEUP",
    category: "Beauty & Makeup",
    bookingType: "salon",
    shortDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, facials, makeup artistry, and beauty treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs. Our goal is to enhance your natural beauty while helping you feel confident, refreshed, and radiant.",
    fullDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, facials, makeup artistry, and beauty treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs. Our goal is to enhance your natural beauty while helping you feel confident, refreshed, and radiant.",
    image: "/images/services/beauty-makeup.jpg",
    treatments: [
      { name: "Professional Skincare & Facials", duration: "Available upon booking", price: "Starting from £35" },
      { name: "Makeup Artistry (Party & Bridal)", duration: "Available upon booking", price: "Price on consultation" },
      { name: "Eyebrow Threading & Tinting", duration: "15-30 mins", price: "Starting from £10" },
      { name: "Waxing Services", duration: "Available upon booking", price: "Starting from £15" },
    ],
  },
  {
    id: "service-2",
    slug: "hair",
    title: "Hair",
    category: "Hair Styling & Colour",
    bookingType: "salon",
    shortDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results. Whether you're looking for a fresh new style, colour transformation, or routine maintenance, our team is dedicated to helping you look and feel your best.",
    fullDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results. Whether you're looking for a fresh new style, colour transformation, or routine maintenance, our team is dedicated to helping you look and feel your best.",
    image: "/images/services/hair-styling.webp",
    treatments: [
      { name: "Cut, Wash & Blowdry", duration: "45-60 mins", price: "Starting from £35" },
      { name: "Balayage & Full Highlights", duration: "2-3 hrs", price: "Price on consultation" },
      { name: "Hair Colouring & Gloss", duration: "60-90 mins", price: "Starting from £50" },
      { name: "Keratin Hair Smoothing Treatment", duration: "2-3 hrs", price: "Price on consultation" },
    ],
  },
  {
    id: "service-3",
    slug: "aesthetics",
    title: "AESTHETICS",
    category: "Advanced Aesthetics",
    bookingType: "clinical",
    shortDesc: "Our aesthetics team is led by highly experienced practitioners with more than 15 years of expertise in advanced treatments. Combining professional knowledge with the latest technologies and industry-leading techniques, we deliver safe and effective results. As the exclusive provider of SkinCeuticals in Hounslow, we offer premium solutions for healthier, younger-looking skin.",
    fullDesc: "Our aesthetics team is led by highly experienced practitioners with more than 15 years of expertise in advanced treatments. Combining professional knowledge with the latest technologies and industry-leading techniques, we deliver safe and effective results. As the exclusive provider of SkinCeuticals in Hounslow, we offer premium solutions for healthier, younger-looking skin.",
    image: "/images/services/aesthetics.jpg",
    treatments: [
      { name: "SkinCeuticals Clinical Peels", duration: "45 mins", price: "Price on consultation" },
      { name: "Radio Frequency Skin Tightening", duration: "45-60 mins", price: "Price on consultation" },
      { name: "Lynton Laser Skin Treatments", duration: "30-60 mins", price: "Price on consultation" },
      { name: "Free Aesthetics Consultation", duration: "20 mins", price: "Free" },
    ],
  },
  {
    id: "service-4",
    slug: "complete-body-wellness-care",
    title: "Complete Body & Wellness Care",
    category: "Body & Wellness",
    bookingType: "salon",
    shortDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence. From body contouring to restorative therapies, our treatments are designed to enhance balance, vitality, and long-term wellbeing.",
    fullDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence. From body contouring to restorative therapies, our treatments are designed to enhance balance, vitality, and long-term wellbeing.",
    image: "/images/services/body-wellness.jpg",
    treatments: [
      { name: "Body Contouring Treatments", duration: "60 mins", price: "Price on consultation" },
      { name: "Relaxation & Therapeutic Body Care", duration: "45-60 mins", price: "Starting from £45" },
      { name: "Rejuvenating Body Rituals", duration: "60 mins", price: "Price on consultation" },
    ],
  },
];

// What Makes Us Different verbatim from live website
export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    title: "Hijab-Friendly Salon",
    description: "Private, respectful service with your comfort at the centre.",
    iconName: "ShieldCheck",
  },
  {
    title: "Expert-Trained Professionals",
    description: "Experienced, continuously trained specialists you can trust.",
    iconName: "Award",
  },
  {
    title: "Medical-Grade Equipment",
    description: "We invest in advanced technology, including Lynton and Radio Frequency machines for safe, high-quality results.",
    iconName: "Sparkles",
  },
  {
    title: "Free Consultation",
    description: "Honest guidance and a plan tailored to your goals.",
    iconName: "MessageSquareHeart",
  },
  {
    title: "Centrally Located in Hounslow",
    description: "Easy to reach with convenient local access.",
    iconName: "MapPin",
  },
  {
    title: "Friendly Atmosphere",
    description: "A welcoming space where you’ll feel relaxed, heard, and cared for.",
    iconName: "HeartHandshake",
  },
];

// Exact authentic reviews from Google
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Ifra Mansoor",
    rating: 5,
    source: "Google Reviews",
    text: "I had an absolute amazing time at this salon today! I was delighted to learn that they accept walk-ins, as it was a last-minute visit. Lovely, who is an absolute sweetheart, made sure to give me a fantastic waxing session. We chatted throughout, plus she made me feel very comfortable and it was a very pleasant experience overall, both in terms of service and price. I would definitely recommend this salon. I can’t wait to see you again, Lovely! 🤍 Also, I had my hair cut by KARAN, safe to say I will be coming back to get my hair cut again. He did an amazing job at cutting them exactly how I wanted and we had a really great time chatting. Absolutely loved my visit at the salon !!",
  },
  {
    id: "rev-2",
    author: "Ahliya Malik",
    rating: 5,
    source: "Google Reviews",
    text: "Karan was so good, i came into the salon scared and had bad experiences before. Karan changed my perspective on everything and gave me the best treatment on my hair!!! 100% recommend.!",
  },
  {
    id: "rev-3",
    author: "Rashmita Karki",
    rating: 5,
    source: "Google Reviews",
    text: "“I had burned my hair while trying to do keratin by myself at home, so I went to the salon for help. Paras handled my damaged hair with so much care and professionalism. He explained the process clearly, treated my hair gently, and the final result was amazing considering how damaged it was before. I’m really thankful for his skill and patience. Highly recommended!😍😍”",
  },
  {
    id: "rev-4",
    author: "Sonia Lima",
    rating: 5,
    source: "Google Reviews",
    text: "Great service and professional hairdressers. I highly recommend here for everything: Hair cut, Colour, Highlight, Hair style.",
  },
  {
    id: "rev-5",
    author: "NS",
    rating: 5,
    source: "Google Reviews",
    text: "I have been a few times now and have always had my eyebrows threaded and tinting by Neetu. Today when I arrived this morning I asked to have Neetu fo my eye,I was told she didn't start work until later. I decided to wait outside, Neetu however saw me standing there and asked me into the shop and she started the process. I would highly recommend Neetu ,she has always made a brilliant job with my eyebrows. She should be a valued member of staff.",
  },
  {
    id: "rev-6",
    author: "Sara Faria",
    rating: 5,
    source: "Google Reviews",
    text: "I had a walk in appointment and Dilan took me in immediately. I wanted a birthday glam and have a Balayage and I must say Karan did an absolute wonderful job on my hair. Can't stop looking at myself. Thank you ❤️",
  },
  {
    id: "rev-7",
    author: "ana ugrexelidze",
    rating: 5,
    source: "Google Reviews",
    text: "Karan was so nice and talanted guy, I'm so happy with my haircut it's much better than the picture itself 🧡 thank you guys so much!!! Will definitely come again.",
  },
  {
    id: "rev-8",
    author: "Harshitha Yadav",
    rating: 5,
    source: "Google Reviews",
    text: "I had beautiful haircut by INDER and eyebrows by LOVELY. Absolutely love that cut and service so muchhh☺️",
  },
  {
    id: "rev-9",
    author: "Vanessa Cordunianu",
    rating: 5,
    source: "Google Reviews",
    text: "great experience! everyones so welcoming and my highlights done by roya look and feel amazing",
  },
];

// Product brands exactly as on live site
export const BRANDS = [
  { name: "Kérastase", logo: "/images/brands/kerastase.png", subtitle: "Hair Care" },
  { name: "SkinCeuticals", logo: "/images/brands/skinceuticals.png", subtitle: "Exclusive Provider in Hounslow" },
  { name: "Olaplex", logo: "/images/brands/olaplex.png", subtitle: "Hair Repair" },
  { name: "L'Oréal", logo: "/images/brands/loreal.png", subtitle: "Hair Colour & Care" },
];

export const GALLERY_ITEMS = [
  { id: "gal-1", image: "/images/gallery/gallery-1.jpg", title: "Salon Styling", category: "Hair" },
  { id: "gal-2", image: "/images/gallery/gallery-2.jpg", title: "Treatment Room", category: "Aesthetics" },
  { id: "gal-3", image: "/images/gallery/gallery-3.jpg", title: "Salon Care", category: "Beauty" },
  { id: "gal-4", image: "/images/gallery/gallery-4.jpg", title: "Hair Services", category: "Hair" },
  { id: "gal-5", image: "/images/gallery/gallery-5.jpg", title: "Aesthetics Care", category: "Aesthetics" },
  { id: "gal-6", image: "/images/gallery/gallery-6.webp", title: "Private Salon Area", category: "Salon" },
];

export const FAQS = [
  {
    question: "Do you accept walk-in appointments?",
    answer: "Yes, walk-ins are accepted based on specialist availability. However, to guarantee your preferred time slot and stylist or aesthetician, we recommend booking in advance.",
  },
  {
    question: "Is Glam & Go a Hijab-Friendly salon?",
    answer: "Yes. We offer private, respectful salon spaces ensuring complete comfort and privacy for our clients during their treatments.",
  },
  {
    question: "What aesthetic treatments do you offer?",
    answer: "We offer advanced aesthetic treatments including SkinCeuticals clinical peels, Lynton laser treatments, and radiofrequency skin tightening, led by experienced practitioners with over 15 years of experience.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free consultations to discuss your treatment goals and provide honest guidance tailored to you.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major debit and credit cards, contactless payments, and cash in-salon. For clinical aesthetic bookings, deposit details are confirmed during consultation or appointment confirmation.",
  },
  {
    question: "Where are you located in Hounslow?",
    answer: "We are located at Unit 21, Treaty Centre, High St, Hounslow TW3 1ES. The salon is centrally located and easy to reach by local public transport with nearby parking.",
  },
  {
    question: "Where can I find Glam & Go Training Academy courses?",
    answer: "Our Training Academy now has its own dedicated website. Please visit https://glamandgotrainingacademy.com/ or click 'Academy' in our navigation to view course information and enrol.",
  },
];
