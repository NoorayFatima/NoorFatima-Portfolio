import type { Project } from "@/types";

const nexusFlow: Project = {
  slug: "project-1",
  title: "Nexus Flow Platform",
  tagline:
    "A sophisticated real-time supply chain visualization engine designed to streamline logistics operations for multi-national manufacturing firms.",
  summary:
    "A distributed processing platform for real-time inference on edge devices, reducing latency by 45% using a custom quantization algorithm.",
  category: "fullstack",
  status: "live",
  featured: true,
  year: "2024",
  role: "Full-Stack Developer",
  team: "Solo",
  stack: ["React", "Node.js", "MongoDB"],
  coverImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQg79PLEtAK4-hrqoZZBU27_mVfWxu9s2l_vK9UNXS4cs5c0vFXM421uURp9Cjhd_MsKUN92OJyVde4eD7mAlTZ5pfe7eFFhDUVDjvG_gCa3-siVegfxItEdt1m5mBDlbaA7ic8gz3R1Hb8JDU7LPhur9-Gn0Q4mW3k57A8xwsImLOHS00xCvBf1UOAHnjupInVgbEAM1tMSdHXMdGCRW-R5WWk356R7F4rvi4UfEwvW2iU5WfW0mZut6WtRp7YAI_zAGqrxWJs8",
  gallery: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCid_d2f46pG5AS_7Q6hcRgrFu8exY6IQyh0YHswW_Rchw7yQTyCbvIdI8g0jPs2DFqxpvEzEf7A0e3Y1Y3z8FTRXC38mJZH7ndeviogasEx6rNNz2OzipxgDTs0RK351V2XKsPBqnqCNWv2QhTVJw966eZGE5IKo1qmZImu6GU8VMzbWFco1R9p2FH9uA5MZ6dO5IbKTXYXN2_jxm6J1x6Bhha02f4gQfDVTyLPngNmCt7OIhMze9mk-AParrM5sBEyON3UEGVyGY",
      alt: "Dashboard Map",
      caption: "Global Logistics Command Center",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHG1PCETzX7tr_MI3PrbO2lbUVtz6EfMtKdTeoSxNNUCCzl6mDF8vOCNBmv8bhjl0TUrEMttyqVKbTP71c86asURB3fOpcW0MFnQN39eQuFk-0BoPtZEIMesMEn6AeX6--1kfy5F7ci-zx9BFEJ7nELSZfX-xphjLcxFzBjlIQzjLuM6THbLfvOWe9jCDF4SBVIWK30vex54f9wlCBwVgXpXOQo2kFZf2XWFv8A6aJBRbw5kXSrXBluzh_TThTtL_fIjYvlZULHCc",
      alt: "Analytics View",
      caption: "Deep-dive Analytics & Reporting",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5qOnEtqp1JmedeW-JSpnAPweRStWj_nKqRaXStonqe0NIfNgKRODakD-XBuU5jiEQvdcbLqYA6G1P9POPWpeZjszm4mlU7T-QGc9zEpKZVUSSP4OmhyLgpRpP6Ah4tz2lkMKTsBXrtpOj-GxeQTK6KsIMCgg4EVhNT2NCXzFaoHNjwXCPgznZfDy1nTmE7h_-6lX-Z1f84LJl31CqWFcktw4T89ys0CaKNf-iomKS0WKxS7RyygBQJYo2RDevJT3zGZxT85KcPJY",
      alt: "Mobile View",
      caption: "Responsive Mobile Tracking Interface",
    },
  ],
  githubUrl: "#",
  liveUrl: "#",
  overview: [
    "Nexus Flow was conceived as a response to the fragmentation often found in industrial logistics management. Many firms struggle with siloed data across disparate shipping providers, resulting in blind spots that lead to costly delays. This platform consolidates real-time tracking, inventory levels, and predictive analytics into a singular, cohesive command center.",
    "The core objective was to build an interface that feels surgically precise. By leveraging a high-performance MERN stack, I implemented a system capable of processing thousands of sensor data points every second, rendering them on an interactive geographical canvas without compromising on frame rates or user responsiveness.",
  ],
  problem:
    "Manufacturing teams were operating with \"stale\" data. Tracking updates arrived in 15-minute intervals via email or static CSV exports. This lag meant that by the time a shipment delay was identified, the window for re-routing or logistical adjustment had already closed, costing the company an estimated 4% in operational overhead annually.",
  solution:
    "I architected a WebSocket-driven event stream that provides sub-second latency for shipment updates. By integrating directly with courier APIs and internal ERP systems, Nexus Flow offers a live \"Heartbeat\" of the entire supply chain. Decision-makers can now react to anomalies in real-time, reducing critical response times from hours to minutes.",
  features: [
    {
      icon: "hub",
      title: "Centralized Hub",
      description:
        "Aggregates data from over 15 different logistics providers into a unified schema for consistent reporting.",
    },
    {
      icon: "analytics",
      title: "Predictive ETAs",
      description:
        "ML-driven forecasting that accounts for historical weather patterns and port congestion to predict delays.",
    },
    {
      icon: "shield_with_heart",
      title: "Secure Compliance",
      description:
        "Enterprise-grade RBAC and audit logs ensuring that sensitive data remains visible only to authorized personnel.",
    },
    {
      icon: "speed",
      title: "Instant Sync",
      description:
        "Real-time state management using Redux Toolkit and Socket.io to keep every connected dashboard in sync.",
    },
    {
      icon: "query_stats",
      title: "Cost Analytics",
      description:
        "Drill down into per-unit shipping costs to identify inefficiencies in the regional distribution network.",
    },
    {
      icon: "terminal",
      title: "Extensible API",
      description:
        "A robust RESTful API that allows third-party tools to fetch data and trigger logistics events programmatically.",
    },
  ],
  architectureNotes: [
    {
      title: "Micro-Frontend Readiness",
      description:
        "Designed with module federation in mind, allowing the 'Maps' and 'Analytics' modules to be deployed independently if the team scales.",
    },
    {
      title: "Optimistic UI Updates",
      description:
        "Implemented optimistic UI patterns for status changes, providing an \"instant\" feel even when high-latency API calls are in flight.",
    },
    {
      title: "Stateless Auth",
      description:
        "Utilized JWTs stored in HttpOnly cookies to maintain a secure, stateless authentication flow compatible with horizontal scaling.",
    },
  ],
  challenges: [
    {
      title: "Handling Concurrency with Socket.io",
      problem:
        "When multiple users were viewing the same fleet segment, the broadcast events created a \"thundering herd\" problem on the client, causing React re-renders to spike and frame rates to drop below 30fps.",
      solution:
        "\"I implemented a debouncing strategy at the Socket server level and integrated a selective rendering logic in React using memoization and virtualized lists. This reduced re-renders by 65%, keeping the UI at a buttery-smooth 60fps even during peak traffic.\"",
    },
    {
      title: "Complex GIS Data Mapping",
      problem:
        "Standard mapping libraries struggled with custom SVG markers and dynamic route recalculations for thousands of simultaneous entities, leading to significant memory leaks in the browser.",
      solution:
        "\"I migrated the mapping engine to MapLibre GL with a custom WebGL layer for data visualization. By offloading coordinate calculations to the GPU, I eliminated the memory leaks and improved initial load times by 40%.\"",
    },
  ],
  outcomes: [
    "Reduced logistical response time by an average of 82% across pilot departments.",
    "Consolidated 4 separate monitoring tools into a single source of truth.",
    "Improved team morale by eliminating manual tracking spreadsheet updates.",
  ],
  personalGrowth:
    "This project pushed my understanding of real-time systems and GIS integration. More importantly, it taught me the value of \"Engineering Empathy\"—building tools that don't just work well technically, but actively solve the day-to-day frustrations of the end-user. I learned that performance isn't just a metric; it's a feature that builds trust.",
  deploymentNote:
    "This project is currently presented through source code and screenshots because it requires a local full-stack environment and specific API keys to run as intended.",
  relatedProjectSlugs: ["project-2"],
};

const astraNeural: Project = {
  slug: "project-2",
  title: "Astra Neural Engine",
  tagline:
    "A distributed processing platform for real-time inference on edge devices.",
  summary:
    "A distributed processing platform for real-time inference on edge devices, reducing latency by 45% using a custom quantization algorithm.",
  category: "ai",
  status: "live",
  featured: true,
  year: "2024",
  role: "Lead Engineer",
  team: "3 Engineers",
  stack: ["Rust", "WebAssembly", "Next.js"],
  coverImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHh3qi67AK2BSmSPUjWm2HEAOMczq3IOVW1WKPfVrb2Nq6yOHJwAmaa_sICVF0D4-ilOL8yeSePGGTskLdZgYc0amTl0POpuVFqNrtXOBzR-Rh2pIPwjcras9AYJdaZPCGxIz2yo25x8GQE06QEzufa9WaFo5Bhol5KyAw8pCK4MWVjspCmsUrnBUMrzJyF3ZERqUb8C0pRZPUTPYM7XLmociTXXr8NnXHE2DGzdevF3MXd3OwLkSyYqEoDHGhaO-VsLLBtw6SmEMo",
  gallery: [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_TnJ0aTlmxI3JrYdm2LvLPJlLwcz8QAb8CNKeaZMoE6WwNwWV9sZPr-e6HhSN66oDn_FX0Oywsx0LlvKjIkfolEJ1cok2_VPmQYBnxa8-j1k1nAGSkiqThDPNBD6kcymDWTW28osMvzpOHIP_7MtWJqH2-hJw_6zZA5K62kOx8zG0-wgIu3QREj0dSeS5CQkz2c2g7scPu2D061hZTe6pDDXb9ytPaZcGrdUXw8hKwjV3PST-Apxg32pgR3BewC7p6P1CL_XFOLo",
      alt: "Astra Neural Engine Dashboard",
      caption: "Real-time Inference Dashboard",
    },
  ],
  githubUrl: "#",
  liveUrl: "#",
  overview: [
    "Astra Neural Engine addresses the challenge of running machine learning models on resource-constrained edge devices without sacrificing accuracy or responsiveness.",
    "The platform uses a custom quantization pipeline and WebAssembly modules to deliver sub-50ms inference times across heterogeneous hardware environments.",
  ],
  problem:
    "Edge deployments suffered from model bloat and inconsistent latency, making real-time applications unreliable in production environments with limited compute resources.",
  solution:
    "Built a modular inference runtime with dynamic model loading, hardware-aware optimization, and a unified monitoring layer for distributed edge nodes.",
  features: [
    {
      icon: "memory",
      title: "Edge Inference",
      description:
        "Optimized model execution for ARM and x86 edge hardware with automatic fallback strategies.",
    },
    {
      icon: "speed",
      title: "Low Latency",
      description:
        "Custom quantization reduced inference latency by 45% compared to baseline deployments.",
    },
    {
      icon: "hub",
      title: "Distributed Nodes",
      description:
        "Central orchestration for thousands of edge nodes with health monitoring and rollout controls.",
    },
  ],
  architectureNotes: [
    {
      title: "WASM Runtime",
      description:
        "Core inference modules compiled to WebAssembly for portable, sandboxed execution across devices.",
    },
    {
      title: "Model Registry",
      description:
        "Versioned model artifacts with staged rollouts and automatic rollback on performance regression.",
    },
  ],
  challenges: [
    {
      title: "Hardware Fragmentation",
      problem:
        "Different edge devices exposed inconsistent performance characteristics, breaking assumptions from cloud-based training pipelines.",
      solution:
        "Introduced a hardware profiling layer that selects optimal runtime configurations per device class at deployment time.",
    },
  ],
  outcomes: [
    "Achieved 45% latency reduction across pilot edge deployments.",
    "Enabled real-time inference on devices with less than 2GB RAM.",
  ],
  personalGrowth:
    "This project deepened my understanding of systems-level optimization and the tradeoffs between model accuracy and runtime performance at the edge.",
  deploymentNote:
    "Demonstrated via architecture documentation, benchmarks, and controlled demo environments due to proprietary model weights.",
  relatedProjectSlugs: ["project-1"],
};

export const projects: Project[] = [
  nexusFlow,
  astraNeural,
  {
    slug: "prism-ui-system",
    title: "Prism UI System",
    tagline:
      "An accessible, headless component library built for rapid prototyping of enterprise-grade SaaS products.",
    summary:
      "An accessible, headless component library built for rapid prototyping of enterprise-grade SaaS products.",
    category: "frontend",
    status: "github",
    featured: false,
    year: "2023",
    role: "Creator",
    team: "Solo",
    stack: ["TypeScript", "Tailwind"],
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFuncRw1AMunBMCr3VG1oYErwuwL6tWyVArawjUu0u_O8RbPmG2rSLBMGKelPvqrvmYxqZF2vXTBELjSCjzu4t4zkWBERtEPpZIB2hE3bz1_eKniFaVhD3QprfA9TYYKPjdXMA1gIbt1sBjCxof-Pu86RHMBIQnCDLv_i-MRlfpEOjM9vXsxSqgEv1Ruga3XCIVrM4OEmA7pMBLxfxqlVvgUz8qmb2LSP65GsRT_ivcc2i9Nk4XfPDqFBCeO3LIIjLHc4MGyvxHMcj",
    gallery: [],
    overview: ["Placeholder overview for Prism UI System."],
    problem: "Placeholder problem statement.",
    solution: "Placeholder solution statement.",
    features: [],
    architectureNotes: [],
    challenges: [],
    outcomes: [],
    personalGrowth: "Placeholder growth notes.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
