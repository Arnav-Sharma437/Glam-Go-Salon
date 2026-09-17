export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features?: string[];
  popularTreatments?: string[];
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

export const SITE_INFO = {
  name: "Glam & Go London",
  tagline: "Luxury Aesthetic & Beauty Salon",
  address: "Unit 21, Treaty Centre, High St, Hounslow TW3 1ES, United Kingdom",
  shortAddress: "Unit 21, Treaty Centre, Hounslow TW3 1ES",
  phonePrimary: "+44 20 8577 1333",
  phoneSecondary: "+44 74 4059 1153",
  phonePrimaryClean: "+442085771333",
  phoneSecondaryClean: "+447440591153",
  email: "glamandgohounslow@gmail.com",
  openingHours: "Mon - Sat: 9:30 AM - 6:30 PM | Sun: 11:00 AM - 5:00 PM",
  hiringNotice: "We’re Hiring: Salon Manager — Join Glam & Go Beauty Salon Today",
  academyUrl: "https://glamandgotrainingacademy.com", // External dedicated academy website CTA
  googleReviewsCount: "1,015+",
  googleRating: "5.0",
  copyrightYear: 2026,
};

export const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "Your Beauty Career Starts Here",
    title: "Enroll in VTCT Certified Courses Today.",
    description: "Industry-leading professional qualifications and clinical excellence led by certified educators.",
    image: "/images/Aesthetics-banner.png",
    primaryCta: { label: "Clinical Booking", href: "/book?type=clinical" },
    secondaryCta: { label: "Salon Services", href: "/book?type=salon" },
  },
  {
    id: "slide-2",
    eyebrow: "Elegance Refined, Beauty Redefined",
    title: "Advanced Aesthetics. Exceptional Salon Care.",
    description: "Personalised treatments delivered with medical-grade technologies and exclusive luxury formulations.",
    image: "/images/glam-go-1-1-scaled.jpg",
    primaryCta: { label: "Salon Services", href: "/book?type=salon" },
    secondaryCta: { label: "Clinical Booking", href: "/book?type=clinical" },
  },
  {
    id: "slide-3",
    eyebrow: "Glow Differently with Expert Touch",
    title: "Step In Beautiful, Step Out Glamorous",
    description: "Experience the ultimate luxury for hair, beauty, and skin rejuvenation under one prestigious roof.",
    image: "/images/beauty-banner.png",
    primaryCta: { label: "Salon Services", href: "/book?type=salon" },
    secondaryCta: { label: "Clinical Booking", href: "/book?type=clinical" },
  },
];

export const STATS = [
  { value: "3.5K", label: "Happy Clients", suffix: "" },
  { value: "25+", label: "Years Of Experience", suffix: "" },
  { value: "5+", label: "Academy Courses", suffix: "" },
  { value: "35+", label: "Professional Team", suffix: "" },
];

export const ABOUT_CONTENT = {
  eyebrow: "About us",
  title: "Welcome To The Luxury Aesthetic & Beauty Salon",
  lead: "Welcome to Glam and Go — where expertise meets the latest technology. We provide premium hair, beauty, and aesthetic services all under one roof, delivering exceptional care and results tailored to every client.",
  paragraph1: "We are also proud to introduce our Training Academy, led by experienced and highly qualified educators dedicated to helping students develop professional skills and confidence. Our commitment to innovation, education, and excellence has taken our services to the next level, creating a complete beauty destination for both clients and aspiring professionals.",
  paragraph2: "At Glam & Go, we believe beauty is more than a service—it’s an experience. Combining expert knowledge with the latest technology, we offer a complete range of premium hair, beauty, and aesthetic treatments under one roof. Our dedicated team is committed to delivering exceptional care, personalised treatments, and outstanding results tailored to each client’s unique needs.",
  paragraph3: "Driven by innovation, education, and excellence, Glam & Go has evolved into a complete beauty destination—serving both valued clients seeking outstanding treatments and aspiring professionals looking to build successful careers. Whether you’re visiting us for a transformation, self-care, or professional training, we are dedicated to helping you look, feel, and achieve your very best.",
  founderNote: "Glam & Go is a Hounslow beauty haven with a rich legacy spanning over two decades. Founded by visionary Zaida, the salon has blossomed into a destination for hairstyling artistry and luxurious experiences.",
  image1: "/images/salon-1.jpg",
  image2: "/images/AD_08736-scaled-880x952.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    slug: "beauty-makeup",
    title: "BEAUTY & MAKEUP",
    category: "Facials & Artistry",
    shortDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, facials, makeup artistry, and beauty treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs. Our goal is to enhance your natural beauty while helping you feel confident, refreshed, and radiant.",
    fullDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, facials, makeup artistry, and beauty treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs. Our goal is to enhance your natural beauty while helping you feel confident, refreshed, and radiant. From bridal glamour to rejuvenating deep-cleansing facials, waxing, and eyebrow micro-treatments, our certified therapists ensure precision and care in every touch.",
    image: "/images/glam-go-beauty-scaled.jpg",
    features: ["VTCT Certified Therapists", "10+ Years Industry Experience", "Premium Skincare Products", "Bespoke Personalised Consultations"],
    popularTreatments: ["Signature Glow Facial", "Hydrating Radiance Treatment", "Bridal & Glamour Makeup", "Precision Eyebrow Shaping & Tinting", "Full Body Waxing"],
  },
  {
    id: "service-2",
    slug: "hair",
    title: "Hair",
    category: "Styling & Colouring",
    shortDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results. Whether you're looking for a fresh new style, colour transformation, or routine maintenance, our team is dedicated to helping you look and feel your best.",
    fullDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results. Whether you're looking for a fresh new style, colour transformation, or routine maintenance, our team is dedicated to helping you look and feel your best. We utilize world-class Kérastase rituals, Olaplex bond repair, and L'Oréal professional colors to safeguard hair integrity.",
    image: "/images/hairstylists-working-with-customers-at-the-hair-sa-2023-11-27-05-05-59-utc2.webp",
    features: ["Expert Colourists & Stylists", "Kérastase & Olaplex Formulations", "Custom Balayage & Highlights", "Hair Health & Keratin Restorations"],
    popularTreatments: ["Bespoke Balayage & Highlights", "Keratin Hair Smoothing & Repair", "Precision Cuts & Styling", "Kérastase Intensive Scalp & Hair Rituals", "Luxury Blowdry"],
  },
  {
    id: "service-3",
    slug: "aesthetics",
    title: "AESTHETICS",
    category: "Advanced Clinical Care",
    shortDesc: "Our aesthetics team is led by highly experienced practitioners with more than 15 years of expertise in advanced treatments. Combining professional knowledge with the latest technologies and industry-leading techniques, we deliver safe and effective results. As the exclusive provider of SkinCeuticals in Hounslow, we offer premium solutions for healthier, younger-looking skin.",
    fullDesc: "Our aesthetics team is led by highly experienced practitioners with more than 15 years of expertise in advanced treatments. Combining professional knowledge with the latest technologies and industry-leading techniques, we deliver safe and effective results. As the exclusive provider of SkinCeuticals in Hounslow, we offer premium solutions for healthier, younger-looking skin with clinical precision and medical-grade Lynton laser technology.",
    image: "/images/AD_08769-scaled.jpg",
    features: ["15+ Years Clinical Expertise", "Exclusive Hounslow SkinCeuticals Provider", "Medical-Grade Lynton & RF Technologies", "Doctor-Led Safety Protocols"],
    popularTreatments: ["SkinCeuticals Custom Clinical Peels", "Radiofrequency Skin Tightening", "Advanced Laser Skin Rejuvenation", "Microneedling & Collagen Therapy", "Anti-Wrinkle & Dermal Enhancements"],
  },
  {
    id: "service-4",
    slug: "complete-body-wellness-care",
    title: "Complete Body & Wellness Care",
    category: "Holistic Body & Rejuvenation",
    shortDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence. From body contouring to restorative therapies, our treatments are designed to enhance balance, vitality, and long-term wellbeing.",
    fullDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence. From body contouring to restorative therapies, our treatments are designed to enhance balance, vitality, and long-term wellbeing in a private, welcoming sanctuary.",
    image: "/images/glam-go-wellness-scaled.jpg",
    features: ["Holistic & Clinical Approaches", "Targeted Body Sculpting & Contouring", "Private & Relaxing Treatment Suites", "Personalised Wellness Plans"],
    popularTreatments: ["Advanced Body Contouring", "Deep Tissue & Therapeutic Massage", "Detoxifying Body Rituals", "Skin Reaffirmation & Toning"],
  },
  {
    id: "service-5",
    slug: "glam-go-training-academy",
    title: "Glam & Go Training Academy",
    category: "Professional Qualifications",
    shortDesc: "Our Training Academy offers VTCT-approved qualifications from Level 2 to Level 7, delivered by experienced educators with extensive industry expertise. Combining comprehensive theory with practical, hands-on training, our programmes provide recognised qualifications, professional skills, and industry knowledge. Students gain the confidence and practical experience needed to build a successful career in beauty and aesthetics.",
    fullDesc: "Our Training Academy offers VTCT-approved qualifications from Level 2 to Level 7, delivered by experienced educators with extensive industry expertise. Combining comprehensive theory with practical, hands-on training, our programmes provide recognised qualifications, professional skills, and industry knowledge. Students gain the confidence and practical experience needed to build a successful career in beauty and aesthetics. (Redirects to dedicated Academy portal).",
    image: "/images/AD_08866-scaled-e1782242795437.jpg",
    features: ["VTCT Approved Level 2 to Level 7", "Expert Certified Educators", "Hands-On Clinical Training", "Recognised Industry Accreditations"],
    popularTreatments: ["Level 2 & 3 Beauty Therapy", "Level 4 Laser & Light Treatments", "Fast-Track Aesthetic Modules"],
  },
  {
    id: "service-6",
    slug: "cpd-certified-aesthetics",
    title: "CPD Certified Aesthetics",
    category: "Accredited Practitioner Training",
    shortDesc: "Our Training Academy offers CPD Certified Aesthetics courses designed for both aspiring and experienced practitioners looking to advance their expertise. Combining expert-led training with the latest industry techniques and practical, hands-on learning, our courses develop professional skills and treatment knowledge. Students gain the confidence needed to perform advanced aesthetic procedures safely, effectively, and professionally.",
    fullDesc: "Our Training Academy offers CPD Certified Aesthetics courses designed for both aspiring and experienced practitioners looking to advance their expertise. Combining expert-led training with the latest industry techniques and practical, hands-on learning, our courses develop professional skills and treatment knowledge. Students gain the confidence needed to perform advanced aesthetic procedures safely, effectively, and professionally. (Redirects to dedicated Academy portal).",
    image: "/images/Aesthethics-course-2-scaled.jpg",
    features: ["CPD Certified Credentials", "Expert-Led Practical Modules", "Advanced Safety & Protocols", "Continuous Career Mentorship"],
    popularTreatments: ["Dermal Fillers Masterclass", "Anti-Wrinkle Injections Certification", "Advanced Skin Boosters & Profhilo"],
  },
];

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

export const BRANDS = [
  { name: "Kérastase", logo: "/images/kerastase.png", subtitle: "Luxury Hair Rituals" },
  { name: "SkinCeuticals", logo: "/images/Skin-ceutals-1.png", subtitle: "Advanced Professional Skincare (Exclusive in Hounslow)" },
  { name: "Olaplex", logo: "/images/Partner2.png", subtitle: "Complete Bond Building & Hair Repair" },
  { name: "L'Oréal Professionnel", logo: "/images/Partner3.png", subtitle: "Couture Hair Colour & Innovation" },
];

export const GALLERY_ITEMS = [
  { id: "gal-1", image: "/images/salon-img-1-scaled.jpg", title: "Salon Styling & Artistry", category: "Hair Artistry" },
  { id: "gal-2", image: "/images/salon-img-2-scaled.jpg", title: "Advanced Treatment Suites", category: "Clinic Interior" },
  { id: "gal-3", image: "/images/salon-img-3-scaled.jpg", title: "Luxury Client Experience", category: "Beauty & Glow" },
  { id: "gal-4", image: "/images/salon-img-4-scaled.jpg", title: "Precision Hair & Care", category: "Hair Care" },
  { id: "gal-5", image: "/images/AD_08879-scaled.jpg", title: "Clinical Aesthetics & Rejuvenation", category: "Aesthetics" },
  { id: "gal-6", image: "/images/salon1-1.webp", title: "Private Hijab-Friendly Atmosphere", category: "Salon Space" },
];

export const FAQS = [
  {
    question: "Do you accept walk-in appointments?",
    answer: "Yes, walk-ins are warmly welcomed subject to specialist availability. However, to guarantee your preferred time slot and practitioner, we strongly recommend booking in advance through our website or by calling +44 20 8577 1333.",
  },
  {
    question: "Is Glam & Go a Hijab-Friendly salon?",
    answer: "Absolutely. We provide dedicated, private, and respectful salon spaces designed to ensure complete comfort, modesty, and privacy for all our clients throughout their hair, beauty, and aesthetic treatments.",
  },
  {
    question: "Are your aesthetic practitioners certified and insured?",
    answer: "Yes, our aesthetics team is led by practitioners with over 15 years of clinical experience, fully certified, insured, and working with medical-grade Lynton technology and genuine SkinCeuticals products.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer complimentary, honest consultations for both clinical aesthetic treatments and major hair transformations to discuss your goals and formulate a bespoke treatment plan.",
  },
  {
    question: "How do I enroll in Glam & Go Training Academy courses?",
    answer: "Our Training Academy operates via a dedicated portal offering VTCT-approved Level 2 to Level 7 and CPD-certified credentials. You can click 'Academy' in our main menu or visit the training academy portal directly to view course schedules and enroll.",
  },
  {
    question: "Where in Hounslow are you located?",
    answer: "We are centrally located in the Treaty Centre on High Street, Hounslow (Unit 21, Treaty Centre, High St, Hounslow TW3 1ES). It is easily accessible by tube (Hounslow Central / Hounslow East) and bus with convenient parking.",
  },
];
