const settings = {
  isSplash: false,
  useCustomCursor: false,
  googleTrackingID: "",
};

const greeting = {
  full_name: "Rohit Baghel",
  logo_name: "Rohit Baghel",
  headline:
    "Full-stack engineer — real-time trading systems, and the automation that runs them.",
  subTitle:
    "4+ years building production trading, betting and commerce systems end to end. Five products taken from zero to live at DG3 since Sep 2024, together handling $13M in cumulative volume with a $1M peak day. In parallel I run KAVX, my own ecommerce brand, on an event-sourced agent platform I built that prices, advertises and restocks it unattended.",
  resumeLink: "/Rohit_Baghel_CV.pdf",
  resumeFileName: "Rohit_Baghel_CV.pdf",
  mail: "baghel.rohit99@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/Rohitbaghel",
  linkedin: "https://www.linkedin.com/in/rohitbaghel11/",
  gmail: "baghel.rohit99@gmail.com",
};

const achievements = {
  title: "Achievements",
  data: [
    {
      id: "kavx-business",
      claim: "Built and sold a real business, engineered end to end.",
      support:
        "Took KAVX from zero to its first 100 units sold at positive unit margin — every pricing move, ad bid and restock decided by the automation platform I wrote, behind a human approval gate.",
    },
    {
      id: "polymarket-bot",
      claim: "Shipped a profitable algorithmic trading system.",
      support:
        "Python + Rust bot for Polymarket's CLOB, running live and in profit: a Rust WebSocket hub (clob-ws-rs) feeding a shared-memory backend, a maker-grid market-making strategy, and a Kelly-sized risk layer validated on paper trading against live feeds before capital went in.",
    },
    {
      id: "dg3-products",
      claim: "Five production products in under two years.",
      support:
        "Sole front-end owner across DG3's betting and prediction-market line and backend owner on the newest, moving $13M in cumulative volume with a $1M peak day — including a full Azuro SDK v7 migration across a live sportsbook.",
    },
    {
      id: "flipkart-mcp",
      claim: "Made a marketplace agent-operable.",
      support:
        "Built a Model Context Protocol (MCP) server over the Flipkart Seller API, exposing catalog, orders, pricing, ads and analytics as typed, agent-callable tools — now the surface a live commerce business runs on.",
    },
  ],
};

const experience = {
  title: "Experience",
  data: [
    {
      id: "dg3",
      company: "DG3",
      companyUrl: "https://dg3.trade",
      role: "Full-Stack / Web3 Engineer",
      location: "New Delhi",
      date: "Sep 2024 – Present",
      summary:
        "Own the front end across five betting and prediction-market products; own front end and backend on the newest. Platform volume: $13M cumulative, $1M peak day.",
      sections: [
        {
          title: "DG Terminal",
          bullets: [
            "Built the Next.js / TypeScript / Zustand front end: order book, positions panel, and an \"edge finder\" that surfaces mispriced markets.",
            "Built the NestJS + PostgreSQL backend for open-positions, trades and summary APIs, plus background workers for data ingestion and order reconciliation.",
            "Engineered the real-time layer — parallel WebSocket subscriptions per open bucket, price caching, stale-market handling.",
          ],
        },
        {
          title: "DG3 Predictions",
          bullets: [
            "Integrated Polymarket CLOB and builder-relayer SDKs; socket-driven order book, PnL history and charting, cross-chain USDC deposit flows with relay support, resolution via UMA's Optimistic Oracle, ZeroDev account abstraction + Privy onboarding.",
          ],
        },
        {
          title: "DG3 Sportsbook",
          bullets: [
            "Primary front-end engineer for on-chain betting on Azuro and Overtime; led the Azuro SDK v7 / toolkit v6 migration; built the fraud-detection system (device fingerprinting, VPN/Tor/incognito detection, Cloudflare-fronted proxy routing, geo signals) and multi-currency wallets with Privy, Glide, Transak and LiFi swaps, extended to Solana and Sui.",
          ],
        },
        {
          title: "DegenieBet",
          bullets: [
            "First DG3 product. Next.js + Azuro SDK, RainbowKit, wagmi/viem, Redux Toolkit, Apollo/GraphQL against Azuro subgraphs. Odds rendering, bet slip, share/referral flows.",
          ],
        },
      ],
      bullets: [
        "Hardened the API with Helmet, HPP, input sanitisation and class-validator schemas; owned Sentry triage to closure, including a Zustand feedback loop causing React error #185 in production.",
      ],
    },
    {
      id: "kavx",
      company: "KAVX",
      role: "Founder / Engineer",
      location: "New Delhi",
      date: "Jul 2026 – Present",
      summary:
        "Own ecommerce brand on Flipkart, plus the event-sourced automation platform that runs it (~83 commits across a TypeScript monorepo).",
      bullets: [
        "Reached the first 100 units sold at positive unit margin with pricing, ads, inventory and daily ops running unattended.",
        "Automation engines: margin-aware bidirectional pricing with a return-aware margin floor and conversion-aware price cuts; SKU-profit ad bid engine with placement bids, search-term/keyword tuning and a conversion-gap guard; inventory as one stock pool allocated across listings (never replicated), Google Sheets two-way sync, IST-correct day bucketing; nightly Telegram digest, shipping-label cropping, daily picking list, scheduled via launchd.",
        "Decision pipeline built to be auditable and reversible: strategies emit ActionSuggested → a human approves → the action lands in a transactional outbox in the same DB transaction → executes with idempotency keys on every marketplace write. Guardrails refuse an approved batch that would oversell a stock pool, and verify the marketplace actually changed before recording success.",
        "Platform: multi-tenant PostgreSQL with row-level security and a withTenant() helper (RLS test suite guards the live tenant), append-only event store with an orders_view projection, money stored in integer minor units, BullMQ workers and node-cron, resilient pagination with 429/5xx retries. TDD throughout with Vitest, Turborepo monorepo, CI on every PR.",
      ],
    },
    {
      id: "nftfn",
      company: "NFTFN",
      companyUrl: "https://xtrading.exchange",
      role: "Full-Stack Developer",
      location: "Remote",
      date: "Mar 2023 – Sep 2024",
      bullets: [
        "Built the trading UX for an order-book NFT perpetual DEX in React, wagmi and Web3.",
        "WebSockets for real-time order updates, Subgraph for efficient on-chain reads.",
        "Reusable component system, testing standards, code review and mentorship.",
      ],
    },
    {
      id: "web3-citadel",
      company: "Web3 Citadel",
      role: "Software Developer",
      location: "Remote",
      date: "Apr 2022 – Mar 2023",
      bullets: [
        "Built DApps in React, Next.js, TypeScript, Tailwind and Web3.js with a reusable component library; integrated REST + on-chain data; led feature delivery and debugging.",
      ],
    },
  ],
};

const skills = {
  title: "Skills",
  groups: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Zustand",
        "Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "SCSS",
        "Radix UI",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Data",
      items: [
        "NestJS",
        "Node.js",
        "Express",
        "PostgreSQL (row-level security)",
        "Prisma",
        "MongoDB",
        "Redis",
        "REST",
        "GraphQL",
        "Socket.IO",
        "BullMQ",
        "event sourcing",
        "transactional outbox",
        "idempotency",
        "Turborepo",
      ],
    },
    {
      title: "Blockchain / Web3",
      items: [
        "viem",
        "wagmi",
        "ethers.js",
        "Web3.js",
        "Subgraph",
        "EVM chains",
        "Solana",
        "Sui",
        "account abstraction (ZeroDev, permissionless)",
        "Privy",
        "Azuro",
        "Overtime",
        "Polymarket CLOB",
        "UMA Optimistic Oracle",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "Model Context Protocol server design",
        "agent-callable tool schemas",
        "human-in-the-loop approval loops",
        "algorithmic trading strategies and risk sizing",
        "cron/launchd scheduling",
        "Google Sheets and Telegram Bot APIs",
      ],
    },
    {
      title: "Real-time & Ops",
      items: [
        "WebSocket feeds",
        "order books",
        "price caching",
        "stale-data handling",
        "Sentry",
        "WebEngage",
        "Docker (multi-stage)",
        "CI/CD",
        "Git",
        "Vitest",
        "TDD",
        "security hardening (Helmet, HPP, RLS, input sanitisation)",
      ],
    },
    {
      title: "Languages",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Rust (working level)",
        "SQL",
      ],
    },
  ],
};

const education = {
  title: "Education",
  data: [
    {
      id: "masai",
      degree: "Full-Stack Web Development (Bootcamp)",
      school: "Masai School",
      location: "Bangalore",
      date: "Jul 2021 – Feb 2022",
    },
    {
      id: "du",
      degree: "BA English",
      school: "University of Delhi",
      location: "New Delhi",
      date: "2020 – 2023",
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "Selected systems shipped end to end — trading automation, commerce agents, and storefronts.",
};

const projects = {
  data: [
    {
      id: "polymarket-bot",
      name: "Polymarket Trading Bot (Mar – May 2026)",
      description:
        "Algorithmic market-making system for Polymarket's CLOB. Rust clob-ws-rs crate feeding a shared-memory backend consumed by a Python core, shipped as a multi-stage Docker build. Maker-grid strategy with its own order manager and PnL settler; risk layer with Kelly-multiplier sizing, cluster protection, time-window and RSI entry filters.",
      output:
        "Running live and profitable, with written PnL-bleed audits after paper-trading validation against live feeds.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "Rust", iconifyClass: "logos-rust" },
      ],
    },
    {
      id: "kavx-mcp",
      name: "KAVX Agent + MCP → SaaS",
      description:
        "Event-sourced commerce automation platform: Flipkart Seller MCP server exposing the marketplace as agent-callable tools, autonomous pricing/ads/inventory loops behind a human approval gate, multi-tenant Postgres with RLS.",
      output:
        "Runs a live ecommerce business unattended; being generalised into a multi-tenant SaaS for online sellers — the RLS tenancy and marketplace-provider abstraction were designed for that from the start.",
      languages: [
        { name: "TypeScript", iconifyClass: "logos-typescript" },
        { name: "PostgreSQL", iconifyClass: "logos-postgresql" },
        { name: "MCP", iconifyClass: "mdi:api" },
      ],
    },
    {
      id: "newclickbeauty",
      name: "NewClickBeauty (Apr – Aug 2026)",
      description:
        "Luxury cosmetics storefront: Next.js App Router, Prisma/PostgreSQL, Auth.js email-OTP with USER/ADMIN roles, Zustand cart, PhonePe payments.",
      output:
        "A complete DTC sales channel shipped solo — verified-purchase reviews with transactional aggregate caching, an admin moderation and feedback inbox, technical SEO (SSR, schema, collections), consent-first GA4.",
      languages: [
        { name: "Next.js", iconifyClass: "logos-nextjs" },
        { name: "Prisma", iconifyClass: "simple-icons:prisma" },
        { name: "PostgreSQL", iconifyClass: "logos-postgresql" },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  achievements,
  experience,
  skills,
  education,
  projectsHeader,
  projects,
};
