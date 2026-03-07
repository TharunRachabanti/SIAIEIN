export interface Industry {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
    iconName: string;
    colorClass: string;
    bgClass: string;
}

export const industriesData: Industry[] = [
    {
        slug: "ecommerce",
        title: "E-commerce",
        shortDescription: "Autonomous systems for retail logistics, customer support, and inventory optimization.",
        longDescription: "In the hyper-competitive e-commerce space, margins are won and lost on operational efficiency. We build AI agents that autonomously handle buyer inquiries, predict inventory stockouts before they happen, and generate dynamically personalized product recommendations that drive conversions.",
        features: [
            "AI order tracking and support",
            "Personalized product recommendation agents",
            "Inventory demand forecasting",
            "Customer returns automation",
            "Review analysis and response"
        ],
        iconName: "ShoppingBag",
        colorClass: "text-cyan-400",
        bgClass: "bg-cyan-500/10"
    },
    {
        slug: "saas-technology",
        title: "SaaS & Technology",
        shortDescription: "Intelligent systems to scale product operations and customer success.",
        longDescription: "Technology companies must scale rapidly without proportionally increasing headcount. Our agentic systems integrate directly into your SaaS architecture to automate user onboarding, triage technical support tickets, and predict churn based on granular usage telemetry.",
        features: [
            "User onboarding automation",
            "Customer success and retention agents",
            "Support ticket resolution",
            "Churn prediction and response workflows",
            "Product feedback analysis"
        ],
        iconName: "Rocket",
        colorClass: "text-blue-400",
        bgClass: "bg-blue-500/10"
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        shortDescription: "Secure, compliant AI workflows for medical administration and patient care.",
        longDescription: "Healthcare administration is drowning in paperwork and compliance overhead. We deploy highly secure, HIPAA-compliant AI agents that can rapidly process medical documents, handle appointment scheduling across complex calendars, and pre-process insurance claims with unprecedented accuracy.",
        features: [
            "Appointment scheduling agents",
            "Patient communication automation",
            "Medical document processing",
            "Insurance claim pre-processing",
            "Staff coordination workflows"
        ],
        iconName: "Activity",
        colorClass: "text-emerald-400",
        bgClass: "bg-emerald-500/10"
    },
    {
        slug: "finance-accounting",
        title: "Finance & Accounting",
        shortDescription: "Precision AI for transaction monitoring, reporting, and audit compliance.",
        longDescription: "Financial operations require absolute precision. We build deterministic AI workflows that monitor vast streams of transaction data for fraud, automatically generate complex multi-jurisdictional financial reports, and conduct continuous expense audits without human fatigue.",
        features: [
            "Transaction monitoring agents",
            "Fraud detection workflows",
            "Automated financial reporting",
            "Expense audit agents",
            "Regulatory compliance assistance"
        ],
        iconName: "Landmark",
        colorClass: "text-amber-400",
        bgClass: "bg-amber-500/10"
    },
    {
        slug: "manufacturing",
        title: "Manufacturing",
        shortDescription: "Predictive intelligence for supply chains and production lines.",
        longDescription: "Modern manufacturing relies on anticipating disruptions before they occur. Our systems ingest IoT telemetry and supply chain metadata to predict equipment failures, optimize massive hardware inventories, and automate communication with global suppliers.",
        features: [
            "Predictive maintenance AI",
            "Supply chain monitoring agents",
            "Production analytics",
            "Inventory optimization",
            "Quality control data analysis"
        ],
        iconName: "Factory",
        colorClass: "text-purple-400",
        bgClass: "bg-purple-500/10"
    },
    {
        slug: "retail",
        title: "Retail",
        shortDescription: "Omnichannel automation for modern retail operations.",
        longDescription: "Retailers face the challenge of bridging digital efficiency with physical operations. We implement AI that dynamically adjusts pricing across thousands of SKUs, forecasts local demand based on macroeconomic indicators, and manages complex loyalty programs autonomously.",
        features: [
            "Demand forecasting agents",
            "Dynamic pricing optimization",
            "Customer loyalty workflows",
            "Store operations automation",
            "Supplier communication agents"
        ],
        iconName: "Store",
        colorClass: "text-rose-400",
        bgClass: "bg-rose-500/10"
    },
    {
        slug: "hr-recruitment",
        title: "HR & Recruitment",
        shortDescription: "Intelligent scaling for human resource pipelines.",
        longDescription: "Finding and retaining talent shouldn't involve endless manual screening. Our AI agents can screen thousands of resumes against nuanced internal criteria, coordinate complex interview panels autonomously, and handle day-to-day employee policy queries instantly.",
        features: [
            "AI resume screening",
            "Candidate pipeline management",
            "Interview scheduling automation",
            "Employee onboarding workflows",
            "Policy and query response agents"
        ],
        iconName: "Users",
        colorClass: "text-indigo-400",
        bgClass: "bg-indigo-500/10"
    },
    {
        slug: "legal",
        title: "Legal",
        shortDescription: "Accelerated analysis and drafting for modern law practices.",
        longDescription: "Legal work involves processing massive volumes of dense text with zero margin for error. We configure specialized language models to extract critical clauses from contracts, automate case law research, and draft routine documents in a fraction of the time.",
        features: [
            "Contract analysis & extraction",
            "Case law research automation",
            "Document drafting workflows",
            "Client onboarding & triage",
            "Compliance monitoring agents"
        ],
        iconName: "Scale",
        colorClass: "text-slate-400",
        bgClass: "bg-slate-500/10"
    }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industriesData.find(i => i.slug === slug);
}
