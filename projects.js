// projects.js — Complete Web & Mobile Portfolio Data
window.projectsData = [
  {
    id: "royal-palm-suite",
    title: "Royal Palm Educational Suite",
    description: "An immersive ecosystem of interactive web games and native Android kiosk applications deployed for Royal Palm Hotel.",
    fullDescription: `
      Developed in strategic collaboration with AskMe Digital, this multi-device educational suite was custom-engineered for the Royal Palm Hotel’s innovative agricultural learning space. The architectural goal was to create a flawless, touchless, and touch-based interactive experience that guides children through sustainability and farming ecosystems. 

      The suite orchestrates multiple high-performance web applications alongside a native Android kiosk app. Every single application features a custom multi-language localization engine (Arabic, French, English), smooth multitouch gesture mapping, and robust offline architecture to guarantee zero downtime during high-traffic physical exhibits.
    `,
    images: ["assets/education_suite.png"],
    link: "#",
    tech: [
      "HTML5/CSS3",
      "JavaScript",
      "Kotlin",
      "Jetpack Compose",
      "DevicePolicyManager",
      "Multilingual Engine",
      "Multitouch API",
      "Offline Architecture"
    ],
    type: "multi-app",
    category: "web", // Hybrid project categorized under web due to heavy web-game presence
    apps: [
      {
        name: "Interactive Agriculture World Map",
        description: "A large-scale, high-performance web application displayed on a 2-meter physical interactive screen, optimized for fluid multitouch rendering of regional global produce maps.",
        images: Array.from({ length: 3 }, (_, i) => `assets/royalpalm_map_${i + 1}.png`),
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/interactive_map.mp4"],
        category: "web"
      },
      {
        name: "Memory Crops Game",
        description: "A gamified web app featuring hardware-accelerated memory-matching challenges and dynamic asset caching for seamless animation playback.",
        images: Array.from({ length: 6 }, (_, i) => `assets/royalpalm_memory_${i + 1}.png`),
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/fruits_memory.mp4"],
        category: "web"
      },
      {
        name: "Bee Quiz Game",
        description: "An asynchronous, animated educational quiz engine teaching pollination cycles, structured around custom state-management logic.",
        images: Array.from({ length: 7 }, (_, i) => `assets/royalpalm_bee_${i + 1}.png`),
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/bees_quiz.mp4"],
        category: "web"
      },
      {
        name: "Olive Oil Quiz Game",
        description: "An interactive digital quiz optimized for large displays, featuring targeted local cultural tracking asset layers.",
        images: Array.from({ length: 6 }, (_, i) => `assets/royalpalm_olive_${i + 1}.png`),
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/olive_quiz.mp4"],
        category: "web"
      },
      {
        name: "Plant Discovery App",
        description: "An interactive, visual digital encyclopedia utilizing custom UI layouts to dynamically reveal botanical metadata sets upon user touch.",
        images: Array.from({ length: 7 }, (_, i) => `assets/royalpalm_plants_${i + 1}.png`),
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/plants_app.mp4"],
        category: "web"
      },
      {
        name: "Spices Discovery (Android Kiosk)",
        description: "A native Android tablet application built with Kotlin and Jetpack Compose. Locked down into a bulletproof enterprise hardware kiosk state using the Device Owner API.",
        images: [],
        videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/spices_app.webm"],
        category: "mobile"
      }
    ]
  },
  {
    id: "pos-android-system",
    title: "Enterprise Android POS Ecosystem",
    description: "A multi-app operational production framework running across restaurant tablet networks, powered by localized databases.",
    fullDescription: `
      An enterprise-grade, native Android Point of Sale (POS) ecosystem engineered from the ground up for high-throughput restaurant environments. Instead of relying on a fragile monolithic app, the architecture splits core operational business logic into separate, dedicated client applications (Orders, Customers, Employees, Kitchen Displays).

      The entire local network is securely synchronized and orchestrated by a central background Coordinator app. Communication across apps occurs instantly via customized Android ContentProvider systems, maintaining absolute transaction integrity, zero-latency local database management, and asynchronous cloud synchronization pipelines.
    `,
    images: ["assets/pos.png"],
    link: "#",
    tech: ["Kotlin", "SQLite", "Android SDK", "ContentProvider", "Clean Architecture", "MVVM"],
    type: "multi-app",
    category: "mobile",
    apps: [
      {
        name: "Orders App",
        description: "Real-time transactional ordering engine with dynamic menu matrixes and sub-second payment state management.",
        images: Array.from({ length: 8 }, (_, i) => `assets/pos_orders_${i + 1}.png`),
        videos: ["https://www.youtube.com/embed/X5lo4Ubt67Q?si=d4tybnBGzGKYibXC"],
        category: "mobile"
      },
      {
        name: "Customers App",
        description: "Localized CRM and guest interaction engine processing CRM profiles and real-time point tracking algorithms.",
        images: Array.from({ length: 18 }, (_, i) => `assets/pos_customers_${i + 1}.png`),
        videos: ["https://www.youtube.com/embed/0BGi5DeZ_mU?si=XaUNFWvL6JEAcUwP"],
        category: "mobile"
      },
      {
        name: "Employees App",
        description: "Labor tracking, shift authentication layers, and real-time tip allocation reporting engines.",
        images: Array.from({ length: 7 }, (_, i) => `assets/pos_employees_${i + 1}.png`),
        videos: [],
        category: "mobile"
      },
      {
        name: "Printers & Kitchen Display",
        description: "Low-level peripheral management processing hardware thermal printing commands and asynchronous kitchen queue visualization layouts.",
        images: [
          "assets/pos_printers_1.png",
          "assets/pos_printers_2.png",
          "assets/pos_printers_3.png"
        ],
        videos: [],
        category: "mobile"
      },
      {
        name: "Core Coordinator Engine",
        description: "The architectural nervous system managing centralized SQLite schemas, inter-process communication, and background REST cloud ingestion.",
        images: [],
        videos: [],
        category: "mobile"
      }
    ]
  },
  {
    id: "remote-pay-app",
    title: "Remote Pay Platform",
    description: "An international e-commerce web platform engineered with Laravel and Angular, integrated with Clover Payment APIs.",
    fullDescription: `
      The Remote Pay Platform is a high-security B2B transactional web engine built specifically for business administrators to orchestrate and execute remote transactions. The backend architecture leverages Laravel's secure routing pipelines, strict API guard protocols, and Eloquent model engines. 

      The administrative frontend is built using Angular and TypeScript, displaying dynamic, real-time fiscal dashboards and transactional reports. The platform features direct, secure integration with the Clover Payment Gateway API to guarantee PCI-compliant payment pathways and instantaneous transaction verification rings.
    `,
    images: Array.from({ length: 12 }, (_, i) => `assets/remotepay_${i + 1}.png`),
    videos: ["https://www.youtube.com/embed/3gVM53Fh7Vo?si=Jb4bWZ8wmDPSZd-s"],
    link: "#",
    tech: ["Laravel", "Angular", "TypeScript", "Clover API", "PHP", "JWT Authentication"],
    type: "single-app",
    category: "web"
  },
  {
    id: "city-coffee-house",
    title: "City Coffee House Web Ecosystem",
    description: "A premium hospitality digital platform engineered with WordPress and Divi, featuring a smart, zero-latency online ordering engine.",
    fullDescription: `
      An elegant, consumer-facing digital web platform built for City Coffee House to optimize their direct-to-consumer digital sales pipeline. The frontend architecture leverages a highly tailored WordPress and Divi design matrix, optimized for lightning-fast asset rendering, responsive typography, and consistent visual branding.

      The core operational achievement of this project is the seamless integration of a smart, asynchronous online ordering system. The menu engine is custom-configured to process incoming customer transactions, manage real-time inventory states, and route delivery or pickup parameters with high efficiency, bypassing third-party aggregator marketplace commissions.
    `,
    images: ["assets/citycoffee_hero.jpeg", "assets/citycoffee_story.png", "assets/citycoffee_accessibi.png", "assets/citycoffee_home.png"],
    link: "https://citycoffeehouseofficial.com/",
    tech: [
      "WordPress",
      "Divi Builder",
      "Smart Online Ordering API",
      "eCommerce Architecture",
      "PHP Customization",
      "UI/UX Design Optimization"
    ],
    type: "single-app",
    category: "web"
  },
  {
    id: "branded-android-apps",
    title: "Branded Enterprise Mobile Fleet",
    description: "Architected, launched, and maintained over 120 native Android applications deployed for restaurant chains across the United States and Canada.",
    fullDescription: `
      An enterprise-scale mobile engineering milestone managing the end-to-end lifecycle of a vast multi-tenant white-label product fleet. This production ecosystem streamlines digital commerce, asynchronous online order injection, and programmatic customer retention algorithms for over 120 hospitality brands across North America.

      Responsibilities spanned implementing robust native presentation layers using XML and Jetpack Compose under MVVM architectures, optimizing offline data persistence via Room/SQLite local databases, and orchestrating massive multi-app Google Play Console release management pipelines. Core achievements include navigating strict Google Play policy compliance matrices and building high-performance REST API integrations via Retrofit to process millions of transaction events safely.
    `,
    images: ["assets/branded_app_1.png"],
    videos: ["https://www.youtube.com/embed/xNvBXiPDw1g?si=mUnhkoyc9KXhZdLN"],
    link: "#", // Root is an overview, nested applications leverage direct links
    tech: [
      "Kotlin",
      "MVVM",
      "Jetpack Compose / XML",
      "Room & SQLite",
      "Retrofit API Handling",
      "Google Play Console Automation",
      "Multi-Tenant Architecture",
      "North American Markets"
    ],
    type: "multi-app",
    category: "mobile",
    apps: [
      {
        name: "White-Label Application Architecture",
        description: "The core native structural foundation empowering restaurant customers to execute low-latency mobile transactions, sync real-time menus, and calculate dynamic loyalty programmatic yields.",
        images: ["assets/branded_app_1.png"],
        videos: ["https://www.youtube.com/embed/xNvBXiPDw1g?si=mUnhkoyc9KXhZdLN"],
        category: "mobile",
        link: "#"
      },
      {
        name: "Bahia Bowls Mobile",
        description: "Custom native Android implementation built for the Bahia Bowls Acai Café franchise network. Features complex conditional component building allowing users to programmatically build and customize healthy ingredient configurations.",
        images: [  
          "assets/bahia_1.webp",
          "assets/bahia_2.webp",
          "assets/bahia_3.webp",
          "assets/bahia_4.webp"
        ],
        videos: [],
        category: "mobile",
        link: "https://play.google.com/store/apps/details?id=com.soo.bahiabowls&pcampaignid=web_share"
      },
      {
        name: "Goldbergs Fine Foods Mobile",
        description: "High-throughput mobile application tailored for Goldbergs Fine Foods. Extensively optimized to handle heavy asynchronous layout rendering across both modern tablet registers and consumer mobile screen form-factors.",
        images: [
          "assets/goldbergs_1.webp",
          "assets/goldbergs_2.webp",
          "assets/goldbergs_3.webp",
          "assets/goldbergs_4.webp",
          "assets/goldbergs_5.webp"
        ],
        videos: [],
        category: "mobile",
        link: "https://play.google.com/store/apps/details?id=com.soo.goldbergsfine&pcampaignid=web_share"
      },
      {
        name: "Java Junkies Mobile",
        description: "A conversion-centric native app engine engineered for the Java Junkies café chain, emphasizing sub-second ordering flows and push-notification hooks to optimize consumer engagement curves.",
        images: [
          "assets/javajunkies_1.webp",
          "assets/javajunkies_2.webp",
          "assets/javajunkies_3.webp",
          "assets/javajunkies_4.webp"
        ],
        videos: [],
        category: "mobile",
        link: "https://play.google.com/store/apps/details?id=com.soo.java&pcampaignid=web_share"
      }
    ]
  },
  {
    id: "rsu-simulator-app",
    title: "RSU Social Eligibility Simulator",
    description: "A native, offline-first Android application mapping Morocco's RSU social scoring matrix via local calculations.",
    fullDescription: `
      The RSU Simulator App is an advanced standalone Android tool engineered to break down and clarify the complex social aid criteria used in Morocco's National Social Register (RSU). Users can securely model household metrics, geographic indicators, variables, and income parameters to predict eligibility status.

      To ensure maximum access across areas with spotty network coverage, the application operates strictly offline-first. The calculation engine translates official public policies into a fast mathematical algorithm executing natively in Kotlin, providing immediate feedback without storing personal user data remotely.
    `,
    images: Array.from({ length: 22 }, (_, i) => `assets/rsu_${i + 1}.png`),
    videos: ["https://pub-0c35d9471f8a419c9fc4c659326e4325.r2.dev/videos/rsu_app.mp4"],
    link: "#",
    tech: ["Kotlin", "Android SDK", "Jetpack Compose", "Local Sandbox Math Engine", "Figma"],
    type: "single-app",
    category: "mobile",
    apps: []
  }
];