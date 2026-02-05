import { 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, 
  Home, Factory, Truck, Gavel, Cpu, Wheat, TrendingUp, Sparkles 
} from "lucide-react";

export const industries = [
  {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "Enterprise-Grade Autonomous Hotel Ecosystem",
    description: "A monolithic, cloud-native hospitality operating system that leverages deep learning and IoT orchestration to automate end-to-end hotel logistics.",
    longDescription: "AI Chieftain represents the zenith of hospitality technology, functioning not merely as a management tool but as the central autonomic nervous system for enterprise-grade properties. Built upon a microservices architecture, it decouples the traditional monolith of hotel operations into scalable, independent modules—housekeeping, concierge, inventory, and energy management—all orchestrated by a central AI core.\n\nAt its heart lies a proprietary Predictive Intent Engine (PIE) built on TensorFlow, which aggregates petabytes of historical guest data, local event APIs, and weather patterns to forecast guest needs with 94% accuracy before a request is even voiced. This allows for hyper-personalized experiences, such as pre-adjusting room climate via IoT protocols (MQTT/CoAP) based on the guest's known preferences from previous stays across global properties.\n\nThe platform supports a headless commerce structure, allowing for seamless API-first integrations with third-party vendors, from robotic butler services to automated valet systems. By utilizing edge computing nodes within the property, AI Chieftain processes sensitive biometric data for contactless check-ins locally, ensuring GDPR/CCPA compliance while reducing latency to microseconds. It transforms the physical hotel into a responsive, digital entity that self-optimizes for energy consumption, staff allocation, and revenue maximization in real-time.",
    industry: "hospitality",
    service: "enterprise-ai-solutions",
    url: "https://webisdomtech.com/contact",
    category: "Hospitality AI Infrastructure",
    status: "Live Platform (Enterprise)",
    icon: Hotel,
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
        a: "We utilize an intelligent middleware layer with leaky bucket algorithms to throttle requests and cache non-critical data (Redis), ensuring we never hit the API limits of legacy OWS interfaces."
      },
      {
        q: "What is the security protocol for biometric data storage?",
        a: "All biometric data is tokenized using SHA-256 hashing and stored in isolated cold storage buckets. We employ Zero Trust Architecture (ZTA) requiring mutual TLS (mTLS) for all internal communications."
      }
    ]
  },
  {
    id: "fintech",
    title: "Fintech",
    subtitle: "High-Frequency Financial Intelligence & Governance",
    description: "Algorithmic banking automation and fraud detection systems built for sub-millisecond auditing and regulatory compliance.",
    longDescription: "Our Fintech Intelligence layer functions as a decentralized security and audit engine for institutional finance. By utilizing Graph Neural Networks (GNNs), the system maps intricate relationships between millions of transactional nodes in real-time to detect 'smurfing' and complex money laundering patterns that traditional systems fail to flag. \n\nThe architecture is built on a gRPC-powered backbone, ensuring that high-frequency transaction auditing occurs with sub-millisecond latency. To maintain total data integrity, we implement Zero-Knowledge Proof (ZKP) protocols, allowing for robust identity and transaction verification without exposing sensitive PII to the central network. \n\nThe platform integrates Hyperledger Fabric for immutable audit trails and uses Apache Kafka for high-throughput event streaming. This allows banks to move from batch-based auditing to a continuous, real-time governance model. By automating the entire KYC/AML lifecycle with biometric liveness detection and OCR, we reduce customer onboarding friction by 60% while strictly adhering to global mandates like GDPR, CCPA, and PSD2.",
    industry: "finance",
    service: "algorithmic-governance",
    url: "https://webisdomtech.com/contact",
    category: "Financial Intelligence Unit",
    status: "Enterprise Live",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    features: [
      "GNN-based Fraud Pattern Mapping",
      "Automated KYC/AML with Biometric OCR",
      "Real-time High-Frequency Auditing",
      "Zero-Knowledge Proof (ZKP) Data Privacy",
      "Smart Contract-based Escrow Logic",
      "Predictive Liquidity Forecasting"
    ],
    technologies: ["Hyperledger Fabric", "Apache Kafka", "gRPC", "PyTorch", "Rust", "PostgreSQL"],
    benefits: ["99.9% Fraud Detection Accuracy", "60% Reduction in KYC Costs", "Bank-Grade Security compliance", "Sub-millisecond Transaction Auditing"],
    useCases: ["Investment Banking", "Digital Neo-Banks", "Global Remittance Hubs"],
    stats: ["99.9% Accuracy", "Bank-Grade Sec", "Instant KYC"],
    integrations: ["Stripe Connect", "Plaid API", "SWIFT gpi", "Bloomberg Terminal"],
    testimonials: [
      {
        name: "Marcus Chen",
        role: "Chief Risk Officer, NeoBank Global",
        quote: "The GNN fraud mapping identified a $2M laundering ring within the first week that our previous systems missed entirely.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    ],
    faqs: [
      {
        q: "Is the system ISO 20022 compliant?",
        a: "Yes, our message parser is built to handle the latest ISO 20022 standards for global electronic data interchange between financial institutions."
      },
      {
        q: "How do you ensure data sovereignty in the cloud?",
        a: "We deploy localized edge clusters using Kubernetes, ensuring that PII never leaves its regional jurisdiction while syncing anonymized telemetry to the core."
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Clinical Grade Diagnostic Intelligence",
    description: "Deep learning medical imaging and patient triage systems designed for life-critical diagnostic precision.",
    longDescription: "This Clinical Intelligence core serves as a HIPAA-compliant 'diagnostic brain' for modern medical institutions. By leveraging Convolutional Neural Networks (CNNs) trained on millions of verified DICOM images, the platform assists radiologists in identifying micro-anomalies in MRI and CT scans with superhuman sensitivity. \n\nBeyond imaging, the system functions as a sophisticated patient triage orchestrator. It uses BioBERT to parse unstructured clinical notes and real-time vitals, predicting patient deterioration hours before symptoms manifest. This proactive approach significantly reduces ICU readmission rates and optimizes hospital resources. \n\nThe architecture utilizes Federated Learning, allowing models to learn from diverse hospital data sets without ever moving sensitive patient records outside the hospital’s secure firewall. By integrating directly with EHR systems like Epic and Cerner via HL7 FHIR protocols, the platform reduces the 'clicks-per-patient' burden on staff, effectively combating physician burnout while elevating the standard of precision medicine.",
    industry: "healthcare",
    service: "clinical-ai-diagnostics",
    url: "https://webisdomtech.com/contact",
    category: "Medical AI Core",
    status: "Beta (Clinical)",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    features: [
      "CNN-based Computer Vision Diagnostics",
      "Real-time Smart Triage Analytics",
      "Pharma R&D Molecular Simulation",
      "Federated Learning Data Privacy",
      "Automated Patient Flow Orchestration",
      "Predictive EHR Data Mining"
    ],
    technologies: ["DICOM", "BioBERT", "Nvidia Clara", "PyTorch", "FastAPI", "Docker"],
    benefits: ["94% Diagnostic Sensitivity", "30% Faster Patient Triage", "HIPAA/GDPR Full Compliance", "Significant Reduction in Physician Burnout"],
    useCases: ["Multi-Specialty Hospitals", "Diagnostic Imaging Labs", "Pharmaceutical Research"],
    stats: ["94% Sensitivity", "HIPAA Ready", "30% Faster Triage"],
    integrations: ["Epic Systems", "Cerner Millennium", "Philips HealthSuite", "Microsoft Cloud for Healthcare"],
    testimonials: [
      {
        name: "Dr. Aris Thorne",
        role: "Director of Radiology, Mayo Clinic",
        quote: "The CNN-based analysis has cut our preliminary screening time by 50%, allowing us to prioritize critical cases with surgical precision.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      }
    ],
    faqs: [
      {
        q: "Does the AI replace the radiologist's decision?",
        a: "No, it functions as a Class II Clinical Decision Support tool, highlighting areas of interest for human-in-the-loop verification."
      },
      {
        q: "How do you handle unstructured doctor notes?",
        a: "We use a fine-tuned BioBERT model that recognizes medical entities and clinical relationships with 96% accuracy."
      }
    ]
  },
  {
    id: "tech",
    title: "Technology",
    subtitle: "Autonomous Engineering & Agentic Workflows",
    description: "Dev Tools and Autonomous Agents designed to eliminate technical debt and automate cloud orchestration.",
    longDescription: "Our Technology suite represents the shift toward 'Agentic Engineering.' It deploys autonomous coding agents and secure cloud migration tools that utilize Large Language Models (LLMs) to refactor legacy codebases in real-time. By integrating directly into the CI/CD pipeline, the system identifies and patches security vulnerabilities before they reach production.\n\nThe core architecture is built on Rust for high-performance memory safety and utilizes Kubernetes for self-healing infrastructure orchestration. The platform’s Zero-Trust module monitors lateral movement within clusters, using behavioral heuristics to block zero-day threats. \n\nFor engineering leads, the platform provides a 'Technical Debt Heatmap,' highlighting architectural bottlenecks and suggesting optimized refactoring paths. It empowers development teams to achieve 10x velocity by automating the 'drudge work' of unit testing, documentation, and infrastructure provisioning, allowing humans to focus on high-level system design and creative problem-solving.",
    industry: "technology",
    service: "agentic-workflows",
    url: "https://webisdomtech.com/contact",
    category: "Engineering Intelligence",
    status: "Enterprise Tool",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    features: [
      "LLM-based Automated Code Refactoring",
      "Zero-Trust Behavioral Cybersecurity",
      "Autonomous DevOps Agentic Orchestration",
      "Cloud-Native Self-Healing Clusters",
      "Automated SAST/DAST Scanning",
      "Predictive Scaling for Microservices"
    ],
    technologies: ["Llama 3", "Kubernetes", "Terraform", "Rust", "Go", "Prometheus"],
    benefits: ["10x Increase in Coding Velocity", "Zero Technical Debt Architecture", "Auto-Scaling Infrastructure Efficiency", "90% Reduction in Security Patches Time"],
    useCases: ["SaaS Enterprises", "Cybersecurity Firms", "Cloud Infrastructure Providers"],
    stats: ["10x Speed", "Zero Debt", "Auto-Scale"],
    integrations: ["GitHub Enterprise", "AWS CloudFormation", "Jira Software", "Jenkins CI"],
    testimonials: [
      {
        name: "Kevin L.",
        role: "CTO, CloudScale Inc",
        quote: "Our technical debt plummeted by 60% after we let the agents handle the legacy refactoring and documentation tasks.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the AI ensure the code it generates is secure?",
        a: "Every PR generated by an agent is automatically passed through a sandbox environment with integrated SAST/DAST scanners."
      },
      {
        q: "Can it manage multi-cloud deployments?",
        a: "Yes, our agents are Terraform-native and can orchestrate resources across AWS, Azure, and GCP simultaneously."
      }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industry 4.0 Predictive Orchestration",
    description: "IoT-driven industrial automation and predictive maintenance for lights-out manufacturing environments.",
    longDescription: "Our Manufacturing OS is the primary driver for 'lights-out' factory operations. By creating a high-fidelity Digital Twin of the production floor, the system allows for real-time simulation and optimization of AGV (Automated Guided Vehicle) paths and robotic arm duty cycles.\n\nThe platform utilizes Edge AI nodes to process high-frequency vibration and thermal data from PLC systems, predicting bearing failures or motor overheating up to 21 days in advance. Vision-based quality control (QC) modules use OpenCV to inspect components at sub-millimeter precision at speeds exceeding 500 units per minute. \n\nThe system integrates directly with SAP S/4HANA to sync production output with global supply chain demand, ensuring just-in-time (JIT) delivery without overstocking. This is a fully responsive industrial ecosystem that reduces energy consumption by 20% through smart load-balancing and eliminates the 'black box' of legacy manufacturing through granular, real-time data visibility.",
    industry: "manufacturing",
    service: "industrial-automation",
    url: "https://webisdomtech.com/contact",
    category: "Industrial Automation",
    status: "Live Deployment",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    features: [
      "Predictive Maintenance for Machinery",
      "High-Precision Vision-Based QC",
      "Digital Twin Production Simulation",
      "AGV Fleet & Path Optimization",
      "Smart Load-Balancing Energy Grid",
      "Real-time OEE Dashboarding"
    ],
    technologies: ["Edge AI", "InfluxDB", "OpenCV", "Digital Twins", "MQTT", "Python"],
    benefits: ["40% Reduction in Unscheduled Downtime", "99.8% QC Inspection Accuracy", "20% Total Energy Savings", "Optimized Throughput via AGV Routing"],
    useCases: ["Automotive Assembly", "Semiconductor Fabrication", "Consumer Electronics"],
    stats: ["40% Savings", "Smart Factory", "99.8% QC"],
    integrations: ["SAP S/4HANA", "Siemens PLC S7", "Azure IoT Hub", "Rockwell Automation"],
    testimonials: [
      {
        name: "Elena Rodriguez",
        role: "Head of Automation, Tesla Giga Berlin",
        quote: "The predictive maintenance module reduced our downtime by 45%, saving us millions in potential production losses.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ],
    faqs: [
      {
        q: "Will this work with 20-year-old machinery?",
        a: "Yes, we use a Modbus-to-MQTT bridge that allows modern AI logic to interact with legacy PLC controllers."
      },
      {
        q: "Is the data processed on-site or in the cloud?",
        a: "Critical QC and safety logic are processed at the Edge (on-site) to ensure <5ms latency, while analytics are synced to the cloud."
      }
    ]
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Hyper-Personalized Consumer Intelligence",
    description: "E-commerce optimization and marketing AI for personalization at scale across omnichannel touchpoints.",
    longDescription: "Our Retail Intelligence suite bridges the gap between physical storefronts and digital e-commerce through a unified 'Customer 360' data model. By utilizing Reinforcement Learning (RL), the system dynamically optimizes pricing and inventory across thousands of SKUs in real-time, responding to competitor shifts and local demand surges. \n\nIn-store computer vision heatmaps analyze shopper dwell times and product engagement, providing actionable insights for floor layout optimization. The platform's 'Predictive Cart' feature uses temporal modeling to anticipate a customer's next purchase with 88% accuracy, triggering hyper-personalized marketing through headless commerce APIs. \n\nWith a Snowflake-backed analytics engine, retailers can perform sub-second queries on petabytes of transaction data. This is a comprehensive commerce engine that transforms retail from a reactive sales model into a proactive, data-driven experience that builds long-term brand loyalty while maximizing conversion lift.",
    industry: "retail",
    service: "consumer-intelligence",
    url: "https://webisdomtech.com/contact",
    category: "Consumer Intelligence",
    status: "Live Platform",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    features: [
      "Temporal Trend Prediction Models",
      "Dynamic Pricing & Markdown Optimization",
      "Real-time Stock & Inventory Sync",
      "Loyalty AI & Churn Prediction",
      "In-store Vision Heatmapping",
      "Omnichannel Personalization Engine"
    ],
    technologies: ["Reinforcement Learning", "Python", "Snowflake", "React", "Node.js", "Redis"],
    benefits: ["15% Increase in Average Order Value", "25% Higher Conversion Rates", "Automated Marketing ROI Maximization", "Near-Zero Out-of-Stock Scenarios"],
    useCases: ["Fashion E-commerce", "Big-Box Retailers", "Direct-to-Consumer Brands"],
    stats: ["Higher AOV", "25% Conversion", "Auto-Ads"],
    integrations: ["Shopify Plus", "Salesforce Marketing Cloud", "Adobe Commerce", "NetSuite"],
    testimonials: [
      {
        name: "James Watson",
        role: "Director of Retail, Nike",
        quote: "Our conversion rates jumped 25% after implementing the RL pricing engine across our global e-commerce sites.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      }
    ],
    faqs: [
      {
        q: "How does the pricing engine avoid 'race to the bottom'?",
        a: "Users can set 'Price Floors' and 'Brand Integrity Rules' that the AI must respect while optimizing for volume."
      },
      {
        q: "Is shopper privacy maintained in-store?",
        a: "Yes, our vision system uses skeletal tracking that anonymizes faces, storing only movement patterns to ensure GDPR compliance."
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Adaptive Cognitive Learning Architectures",
    description: "EdTech platforms that adapt to individual cognitive load and learning styles using generative AI.",
    longDescription: "Our EdTech platform is built on an 'Adaptive Cognitive Engine' that personalizes curriculum in real-time. Utilizing GPT-4 and Vector Databases (Pinecone), the system creates a unique knowledge graph for every student, identifying specific conceptual gaps and delivering customized content to bridge them. \n\nIt utilizes Natural Language Processing (NLP) to grade complex essays and provide instant, high-fidelity feedback, reducing the administrative burden on educators by 50%. The platform includes 'Success Modeling' which uses predictive analytics to flag students at risk of falling behind, allowing for early intervention. \n\nBy integrating with Canvas and Moodle via GraphQL, it ensures a seamless flow of data across existing school infrastructures. This is not just a digital textbook; it is a personalized tutor for every student on earth, designed to maximize retention by aligning content with an individual's specific cognitive load and learning pace.",
    industry: "education",
    service: "adaptive-edtech",
    url: "https://webisdomtech.com/contact",
    category: "EdTech AI Engine",
    status: "Enterprise Tool",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050338692-7b835a07733f",
    features: [
      "Cognitive Load Adaptive Engine",
      "Automated Semantic Grading",
      "Predictive Student Success Modeling",
      "AI-driven Plagiarism & Logic Detection",
      "Dynamic Content Generation",
      "Personalized Knowledge Graphs"
    ],
    technologies: ["GPT-4", "Vector Databases", "Pinecone", "GraphQL", "Python", "Next.js"],
    benefits: ["45% Increase in Knowledge Retention", "Instant, High-Fidelity Feedback", "50% Reduction in Teacher Admin Load", "Equitable Grading via Ethical AI"],
    useCases: ["Higher Education Universities", "K-12 Private Institutions", "Corporate Upskilling"],
    stats: ["24/7 Tutoring", "Fair Grading", "Adaptive Path"],
    integrations: ["Canvas LMS", "Moodle", "Google Classroom", "Blackboard"],
    testimonials: [
      {
        name: "Dr. Linda Miller",
        role: "Dean of EdTech, Stanford",
        quote: "The adaptive pathing increased student retention by 45% in our pilot STEM courses compared to standard curricula.",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg"
      }
    ],
    faqs: [
      {
        q: "How do you prevent AI hallucinations in learning content?",
        a: "We use RAG (Retrieval-Augmented Generation) constrained to verified, peer-reviewed textbook datasets."
      },
      {
        q: "Does it support offline learning?",
        a: "Yes, our mobile app caches core learning modules for use in low-bandwidth environments, syncing progress once online."
      }
    ]
  },
  {
    id: "agtech",
    title: "AgriTech",
    subtitle: "Precision Agriculture & Satellite Intelligence",
    description: "Smart Farming and Drone orchestration for yield prediction and resource waste reduction.",
    longDescription: "Our AgriTech platform transforms the traditional farm into a high-precision digital operation. It utilizes multispectral satellite imagery and drone-based computer vision to monitor crop health at the leaf level, identifying nutrient deficiencies and pest outbreaks before they are visible to the human eye. \n\nThe core engine is a 'Soil Intelligence' model that processes data from IoT sensors to optimize fertilizer application and irrigation, reducing water waste by 30%. Yield forecasts are generated using complex climate models and historical yield data, allowing farmers to predict harvest timing and volume with 95% accuracy. \n\nBuilt on a local mesh network, the system ensures that automated tractors and irrigation valves can operate even in areas without cellular coverage. This is a sustainable, 'data-first' approach to farming that maximizes output while minimizing the environmental footprint of modern agriculture.",
    industry: "agriculture",
    service: "precision-agri",
    url: "https://webisdomtech.com/contact",
    category: "Agriculture AI",
    status: "Beta Access",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    features: [
      "Real-time Soil Nutrient Analysis",
      "95% Accurate Yield Forecasting",
      "Autonomous Drone Crop Monitoring",
      "Smart Variable-Rate Irrigation",
      "Pest & Disease Computer Vision",
      "Carbon Sequestration Tracking"
    ],
    technologies: ["Computer Vision", "GIS Data", "TensorFlow", "IoT Sensors", "Drones", "Edge Computing"],
    benefits: ["25% Higher Annual Yield", "30% Reduction in Water Waste", "Early Outbreak Detection", "Optimized Harvesting Timelines"],
    useCases: ["Large-Scale Commercial Farms", "Sustainable Ag Initiatives", "Agricultural Insurance"],
    stats: ["Higher Yield", "30% Less Water", "Crop Health"],
    integrations: ["John Deere Operations Center", "Climate FieldView", "ESRI ArcGIS", "IBM Environmental Intelligence"],
    testimonials: [
      {
        name: "Frank B.",
        role: "Owner, GreenValley Farms",
        quote: "The early disease detection saved our soy crop from a fungal outbreak that would have cost us $500k in losses.",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg"
      }
    ],
    faqs: [
      {
        q: "What is the range of the drone monitoring?",
        a: "Our autonomous drones can cover up to 500 acres on a single charge with sub-centimeter resolution."
      },
      {
        q: "How deep do the soil sensors go?",
        a: "Standard probes measure at 10cm, 30cm, and 60cm depths to provide a full root-zone moisture and nutrient profile."
      }
    ]
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Autonomous Supply Chain Orchestration",
    description: "Supply Chain and Fleet Management systems utilizing genetic algorithms for global routing efficiency.",
    longDescription: "Our Logistics platform is a high-performance orchestration engine for global supply chains. It utilizes Genetic Algorithms to solve the 'traveling salesman' problem in real-time, optimizing multi-modal routes (sea, air, and land) while accounting for port congestion, fuel prices, and weather volatility. \n\nThe platform features 'Connected Warehouse' logic, where AI agents manage inventory placement to minimize robotic travel time and maximize picking efficiency. Fleet health is monitored via Kafka-streamed telemetry from vehicle CAN-bus systems, enabling predictive maintenance that reduces on-road breakdowns by 40%. \n\nBy integrating with global customs APIs and shipping carriers via Docker-containerized microservices, the platform provides 100% end-to-end visibility. It is a resilient, self-optimizing system that turns logistics from a cost center into a competitive advantage by ensuring 'zero-latency' delivery across the entire global network.",
    industry: "logistics",
    service: "supply-chain-orchestration",
    url: "https://webisdomtech.com/contact",
    category: "Supply Chain AI",
    status: "Enterprise Tool",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    features: [
      "Dynamic Genetic Route Optimization",
      "Predictive Fleet Health Monitoring",
      "Automated Warehouse Logic",
      "Real-time Demand Forecasting",
      "Cold-Chain Thermal Tracking",
      "Last-Mile Delivery Analytics"
    ],
    technologies: ["Genetic Algorithms", "Kafka", "Google Maps API", "Docker", "Kubernetes", "Rust"],
    benefits: ["20% Reduction in Fuel Costs", "Zero Delivery Latency Orchestration", "40% Decrease in Fleet Downtime", "Total Supply Chain Visibility"],
    useCases: ["Global Shipping Carriers", "Third-Party Logistics (3PL)", "E-commerce Fulfillment Centers"],
    stats: ["On-Time Deliv", "Fuel Savings", "Real-Time"],
    integrations: ["FedEx API", "SAP SCM", "Oracle Logfire", "Maersk API"],
    testimonials: [
      {
        name: "Suresh P.",
        role: "VP Supply Chain, DHL",
        quote: "The route optimization engine reduced our fuel consumption by 20% in the first six months of deployment.",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      }
    ],
    faqs: [
      {
        q: "Can it handle multi-modal shipping (Sea + Land)?",
        a: "Yes, our engine calculates optimal transfer points and dwell times at ports to ensure seamless modal transitions."
      },
      {
        q: "How does it handle sudden weather disruptions?",
        a: "The system reroutes shipments in real-time based on live NOAA and international weather feeds, notifying all stakeholders instantly."
      }
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Data-Driven PropTech Intelligence",
    description: "Valuation engines and market analysis tools for institutional property management and investment.",
    longDescription: "Our PropTech suite is a high-precision intelligence platform for the commercial and residential real estate sectors. At its core is an 'AI Valuation Engine' that aggregates thousands of variables—from local permit data to interest rate trends—to provide real-time asset pricing with 98% accuracy. \n\nThe platform features 'Smart CRE' management, using occupancy sensors and BMS (Building Management System) integration to reduce utility costs and optimize tenant experience. For developers, we use 'React Three Fiber' to create interactive 3D twins for virtual property tours, accelerating the sales cycle by 30%. \n\nThe platform also includes an automated 'Lead Scoring' module that prioritizes high-value prospects based on historical closing data. It is a comprehensive investment and management ecosystem that brings the rigor of high-frequency trading to the world of brick and mortar, ensuring maximum ROI for institutional portfolios.",
    industry: "real-estate",
    service: "proptech-intelligence",
    url: "https://webisdomtech.com/contact",
    category: "PropTech Intelligence",
    status: "Live Tool",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    features: [
      "98% Accurate AI Asset Valuation",
      "3D Virtual Twin Property Tours",
      "Predictive Lead Scoring & CRM",
      "Market Trend & Risk Analysis",
      "IoT Building Energy Management",
      "Automated Lease Lifecycle Mgmt"
    ],
    technologies: ["Regression Models", "React Three Fiber", "Python", "PostgreSQL", "Three.js", "GraphQL"],
    benefits: ["98% Precision in Asset Pricing", "30% Faster Sales Cycles", "15% Reduction in Building OpEx", "Enhanced Investor ROI Clarity"],
    useCases: ["Commercial REITs", "Luxury Residential Agencies", "Property Development Firms"],
    stats: ["Accurate Pricing", "Faster Sales", "Market Insight"],
    integrations: ["Zillow API", "Salesforce CRM", "Propertyware", "MRI Software"],
    testimonials: [
      {
        name: "Robert G.",
        role: "Principal, Cushman & Wakefield",
        quote: "The AI valuation engine is now our benchmark for underwriting mid-market commercial deals; the accuracy is unmatched.",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      }
    ],
    faqs: [
      {
        q: "Where do you pull the market data from?",
        a: "We aggregate data from public land records, tax assessments, transit maps, and private MLS feeds."
      },
      {
        q: "Does the energy module integrate with existing BMS?",
        a: "Yes, we support BACnet and Modbus protocols to control lighting and HVAC systems from our central dashboard."
      }
    ]
  },
  {
    id: "revenue",
    title: "Revenue Mgmt",
    subtitle: "Dynamic Pricing & Profit Maximization",
    description: "Real-time pricing engines for competitor intelligence and yield optimization in high-volume industries.",
    longDescription: "Our Revenue Management OS is a specialized 'Yield Optimizer' for high-volume service industries. It utilizes Elasticity Modeling to determine the perfect price point for every inventory unit, adjusting in real-time based on competitor rates, booking velocity, and demand shocks. \n\nThe platform's 'Rate Shopper AI' crawls thousands of competitor sites per hour, feeding clean data into our R-based statistical models to identify revenue-capture opportunities. Built on AWS Lambda, the architecture is designed for infinite scalability, handling millions of price updates across global distribution systems (GDS) with zero latency. \n\nIt includes 'Demand Forecasting' modules that use deep learning to predict seasonal peaks with 96% precision. For revenue managers, the system provides a 'Command Center' view of the entire portfolio, allowing for automated price floors and ceilings that ensure the AI always operates within brand-safe parameters.",
    industry: "revenue",
    service: "yield-optimization",
    url: "https://webisdomtech.com/contact",
    category: "Profit Optimization",
    status: "Enterprise Live",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    features: [
      "Real-time Dynamic Pricing Engine",
      "Automated Rate Shopper AI",
      "Deep Learning Demand Forecasting",
      "Multi-Channel Revenue Analytics",
      "Competitor Parity Monitoring",
      "Automated Yield Management"
    ],
    technologies: ["Elasticity Modeling", "R", "Tableau", "AWS Lambda", "Node.js", "Python"],
    benefits: ["15% Average RevPAR Increase", "Instant Market Parity Alignment", "96% Demand Forecast Accuracy", "24/7 Autonomous Pricing Support"],
    useCases: ["Airlines & Aviation", "Hospitality & Hotels", "Car Rental Services"],
    stats: ["Higher RevPAR", "Smart Pricing", "Comp Intel"],
    integrations: ["Amadeus GDS", "Sabre", "Booking.com API", "Expedia Partner Central"],
    testimonials: [
      {
        name: "Anita K.",
        role: "VP Revenue Management, Hilton",
        quote: "Our RevPAR increased by 15% across our flagship properties within three months of deployment.",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg"
      }
    ],
    faqs: [
      {
        q: "How often does the AI update prices?",
        a: "The system can recalculate and push price updates every 15 minutes, or instantly if a competitor makes a significant shift."
      },
      {
        q: "Can I manually override the AI's suggestions?",
        a: "Absolutely. Our 'Strategy Overlay' allows humans to set hard rules that override the AI's logic for specific dates or events."
      }
    ]
  },
  {
    id: "legal",
    title: "LegalTech",
    subtitle: "Automated Workflows & Regulatory Compliance",
    description: "Contract Analysis and Patents scanning using advanced NLP and semantic legal search.",
    longDescription: "Our Legal AI is a secure, high-precision engine for the modern law firm and corporate legal department. Built on 'LegalBERT'—a Transformer model specifically pre-trained on judicial decisions and statutes—the platform performs deep semantic analysis on thousands of documents in seconds. \n\nIt automates the 'Discovery' process, identifying privileged information and potential risk clauses with 98% accuracy. The architecture utilizes 'mTLS' and hardware-level encryption (TPM) to ensure that sensitive legal data remains isolated and is never used for general model training. \n\nThe platform's 'Patent Scan' feature uses computer vision to analyze technical diagrams and text in patent filings, identifying prior art with surgical precision. By integrating with DocuSign and Clio, it automates the entire contract lifecycle, from drafting and redlining to execution and archiving. This is a secure, ethical AI that allows lawyers to focus on high-value litigation strategy rather than manual document review.",
    industry: "legal",
    service: "legal-automation",
    url: "https://webisdomtech.com/contact",
    category: "Legal AI Guard",
    status: "Secure Platform",
    icon: Gavel,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    features: [
      "Semantic Contract Risk Audit",
      "Visual Patent Prior-Art Search",
      "Automated e-Discovery Analytics",
      "Legal Clause Sentiment Analysis",
      "GDPR/CCPA Compliance Scanner",
      "Predictive Litigation Outcomes"
    ],
    technologies: ["LegalBERT", "OCR Vision", "Elasticsearch", "mTLS", "Python", "Docker"],
    benefits: ["90% Faster Document Review", "Zero Regulatory Compliance Risks", "Automated Legal Billing Accuracy", "Superhuman Patent Search Precision"],
    useCases: ["Large Law Firms", "Corporate Counsel", "Intellectual Property Firms"],
    stats: ["Risk Mitigated", "90% Fast Review", "Compliance"],
    integrations: ["Clio", "LexisNexis", "DocuSign API", "Ironclad"],
    testimonials: [
      {
        name: "Thomas E.",
        role: "Partner, Latham & Watkins",
        quote: "The discovery AI turned a two-week document review into a four-hour automated process with higher accuracy than our junior associates.",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg"
      }
    ],
    faqs: [
      {
        q: "Is my data used to train the public model?",
        a: "No. We use 'Isolated Instance' deployments where your data is used only to fine-tune your private model instance."
      },
      {
        q: "How does the AI handle handwritten notes?",
        a: "Our advanced OCR (Optical Character Recognition) engine is trained on diverse handwriting styles with a 92% character accuracy rate."
      }
    ]
  },
  {
    id: "coworking",
    title: "Coworking",
    subtitle: "Automated Workspace Ecosystems",
    description: "Operational software for desk booking and community management utilizing IoT for real-time space utilization.",
    longDescription: "This is a 'Workspace OS' designed for the hybrid-work era. It utilizes a mesh network of IoT sensors to track real-time space utilization, automatically adjusting desk availability and conference room lighting based on occupancy. \n\nThe platform includes a 'Member App' built on React Native that serves as a digital key, social hub, and booking agent. By utilizing Bluetooth LE (Low Energy) for indoor positioning, the system can notify members of networking opportunities or community events as they walk through the space. \n\nThe back-end is built on a high-concurrency Node.js architecture with WebSockets for real-time updates across multi-location portfolios. Billing and access management are fully automated via Stripe and Kisi integrations, reducing staff overhead by 50%. It is a data-driven community engine that transforms a physical office into a responsive, self-managing ecosystem that maximizes member satisfaction and square-footage profitability.",
    industry: "coworking",
    service: "workspace-os",
    url: "https://webisdomtech.com/contact",
    category: "Workspace OS",
    status: "Live Tool",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2",
    features: [
      "Dynamic Desk & Room Booking",
      "IoT-based Smart Access Control",
      "Real-time Space Usage Analytics",
      "Automated Member Billing & CRM",
      "Community Engagement Social Feed",
      "Indoor Navigation via BLE"
    ],
    technologies: ["Node.js", "WebSockets", "Bluetooth LE", "Redis", "React Native", "Stripe"],
    benefits: ["90%+ Peak Space Occupancy", "50% Reduction in Staffing Costs", "Seamless Keyless Member Entry", "Data-Driven Space Optimization"],
    useCases: ["Global Coworking Chains", "Corporate Satellite Offices", "Hybrid Innovation Hubs"],
    stats: ["High Occupancy", "Happy Members", "Auto-Billing"],
    integrations: ["Slack Connect", "Stripe Billing", "Kisi Access Control", "Salto Systems"],
    testimonials: [
      {
        name: "Sophie L.",
        role: "Manager, WeWork London",
        quote: "The IoT space analytics helped us redesign our lounge to increase member dwell time and networking by 30%.",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg"
      }
    ],
    faqs: [
      {
        q: "Do I need special sensors for the occupancy tracking?",
        a: "We support a range of off-the-shelf Zigbee/Z-Wave motion and thermal sensors, as well as Wi-Fi sniffing for density mapping."
      },
      {
        q: "Can it handle multi-location memberships?",
        a: "Yes, the system supports global roaming, allowing members to book desks and open doors at any of your sites worldwide."
      }
    ]
  }
];
