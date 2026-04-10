// ============================================================
// WHATSAPP CONFIGURATION — Edit your number here
// ============================================================
export const WA_NUMBER = '2348022150574'

export const WA_MESSAGES = {
  hairstylist: "Hi, I'd like to speak with a hairstylist",
  community: 'Hi, I want to join your community',
  inquiry: "Hi, I'd like to make an inquiry",
  product: (name) => `Hi, I'm interested in the ${name}`,
  style: (name) => `Hi, I want this style (${name})`,
}

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`

// ============================================================
// LOGO
// ============================================================
export const LOGO_URL = 'https://i.imgur.com/dCTiJ47.png'

// ============================================================
// HERO SLIDES
// ============================================================
export const HERO_SLIDES = [
  {
    image: 'https://img-1.kwcdn.com/product/fancy/1b753f26-aab2-4595-991e-2d68f8973262.jpg?imageView2/2/w/800/q/70/format/avif',
    headline: 'The Olive Promise',
    subtext: 'In a market full of noise… real quality is rare. We source premium hair directly… so you get the same luxury without the inflated price.',
    cta: 'Shop Premium Hair',
    link: '#categories',
    isWhatsApp: false,
  },
  {
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bb5b3dcf3694ebbc50e93b3f37d43357.jpg?imageView2/2/w/800/q/70/format/avif',
    headline: 'Luxury Hair… Without the Celebrity Price Tag',
    subtext: 'That hair you've been eyeing online for crazy prices… You can get the same quality here… for way less. No middlemen… no inflated pricing… just smart sourcing.',
    cta: 'Explore Collections',
    link: '/',
    isWhatsApp: false,
  },
  {
    image: 'https://img-1.kwcdn.com/product/fancy/c168ed27-3fa3-4c20-b763-d3eb8779b15e.jpg?imageView2/2/w/800/q/70/format/avif',
    headline: 'Good Hair Shouldn't Drain Your Account',
    subtext: 'Get ₦10,000 OFF your first order above ₦50,000… Join our community for exclusive deals and early drops.',
    cta: 'Join & Save',
    link: waLink(WA_MESSAGES.community),
    isWhatsApp: true,
  },
]

// ============================================================
// TRUST MARQUEE
// ============================================================
export const TRUST_ITEMS = [
  '100% Pro-Grade Hair',
  'Single Donor Quality',
  'Full From Root To Tip',
  'Natural Color That Blends Easily',
  'No Tangling… No Drama',
  'Long-Lasting Luxury Wear',
  'Factory-Made Precision Units',
  'Soft… Full… Effortlessly Elegant',
  'Hair That Stays Timeless',
  'Comfortable All-Day Fit',
  'Premium Density… No Shortcuts',
]

// ============================================================
// PRODUCT CATEGORIES
// ============================================================
export const CATEGORIES = [
  {
    image: 'https://img-1.kwcdn.com/product/fancy/1b753f26-aab2-4595-991e-2d68f8973262.jpg?imageView2/2/w/800/q/70/format/avif',
    label: 'Best for sleek, rich girl looks',
    title: 'Luxury Bone Straight & Piano Units',
    description: 'Super double drawn piano pixie 5x5 units… clean finish… full volume from root to tip. Perfect if you want that "expensive but calm" look.',
    cta: 'Shop Bone Straight',
    link: '/',
  },
  {
    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bb5b3dcf3694ebbc50e93b3f37d43357.jpg?imageView2/2/w/800/q/70/format/avif',
    label: 'Best for soft glam and volume lovers',
    title: 'Curly & Bouncy Units',
    description: 'Chestnut curly… posh curls… Mongolian loose curls… Full 300g+ volume that gives you that soft, fluffy bounce.',
    cta: 'Shop Curly Collection',
    link: '/',
  },
  {
    image: 'https://img-1.kwcdn.com/product/fancy/c168ed27-3fa3-4c20-b763-d3eb8779b15e.jpg?imageView2/2/w/800/q/70/format/avif',
    label: 'Best for bold, defined looks',
    title: 'Luxury Deep Wave Collection',
    description: 'Loose deep wave units with serious volume… Available in 5x5 closure and frontal options… Perfect for that rich, dramatic finish.',
    cta: 'Shop Deep Wave',
    link: '/',
  },
  {
    image: 'https://img-1.kwcdn.com/product/fancy/7fd58192-f33e-4b1c-806a-8e8084ff6c89.jpg?imageView2/2/w/800/q/70/format/avif',
    label: 'Best for convenience and everyday wear',
    title: 'Glueless Ready-to-Wear Wigs',
    description: 'Pre-plucked… pre-cut… no stress install… Just wear and step out looking put together.',
    cta: 'Shop Glueless Wigs',
    link: '/',
  },
]

// ============================================================
// SHOP BY LENGTH
// ============================================================
export const LENGTHS = [
  { label: '14" – 20"', tagline: 'Short… classy… easy to maintain', sub: 'Perfect for everyday soft glam' },
  { label: '22" – 25"', tagline: 'Balanced length… not too short, not too long', sub: 'The sweet spot for most styles' },
  { label: '26" – 32"', tagline: 'Long… bold… statement hair', sub: 'For when you want all eyes on you' },
]

// ============================================================
// RECOMMENDATIONS
// ============================================================
export const RECOMMENDATIONS = [
  {
    name: 'Glueless Body Wave Bob (180% Density)',
    image: 'https://img-1.kwcdn.com/product/open/017869d1b0fd466dadbb6f31620dfd10-goods.jpeg?imageView2/2/w/800/q/70/format/avif',
    desc: 'Soft waves… clean cut… ready to wear',
    price: '₦78,000',
  },
  {
    name: 'Short Wavy Wig with Bangs',
    image: 'https://img-1.kwcdn.com/product/fancy/6ae1d3e0-ed8d-4484-94b5-4627753bbefa.jpg?imageView2/2/w/800/q/70/format/avif',
    desc: 'Playful… light… perfect for everyday styling',
    price: '₦42,000',
  },
  {
    name: '45" Straight 5x5 Glueless Wig',
    image: 'https://img.kwcdn.com/product/fancy/6a8ad262-e91f-4d51-ac86-1d53f2ea8f34.jpg?imageView2/2/w/800/q/70/format/avif',
    desc: 'Long… sleek… dramatic finish',
    price: '₦139,000',
  },
]

// ============================================================
// INFLUENCERS
// ============================================================
export const INFLUENCERS = [
  {
    name: 'INI EDO',
    image: 'https://img.kwcdn.com/product/fancy/61182944-7593-42e7-843d-bab5d74ce035.jpg?imageView2/2/w/800/q/70/format/avif',
    style: 'Luxury Deep Wave Wig',
    color: 'Natural Black',
  },
  {
    name: 'MERCY EKE',
    image: 'https://img.kwcdn.com/product/fancy/8508da51-6647-4247-9df0-9faac1cdad41.jpg?imageView2/2/w/800/q/70/format/avif',
    style: 'Bone Straight 5x5 Wig',
    color: 'Jet Black',
  },
  {
    name: 'TIWA SAVAGE',
    image: 'https://img.kwcdn.com/product/fancy/baa24e3a-e3a8-4371-8cd5-919b90f4022b.jpg?imageView2/2/w/1300/q/90/format/avif',
    style: 'Bouncy Curly Unit',
    color: 'Soft Natural Brown',
  },
]

// ============================================================
// FAQ
// ============================================================
export const FAQS = [
  {
    q: 'What types of hair do you sell?',
    a: 'We offer Bone Straight, Piano Units, Curly & Bouncy, Deep Wave, and Glueless Ready-to-Wear wigs — all single donor quality, full density from root to tip.',
  },
  {
    q: 'How do I place an order?',
    a: 'Simply tap any "Shop" button or the floating WhatsApp icon to chat with us directly. We'll guide you through sizing, lengths, and styles.',
  },
  {
    q: 'Do you offer customisation?',
    a: 'Yes. Text a hairstylist via WhatsApp and we'll advise based on your face shape, style preference, and budget — no guesswork.',
  },
  {
    q: 'What is your delivery time?',
    a: 'Orders are processed within 5 working days. We ship nationwide across Nigeria.',
  },
  {
    q: 'Can I get a discount on my first order?',
    a: 'Yes! Join our WhatsApp community and get ₦10,000 off your first order above ₦100,000. Offer is for community members only and cannot be combined with other discount codes.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns on unused, unaltered items within 7 days of delivery. Contact us via WhatsApp for return assistance.',
  },
]
