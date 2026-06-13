import type { Project } from "@/types";


const sohanAgri: Project = {
  slug: "sohan-agri",
  title: "SohanAgri",
  tagline:
    "A hyper-local AI decision support system for South Punjab farmers, built to make crop disease diagnosis, treatment guidance, and market intelligence more accessible in real farming conditions.",
  summary:
    "An intelligent agricultural platform that combines crop disease diagnosis, pesticide calculation, Mandi Live prices, and seasonal advisory in one mobile-friendly experience.",
  category: "ai",
  status: "github",
  featured: true,
  year: "2026",
  role: "Full-Stack Developer",
  team: "Built with a teammate",
  stack: ["Flask", "TensorFlow", "Keras", "HTML5", "CSS3", "JavaScript", "PWA", "gTTS"],
  coverImage: "/images/projects/sohan-agri/cover.png",
  architectureImage: "/images/projects/sohan-agri/architecture.jpg",
  gallery: [
    {
      src: "/images/projects/sohan-agri/homepage.png",
      alt: "SohanAgri home page",
      caption: "Landing page introducing the platform’s core agricultural intelligence features.",
    },
    {
      src: "/images/projects/sohan-agri/diagnose.png",
      alt: "Disease diagnosis module",
      caption: "AI-powered crop disease detection workflow with image upload and confidence-based results.",
    },
    {
      src: "/images/projects/sohan-agri/mandi-live.png",
      alt: "Mandi Live market prices",
      caption: "Live market intelligence for crop price tracking across South Punjab.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/Sohan-Agri-final",
  overview: [
    "SohanAgri is a web-based agricultural intelligence platform created to address one of the biggest challenges faced by farmers in South Punjab: delayed and inaccessible crop guidance. The system combines AI-based disease diagnosis, pesticide dosage calculation, live market prices, and seasonal advisory into one product that is practical, multilingual, and mobile-friendly.",
    "The core idea behind the project was to build something that could work in real farming conditions. That meant designing for limited connectivity, language accessibility, and ease of use while still delivering technically serious features such as deep learning based diagnosis, text-to-speech guidance, and a structured intelligence layer for crop planning.",
  ],
  problem:
    "Farmers in South Punjab often face high crop disease losses, delayed expert access, language barriers, and a lack of real-time agricultural data. In many cases, crop decisions are made using incomplete information, which increases costs, reduces yield, and makes disease management more reactive than preventive.",
  solution:
    "I helped build SohanAgri as a unified agricultural support system that turns complex technical intelligence into a farmer-friendly web experience. It uses trained deep learning models for disease diagnosis, multilingual output for accessibility, audio treatment guidance, pesticide dosage calculations, live market pricing, and seasonal disease advisory to support better decision-making.",
  features: [
    {
      icon: "camera_alt",
      title: "AI Disease Diagnosis",
      description:
        "Farmers can upload or capture leaf images and receive real-time crop disease predictions with confidence scores and treatment recommendations.",
    },
    {
      icon: "translate",
      title: "Multilingual Support",
      description:
        "The platform supports English, Urdu, and Punjabi to make agricultural guidance more accessible for local users.",
    },
    {
      icon: "volume_up",
      title: "Audio Treatment Guidance",
      description:
        "Treatment recommendations can be read aloud through text-to-speech, helping users who prefer spoken guidance over text.",
    },
    {
      icon: "calculate",
      title: "Pesticide Calculator",
      description:
        "Field size, crop type, disease severity, and dosage inputs are used to calculate safe pesticide application guidance.",
    },
    {
      icon: "store",
      title: "Mandi Live Prices",
      description:
        "Market price information gives farmers better visibility into commodity rates before selling their produce.",
    },
    {
      icon: "calendar_month",
      title: "Seasonal Advisory Dashboard",
      description:
        "Month-by-month guidance helps farmers understand disease risks and prepare proactively for crop protection.",
    },
  ],
  architectureNotes: [
    {
      title: "Three-Layer System",
      description:
        "The product was structured across frontend, Flask application logic, and TensorFlow/Keras model layers to keep the intelligence pipeline organized and maintainable.",
    },
    {
      title: "Mobile-First PWA Design",
      description:
        "The interface was designed to work smoothly on basic Android devices and support offline-like accessibility through progressive web app behavior.",
    },
    {
      title: "Accessible Output Flow",
      description:
        "Language switching, right-to-left support, and audio narration were included to reduce friction for users with different reading preferences and literacy levels.",
    },
  ],
  challenges: [
    {
      title: "Making AI Useful in a Real Product",
      problem:
        "A major challenge was not just building the machine learning models, but making their outputs understandable and useful for a farmer who may not be technical or fluent in English.",
      solution:
        "I focused on product-level clarity by combining prediction results with local-language recommendations, audio support, and task-driven interface design so the AI layer felt practical instead of abstract.",
    },
    {
      title: "Balancing Accuracy With Accessibility",
      problem:
        "The platform needed to be technically strong while still remaining lightweight and usable on low-cost devices with limited connectivity.",
      solution:
        "The UI was kept clean and responsive, the workflows were simplified, and the system was organized to make critical features easy to access without unnecessary interaction steps.",
    },
    {
      title: "Combining Multiple Agricultural Modules",
      problem:
        "SohanAgri included several separate systems such as diagnosis, calculator, prices, and advisory. Without careful structure, the product could easily feel fragmented.",
      solution:
        "I worked on making the platform feel like one connected system by aligning the visual design, navigation flow, and shared data logic around the same agricultural use case.",
    },
  ],
  outcomes: [
    "Built a complete AI-powered agriculture platform that combines diagnosis, advice, market intelligence, and dosage calculation in one place.",
    "Created a multilingual experience tailored to farmers in South Punjab, including English, Urdu, and Punjabi support.",
    "Integrated deep learning based classification with practical product features such as confidence scoring and treatment guidance.",
    "Demonstrated how AI can be wrapped in a clear web interface to solve a real-world problem with local relevance.",
  ],
  personalGrowth:
    "SohanAgri taught me how to think beyond features and focus on context. It pushed me to connect machine learning, backend logic, UI design, language accessibility, and product clarity into one system. More than a technical project, it showed me how to build software that responds to real people, real constraints, and a real environment.",
  deploymentNote:
    "This project is currently presented through source code and screenshots because full deployment depends on paid services and model infrastructure that are not part of the public version.",
  relatedProjectSlugs: [],
};

const smileCareDental: Project = {
  slug: "smilecare-dental-clinic",
  title: "SmileCare Dental Clinic",
  tagline:
    "A live AI appointment capture system that turns after-hours patient inquiries into structured, actionable clinic leads.",
  summary:
    "A production-style AI receptionist for dental clinics that captures appointments, logs leads to Google Sheets, and sends instant WhatsApp alerts.",
  category: "ai",
  status: "live",
  featured: true,
  year: "2026",
  role: "Full-Stack Developer",
  team: "Solo",
  stack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Google Gemini",
    "Make.com",
    "Google Sheets",
    "Twilio WhatsApp",
    "Vercel",
  ],
  coverImage: "/images/projects/smilecare/cover.png",
  architectureImage: "/images/projects/smilecare/architecture.png",
  gallery: [
    {
      src: "/images/projects/smilecare/chat-ui.png",
      alt: "SmileCare chatbot interface",
      caption: "The AI receptionist captures appointment details through natural conversation.",
    },
    {
      src: "/images/projects/smilecare/lead-record.png",
      alt: "Google Sheets CRM logging",
      caption: "Captured inquiries are converted into structured lead records in real time.",
    },
    {
      src: "/images/projects/smilecare/whatsapp-alert.png",
      alt: "WhatsApp lead alert",
      caption: "Qualified leads are sent to the business owner instantly through WhatsApp.",
    },
  ],
  githubUrl:
    "https://github.com/NoorayFatima/AI-Dental-Receptionist-Lead-Capture-System",
  liveUrl: "https://smilecare-dental-clinic-rosy.vercel.app/",
  overview: [
    "SmileCare Dental Clinic was built around a simple business problem: clinics lose potential patients when nobody responds fast enough. Instead of relying on static forms or delayed manual replies, this system captures appointment intent through a conversational AI workflow that works 24/7.",
    "The product combines a polished clinic website with an AI receptionist, a lead capture pipeline, Google Sheets CRM logging, and Twilio WhatsApp notifications. The goal was not just to answer questions, but to turn conversations into structured business data that teams can act on immediately.",
  ],
  problem:
    "Many appointment-based businesses lose leads after hours or during busy periods because inquiries are not captured fast enough. For clinics, that means missed bookings, lost treatments, and no reliable record of which visitors showed real intent.",
  solution:
    "I built a live AI appointment capture system that engages visitors in natural conversation, collects booking details, stores them in Google Sheets, and pushes instant WhatsApp notifications to the business owner. The system works as a practical AI receptionist rather than a passive chatbot.",
  features: [
    {
      icon: "forum",
      title: "AI Receptionist",
      description:
        "Handles patient inquiries naturally and collects booking details without forcing users through rigid forms.",
    },
    {
      icon: "fact_check",
      title: "Structured Lead Capture",
      description:
        "Extracts key booking fields including name, phone number, desired service, and preferred appointment slot.",
    },
    {
      icon: "table_view",
      title: "Google Sheets CRM",
      description:
        "Automatically logs captured leads into a simple, business-friendly CRM workflow that requires no complex setup.",
    },
    {
      icon: "sms",
      title: "WhatsApp Alerts",
      description:
        "Sends real-time lead notifications to the business owner so follow-up can happen quickly.",
    },
    {
      icon: "medical_services",
      title: "Dental Service Routing",
      description:
        "Supports multiple service categories including checkups, whitening, braces, implants, root canal, cosmetic care, extractions, and emergency care.",
    },
    {
      icon: "language",
      title: "Live Web Deployment",
      description:
        "Deployed on Vercel as a production-style clinic site with a working AI interaction flow.",
    },
  ],
  architectureNotes: [
    {
      title: "Three-Part Workflow",
      description:
        "The system is built around a front-end presentation layer, a Gemini-powered conversational layer, and a Make.com automation layer that synchronizes captured data with external tools.",
    },
    {
      title: "Serverless Automation",
      description:
        "Make.com handles the webhook and routing workflow, reducing backend complexity while keeping the pipeline fast and maintainable.",
    },
    {
      title: "Business-Friendly Storage",
      description:
        "Google Sheets was used as the CRM destination so the clinic owner could review leads without needing a complex admin panel.",
    },
  ],
  challenges: [
    {
      title: "Turning chat into usable business data",
      problem:
        "The hard part was not making the AI reply, but ensuring the conversation reliably becomes structured information that the business can actually use.",
      solution:
        "I designed the prompt and workflow around a small set of critical variables, then routed the final captured data through automation tools that store and notify without manual intervention.",
    },
    {
      title: "Balancing natural interaction with data completeness",
      problem:
        "A chatbot can feel human, but business workflows still require exact fields like service type, phone number, and appointment slot.",
      solution:
        "I shaped the flow so the assistant could maintain a natural tone while still guiding the user toward complete booking information.",
    },
  ],
  outcomes: [
    "Built and deployed a live AI-powered appointment capture system on Vercel.",
    "Captured patient leads into Google Sheets and pushed business alerts to WhatsApp in under 60 seconds.",
    "Validated the workflow with real sample records and successful end-to-end automation.",
    "Demonstrated how AI can move beyond chat and become a reliable operational layer for appointment-based businesses.",
  ],
  personalGrowth:
    "This project sharpened my thinking around applied AI systems. It showed me that the real value is not just in the model response, but in how well the surrounding workflow turns conversation into action, structure, and measurable business utility.",
  deploymentNote:
    "This project is live and operational. Test submissions in the live demo trigger the real lead capture pipeline and update the connected system.",
  relatedProjectSlugs: ["sohan-agri"],
};

const folio: Project = {
  slug: "folio",
  title: "Folio",
  tagline:
    "An editorial-style research vault for developers and researchers to capture, organize, and retrieve technical knowledge with clarity.",
  summary:
    "A premium MERN-based knowledge vault with rich text notes, dynamic tagging, global search, and authenticated research workflows.",
  category: "fullstack",
  status: "github",
  featured: true,
  year: "2026",
  role: "Full-Stack Developer",
  team: "Solo",
  stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "React Quill", "JWT"],
  coverImage: "/images/projects/folio/cover.jpg",
  gallery: [
    {
      src: "/images/projects/folio/text-editor.jpg",
      alt: "Folio editor interface",
      caption: "Rich text capture interface for structured technical notes.",
    },
    {
      src: "/images/projects/folio/new-entry.jpg",
      alt: "Folio new Note",
      caption: "Intuitive form for creating new technical notes.",
    },
    {
      src: "/images/projects/folio/update-note.jpg",
      alt: "Folio update note",
      caption: "Interface for updating existing technical notes.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/Folio-frontend",
  liveUrl: undefined,
  overview: [
    "Folio was built to solve a common developer problem: the tools meant to organize thinking often end up creating more clutter. The project reimagines a research vault as a calm, editorial workspace where technical ideas can be captured, categorized, and found again without friction.",
    "The frontend uses a modern archive-inspired design language with strong typography, warm paper-toned visuals, and focused interaction patterns. The backend handles authentication, storage, and retrieval through a clean API layer, making the system feel lightweight on the surface while still structured underneath.",
  ],
  problem:
    "Research and note-taking tools often feel generic, visually noisy, or too shallow for technical work. That makes it harder to preserve context, retrieve knowledge quickly, and maintain a clear thought process across long research sessions.",
  solution:
    "I built Folio as a premium knowledge vault with rich text editing, dynamic tagging, search, and authenticated user sessions. The goal was to create a focused environment that supports technical thinking instead of interrupting it.",
  features: [
    {
      icon: "edit",
      title: "Rich Text Editor",
      description:
        "Supports structured notes with formatting, code blocks, and readable long-form technical content.",
    },
    {
      icon: "sell",
      title: "Dynamic Tagging",
      description:
        "Lets users organize entries with precise, custom tags for fast retrieval and cleaner categorization.",
    },
    {
      icon: "search",
      title: "Global Search",
      description:
        "Filters content in real time across titles, descriptions, and metadata without page reloads.",
    },
    {
      icon: "lock",
      title: "JWT Authentication",
      description:
        "Provides persistent sessions and secure access to user-specific research data.",
    },
    {
      icon: "layers",
      title: "Slide-Over Workflows",
      description:
        "Keeps the main workspace clean while creating or editing entries in focused drawers.",
    },
    {
      icon: "dashboard",
      title: "Editorial UI System",
      description:
        "Uses a warm, archive-inspired visual style designed for clarity and long reading sessions.",
    },
  ],
  architectureNotes: [
    {
      title: "Frontend and Backend Split",
      description:
        "The application is separated into a Next.js frontend and a Node/Express/MongoDB backend to keep responsibilities clean and scalable.",
    },
    {
      title: "Design-First Interface",
      description:
        "The UI was intentionally styled like a modern editorial archive rather than a standard dashboard to better fit research-heavy workflows.",
    },
    {
      title: "Private Production Constraints",
      description:
        "The app depends on a secured database and authenticated API flow, so the public version is kept as a source-code project rather than an open deployment.",
    },
  ],
  challenges: [
    {
      title: "Keeping the interface calm but powerful",
      problem:
        "The challenge was to support dense technical content without making the UI feel heavy or visually exhausting.",
      solution:
        "I used typography, spacing, paper-toned colors, and bento-style layout decisions to keep the interface readable and focused.",
    },
    {
      title: "Making retrieval feel fast and precise",
      problem:
        "As the number of entries grows, basic browsing becomes inefficient for technical research.",
      solution:
        "I added real-time search and dynamic tagging so users can filter and find notes quickly without breaking flow.",
    },
  ],
  outcomes: [
    "Built a polished knowledge vault designed specifically for technical research and note capture.",
    "Combined rich text editing, authentication, tagging, and search into a single workflow.",
    "Created a design system that feels more like an editorial archive than a typical app dashboard.",
  ],
  personalGrowth:
    "Folio pushed me to think about product design as a thinking environment, not just a visual interface. It taught me how to make a dense application feel calm, intentional, and genuinely useful.",
  deploymentNote:
    "This project is currently presented through source code and screenshots because the backend uses secured MongoDB and environment-specific configuration intended for private deployment.",
  relatedProjectSlugs: ["smilecare-dental-clinic", "sohan-agri"],
};

const lilShop: Project = {
  slug: "lilshop",
  title: "LilShop",
  tagline:
    "A live premium storefront built for a handcrafted lifestyle brand, designed as the customer-facing layer of a larger Medusa-powered commerce architecture.",
  summary:
    "A deployed e-commerce storefront focused on premium brand presentation, polished browsing experience, and a scalable frontend foundation.",
  category: "frontend",
  status: "live",
  featured: false,
  year: "2026",
  role: "Frontend Developer",
  team: "Solo",
  stack: ["Next.js", "React", "Tailwind CSS", "Medusa", "Node.js"],
  coverImage: "/images/projects/lilshop/cover.png",
  gallery: [
    {
      src: "/images/projects/lilshop/homepage.png",
      alt: "LilShop homepage",
      caption: "A warm, editorial storefront homepage designed to present the brand with clarity and elegance.",
    },
    {
      src: "/images/projects/lilshop/about.png",
      alt: "LilShop about page",
      caption: "The about experience reinforces brand identity through storytelling, visuals, and thoughtful layout.",
    },
    {
      src: "/images/projects/lilshop/contact.png",
      alt: "LilShop contact page",
      caption: "A refined contact experience that maintains visual consistency across the storefront.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/lilshop-frontend",
  liveUrl: "https://lilshop.vercel.app/",
  overview: [
    "LilShop began as a full-stack e-commerce build with separate frontend and backend repositories. The strongest public-facing part of the project is the deployed storefront, which focuses on visual polish, brand presentation, and a calm shopping experience for a handcrafted lifestyle store.",
    "Rather than presenting it as a generic shop interface, I designed it to feel editorial and premium, with warm tones, clear typography, and consistent page structure across the homepage, brand story, and contact experience. The backend architecture was explored separately through Medusa, but the public portfolio version centers on the polished frontend layer.",
  ],
  problem:
    "Many e-commerce projects focus on basic functionality but overlook the emotional and visual quality of the storefront itself. For a handcrafted brand, the interface needs to communicate trust, warmth, and product character before any purchase happens.",
  solution:
    "I built LilShop as a brand-first storefront with a refined visual system and a customer-facing experience designed to feel calm, premium, and intentional. The deployed version showcases the frontend as a polished product layer, while the backend repository reflects the broader commerce architecture behind it.",
  features: [
    {
      icon: "storefront",
      title: "Premium Storefront Design",
      description:
        "Built around a handcrafted brand aesthetic with warm tones, clear typography, and a more editorial feel than a typical shop template.",
    },
    {
      icon: "home",
      title: "Brand-Led Homepage",
      description:
        "Introduces the product story, featured categories, and supporting content in a way that feels curated rather than purely transactional.",
    },
    {
      icon: "info",
      title: "Brand Storytelling",
      description:
        "The About page strengthens the brand by connecting products to craft, process, and visual identity.",
    },
    {
      icon: "contact_mail",
      title: "Consistent Contact Experience",
      description:
        "The Contact page extends the same design language into support and inquiry flows for a more complete storefront experience.",
    },
    {
      icon: "devices",
      title: "Responsive Interface",
      description:
        "The layout and spacing system were designed to keep the storefront usable and elegant across screen sizes.",
    },
    {
      icon: "hub",
      title: "Commerce-Ready Direction",
      description:
        "The project was structured alongside a separate Medusa backend repository, showing intent beyond a static frontend showcase.",
    },
  ],
  architectureNotes: [
    {
      title: "Separated Frontend and Backend",
      description:
        "LilShop was built with distinct frontend and backend repositories to keep the storefront and commerce infrastructure modular.",
    },
    {
      title: "Frontend as the Public Product Layer",
      description:
        "The deployed version focuses on the strongest completed layer: the customer-facing storefront and brand experience.",
    },
    {
      title: "Backend Deployment Constraints",
      description:
        "The Medusa backend was developed separately, but its full public deployment required a more suitable hosting environment and supporting services than the free-tier setup used during development.",
    },
  ],
  challenges: [
    {
      title: "Designing for brand feel, not just layout",
      problem:
        "A handcrafted store cannot rely on a generic e-commerce UI if the goal is to feel distinctive and trustworthy.",
      solution:
        "I treated the storefront as a brand experience, using visual hierarchy, warm color choices, and cleaner page composition to create a more premium impression.",
    },
    {
      title: "Presenting the project honestly despite backend constraints",
      problem:
        "The backend direction was real, but the public deployment could not fully represent that layer because of infrastructure limitations around the Medusa setup.",
      solution:
        "I chose to present the most complete and stable part of the project professionally: the live storefront, while framing the backend as part of the broader architectural direction rather than overstating completion.",
    },
  ],
  outcomes: [
    "Built and deployed a polished storefront on Vercel.",
    "Created a more brand-driven e-commerce interface instead of a generic catalog UI.",
    "Demonstrated both frontend execution and full-stack commerce planning within one project direction.",
  ],
  personalGrowth:
    "LilShop taught me that strong product presentation matters as much as implementation. It pushed me to think about e-commerce not just as functionality, but as a visual and emotional experience shaped by trust, tone, and design precision.",
  deploymentNote:
    "The storefront is publicly deployed. The backend was developed separately with Medusa, but its full public deployment required a more suitable hosting and infrastructure setup than the free-tier environment used during development.",
  relatedProjectSlugs: ["folio", "smilecare-dental-clinic"],
};

const progressHub: Project = {
  slug: "progress-hub",
  title: "Progress Hub",
  tagline:
    "A comprehensive self-management platform that unifies planning, habits, goals, journaling, and progress tracking in one PWA.",
  summary:
    "A live Progressive Web App for personal productivity, designed to replace fragmented tools with a focused and cohesive progress system.",
  category: "frontend",
  status: "live",
  featured: false,
  year: "2026",
  role: "Frontend Developer",
  team: "Solo",
  stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "PWA", "Lucide React"],
  coverImage: "/images/projects/progress-hub/cover.png",
  gallery: [
    {
      src: "/images/projects/progress-hub/dashboard.png",
      alt: "Progress Hub dashboard",
      caption: "A unified dashboard that gives users a clear overview of progress across all productivity modules.",
    },
    {
      src: "/images/projects/progress-hub/planner.png",
      alt: "Weekly planner view",
      caption: "Week-at-a-glance activity planning with simple Done and Skip states.",
    },
    {
      src: "/images/projects/progress-hub/journal.png",
      alt: "Personal journal interface",
      caption: "A built-in journal for reflecting on goals, habits, and daily progress.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/Progress-Hub",
  liveUrl: "https://progress-hub.netlify.app/",
  overview: [
    "Progress Hub was created to solve a familiar productivity problem: most people rely on separate apps for habits, goals, tasks, and journaling, which creates friction and makes consistency harder to maintain. I wanted to build a single workspace where personal growth tools could live together in one focused environment.",
    "The app is currently frontend-focused and works as a Progressive Web App with browser-based storage, making it fast, installable, and easy to use across desktop and mobile devices. The long-term direction is a full-stack implementation, but the current version already demonstrates a complete product idea with a clean, practical user experience.",
  ],
  problem:
    "Personal development often becomes harder because the tools meant to support it are scattered across different apps. That fragmentation creates mental overhead, weakens consistency, and makes it harder to keep track of long-term progress.",
  solution:
    "I built Progress Hub as a single self-management platform that combines weekly planning, goal tracking, habit streaks, task organization, journaling, and dashboard-level progress visibility. The result is a more cohesive experience that keeps the user focused instead of forcing them to switch between multiple tools.",
  features: [
    {
      icon: "event",
      title: "Weekly Activity Planner",
      description:
        "Supports week-at-a-glance planning with simple Done and Skip states for more structured routines.",
    },
    {
      icon: "target",
      title: "Goal Management",
      description:
        "Lets users organize objectives across weekly, monthly, and yearly timeframes.",
    },
    {
      icon: "local_fire_department",
      title: "Habit Tracker with Streaks",
      description:
        "Helps users build consistency by making streaks and repeated actions easy to follow.",
    },
    {
      icon: "task_alt",
      title: "Task Management",
      description:
        "Keeps daily and pending tasks organized with a simple priority-driven workflow.",
    },
    {
      icon: "edit_note",
      title: "Personal Journal",
      description:
        "Provides a dedicated space for reflections, notes, and progress-related thoughts.",
    },
    {
      icon: "dashboard",
      title: "Unified Dashboard",
      description:
        "Brings all modules together in a clear overview so the user can see progress at a glance.",
    },
  ],
  architectureNotes: [
    {
      title: "Frontend-First PWA",
      description:
        "Built with React, Vite, and Tailwind CSS, then enhanced with service worker and manifest support for installability.",
    },
    {
      title: "Local Storage Workflow",
      description:
        "The current version uses browser-based storage so the app remains lightweight and easy to run without backend dependencies.",
    },
    {
      title: "Future Full-Stack Roadmap",
      description:
        "The planned next phase is a Node.js, Express, and PostgreSQL backend to support persistent multi-user functionality.",
    },
  ],
  challenges: [
    {
      title: "Unifying several productivity flows",
      problem:
        "The main challenge was not building one tool, but making multiple productivity tools feel like one coherent platform.",
      solution:
        "I kept the visual language and interaction patterns consistent across modules so the app feels integrated rather than stitched together.",
    },
    {
      title: "Keeping the app fast and installable",
      problem:
        "A personal productivity app needs to feel lightweight and available quickly across devices.",
      solution:
        "I built it as a PWA with a frontend-first architecture so it stays responsive, installable, and easy to access without app-store friction.",
    },
  ],
  outcomes: [
    "Built a live Progressive Web App focused on personal productivity and self-management.",
    "Unified planning, habits, goals, journaling, and task tracking into one system.",
    "Created a product that is both practical today and ready to evolve into a full-stack platform later.",
  ],
  personalGrowth:
    "Progress Hub helped me think more clearly about product structure and continuity. It showed me how to design a system that supports long-term consistency, not just isolated interactions.",
  deploymentNote:
    "The current version is frontend-focused and live as a PWA. A future version is planned with Node.js, Express, and PostgreSQL for backend persistence and expanded functionality.",
  relatedProjectSlugs: ["folio", "lilshop"],
};

const weatherDashboard: Project = {
  slug: "weather-dashboard",
  title: "Weather Dashboard",
  tagline:
    "A clean weather utility app designed to present real-time forecast data in a clear, readable interface.",
  summary:
    "A frontend weather dashboard that integrates live weather data into a simple, practical UI focused on quick access and usability.",
  category: "frontend",
  status: "github",
  featured: false,
  year: "2026",
  role: "Frontend Developer",
  team: "Solo",
  stack: ["React", "JavaScript", "Weather API", "CSS"],
  coverImage: "/images/projects/weather-dashboard/cover.jpg",
  gallery: [
    {
      src: "/images/projects/weather-dashboard/cover.jpg",
      alt: "Weather Dashboard interface",
      caption: "A compact weather interface focused on clear presentation of forecast information.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/Weather-Dashboard",
  overview: [
    "Weather Dashboard was built as a focused utility project to make weather information easier to access in a single, readable interface. Rather than overcomplicating the experience, the goal was to create something straightforward, practical, and visually clean.",
    "Projects like this are useful because they strengthen the fundamentals of frontend development: API handling, state management, conditional rendering, and UI organization around live external data.",
  ],
  problem:
    "Weather data is only useful when it is easy to scan quickly. Many basic implementations work technically but feel cluttered or difficult to read at a glance.",
  solution:
    "I built a lightweight dashboard that organizes real-time weather information into a cleaner interface, making forecast data easier to interpret and interact with.",
  features: [
    {
      icon: "wb_sunny",
      title: "Live Weather Data",
      description:
        "Fetches current weather information from an external API and presents it in a simple interface.",
    },
    {
      icon: "dashboard",
      title: "Readable Layout",
      description:
        "Organizes weather details into a structure that is easier to scan and understand quickly.",
    },
    {
      icon: "search",
      title: "Practical Utility Focus",
      description:
        "Built around direct usability rather than unnecessary interface complexity.",
    },
  ],
  architectureNotes: [
    {
      title: "Frontend Utility Project",
      description:
        "The app focuses on client-side weather data retrieval and UI presentation rather than backend complexity.",
    },
    {
      title: "External API Integration",
      description:
        "The project uses live data from a weather service, making API setup and request handling part of the implementation.",
    },
  ],
  challenges: [
    {
      title: "Making live data feel simple",
      problem:
        "Weather APIs can provide a lot of raw information, but not all of it improves the user experience.",
      solution:
        "I focused on presenting only the most relevant data in a way that keeps the interface clean and immediately useful.",
    },
  ],
  outcomes: [
    "Built a clean utility app around external API integration.",
    "Strengthened core frontend skills through live data handling and UI design.",
    "Created a smaller supporting project that complements larger portfolio work.",
  ],
  personalGrowth:
    "This project helped reinforce the value of clarity in small products. Even simple applications benefit from strong layout decisions and thoughtful presentation of live data.",
  deploymentNote:
    "This project is currently presented through source code and screenshots because it depends on external API configuration and environment setup that were not included in a public deployment.",
  relatedProjectSlugs: ["progress-hub"],
};

const digitalAgencyWebsite: Project = {
  slug: "digital-agency-website",
  title: "Digital Agency Website",
  tagline:
    "A modern agency website designed to present services clearly, strengthen brand credibility, and support client acquisition.",
  summary:
    "A live, responsive business website focused on clean service presentation, polished branding, and a professional browsing experience.",
  category: "frontend",
  status: "live",
  featured: false,
  year: "2026",
  role: "Frontend Developer",
  team: "Solo",
  stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  coverImage: "/images/projects/digital-agency/cover.png",
  gallery: [
    {
      src: "/images/projects/digital-agency/homepage.png",
      alt: "Digital Agency Website homepage",
      caption: "A modern business-facing interface designed to communicate services and credibility clearly.",
    },
  ],
  githubUrl: "https://github.com/NoorayFatima/Digital-Agency-Website",
  liveUrl: "https://digi-bost.netlify.app/",
  overview: [
    "Digital Agency Website was built as a clean, professional web presence for a service-based business. The goal was to create a modern interface that introduces the agency clearly, communicates its offerings, and gives visitors a strong first impression.",
    "Rather than overcomplicating the experience, the project focuses on what matters most for this kind of site: clarity, visual consistency, responsive layout, and a polished presentation that feels ready for real-world use.",
  ],
  problem:
    "Agency websites need to establish credibility quickly. If the layout feels cluttered, inconsistent, or unclear, visitors lose confidence before they even understand the services being offered.",
  solution:
    "I built a streamlined business website that emphasizes strong visual hierarchy, clean service presentation, and responsive structure. The result is a professional landing experience designed to support trust and engagement.",
  features: [
    {
      icon: "language",
      title: "Live Business Website",
      description:
        "Deployed as a public-facing agency site with a complete and accessible browsing experience.",
    },
    {
      icon: "view_quilt",
      title: "Clear Service Presentation",
      description:
        "Sections are structured to help visitors understand the agency’s offerings quickly and without friction.",
    },
    {
      icon: "devices",
      title: "Responsive Layout",
      description:
        "Built to maintain readability and visual consistency across desktop and mobile screens.",
    },
    {
      icon: "auto_awesome",
      title: "Professional Visual Tone",
      description:
        "Designed to feel credible and polished, supporting the brand identity of a digital service business.",
    },
  ],
  architectureNotes: [
    {
      title: "Frontend-Focused Build",
      description:
        "This project centers on the presentation layer, with attention placed on layout, responsiveness, and user-facing clarity.",
    },
    {
      title: "Conversion-Oriented Structure",
      description:
        "The page flow is designed to introduce the agency, explain its value, and guide visitors toward inquiry or contact.",
    },
  ],
  challenges: [
    {
      title: "Making a simple site feel professional",
      problem:
        "Business websites can easily feel generic if the visual hierarchy and page composition are not handled carefully.",
      solution:
        "I focused on clean sectioning, clear messaging flow, and a more polished overall presentation so the site would feel credible and client-ready.",
    },
  ],
  outcomes: [
    "Built and deployed a live agency website on Netlify.",
    "Created a responsive and professional business-facing interface.",
    "Demonstrated clean frontend execution in a real marketing-style website format.",
  ],
  personalGrowth:
    "This project reinforced the importance of clarity in frontend work. Not every strong project needs technical complexity; sometimes the value lies in presenting information cleanly, credibly, and with precision.",
  deploymentNote:
    "This project is live and publicly accessible as a frontend business website.",
  relatedProjectSlugs: ["lilshop", "weather-dashboard"],
};

const supportTicketSystem: Project = {
  slug: "support-ticket-system",
  title: "Support Ticket System",
  tagline:
    "A full-stack Laravel application designed to streamline customer support through structured ticket submission, tracking, and admin-side resolution workflows.",
  summary:
    "A role-based support management system built with Laravel 11 and Bootstrap 5, featuring secure authentication, ticket workflows, and dedicated dashboards for users and admins.",
  category: "fullstack",
  status: "github",
  featured: false,
  year: "2026",
  role: "Full-Stack Developer",
  team: "Solo",
  stack: ["Laravel 11", "PHP", "Bootstrap 5", "MySQL", "Blade"],
  coverImage: "/images/projects/support-ticket-system/cover.jpg",
  gallery: [
  {
    src: "/images/projects/support-ticket-system/1.jpg",
    alt: "Support Ticket System admin ticket list",
    caption: "User Dashboard",
  },
  {
    src: "/images/projects/support-ticket-system/2.jpg",
    alt: "Support Ticket System ticket detail and reply view",
    caption: "Detailed ticket creation view",
  },
  {
    src: "/images/projects/support-ticket-system/3.jpg",
    alt: "Support Ticket System admin dashboard",
    caption: "Admin dashboard summarizing ticket activity, open issues, and user-level support metrics.",
  },
  {
    src: "/images/projects/support-ticket-system/4.jpg",
    alt: "Support Ticket System all tickets management view",
    caption: "Centralized ticket management interface for reviewing submitted issues and tracking support progress.",
  },
  {
    src: "/images/projects/support-ticket-system/5.jpg",
    alt: "Support Ticket System create ticket form",
    caption: "Showcase of how a ticket and its reply is being handled.",
  },
],
  githubUrl: "https://github.com/NoorayFatima/Support-Ticket-System",
  overview: [
    "Support Ticket System was built to solve a practical business need: customer issues should not disappear into scattered messages, unmanaged inboxes, or informal follow-up. The application gives users a structured way to submit support requests while giving administrators a clear interface to review, prioritize, and respond.",
    "The project is built as a full-stack Laravel application with role-based dashboards for users and admins. Instead of treating support as a basic form submission feature, it approaches it as a workflow system with authentication, protected routes, ticket states, and a cleaner experience for both sides of the interaction.",
  ],
  problem:
    "Customer support becomes difficult to manage when requests are not centralized or traceable. Without a clear workflow, issues can be delayed, duplicated, or lost entirely, which affects both customer trust and internal efficiency.",
  solution:
    "I built a Laravel-based support ticket system where users can create, track, and reply to tickets while admins can manage statuses, respond directly, and monitor system activity through a dedicated dashboard. The result is a more organized and accountable support flow.",
  features: [
    {
      icon: "confirmation_number",
      title: "Ticket Submission Workflow",
      description:
        "Users can create support tickets with relevant details and priority, making requests more structured and easier to manage.",
    },
    {
      icon: "dashboard",
      title: "Role-Based Dashboards",
      description:
        "Separate user and admin dashboards provide each side with the tools and visibility appropriate to their role.",
    },
    {
      icon: "lock",
      title: "Secure Authentication",
      description:
        "Login, access control, and protected routes help ensure that only authorized users reach the correct parts of the system.",
    },
    {
      icon: "sync_alt",
      title: "Ticket Status Management",
      description:
        "Admins can update ticket progress across states such as open, in progress, and closed.",
    },
    {
      icon: "forum",
      title: "Direct Ticket Responses",
      description:
        "Both sides can communicate within the system, keeping the conversation attached to the issue itself.",
    },
    {
      icon: "insights",
      title: "Admin Overview",
      description:
        "The admin panel includes ticket and user visibility to support better monitoring and support operations.",
    },
  ],
  architectureNotes: [
    {
      title: "Laravel-Centered Full-Stack Build",
      description:
        "The project uses Laravel as the core application layer, combining routing, middleware, validation, authentication, and database interaction in one structured framework.",
    },
    {
      title: "Role-Specific Access Flow",
      description:
        "User and admin experiences are separated through controlled routing and protected dashboard logic.",
    },
    {
      title: "Environment-Sensitive Deployment",
      description:
        "Public deployment was not included because Laravel applications require proper server configuration, public-directory routing, dependencies, and environment setup to run correctly in production.",
    },
  ],
  challenges: [
    {
      title: "Designing support as a workflow, not just a form",
      problem:
        "A support system needs more than ticket creation; it also needs status handling, role separation, clear tracking, and controlled communication.",
      solution:
        "I structured the app around real support flow requirements so tickets could move through a more complete lifecycle instead of ending at submission.",
    },
    {
      title: "Managing authorization and route protection",
      problem:
        "Admin-only and user-specific areas create complexity when access control is not handled carefully.",
      solution:
        "I used Laravel middleware, route protection, and role-aware logic to keep the experience secure and properly separated.",
    },
  ],
  outcomes: [
    "Built a complete Laravel support workflow application with both user and admin experiences.",
    "Applied authentication, authorization, database relationships, validation, and dashboard logic in a real-world style project.",
    "Strengthened full-stack Laravel development skills through a structured business use case.",
  ],
  personalGrowth:
    "This project helped deepen my understanding of Laravel as an application framework rather than just a routing tool. It pushed me to think in terms of workflows, access control, and maintainable backend structure while still keeping the user experience clear.",
  deploymentNote:
    "This project is currently presented through source code and screenshots because Laravel production deployment requires the right server setup, environment configuration, and framework-specific hosting support that were not part of the current public release.",
  relatedProjectSlugs: ["folio", "weather-dashboard"],
};

const customCms: Project = {
  slug: "custom-cms",
  title: "Custom Content Management System",
  tagline:
    "A full-stack CMS built to make content publishing simpler, faster, and more affordable for small businesses, creators, and teams.",
  summary:
    "A responsive content management system developed with PHP, MySQL, and Bootstrap 5, featuring role-based access, content publishing workflows, media handling, and an intuitive admin experience.",
  category: "fullstack",
  status: "case-study",
  featured: false,
  year: "2025",
  role: "Full-Stack Developer",
  team: "Solo",
  stack: ["PHP 8", "MySQL", "Bootstrap 5", "HTML", "CSS", "JavaScript"],
  coverImage: "/images/projects/custom-cms/cover.png",
  videoUrl: "/images/projects/custom-cms/linkedin-video.mp4",
  overview: [
    "This project was built as a custom content management system for people who need the power of a CMS without the complexity, cost, or plugin-heavy experience of larger platforms. The goal was to create a system that feels approachable for non-technical users while still being structured enough for real publishing workflows.",
    "Instead of treating content management as a developer-only task, I focused on usability, clarity, and clean workflow design. The result is a responsive full-stack application where users can manage posts, media, and access roles through a simpler, more guided interface.",
  ],
  problem:
    "Many CMS platforms are either too complex for non-technical users or too expensive and bloated for smaller teams. Businesses and creators often need a simpler system that supports publishing, media management, and access control without unnecessary setup friction.",
  solution:
    "I built a custom CMS that combines essential publishing features with a clean dashboard experience, role-based access, responsive layouts, media handling, and a streamlined content workflow. It provides a practical middle ground between simplicity and useful functionality.",
  features: [
    {
      icon: "dashboard",
      title: "Intuitive Admin Dashboard",
      description:
        "A clean dashboard experience designed to reduce friction and help users manage content without a steep learning curve.",
    },
    {
      icon: "edit_document",
      title: "Content Publishing Workflow",
      description:
        "Users can create, edit, organize, and manage content through a structured publishing flow built for clarity and speed.",
    },
    {
      icon: "shield_lock",
      title: "Role-Based Access Control",
      description:
        "Secure user access is managed through role-aware permissions, making the system more practical for teams and protected admin areas.",
    },
    {
      icon: "image",
      title: "Media Handling",
      description:
        "The CMS includes image management to support content publishing and keep media workflows connected to the platform itself.",
    },
    {
      icon: "devices",
      title: "Responsive Design",
      description:
        "Built with a mobile-first mindset so the interface remains usable across desktop and smaller screens.",
    },
    {
      icon: "search",
      title: "SEO-Ready Structure",
      description:
        "The system was designed with content visibility in mind, supporting a cleaner foundation for optimized publishing.",
    },
  ],
  gallery: [
    {
      src: "/images/projects/custom-cms/cover.png",
      alt: "Custom CMS project",
      caption:
        "Homepage of the CMS dashboard, showcasing a clean interface with clear navigation and content management options.",
    },
  ],
  architectureNotes: [
    {
      title: "Custom PHP and MySQL Foundation",
      description:
        "The application uses PHP 8 and MySQL to handle server-side logic, content operations, user management, and persistent data storage.",
    },
    {
      title: "Usability-Driven Admin Experience",
      description:
        "A major focus of the build was making the CMS understandable for non-technical users through straightforward navigation and simplified task flows.",
    },
    {
      title: "Built for Practical Publishing",
      description:
        "The system was shaped around real publishing needs such as content updates, media organization, access control, and responsive management screens.",
    },
  ],
  challenges: [
    {
      title: "Balancing simplicity with useful CMS functionality",
      problem:
        "CMS platforms often become difficult to use when they accumulate too many features or rely on plugin-heavy experiences.",
      solution:
        "I focused on the core publishing workflow and built a cleaner interface that keeps content management practical without overwhelming the user.",
    },
    {
      title: "Designing for both admins and non-technical users",
      problem:
        "A CMS needs enough control for management tasks while still feeling approachable for users who are not developers.",
      solution:
        "I emphasized dashboard clarity, role-based structure, and a guided interaction flow to make the system easier to use across different user types.",
    },
  ],
  outcomes: [
    "Built a complete full-stack CMS project using PHP, MySQL, and Bootstrap 5.",
    "Designed a system that supports content publishing, media handling, secure access, and responsive administration.",
    "Strengthened practical skills in backend logic, workflow design, user management, and interface usability.",
  ],
  personalGrowth:
    "This project pushed me to think beyond page-building and focus on system design, user roles, and real content workflows. It helped me better understand how full-stack applications need to balance backend structure, usability, and long-term maintainability.",
  deploymentNote:
    "This project is currently presented as a documented case study with a demo video rather than a live deployment or public repository.",
  externalUrl:
    "https://www.linkedin.com/posts/noorfatima35_webdevelopment-php-cms-activity-7338777071319457793-BMTM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAcIkIBinzZTL_0Twtpnpr8UN-Q4caoiXI",
  relatedProjectSlugs: ["support-ticket-system", "folio"],
};

export const projects: Project[] = [
  smileCareDental,
  folio,
  sohanAgri,
  progressHub,
  lilShop,
  supportTicketSystem,
  customCms,
  weatherDashboard,
  digitalAgencyWebsite,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
