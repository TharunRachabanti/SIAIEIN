export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    useCases: string[];
    techStack: string[];
    iconName: string;
}

export const servicesData: Service[] = [
    {
        slug: "ai-workflow-automation",
        title: "AI Workflow Automation",
        shortDescription: "Automate manual business processes across your company.",
        longDescription: "We design and deploy AI-powered workflows that replace manual processes across your business operations. By connecting intelligent language models to your existing internal APIs and tools, we build systems that autonomously route, process, and complete tasks that normally require human intervention.",
        features: [
            "Customer support pipelines",
            "Sales outreach & follow-up",
            "Email triage & response",
            "Document processing & extraction",
            "Reporting & analytics",
            "Internal team coordination"
        ],
        useCases: [
            "Automatically draft and send personalized follow-up emails based on CRM status.",
            "Parse incoming vendor invoices, verify totals, and trigger approval requests.",
            "Analyze daily logs and generate a formatted morning briefing for executives."
        ],
        techStack: ["LangChain", "n8n", "CrewAI", "Flowise", "AutoGen"],
        iconName: "Network"
    },
    {
        slug: "agentic-ai-development",
        title: "Agentic AI Development",
        shortDescription: "Custom AI agents capable of complex reasoning and multi-step execution.",
        longDescription: "We build custom AI agents that can autonomously complete complex, multi-step tasks for your business. Unlike basic scripts or rigid RPA, these agents understand natural language goals, use tools to gather information, coordinate with other specialized agents, and make context-aware decisions to achieve the objective.",
        features: [
            "Understand a goal & plan",
            "Use external tools & APIs",
            "Search the web & process docs",
            "Make context-based decisions",
            "Coordinate with other agents",
            "Report outcomes & escalate"
        ],
        useCases: [
            "An autonomous research agent deep-dives into a competitor and produces a 10-page market analysis.",
            "A technical support agent reads an error log, queries the documentation, and successfully patches a configuration file.",
            "A sales agent identifies leads on LinkedIn, crafts personalized pitches, and books meetings on your calendar."
        ],
        techStack: ["OpenAI", "Anthropic", "Python", "Docker", "AWS"],
        iconName: "Bot"
    },
    {
        slug: "custom-software-development",
        title: "Custom Software Development",
        shortDescription: "Scalable web & mobile applications for modern digital products.",
        longDescription: "We build scalable digital products — from internal business tools to full SaaS platforms. Our engineering team specializes in robust, high-performance architectures that integrate beautifully with AI systems or stand alone as world-class enterprise software.",
        features: [
            "Web Applications",
            "Mobile Apps",
            "SaaS Platforms",
            "REST APIs & Integrations",
            "Business Dashboards",
            "Internal Automation Tools"
        ],
        useCases: [
            "Building a unified internal dashboard that tracks operational metrics across 5 different legacy systems.",
            "Developing a consumer-facing mobile application with real-time bidirectional data syncing.",
            "Creating secure, scalable REST APIs to expose your proprietary data securely to enterprise partners."
        ],
        techStack: ["Python", "FastAPI", "React", "Next.js", "Node.js", "AWS", "GCP"],
        iconName: "Code"
    },
    {
        slug: "ai-consulting-strategy",
        title: "AI Consulting & Strategy",
        shortDescription: "Strategic roadmaps for enterprise AI adoption.",
        longDescription: "Not sure where to start with AI? We help companies build a clear roadmap for AI adoption. We assess your current technological maturity, identify the highest-ROI automation opportunities, and architect a secure integration plan.",
        features: [
            "AI readiness assessment",
            "Workflow analysis & automation mapping",
            "AI tool selection & evaluation",
            "AI implementation roadmap",
            "Team training and onboarding"
        ],
        useCases: [
            "Evaluating a 500-person logistics company to identify $2M in annual savings through document processing automation.",
            "Advising a corporate board on the security implications of deploying LLMs on proprietary financial data.",
            "Training an executive team on leveraging local, open-weights models for sensitive R&D tasks."
        ],
        techStack: ["Strategic Analysis", "Architecture Reviews", "Security Audits", "Tool Evaluation"],
        iconName: "Search"
    },
    {
        slug: "data-engineering",
        title: "Data Engineering",
        shortDescription: "Data pipelines and infrastructure to power your AI initiatives.",
        longDescription: "AI is only powerful when built on clean, structured data. We build the vital data foundation your AI needs to operate accurately. From migrating legacy databases to constructing massive vector stores for semantic search, we handle the data plumbing so your agents can think clearly.",
        features: [
            "Data pipelines & ETL systems",
            "Data lakes & warehouses",
            "Semantic search infrastructure",
            "Vector database setup",
            "AI-ready data platforms"
        ],
        useCases: [
            "Ingesting 10 years of unsorted PDF contracts into a structured, searchable vector database.",
            "Building a nightly ETL pipeline that synchronizes Postgres data into Snowflake for analytics.",
            "Configuring hybrid BM25 and vector search to power a highly accurate Retrieval-Augmented Generation (RAG) agent."
        ],
        techStack: ["Snowflake", "Airflow", "dbt", "Pinecone", "Weaviate", "PostgreSQL"],
        iconName: "Database"
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find(s => s.slug === slug);
}
