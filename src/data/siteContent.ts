export interface TreatmentItem {
  name: string;
  duration?: string;
  price?: string;
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
  salonFresha: "https://www.fresha.com/a/glam-go-hounslow-hounslow-unit-21-treaty-centre-high-st-zkawcm12/all-offer?menu=true&share=true&pId=2710857",
  clinicalPhorest: "https://www.phorest.com/salon/glamourhairbeautytheglamclinic",
  laserBooking: "https://www.fresha.com/a/glam-go-hounslow-hounslow-unit-21-treaty-centre-high-st-zkawcm12/all-offer?menu=true&share=true&pId=2710857",
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
    primaryCta: { label: "Laser Hair Removal", href: "/laser-hair-removal" },
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
    shortDesc: "Facial and skin rejuvenation treatments at Glam & Go Hounslow, including SkinCeuticals professional peels and radiofrequency treatments.",
    fullDesc: "Facial and skin rejuvenation treatments at Glam & Go Hounslow, including SkinCeuticals professional peels and radiofrequency treatments tailored to your skin concerns.",
    image: "/images/services/facials.jpg",
    startingPrice: "From £90",
    treatments: [
      { name: "SkinCeuticals Gel Peel", duration: "45 mins", price: "£90", description: "Professional gel peel treatment targeting dull skin and tone." },
      { name: "20% Glycolic Peel", duration: "45 mins", price: "£120", description: "Targeted skin peel for texture and renewal." },
      { name: "30% Glycolic Peel", duration: "45 mins", price: "£130", description: "Exfoliation peel for skin renewal and radiance." },
      { name: "Radiofrequency Facial", duration: "45-60 mins", price: "£100", description: "Radiofrequency facial treatment for skin firming." },
      { name: "Radiofrequency Facial (Course of 5)", duration: "5 sessions", price: "£400", description: "Course of 5 radiofrequency sessions." },
      { name: "Professional Skincare & Custom Facial", duration: "45-60 mins", description: "Facial treatment tailored to your skin type and hydration needs." },
    ],
  },
  {
    id: "service-skin-treatments",
    slug: "skin-treatments",
    title: "Skin Treatments",
    category: "Skin Treatments",
    bookingType: "clinical",
    shortDesc: "Rejuvenation and skin treatments including Skin Boosters, Polynucleotides, Profhilo, Microneedling, PRP therapy, and PDO thread lifts.",
    fullDesc: "Rejuvenation and skin treatments including Skin Boosters, Polynucleotides, Profhilo, Microneedling, PRP therapy, and PDO thread lifts delivered in our private treatment rooms.",
    image: "/images/services/skin-treatments.jpg",
    startingPrice: "From £150",
    treatments: [
      { name: "Skin Boosters", duration: "45 mins", price: "£150", description: "Skin hydration and radiance treatment." },
      { name: "Polynucleotides", duration: "45 mins", price: "£200", description: "Biostimulator therapy for under-eye and skin rejuvenation." },
      { name: "Profhilo", duration: "45 mins", price: "£399", description: "Hyaluronic acid bio-remodelling treatment for skin firmness." },
      { name: "Microneedling - Full Face", duration: "60 mins", price: "£150", description: "Full face microneedling treatment." },
      { name: "Microneedling - Face & Neck", duration: "75 mins", price: "£200", description: "Microneedling treatment covering face and neck." },
      { name: "PRP (Platelet-Rich Plasma) - Face or Hair", duration: "60 mins", price: "£150", description: "PRP therapy for facial rejuvenation or hair support." },
      { name: "PDO Thread Lift - Full Face", duration: "90 mins", price: "£1,200", description: "Full face PDO thread treatment." },
    ],
  },
  {
    id: "service-aesthetics",
    slug: "aesthetics-injectables",
    title: "Aesthetics / Injectables",
    category: "Aesthetics / Injectables",
    bookingType: "clinical",
    shortDesc: "Aesthetics and injectable treatments including anti-wrinkle injections, dermal fillers, skin boosters, PRP, fat dissolving, PDO threads, microneedling, and IV drips.",
    fullDesc: "Aesthetics and injectable treatments delivered in a clinical setting in Hounslow. Our menu includes Anti-Wrinkle Treatments, Dermal Fillers, Skin Boosters, PRP, Fat Dissolving Injections, PDO Threads, Microneedling & Mesotherapy, and IV Drips & Vitamin Therapy.",
    image: "/images/services/aesthetics.jpg",
    startingPrice: "Consultation & Prices Available",
    treatments: [
      // Anti-Wrinkle Treatments
      { name: "Anti-Wrinkle Injections - 1 Area", duration: "30 mins", description: "Targeted single area expression line treatment." },
      { name: "Anti-Wrinkle Injections - 2 Areas", duration: "30 mins", description: "Two areas treatment (e.g. forehead and frown lines)." },
      { name: "Anti-Wrinkle Injections - 3 Areas", duration: "30-45 mins", description: "Three areas treatment (e.g. forehead, frown lines, and crow's feet)." },
      { name: "Anti-Wrinkle Injections - Eye Area / Crow's Feet", duration: "30 mins", description: "Targeted treatment around the eye area." },
      { name: "Jawline / Masseter Botox (Jaw Slimming & Teeth Grinding)", duration: "30 mins", description: "Masseter muscle relaxation for jaw slimming and teeth grinding relief." },
      { name: "Nefertiti Neck Lift", duration: "30-45 mins", description: "Targeted neck and lower jawline muscle treatment." },
      { name: "Full-Face / Mini Botox Rejuvenation", duration: "45 mins", description: "Micro-droplet skin smoothing across the face." },
      // Dermal Fillers
      { name: "Lip Filler (1ml)", duration: "45 mins", price: "£150", description: "Dermal filler for lip shape, volume and definition." },
      { name: "Chin Filler", duration: "45 mins", price: "£150", description: "Chin contouring and profile balancing." },
      { name: "Hand Fillers", duration: "45 mins", price: "£200", description: "Dermal filler to restore lost volume in hands." },
      { name: "Nasolabial Folds Filler (Smile Lines)", duration: "45 mins", price: "£200", description: "Dermal filler for nasolabial fold lines." },
      { name: "Cheek Fillers", duration: "45-60 mins", price: "£300", description: "Cheek volume restoration and definition." },
      { name: "Jawline Filler", duration: "45-60 mins", description: "Contouring and definition along the jawline." },
      { name: "Marionette Lines Filler", duration: "45 mins", description: "Softening lines around the mouth and lower face." },
      // Skin Boosters
      { name: "Skin Boosters", duration: "45 mins", price: "£150", description: "Deep hydration and skin conditioning treatment." },
      { name: "Polynucleotides Rejuvenation", duration: "45 mins", price: "£200", description: "Biostimulator treatment for under-eye and skin quality." },
      { name: "Profhilo Bio-Remodelling", duration: "45 mins", price: "£399", description: "Hyaluronic acid bio-remodelling for skin laxity and firmness." },
      { name: "Seventy Hyal 2000", duration: "45 mins", description: "Intense hydration and skin booster treatment." },
      { name: "Lumi Eyes Under-Eye Booster", duration: "30-45 mins", description: "Targeted booster for the delicate under-eye area." },
      // PRP Therapy
      { name: "PRP - Face Rejuvenation", duration: "60 mins", price: "£150", description: "Platelet-rich plasma treatment for facial rejuvenation." },
      { name: "PRP - Hair Restoration", duration: "60 mins", price: "£150", description: "Platelet-rich plasma treatment for scalp and hair support." },
      { name: "PRP - Under-Eye Area", duration: "45 mins", description: "Platelet-rich plasma application for under-eye care." },
      { name: "PRP - Joint Therapy", duration: "60 mins", description: "Platelet-rich plasma targeted joint session." },
      { name: "PRP - O-Shot Therapy", duration: "60 mins", description: "Specialised PRP wellness treatment." },
      // Fat Dissolving
      { name: "Fat Dissolving Injections - Small Areas", duration: "30-45 mins", price: "£100", description: "Targeted fat dissolving (e.g. submental / chin)." },
      { name: "Fat Dissolving Injections - Large Areas", duration: "45-60 mins", price: "£150", description: "Fat dissolving for larger areas (e.g. abdomen, flanks, thighs)." },
      { name: "Fat Dissolving Course Packages", duration: "Course", description: "Multi-session courses tailored to treatment area." },
      // PDO Threads
      { name: "PDO Thread Lift - Full Face", duration: "90 mins", price: "£1,200", description: "Full face PDO thread lift treatment." },
      { name: "PDO Threads - Targeted Areas (Mid-Face / Jawline / Eyebrow)", duration: "60 mins", description: "Targeted PDO thread placement for specific facial contours." },
      // Microneedling & Mesotherapy
      { name: "Microneedling - Full Face", duration: "60 mins", price: "£150", description: "Full face microneedling treatment." },
      { name: "Microneedling - Face & Neck", duration: "75 mins", price: "£200", description: "Microneedling covering face and neck." },
      { name: "Microneedling with Mesotherapy Infusion", duration: "60 mins", description: "Microneedling combined with targeted meso-cocktails." },
      { name: "Mesotherapy Skin Rejuvenation", duration: "45 mins", description: "Direct nutrient and vitamin micro-injections for skin revitalisation." },
      // IV Drips & Vitamin Therapy
      { name: "Hydration IV Drip", duration: "45-60 mins", description: "Electrolyte and fluid replenishment." },
      { name: "Multivitamin IV Drip", duration: "45-60 mins", description: "Comprehensive vitamin and nutrient blend." },
      { name: "Vitamin C IV Drip", duration: "45-60 mins", description: "High-dose Vitamin C infusion." },
      { name: "Beauty & Glow IV Drip", duration: "45-60 mins", description: "Antioxidant and nutrient cocktail for skin radiance." },
      { name: "Anti-Ageing IV Drip", duration: "45-60 mins", description: "Antioxidant support blend." },
      { name: "Snow White IV Drip", duration: "45-60 mins", description: "Glutathione and antioxidant infusion." },
      { name: "NAD+ IV Infusion", duration: "60-90 mins", description: "Cellular wellness and vitality NAD+ infusion." },
      { name: "Vitamin B12 Booster Injection", duration: "15 mins", description: "Intramuscular Vitamin B12 injection." },
      { name: "Vitamin D3 Booster Injection", duration: "15 mins", description: "Intramuscular Vitamin D3 injection." },
      { name: "Free Aesthetics Consultation", duration: "20 mins", price: "Free", description: "Facial assessment and personalised treatment consultation." },
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
    startingPrice: "From £45",
    treatments: [
      { name: "Body Contouring & Tightening", duration: "60 mins", price: "Price on consultation", description: "Non-invasive body sculpting and skin firming sessions." },
      { name: "Relaxation & Therapeutic Body Care", duration: "45-60 mins", price: "Starting from £45", description: "Stress-relieving therapeutic massage and tension release." },
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

