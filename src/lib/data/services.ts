import { ArchNode } from "@/components/sections/arch-diagram";

export interface HowWeHelpStep {
    step: number;
    title: string;
    desc: string;
}

export interface CaseStudy {
    context: string;
    challenge: string;
    result: string;
    metrics: { label: string; value: string }[];
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    whatIs: string;
    longDescription: string;
    features: string[];
    useCases: string[];
    techStack: string[];
    iconName: string;
    heroImage: string;
    howWeHelp: HowWeHelpStep[];
    architecture: ArchNode[];
    caseStudy: CaseStudy;
}

export const servicesData: Service[] = [
    {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        shortDescription: "Automate manual business processes across your company.",
        whatIs: "Workflow automation replaces the repetitive manual work your team does every day with software that runs it automatically. When AI is added, the system does not just follow rigid rules. It can read and understand documents, write personalised messages, make judgement calls based on context, and handle exceptions the way a smart employee would. The result is work that gets done 24 hours a day, without error, without delay, and without anyone managing it.",
        longDescription: "We design and deploy AI-powered workflows that replace manual processes across your business. By connecting language models to your existing tools and APIs, we build systems that automatically route, process, and complete tasks that would otherwise need a human to handle.",
        features: [
            "Customer support pipelines",
            "Sales outreach and follow-up",
            "Email triage and response",
            "Document processing and extraction",
            "Reporting and analytics",
            "Internal team coordination",
        ],
        useCases: [
            "A sales team gets 300 new leads from a trade show. The agent scores each lead, assigns them to the right rep, drafts personalised outreach emails, and schedules follow-up reminders without anyone touching it.",
            "Finance receives 400 vendor invoices weekly. The agent reads each one, checks it against purchase orders, flags discrepancies, and routes approved invoices directly to the payment system.",
            "Every morning, the CEO receives a structured briefing compiled by an agent that pulled data from CRM, Jira, and Slack the night before.",
        ],
        techStack: ["LangChain", "n8n", "CrewAI", "Flowise", "AutoGen", "Zapier", "Make"],
        iconName: "Network",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Workflow Audit", desc: "We map every manual process in your business, score them by automation potential, and identify the highest-ROI starting points." },
            { step: 2, title: "System Design", desc: "We design the logic, decision trees, and integrations needed. You see the full blueprint before any code is written." },
            { step: 3, title: "Build and Connect", desc: "We build the workflows and connect them to your existing tools — CRM, ERP, email, Slack, databases, whatever you use." },
            { step: 4, title: "Deploy and Monitor", desc: "We deploy to production, run live testing, and set up monitoring dashboards so you can see exactly what the system is doing." },
        ],
        architecture: [
            { id: "trigger", label: "Trigger Event", sublabel: "Form / Email / Schedule / API", type: "source" },
            { id: "parse", label: "Data Extraction", sublabel: "LLM reads and parses input", type: "process" },
            { id: "logic", label: "Decision Engine", sublabel: "Rules and context-aware logic", type: "process" },
            { id: "tools", label: "Tool Execution", sublabel: "CRM / DB / Email / Slack", type: "action" },
            { id: "log", label: "Log and Confirm", sublabel: "Audit trail and notifications", type: "output" },
        ],
        caseStudy: {
            context: "A 200-person logistics company in Hyderabad processing 400+ vendor invoices weekly.",
            challenge: "Eight finance staff were spending 60% of their time manually reading invoices, checking them against purchase orders, and entering data into Tally. The process took 3 days per weekly batch and had a 4% error rate.",
            result: "We deployed an invoice processing agent connected to their email, Tally ERP, and approval system. The agent now processes each invoice end-to-end in under 3 minutes. The same 8 staff now handle exceptions and focus on higher-value work.",
            metrics: [
                { label: "Processing Time", value: "85% faster" },
                { label: "Error Rate", value: "0%" },
                { label: "Cost Saved", value: "₹18L/year" },
            ],
        },
    },
    {
        slug: "agentic-ai-development",
        title: "Agentic AI Development",
        shortDescription: "Custom AI agents capable of complex reasoning and multi-step execution.",
        whatIs: "An AI agent is a software system that can take a goal in natural language, figure out the steps needed to achieve it, use tools and APIs to carry out those steps, and report back when the job is done. Unlike a chatbot that just answers questions, an agent actually does things. It can browse the web, read documents, call your internal APIs, write reports, make decisions, and hand off tasks to other specialised agents. It works the way a capable human employee would, but at machine speed and scale.",
        longDescription: "We build custom AI agents that can independently complete complex, multi-step tasks for your business. Unlike basic scripts or rigid automation, these agents understand natural language goals, use tools to gather information, coordinate with other agents, and make context-aware decisions to get the job done.",
        features: [
            "Understand a goal and plan the approach",
            "Use external tools and APIs",
            "Search the web and process documents",
            "Make context-based decisions",
            "Coordinate with other specialist agents",
            "Report outcomes and escalate when needed",
        ],
        useCases: [
            "A research agent receives a brief — 'Analyse our top 5 competitors and identify gaps in their product offerings.' It scrapes their websites, reads their pricing pages, analyses LinkedIn job postings for hiring signals, and delivers a structured 10-page report.",
            "A support agent reads an error log from a client, searches the internal documentation, identifies the root cause, and emails a step-by-step fix to the client — all without a human ever seeing the ticket.",
            "A sales agent finds 50 qualified leads on LinkedIn based on your ICP, writes a personalised pitch for each one referencing their specific business context, and books five meetings in your calendar.",
        ],
        techStack: ["OpenAI GPT-4o", "Anthropic Claude", "Python", "LangGraph", "CrewAI", "Docker", "AWS"],
        iconName: "Bot",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Define the Agent's Role", desc: "We work with you to define exactly what goal the agent needs to achieve, what tools it has access to, and where humans stay in the loop." },
            { step: 2, title: "Design the Architecture", desc: "We design the multi-agent blueprint — which agents play what roles, how they communicate, and what the decision logic looks like." },
            { step: 3, title: "Build and Test", desc: "We build the agents, connect them to your tools, and run hundreds of real-world test scenarios to make sure they handle edge cases correctly." },
            { step: 4, title: "Deploy with Guardrails", desc: "We deploy to your infrastructure with monitoring, rate limiting, and human escalation paths built in from day one." },
        ],
        architecture: [
            { id: "goal", label: "Natural Language Goal", sublabel: "From user or trigger", type: "source" },
            { id: "planner", label: "Planner Agent", sublabel: "Breaks goal into tasks", type: "process" },
            { id: "executor", label: "Specialist Agents", sublabel: "Research / Write / Analyse", type: "process" },
            { id: "tools", label: "Tool Calls", sublabel: "APIs / Search / DB / Files", type: "action" },
            { id: "result", label: "Output and Report", sublabel: "Result delivered to user", type: "output" },
        ],
        caseStudy: {
            context: "A B2B SaaS company with 15,000 users and a 3-person support team.",
            challenge: "Support tickets were taking an average of 48 hours to resolve. The team was overwhelmed and customer satisfaction scores were dropping. Hiring more support staff was not financially viable.",
            result: "We deployed a multi-agent support system connected to their helpdesk, documentation, and internal CRM. The system now handles 78% of all tickets without human involvement. Complex issues are escalated with full context prepared.",
            metrics: [
                { label: "Tickets Auto-Resolved", value: "78%" },
                { label: "Avg Response Time", value: "4 minutes" },
                { label: "CSAT Score", value: "+34 points" },
            ],
        },
    },
    {
        slug: "custom-software-development",
        title: "Custom Software Development",
        shortDescription: "Scalable web and mobile applications for modern digital products.",
        whatIs: "Custom software is built specifically for how your business works, instead of forcing your team to adapt to off-the-shelf tools. It connects your internal systems, automates your specific workflows, and scales with your business. When built to integrate with AI agents, the software becomes an intelligent platform that gets more capable over time. We build web applications, mobile apps, SaaS platforms, and internal tools that are engineered to last.",
        longDescription: "We build scalable digital products, from internal business tools to full SaaS platforms. Our engineering team focuses on robust, high-performance architectures that integrate with AI systems or stand alone as solid enterprise software.",
        features: [
            "Web Applications",
            "Mobile Apps",
            "SaaS Platforms",
            "REST APIs and Integrations",
            "Business Dashboards",
            "Internal Automation Tools",
        ],
        useCases: [
            "A manufacturing company has data across 5 legacy systems that don't talk to each other. We build a unified internal dashboard that pulls from all of them in real time, so the operations team has a single view of the business.",
            "A startup wants to offer their service as a SaaS product. We build the entire platform — multi-tenant architecture, user authentication, subscription billing, and an admin dashboard — in 12 weeks.",
            "A professional services firm needs a client portal where clients can upload documents, track project progress, and communicate securely. We build it as a white-label web app.",
        ],
        techStack: ["Python", "FastAPI", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "GCP"],
        iconName: "Code",
        heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Discovery and Scoping", desc: "We understand your business requirements, existing tech stack, and constraints. We define exactly what we will build and what success looks like." },
            { step: 2, title: "Architecture Design", desc: "We design the system architecture with scalability and security in mind. You review and approve before development begins." },
            { step: 3, title: "Agile Development", desc: "We build in two-week sprints with working software delivered at each milestone. You see real progress weekly, not just at the end." },
            { step: 4, title: "Deploy and Handover", desc: "We deploy to production, run performance testing, and provide full documentation. Your team owns the codebase from day one." },
        ],
        architecture: [
            { id: "frontend", label: "Frontend", sublabel: "React / Next.js", type: "source" },
            { id: "api", label: "API Layer", sublabel: "FastAPI / Node.js", type: "process" },
            { id: "business", label: "Business Logic", sublabel: "Services and workflows", type: "process" },
            { id: "db", label: "Data Layer", sublabel: "PostgreSQL / Redis", type: "action" },
            { id: "cloud", label: "Cloud Deploy", sublabel: "AWS / GCP with CI/CD", type: "output" },
        ],
        caseStudy: {
            context: "A 120-person professional services firm managing projects across 6 different tools.",
            challenge: "Project managers were spending 3 hours a day copy-pasting data between tools, creating reports, and updating clients. There was no single source of truth and clients had no visibility into their projects.",
            result: "We built a unified internal platform that integrated with all 6 existing tools and added a client-facing portal. Reporting is now automated and clients can track their own projects in real time.",
            metrics: [
                { label: "Reporting Time", value: "90% reduced" },
                { label: "Client Satisfaction", value: "+41%" },
                { label: "PM Hours Saved", value: "15/week" },
            ],
        },
    },
    {
        slug: "ai-consulting-strategy",
        title: "AI Consulting and Strategy",
        shortDescription: "Strategic roadmaps for enterprise AI adoption.",
        whatIs: "AI consulting means helping your business figure out where AI actually makes sense, what it would cost to build, what it would save you, and in what order to do it. Most companies know AI is important but don't know where to start. They either try to automate everything at once, or they do nothing because the options feel overwhelming. We cut through that. We assess your specific workflows, quantify the ROI of automating each one, and give you a clear, prioritised plan you can actually execute.",
        longDescription: "Not sure where to start with AI? We help companies build a clear roadmap for adoption. We assess your current setup, identify the highest-ROI opportunities, and design a practical integration plan your team can actually execute.",
        features: [
            "AI readiness assessment",
            "Workflow analysis and automation mapping",
            "AI tool selection and evaluation",
            "AI implementation roadmap",
            "Team training and onboarding",
        ],
        useCases: [
            "A 500-person logistics company hires us to assess their operations. We identify 14 manual workflows, score each by automation potential, and present a phased roadmap that starts with the two highest-ROI processes.",
            "A company's board wants to understand the security implications of deploying LLMs on their financial data. We run a two-day technical workshop with the leadership team covering risks, compliance requirements, and mitigation strategies.",
            "A manufacturing firm wants to train its 80-person operations team to use AI tools in their daily work. We design and deliver a 4-week internal training programme.",
        ],
        techStack: ["Workflow Analysis", "Architecture Reviews", "Security Audits", "ROI Modelling", "AI Tool Evaluation"],
        iconName: "Search",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Current State Audit", desc: "We spend time with your team mapping every major workflow. We interview department heads, observe operations, and document the data flows." },
            { step: 2, title: "Opportunity Scoring", desc: "We score each workflow by automation potential, implementation complexity, and expected ROI. You see a ranked list of opportunities with financial projections." },
            { step: 3, title: "Roadmap Design", desc: "We design a phased implementation roadmap with clear milestones, team requirements, and technology choices for each phase." },
            { step: 4, title: "Kickoff and Handover", desc: "We present the full strategy to your leadership team, answer every question, and stay available through the initial implementation phase." },
        ],
        architecture: [
            { id: "audit", label: "Business Audit", sublabel: "Current workflows mapped", type: "source" },
            { id: "analysis", label: "Gap Analysis", sublabel: "AI readiness scored", type: "process" },
            { id: "roi", label: "ROI Modelling", sublabel: "Financial projections built", type: "process" },
            { id: "roadmap", label: "Roadmap Design", sublabel: "Phased plan created", type: "action" },
            { id: "plan", label: "Delivery Plan", sublabel: "Team and tech requirements", type: "output" },
        ],
        caseStudy: {
            context: "A 500-person logistics company considering AI investment across their operations.",
            challenge: "The executive team wanted to adopt AI but had no idea where to start, what it would cost, or what the ROI would look like. They had received conflicting advice from three different vendors.",
            result: "We conducted a two-week audit across 6 departments and identified 14 automation opportunities with a combined annual saving of ₹2.4 crore. The leadership team approved the phased plan at their next board meeting.",
            metrics: [
                { label: "Opportunities Found", value: "14" },
                { label: "Projected Annual Savings", value: "₹2.4Cr" },
                { label: "Payback Period", value: "7 months" },
            ],
        },
    },
    {
        slug: "data-engineering",
        title: "Data Engineering",
        shortDescription: "Data pipelines and infrastructure to power your AI initiatives.",
        whatIs: "AI systems are only as good as the data they are built on. If your data is scattered across different systems, stored in unstructured formats, or inconsistently labelled, your AI will produce unreliable results. Data engineering is the work of cleaning, structuring, and organising your data into a reliable foundation. This includes building pipelines that keep the data fresh, setting up vector databases for semantic search, and creating the infrastructure that lets your AI agents actually find and use your information.",
        longDescription: "AI is only powerful when built on clean, structured data. We build the data foundation your agents need to operate accurately. From migrating legacy databases to building vector stores for semantic search, we handle the data layer so your agents can work correctly.",
        features: [
            "Data pipelines and ETL systems",
            "Data lakes and warehouses",
            "Semantic search infrastructure",
            "Vector database setup",
            "AI-ready data platforms",
        ],
        useCases: [
            "A law firm has 10 years of contracts stored as PDFs across shared drives. We build a pipeline that reads every PDF, extracts the text, chunks it intelligently, generates embeddings, and loads it into a vector database — enabling instant semantic search across 50,000 documents.",
            "A retail company wants to consolidate data from their POS system, e-commerce platform, and warehouse software into a single analytics layer. We build the nightly ETL pipeline and data warehouse.",
            "A SaaS company wants to power a RAG-based support agent with their documentation. We set up the full vector infrastructure with hybrid BM25 and semantic search so the agent finds the right answer even when queries are phrased differently from the documentation.",
        ],
        techStack: ["Snowflake", "Apache Airflow", "dbt", "Pinecone", "Weaviate", "PostgreSQL", "Redis"],
        iconName: "Database",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Data Discovery", desc: "We audit all your existing data sources — databases, files, APIs, spreadsheets — and identify quality issues, gaps, and consolidation opportunities." },
            { step: 2, title: "Architecture Design", desc: "We design the data pipeline architecture with the right tools for your scale. You see the full blueprint, including data flows and storage choices, before we build." },
            { step: 3, title: "Pipeline Development", desc: "We build the ETL pipelines, configure the databases, and run the initial data migration. All pipelines include monitoring and error handling from day one." },
            { step: 4, title: "AI Layer Setup", desc: "We configure the vector database and embedding pipelines that connect your cleaned data to your AI agents and applications." },
        ],
        architecture: [
            { id: "sources", label: "Raw Data Sources", sublabel: "DBs / Files / APIs / PDFs", type: "source" },
            { id: "etl", label: "ETL Pipeline", sublabel: "Airflow + dbt transforms", type: "process" },
            { id: "warehouse", label: "Data Warehouse", sublabel: "Snowflake / PostgreSQL", type: "action" },
            { id: "vector", label: "Vector Store", sublabel: "Pinecone / Weaviate", type: "action" },
            { id: "ai", label: "AI-Ready Layer", sublabel: "Agents query here", type: "output" },
        ],
        caseStudy: {
            context: "A legal services firm with 10 years of contracts and case files stored as unstructured PDFs.",
            challenge: "Lawyers were spending 2-3 hours per case manually searching through old contracts and precedents. The data existed but was completely unsearchable. A simple keyword search returned too many irrelevant results.",
            result: "We built a full RAG infrastructure that ingested 50,000+ documents, generated embeddings, and enabled semantic search. Lawyers now find relevant precedents in under 30 seconds.",
            metrics: [
                { label: "Documents Indexed", value: "50,000+" },
                { label: "Search Time", value: "30 seconds" },
                { label: "Hours Saved per Case", value: "2.5 hours" },
            ],
        },
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find((s) => s.slug === slug);
}
