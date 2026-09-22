export interface TreatmentItem {
  name: string;
  duration?: string;
  price?: string;
  freshaUrl?: string;
  description?: string;
}

export interface PackageItem {
  id: string;
  title: string;
  category: string;
  singlePrice: string;
  courseSessions: string;
  coursePrice: string;
  saving?: string;
  freshaUrl?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  bookingType: "salon" | "clinical";
  startingPrice?: string;
  treatments?: TreatmentItem[];
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
  salonFresha: "https://www.fresha.com/en-GB/a/glam-go-hounslow-hounslow-unit-21-treaty-centre-high-st-zkawcm12/all-offer?menu=true&pId=2710857",
  sharedFresha: "https://www.fresha.com/en-GB/a/glam-go-hounslow-hounslow-unit-21-treaty-centre-high-st-zkawcm12/all-offer?menu=true&share=true&pId=2710857",
  laserBooking: "https://www.fresha.com/en-GB/a/glam-go-hounslow-hounslow-unit-21-treaty-centre-high-st-zkawcm12/all-offer?menu=true&pId=2710857",
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
  phoneAcademy: "+44 20 3918 0949",
  phoneAcademyClean: "+442039180949",
  whatsAppUrl: "https://wa.me/447440591153",
  email: "glamandgohounslow@gmail.com",
  instagramUrl: "https://www.instagram.com/glamandgolondon",
  facebookUrl: "https://www.facebook.com/glamandgolondon",
  openingHours: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 7:00 PM",
  hiringNotice: "We’re Hiring: Salon Manager — Join Glam & Go Beauty Salon Today",
  academyUrl: "https://glamandgoacademy.com/",
  googleReviewsCount: "1,015 Google reviews",
  googleRating: "5.0",
  copyrightYear: 2026,
};

// 2 Authentic Salon Hero Slides
export const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "Elegance Refined, Beauty Redefined",
    title: "Advanced Aesthetics. Exceptional Salon Care.",
    description: "Welcome to Glam and Go — where expertise meets the latest technology in Hounslow.",
    image: "/images/salon/salon-suite-3.webp",
    primaryCta: { label: "Salon Services", href: "/services" },
    secondaryCta: { label: "Clinical Booking", href: BOOKING_LINKS.salonFresha, external: true },
  },
  {
    id: "slide-2",
    eyebrow: "Glow Differently with Expert Touch",
    title: "Step In Beautiful, Step Out Glamorous",
    description: "Delivering exceptional care and results tailored to every client under one roof.",
    image: "/images/banners/banner-beauty.png",
    primaryCta: { label: "Laser Hair Removal", href: "/laser-hair-removal" },
    secondaryCta: { label: "Clinical Booking", href: BOOKING_LINKS.salonFresha, external: true },
  },
];

// Statistics from live website
export const STATS = [
  { value: "3.5K", label: "Happy Clients" },
  { value: "15+", label: "Years of Experience" },
  { value: "5+", label: "Academy Courses" },
  { value: "35+", label: "Professional Team" },
];

// About Us verbatim copy from live website
export const ABOUT_CONTENT = {
  eyebrow: "About us",
  title: "Welcome To The Luxury Aesthetic & Beauty Salon",
  lead: "Welcome to Glam and Go — where expertise meets the latest technology. We provide premium hair, beauty, and aesthetic services all under one roof, delivering exceptional care and results tailored to every client.",
  paragraph1: "We are also proud to introduce our Training Academy, led by experienced and highly qualified educators dedicated to helping students develop professional skills and confidence. Our commitment to innovation, education, and excellence has taken our services to the next level, creating a complete beauty destination for both clients and aspiring professionals.",
  founderNote: "Glam & Go is a Hounslow beauty haven with a rich legacy spanning over 15 years. Founded by visionary Zaida, the salon has blossomed into a destination for hairstyling artistry and luxurious experiences.",
  image1: "/images/salon/salon-suite-3.webp",
  image2: "/images/salon/salon-atmosphere.jpg",
};

// Complete 7 Distinct Services Catalogue
export const SERVICES: ServiceItem[] = [
  {
    id: "service-laser",
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    category: "Laser Hair Removal",
    bookingType: "salon",
    shortDesc: "Laser hair removal treatments at Glam & Go Hounslow. We provide hair reduction across face and body areas with in-depth consultation and patch test.",
    fullDesc: "Laser hair removal treatments at Glam & Go Hounslow. We provide hair reduction across face and body areas. Every treatment begins with a consultation and patch test to assess your skin and hair type before starting your sessions.",
    image: "/images/services/laser-hair-removal.jpg",
    startingPrice: "Consultation & Courses Available",
    treatments: [
      { name: "Laser Hair Removal Consultation & Patch Test", duration: "15-30 mins", price: "Free Consultation", description: "Skin consultation and patch test prior to starting treatment." },
      { name: "Full Face Laser Hair Removal", duration: "30 mins", description: "Upper lip, chin, cheeks and jawline hair reduction." },
      { name: "Underarms Laser Treatment", duration: "15-20 mins", description: "Underarm hair reduction session." },
      { name: "Full Arms & Half Arms", duration: "30-45 mins", description: "Arm hair reduction session." },
      { name: "Full Legs & Half Legs", duration: "45-60 mins", description: "Legs hair reduction session." },
      { name: "Bikini Line / Brazilian / Hollywood", duration: "20-30 mins", description: "Intimate area hair reduction in private treatment rooms." },
      { name: "Full Body Laser Hair Removal Course", duration: "90-120 mins", description: "Full body packages and tailored treatment courses." },
    ],
  },
  {
    id: "service-facials",
    slug: "facials",
    title: "Facials",
    category: "Facials",
    bookingType: "clinical",
    shortDesc: "Facial and skin rejuvenation treatments at Glam & Go Hounslow, including SkinCeuticals professional peels, radiofrequency, and microneedling therapies.",
    fullDesc: "Facial and skin rejuvenation treatments at Glam & Go Hounslow, including SkinCeuticals professional peels, radiofrequency, and advanced microneedling tailored to your skin concerns.",
    image: "/images/gallery/gallery-2.jpg",
    startingPrice: "From £90",
    treatments: [
      { name: "SkinCeuticals Gel Peel 10%", duration: "45 mins", price: "From £90", description: "Professional gel peel treatment targeting dull skin and tone." },
      { name: "20% Glycolic Peel", duration: "45 mins", price: "From £120", description: "Targeted skin peel for texture and renewal." },
      { name: "30% Glycolic Peel", duration: "45 mins", price: "From £130", description: "Exfoliation peel for skin renewal and radiance." },
      { name: "Under-Eye Rejuvenation", duration: "30-45 mins", price: "From £150", description: "Targeted rejuvenating treatment for the delicate under-eye area." },
      { name: "Radiofrequency Facial", duration: "45-60 mins", price: "From £100", description: "Radiofrequency facial treatment for skin firming." },
      { name: "Radiofrequency Facial (Course of 5)", duration: "5 sessions", price: "From £400", description: "Course of 5 radiofrequency sessions." },
      { name: "Microneedling – Full Face", duration: "60 mins", price: "From £150", description: "Full face collagen induction therapy." },
      { name: "Microneedling – Full Face & Neck", duration: "75 mins", price: "From £200", description: "Collagen induction covering face and neck." },
      { name: "Microneedling with Exosomes", duration: "60 mins", price: "From £200", description: "Advanced microneedling infused with regenerative exosomes." },
    ],
  },
  {
    id: "service-skin-treatments",
    slug: "skin-treatments",
    title: "Skin Treatments",
    category: "Skin Treatments",
    bookingType: "clinical",
    shortDesc: "Rejuvenation and skin treatments including Skin Boosters, Polynucleotide Therapy, Profhilo, Microneedling, PRP therapy, and PDO thread lifts.",
    fullDesc: "Rejuvenation and skin treatments including Skin Boosters, Polynucleotide Therapy, Profhilo, Microneedling, PRP therapy, and PDO thread lifts delivered in our private treatment rooms.",
    image: "/images/gallery/gallery-2.jpg",
    startingPrice: "From £150",
    treatments: [
      { name: "Skin Boosters", duration: "45 mins", price: "From £150", description: "Skin hydration and radiance treatment." },
      { name: "Polynucleotide Therapy", duration: "45 mins", price: "From £200", description: "Biostimulator therapy for cellular repair, under-eye and skin quality." },
      { name: "Profhilo 2–4ml", duration: "45 mins", price: "From £399", description: "Hyaluronic acid bio-remodelling treatment for skin firmness." },
      { name: "Microneedling – Full Face", duration: "60 mins", price: "From £150", description: "Full face microneedling treatment." },
      { name: "Microneedling – Full Face & Neck", duration: "75 mins", price: "From £200", description: "Microneedling treatment covering face and neck." },
      { name: "Microneedling with Exosomes", duration: "60 mins", price: "From £200", description: "Advanced microneedling with regenerative exosomes." },
      { name: "Facial PRP", duration: "60 mins", price: "From £150", description: "Platelet-rich plasma facial rejuvenation." },
      { name: "Course of 3 Sessions for Facial PRP", duration: "3 sessions", price: "From £420", description: "Course of 3 facial PRP sessions." },
      { name: "Course of 5 Sessions for Facial PRP", duration: "5 sessions", price: "From £650", description: "Course of 5 facial PRP sessions." },
      { name: "Under-Eye Rejuvenation", duration: "45 mins", price: "From £150", description: "Targeted rejuvenation treatment for under-eye care." },
      { name: "PDO Thread Lift (Full Face)", duration: "90 mins", price: "From £1,200", description: "Full face PDO thread lift treatment." },
    ],
  },
  {
    id: "service-aesthetics",
    slug: "aesthetics-injectables",
    title: "Aesthetics / Injectables",
    category: "Aesthetics / Injectables",
    bookingType: "clinical",
    shortDesc: "Aesthetics and injectable treatments including anti-wrinkle injections, dermal fillers, PRP therapy, skin boosters, fat dissolving, PDO threads, IM injections, and IV drips.",
    fullDesc: "Aesthetics and injectable treatments delivered in a clinical setting in Hounslow. Our full master menu includes PRP Therapy, Anti-Wrinkle Injections, Dermal Fillers, Skin Boosters & Rejuvenation, Fat Dissolving, PDO Threads, IM Injections, and IV Drips.",
    image: "/images/services/training-academy.jpg",
    startingPrice: "From £35",
    treatments: [
      // 1. PRP Therapy
      { name: "Facial PRP", duration: "60 mins", price: "From £150", description: "Platelet-rich plasma treatment for facial rejuvenation." },
      { name: "Hair PRP", duration: "60 mins", price: "From £150", description: "Platelet-rich plasma treatment for scalp and hair support." },
      { name: "O-Shot® Intimate Rejuvenation", duration: "60 mins", price: "From £300", description: "Specialised PRP intimate wellness treatment." },
      { name: "Joint PRP", duration: "60 mins", price: "From £300", description: "Targeted platelet-rich plasma joint session." },
      { name: "Course of 3 Sessions for Facial PRP", duration: "3 sessions", price: "From £420", description: "Comprehensive 3-session course for facial PRP." },
      { name: "Course of 5 Sessions for Facial PRP", duration: "5 sessions", price: "From £650", description: "Comprehensive 5-session course for facial PRP." },
      { name: "Course of 3 Sessions for Hair PRP", duration: "3 sessions", price: "From £420", description: "Comprehensive 3-session course for hair PRP." },
      { name: "Course of 5 Sessions for Hair PRP", duration: "5 sessions", price: "From £650", description: "Comprehensive 5-session course for hair PRP." },

      // 2. Anti-Wrinkle Injections
      { name: "Smokers Line", duration: "30 mins", price: "From £150", description: "Targeted anti-wrinkle smoothing around the lip area." },
      { name: "Periorbital Area (Eyes)", duration: "30 mins", price: "From £200", description: "Anti-wrinkle smoothing for fine lines around the eye area." },
      { name: "Bunny Lines", duration: "30 mins", price: "From £200", description: "Targeted treatment for expression lines across the nose." },
      { name: "Bruxism (Teeth Grinding / Masseter Reduction)", duration: "30 mins", price: "From £200", description: "Masseter muscle relaxation for jaw slimming and teeth grinding relief." },
      { name: "Jawline Contouring", duration: "30 mins", price: "From £200", description: "Precision anti-wrinkle contouring along the jawline." },
      { name: "Nefertiti Neck Lift", duration: "30-45 mins", price: "From £300", description: "Targeted neck and lower jawline muscle treatment." },
      { name: "Full Face Mini Botox", duration: "45 mins", price: "From £500", description: "Full face micro-droplet smoothing and rejuvenation." },
      { name: "Excessive Sweating / Hyperhidrosis Treatment", duration: "45 mins", description: "Specialised clinical anti-sweating treatment. Subject to consultation." },

      // 3. Dermal Filler Treatments
      { name: "Chin Fillers", duration: "45 mins", price: "From £150", description: "Chin contouring and profile balancing." },
      { name: "Nose Fillers", duration: "45 mins", price: "From £200", description: "Non-surgical rhinoplasty filler contouring." },
      { name: "Lip Fillers", duration: "45 mins", price: "From £200", description: "Dermal filler for lip shape, volume and definition." },
      { name: "Hand Fillers", duration: "45 mins", price: "From £200", description: "Dermal filler to restore lost volume in hands." },
      { name: "Lip Enhancement", duration: "45 mins", price: "From £200", description: "Subtle lip hydration, border definition and enhancement." },
      { name: "Nasolabial Folds", duration: "45 mins", price: "From £200", description: "Dermal filler for smoothing nasolabial smile lines." },
      { name: "Cheek Augmentation", duration: "45-60 mins", price: "From £200", description: "Cheekbone definition and midface enhancement." },
      { name: "Nose Augmentation 0.5ml", duration: "45 mins", price: "From £200", description: "Targeted 0.5ml dermal filler for nasal contouring." },
      { name: "Nasolabial 1–2ml", duration: "45 mins", price: "From £250", description: "Comprehensive 1–2ml filler for deeper smile lines." },
      { name: "Profhilo 2–4ml", duration: "45 mins", price: "From £399", description: "Hyaluronic acid bio-remodelling for skin firmness and elasticity." },

      // 4. Skin Boosters & Rejuvenation
      { name: "Skin Boosters", duration: "45 mins", price: "From £150", description: "Deep hydration and skin conditioning treatment." },
      { name: "Polynucleotide Therapy", duration: "45 mins", price: "From £200", description: "Biostimulator treatment for under-eye and skin quality." },
      { name: "PDO Thread Lift (Full Face)", duration: "90 mins", price: "From £1,200", description: "Full face PDO thread lift treatment." },
      { name: "Microneedling – Full Face", duration: "60 mins", price: "From £150", description: "Full face collagen induction therapy." },
      { name: "Microneedling – Full Face & Neck", duration: "75 mins", price: "From £200", description: "Collagen induction covering face and neck." },
      { name: "Microneedling with Exosomes", duration: "60 mins", price: "From £200", description: "Microneedling combined with regenerative exosomes." },
      { name: "Under-Eye Rejuvenation", duration: "30-45 mins", price: "From £150", description: "Targeted treatment for the delicate under-eye area." },

      // 5. Fat Dissolving & Body Contouring
      { name: "Small Areas", duration: "30-45 mins", price: "From £100", description: "Targeted fat dissolving (e.g. chin / submental)." },
      { name: "Large Areas", duration: "45-60 mins", price: "From £150", description: "Fat dissolving for larger body areas (e.g. stomach, flanks, thighs)." },
      { name: "Ultrasound Cavitation", duration: "45 mins", price: "From £80", description: "Non-invasive ultrasound cavitation body contouring." },
      { name: "Ultrasound Cavitation x2 Areas", duration: "60 mins", price: "From £120", description: "Ultrasound cavitation covering two targeted body areas." },

      // 6. IM Injections (Intramuscular Injections)
      { name: "Vitamin B12", duration: "15 mins", price: "From £35", description: "Intramuscular Vitamin B12 booster injection." },
      { name: "Vitamin C", duration: "15 mins", price: "From £35", description: "Intramuscular Vitamin C booster injection." },
      { name: "Biotin (Hair, Skin and Nails)", duration: "15 mins", price: "From £35", description: "Intramuscular Biotin booster for hair, skin, and nails." },
      { name: "Fat Burner / L-Carnitine", duration: "15 mins", price: "From £40", description: "Intramuscular metabolic support injection." },
      { name: "Vitamin D Injection", duration: "15 mins", price: "From £40", description: "Intramuscular Vitamin D booster injection." },

      // 7. IV Drips (Intravenous Nutrient Therapy)
      { name: "Hydration Drip", duration: "45-60 mins", price: "From £100", description: "Electrolyte and fluid replenishment IV infusion. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Magnesium Drip", duration: "45-60 mins", price: "From £150", description: "Magnesium infusion for muscle relaxation and recovery. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Immunity Detox", duration: "45-60 mins", price: "From £150", description: "Nutrient blend to support immune function. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Vitamin C (IV Base)", duration: "45-60 mins", price: "From £150", description: "High-dose Vitamin C intravenous infusion. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Glutathione Drip", duration: "45-60 mins", price: "From £160", description: "Glutathione antioxidant intravenous infusion. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Multivitamin Drip", duration: "45-60 mins", price: "From £180", description: "Comprehensive vitamin and nutrient intravenous blend. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Brightening Drip", duration: "45-60 mins", price: "From £180", description: "Antioxidant nutrient blend for skin radiance. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Anti-ageing Drip", duration: "45-60 mins", price: "From £200", description: "Targeted antioxidant infusion supporting cellular health. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Iron Drip", duration: "45-60 mins", price: "From £200", description: "Intravenous iron support infusion. Subject to consultation, medical assessment and clinical suitability." },
      { name: "Weight Loss Drip", duration: "45-60 mins", price: "From £200", description: "Metabolic support nutrient infusion. Subject to consultation, medical assessment and clinical suitability." },
      { name: "NAD IV Drip", duration: "60-90 mins", price: "From £400", description: "Cellular vitality and NAD+ infusion. Subject to consultation, medical assessment and clinical suitability." },

      // Consultation
      { name: "Free Aesthetics Consultation", duration: "20 mins", price: "Free", description: "Personalised treatment consultation and facial assessment." },
    ],
  },
  {
    id: "service-hair",
    slug: "hair",
    title: "Hair",
    category: "Hair",
    bookingType: "salon",
    shortDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results.",
    fullDesc: "Our experienced hair professionals provide a full range of cutting, colouring, styling, and hair care services tailored to your individual look and lifestyle. Using high-quality products and the latest techniques, we create beautiful, healthy, and manageable results. Whether you're looking for a fresh new style, colour transformation, or routine maintenance, our team is dedicated to helping you look and feel your best.",
    image: "/images/services/hair-styling.webp",
    startingPrice: "From £35",
    treatments: [
      { name: "Cut, Wash & Blowdry", duration: "45-60 mins", price: "Starting from £35", description: "Precision haircut with nourishing wash and signature blowout." },
      { name: "Balayage & Full Highlights", duration: "2-3 hrs", price: "Price on consultation", description: "Custom hand-painted colour blend or full multidimensional foils." },
      { name: "Hair Colouring & Gloss", duration: "60-90 mins", price: "Starting from £50", description: "Root tint, global colour or high-shine tonal glaze." },
      { name: "Keratin Hair Smoothing Treatment", duration: "2-3 hrs", price: "Price on consultation", description: "Frizz-eliminating smoothing treatment for silky, manageable hair." },
      { name: "Kérastase Fusio-Dose Bespoke Ritual", duration: "20-30 mins", price: "Price on consultation", description: "Instant in-salon hair transformation tailored to your hair fibre." },
    ],
  },
  {
    id: "service-beauty",
    slug: "beauty-makeup",
    title: "Beauty & Makeup",
    category: "Beauty & Makeup",
    bookingType: "salon",
    shortDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, makeup artistry, threading, and waxing treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs.",
    fullDesc: "Our VTCT-certified beauty therapists have over 10 years of industry experience, providing professional skincare, makeup artistry, threading, and waxing treatments. Using advanced techniques and premium products, we create personalised experiences tailored to your individual needs. Our goal is to enhance your natural beauty while helping you feel confident, refreshed, and radiant.",
    image: "/images/services/beauty-makeup.jpg",
    startingPrice: "From £10",
    treatments: [
      { name: "Eyebrow Threading & Tinting", duration: "15-30 mins", price: "Starting from £10", description: "Expert brow shaping and long-lasting tinting." },
      { name: "Waxing Services (Full Body / Targeted)", duration: "15-45 mins", price: "Starting from £15", description: "Smooth, gentle waxing using premium warm/hot wax." },
      { name: "Party & Special Occasion Makeup", duration: "45-60 mins", price: "Price on consultation", description: "Flawless glam makeup application tailored to your event." },
      { name: "Bridal Makeup Artistry", duration: "60-90 mins", price: "Price on consultation", description: "Signature bridal artistry with high-end luxury cosmetics." },
    ],
  },
  {
    id: "service-wellness",
    slug: "body-wellness",
    title: "Body & Wellness",
    category: "Body & Wellness",
    bookingType: "salon",
    shortDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence.",
    fullDesc: "Our body and wellness specialists combine expert care with advanced treatments to support your overall wellbeing. Using modern techniques and a personalised approach, we help you achieve your beauty and wellness goals while promoting relaxation, rejuvenation, and self-confidence. From body contouring to restorative therapies, our treatments are designed to enhance balance, vitality, and long-term wellbeing.",
    image: "/images/services/body-wellness.jpg",
    startingPrice: "From £80",
    treatments: [
      { name: "Fat Dissolving — Small Area", duration: "30-45 mins", price: "From £100", description: "Targeted fat dissolving treatment for small areas (e.g. chin / submental)." },
      { name: "Fat Dissolving — Large Area", duration: "45-60 mins", price: "From £150", description: "Fat dissolving treatment for larger body areas (e.g. stomach, flanks, thighs)." },
      { name: "Ultrasound Cavitation", duration: "45 mins", price: "From £80", description: "Non-invasive ultrasound cavitation for body contouring and fat reduction." },
      { name: "Ultrasound Cavitation — 2 Areas", duration: "60 mins", price: "From £120", description: "Targeted ultrasound cavitation body contouring across two areas." },
      { name: "Body Contouring & Tightening", duration: "60 mins", price: "Price on consultation", description: "Non-invasive body sculpting and skin firming sessions." },
      { name: "Relaxation & Therapeutic Body Care", duration: "45-60 mins", price: "Price on consultation", description: "Stress-relieving therapeutic massage and tension release." },
      { name: "Rejuvenating Body Rituals", duration: "60 mins", price: "Price on consultation", description: "Full body exfoliation and nourishing deep moisture wraps." },
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
    title: "Advanced Treatment Technology",
    description: "We invest in advanced treatment technology, including Lynton and Radio Frequency equipment, to support high-quality professional treatments.",
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
  { name: "SkinCeuticals", logo: "/images/brands/skinceuticals.png", subtitle: "" },
  { name: "Olaplex", logo: "/images/brands/olaplex.png", subtitle: "Hair Repair" },
  { name: "L'Oréal", logo: "/images/brands/loreal.png", subtitle: "Hair Colour & Care" },
];

export const GALLERY_ITEMS = [
  { id: "gal-1", image: "/images/gallery/gallery-1.jpg", title: "Salon Styling", category: "Hair" },
  { id: "gal-2", image: "/images/gallery/gallery-2.jpg", title: "Treatment Room", category: "Aesthetics" },
  { id: "gal-3", image: "/images/gallery/gallery-3.jpg", title: "Salon Care", category: "Beauty" },
  { id: "gal-4", image: "/images/gallery/gallery-4.jpg", title: "Hair Services", category: "Hair" },
  { id: "gal-5", image: "/images/services/training-academy.jpg", title: "Aesthetics Care", category: "Aesthetics" },
  { id: "gal-6", image: "/images/gallery/gallery-6.webp", title: "Private Salon Area", category: "Salon" },
];

// Exact FAQs from client reference screenshot & verified salon details
export const FAQS = [
  {
    question: "Do you have parking?",
    answer: "Customers can utilise the parking spaces offered at both the Blenheim Center and Treaty Center.",
  },
  {
    question: "Can I bring my kid/baby/stroller?",
    answer: "Feel free to bring your children, but please ensure they are under supervision.",
  },
  {
    question: "How far in advance do you guys book up?",
    answer: "You have the option to schedule bookings as early as two months in advance.",
  },
  {
    question: "How early should I arrive for my appointment?",
    answer: "Please arrive about 5 minutes prior to your scheduled appointment time.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major debit and credit cards, contactless payments, and cash in-salon.",
  },
  {
    question: "Can we put tips on a credit card?",
    answer: "Tips cannot be added to credit card transactions.",
  },
  {
    question: "Do you charge a deposit for appointments?",
    answer: "For appointments surpassing £75, a deposit will be applicable.",
  },
  {
    question: "Is Glam & Go a Hijab-Friendly salon?",
    answer: "Yes. We offer private, respectful salon spaces ensuring complete comfort and privacy for our clients during their treatments.",
  },
  {
    question: "Do you offer Laser Hair Removal?",
    answer: "Yes. We provide medical-grade laser hair removal for all areas. A patch test and consultation are completed before your course.",
  },
  {
    question: "Do you accept walk-in appointments?",
    answer: "Yes, walk-ins are accepted based on specialist availability. However, to guarantee your preferred time slot and stylist or aesthetician, we recommend booking in advance via Fresha or by calling the salon.",
  },
  {
    question: "Where can I find Glam & Go Training Academy courses?",
    answer: "Our Training Academy has its own dedicated website. Please visit https://glamandgoacademy.com/ or click 'Academy' in our navigation to view course information and enrol.",
  },
];

// Verified Master Treatment Packages & Courses
export const TREATMENT_PACKAGES: PackageItem[] = [
  // 1. PRP Therapy
  {
    id: "pkg-prp-face-3",
    title: "Facial PRP Course",
    category: "PRP Therapy",
    singlePrice: "£150",
    courseSessions: "3 sessions",
    coursePrice: "£420",
    saving: "Save £30",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Course of 3 platelet-rich plasma facial rejuvenation treatments.",
  },
  {
    id: "pkg-prp-face-5",
    title: "Facial PRP Intensive Course",
    category: "PRP Therapy",
    singlePrice: "£150",
    courseSessions: "5 sessions",
    coursePrice: "£650",
    saving: "Save £100",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Complete course of 5 facial PRP treatments for long-lasting collagen stimulation.",
  },
  {
    id: "pkg-prp-hair-3",
    title: "Hair PRP Course",
    category: "PRP Therapy",
    singlePrice: "£150",
    courseSessions: "3 sessions",
    coursePrice: "£420",
    saving: "Save £30",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Course of 3 scalp platelet-rich plasma treatments for hair density support.",
  },
  {
    id: "pkg-prp-hair-5",
    title: "Hair PRP Intensive Course",
    category: "PRP Therapy",
    singlePrice: "£150",
    courseSessions: "5 sessions",
    coursePrice: "£650",
    saving: "Save £100",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Comprehensive course of 5 hair PRP treatments.",
  },

  // 2. Microneedling Packages
  {
    id: "pkg-micro-face-3",
    title: "Full Face Microneedling",
    category: "Microneedling",
    singlePrice: "£150",
    courseSessions: "3 sessions",
    coursePrice: "£405",
    saving: "Save £45",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Collagen induction therapy covering the entire face.",
  },
  {
    id: "pkg-micro-neck-3",
    title: "Face & Neck Microneedling",
    category: "Microneedling",
    singlePrice: "£200",
    courseSessions: "3 sessions",
    coursePrice: "£540",
    saving: "Save £60",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Comprehensive collagen induction therapy covering face and neck.",
  },

  // 3. Chemical Peels / SkinCeuticals
  {
    id: "pkg-peel-gel-3",
    title: "SkinCeuticals Gel Peel Course (3)",
    category: "Chemical Peels",
    singlePrice: "£90",
    courseSessions: "3 sessions",
    coursePrice: "£270",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Course of 3 SkinCeuticals gel peel treatments.",
  },
  {
    id: "pkg-peel-gel-6",
    title: "SkinCeuticals Gel Peel Course (6)",
    category: "Chemical Peels",
    singlePrice: "£90",
    courseSessions: "6 sessions",
    coursePrice: "£510",
    saving: "Save £30",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Intensive 6-session professional peel series for radiant skin texture.",
  },
  {
    id: "pkg-peel-gly20-3",
    title: "20% Glycolic Peel Course",
    category: "Chemical Peels",
    singlePrice: "£120",
    courseSessions: "3 sessions",
    coursePrice: "£325",
    saving: "Save £35",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Targeted 3-session glycolic peel course for skin renewal.",
  },
  {
    id: "pkg-peel-gly30-3",
    title: "30% Glycolic Peel Course",
    category: "Chemical Peels",
    singlePrice: "£130",
    courseSessions: "3 sessions",
    coursePrice: "£350",
    saving: "Save £40",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Advanced 3-session resurfacing peel course.",
  },

  // 4. Radiofrequency Facial
  {
    id: "pkg-rf-face-5",
    title: "Radiofrequency Facial Course",
    category: "Advanced Facials",
    singlePrice: "£100",
    courseSessions: "5 sessions",
    coursePrice: "£400",
    saving: "Save £100",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "5-session course of radiofrequency skin tightening.",
  },

  // 5. IV Therapy Packages
  {
    id: "pkg-iv-hyd-3",
    title: "Hydration IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£100",
    courseSessions: "3 sessions",
    coursePrice: "£270",
    saving: "Save £30",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Electrolyte replenishment. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-hyd-5",
    title: "Hydration IV Drip (5)",
    category: "IV Therapy",
    singlePrice: "£100",
    courseSessions: "5 sessions",
    coursePrice: "£425",
    saving: "Save £75",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Electrolyte replenishment. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-vitc-3",
    title: "Vitamin C IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£150",
    courseSessions: "3 sessions",
    coursePrice: "£405",
    saving: "Save £45",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Vitamin C infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-vitc-5",
    title: "Vitamin C IV Drip (5)",
    category: "IV Therapy",
    singlePrice: "£150",
    courseSessions: "5 sessions",
    coursePrice: "£640",
    saving: "Save £110",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Vitamin C infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-mag-3",
    title: "Magnesium IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£150",
    courseSessions: "3 sessions",
    coursePrice: "£405",
    saving: "Save £45",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Magnesium infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-mag-5",
    title: "Magnesium IV Drip (5)",
    category: "IV Therapy",
    singlePrice: "£150",
    courseSessions: "5 sessions",
    coursePrice: "£640",
    saving: "Save £110",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Magnesium infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-glut-3",
    title: "Glutathione IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£160",
    courseSessions: "3 sessions",
    coursePrice: "£430",
    saving: "Save £50",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Glutathione infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-glut-5",
    title: "Glutathione IV Drip (5)",
    category: "IV Therapy",
    singlePrice: "£160",
    courseSessions: "5 sessions",
    coursePrice: "£680",
    saving: "Save £120",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Glutathione infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-multi-3",
    title: "Multivitamin IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£180",
    courseSessions: "3 sessions",
    coursePrice: "£485",
    saving: "Save £55",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Comprehensive multivitamin infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-multi-5",
    title: "Multivitamin IV Drip (5)",
    category: "IV Therapy",
    singlePrice: "£180",
    courseSessions: "5 sessions",
    coursePrice: "£765",
    saving: "Save £135",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Comprehensive multivitamin infusion. Subject to consultation and clinical suitability.",
  },
  {
    id: "pkg-iv-nad-3",
    title: "NAD IV Drip (3)",
    category: "IV Therapy",
    singlePrice: "£400",
    courseSessions: "3 sessions",
    coursePrice: "£1,080",
    saving: "Save £120",
    freshaUrl: BOOKING_LINKS.salonFresha,
    description: "Cellular vitality NAD+ infusion. Subject to consultation and clinical suitability.",
  },
];

