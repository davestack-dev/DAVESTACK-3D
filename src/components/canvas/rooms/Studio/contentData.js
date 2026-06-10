/**
 * Studio Content Data
 *
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 *
 * Platforms: 'youtube', 'blog', 'tiktok', 'x'
 */

export const PLATFORM_CONFIG = {
  youtube: {
    color: "#FF0000",
    accentColor: "#cc0000",
    icon: "▶",
    label: "YouTube",
    shape: "tv", // Wide CRT style
  },
  blog: {
    color: "#4A90D9",
    accentColor: "#2d6cb5",
    icon: "📝",
    label: "Blog",
    shape: "monitor", // Thin desktop monitor
  },
  x: {
    color: "#1DA1F2",
    accentColor: "#0f7abf",
    icon: "𝕏",
    label: "X / Twitter",
    shape: "monitor", // Thin desktop monitor
  },
  linkedin: {
    color: "#0A66C2",
    accentColor: "#084c91",
    icon: "in",
    label: "LinkedIn",
    shape: "monitor", // Thin desktop monitor
  },
  tiktok: {
    color: "#00F2EA",
    accentColor: "#FF0050",
    icon: "🎵",
    label: "TikTok",
    shape: "phone", // Vertical phone
  },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
  // ============ YouTube Videos ============
  {
    id: "yt-001",
    platform: "x",
    title: "4 Production Apps, 1 Year",
    description:
      "Built four production-ready apps this year: MovieVerse, DINOVA AI, Damien Photography, and Aerolink. React, Firebase, AWS Lambda, Bedrock, GSAP, and MERN across shipping projects. Portfolio: http://davestack.vercel.app • GitHub: http://github.com/Robotinic17",
    frontTexture: "/textures/studio/tvfront_filmikprojektdlamultiego.webp",
    paintedFrontTexture:
      "/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2032421947389177991?s=20",
    date: "2026-06-09",
    views: "18.4K",
    duration: "0:42",
  },
  {
    id: "yt-002",
    platform: "x",
    title: "Freelance Docs Before the Yes",
    description:
      "If you want foreign clients, don't wait until the last minute to build your paperwork. Have your contract, invoice, proposal template, and statement of work ready before the deal lands. That's how you stay calm when they say yes and keep the project moving.",
    frontTexture: "/textures/studio/tvfront_filmikedytowaniezdjec.webp",
    paintedFrontTexture:
      "/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017",
    date: "2026-04-27",
    views: "14.6K",
    duration: "0:36",
  },
  {
    id: "yt-003",
    platform: "x",
    title: "What Shipping DINOVA Taught Me",
    description:
      "After building an AI system that actually works, DINOVA taught me a few things: AI apps live or die on UX, prompt contracts beat clever prompts, reliability matters more than features, and infrastructure will humble you. The biggest lesson is simple: just ship.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2030550911374770442?s=20",
    date: "2026-03-08",
    views: "22.7K",
    duration: "0:58",
  },
  {
    id: "yt-004",
    platform: "x",
    title: "Day 1: Building In Public",
    description:
      "Day 1 of #BuildingInPublic. First impressions last longer, so I made myself visible and let the work speak. Built a Movie Web App to practice real-world frontend flow with a clean UI, smooth interactions, and a structure that actually scales.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2002048704564588697?s=20",
    date: "2025-12-19",
    views: "1.7K",
    duration: "2:12",
  },
  {
    id: "yt-005",
    platform: "x",
    title: "Day 2: Premium Portfolio Momentum",
    description:
      "Posting this because progress deserves to be seen. If you want a luxury, dark-theme portfolio with a premium feel, this homepage is built to deliver. The designer dropped a strong direction, development started immediately, and the homepage wrapped in under three days.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2003148595365838978?s=20",
    date: "2025-12-22",
    views: "112",
    duration: "0:31",
  },
  {
    id: "yt-006",
    platform: "x",
    title: "Day 3: About Me Page Live",
    description:
      "While everyone’s celebrating, I’m still coding. The About Me page is live with a dark theme, smooth stats, and a premium feel that matches the vision. The numbers don’t lie and the design speaks for itself.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2004944507352297815?s=20",
    date: "2025-12-27",
    views: "1.9K",
    duration: "0:08",
  },
  {
    id: "yt-007",
    platform: "x",
    title: "Day 4: Photographer Portfolio Live",
    description:
      "Festive period or not, the grind didn’t get the memo. Still building, still consistent. Following up on Day 2 and Day 3, the photographer portfolio page is live. Need one like this? DM and let’s collab.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/2006037071090065755?s=20",
    date: "2025-12-30",
    views: "864",
    duration: "0:24",
  },
  {
    id: "yt-008",
    platform: "x",
    title: "30 Days Challenge: Demo Portfolio",
    description:
      "Day 1 of my #30DaysChallenge. Starting with a demo portfolio website built in React to practice component structure, props, and styling. It’s not my real portfolio, but it shows how a modern dev portfolio can look.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/1972706415690260492?s=20",
    date: "2025-10-01",
    views: "2.1K",
    duration: "0:18",
  },

  // ============ Blog Posts ============
  {
    id: "blog-001",
    platform: "blog",
    title: "Double Site of the Day confirmed! 🏆🏆",
    description:
      "You've probably noticed I've been sharing a bunch of SOTD certificates on my stories lately. Yes, it's true—the YOUNG MULTI project officially scored a \"double\" and got recognized on the international stage...",
    frontTexture: "/textures/studio/monitorfront_postnafbdoublewinner.webp",
    paintedFrontTexture:
      "/textures/studio/monitorfront_postnafbdoublewinner_painted.webp",
    thumbnail: null,
    url: "https://www.facebook.com/tomasz.szmajda.58/posts/pfbid0TmvbFrc9ASYBQHpv3fcz5gM9WZrgrLMzZFbbtSFySmzQNickLRNh6ubu388D7hHXl?rdid=nWrKXJXR8EqibqvZ",
    date: "2026-01-08",
    readTime: "5 min",
  },
  {
    id: "blog-002",
    platform: "blog",
    title: "The Hand-Drawn Aesthetic",
    description: "How I achieved a sketch-like visual style using shaders.",
    thumbnail: null,
    url: "https://www.facebook.com/tomasz.szmajda.58",
    date: "2025-12-20",
    readTime: "8 min",
  },
  {
    id: "blog-003",
    platform: "blog",
    title: "Optimizing 3D for the Web",
    description: "Performance tips for smooth 60fps 3D experiences.",
    thumbnail: null,
    url: "https://www.facebook.com/tomasz.szmajda.58",
    date: "2025-12-10",
    readTime: "6 min",
  },
  {
    id: "blog-004",
    platform: "x",
    title: "30 Days Challenge: Logistics Demo",
    description:
      "Day 2 of my #30DaysChallenge. I built a transportation demo that keeps the complexity out of the way and the flow clear: responsive frontend, real-time tracking, Google Maps API, and secure form validation. Live demo included.",
    thumbnail: null,
    url: "https://x.com/DavidTimil93017/status/1973801306037833866?s=20",
    date: "2025-10-02",
    views: "1.8K",
    duration: "0:20",
  },
  {
    id: "blog-005",
    platform: "linkedin",
    title: "Getting Started with Website Development",
    description:
      "If you’ve ever wondered how websites actually work behind the scenes, this breaks it down simply: frontend, backend, and database. Full-stack engineering means you can build the whole system end to end, so start with HTML, CSS, and JavaScript before growing into backend and data.",
    thumbnail: null,
    url: "https://www.linkedin.com/posts/david-eluwole-166033370_getting-started-with-website-development-activity-7460648665007689729-QnSI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvXSB4BEthFixubuYq7YC98BntU2xPO6G4",
    date: "2025-11-15",
    views: "2.4K",
    duration: "3:14",
  },
  {
    id: "blog-006",
    platform: "linkedin",
    title: "How the Internet Works in 60 Seconds",
    description:
      "Type a URL, let DNS resolve it, send the request to a server, receive HTML/CSS/JavaScript, and render the page. That full cycle happens in milliseconds, and once you understand it, APIs, backend behavior, and debugging start to make sense.",
    thumbnail: null,
    url: "https://www.linkedin.com/posts/david-eluwole-166033370_how-the-internet-works-in-60-seconds-activity-7461019079861215232-l4GG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvXSB4BEthFixubuYq7YC98BntU2xPO6G4",
    date: "2025-11-16",
    views: "1.9K",
    duration: "1:00",
  },
  {
    id: "blog-007",
    platform: "linkedin",
    title: "Top 5 Most Underrated Languages in Tech: HTML",
    description:
      "HTML gets dismissed too easily, but bad HTML means bad websites. Semantic structure, accessibility, and clean markup make everything else easier. It’s not about hard logic — it’s about structure, meaning, and building a foundation that actually supports the rest of the product.",
    thumbnail: null,
    url: "https://www.linkedin.com/posts/david-eluwole-166033370_top-5-most-underrated-languages-in-tech-activity-7465083011487956992-wPd5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvXSB4BEthFixubuYq7YC98BntU2xPO6G4",
    date: "2025-11-17",
    views: "2.8K",
    duration: "2:05",
  },
  {
    id: "blog-008",
    platform: "linkedin",
    title: "Top 5 Most Underrated Languages in Tech: CSS",
    description:
      "CSS is more than decoration. It controls layout, responsiveness, animations, and the overall user experience. Once you really understand flexbox, grid, and positioning, you stop fighting your interface and start engineering how it feels.",
    thumbnail: null,
    url: "https://www.linkedin.com/posts/david-eluwole-166033370_top-5-most-underrated-languages-in-tech-activity-7470156569045868544-hmKz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvXSB4BEthFixubuYq7YC98BntU2xPO6G4",
    date: "2025-11-18",
    views: "3.1K",
    duration: "2:18",
  },

  // ============ TikToks ============
  {
    id: "tt-001",
    platform: "tiktok",
    title: "Zaobserwuj mnie na TikToku! ✨",
    description: "Dzielę się tam wskazówkami z designu, kodowania i nie tylko.",
    frontTexture: "/textures/studio/phonefront_followmeontiktok.webp",
    paintedFrontTexture:
      "/textures/studio/phonefront_followmeontiktok_painted.webp",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2026-01-09",
    views: "15.2K",
    likes: "1.2K",
  },
  {
    id: "tt-002",
    platform: "tiktok",
    title: "Coding a door animation 🚪",
    description: "POV: You open a door in Three.js",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2026-01-03",
    views: "8.5K",
    likes: "756",
  },
  {
    id: "tt-003",
    platform: "tiktok",
    title: "When the shader finally works 🎉",
    description: "The satisfaction of debugging shaders",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-12-25",
    views: "22.1K",
    likes: "3.4K",
  },
  {
    id: "tt-004",
    platform: "tiktok",
    title: "Day in the life: WebGL Dev",
    description: "What I do as a creative developer",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-12-18",
    views: "12.3K",
    likes: "1.1K",
  },
  {
    id: "tt-005",
    platform: "tiktok",
    title: "React vs Three.js POV 😅",
    description: "The struggle is real",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-12-12",
    views: "45.2K",
    likes: "5.8K",
  },
  {
    id: "tt-006",
    platform: "tiktok",
    title: "Making a 3D button 🔘",
    description: "30 seconds of pure satisfaction",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-12-05",
    views: "18.7K",
    likes: "2.1K",
  },
  {
    id: "tt-007",
    platform: "tiktok",
    title: "This shader took 3 hours 💀",
    description: "Was it worth it? Absolutely.",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-11-28",
    views: "33.4K",
    likes: "4.2K",
  },
  {
    id: "tt-008",
    platform: "tiktok",
    title: "Hover effects compilation ✨",
    description: "My favorite micro-interactions",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-11-20",
    views: "28.9K",
    likes: "3.6K",
  },
  {
    id: "tt-009",
    platform: "tiktok",
    title: "Loading screen ideas 🔄",
    description: "Creative preloader concepts",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-11-15",
    views: "19.3K",
    likes: "2.4K",
  },
  {
    id: "tt-010",
    platform: "tiktok",
    title: "Cursor goes brrr 🖱️",
    description: "Custom cursor madness",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-11-08",
    views: "41.2K",
    likes: "5.1K",
  },
  {
    id: "tt-011",
    platform: "tiktok",
    title: "Parallax scrolling magic 🪄",
    description: "Simple but effective",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-11-01",
    views: "25.6K",
    likes: "3.0K",
  },
  {
    id: "tt-012",
    platform: "tiktok",
    title: "Text animation inspo 📝",
    description: "Typography that moves",
    thumbnail: null,
    url: "https://www.tiktok.com/@itompoland",
    date: "2025-10-25",
    views: "31.8K",
    likes: "4.0K",
  },
];

const ytTextures = [
  "/textures/studio/tvfront_filmikprojektdlamultiego.webp",
  "/textures/studio/tvfront_filmikedytowaniezdjec.webp",
];
const ytPaintedTextures = [
  "/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp",
  "/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp",
];
const blogTextures = [
  "/textures/studio/monitorfront_postnafbdoublewinner.webp",
];
const blogPaintedTextures = [
  "/textures/studio/monitorfront_postnafbdoublewinner_painted.webp",
];
const xTextures = blogTextures;
const xPaintedTextures = blogPaintedTextures;
const ttTextures = ["/textures/studio/phonefront_followmeontiktok.webp"];
const ttPaintedTextures = [
  "/textures/studio/phonefront_followmeontiktok_painted.webp",
];

let ytIdx = 0,
  blogIdx = 0,
  xIdx = 0,
  ttIdx = 0;
let ytPIdx = 0,
  blogPIdx = 0,
  xPIdx = 0,
  ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
  return {
    ...item,
    frontTexture:
      item.frontTexture ||
      (item.platform === "youtube"
        ? ytTextures[ytIdx++ % ytTextures.length]
        : item.platform === "blog"
          ? blogTextures[blogIdx++ % blogTextures.length]
          : item.platform === "x"
            ? xTextures[xIdx++ % xTextures.length]
            : ttTextures[ttIdx++ % ttTextures.length]),
    paintedFrontTexture:
      item.paintedFrontTexture ||
      (item.platform === "youtube"
        ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length]
        : item.platform === "blog"
          ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length]
          : item.platform === "x"
            ? xPaintedTextures[xPIdx++ % xPaintedTextures.length]
            : ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]),
  };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
  if (platform === "all") return CONTENT_DATA;
  return CONTENT_DATA.filter((item) => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
  return [...CONTENT_DATA].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )[0];
};
