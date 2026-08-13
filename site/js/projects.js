/**
 * Featured portfolio projects — keep in sync with content_context.md
 */
const PORTFOLIO_PROJECTS = [
  {
    id: 'bathroom-busters',
    name: 'Bathroom Busters',
    label: 'live',
    labelText: 'Live product',
    featured: true,
    lockHero: true,
    image: 'assets/images/projects/bathroom-busters/macbook-mockup.png',
    gallery: [
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Main.jpg',
        alt: 'Bathroom Busters landing'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Home.jpg',
        alt: 'Bathroom Busters homepage'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Map.jpg',
        alt: 'Nearby map'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Leaderboard.jpg',
        alt: 'Leaderboard'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Submit.jpg',
        alt: 'Submit a location'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Rate.jpg',
        alt: 'Rate a location'
      },
      {
        src: 'assets/images/projects/bathroom-busters/mobile/BB-Admin.jpg',
        alt: 'Admin panel'
      }
    ],
    claim:
      '756 locations. Community-powered. Built from concept to production. Solo founder — product planning, UX, full-stack development, admin moderation, and live deployment on DigitalOcean.',
    pitch:
      'A public washroom finder designed for travellers, families, truckers, seniors, and people with medical needs. Users can quickly find nearby washrooms while businesses can participate, update information, and engage with the community. Built solo from concept to production — 756 approved locations, interactive map search, contributor tools, and a full admin moderation dashboard.',
    visitorsTitle: 'What visitors see',
    ownerTitle: 'What business owners run',
    visitorsItems: [
      'Find nearby washrooms quickly',
      'Community-submitted locations',
      'Reviews and location details',
      'Mobile-friendly app experience',
      'Accessibility and amenity information'
    ],
    ownerItems: [
      'Business profile management',
      'Location updates and corrections',
      'Community engagement tools',
      'Reports and moderation workflow',
      'Owner participation features'
    ],
    links: [{ text: 'Visit site', url: 'https://bathroombusters.app', primary: true }],
    tags: [
      'Node.js',
      'SQLite',
      'Docker',
      'PWA',
      'REST APIs',
      'Admin dashboard',
      'DigitalOcean',
      'Caddy'
    ]
  },
  {
    id: 'alderleaf',
    name: 'Alderleaf.ca',
    label: 'demo',
    labelText: 'Demo · redesign',
    image: 'assets/images/projects/alderleaf.png',
    claim: [
      'Land and tree services for Haida Gwaii — full multi-page redesign from the existing site, rebuilt page by page for home, services, gallery, about, quote, contact, and reviews.',
      'Hero and page banners were compositionally framed and sized from mismatched source photos so the hero subject — crew, equipment, and landscape — stays sharp and intentional across breakpoints. Service detail popups, a gallery lightbox, and review modals keep the experience interactive without leaving the page.',
      'Built with plain HTML, Tailwind CSS, custom CSS, and light JavaScript. A polished, mobile-ready site that’s easy to maintain and host.'
    ],
    pitch:
      'Concept redesign for Alderleaf Land and Tree Services — family-owned arborist business on Haida Gwaii. Rebuilt as a multi-page site (home, services, gallery, about, quote, contact, reviews) in plain HTML with Tailwind CSS (CDN) and custom CSS. Hero and page banners were compositionally framed and sized from mismatched source photos so the hero subject — crew, equipment, and landscape — stays sharp on desktop and mobile. Interactive pieces include service detail modals (with deep links), a gallery lightbox, and a reviews popup on the homepage and reviews page — all in vanilla JavaScript.',
    visitors: 'Home, services, gallery, about, quote, and contact — clear CTAs, photo-led browsing, and mobile-friendly popups.',
    owner: 'Static pages that are easy to edit and host, with reusable modal and lightbox patterns.',
    links: [
      { text: 'View demo', url: 'https://gisele66.github.io/Alderleaf-v3/', primary: true },
      { text: 'Alderleaf.ca', url: 'https://alderleaf.ca/' }
    ],
    tags: [
      'HTML/CSS',
      'Tailwind',
      'JavaScript',
      'Responsive',
      'Multi-page',
      'GitHub Pages',
      'Custom CSS',
      'Lightbox & modals',
      'No build step'
    ]
  },
  {
    id: 'community-census',
    name: 'Community Census',
    label: 'demo-systems',
    labelText: 'Demo · systems build',
    home: false,
    image: 'assets/images/projects/community-census.png',
    claim: 'Six-step census. Privacy-first. Band-customizable.',
    pitch:
      'Confidential self-reported population survey for Indigenous communities — culturally respectful identity fields, six-step guided workflow, and band-customizable branding.',
    visitors:
      'Six-step confidential survey with fields for traditional names, Two-Spirit identity, clan, and band membership.',
    owner: 'Structured data workflow — consent, review, and privacy-first trust UX throughout.',
    links: [{ text: 'View demo', url: 'https://launch.sw7ft.com/community-census/', primary: true }],
    tags: ['Privacy UX', 'Governance', 'PHP']
  },
  {
    id: 'journal',
    name: 'Journal',
    label: 'live',
    labelText: 'Live product',
    home: false,
    image: 'assets/images/projects/journal.png',
    claim: 'Calendar, tasks, and demo hub. One operational workspace.',
    pitch:
      'Private work platform integrated with Jarvis — monthly calendar, status-tracked tasks, client demo cards, and document tabs in a single dashboard.',
    visitors: 'N/A — private work platform.',
    owner: 'Monthly calendar, task tracking, client demo cards, and document tabs in one workspace.',
    links: [{ text: 'View platform', url: 'https://launch.sw7ft.com/journal/', primary: true }],
    tags: ['PHP', 'Calendar', 'Workflow hub']
  },
  {
    id: 'dunrite-dave',
    name: 'Dunrite Dave',
    label: 'demo',
    labelText: 'Demo · redesign',
    home: false,
    image: 'assets/images/projects/dunrite-dave.png',
    claim: 'Two demo builds. Before/after. Static + PHP.',
    pitch:
      'Moving and delivery company redesign — before/after comparison with two separate demo builds: a static GitHub Pages version and a Jarvis PHP version.',
    visitors: 'Service pages, trust messaging, and streamlined quote/booking flow.',
    owner: 'Demo only — booking UX ready for client adoption.',
    links: [
      { text: 'View demo', url: 'https://launch.sw7ft.com/dunritedave/', primary: true },
      {
        text: 'GitHub Pages mockup',
        url: 'https://gisele66.github.io/dunrite-dave-mockup-1/'
      }
    ],
    tags: ['HTML/CSS/JS', 'UX redesign', 'Mobile']
  },
  {
    id: 'wedding-planner',
    name: 'Wedding Planner',
    label: 'demo-systems',
    labelText: 'Demo · systems build',
    home: false,
    image: 'assets/images/projects/wedding-planner.png',
    claim: 'Checklist, budget, guests, timeline, and vendors — one planning workspace.',
    pitch:
      'Wedding planning demo with a pre-loaded sample wedding — checklist, budget tracker, guest list, day-of timeline, and vendor contacts. Edits save in the browser for easy exploration.',
    visitors: 'Progress dashboard and five planning tools with realistic sample data for Summer & Chris.',
    owner: 'Checklist, budget, guest list, day-of timeline, and vendor tracker — reset to demo anytime.',
    links: [{ text: 'View demo', url: 'https://launch.sw7ft.com/wedding-planner/', primary: true }],
    tags: ['PHP', 'Planning tools', 'Demo']
  },
  {
    id: 'skidegate-slice',
    name: 'Skidegate Slice',
    label: 'demo-systems',
    labelText: 'Demo · systems build',
    home: false,
    image: 'assets/images/projects/skidegate-slice.png',
    claim: 'Ordering site + inventory tracker. Built from a street photo.',
    pitch:
      'Pizza restaurant demo system built from a single Facebook sandwich-board photo — public ordering site plus an admin ingredient tracker that syncs stock status to the customer menu.',
    visitors: 'Public menu, mobile ordering flow, and category navigation.',
    owner: "Ingredient tracker — on-hand levels, 86'd flags, specials synced to the menu.",
    links: [{ text: 'View demo', url: 'https://launch.sw7ft.com/skidegate-slice/', primary: true }],
    tags: ['PHP', 'Inventory', 'Admin panel']
  }
];

const CONCEPT_DISCLAIMER =
  'Concept projects and demos were created independently to demonstrate design and development skills. They were not commissioned by, affiliated with, or endorsed by the businesses shown unless noted.';
