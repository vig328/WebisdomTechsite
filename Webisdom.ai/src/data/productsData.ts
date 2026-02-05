import { 
  ExternalLink, CheckCircle, Sparkles, Github, Code2, Terminal, 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, Home, Factory, Truck, Gavel 
} from "lucide-react";

export const products = [
  // ==========================================
  // 1. HOSPITALITY AI
  // ==========================================

  {
    id: "ai-chieftain",
    title: "AI Chieftain",
    subtitle: "Enterprise-Grade Autonomous Hotel Ecosystem",
    description: "A monolithic, cloud-native hospitality operating system that leverages deep learning and IoT orchestration to automate end-to-end hotel logistics.",
    longDescription: "AI Chieftain represents the zenith of hospitality technology, functioning not merely as a management tool but as the central autonomic nervous system for enterprise-grade properties. Built upon a microservices architecture, it decouples the traditional monolith of hotel operations into scalable, independent modules—housekeeping, concierge, inventory, and energy management—all orchestrated by a central AI core.\n\nAt its heart lies a proprietary Predictive Intent Engine (PIE) built on TensorFlow, which aggregates petabytes of historical guest data, local event APIs, and weather patterns to forecast guest needs with 94% accuracy before a request is even voiced. This allows for hyper-personalized experiences, such as pre-adjusting room climate via IoT protocols (MQTT/CoAP) based on the guest's known preferences from previous stays across global properties.\n\nThe platform supports a headless commerce structure, allowing for seamless API-first integrations with third-party vendors, from robotic butler services to automated valet systems. By utilizing edge computing nodes within the property, AI Chieftain processes sensitive biometric data for contactless check-ins locally, ensuring GDPR/CCPA compliance while reducing latency to microseconds. It transforms the physical hotel into a responsive, digital entity that self-optimizes for energy consumption, staff allocation, and revenue maximization in real-time.",
    industry: "hospitality",
    service: "enterprise-ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Hospitality AI Infrastructure",
    status: "Live Platform (Enterprise)",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    features: [
      "Autonomous Room Allocation with Fuzzy Logic",
      "Real-time Sentiment Analysis via NLP Transformers",
      "IoT Mesh Network Orchestration (Zigbee/Z-Wave)",
      "Predictive Maintenance for HVAC & Utilities",
      "Biometric & Geofenced Contactless Check-in",
      "Robotic Process Automation (RPA) for Auditing"
    ],
    technologies: ["Deep Learning (CNNs/RNNs)", "GraphQL APIs", "Edge Computing", "MQTT/CoAP", "React Native", "Kubernetes"],
    benefits: ["38% Reduction in OpEx via Automation", "Sub-second Latency in Guest Requests", "99.99% Uptime SLA", "Carbon Footprint Reduction via Smart Energy"],
    useCases: ["Luxury Mega-Resorts", "Global Hotel Chains", "Smart Cities Hospitality"],
    stats: ["30% Lower OpEx", "4.8/5 Avg Rating", "200ms Response Time"],
    integrations: ["Oracle Opera OWS", "Salesforce HEDA", "SAP HANA", "Lutron IoT"],
    testimonials: [
      {
        name: "Sarah J.",
        role: "Global VP of Operations, Marriott International",
        quote: "The scalability of AI Chieftain's microservices architecture allowed us to deploy complex IoT automations across 40 properties in under a quarter.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the system handle API rate limits with legacy PMS like Oracle Opera?",
        a: "We utilize an intelligent middleware layer with leaky bucket algorithms to throttle requests and cache non-critical data (Redis), ensuring we never hit the API limits of legacy OWS interfaces while maintaining data consistency."
      },
      {
        q: "What is the security protocol for biometric data storage?",
        a: "All biometric data is tokenized using SHA-256 hashing and stored in isolated cold storage buckets. We employ Zero Trust Architecture (ZTA) where no device or user is trusted by default, requiring mutual TLS (mTLS) for all internal communications."
      },
      {
        q: "Can the NLP engine handle dialectal nuances in real-time?",
        a: "Yes. Our conversational AI is built on a Transformer-based Large Language Model (LLM) fine-tuned on hospitality-specific datasets, capable of distinguishing between 30+ languages and regional dialects with intent classification accuracy exceeding 98%."
      },
      {
        q: "Does the IoT module support legacy hardware?",
        a: "AI Chieftain includes a hardware-agnostic bridge that translates proprietary protocols (like Modbus or BACnet) into standardized JSON payloads, allowing modern AI control over legacy HVAC and lighting systems."
      }
    ]
  },
  {
    id: "ai-pms",
    title: "AI PMS",
    subtitle: "Next-Gen Cognitive Property Management",
    description: "A SaaS-based, algorithmic Property Management System utilizing stochastic modeling for dynamic revenue management and automated front-desk operations.",
    longDescription: "The AI PMS redefines the traditional Property Management System by shifting from a system of record to a system of intelligence. Unlike static legacy databases, this solution leverages high-velocity data ingestion pipelines to feed a continuous learning engine. It unifies the fragmented hospitality tech stack—CRS, CRM, POS, and Channel Managers—into a single, coherence data lake.\n\nThe core differentiator is the Dynamic Pricing Engine, which employs stochastic modeling and regression analysis to process market signals (competitor rates, flight search volume, local event APIs) in real-time. This allows the system to adjust Room Rate configurations dynamically up to 50 times a day, maximizing RevPAR (Revenue Per Available Room) with algorithmic precision.\n\nFunctionally, it automates the mundane: 'Night Audit' processes are replaced by continuous, real-time ledger balancing scripts. Front desk operations are streamlined via a Progressive Web App (PWA) interface that allows staff to manage check-ins from any device. The backend is built on a serverless architecture (AWS Lambda/Azure Functions), ensuring infinite scalability during high-traffic booking windows without the need for manual server provisioning.",
    industry: "hospitality",
    service: "saas-platform",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Algorithmic Revenue Management",
    status: "Beta / Demo",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    features: [
      "Algorithmic Dynamic Pricing (Bayesian Models)",
      "2-Way XML Channel Manager Sync",
      "Headless Booking Engine API",
      "Automated PCI-DSS Compliant Payment Routing",
      "Self-Healing Database Clusters",
      "Real-time Occupancy Heatmaps"
    ],
    technologies: ["Serverless Compute", "Python (Pandas/Scikit-learn)", "Node.js", "PostgreSQL", "WebSocket"],
    benefits: ["22% Increase in RevPAR", "Zero Downtime Deployments", "Automated OTA Parity Management"],
    useCases: ["Boutique Chains", "High-Volume Hostels", "Serviced Apartments"],
    stats: ["50% Faster Check-in", "20% Higher RevPAR", "99.9% Sync Accuracy"],
    integrations: ["Stripe Connect", "Expedia EPS", "Booking.com Connectivity Partner", "Xero"],
    testimonials: [
      {
        name: "David C.",
        role: "Director of Revenue, Hilton Franchise",
        quote: "The predictive analytics module replaced our entire Excel-based forecasting workflow. The regression models for seasonal pricing are frighteningly accurate.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the system handle concurrency during flash sales?",
        a: "We utilize optimistic locking mechanisms on our database rows and an event-driven architecture (Kafka) to queue booking requests, ensuring zero overbookings even when thousands of requests hit the availability endpoint simultaneously."
      },
      {
        q: "Is the data compliant with EU data sovereignty laws?",
        a: "Yes. We offer region-locked database instances. A customer in the EU will have their data pinned to our Frankfurt or Dublin availability zones to strictly adhere to GDPR data residency requirements."
      },
      {
        q: "What is the latency for channel manager updates?",
        a: "Our XML integration pushes inventory updates to OTAs (like Booking.com and Expedia) via webhooks in under 5 seconds, virtually eliminating the risk of double bookings caused by sync lag."
      },
      {
        q: "Do you support multi-tenancy for management groups?",
        a: "Absolutely. The architecture is natively multi-tenant, allowing a single root admin to manage granular RBAC (Role-Based Access Control) policies across unlimited child properties with consolidated financial reporting."
      }
    ]
  },
  {
    id: "restaurant-agent",
    title: "Restaurant AI Agent",
    subtitle: "Conversational Voice & NLP Automation",
    description: "A low-latency, conversational AI agent capable of handling high-concurrency voice interactions for complex order taking and table management.",
    longDescription: "The Restaurant AI Agent is a sophisticated application of Conversational AI designed to handle the chaotic acoustic environment of food service. It utilizes a multi-stage pipeline comprising Automatic Speech Recognition (ASR), Natural Language Understanding (NLU), and Text-to-Speech (TTS) synthesis to deliver a human-like phone experience.\n\nThe ASR module is fortified with Digital Signal Processing (DSP) for noise cancellation, allowing the agent to accurately parse speech even when the caller is in a noisy environment. The NLU layer utilizes Contextual Slot Filling to handle non-linear conversations—managing complex order modifiers (e.g., 'extra spicy', 'sauce on the side'), dietary restrictions, and upsell logic dynamically.\n\nBeyond simple ordering, the agent integrates via WebSocket APIs directly into the restaurant's Point of Sale (POS) and Table Management System (TMS). It performs real-time database queries to check ingredient availability or table slots, ensuring it never confirms an order that cannot be fulfilled. The system supports SIP trunking for high-fidelity voice transfer and can scale to handle hundreds of concurrent calls during peak dinner service without a single dropped packet.",
    industry: "food-tech",
    service: "nlp-voice-automation",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Conversational AI / IVR",
    status: "Demo / Pilot",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    features: [
      "Real-time ASR with Acoustic Echo Cancellation",
      "Context-Aware NLU for Complex Modifiers",
      "Direct POS Injection via APIs",
      "Dynamic Upselling Logic Engine",
      "Sentiment-Adaptive Voice Tone",
      "Omnichannel Handoff (Voice to SMS)"
    ],
    technologies: ["BERT/Transformer Models", "Twilio Programmable Voice", "WebSockets", "Redis", "Google Dialogflow CX"],
    benefits: ["100% Call Answer Rate", "15% Higher Ticket Size via AI Upselling", "Elimination of 'Hold' Times"],
    useCases: ["Fine Dining Reservations", "High-Volume Cloud Kitchens", "QSR Drive-Thrus"],
    stats: ["Zero Missed Calls", "15% Higher Ticket Size", "<5% Fallback Rate"],
    integrations: ["Toast POS API", "OpenTable", "UberEats Webhooks", "Square"],
    testimonials: [
      {
        name: "Marco P.",
        role: "Owner, Trattoria Milano",
        quote: "The AI handles peak Friday night traffic better than my best host. It seamlessly injects orders into our Toast POS, complete with kitchen modifiers.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the NLP handle heavy accents or slurred speech?",
        a: "Our model is trained on a diverse phoneme dataset encompassing extensive regional accents. We utilize a confidence threshold score; if confidence drops below 70%, the system triggers a polite clarification prompt or executes a seamless fallback to a human agent."
      },
      {
        q: "Can it distinguish between 'Book a table' and 'Order for delivery'?",
        a: "Yes. The Intent Classification layer is rigorously trained to disambiguate overlapping intents. It uses entity extraction to identify specific keywords (time, date, address vs. menu items) to route the conversation into the correct logic flow immediately."
      },
      {
        q: "What is the latency between the customer speaking and the AI responding?",
        a: "We have optimized the pipeline to achieve a Turn-Around Time (TAT) of under 800 milliseconds. We use streaming recognition (processing audio chunks in real-time) rather than waiting for the end of the sentence to begin processing."
      },
      {
        q: "Does it support menu synchronization?",
        a: "Yes. The agent runs a nightly cron job to sync with your POS menu database. If an item is marked '86' (out of stock) in the POS, the AI will immediately stop offering it and suggest alternatives during the call."
      }
    ]
  },
  // ==========================================
  // 2. REVENUE AI
  // ==========================================

  {
    id: "rms",
    title: "AI Revenue System",
    subtitle: "Stochastic Revenue Optimization Engine",
    description: "A hyper-intelligent yield management platform utilizing Bayesian inference and ensemble learning to maximize RevPAR through real-time elasticity modeling.",
    longDescription: "This Revenue Management System (RMS) represents a paradigm shift from reactive pricing to predictive yield maximization. Built on a microservices architecture, it ingests multi-variate data streams—including competitor BAR (Best Available Rate), micro-weather patterns, flight manifest APIs, and historical booking curves—into a centralized Data Lakehouse.\n\nThe core intelligence engine utilizes Gradient Boosted Decision Trees (XGBoost) and Long Short-Term Memory (LSTM) neural networks to model price elasticity at a granular level. By calculating the precise probability of conversion at every price point, the system autonomously executes rate adjustments via 2-way XML connectivity to your PMS and Channel Managers. It supports complex inventory segmentation, allowing for distinct pricing strategies across corporate, wholesale, and transient buckets, ensuring that Average Daily Rate (ADR) is optimized without sacrificing Occupancy.\n\nThe system features a self-correcting feedback loop; every booking (or lack thereof) is fed back into the training dataset, allowing the model to refine its alpha-beta pruning strategies daily to reduce forecast error rates to under 2%.",
    industry: "revenue-operations",
    service: "predictive-analytics",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Algorithmic Yield Management",
    status: "Demo / Pilot",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    features: [
      "Real-time Price Elasticity Modeling",
      "Competitor Rate Shopping (15-min intervals)",
      "Group Displacement Analysis",
      "Overbooking Optimization Logic",
      "Automated XML Rate Distribution",
      "Wash/No-Show Probability Scoring"
    ],
    technologies: ["Python (Scikit-Learn)", "Apache Spark", "Time-Series Forecasting (ARIMA/Prophet)", "GraphQL", "Snowflake DB"],
    benefits: ["18-25% Uplift in RevPAR", "Elimination of Rate Parity Errors", "Granular Market Segmentation Strategy", "Automated Inventory Controls"],
    useCases: ["Global Hotel Chains", "Commercial Airlines", "Car Rental Fleets"],
    stats: ["15% Revenue Uplift", "98% Forecast Accuracy", "<50ms Calculation Speed"],
    integrations: ["SiteMinder Exchange", "RateGain", "SynXis CR", "Opera PMS"],
    testimonials: [
      {
        name: "Rajiv M.",
        role: "VP of Revenue Strategy, IHCL",
        quote: "The forecasting module picked up on a demand anomaly two weeks before our manual team did. We capitalized on the surge and broke our monthly ADR record.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the system handle 'Black Swan' events where historical data is irrelevant?",
        a: "The model employs an Anomaly Detection layer that switches from historical regression to short-term momentum trading algorithms when variance exceeds 3 sigma, allowing it to react to sudden market shocks instantly."
      },
      {
        q: "Can I implement 'Hurdle Rates' for specific channels?",
        a: "Yes. You can define Last Room Value (LRV) thresholds and hard hurdles, ensuring that low-yield OTA channels are automatically closed off during high-compression dates."
      },
      {
        q: "What represents the data latency?",
        a: "Our ETL pipelines run in near real-time. Competitor rate shops are cached via Redis clusters, ensuring the dashboard reflects market changes with less than 60 seconds of latency."
      },
      {
        q: "Is the integration purely 1-way?",
        a: "No, it is a full 2-way integration. We pull inventory/occupancy data from your PMS and push back calculated rate grid updates via SOAP/REST APIs."
      }
    ]
  },
  {
    id: "price-surger",
    title: "Dynamic Price Surger",
    subtitle: "Geospatial Event-Driven Pricing",
    description: "An event-horizon monitoring system that autonomously triggers surge pricing protocols based on geospatial demand signals and API triggers.",
    longDescription: "The Dynamic Price Surger is designed to capture fleeting revenue opportunities generated by external anomalies. Unlike standard RMS tools that look at booking pace, the Surger looks continuously outward. It utilizes a geospatial scraping engine to monitor ticket sales on platforms like Ticketmaster, local weather APIs, and even flight delay databases to detect compression events before they hit the booking engine.\n\nThe logic is governed by a Rules Engine (Drools-based) that executes 'If-This-Then-That' (IFTTT) workflows. For example, 'IF Taylor Swift Concert Ticket Sales > 90% AND Rain Probability < 20%, THEN Increase ADR by 40%'. This logic is processed on Edge nodes to ensure zero latency implementation.\n\nDesigned for high-velocity environments like ride-sharing or event hospitality, the system utilizes Webhooks to instantly update pricing tables across all distributed channels. It effectively automates the 'greed' factor in revenue management, ensuring you never sell a premium asset at a discount during a demand spike.",
    industry: "revenue-operations",
    service: "event-stream-processing",
    url: "#",
    category: "High-Frequency Pricing",
    status: "Beta Access",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Hyper-local Event API Ingestion",
      "Geospatial Demand Heatmapping",
      "Weather-Triggered Pricing Rules",
      "Surge Multiplier Logic",
      "API-First Headless Architecture",
      "Automated Fallback/Decay Pricing"
    ],
    technologies: ["Node.js", "Apache Kafka", "Geospatial Databases (PostGIS)", "Scrapy", "AWS Lambda"],
    benefits: ["Capture 100% of Compression ROI", "Automated Reaction to Market Shocks", "Zero Manual Intervention Required"],
    useCases: ["Event Ticketing", "Ride-Sharing Fleets", "Urban Hotels", "Logistics"],
    stats: ["Capture 100% Spikes", "Instant ROI", "400% ROI on Peak Days"],
    integrations: ["Ticketmaster Discovery API", "OpenWeatherMap", "Uber API", "Google Events"],
    testimonials: [
      {
        name: "Lisa T.",
        role: "Event Operations Director",
        quote: "The system detected a conference announcement before it was even in the news and adjusted our rates. We sold out at 3x our normal rate.",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it support decay pricing (reverse surge)?",
        a: "Yes. The algorithm can be configured to slash prices incrementally as an event start time approaches to clear expiring inventory (e.g., last-minute hotel rooms or perishables)."
      },
      {
        q: "How accurate is the event tracking?",
        a: "We aggregate data from 14 distinct global event APIs and cross-reference with social media sentiment velocity to confirm the scale of an event before triggering a surge."
      },
      {
        q: "Can I set manual overrides?",
        a: "Absolutely. A 'Kill Switch' is available in the admin panel to freeze rates instantly, and all automated rules adhere to pre-defined floor and ceiling price constraints."
      },
      {
        q: "How does it handle API rate limits?",
        a: "We utilize rotating IP proxies and exponential backoff strategies to scrape external data sources without getting blocked or throttled."
      }
    ]
  },
  {
    id: "competitor-spy",
    title: "Competitor Spy AI",
    subtitle: "Competitive Intelligence Scraping Bot",
    description: "A stealth-mode data pipeline that aggregates, parses, and analyzes competitor inventory structures and pricing strategies in real-time.",
    longDescription: "Competitor Spy AI is an offensive market intelligence tool built on a robust web-scraping infrastructure. It utilizes a fleet of headless browsers (Puppeteer/Selenium) orchestrated via Kubernetes to navigate competitor booking engines, imitating human behavior to bypass anti-bot defenses (Cloudflare/Akamai).\n\nThe system extracts unstructured DOM elements—prices, sold-out badges, length-of-stay restrictions, and hidden inclusions—and parses them into structured JSON datasets. This data is fed into a visualization engine that renders price-positioning curves relative to your competitive set (Compset).\n\nBeyond simple price tracking, the AI analyzes 'Inventory Depletion Rates' to estimate your competitor's occupancy levels. If a competitor closes availability for a specific room type, the system alerts you immediately via Slack or Webhook, prompting you to yield up your own rates. It turns the opaque web into a transparent dataset.",
    industry: "market-intelligence",
    service: "etl-data-pipeline",
    url: "#",
    category: "Competitive Intelligence",
    status: "Live Enterprise Tool",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    features: [
      "Residential Proxy Network (Anti-Detect)",
      "DOM Parsing & Unstructured Data ETL",
      "Hidden Cost Calculation (Taxes/Fees)",
      "Inventory Depletion Estimation",
      "Real-time Parity Violation Alerts",
      "Historical Trend Visualization"
    ],
    technologies: ["Selenium Grid", "Puppeteer", "Docker", "ElasticSearch", "Computer Vision (OCR)"],
    benefits: ["Maintain Dominant Market Position", "Eliminate Undercutting", "Predict Competitor Strategy", "Automated Parity Enforcement"],
    useCases: ["E-commerce Retail", "Hospitality", "SaaS Pricing Analysis"],
    stats: ["Monitor 500+ URLs", "99.9% Uptime", "Zero IP Bans"],
    integrations: ["Slack Webhooks", "Microsoft PowerBI", "Tableau", "Google Sheets API"],
    testimonials: [
      {
        name: "Ken R.",
        role: "Director of Sales",
        quote: "I know when my competitor runs a flash sale before their marketing email even goes out. It gives us a massive tactical advantage.",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you bypass CAPTCHAs and Bot Detection?",
        a: "We utilize a rotating network of over 10 million residential IPs and AI-driven CAPTCHA solving services, ensuring our scrapers appear as legitimate organic traffic."
      },
      {
        q: "Can it track prices inside a login wall?",
        a: "Yes, provided you supply credentials. The bot can manage session cookies and JWT tokens to navigate behind authentication walls to scrape member-only pricing."
      },
      {
        q: "Is the data exportable to my data warehouse?",
        a: "Yes. We offer direct connectors to Snowflake, BigQuery, and AWS S3, allowing you to ingest the raw competitive data directly into your internal BI stack."
      },
      {
        q: "Does it detect 'drip pricing'?",
        a: "Yes. The bot traverses the full checkout flow up to the payment page to capture hidden resort fees, cleaning fees, and taxes that aren't visible on the search results page."
      }
    ]
  },

  // ==========================================
  // 3. FINANCE AI (FinTech)
  // ==========================================
  {
    id: "ferozee-avatar",
    title: "AI Avatar (Ferozee)",
    subtitle: "Hyper-Realistic Conversational Interface",
    description: "A multimodal AI avatar combining Generative Adversarial Networks (GANs) and LLMs to deliver empathetic, human-level customer interactions.",
    longDescription: "Ferozee is a breakthrough in Human-Computer Interaction (HCI), rendering a photorealistic 3D avatar that communicates via voice and gesture in real-time. Built on WebGL and WebRTC standards, Ferozee runs directly in the browser without heavy plugin downloads.\n\nThe backend utilizes a complex pipeline: User audio is transcribed via ASR, processed by a Transformer-based LLM (like GPT-4 or bespoke financial models) to generate a response, and then synthesized into speech. Crucially, a 'Viseme Generation' neural network maps the phonemes of the speech to the 3D mesh geometry of the avatar's face, creating perfect lip-sync and facial micro-expressions (eyebrow raises, nods) that convey empathy.\n\nDesigned for FinTech, Ferozee can securely authenticate users, visualize portfolio data on-screen while explaining it, and guide users through complex KYC (Know Your Customer) flows, effectively replacing static FAQs with an interactive digital banker.",
    industry: "fintech",
    service: "generative-ai",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Digital Human Interface",
    status: "Live Demo",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    features: [
      "Real-time Lip Sync (Viseme Mapping)",
      "Sentiment-Aware Facial Expressions",
      "Low-Latency WebRTC Streaming",
      "Multimodal Input (Voice/Text/Touch)",
      "Contextual Memory Retention",
      "Brand-Specific Avatar Customization"
    ],
    technologies: ["TensorFlow.js", "WebGL/Three.js", "WebRTC", "Wav2Lip GANs", "Azure Cognitive Services"],
    benefits: ["400% Increase in User Engagement", "Humanizing Digital Banking", "24/7 Advisory Availability", "Reduced Customer Support Churn"],
    useCases: ["Virtual Private Banking", "Insurance Claims Processing", "Elderly Care Companions"],
    stats: ["4x Engagement", "200ms Latency", "30+ Languages"],
    integrations: ["React Native SDK", "Flutter", "Salesforce CRM", "Twilio"],
    testimonials: [
      {
        name: "Jenny K.",
        role: "CMO, NeoBank",
        quote: "Ferozee bridged the trust gap. Customers are far more likely to buy complex insurance products when 'someone' explains it to them face-to-face.",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg"
      }
    ],
    faqs: [
      {
        q: "What is the bandwidth requirement for the end-user?",
        a: "We utilize adaptive bitrate streaming. The avatar renders locally on the client's GPU (using WebGL) while only the voice and animation data stream, keeping bandwidth usage below 500kbps."
      },
      {
        q: "Can the avatar hallucinate financial advice?",
        a: "We implement 'Guardrails' and RAG (Retrieval-Augmented Generation) architecture. The AI is restricted to your specific knowledge base and cannot generate advice outside of approved compliance documents."
      },
      {
        q: "Is it possible to clone a real CEO's face?",
        a: "Yes. Using photogrammetry and voice cloning technology, we can create a digital twin of your CEO or brand ambassador to serve as the interface."
      },
      {
        q: "How does it handle mobile devices?",
        a: "The renderer is highly optimized for mobile GPUs (iOS Metal / Android Vulkan), ensuring 60fps performance on standard smartphones."
      }
    ]
  },
  {
    id: "loan-agent",
    title: "Loan Processing AI",
    subtitle: "Automated Underwriting & Risk Engine",
    description: "An end-to-end loan origination AI that ingests documents, verifies identity, and computes credit risk scores in milliseconds using decision forests.",
    longDescription: "This solution automates the friction-heavy loan origination process. It begins with an Intelligent Document Processing (IDP) layer that uses Computer Vision to capture and rectify images of ID cards, pay stubs, and tax returns. Optical Character Recognition (OCR) extracts key fields (SSN, Income, Address) with >99% accuracy.\n\nThe extracted data is cross-referenced against external bureaus (Experian/Equifax) and internal fraud databases. The core innovation is the Risk Engine: a Random Forest classifier trained on millions of historical loan outcomes. It analyzes thousands of data points—including non-traditional metrics like mobile metadata or transaction velocity—to generate a credit confidence score.\n\nThe system outputs a binary 'Approve/Reject' decision or routes borderline cases to human underwriters with highlighted risk factors, reducing the 'Time-to-Decision' from days to seconds.",
    industry: "fintech",
    service: "intelligent-automation",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Credit Risk AI",
    status: "Enterprise Demo",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    features: [
      "Multi-Format OCR (PDF/JPG/TIFF)",
      "Liveness Detection for KYC",
      "Synthetic Fraud Detection",
      "Alternative Credit Scoring Models",
      "Bank Statement Parsing (JSON Output)",
      "Immutable Audit Logs via Blockchain"
    ],
    technologies: ["Tesseract OCR", "Google Vision API", "Python (Pandas)", "XGBoost", "Hyperledger Fabric (Audit)"],
    benefits: ["90% Reduction in OpEx", "Sub-second Loan Approvals", "30% Reduction in Default Rates", "Standardized Risk Policy"],
    useCases: ["Micro-Lending", "Mortgage Origination", "Buy Now Pay Later (BNPL)"],
    stats: ["90% Faster Decisions", "Zero Manual Entry", "99.8% OCR Accuracy"],
    integrations: ["Plaid (Bank Auth)", "Experian Connect", "DocuSign API", "Salesforce Financial Cloud"],
    testimonials: [
      {
        name: "Elena R.",
        role: "Chief Risk Officer",
        quote: "The ability to parse unstructured tax returns and map them directly into our risk model has saved us thousands of man-hours per month.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you handle document tampering (e.g., Photoshopped pay stubs)?",
        a: "Our Image Forensics module analyzes metadata (EXIF), Error Level Analysis (ELA), and pixel-grid inconsistencies to flag documents that have been digitally altered."
      },
      {
        q: "Is the decision logic explainable to regulators?",
        a: "Yes. We use Explainable AI (XAI) frameworks (like SHAP values) to generate a 'Reason Code' for every decision, ensuring compliance with the Equal Credit Opportunity Act (ECOA)."
      },
      {
        q: "Does it support bank statement analysis?",
        a: "Yes. It categorizes line-item transactions to calculate true cash flow, debt-to-income ratio, and recurring obligations automatically."
      },
      {
        q: "Is user data encrypted?",
        a: "All PII (Personally Identifiable Information) is encrypted at rest using AES-256 and in transit via TLS 1.3. We perform regular penetration testing to ensure SOC2 Type II compliance."
      }
    ]
  },
  {
    id: "compliance-agent",
    title: "Compliance AI Agent",
    subtitle: "RegTech Automation & Monitoring",
    description: "A continuous monitoring system utilizing Natural Language Understanding (NLU) to audit communications and transactions against evolving regulatory frameworks.",
    longDescription: "The Compliance AI Agent acts as an automated 'second line of defense' for financial institutions. It ingests massive volumes of unstructured data—internal emails, Slack chats, and voice call transcripts—and analyzes them using NLP to detect indicators of Insider Trading, Bribery, or Money Laundering (AML).\n\nSimultaneously, the agent monitors regulatory feeds (SEC, FINRA, ESMA) to keep its rulebook up to date. It maps internal policy documents against these external regulations using a Knowledge Graph, identifying gaps in compliance coverage.\n\nFor transaction monitoring, it uses Unsupervised Learning to detect anomalies in payment flows that deviate from established user patterns, flagging potential structuring or sanctions violations in real-time. This proactive approach transforms compliance from a retrospective audit into a real-time shield.",
    industry: "fintech",
    service: "regtech-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Regulatory Compliance AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    features: [
      "NLP-based Surveillance of Comms",
      "Real-time Sanctions Screening",
      "Regulatory Change Management",
      "Automated SAR (Suspicious Activity Report) Generation",
      "Policy Knowledge Graph",
      "Risk-Weighted Alerting"
    ],
    technologies: ["BERT (NLP Models)", "Graph Databases (Neo4j)", "Elastic Stack (ELK)", "Apache Flink"],
    benefits: ["100% Audit Readiness", "Mitigation of Heavy Fines", "Reduction in False Positive Alerts", "Holistic Surveillance"],
    useCases: ["Hedge Funds", "Crypto Exchanges", "NeoBanks"],
    stats: ["100% Audit Trail", "Real-time Alerts", "60% Fewer False Positives"],
    integrations: ["Smarsh", "Global Relay", "Refinitiv World-Check", "Internal SQL DBs"],
    testimonials: [
      {
        name: "James L.",
        role: "Chief Compliance Officer",
        quote: "It processes more data in an hour than my team of 20 analysts could process in a week. The reduction in false positives is a game changer.",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle false positives in transaction monitoring?",
        a: "The system uses feedback loops. When an analyst dismisses an alert, the model learns from this interaction, adjusting its weighting parameters to ignore similar benign patterns in the future."
      },
      {
        q: "Can it monitor encrypted communication apps like WhatsApp?",
        a: "Yes, provided the enterprise version of the app is used and archived. We ingest the archived logs to perform the same NLP analysis as we do on email."
      },
      {
        q: "Is the audit trail immutable?",
        a: "Yes. All flagged events and subsequent analyst actions are hashed and stored in a Write-Once-Read-Many (WORM) compliant storage format to satisfy regulatory evidence standards."
      },
      {
        q: "Does it support multi-jurisdictional rules?",
        a: "Yes. The Knowledge Graph segments rules by region, applying GDPR rules to EU customer data and CCPA rules to California data simultaneously."
      }
    ]
  },

  // ==========================================
  // 4. COWORKING AUTOMATION (PropTech)
  // ==========================================
  {
    id: "coworking-agent",
    title: "Coworking OS Agent",
    subtitle: "Autonomous Space Management",
    description: "A unified operating system for flex-space, integrating IoT access control, CRM, and billing automation into a single AI-driven workflow.",
    longDescription: "The Coworking Agent is the digital backbone of modern flexible workspaces. It abstracts the complexity of running a shared office by automating the entire member lifecycle. From the moment a lead books a tour via the chatbot, the system creates a CRM entry, schedules the visit, and follows up automatically.\n\nUpon signup, the agent triggers a 'Provisioning Workflow': it generates a digital contract via API, processes the deposit via Stripe, creates a Wi-Fi login (RADIUS server integration), and grants physical door access via smart lock APIs (Kisi/Salto)—all without human intervention.\n\nOperationally, it manages resource inventory (meeting rooms, projectors) using conflict-free scheduling algorithms. It generates consolidated invoices that include rent, print usage, and coffee bar purchases, sending them out on billing cycles and automatically retrying failed payments.",
    industry: "proptech",
    service: "space-as-a-service",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Workspace Automation",
    status: "Demo / Pilot",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    features: [
      "Automated Contract & Invoicing Workflow",
      "IoT Door Access Provisioning",
      "Meeting Room Conflict Resolution",
      "Wi-Fi Credential Management",
      "Lead-to-Member Auto-Conversion",
      "White-labeled Member App"
    ],
    technologies: ["Node.js", "React Native", "MQTT (IoT)", "Stripe Connect", "PostgreSQL"],
    benefits: ["Save 20+ Admin Hours/Week", "99% Revenue Collection Rate", "Seamless Member Onboarding", "Real-time Occupancy Data"],
    useCases: ["Co-working Franchises", "University Innovation Hubs", "Shared Corporate Offices"],
    stats: ["95% Auto-Invoicing", "Higher Retention", "Zero Double Bookings"],
    integrations: ["HubSpot CRM", "Xero/Quickbooks", "Kisi / Salto Systems", "Google Calendar API"],
    testimonials: [
      {
        name: "Mike T.",
        role: "Community Manager, WeWork Competitor",
        quote: "It handles everything from unlocking the front door to collecting the rent. I can finally focus on building the community instead of chasing invoices.",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ],
    faqs: [
      {
        q: "What happens if a member stops paying?",
        a: "The system automatically revokes their digital keys (IoT access) and Wi-Fi credentials after a configurable grace period, securing the physical space instantly."
      },
      {
        q: "Can it handle credit system for meeting rooms?",
        a: "Yes. Members are allocated monthly credits. The system deducts credits for bookings and automatically charges the credit card on file for any overage."
      },
      {
        q: "Does it support multi-location access?",
        a: "Yes. The 'Passport' feature allows members to access any location in your network, with the system handling cross-location billing and access rights seamlessly."
      },
      {
        q: "Is the app customizable?",
        a: "Fully. We offer a white-label solution where you can apply your brand colors, logo, and custom domain to the member portal and mobile app."
      }
    ]
  },
  {
    id: "smart-desk",
    title: "Smart Desk Booker",
    subtitle: "Algorithmic Hot-Desking Engine",
    description: "An optimization engine that maximizes floor-plan efficiency using genetic algorithms to assign seating based on team synergy and density targets.",
    longDescription: "Smart Desk Booker addresses the 'Hybrid Work' paradox: maintaining flexibility while ensuring collaboration. The system utilizes a constraint-satisfaction algorithm (similar to the Knapsack problem) to assign desks. It analyzes team hierarchies, project groups, and individual preferences (e.g., 'needs silence', 'needs dual monitor') to generate daily seating charts.\n\nIt integrates with IoT occupancy sensors (PIR/Thermal) placed under desks to verify actual usage versus booked usage. This data feeds a heatmap visualization engine, revealing 'dead zones' in your office or high-traffic bottlenecks.\n\nThe platform supports 'Neighborhood' configurations, ensuring that while individuals flex-desk, they remain within proximity of their squad. For admins, it offers predictive analytics on square footage requirements, helping companies downsize real estate based on actual data rather than headcount.",
    industry: "proptech",
    service: "resource-optimization",
    url: "#",
    category: "Hybrid Work Management",
    status: "Live Production",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    features: [
      "Dynamic Team Zoning (Neighborhoods)",
      "Real-time Occupancy Heatmaps",
      "Ghost Booking Detection",
      "QR Code Check-in/out",
      "Sanitization Workflow Triggers",
      "Utilization Analytics Dashboard"
    ],
    technologies: ["D3.js (Visualization)", "Python (Optimization Libs)", "IoT Sensors (LoRaWAN)", "GraphQL"],
    benefits: ["Increase Capacity by 20%", "Data-Driven Real Estate Decisions", "Improved Employee Collaboration", "Elimination of 'Squatting'"],
    useCases: ["Hybrid Corporate HQs", "University Libraries", "Public Sector Offices"],
    stats: ["20% More Capacity", "Fair Usage", "90% Booking Adherence"],
    integrations: ["Microsoft Office 365", "Slack App", "Cisco Meraki", "VergeSense"],
    testimonials: [
      {
        name: "Sarah L.",
        role: "Head of People Ops",
        quote: "We reduced our office footprint by 30% while actually increasing employee satisfaction because the AI ensures teams always sit together.",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it prevent 'Ghost Bookings'?",
        a: "If a user does not check in (via QR scan or sensor detection) within 30 minutes of the booking start time, the desk is automatically released back into the pool."
      },
      {
        q: "Can I prioritize certain employees?",
        a: "Yes. You can assign 'Fixed Desk' status to executives or special needs employees, while the rest of the workforce remains on a flexible 'Hot Desk' tier."
      },
      {
        q: "Does it help with contact tracing?",
        a: "Yes. In the event of a health incident, the system can generate a report of exactly who sat near whom and at what time, enabling targeted notifications."
      },
      {
        q: "What hardware is required?",
        a: "The software works standalone with QR codes. Optionally, for higher accuracy, we integrate with standard occupancy sensors from vendors like VergeSense or XY Sense."
      }
    ]
  },
  {
    id: "community-bot",
    title: "Community Connector",
    subtitle: "AI Matchmaking & Engagement Bot",
    description: "A graph-based social networking AI that analyzes member skills and interests to facilitate meaningful professional connections and event participation.",
    longDescription: "The Community Connector transforms a coworking space from a rental business into a vibrant ecosystem. It utilizes Natural Language Processing (NLP) to parse member profiles, LinkedIn bios, and Slack introductions, converting them into high-dimensional Vector Embeddings.\n\nBy calculating the 'Cosine Similarity' between these vectors, the bot identifies non-obvious synergies. It proactively sends direct messages: 'Hi John, I noticed you are working on React Native. You should meet Alice in Office 302; she just deployed a React app for Fintech.'\n\nBeyond 1:1 matchmaking, the bot automates event management. It parses event descriptions and selectively invites members who have expressed interest in that topic, ensuring high relevance and attendance. It also acts as a 'Pulse' monitor, conducting micro-surveys to gauge community sentiment and flagging churn risks to community managers.",
    industry: "proptech",
    service: "nlp-matchmaking",
    url: "#",
    category: "Community Engagement AI",
    status: "Beta / Pilot",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    features: [
      "Vector-based Skill Matching",
      "Automated Intro DMs",
      "Interest-based Event Targeting",
      "Sentiment Analysis of Community Chat",
      "Churn Prediction Metrics",
      "Gamified Member Leaderboards"
    ],
    technologies: ["OpenAI Embeddings", "Pinecone (Vector DB)", "Graph Neural Networks", "Discord/Slack API"],
    benefits: ["Increase Member Stickiness/Retention", "Foster Organic Networking", "Automated Event Marketing", "Vibrant Community Culture"],
    useCases: ["Tech Incubators", "Alumni Networks", "Membership Clubs"],
    stats: ["30% Higher Event Attendance", "15% Lower Churn", "High NPS Scores"],
    integrations: ["Slack", "Discord", "LinkedIn API", "Eventbrite"],
    testimonials: [
      {
        name: "John D.",
        role: "Startup Founder",
        quote: "I didn't need to network. The bot literally introduced me to my co-founder because it knew we were both looking for the same tech stack.",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg"
      }
    ],
    faqs: [
      {
        q: "Is it intrusive to members?",
        a: "Privacy is paramount. Members must opt-in to the 'Connector' program. The bot also checks calendar availability to ensure it doesn't interrupt deep work sessions."
      },
      {
        q: "How does it handle data privacy?",
        a: "All profile data is anonymized before vectorization. We do not store raw chat logs, only the derived interest tags and sentiment scores."
      },
      {
        q: "Can it run across different platforms?",
        a: "Yes. It acts as a bridge. A member on Discord can be matched with a member on the web portal, with the bot brokering the introduction via email if necessary."
      },
      {
        q: "Does it learn over time?",
        a: "Yes. It uses Reinforcement Learning. If two introduced members schedule a meeting, the bot reinforces the weights that led to that match, improving future accuracy."
      }
    ]
  },

  // ==========================================
  // 5. AUTONOMOUS AGENTS (AGI & Agentic AI)
  // ==========================================
  {
    id: "dev-auto-gpt",
    title: "DevAutoGPT",
    subtitle: "Recursive Autonomous Software Architect",
    description: "A self-governing LLM agent capable of iterative code generation, Abstract Syntax Tree (AST) validation, and automated CI/CD deployment.",
    longDescription: "DevAutoGPT simulates a Senior Full-Stack Engineer by utilizing a recursive feedback loop. When given a prompt, it doesn't just predict text; it instantiates a file system, writes code, attempts to compile/run it within a sandboxed Docker container, reads the `stderr` logs upon failure, and self-corrects the syntax or logic error.\n\n\n\nThe architecture is built on a 'Plan-Code-Debug' directed acyclic graph (DAG). It leverages LangChain to manage context windows effectively, ensuring it retains the memory of the entire project structure. It supports Test-Driven Development (TDD) by writing unit tests (Jest/PyTest) before implementing the logic, ensuring functional integrity. Once the code passes all tests, it can push commits to a GitHub repository and trigger a deployment pipeline on Vercel or AWS.",
    industry: "software-development",
    service: "agentic-automation",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    category: "Autonomous Coding Agents",
    status: "Open Source / Enterprise Beta",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    features: [
      "Recursive Self-Healing Debugging Loop",
      "Sandboxed Execution Environment (Docker)",
      "Automated Dependency Management",
      "Test-Driven Development (TDD) Enforcement",
      "AST (Abstract Syntax Tree) Parsing",
      "Multi-File Project Structuring"
    ],
    technologies: ["GPT-4o", "LangChain", "Docker SDK", "Python AST", "Puppeteer (for UI testing)"],
    benefits: ["Reduce MVP Development Time by 90%", "Eliminate Syntax Errors", "24/7 Coding Capability", "Automated Legacy Code Refactoring"],
    useCases: ["Rapid Prototyping (MVP)", "Automated QA Testing", "Codebase Migration"],
    stats: ["10x Faster Coding", "Self-Correcting", "Zero Hallucinated APIs"],
    integrations: ["GitHub API", "VS Code Extension", "Jira", "Vercel"],
    testimonials: [
      {
        name: "Linus T.",
        role: "Principal Architect",
        quote: "It didn't just write the code; it fixed the dependency conflicts in the package.json file that I missed.",
        avatar: "https://randomuser.me/api/portraits/men/50.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle infinite loops?",
        a: "We implement a 'Watchdog Timer' and token-limit budgeting. If an agent exceeds its execution budget or recursion depth without a successful output, the supervisor agent terminates the process and requests human intervention."
      },
      {
        q: "Is the generated code secure?",
        a: "Yes. The agent runs in an isolated, ephemeral Docker container with no network access to your internal VPC unless explicitly allow-listed. All code is scanned by static analysis tools (SonarQube) before output."
      },
      {
        q: "Can it understand existing legacy codebases?",
        a: "Yes. Using RAG (Retrieval-Augmented Generation), we vector-embed your existing codebase, allowing the agent to query and understand your specific variable naming conventions and architectural patterns."
      },
      {
        q: "What prevents it from hallucinating non-existent libraries?",
        a: "The agent has a 'Verification Step' where it attempts to install the library via npm/pip. If the installation fails, it acknowledges the hallucination and searches for a valid alternative."
      }
    ]
  },
  {
    id: "research-gpt",
    title: "ResearchGPT Auto",
    subtitle: "Deep-Web Semantic Research Agent",
    description: "An autonomous crawler that aggregates, verifies, and synthesizes data from academic papers and the open web using Retrieval-Augmented Generation (RAG).",
    longDescription: "ResearchGPT Auto transforms information gathering from a manual chore into an automated pipeline. It employs a fleet of headless browsers to scrape high-authority domains (arXiv, PubMed, Bloomberg), bypassing anti-bot measures to access deep-web content.\n\nThe core innovation is its 'Fact-Check Kernel'. Unlike standard LLMs that hallucinate, this agent cross-references every claim against three distinct sources before including it in the final report. It utilizes vector databases (Pinecone/Milvus) to store embeddings of read documents, allowing for semantic search capabilities—meaning it understands that 'revenue drop' and 'fiscal contraction' are related concepts. The output is a structured academic-grade report complete with IEEE or APA citations.",
    industry: "market-intelligence",
    service: "automated-research",
    url: "#",
    category: "Knowledge Discovery AI",
    status: "Beta Access",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    features: [
      "Multi-Hop Reasoning",
      "Vector-Based Semantic Search",
      "Automated Citation Generation (BibTeX)",
      "Hallucination Mitigation Protocol",
      "PDF/OCR Parsing",
      "Anti-Detect Scraping Network"
    ],
    technologies: ["LlamaIndex", "Puppeteer", "Pinecone Vector DB", "OpenAI GPT-4-Turbo", "OCR (Tesseract)"],
    benefits: ["Cut Research Time by 95%", "Eliminate Confirmation Bias", "Access to Real-Time Web Data", "Traceable Source of Truth"],
    useCases: ["Due Diligence Reports", "PhD Literature Reviews", "Competitive Landscape Analysis"],
    stats: ["1000+ Pages/Min", "99% Factual Accuracy", "Zero Hallucinations"],
    integrations: ["Google Scholar", "Notion API", "Mendeley", "Zotero"],
    testimonials: [
      {
        name: "Dr. A. Smith",
        role: "Chief Economist",
        quote: "It synthesized a 50-page market analysis report with perfect citations in the time it took me to drink my coffee.",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle conflicting information?",
        a: "The agent uses a 'Weighted Credibility Score'. Sources like .edu domains or peer-reviewed journals are weighted higher than blogs. It presents the conflict in the final report, noting the discrepancy."
      },
      {
        q: "Can it bypass paywalls?",
        a: "The agent strictly adheres to `robots.txt` and copyright laws. However, it can integrate with your institutional login credentials (e.g., JSTOR, Elsevier) to access paid content legally."
      },
      {
        q: "Does it work with non-English sources?",
        a: "Yes, it utilizes a translation layer to ingest documents in over 40 languages, synthesizing the findings into an English report (or your target language)."
      },
      {
        q: "How fresh is the data?",
        a: "Real-time. Unlike pre-trained models with a knowledge cutoff, this agent browses the live web to fetch the latest news and stock data."
      }
    ]
  },
  {
    id: "task-master-agi",
    title: "TaskMaster AGI",
    subtitle: "Goal-Oriented Executive Function Agent",
    description: "A hierarchical task execution engine that decomposes high-level objectives into actionable sub-tasks and executes them via API orchestration.",
    longDescription: "TaskMaster AGI functions as a digital project manager. It utilizes a recursive decomposition algorithm to break a vague goal (e.g., 'Plan a launch party') into a dependency tree of hundreds of atomic tasks (e.g., 'Scrape venues', 'Compare catering quotes', 'Send invites').\n\n\n\nIt features a 'Tool Usage' module that allows it to interact with the outside world. It can authenticate into your Google Calendar to schedule meetings, use the Gmail API to send inquiries to vendors, and use Stripe to process deposit payments—all while maintaining a stateful memory of the project's progress. It employs Reinforcement Learning from Human Feedback (RLHF) to learn your preferences over time.",
    industry: "productivity",
    service: "process-automation",
    url: "#",
    category: "Agentic Process Automation (APA)",
    status: "Research Preview",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    features: [
      "Hierarchical Goal Decomposition",
      "Dependency Graph Management",
      "API Tool Use & Authentication",
      "Long-Term Episodic Memory",
      "Human-in-the-Loop Approval workflows",
      "Multi-Agent Orchestration"
    ],
    technologies: ["BabyAGI", "LangGraph", "Zapier NLA", "Redis (Memory)", "Python"],
    benefits: ["Autonomous Project Execution", "Eliminate Executive Dysfunction", "Seamless App Interoperability", "Scalable Personal Assistance"],
    useCases: ["Event Planning", "Complex Travel Itineraries", "Supply Chain Coordination"],
    stats: ["Handle 50+ Step Workflows", "Auto-Scheduling", "24/7 Execution"],
    integrations: ["Google Workspace", "Trello/Asana", "Slack", "Stripe"],
    testimonials: [
      {
        name: "Tom H.",
        role: "Product Manager",
        quote: "It's not just a chatbot; it actually *does* the work. It booked the venue and the caterer while I slept.",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
      }
    ],
    faqs: [
      {
        q: "What if the agent gets stuck?",
        a: "We implement a 'Max Retry' logic. If a task fails (e.g., a vendor doesn't reply), the agent can generate an alternative path (e.g., contact a different vendor) or escalate to the user for guidance."
      },
      {
        q: "Is it safe to give it API keys?",
        a: "Keys are stored in a secure vault (HashiCorp Vault). The agent uses them only for scoped requests, and you can set spending limits or requires-approval flags for sensitive actions like payments."
      },
      {
        q: "Can it coordinate with other agents?",
        a: "Yes. It supports multi-agent architecture. The 'Planner' agent can delegate specific sub-tasks to a 'Research' agent or a 'Coding' agent and aggregate their outputs."
      },
      {
        q: "Does it have long-term memory?",
        a: "Yes, it uses a vector store to remember your preferences (e.g., 'I prefer aisle seats', 'No meetings on Fridays') across different sessions and projects."
      }
    ]
  },

  // ==========================================
  // 6. DATA ENGINEERING
  // ==========================================
  {
    id: "sql-agent-pro",
    title: "SQL Agent Pro",
    subtitle: "Natural Language to SQL Interface",
    description: "An enterprise-grade semantic layer that translates natural language queries into optimized, dialect-specific SQL execution plans.",
    longDescription: "SQL Agent Pro solves the 'last mile' problem of Business Intelligence. It sits between non-technical users and your Data Warehouse (Snowflake, BigQuery, Redshift). By mapping your database schema into a high-dimensional vector space, it understands not just table names, but the *business logic* and relationships between them (foreign keys, join paths).\n\n\n\nWhen a user asks, 'Show me churn rate by region,' the agent generates the appropriate AST (Abstract Syntax Tree) for the SQL query, optimizes it for performance (e.g., selecting partition keys), and validates it against a 'Safe Execution' policy to prevent injection attacks or costly `SELECT *` operations. It effectively turns every employee into a data analyst.",
    industry: "business-intelligence",
    service: "data-democratization",
    url: "https://github.com/vanna-ai/vanna",
    category: "Generative BI",
    status: "Enterprise Release",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    features: [
      "Context-Aware SQL Generation",
      "RAG-based Schema Training",
      "Automated Visualization Selection",
      "Role-Based Access Control (RBAC)",
      "Query Cost Estimation",
      "Dialect Agnostic (Postgres/Snowflake/T-SQL)"
    ],
    technologies: ["LlamaIndex", "SQLAlchemy", "Python Pandas", "Plotly", "Vector Embeddings"],
    benefits: ["Eliminate Ad-Hoc Data Requests", "100% Query Syntax Accuracy", "Secure Data Access", "Instant Visual Insights"],
    useCases: ["Self-Service Analytics", "Executive Dashboards", "Embedded Analytics"],
    stats: ["99% SQL Accuracy", "Zero Syntax Errors", "<2s Response Time"],
    integrations: ["Snowflake", "Google BigQuery", "AWS Redshift", "Slack Bot"],
    testimonials: [
      {
        name: "Emily W.",
        role: "Marketing Director",
        quote: "I no longer have to wait 3 days for the data team to pull a list. I just ask the bot and get the CSV instantly.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you prevent the AI from accessing sensitive data?",
        a: "The AI only sees the *metadata* (schema definitions), not the actual row data. Furthermore, the database user utilized by the agent is restricted to Read-Only permissions on specific views."
      },
      {
        q: "Can it handle complex joins?",
        a: "Yes. During the training phase, we feed the model your Entity Relationship Diagram (ERD). It understands how to join 10+ tables to answer complex questions about customer lifetime value."
      },
      {
        q: "What if the model generates bad SQL?",
        a: "We have a 'Compiler Layer' that attempts to explain the SQL before execution. If the database engine returns a syntax error, the agent self-corrects based on the error message and retries."
      },
      {
        q: "Does it support proprietary business metrics?",
        a: "Yes. You can define 'Semantic Definitions' (e.g., what exactly constitutes 'churn' in your org) in the system prompt, so the AI calculates metrics consistently."
      }
    ]
  },
  {
    id: "etl-pipeline-ai",
    title: "AutoETL Pipeline",
    subtitle: "Self-Healing Data Ingestion Engine",
    description: "An AI-driven ETL framework that automates schema inference, data cleansing, and pipeline orchestration using anomaly detection.",
    longDescription: "AutoETL removes the fragility from data engineering. Traditional pipelines break when upstream data formats change (Schema Drift). AutoETL utilizes a dynamic schema inference engine that detects new columns or type changes in the source data and automatically adapts the destination schema in the data warehouse without halting the pipeline.\n\nIt features an integrated 'Data Quality Firewall' that uses statistical analysis to detect anomalies (e.g., null spikes, negative values in price fields) and quarantines bad records to a 'Dead Letter Queue' while letting clean data pass through. This ensures your analytics dashboards never crash due to dirty data.",
    industry: "data-engineering",
    service: "data-ops",
    url: "#",
    category: "Automated Data Integration",
    status: "Live Tool",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    features: [
      "Automated Schema Drift Handling",
      "Statistical Anomaly Detection",
      "PII Auto-Redaction",
      "Backpressure Handling",
      "Idempotent Replay Capability",
      "Dead Letter Queue Management"
    ],
    technologies: ["Apache Airflow", "Apache Spark", "Kafka Connect", "dbt (Data Build Tool)", "Great Expectations"],
    benefits: ["80% Reduction in Maintenance Time", "Guaranteed Data Quality", "Real-Time Ingestion", "Zero-Downtime Schema Migrations"],
    useCases: ["Log Aggregation", "Marketing Data Unification", "IoT Telemetry Ingestion"],
    stats: ["Reduce ETL Time 80%", "Auto-Schema", "99.99% Pipeline Uptime"],
    integrations: ["Apache Kafka", "Snowpipe", "Databricks", "Fivetran"],
    testimonials: [
      {
        name: "Mark S.",
        role: "Data Engineering Lead",
        quote: "The schema drift handling is magic. Marketing added three new fields to their CSVs, and the pipeline just adapted automatically.",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle volume spikes?",
        a: "The architecture is built on Kubernetes with Horizontal Pod Autoscaling (HPA). It automatically spins up more Spark workers when the Kafka lag threshold is breached."
      },
      {
        q: "Is the data lineage trackable?",
        a: "Yes. Every transformation is logged. We provide a DAG visualization showing exactly where data came from and what transformations were applied before it hit the warehouse."
      },
      {
        q: "Can I write custom transformations?",
        a: "Absolutely. While standard cleaning is automated, you can inject custom Python or SQL transformation blocks into the Airflow DAG."
      },
      {
        q: "Does it support Change Data Capture (CDC)?",
        a: "Yes, it integrates with Debezium to capture row-level changes from transactional databases (Postgres/MySQL) and stream them to the warehouse in real-time."
      }
    ]
  },
  {
    id: "data-governance-bot",
    title: "Data Governance Bot",
    subtitle: "Automated PII/PHI Compliance Guard",
    description: "A background daemon that continuously scans data estates for sensitive information, enforcing masking policies and generating GDPR/CCPA compliance logs.",
    longDescription: "Data Governance Bot is your automated Data Protection Officer (DPO). It crawls your databases, data lakes, and unstructured object stores (S3 buckets) using Named Entity Recognition (NER) models specifically trained to identify sensitive patterns—Social Security Numbers, Credit Cards, Email Addresses, and HIPAA-related codes.\n\nUpon detection, it applies 'Tag-Based Policies'. For example, if a column is tagged as 'High Sensitivity', the bot can automatically apply Format-Preserving Encryption (FPE) or dynamic masking logic, ensuring that developers seeing the data only see 'XXX-XX-1234'. It maintains an immutable audit log of who accessed what data and when, streamlining regulatory audits.",
    industry: "cybersecurity",
    service: "governance-risk-compliance",
    url: "#",
    category: "Data Privacy AI",
    status: "Enterprise Gold",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: [
      "AI-Powered PII/PHI Discovery",
      "Dynamic Data Masking",
      "Format-Preserving Encryption",
      "Right-to-be-Forgotten Automation",
      "Data Catalog Integration",
      "Access Anomaly Detection"
    ],
    technologies: ["Regex & NLP Models", "Apache Ranger", "Snowflake Masking Policies", "HashiCorp Vault"],
    benefits: ["Zero Compliance Fines", "Automated GDPR Requests", "Secure Test Data Generation", "Granular Access Control"],
    useCases: ["GDPR/CCPA Compliance audits", "Safe Cloud Migration", "Dev/Test Environment Masking"],
    stats: ["100% PII Detection", "Auto-Redaction", "Audit-Ready Reports"],
    integrations: ["Oracle DB", "MongoDB", "AWS S3/Macie", "Collibra"],
    testimonials: [
      {
        name: "Sarah J.",
        role: "CISO",
        quote: "It found unencrypted credit card numbers in a forgotten dev database from three years ago. Saved us from a potential breach.",
        avatar: "https://randomuser.me/api/portraits/women/19.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it impact database performance?",
        a: "We utilize 'sampling' scans and read from read-replicas during off-peak hours to ensure zero impact on production transaction processing (OLTP)."
      },
      {
        q: "Can it handle unstructured data?",
        a: "Yes. It uses OCR and NLP to scan PDF documents and images in S3 buckets to identify and tag sensitive information contained within files."
      },
      {
        q: "How does it handle the 'Right to be Forgotten'?",
        a: "It maintains a global index of PII. When a deletion request comes in, it orchestrates the deletion or anonymization of that user's data across all connected systems."
      },
      {
        q: "Is the masking reversible?",
        a: "We support both irreversible hashing (for analytics) and reversible tokenization (for authorized applications), managed via encryption keys."
      }
    ]
  },

  // ==========================================
  // 7. COMPUTER VISION (Edge & Cloud)
  // ==========================================
  {
    id: "vision-guard-edge",
    title: "VisionGuard Edge",
    subtitle: "Real-Time Edge Inference Surveillance",
    description: "A low-latency computer vision system optimized for Edge AI, capable of running complex object detection models locally on ARM-based hardware.",
    longDescription: "VisionGuard Edge brings server-grade AI to the network edge. Unlike cloud-based systems that suffer from bandwidth latency, this solution runs quantized YOLOv8 models directly on devices like NVIDIA Jetson or Raspberry Pi.\n\n\n\nThe architecture utilizes TensorRT optimization to achieve high frame rates (FPS) on low-power hardware. It processes video streams locally to detect threats—weapons, unauthorized entry, or safety hazards. Because video never leaves the device (only metadata alerts are sent to the cloud), it inherently complies with strict privacy standards and functions even during internet outages. It utilizes MQTT for lightweight message transmission to the central command dashboard.",
    industry: "physical-security",
    service: "edge-computing",
    url: "https://github.com/ultralytics/ultralytics",
    category: "Edge AI Security",
    status: "v8.0 Production",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    features: [
      "INT8 Quantized Model Inference",
      "Offline Functionality",
      "Weapon & Intrusion Detection",
      "Privacy-First (No Cloud Video Storage)",
      "MQTT Alerting Protocol",
      "Night Vision/IR Compatibility"
    ],
    technologies: ["YOLOv8", "NVIDIA TensorRT", "OpenCV", "Edge Impulse", "MQTT"],
    benefits: ["<15ms Inference Latency", "Bandwidth Savings (99%)", "GDPR Compliant Video Ops", "High Reliability"],
    useCases: ["Smart Cities", "Remote Asset Monitoring", "School Safety"],
    stats: ["<10ms Latency", "99.9% Detection", "Runs on 5W Power"],
    integrations: ["Milestone XProtect", "Telegram Bot", "AWS IoT Core"],
    testimonials: [
      {
        name: "Chief Security Officer",
        role: "Mall Operations",
        quote: "The latency is non-existent. We get the alert the millisecond a blacklisted vehicle enters the parking lot.",
        avatar: "https://randomuser.me/api/portraits/men/66.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you handle false positives?",
        a: "We implement 'Temporal Consistency' logic. An object must be detected in 5 consecutive frames with >80% confidence before an alert is triggered, drastically reducing noise."
      },
      {
        q: "Does it work in low light?",
        a: "Yes. The models are trained on datasets containing thermal and infrared imagery, ensuring accuracy in complete darkness."
      },
      {
        q: "Can I update the model remotely?",
        a: "Yes. We use Over-The-Air (OTA) updates to push new model weights to the edge devices without requiring physical access."
      },
      {
        q: "What is the hardware requirement?",
        a: "It is optimized for NVIDIA Jetson Nano/Orin, ensuring >30 FPS performance. It can also run on standard x86 servers with minimal CPU usage."
      }
    ]
  },
  {
    id: "retail-heatmap",
    title: "Retail Heatmap AI",
    subtitle: "Spatial Analytics & Pathing Engine",
    description: "A computer vision solution that transforms CCTV feeds into actionable spatial data, tracking customer dwell times, pathing, and conversion funnels.",
    longDescription: "Retail Heatmap AI treats physical space like a website landing page. It uses 'Person Re-Identification' (ReID) algorithms to track unique individuals across multiple non-overlapping camera views, creating a complete customer journey map.\n\nThe system generates 'Kinetic Heatmaps' that visualize exactly where customers stop, look, and interact with products. It calculates 'Dwell Time' and 'Pass-by Rate' for specific end-caps or displays. By using Homography mapping, pixel coordinates from 2D camera feeds are translated into a top-down 2D floor plan view, giving store managers a precise understanding of traffic flow bottlenecks and high-value real estate within the store.",
    industry: "retail-analytics",
    service: "spatial-intelligence",
    url: "#",
    category: "In-Store Analytics",
    status: "Live Deployment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    features: [
      "Multi-Camera Person Re-Identification",
      "Planar Homography Mapping",
      "Dwell Time Analytics",
      "Queue Length Monitoring",
      "Demographic Estimation (Age/Gender)",
      "Staff Exclusion Logic"
    ],
    technologies: ["OpenCV", "DeepSort", "PyTorch", "Grafana (Visualization)"],
    benefits: ["Optimize Store Layouts", "Increase Conversion Rates", "Staffing Optimization via Traffic Prediction", "A/B Testing Physical Displays"],
    useCases: ["Big Box Retail", "Shopping Malls", "Museums/Galleries"],
    stats: ["Optimize Layouts", "Reduce Wait Times", "95% Counting Accuracy"],
    integrations: ["Existing CCTV (RTSP)", "Tableau", "Salesforce POS"],
    testimonials: [
      {
        name: "Store Manager",
        role: "Global Fashion Chain",
        quote: "We moved the denim section to the 'hot zone' identified by the AI, and sales for that category went up 40% in a week.",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you distinguish staff from customers?",
        a: "We train the model to recognize the store uniform or utilize RFID tag integration to filter out employees from the footfall count."
      },
      {
        q: "Is it compliant with privacy laws?",
        a: "Yes. No video is stored. The system processes the stream in RAM to extract coordinate data and immediately discards the frames. Faces can be automatically blurred in real-time."
      },
      {
        q: "Do I need to install new cameras?",
        a: "Rarely. The system is compatible with any standard IP camera that outputs an RTSP stream (Real-Time Streaming Protocol)."
      },
      {
        q: "Can it track groups vs individuals?",
        a: "Yes. The 'Group Detection' logic analyzes proximity and velocity vectors to identify buying groups (families/couples) vs. individual shoppers."
      }
    ]
  },
  {
    id: "safety-gear-detect",
    title: "Safety Gear AI",
    subtitle: "Industrial PPE Compliance Monitor",
    description: "An automated safety officer that uses object detection to ensure compliance with Personal Protective Equipment (PPE) regulations in hazardous environments.",
    longDescription: "Safety Gear AI enforces HSE (Health, Safety, and Environment) protocols autonomously. It utilizes a custom-trained object detection model capable of identifying multiple classes of small objects—Hard Hats, High-Visibility Vests, Safety Goggles, and Steel-Toe Boots—simultaneously on moving workers.\n\nThe system defines 'Danger Zones' within the camera frame. If a worker enters a zone without the requisite gear, the system calculates the Intersection over Union (IoU) of the worker and the missing gear. If a violation is confirmed, it triggers an immediate relay to sound an alarm, flashes a strobe light, or logs the incident with a video snippet to the safety dashboard. This proactive approach shifts safety from audit-based to real-time prevention.",
    industry: "manufacturing-construction",
    service: "industrial-iot",
    url: "#",
    category: "HSE Automation",
    status: "Pilot / Industrial",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    features: [
      "Multi-Class PPE Detection",
      "Geofenced Danger Zones",
      "Real-time Audio/Visual Alarms",
      "Incident Video Logging",
      "Shift-based Compliance Reporting",
      "API Integration with Access Control Gates"
    ],
    technologies: ["YOLOv8-Small", "DeepStream SDK", "AWS Kinesis Video Streams", "Twilio (SMS Alerts)"],
    benefits: ["Zero Accident Vision", "Reduce Insurance Premiums", "100% OSHA Compliance", "Automated Incident Reporting"],
    useCases: ["Construction Sites", "Oil & Gas Refineries", "Chemical Plants"],
    stats: ["Zero Accidents", "Instant Logs", "<1s Alert Latency"],
    integrations: ["Siemens SCADA", "Slack", "Physical Siren/Strobe Relays"],
    testimonials: [
      {
        name: "HSE Officer",
        role: "Construction Firm",
        quote: "It's like having a safety officer watching every worker, every second. Compliance went to 100% within a week.",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg"
      }
    ],
    faqs: [
      {
        q: "Can it detect specific colors (e.g., visitor vs. staff helmets)?",
        a: "Yes. The model detects color attributes, allowing you to enforce specific rules (e.g., 'Only White Helmets allowed in Zone A')."
      },
      {
        q: "Does it work in dusty or rainy conditions?",
        a: "We apply 'Data Augmentation' during training (adding simulated rain, fog, and blur) to ensure the model remains robust in harsh industrial environments."
      },
      {
        q: "Can it integrate with turnstiles?",
        a: "Yes. The camera at the entrance can prevent the turnstile from unlocking if the worker is not wearing their vest and helmet."
      },
      {
        q: "Is facial recognition required?",
        a: "No. The system focuses on the gear, not the face. However, facial recognition can be enabled if you need to attribute violations to specific employee IDs."
      }
    ]
  },

  // ==========================================
  // 8. ROBOTICS
  // ==========================================
  // ==========================================
  // 8. ROBOTICS (Industry 4.0)
  // ==========================================
  {
    id: "drone-swarm-ai",
    title: "DroneSwarm AI",
    subtitle: "Decentralized Aerial Hive Mind",
    description: "A biomimetic swarm intelligence framework enabling large-scale UAV fleets to execute complex, synchronized missions without central command latency.",
    longDescription: "DroneSwarm AI moves beyond the '1-pilot-1-drone' paradigm to true Level 5 Autonomy.  Inspired by Boids algorithms found in nature, every drone in the fleet acts as an independent node in a mesh network. They share telemetry, LiDAR point clouds, and trajectory intent with their nearest neighbors via low-latency UDP broadcasts.\n\nThis decentralized architecture means there is no single point of failure. If one drone drops out, the swarm instantly reconfigures its geometry to fill the gap. The system utilizes Distributed SLAM (Simultaneous Localization and Mapping) to merge data from 100+ drones into a single, high-fidelity 3D map in real-time. It is ideal for GPS-denied environments like underground mines or dense forests, where on-board edge computing handles all collision avoidance and path planning logic.",
    industry: "defense-logistics",
    service: "swarm-robotics",
    url: "https://github.com/USC-ACTLab/crazyswarm",
    category: "Autonomous Swarm Systems",
    status: "Research / Prototype",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    features: [
      "Decentralized Mesh Networking",
      "Distributed SLAM (3D Mapping)",
      "Boids Flocking Algorithm",
      "Self-Healing Formation Logic",
      "GPS-Denied Navigation",
      "Real-time Obstacle Avoidance"
    ],
    technologies: ["ROS2 (Robot Operating System)", "Gazebo Simulator", "Edge Computing (NVIDIA Jetson)", "UWB (Ultra-Wideband)", "Python/C++"],
    benefits: ["Cover 100 Acres in Minutes", "Zero Single Point of Failure", "High Redundancy", "Autonomous Re-routing"],
    useCases: ["Search & Rescue", "Precision Agriculture", "Defense Surveillance"],
    stats: ["Scale to 100+ Drones", "<10ms Latency", "3D Mapping Accuracy"],
    integrations: ["PX4 Autopilot", "ArduPilot", "QGroundControl"],
    testimonials: [
      {
        name: "Dr. Aris T.",
        role: "Robotics Lab Lead",
        quote: "The self-healing logic is flawless. We lost connection to the ground station, and the swarm completed the mapping mission autonomously.",
        avatar: "https://randomuser.me/api/portraits/women/40.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the swarm handle collision avoidance?",
        a: "We utilize potential field algorithms. Each drone treats neighbors and obstacles as repulsive forces and the target destination as an attractive force, calculating collision-free vectors 100 times per second."
      },
      {
        q: "What happens if the leader drone fails?",
        a: "There is no leader. The system is leaderless and egalitarian; tasks are dynamically allocated based on battery level and proximity to the objective."
      },
      {
        q: "Is it compatible with custom frames?",
        a: "Yes, the flight controller stack is hardware-agnostic, supporting quadcopters, hexacopters, and VTOL fixed-wing assets running PX4."
      },
      {
        q: "What is the communication range?",
        a: "Using LoRaWAN or proprietary mesh radio protocols, the swarm can maintain cohesion over several kilometers, daisy-chaining signals between drones."
      }
    ]
  },
  {
    id: "warehouse-bot",
    title: "Warehouse Picker Sim",
    subtitle: "Sim-to-Real Reinforcement Learning",
    description: "A physics-accurate Digital Twin environment designed to train robotic manipulators using Deep Reinforcement Learning (DRL) before physical deployment.",
    longDescription: "Training robots in the physical world is slow, expensive, and dangerous. Warehouse Picker Sim solves this via 'Domain Randomization'.  It generates millions of synthetic scenarios—varying lighting, friction coefficients, object textures, and box sizes—inside a physics engine.\n\nThe AI agent uses Proximal Policy Optimization (PPO) to learn the optimal grasping strategy for irregular objects (e.g., a plush toy vs. a shampoo bottle). This 'Sim-to-Real' transfer allows a robot to learn 10,000 hours of picking experience in just 24 hours of GPU simulation time. The system integrates directly with Warehouse Management Systems (WMS) to optimize path planning, ensuring the robot arm minimizes travel distance and maximizes 'Picks Per Hour' (PPH).",
    industry: "logistics-supply-chain",
    service: "robotics-simulation",
    url: "#",
    category: "Industrial Automation",
    status: "Enterprise Demo",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    features: [
      "Physics-Grade Grasp Simulation",
      "Domain Randomization for Generalization",
      "6-DoF Inverse Kinematics Solver",
      "Soft-Body Deformation Physics",
      "Bin Packing Optimization Algo",
      "Collision-Free Trajectory Planning"
    ],
    technologies: ["PyBullet / MuJoCo", "NVIDIA Isaac Sim", "TensorFlow Agents", "ROS MoveIt", "Python"],
    benefits: ["99.9% Picking Accuracy", "Zero Damage to Goods", "40% Increase in Throughput", "Safe Offline Training"],
    useCases: ["E-commerce Fulfillment", "Parcel Sorting", "Palletizing"],
    stats: ["99.9% Grip Success", "24/7 Ops", "10k Training Hours/Day"],
    integrations: ["SAP EWM", "Oracle WMS", "Universal Robots API"],
    testimonials: [
      {
        name: "Marcus L.",
        role: "Logistics Director",
        quote: "We reduced our training time for new SKUs from weeks to hours. The robot figured out how to grip slippery packaging that baffled our human staff.",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
      }
    ],
    faqs: [
      {
        q: "Can it handle transparent objects?",
        a: "Yes, we simulate depth-noise and train on synthetic depth maps of transparent objects, allowing the vision system to infer shape from refraction patterns."
      },
      {
        q: "What hardware is needed to run the sim?",
        a: "We recommend a multi-GPU workstation (NVIDIA RTX A6000 series) to run high-fidelity physics and rendering in parallel."
      },
      {
        q: "Does it support suction grippers?",
        a: "Yes, the physics engine accurately models vacuum suction forces, air leaks, and payload weight limits."
      },
      {
        q: "Is it compatible with Cobots?",
        a: "Absolutely. We support the URdf (Unified Robot Description Format) for all major Cobot brands like Universal Robots and Techman."
      }
    ]
  },
  {
    id: "agri-bot-arm",
    title: "Harvest Bot Arm",
    subtitle: "Computer Vision Ag-Robotics",
    description: "A soft-robotics manipulator guided by stereoscopic vision to identify, grade, and harvest delicate produce without bruising.",
    longDescription: "Harvest Bot Arm addresses the critical labor shortage in agriculture. It combines an RGB-D (Depth) camera with a custom-trained Mask R-CNN model to segment fruits from foliage in real-time.  \n\nThe system calculates the ripeness level based on colorimetric analysis and size. Once a target is selected, the arm utilizes 6-Axis motion planning to approach the fruit without tangling in branches. The end-effector uses soft pneumatic actuators (silicone fingers) with force-feedback sensors to apply the exact pressure needed to detach the fruit without damaging the skin. It operates autonomously day and night, utilizing floodlights and multispectral imaging to harvest at peak efficiency.",
    industry: "agtech",
    service: "automated-harvesting",
    url: "#",
    category: "Agricultural Robotics",
    status: "Prototype Field Testing",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2074&auto=format&fit=crop",
    features: [
      "Real-time Fruit Segmentation (Mask R-CNN)",
      "Soft Pneumatic Grippers",
      "Force-Feedback Control Loop",
      "Occlusion Handling (Leaves/Branches)",
      "Colorimetric Ripeness Grading",
      "Night-Time Harvesting Capability"
    ],
    technologies: ["ROS Noetic", "OpenCV", "Intel RealSense Depth Cams", "Pytorch", "NVIDIA Jetson Edge AI"],
    benefits: ["Zero Bruising", "24/7 Operation", "Reduce Labor Costs by 60%", "Real-time Yield Analytics"],
    useCases: ["Apple Orchards", "Tomato Greenhouses", "Strawberry Fields"],
    stats: ["98% Picking Success", "5s Per Fruit", "Zero Labor Dependency"],
    integrations: ["Autonomous Mobile Robots (AMR)", "Farm Management Software"],
    testimonials: [
      {
        name: "Joe D.",
        role: "Orchard Owner",
        quote: "It treats the apples better than my seasonal crew does. The ability to harvest at night when temperatures are cooler is a game changer for shelf life.",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it distinguish ripe fruit?",
        a: "The vision model analyzes the HSV color space and surface texture. You can set custom thresholds (e.g., '90% red') to determine pick-readiness."
      },
      {
        q: "Does it work in wind?",
        a: "Yes, the visual servoing loop runs at 60Hz, adjusting the arm's trajectory in real-time to compensate for moving targets."
      },
      {
        q: "What prevents the arm from hitting branches?",
        a: "We use OctoMap to build a real-time voxel map of the tree structure, treating branches as collision objects in the motion planner."
      },
      {
        q: "Can the gripper be changed?",
        a: "Yes, the end-effector is modular. You can swap grippers for different crop types (e.g., suction for peppers, fingers for apples)."
      }
    ]
  },

  // ==========================================
  // 9. GENERATIVE AI (Enterprise)
  // ==========================================
  {
    id: "doc-brain-rag",
    title: "Enterprise DocBrain",
    subtitle: "Air-Gapped RAG Knowledge Engine",
    description: "A secure Retrieval-Augmented Generation (RAG) platform that vectorizes institutional knowledge to provide cited, hallucination-free answers.",
    longDescription: "DocBrain solves the 'Corporate Amnesia' problem. It ingests unstructured data—PDFs, SharePoint sites, Jira tickets, and emails—and chunks them into semantic segments. These chunks are embedded into a high-dimensional vector space using models like OpenAI's `text-embedding-3`.  \n\nWhen an employee asks a question, the system performs a cosine similarity search to retrieve the most relevant context blocks. These blocks are then fed into a Large Language Model (LLM) which synthesizes an answer based *only* on that retrieved context. Crucially, the system supports Role-Based Access Control (RBAC), ensuring a junior engineer cannot query sensitive HR documents. Deployment can be fully air-gapped using open-source models (Llama-3, Mistral) for maximum data sovereignty.",
    industry: "knowledge-management",
    service: "rag-implementation",
    url: "https://github.com/zylon-ai/private-gpt",
    category: "Enterprise Generative AI",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: [
      "Vector Semantic Search",
      "Source Citation & Page Linking",
      "Role-Based Access Control (RBAC)",
      "Hybrid Search (Keyword + Vector)",
      "Air-Gapped On-Prem Deployment",
      "Automated Document Chunking"
    ],
    technologies: ["Pinecone / Milvus (Vector DB)", "LangChain", "LlamaIndex", "Docker", "React"],
    benefits: ["90% Faster Information Retrieval", "Total Data Privacy", "Hallucination-Free Answers", "Preserve Institutional Knowledge"],
    useCases: ["Legal Contract Analysis", "Technical Support Copilot", "HR Policy FAQ"],
    stats: ["Index 1M+ Docs", "<2s Latency", "Enterprise Ready"],
    integrations: ["Microsoft SharePoint", "Confluence", "Google Drive", "Slack"],
    testimonials: [
      {
        name: "Amanda B.",
        role: "General Counsel",
        quote: "I can ask 'What is the indemnity clause in the Project X contract?' and it gives me the exact paragraph instantly. It saves hours of discovery.",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg"
      }
    ],
    faqs: [
      {
        q: "Does our data train the public model?",
        a: "Never. We use the LLM only for inference. If you opt for the on-premise version, no data ever leaves your VPC."
      },
      {
        q: "How does it handle updated documents?",
        a: "We implement an event-driven pipeline. When a doc is updated in SharePoint, a webhook triggers re-indexing of only the changed chunks."
      },
      {
        q: "Can it read scanned PDFs?",
        a: "Yes, we integrate OCR (Tesseract/Adobe API) to extract text from scanned images before vectorization."
      },
      {
        q: "What is the maximum context window?",
        a: "Depending on the model selected (e.g., Claude 3 or GPT-4 Turbo), we support up to 128k tokens of context."
      }
    ]
  },
  {
    id: "code-refactor-ai",
    title: "Legacy Code Refactor",
    subtitle: "Automated Mainframe Modernization",
    description: "A specialized LLM agent pipeline designed to transpile, refactor, and document legacy code (COBOL/Fortran) into modern languages (Python/Go).",
    longDescription: "Modernizing legacy stacks is usually a multi-year, high-risk endeavor. This AI accelerates the process by treating code migration as a translation task with strict syntax validation.  \n\nThe system parses the legacy code into an Abstract Syntax Tree (AST) to understand the underlying logic flow, rather than just line-by-line translation. It then prompts a code-specialized LLM (like StarCoder) to generate equivalent Python/Java code. Beyond translation, it generates comprehensive Unit Tests (PyTest/JUnit) to verify that the output of the new code matches the legacy code for identical inputs. It also generates docstrings and architectural diagrams, turning 'spaghetti code' into maintainable software.",
    industry: "software-engineering",
    service: "legacy-migration",
    url: "#",
    category: "Code Generative AI",
    status: "Beta / Enterprise",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
    features: [
      "AST-Based Logic Extraction",
      "Automated Unit Test Generation",
      "Code Documentation Generator",
      "Dependency Graph Mapping",
      "Strict Type Hinting Injection",
      "Idempotency Verification"
    ],
    technologies: ["StarCoder / CodeLlama", "Python AST module", "ANTLR (Parser)", "Docker"],
    benefits: ["Reduce Migration Costs by 70%", "Eliminate Technical Debt", "Preserve Business Logic", "Automated QA"],
    useCases: ["Banking Mainframe Offloading", "GovTech Modernization", "Y2K-era Code Upgrades"],
    stats: ["80% Faster Migration", "95% Logic Accuracy", "Auto-Generated Docs"],
    integrations: ["GitHub Enterprise", "Jira", "Jenkins CI/CD", "SonarQube"],
    testimonials: [
      {
        name: "David K.",
        role: "Bank CTO",
        quote: "We moved 50,000 lines of COBOL to Java in three months. The auto-generated unit tests gave us the confidence to flip the switch.",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it handle GOTO statements?",
        a: "Yes, the AST parser identifies unstructured control flow (GOTO) and refactors it into modern loops and function calls."
      },
      {
        q: "Is the code human-readable?",
        a: "Yes, the prompt engineering specifically instructs the model to use clean coding standards (PEP8) and meaningful variable names."
      },
      {
        q: "What about database connections?",
        a: "The agent identifies SQL embedded in legacy code and converts it to modern ORM (Object-Relational Mapping) calls like SQLAlchemy or Hibernate."
      },
      {
        q: "Is it secure to upload code?",
        a: "We offer an on-premise container that runs entirely offline within your firewall, ensuring your IP never leaks."
      }
    ]
  },
  {
    id: "video-summarizer",
    title: "Video Summarizer",
    subtitle: "Intelligent Meeting Analytics",
    description: "A multi-modal pipeline that transcribes video, diarizes speakers, and extracts structured data like action items and sentiment.",
    longDescription: "Video Summarizer turns ephemeral video content into a searchable knowledge base. The pipeline begins with extracting the audio track and processing it through a Whisper-large model for near-perfect transcription. \n\nSimultaneously, 'Speaker Diarization' algorithms analyze audio fingerprints to distinguish between participants (e.g., Speaker A = CEO, Speaker B = Engineer). The transcript is then fed into an LLM with specific prompts to extract 'Decisions Made', 'Action Items with Owners', and 'Deadlines'. It also performs sentiment analysis on the tone of the meeting. The output is a structured JSON object and a formatted summary pushed directly to your CRM or project management tool.",
    industry: "productivity-tech",
    service: "nlp-transcription",
    url: "#",
    category: "Meeting Intelligence",
    status: "Live Service",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    features: [
      "High-Fidelity Transcription (Whisper)",
      "Speaker Diarization & ID",
      "Action Item Extraction",
      "Topic Segmentation",
      "Sentiment & Tone Analysis",
      "Global Search across Video Library"
    ],
    technologies: ["OpenAI Whisper", "Pyannote.audio (Diarization)", "GPT-4", "FFmpeg"],
    benefits: ["Save 10+ Hours/Week", "Never Miss an Action Item", "Searchable Video Archive", "Automated CRM Entry"],
    useCases: ["Board Meetings", "User Research Interviews", "Webinar Recaps"],
    stats: ["1hr Video -> 2min Read", "99% Word Accuracy", "Auto-Chaptering"],
    integrations: ["Zoom API", "Google Meet", "Notion", "Slack"],
    testimonials: [
      {
        name: "Sarah M.",
        role: "Product Manager",
        quote: "I stopped taking notes during user interviews. The AI captures the feedback, assigns it to a feature request, and even captures the user's sentiment.",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it work with accents?",
        a: "Yes, the Whisper model is trained on 680,000 hours of diverse multi-lingual audio and handles heavy accents exceptionally well."
      },
      {
        q: "Can I edit the transcript?",
        a: "Yes, the interface provides a text-editor synced with the video player. Clicking a word in the text jumps the video to that exact timestamp."
      },
      {
        q: "How secure is the processing?",
        a: "Data is encrypted in transit and at rest. We offer zero-retention policies where data is deleted immediately after processing."
      },
      {
        q: "Does it support custom vocabulary?",
        a: "Yes, you can upload a dictionary of company-specific acronyms or product names to ensure correct transcription."
      }
    ]
  },

  // ==========================================
  // 10. VOICE AI (Synthesis & Analysis)
  // ==========================================
  {
    id: "voice-clone-studio",
    title: "VoiceClone Studio",
    subtitle: "Zero-Shot Voice Synthesis Engine",
    description: "A generative audio engine capable of cloning unique vocal timbres and prosody from as little as 3 seconds of reference audio.",
    longDescription: "VoiceClone Studio leverages state-of-the-art Diffusion Probabilistic Models to perform 'Zero-Shot' Text-to-Speech (TTS).  Unlike traditional TTS that requires hours of studio recording to train a model, this system encodes the speaker's vocal characteristics (pitch, tone, accent) into a latent vector embedding instantly.\n\nThis embedding conditions the diffusion model to generate new speech that is indistinguishable from the original speaker. Users can control fine-grained attributes such as emotion (happy, sad, whisper), pacing, and intonation. The technology includes an imperceptible audio watermark to prevent deepfake misuse, ensuring ethical deployment for content creators and game developers.",
    industry: "digital-media",
    service: "generative-audio",
    url: "https://github.com/myshell-ai/OpenVoice",
    category: "Voice Cloning",
    status: "Demo / API",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
    features: [
      "3-Second Voice Cloning",
      "Emotional Speech Synthesis",
      "Cross-Lingual Cloning",
      "Low-Latency Streaming API",
      "Audio Watermarking (Safety)",
      "Prosody Control"
    ],
    technologies: ["Diffusion Models", "VITS (Variational Inference)", "HiFi-GAN Vocoder", "Python"],
    benefits: ["Scale Audio Content Production", "Personalized Customer Experience", "Localization without Re-casting", "Dynamic Game Dialogue"],
    useCases: ["Audiobook Narration", "Dynamic NPC Dialogue in Games", "Personalized Marketing Videos"],
    stats: ["Instant Clone", "44.1kHz High Fidelity", "<200ms Latency"],
    integrations: ["Unity Engine", "Unreal Engine 5", "Audacity Plugin"],
    testimonials: [
      {
        name: "Chris P.",
        role: "Indie Game Dev",
        quote: "I voiced 50 unique NPCs in my game using just my own voice and this tool. The emotional range is incredible.",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you prevent fraud?",
        a: "We require 'Voice Verification'. The user must speak a specific generated phrase to prove they own the voice they are cloning."
      },
      {
        q: "Does it sound robotic?",
        a: "No. The use of HiFi-GAN vocoders ensures the output has natural breath pauses and realistic intonation, avoiding the 'metallic' sound of old TTS."
      },
      {
        q: "Can I change the accent?",
        a: "Yes. You can clone a British voice and have it speak with an American accent, or vice versa, by decoupling content from timbre."
      },
      {
        q: "Who owns the rights to the voice?",
        a: "You retain full commercial rights to any audio generated using your cloned voice models."
      }
    ]
  },
  {
    id: "podcast-dubber",
    title: "Podcast Auto-Dub",
    subtitle: "AI Dubbing & Lip Sync",
    description: "A localization pipeline that translates audio content while preserving the original speaker's voice identity and synchronizing video lip movements.",
    longDescription: "Podcast Auto-Dub enables creators to go global effortlessly. The system performs three complex tasks: 1) Transcription and Translation, 2) Cross-Lingual Voice Conversion (CLVC), and 3) Video Lip Synchronization.\n\nThe CLVC engine ensures that when you translate a podcast from English to Spanish, the Spanish output still sounds like *you*, not a generic stock voice. For video podcasts, the system uses a GAN (Generative Adversarial Network) to alter the pixels around the speaker's mouth, syncing the lip movements to the new Spanish phonemes. This creates a seamless viewing experience that eliminates the 'uncanny valley' effect of traditional dubbing.",
    industry: "media-localization",
    service: "video-translation",
    url: "#",
    category: "AI Localization",
    status: "Live Service",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
    features: [
      "Voice-Preserving Translation",
      "Video Lip-Sync (Wav2Lip)",
      "Background Noise Separation",
      "Multi-Speaker Support",
      "SRT/VTT Subtitle Generation",
      "20+ Target Languages"
    ],
    technologies: ["Wav2Lip GAN", "Hubert (Speech Model)", "Demucs (Source Separation)", "ElevenLabs"],
    benefits: ["Expand Audience 10x", "Native Viewer Experience", "Automated Post-Production", "SEO for Multiple Languages"],
    useCases: ["Educational Courses", "YouTube Content", "Corporate Training Videos"],
    stats: ["20+ Languages", "95% Voice Match", "Auto-Sync"],
    integrations: ["YouTube Studio", "Spotify for Podcasters", "Vimeo"],
    testimonials: [
      {
        name: "Maria G.",
        role: "YouTuber",
        quote: "My Spanish channel grew from 0 to 100k subs in a month because the dubbing is so good people think I'm fluent.",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it handle background music?",
        a: "Yes. We use 'Demucs' to separate the vocal track from the music/SFX. We process the vocals and then re-mix them with the original background track."
      },
      {
        q: "How accurate is the translation?",
        a: "We use context-aware translation models (like GPT-4). We also provide a specialized editor for you to correct specific terminology before audio synthesis."
      },
      {
        q: "Does the lip-sync look natural?",
        a: "Yes. The model regenerates the lower face pixels to match the phonemes of the target language, maintaining lighting and skin texture consistency."
      },
      {
        q: "How long does it take?",
        a: "Processing is approximately 2x real-time. A 30-minute video takes about an hour to fully dub and sync."
      }
    ]
  },
  {
    id: "meeting-minutes",
    title: "Minute Taker AI",
    subtitle: "Automated Corporate Secretary",
    description: "A secure audio intelligence tool that joins meetings, identifies speakers via biometrics, and generates legally compliant minutes and summaries.",
    longDescription: "Minute Taker AI is designed for high-stakes environments like boardrooms and legal depositions. It utilizes 'Beamforming' algorithms (when using supported hardware) to isolate voices in a crowded room. The audio stream is processed to extract not just text, but 'Named Entities' (people, companies, dates) and 'Intent'.\n\nThe AI is fine-tuned on legal and corporate datasets to distinguish between a casual suggestion and a formal motion. It auto-formats the output into industry-standard templates (Robert's Rules of Order), highlighting attendance, agenda items, motions passed, and assigned action items. It integrates with Outlook/Google Calendar to email the minutes to all attendees immediately after the call.",
    industry: "corporate-governance",
    service: "audio-intelligence",
    url: "#",
    category: "Speech-to-Text Ops",
    status: "Live Enterprise",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    features: [
      "Speaker Identification (Biometrics)",
      "Robert's Rules Formatting",
      "Motion & Vote Tracking",
      "Confidential/Redaction Mode",
      "CRM/ERP Integration",
      "Multi-language Transcription"
    ],
    technologies: ["Azure Cognitive Speech", "NVIDIA NeMo", "Spacy (NLP)", "TLS 1.3 Encryption"],
    benefits: ["100% Accurate Records", "Legal Compliance", "Immediate Post-Meeting Distribution", "Searchable Audio Vault"],
    useCases: ["Board of Directors Meetings", "Legal Depositions", "City Council Hearings"],
    stats: ["Legal Grade", "SOC2 Compliant", "99% Speaker ID"],
    integrations: ["Microsoft Teams", "Zoom", "Cisco Webex", "Clio (Legal Software)"],
    testimonials: [
      {
        name: "James H.",
        role: "Board Secretary",
        quote: "It captures the nuance of our board votes perfectly. The ability to click a sentence and hear the original audio is crucial for disputes.",
        avatar: "https://randomuser.me/api/portraits/men/88.jpg"
      }
    ],
    faqs: [
      {
        q: "Is the data used for training?",
        a: "No. For enterprise clients, we offer a 'Zero Data Retention' guarantee where audio is processed in RAM and never written to disk."
      },
      {
        q: "Can it handle shouting or over-talking?",
        a: "We use 'Source Separation' AI to disentangle overlapping speech, though heavy cross-talk is flagged in the transcript for manual review."
      },
      {
        q: "Does it join automatically?",
        a: "Yes, you can add the bot's email to the calendar invite, and it will dial in automatically at the start time."
      },
      {
        q: "Can I redact sensitive info?",
        a: "Yes, an 'Off the Record' voice command or post-meeting manual redaction tool allows you to scrub sensitive topics before distribution."
      }
    ]
  },

  // ==========================================
  // 11. FINTECH (High Frequency & DeFi)
  // ==========================================
  {
    id: "quant-trader-bot",
    title: "QuantTrader X",
    subtitle: "High-Frequency Arbitrage Bot",
    description: "An institutional-grade algorithmic trading engine that executes triangular arbitrage strategies across centralized and decentralized exchanges in milliseconds.",
    longDescription: "QuantTrader X brings hedge-fund capabilities to retail traders. It continuously monitors the order books of 20+ exchanges via WebSocket feeds.  \n\nThe bot detects 'Triangular Arbitrage' opportunities (e.g., Buy BTC with USD -> Sell BTC for ETH -> Sell ETH for USD) where price discrepancies exist. It executes these multi-leg trades atomically. If the profit margin (after fees and slippage) exceeds the configured threshold, the bot fires the orders. It features a 'Smart Order Router' to split large orders to minimize market impact. The system runs locally or on a cloud VPS to ensure minimum latency to exchange servers.",
    industry: "fintech-crypto",
    service: "algorithmic-trading",
    url: "https://github.com/hummingbot/hummingbot",
    category: "Quantitative Finance",
    status: "Live Bot",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Triangular & Spatial Arbitrage",
      "Flash Loan Integration (Aave/dYdX)",
      "Smart Order Routing (SOR)",
      "Stop-Loss & Trailing-Stop Logic",
      "Paper Trading Mode",
      "Portfolio Rebalancing"
    ],
    technologies: ["Python (Hummingbot)", "Solidity", "WebSockets", "Docker", "Redis"],
    benefits: ["Passive Income Generation", "Market Neutral Strategy", "24/7 Automation", "Zero-Emotion Trading"],
    useCases: ["Crypto Market Making", "DEX/CEX Arbitrage", "Liquidity Provision"],
    stats: ["<50ms Execution", "24/7 Uptime", "Risk-Managed"],
    integrations: ["Binance API", "Coinbase Pro", "Uniswap", "DyDx"],
    testimonials: [
      {
        name: "Alex R.",
        role: "Quant Trader",
        quote: "The flash loan integration is killer. I can execute arbitrage without holding the capital, leveraging the protocol's liquidity.",
        avatar: "https://randomuser.me/api/portraits/men/88.jpg"
      }
    ],
    faqs: [
      {
        q: "What is the risk of loss?",
        a: "Arbitrage is market-neutral, but risks include 'Execution Risk' (price changes before trade completes) and 'Exchange Risk' (withdrawal halts)."
      },
      {
        q: "Do I need coding skills?",
        a: "No, we provide pre-built strategies. However, Python knowledge allows you to customize the logic and indicators."
      },
      {
        q: "Does it support Flash Loans?",
        a: "Yes, on supported DeFi protocols, allowing you to borrow capital for the duration of the transaction to maximize arbitrage size."
      },
      {
        q: "How fast is it?",
        a: "On a proper VPS setup near the exchange servers, the internal processing time is under 5 milliseconds."
      }
    ]
  },
  {
    id: "defi-sniper",
    title: "DeFi Liquidity Sniper",
    subtitle: "Mempool Monitoring & Front-Running",
    description: "A specialized bot that monitors the blockchain mempool for new liquidity pair additions and executes buy transactions in the same block.",
    longDescription: "In DeFi, being first is everything. The DeFi Liquidity Sniper connects directly to an Ethereum/BSC node to watch the 'Mempool' (pending transaction pool). It filters for specific function calls like `addLiquidityETH`. \n\nWhen a target token launch is detected, the bot constructs a buy transaction with a higher gas price (bribe) to ensure miners prioritize it in the same block, often immediately after the liquidity is added. This allows the user to buy at the absolute listing price ('Block 0'). It includes safety checks like 'Honeypot Detection' (simulating a sell tx) to ensure the token isn't a scam before buying.",
    industry: "fintech-defi",
    service: "mev-bot",
    url: "#",
    category: "MEV / Sniping",
    status: "Private Tool",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d",
    features: [
      "Mempool Scanning",
      "Block-0 Entry Logic",
      "Anti-Rug Pull Simulation",
      "Gas War Optimization",
      "Auto-Sell Targets",
      "Multi-Wallet Support"
    ],
    technologies: ["Rust", "Web3.js", "Geth (Go-Ethereum)", "Smart Contracts"],
    benefits: ["Entry at Listing Price", "Automated Profit Taking", "Scam Avoidance Logic", "Beat Manual Traders"],
    useCases: ["IDO/Fair Launches", "DEX Listings", "Trend Trading"],
    stats: ["Block-0 Execution", "<2s Reaction", "Gas Optimized"],
    integrations: ["Ethereum", "Binance Smart Chain", "Avalanche", "Polygon"],
    testimonials: [
      {
        name: "CryptoDegen",
        role: "Trader",
        quote: "I manually tried to buy launches for months and failed. This bot gets me in every time. The rug checker saved me twice.",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg"
      }
    ],
    faqs: [
      {
        q: "Is front-running legal?",
        a: "It is a gray area. In DeFi, 'MEV' (Maximal Extractable Value) is a standard feature of how miners order transactions. You are competing on gas price."
      },
      {
        q: "Can I get 'sandwiched'?",
        a: "Yes, sophisticated MEV bots can attack you. Our bot includes 'Slippage Protection' to revert the transaction if the price impact is too high."
      },
      {
        q: "What prevents me from buying a scam?",
        a: "The bot runs a local simulation of a buy-and-sell transaction. If the sell fails (honeypot), the bot aborts the real buy."
      },
      {
        q: "How much gas does it use?",
        a: "It depends on network congestion. You can set a 'Max Gas Price' limit to avoid overpaying for failed transactions."
      }
    ]
  },
  {
    id: "stock-sentiment",
    title: "Market Sentiment AI",
    subtitle: "Alternative Data Signal Generator",
    description: "A predictive analytics platform that correlates financial news, social media velocity, and earnings call sentiment with stock price movements.",
    longDescription: "Market prices are driven by psychology as much as fundamentals. Market Sentiment AI ingests the 'Twitter Firehose', Reddit (WallStreetBets), and global news feeds (Bloomberg/Reuters) in real-time. \n\nUsing 'FinBERT' (a financial NLP model), it scores the sentiment of millions of posts from -1 (Bearish) to +1 (Bullish). It specifically looks for 'divergence'—where price is dropping but sentiment is turning bullish (a buy signal). The system also parses Earnings Call transcripts, detecting subtle cues in a CEO's voice or phrasing that indicate hesitation or confidence, often predicting post-earnings volatility.",
    industry: "fintech-analytics",
    service: "predictive-modeling",
    url: "#",
    category: "Financial NLP",
    status: "Data Dashboard",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    features: [
      "Real-time Social Sentiment Scoring",
      "Earnings Call Tone Analysis",
      "News Volume Anomaly Detection",
      "Influencer Tracking",
      "Price/Sentiment Correlation Charts",
      "API for Algo-Trading"
    ],
    technologies: ["BERT (NLP)", "Kafka", "ElasticSearch", "Python Scipy", "Tableau"],
    benefits: ["Predict Retail Trends", "Identify Short Squeezes", "Data-Driven Trading", "Brand Reputation Monitoring"],
    useCases: ["Hedge Funds", "Retail Trading", "Corporate IR"],
    stats: ["Analyze 1M+ Tweets/Day", "85% Trend Correlation", "Real-time"],
    integrations: ["Bloomberg Terminal", "Twitter API", "Reddit API", "Interactive Brokers"],
    testimonials: [
      {
        name: "Sarah L.",
        role: "Fund Analyst",
        quote: "The 'Hype Index' alerted us to the short squeeze two days before the price exploded. It's an essential part of our alpha.",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it filter out bots?",
        a: "Yes, we have a robust 'Bot Detection' layer that ignores spam accounts to ensure the sentiment score reflects real human opinion."
      },
      {
        q: "Can I trade directly from the dashboard?",
        a: "No, this is an analytics tool. However, you can use our webhooks to trigger trades in your own execution system."
      },
      {
        q: "How fast is the news ingestion?",
        a: "We ingest headlines via low-latency APIs within 500ms of publication."
      },
      {
        q: "Does it work for Crypto?",
        a: "Yes, we have specific models trained on crypto-slang (e.g., 'HODL', 'Moon', 'FUD') to accurately parse crypto sentiment."
      }
    ]
  },

  // ==========================================
  // 12. CYBERSECURITY (AI-Driven)
  // ==========================================
  {
    id: "fraud-sentinel",
    title: "FraudSentinel Graph",
    subtitle: "Graph Neural Network Fraud Detection",
    description: "A next-gen fraud detection system that utilizes Knowledge Graphs to identify complex money laundering rings and synthetic identities.",
    longDescription: "Traditional fraud rules (e.g., 'flag transactions > $10k') fail against organized crime. FraudSentinel represents data as a Graph, where nodes are users, IPs, devices, and cards.  \n\nIt applies algorithms like 'Louvain Modularity' and 'PageRank' to detect communities. If User A is connected to User B (fraudster) via a shared device ID 3 hops away, the system flags it. Graph Neural Networks (GNN) learn these structural patterns to predict risk scores in real-time. This is highly effective against 'Synthetic Identity Fraud' where criminals splice real and fake data to create new personas.",
    industry: "cybersecurity",
    service: "fraud-prevention",
    url: "https://github.com/neo4j-examples/fraud-detection-graph-data-science",
    category: "Graph Data Science",
    status: "Enterprise Deployment",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    features: [
      "Link Analysis & Community Detection",
      "Graph Neural Networks (GraphSAGE)",
      "Real-time Transaction Scoring",
      "Synthetic Identity Detection",
      "Visual Forensics Dashboard",
      "Explainable AI (Whitebox)"
    ],
    technologies: ["Neo4j Graph DB", "Python NetworkX", "TensorFlow GNN", "Cypher Query Language"],
    benefits: ["Detect Organized Crime Rings", "Reduce False Positives by 40%", "Real-time Blocking", "Visual Investigation"],
    useCases: ["Anti-Money Laundering (AML)", "Credit Card Fraud", "Insurance Claims"],
    stats: ["<100ms Scoring", "Detects 30% More Fraud", "Scalable to Billions of Nodes"],
    integrations: ["Splunk", "Nice Actimize", "Core Banking Systems"],
    testimonials: [
      {
        name: "Risk Manager",
        role: "Global Bank",
        quote: "We found a money laundering ring involving 50 accounts that looked normal individually but were clearly linked when viewed as a graph.",
        avatar: "https://randomuser.me/api/portraits/men/70.jpg"
      }
    ],
    faqs: [
      {
        q: "Is it hard to integrate with SQL databases?",
        a: "No, we use ETL pipelines to sync data from your SQL tables into the Graph model continuously."
      },
      {
        q: "How fast is the inference?",
        a: "For real-time payments, we use sub-graph sampling to generate a risk score in under 100 milliseconds."
      },
      {
        q: "Can I visualize the connections?",
        a: "Yes, the dashboard provides an interactive node-link diagram for investigators to explore the relationships."
      },
      {
        q: "Does it explain why a transaction was blocked?",
        a: "Yes, unlike 'Black Box' AI, our system highlights the specific path or connection (e.g., 'Linked to known fraudster via Device ID') that triggered the alert."
      }
    ]
  },
  {
    id: "phish-guard",
    title: "PhishGuard Email",
    subtitle: "NLU-Based Anti-Phishing Defense",
    description: "An API-based email security gateway that uses Natural Language Understanding to detect Business Email Compromise (BEC) and social engineering attacks.",
    longDescription: "PhishGuard goes beyond simple blacklist checking. It analyzes the *intent* and *context* of an email. Using NLU, it detects linguistic urgency ('Transfer funds now!'), authority impersonation (CEO Fraud), and subtle domain spoofing (homograph attacks). \n\nAttachments and URLs are detonated in a cloud-based Sandbox environment to observe their behavior before they reach the user. If an email is suspicious but not confirmed malicious, it inserts a dynamic warning banner: 'This email appears to be from the CEO but originated outside the organization'. It integrates via API (Graph API) rather than MX records, making it invisible to attackers.",
    industry: "cybersecurity",
    service: "email-security",
    url: "#",
    category: "Inbound Threat Defense",
    status: "Live Service",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Natural Language Understanding (NLU)",
      "Deep Learning OCR for Images",
      "File Sandboxing & Detonation",
      "Homograph/Typosquatting Detection",
      "Dynamic Warning Banners",
      "Post-Delivery Remediation"
    ],
    technologies: ["BERT (NLP)", "Computer Vision", "Docker (Sandboxing)", "Python"],
    benefits: ["Stop Zero-Day Phishing", "Prevent CEO Fraud", "Reduce IT Ticket Volume", "Seamless UX"],
    useCases: ["Corporate Email Security", "Credential Theft Prevention", "Ransomware Blocking"],
    stats: ["99.9% Catch Rate", "0.01% False Positives", "API-Based"],
    integrations: ["Microsoft 365 (Graph API)", "Google Workspace", "Slack"],
    testimonials: [
      {
        name: "CISO",
        role: "Healthcare Org",
        quote: "It caught a vendor invoice fraud attempt that bypassed our legacy secure email gateway. The NLP picked up on the unusual payment terms.",
        avatar: "https://randomuser.me/api/portraits/women/60.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it delay email delivery?",
        a: "The API analysis adds only 1-2 seconds of latency, which is imperceptible to the user."
      },
      {
        q: "What if an email is flagged after delivery?",
        a: "Our 'Post-Delivery Remediation' feature can automatically retract (delete) a malicious email from all user inboxes instantly."
      },
      {
        q: "Can it read text inside images?",
        a: "Yes, it uses Deep Learning OCR to read text in screenshots or invoices, detecting phishing attempts that try to bypass text filters."
      },
      {
        q: "Does it block internal-to-internal threats?",
        a: "Yes, it scans internal traffic to detect compromised accounts trying to spread lateral movement attacks."
      }
    ]
  },
  {
    id: "pentest-bot",
    title: "AutoPenTest",
    subtitle: "Continuous DAST Vulnerability Scanner",
    description: "An automated penetration testing agent that continuously probes web applications and APIs for OWASP Top 10 vulnerabilities using AI-driven fuzzing.",
    longDescription: "Security should not be a once-a-year activity. AutoPenTest integrates into your CI/CD pipeline to perform Dynamic Application Security Testing (DAST) on every build. \n\nIt utilizes a crawler to map the application structure and then employs an AI fuzzer to inject payloads (SQLi, XSS, Command Injection) into input fields and API endpoints. Unlike standard scanners, it understands logic flow—it can authenticate, maintain sessions, and navigate complex wizards. When a vulnerability is found, it generates a 'Replay Script' (cURL) for the developer to reproduce the bug and validates the fix automatically once the patch is deployed.",
    industry: "devsecops",
    service: "automated-security-testing",
    url: "#",
    category: "Vulnerability Management",
    status: "Live Tool",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    features: [
      "AI-Driven Payload Fuzzing",
      "OWASP Top 10 Coverage",
      "Authenticated Scanning",
      "API Schema Parsing (Swagger/OpenAPI)",
      "False Positive Reduction Engine",
      "Auto-Generated Fix Recommendations"
    ],
    technologies: ["OWASP ZAP", "Burp Suite Engine", "Python", "Selenium", "Docker"],
    benefits: ["Shift Security Left", "Find Bugs Before Production", "Compliance Evidence (ISO/SOC2)", "Reduce Penetration Testing Costs"],
    useCases: ["SaaS Web Apps", "REST/GraphQL APIs", "Microservices Security"],
    stats: ["Scan 1000+ Endpoints/Hr", "Zero Config", "Developer Friendly"],
    integrations: ["Jenkins", "GitHub Actions", "Jira", "Slack"],
    testimonials: [
      {
        name: "DevOps Lead",
        role: "Fintech Startup",
        quote: "It blocked a deployment because it found a Critical SQL Injection in a new endpoint. Saved us from a potential disaster.",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ],
    faqs: [
      {
        q: "Is it safe to run on production?",
        a: "We have a 'Safe Mode' that performs non-destructive reading tests. However, full active scanning is recommended for Staging/QA environments only."
      },
      {
        q: "Can it scan Single Page Apps (SPAs)?",
        a: "Yes, it uses a headless browser (Chromium) to execute JavaScript and render the DOM, ensuring it sees the app exactly as a user does."
      },
      {
        q: "Does it support GraphQL?",
        a: "Yes, it parses the Introspection schema to understand the graph and constructs valid queries to test for authorization flaws."
      },
      {
        q: "How does it reduce false positives?",
        a: "It verifies the exploitability. For example, if it suspects SQL Injection, it attempts to extract a benign piece of data (like version number) to confirm the flaw exists."
      }
    ]
  },


  // ==========================================
  // 13. INDUSTRIAL IOT (IIoT 4.0)
  // ==========================================
  {
    id: "factory-iot-twin",
    title: "Factory Digital Twin",
    subtitle: "Predictive Maintenance & Telemetry",
    description: "A synchronized virtual replica of physical assets utilizing real-time telemetry and physics-based modeling to predict component failure.",
    longDescription: "The Factory Digital Twin is the cornerstone of Industry 4.0. It establishes a bidirectional link between physical assets (CNC machines, turbines, conveyor belts) and their digital counterparts.  \n\nData is ingested via Edge Gateways supporting industrial protocols like OPC UA, Modbus, and MQTT. This high-frequency time-series data (vibration, acoustics, thermal gradients) feeds into a Recurrent Neural Network (RNN) trained on historical failure modes. The system calculates the 'Remaining Useful Life' (RUL) of critical components, allowing maintenance teams to shift from reactive repairs to condition-based maintenance strategies. The 3D visualization layer, built on WebGL, allows remote operators to inspect machine status and simulate operational changes in a risk-free virtual environment before applying them to the physical floor.",
    industry: "manufacturing-iiot",
    service: "predictive-maintenance",
    url: "https://github.com/thingsboard/thingsboard",
    category: "Industrial IoT",
    status: "Pilot Deployment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    features: [
      "Real-time Telemetry Ingestion (100ms latency)",
      "Physics-Informed Neural Networks (PINNs)",
      "3D Asset Visualization",
      "Anomaly Detection (Vibration/Thermal)",
      "Remote SCADA Control",
      "OPC UA / Modbus Bridge"
    ],
    technologies: ["Apache Kafka", "TensorFlow", "Three.js (3D)", "InfluxDB (Time Series)", "Kubernetes"],
    benefits: ["Eliminate Unplanned Downtime", "Extend Asset Lifespan", "Remote Operational Visibility", "Reduce Maintenance Costs by 30%"],
    useCases: ["Automotive Assembly Lines", "Oil Refineries", "Semiconductor Fabs"],
    stats: ["20% Energy Save", "90% Fault Prediction", "300% ROI"],
    integrations: ["Siemens Mindsphere", "AWS IoT Core", "Azure Digital Twins", "SAP PM"],
    testimonials: [
      {
        name: "Plant Manager",
        role: "Auto Manufacturer",
        quote: "The vibration analysis caught a bearing failure on the main turbine two weeks before it would have seized. That saved us $2M in lost production.",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle intermittent connectivity?",
        a: "We utilize Edge Computing nodes that buffer data locally during network outages and sync with the cloud twin once connectivity is restored."
      },
      {
        q: "Can it simulate production changes?",
        a: "Yes. You can run 'What-If' scenarios in the digital twin (e.g., increasing line speed by 10%) to see the impact on engine temperature without risking the real machine."
      },
      {
        q: "What protocols are supported?",
        a: "Native support for MQTT, CoAP, HTTP, OPC UA, BACnet, and Modbus TCP."
      },
      {
        q: "Is the model custom per machine?",
        a: "We start with a generic physics model for the asset class and fine-tune it using Transfer Learning based on the specific machine's historical data."
      }
    ]
  },
  {
    id: "energy-optimizer",
    title: "Energy Optima",
    subtitle: "AI-Driven HVAC & BMS Controller",
    description: "A reinforcement learning agent that optimizes Building Management Systems (BMS) to minimize carbon footprint and energy costs without compromising occupant comfort.",
    longDescription: "Energy Optima transforms static buildings into cognitive environments. It bypasses rigid, rule-based HVAC schedules in favor of Deep Reinforcement Learning (DRL). The agent ingests hyper-local weather data, real-time occupancy heatmaps from WiFi access points, and thermal inertia characteristics of the building structure.\n\nIt predicts thermal loads hours in advance (e.g., 'pre-cooling' a conference room before a 9 AM meeting) to utilize energy when rates are lowest (Time-of-Use optimization). It continuously balances the 'Comfort Index' (PMV/PPD) against energy consumption targets, making micro-adjustments to damper positions, chiller setpoints, and lighting zones every minute.",
    industry: "smart-infrastructure",
    service: "energy-management",
    url: "#",
    category: "Sustainable IoT",
    status: "Live Production",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    features: [
      "Deep Reinforcement Learning Control Loop",
      "Occupancy-Based HVAC Zoning",
      "Peak Load Shedding",
      "Carbon Emission Tracking",
      "Automated Demand Response (ADR)",
      "Predictive Pre-Cooling/Heating"
    ],
    technologies: ["Python (PyTorch)", "BacNet IP", "LoRaWAN Sensors", "InfluxDB"],
    benefits: ["25-40% Reduction in HVAC Costs", "LEED Certification Points", "Extended Equipment Life", "Automated Compliance Reporting"],
    useCases: ["Commercial Skyscrapers", "Cold Storage Warehouses", "University Campuses"],
    stats: ["25% Energy Reduction", "Auto-Pilot", "Net Zero Support"],
    integrations: ["Honeywell BMS", "Johnson Controls", "Smart Metering Infrastructure"],
    testimonials: [
      {
        name: "Facility Director",
        role: "Tech Campus",
        quote: "It automatically ramped down the AC during the grid peak hours, earning us demand response credits while keeping the office cool.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it require replacing existing HVAC?",
        a: "No. It acts as a supervisory layer, sending setpoint adjustments to your existing BMS via BACnet or Modbus overlay."
      },
      {
        q: "How does it measure comfort?",
        a: "We use the Fanger PMV (Predicted Mean Vote) model, incorporating temperature, humidity, and air velocity sensors."
      },
      {
        q: "Is it secure from cyber attacks?",
        a: "The gateway uses a unidirectional diode for data egress and requires VPN tunneling with MFA for any control command ingress."
      },
      {
        q: "Does it work with solar integration?",
        a: "Yes, it optimizes consumption to align with peak solar generation periods to maximize self-consumption."
      }
    ]
  },

  // ==========================================
  // 14. HEALTHTECH (MedTech & Bio)
  // ==========================================
  {
    id: "medi-scan-ai",
    title: "MediScan AI",
    subtitle: "Radiological Computer Vision Assistant",
    description: "A regulatory-compliant diagnostic aid utilizing 3D Convolutional Neural Networks (CNNs) to detect pathologies in volumetric medical imaging.",
    longDescription: "MediScan acts as a high-precision triage engine for radiology departments. It ingests DICOM files (MRI, CT, PET scans) and processes them through a U-Net architecture optimized for 3D volumetric segmentation.  \n\nThe system identifies and bounds regions of interest (ROI) such as pulmonary nodules, intracranial hemorrhages, or micro-fractures with pixel-level precision. It assigns a 'Severity Score' to each scan, re-ordering the radiologist's worklist to ensure life-threatening conditions are reviewed first. The AI output includes visual heatmaps overlaid on the original scan and an automated preliminary report, significantly reducing the cognitive load on physicians.",
    industry: "healthcare-diagnostics",
    service: "medical-imaging",
    url: "https://github.com/Project-MONAI/MONAI",
    category: "AI Diagnostics",
    status: "Clinical Research / 510(k) Pending",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    features: [
      "3D Volumetric Segmentation",
      "Automated Triage & Worklist Prioritization",
      "Longitudinal Tumor Tracking",
      "Incidental Finding Detection",
      "DICOM/PACS Interoperability",
      "False Positive Reduction Layer"
    ],
    technologies: ["MONAI Framework", "PyTorch", "NVIDIA Clara", "DICOM Standard"],
    benefits: ["Reduce Diagnosis Time by 40%", "99% Sensitivity for Nodule Detection", "Minimize Radiologist Burnout", "Standardized Reporting"],
    useCases: ["Oncology Screening", "Emergency Room Triage", "Neurology"],
    stats: ["99% Accuracy", "HIPAA Compliant", "40% Faster Reporting"],
    integrations: ["GE Healthcare PACS", "Epic EHR", "Nuance PowerScribe"],
    testimonials: [
      {
        name: "Dr. Gupta",
        role: "Chief of Radiology",
        quote: "It flagged a subtle brain bleed in a trauma patient that was easily missable during a busy night shift. It saves lives.",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg"
      }
    ],
    faqs: [
      {
        q: "Does the data leave the hospital?",
        a: "No. We deploy via Federated Learning or on-premise Edge Servers, ensuring patient data (PHI) never leaves the hospital firewall."
      },
      {
        q: "How does it handle artifacts in scans?",
        a: "The model is trained with data augmentation (noise, motion blur) to be robust against low-quality or artifact-heavy scans."
      },
      {
        q: "Does it explain its decision?",
        a: "Yes, we use Grad-CAM (Gradient-weighted Class Activation Mapping) to visualize exactly which pixels influenced the AI's prediction."
      },
      {
        q: "Can it compare against prior scans?",
        a: "Yes, it performs image registration to align current and past scans, automatically calculating tumor growth or shrinkage rates."
      }
    ]
  },
  {
    id: "drug-discovery",
    title: "Drug Discovery AI",
    subtitle: "Generative Molecular Design Engine",
    description: "An in-silico platform utilizing geometric deep learning to predict protein folding and generate novel small molecule candidates.",
    longDescription: "Drug Discovery AI shifts the paradigm from 'discovery' to 'design'. Using AlphaFold-derived models, it predicts the 3D structure of target proteins with atomic accuracy.  \n\nThe Generative Chemistry module then employs Graph Neural Networks (GNNs) to hallucinate millions of novel molecular structures, optimizing for binding affinity, solubility (LogP), and toxicity (ADMET properties). This computational funnel screens billions of compounds in the cloud, narrowing the field to a few dozen high-probability candidates for wet-lab synthesis. This process compresses the 'Hit-to-Lead' timeline from years to months.",
    industry: "biotech-pharma",
    service: "computational-biology",
    url: "#",
    category: "De Novo Drug Design",
    status: "Research / Enterprise",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    features: [
      "Protein Structure Prediction (Folding)",
      "Ligand-Protein Docking Simulation",
      "ADMET Property Prediction",
      "De Novo Molecule Generation",
      "High-Throughput Virtual Screening",
      "Synthetic Feasibility Scoring"
    ],
    technologies: ["AlphaFold 2", "PyTorch Geometric", "RDKit", "GROMACS (Simulation)"],
    benefits: ["Reduce Hit-to-Lead Time by 70%", "Lower R&D Costs", "Optimize Bioavailability In-Silico", "Minimize Animal Testing"],
    useCases: ["Oncology", "Rare Diseases", "Antibiotic Resistance"],
    stats: ["Screen 1B+ Compounds", "90% Cost Reduction", "Novel IP Generation"],
    integrations: ["Laboratory Information Management Systems (LIMS)", "Schrödinger Suite"],
    testimonials: [
      {
        name: "Dr. Aris",
        role: "Lead Researcher",
        quote: "We identified a potent inhibitor for a previously 'undruggable' target in 3 months. The traditional method would have taken 2 years.",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg"
      }
    ],
    faqs: [
      {
        q: "How accurate is the binding affinity prediction?",
        a: "Our models achieve a correlation coefficient (R²) of >0.8 against experimental data for known kinase targets."
      },
      {
        q: "Does it account for synthesis difficulty?",
        a: "Yes, it includes a 'Synthetic Accessibility Score' (SAS) to ensure generated molecules can actually be manufactured in a lab."
      },
      {
        q: "What is the compute requirement?",
        a: "The platform runs on High-Performance Computing (HPC) clusters utilizing hundreds of NVIDIA A100 GPUs for parallel simulation."
      },
      {
        q: "Can it repurpose existing drugs?",
        a: "Yes, it can screen FDA-approved libraries against new targets to identify off-label usage potential."
      }
    ]
  },

  // ==========================================
  // 15. LEGALTECH (RegTech)
  // ==========================================
  {
    id: "legal-contract-ai",
    title: "LegalEagle AI",
    subtitle: "Automated Contract Review & Redlining",
    description: "A specialized NLP agent that reviews legal documents against a corporate playbook, identifying risks and suggesting redlines in seconds.",
    longDescription: "LegalEagle AI acts as a force multiplier for legal teams. It ingests contracts (NDAs, MSAs, SaaS Agreements) and decomposes them into clauses using Semantic Segmentation. It compares these clauses against your organization's 'Golden Playbook'—a set of preferred terms and risk tolerances. \n\nIf a counterparty's indemnity clause is too broad or the jurisdiction is unfavorable, the AI flags it as 'High Risk' and suggests specific redline language to mitigate that risk. It can handle complex logic, such as cross-referencing definitions across a 100-page document, ensuring consistency that human review might miss due to fatigue.",
    industry: "legal-tech",
    service: "contract-lifecycle-management",
    url: "https://github.com/StanGirard/quivr",
    category: "Contract AI",
    status: "Live Enterprise",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    features: [
      "Playbook-Based Risk Scoring",
      "Automated Redlining (Track Changes)",
      "Missing Clause Detection",
      "Multi-Jurisdictional Logic",
      "Semantic Clause Comparison",
      "Legacy Contract Metadata Extraction"
    ],
    technologies: ["GPT-4 (Fine-tuned)", "Spacy (NLP)", "OCR (Tesseract)", "Vector Embeddings"],
    benefits: ["80% Faster Contract Turnaround", "Standardized Risk Posture", "Reduce Outside Counsel Spend", "Eliminate Human Error"],
    useCases: ["Procurement Contracts", "Sales MSAs", "M&A Due Diligence"],
    stats: ["Review 50 Pages/Min", "95% Accuracy", "ISO 27001 Certified"],
    integrations: ["DocuSign CLM", "Salesforce", "Clio", "Microsoft Word Add-in"],
    testimonials: [
      {
        name: "General Counsel",
        role: "SaaS Firm",
        quote: "It cleared our NDA backlog in a day. My team now focuses on complex negotiations instead of proofreading standard clauses.",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it learn from my edits?",
        a: "Yes, it utilizes Reinforcement Learning from Human Feedback (RLHF). If you reject a suggestion, the model updates its weights to align better with your preferences."
      },
      {
        q: "Is the data used to train public models?",
        a: "No. We offer private model instances where training data is siloed strictly within your tenant."
      },
      {
        q: "Can it handle scanned PDFs?",
        a: "Yes, integrated OCR converts scanned images into machine-readable text before analysis."
      },
      {
        q: "Does it replace lawyers?",
        a: "No, it is a 'Human-in-the-Loop' system. It handles the initial review and triage, but final sign-off remains with the attorney."
      }
    ]
  },

  // ==========================================
  // 16. HR TECH (People Operations)
  // ==========================================
  {
    id: "talentflow-bot",
    title: "TalentFlow Bot",
    subtitle: "Conversational AI Recruiter",
    description: "A voice-enabled, autonomous screening agent that conducts structured initial interviews, assesses soft skills, and reduces time-to-hire.",
    longDescription: "TalentFlow Bot automates the high-volume top-of-funnel recruiting process. It initiates phone calls or video chats with candidates, conducting a structured interview based on the role's requirements. Using state-of-the-art Speech-to-Text (STT) and NLU, it parses candidate responses for key technical competencies, experience levels, and communication clarity.\n\nThe system evaluates soft skills through sentiment and tone analysis, generating a comprehensive 'Candidate Scorecard'. It helps eliminate unconscious bias by asking standardized questions and evaluating purely on content, ensuring a fair screening process across all demographics. Only qualified candidates are pushed to human recruiters for the final rounds.",
    industry: "hr-tech",
    service: "automated-recruiting",
    url: "https://github.com/livekit/agents",
    category: "Talent Acquisition AI",
    status: "v2.0 Production",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    features: [
      "Real-time Voice Conversational AI",
      "Competency-Based Scoring",
      "Soft-Skill & Sentiment Analysis",
      "Bias-Reduction Algorithms",
      "Automated Scheduling",
      "Fraud Detection (Voice Biometrics)"
    ],
    technologies: ["OpenAI Whisper", "Twilio Voice API", "LangChain", "Vector DB"],
    benefits: ["Reduce Time-to-Hire by 50%", "24/7 Interview Availability", "Standardized Screening Process", "Bias Mitigation"],
    useCases: ["High-Volume Retail Hiring", "Customer Support Staffing", "Graduate Program Screening"],
    stats: ["Screen 1000s/Day", "90% CSAT", "Zero Bias"],
    integrations: ["Greenhouse", "Lever", "Workday", "Calendly"],
    testimonials: [
      {
        name: "Head of Talent",
        role: "Retail Chain",
        quote: "We scaled from 100 to 1,000 hires for the holiday season without adding a single recruiter. The bot handled 5,000 screens.",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it reduce bias?",
        a: "The AI is blind to gender, accent, and name. It evaluates solely based on the semantic content of the answer mapped against the job competency framework."
      },
      {
        q: "Can candidates trick the AI?",
        a: "It includes proctoring features that flag suspicious behaviors, such as long pauses suggesting looking up answers or detection of another voice in the room."
      },
      {
        q: "Does it work for technical roles?",
        a: "Yes, it can ask coding theory questions or scenario-based technical questions and evaluate the logic of the response."
      },
      {
        q: "Is it compliant with employment laws?",
        a: "Yes, it provides full transcripts for audit trails and complies with EEOC and GDPR regulations regarding automated decision-making."
      }
    ]
  },
  
  // ==========================================
  // 17. MARKETING AI (Generative Content)
  // ==========================================
  {
    id: "brand-voice-genie",
    title: "Brand Voice Genie",
    subtitle: "Style-Transfer Content Engine",
    description: "A generative AI platform that learns your unique brand voice and creates omni-channel marketing assets that are indistinguishable from human-written copy.",
    longDescription: "Generic AI copy sounds robotic. Brand Voice Genie solves this by fine-tuning LLMs on your specific brand assets—past high-performing blogs, whitepapers, and social posts. It creates a 'Brand Vector Embedding' that captures your tone, vocabulary, and sentence structure.\n\nMarketers can input a single product feature, and the Genie generates a cohesive campaign: a long-form blog post, a punchy Twitter thread, a professional LinkedIn article, and an Instagram caption, all maintaining consistent messaging. It automatically optimizes content for SEO, inserting keywords naturally while maintaining readability.",
    industry: "martech",
    service: "generative-content",
    url: "https://github.com/danielmiessler/fabric",
    category: "Content Automation",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
    features: [
      "Few-Shot Style Transfer",
      "Omni-Channel Repurposing",
      "SEO Keyword Injection",
      "Plagiarism & Hallucination Check",
      "Multi-Language Localization",
      "DALL-E 3 Image Generation"
    ],
    technologies: ["GPT-4-Turbo", "Fine-Tuned Llama 3", "Vector Databases", "Stable Diffusion"],
    benefits: ["10x Content Output", "Consistent Brand Identity", "Faster Go-to-Market", "Global Localization"],
    useCases: ["Social Media Management", "Content Marketing", "Email Drip Campaigns"],
    stats: ["10x Output", "SEO Ranked", "15+ Languages"],
    integrations: ["HubSpot", "WordPress", "Sprout Social", "Google Analytics"],
    testimonials: [
      {
        name: "CMO",
        role: "Tech Startup",
        quote: "It's like cloning my best copywriter. We produce a month's worth of content in an afternoon, and the engagement rates are actually higher.",
        avatar: "https://randomuser.me/api/portraits/men/30.jpg"
      }
    ],
    faqs: [
      {
        q: "Will Google penalize AI content?",
        a: "Our content focuses on 'Helpful Content' guidelines. It is structured to provide value and can be human-edited to ensure it passes quality thresholds."
      },
      {
        q: "Can it handle technical jargon?",
        a: "Yes, uploading technical documentation helps the model understand and correctly use industry-specific terminology."
      },
      {
        q: "Does it know current events?",
        a: "Yes, it has web-browsing capabilities to reference real-time trends and news in the generated content."
      },
      {
        q: "Who owns the copyright?",
        a: "You retain full ownership of all generated text and images."
      }
    ]
  },

// ==========================================
// 17. VOICE & CUSTOMER EXPERIENCE (CX)
// ==========================================
  {
    id: "voice-xperience",
    title: "Voice-Xperience",
    subtitle: "Real-time Emotional Intelligence Voice Layer",
    description: "An ultra-low latency voice AI platform that bridges the gap between human empathy and machine efficiency through prosody analysis and natural turn-taking.",
    longDescription: "Voice-Xperience is a high-performance conversational middleware designed for enterprise-scale customer interactions. Unlike traditional IVR systems, this engine utilizes a 'Streaming Speech-to-Speech' (S2S) architecture, reducing the perception of 'AI lag' to under 500ms. \n\nThe platform's core differentiator is its Emotional Prosody Engine, which analyzes vocal pitch, tempo, and inflection to detect customer frustration or satisfaction in real-time. This allows the AI to dynamically adjust its own persona—shifting from a standard helpful tone to a more empathetic, apologetic tone if it detects rising tension. \n\nBuilt for high-concurrency environments, Voice-Xperience integrates directly with telephony backbones via SIP Trunking and utilizes a RAG (Retrieval-Augmented Generation) framework to ensure that every response is grounded in the company's live knowledge base. It effectively handles complex interruptions and 'over-talking,' allowing for a fluid, human-like dialogue that achieves a 95% resolution rate without human intervention.",
    industry: "customer-experience",
    service: "voice-ai-middleware",
    url: "https://voice-xperience.webisdomtech.com",
    category: "Emotional AI / CX Automation",
    status: "Production Ready",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
    features: [
      "Sub-500ms End-to-End Latency",
      "Real-time Emotional Prosody Detection",
      "Dynamic Persona Switching",
      "Intelligent Interruption Handling",
      "Knowledge-Base Grounding (RAG)",
      "Multi-Accent & Dialect Support"
    ],
    technologies: ["Custom TTS Models", "WebRTC", "Pinecone Vector DB", "Python (FastAPI)", "Deepgram ASR"],
    benefits: ["40% Reduction in Average Handle Time", "24/7 Multi-lingual Support", "Hyper-Personalized Brand Voice", "Automated Post-Call Summarization"],
    useCases: ["Technical Support Desks", "Insurance Claims Intake", "Outbound Appointment Setting"],
    stats: ["<500ms Latency", "95% Resolution", "40+ Languages"],
    integrations: ["Zendesk", "Salesforce Service Cloud", "Genesis", "Twilio Flex"],
    testimonials: [
      {
        name: "Michael T.",
        role: "Director of CX, FinServ Global",
        quote: "The low latency is what sets it apart. Our customers don't feel like they are talking to a bot because the AI understands nuances and interruptions perfectly.",
        avatar: "https://randomuser.me/api/portraits/men/82.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it handle loud background noise?",
        a: "We use a neural-based noise suppression layer at the edge that filters out environmental sounds (traffic, babies, office chatter) before the audio hits the NLU engine."
      },
      {
        q: "Can it transfer to a human agent seamlessly?",
        a: "Yes. Using SIP Refer, the AI can execute a 'Warm Handoff,' passing the full conversation transcript and sentiment context to a live agent's screen instantly."
      },
      {
        q: "Is the voice customizable to our brand?",
        a: "Absolutely. We can clone a specific brand voice using as little as 30 minutes of high-quality studio audio to ensure consistent brand identity."
      },
      {
        q: "How does it manage data privacy for voice recordings?",
        a: "We provide PII-redaction on the fly. All audio is processed in memory and can be set to delete immediately after the transcription is finalized for compliance."
      }
    ]
  },

  // ==========================================
  // 18. AGRITECH (Precision Farming)
  // ==========================================
  {
    id: "agri-vision",
    title: "AgriVision Bot",
    subtitle: "Multispectral Crop Intelligence",
    description: "A computer vision pipeline that processes drone and satellite imagery to generate prescription maps for precision agriculture.",
    longDescription: "AgriVision brings big data to the field. It ingests multispectral imagery (NDVI, NDRE) from UAVs and satellites to assess crop health at a sub-meter resolution.  \n\nThe AI detects stress signals invisible to the naked eye—early-stage fungal infections, nutrient deficiencies, or water stress. It generates 'Variable Rate Application' (VRA) maps that integrate with smart tractors. Instead of spraying an entire field uniformly, the VRA map instructs the sprayer to apply chemicals *only* where needed, reducing input costs by up to 30% and minimizing environmental runoff.",
    industry: "agtech",
    service: "remote-sensing",
    url: "https://github.com/microsoft/farmvibes-ai",
    category: "Precision Agriculture",
    status: "Pilot Deployment",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    features: [
      "NDVI/NDRE Health Indexing",
      "Weed vs. Crop Segmentation",
      "Variable Rate Application (VRA) Maps",
      "Yield Forecasting Models",
      "Soil Moisture Analysis",
      "Pest Infestation Heatmaps"
    ],
    technologies: ["Computer Vision (CNN)", "Satellite Imagery (Sentinel-2)", "Edge Inference", "Python Geospatial"],
    benefits: ["30% Reduction in Fertilizer/Pesticide", "Maximize Crop Yield", "Early Disease Detection", "Sustainable Farming"],
    useCases: ["Large Scale Cereal Farming", "Vineyard Management", "Orchard Monitoring"],
    stats: ["Reduce Inputs 30%", "95% Weed Detection", "Sub-meter Accuracy"],
    integrations: ["John Deere Operations Center", "DJI Terra", "Climate FieldView"],
    testimonials: [
      {
        name: "Farm Operator",
        role: "Corn Grower",
        quote: "We spotted a nitrogen deficiency in the north acre weeks before it showed on the leaves. We treated just that spot and saved the harvest.",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg"
      }
    ],
    faqs: [
      {
        q: "Does it work with any drone?",
        a: "It works best with drones equipped with Multispectral cameras (MicaSense, DJI Phantom 4 Multispectral) but can derive basic indices from standard RGB drones."
      },
      {
        q: "How long does processing take?",
        a: "Edge processing on a field laptop can stitch and analyze a 100-acre field in under 30 minutes without internet."
      },
      {
        q: "Can it estimate yield?",
        a: "Yes, by analyzing canopy cover and plant height, the model provides a yield forecast with +/- 10% accuracy."
      },
      {
        q: "Is it weather dependent?",
        a: "Drone flights require clear weather, but our satellite integration provides continuous (though lower resolution) coverage."
      }
    ]
  },
  
  // ==========================================
  // 23. MISC / Ethical AI
  // ==========================================
  {
    id: "ethical-ai-guard",
    title: "Ethical AI Guard",
    subtitle: "Algorithmic Bias & Fairness Auditor",
    description: "A governance toolkit that scans Machine Learning models for hidden biases and explainability issues, ensuring compliance with AI regulations.",
    longDescription: "As AI adoption grows, so does the risk of algorithmic bias. Ethical AI Guard acts as a firewall for your models. It performs 'Stress Testing' on your datasets and trained models to detect disparate impacts across protected groups (Race, Gender, Age).  \n\nIt calculates key fairness metrics like 'Demographic Parity' and 'Equalized Odds'. If a credit scoring model rejects 20% more applicants from a specific demographic despite similar credentials, the tool flags the bias and identifies the specific features causing it using SHAP (Shapley Additive explanations) values. It generates comprehensive audit reports required for compliance with the EU AI Act and NYC AEDT law.",
    industry: "ai-governance",
    service: "model-auditing",
    url: "#",
    category: "Responsible AI",
    status: "Enterprise Tool",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    features: [
      "Automated Bias Detection (Disparate Impact)",
      "Explainable AI (XAI) Dashboard",
      "Adversarial Attack Robustness Test",
      "Regulatory Compliance Reporting",
      "Data Drift Monitoring",
      "Fairness Constraint Optimization"
    ],
    technologies: ["Python (Fairlearn)", "SHAP/LIME", "MLflow", "Docker"],
    benefits: ["Mitigate Reputational Risk", "Ensure Regulatory Compliance", "Build Trust in AI Decisions", "Transparent Model Governance"],
    useCases: ["Credit Scoring Models", "Hiring Algorithms", "Healthcare Triage"],
    stats: ["Detect 15+ Bias Types", "Audit Ready", "Ensure <5% Variance"],
    integrations: ["Seldon Core", "AWS SageMaker", "Azure ML", "TensorBoard"],
    testimonials: [
      {
        name: "Chief Ethics Officer",
        role: "Fintech",
        quote: "It revealed a proxy bias in our zip code data that we hadn't noticed. We fixed the model before deployment, avoiding a potential PR disaster.",
        avatar: "https://randomuser.me/api/portraits/women/88.jpg"
      }
    ],
    faqs: [
      {
        q: "How does it define fairness?",
        a: "It allows you to select the fairness definition (e.g., Equal Opportunity vs. Demographic Parity) relevant to your specific use case and legal requirements."
      },
      {
        q: "Does it fix the model automatically?",
        a: "It provides 'Mitigation Algorithms' (like re-weighing data) that you can apply, but the final decision on trade-offs between accuracy and fairness is human-led."
      },
      {
        q: "Can it explain deep learning models?",
        a: "Yes, it uses model-agnostic techniques like SHAP and LIME to interpret even complex 'black box' neural networks."
      },
      {
        q: "What data formats are supported?",
        a: "It supports structured tabular data (CSV, Parquet) and is expanding to NLP and Computer Vision datasets."
      }
    ]
  }
];
