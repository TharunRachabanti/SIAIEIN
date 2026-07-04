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

export interface Industry {
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

export const industriesData: Industry[] = [
    {
        slug: "ecommerce",
        title: "E-commerce",
        shortDescription: "AI systems that scale retail operations without scaling headcount.",
        whatIs: "Running an e-commerce business at scale means managing thousands of orders, handling a continuous stream of customer queries, monitoring inventory across multiple warehouses, personalising the experience for every visitor, and staying on top of returns and logistics — all simultaneously. AI systems built specifically for e-commerce handle these operational layers automatically, so your team focuses on growth and relationships rather than repetitive execution.",
        longDescription: "We build AI systems that handle the high-volume, repetitive work in e-commerce operations. From intelligent order management and customer support to personalised product recommendations and demand forecasting.",
        features: [
            "AI order tracking and customer support",
            "Personalised product recommendation agents",
            "Inventory demand forecasting",
            "Customer returns and refund automation",
            "Review analysis and response",
            "Supplier communication agents",
        ],
        useCases: [
            "When a customer contacts support asking about a delayed order, the agent checks real-time courier data, identifies the specific issue, sends a personalised update, and if necessary initiates a replacement — all without a human touching it.",
            "Every night, the demand forecasting agent analyses sales velocity, seasonal trends, and competitor stock levels to generate purchase recommendations for the buying team.",
            "A review analysis agent reads every product review, extracts sentiment and specific product feedback, and prepares a weekly summary that informs the product team's decisions.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Shopify API", "WooCommerce", "Razorpay", "Pinecone", "n8n"],
        iconName: "ShoppingBag",
        heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1970&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Map Your Operations", desc: "We audit your current order management, support, and inventory workflows to identify the highest-impact automation opportunities." },
            { step: 2, title: "Connect Your Commerce Stack", desc: "We integrate with your Shopify store, warehouse system, courier partners, and payment gateway." },
            { step: 3, title: "Deploy AI Workflows", desc: "We build and deploy the automated workflows, starting with the highest-ROI processes first." },
            { step: 4, title: "Monitor and Scale", desc: "We monitor performance and expand automation coverage as your business grows." },
        ],
        architecture: [
            { id: "orders", label: "Order Events", sublabel: "Shopify / WooCommerce", type: "source" },
            { id: "route", label: "Intent Detection", sublabel: "LLM classifies the request", type: "process" },
            { id: "fulfil", label: "Fulfilment Logic", sublabel: "Courier / Warehouse APIs", type: "process" },
            { id: "action", label: "Action", sublabel: "Refund / Replace / Update", type: "action" },
            { id: "notify", label: "Customer Notified", sublabel: "Email / WhatsApp / SMS", type: "output" },
        ],
        caseStudy: {
            context: "A D2C brand selling across Shopify and Amazon with 8,000 monthly orders and a 5-person operations team.",
            challenge: "The team was spending 70% of their time on repetitive customer support — order status queries, return requests, and delivery complaints. High-value tasks like supplier negotiations and inventory planning were being neglected.",
            result: "We deployed a customer support agent and returns automation agent connected to their Shopify store and courier APIs. 80% of support queries are now handled automatically.",
            metrics: [
                { label: "Support Queries Auto-Handled", value: "80%" },
                { label: "Returns Processing Time", value: "4 hrs → 20 mins" },
                { label: "Team Hours Saved", value: "120/week" },
            ],
        },
    },
    {
        slug: "saas-technology",
        title: "SaaS and Technology",
        shortDescription: "Intelligent systems to scale product operations without hiring overhead.",
        whatIs: "SaaS companies grow fast and face a specific operational challenge: every new customer added increases support load, onboarding work, and churn risk — but revenue growth does not always keep pace with the headcount needed to handle it. AI systems built for SaaS address this by automating the high-volume, repeatable operational work — user onboarding flows, support ticket resolution, churn signal detection — so your team can focus on product and relationship work that requires human judgement.",
        longDescription: "We build AI infrastructure for SaaS companies that allows them to scale their user base without proportionally scaling their support, success, and operations teams.",
        features: [
            "User onboarding automation",
            "Customer success and retention agents",
            "Support ticket resolution",
            "Churn prediction and response workflows",
            "Product feedback analysis",
            "Usage analytics and health scoring",
        ],
        useCases: [
            "When a new user signs up, the onboarding agent detects their role and use case from their profile, sends a personalised getting-started email sequence, and checks back after 3 days to see if they have completed the key activation steps.",
            "The churn risk agent monitors product usage data for each customer. When usage drops below a threshold for 7 consecutive days, it automatically notifies the CSM and prepares a context brief on that account.",
            "A product feedback agent reads every G2 and Capterra review, categorises feedback by product area, and delivers a weekly summary to the product team.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Mixpanel API", "Intercom API", "Stripe API", "Pinecone", "PostHog"],
        iconName: "Rocket",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Product Analytics Audit", desc: "We analyse your existing usage data, activation metrics, and churn patterns to identify where AI can have the most impact." },
            { step: 2, title: "Connect Your SaaS Stack", desc: "We integrate with your product analytics, CRM, helpdesk, and communication tools." },
            { step: 3, title: "Build Intelligent Workflows", desc: "We build onboarding flows, churn detection, and support automation tailored to your product and customer segments." },
            { step: 4, title: "Iterate Based on Data", desc: "We review activation rates, retention metrics, and support resolution rates monthly and refine the workflows." },
        ],
        architecture: [
            { id: "product", label: "Product Events", sublabel: "Mixpanel / PostHog / Segment", type: "source" },
            { id: "score", label: "Health Scoring", sublabel: "Usage analysis engine", type: "process" },
            { id: "detect", label: "Signal Detection", sublabel: "Churn risk / Activation gap", type: "process" },
            { id: "action", label: "Automated Response", sublabel: "Email / CSM Alert / In-app", type: "action" },
            { id: "log", label: "CRM Updated", sublabel: "HubSpot / Salesforce", type: "output" },
        ],
        caseStudy: {
            context: "A SaaS company with 12,000 users and a customer success team of 4 people.",
            challenge: "The CS team could not proactively manage all accounts. Churn signals were identified reactively — after customers had already decided to leave. User activation rate was 34%, meaning most new signups never reached the aha moment.",
            result: "We built a churn detection agent and an automated onboarding flow. Activation rate increased to 61% within 2 months. The CS team now spends time on accounts flagged by the agent rather than manually reviewing all accounts.",
            metrics: [
                { label: "Activation Rate", value: "34% → 61%" },
                { label: "Churn Detection Accuracy", value: "87%" },
                { label: "CS Capacity Freed", value: "60%" },
            ],
        },
    },
    {
        slug: "healthcare",
        title: "Healthcare",
        shortDescription: "Secure, compliant AI workflows for medical administration and patient communication.",
        whatIs: "Healthcare providers spend a disproportionate amount of time on administrative work — scheduling appointments, processing insurance forms, managing patient records, and answering routine queries. This administrative burden takes time away from patient care and leads to burnout among clinical staff. AI systems built for healthcare automate this administrative layer in a way that is secure, compliant with relevant data regulations, and seamlessly integrated with existing hospital management software.",
        longDescription: "We build compliant AI systems for healthcare providers that automate administrative workflows, patient communication, and documentation — freeing clinical staff to focus on patient care.",
        features: [
            "Appointment scheduling agents",
            "Patient communication automation",
            "Medical document processing",
            "Insurance claim pre-processing",
            "Staff coordination workflows",
            "Patient query handling",
        ],
        useCases: [
            "A patient sends a WhatsApp message asking to reschedule their appointment. The agent checks the doctor's calendar, offers available slots, confirms the new appointment, and sends reminders 24 hours and 2 hours before — all automatically.",
            "Insurance claim forms submitted by patients are processed by an agent that extracts the relevant fields, checks them against the insurer's requirements, and flags any missing information before submission.",
            "When a consultation is complete, the documentation agent processes the voice recording or notes, generates a structured clinical summary, and adds it to the patient's record in the HMS.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "HL7 FHIR APIs", "WhatsApp Business API", "Google Calendar API", "AWS (HIPAA-compliant infra)"],
        iconName: "Activity",
        heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Compliance Framework First", desc: "We start by mapping the regulatory requirements relevant to your location and use case. All systems are designed to be compliant from day one." },
            { step: 2, title: "Map Administrative Workflows", desc: "We identify which administrative tasks consume the most clinical staff time and prioritise automating those first." },
            { step: 3, title: "Integrate with Existing HMS", desc: "We connect to your existing hospital management system or EMR using standard healthcare APIs." },
            { step: 4, title: "Staff Training and Handover", desc: "We train your administrative staff on working alongside the AI system and establish clear escalation protocols." },
        ],
        architecture: [
            { id: "patient", label: "Patient Request", sublabel: "WhatsApp / SMS / Web Form", type: "source" },
            { id: "classify", label: "Request Classification", sublabel: "Appointment / Query / Doc", type: "process" },
            { id: "process", label: "Processing Layer", sublabel: "Calendar / HMS / Insurance API", type: "process" },
            { id: "action", label: "Action Taken", sublabel: "Schedule / Process / Respond", type: "action" },
            { id: "record", label: "Record Updated", sublabel: "HMS / Patient file", type: "output" },
        ],
        caseStudy: {
            context: "A 12-doctor outpatient clinic with 200+ appointments daily and a 6-person administrative team.",
            challenge: "The admin team was overwhelmed with appointment calls, reschedule requests, insurance queries, and basic patient questions. Peak hours resulted in 30-minute hold times. Patient no-show rate was 22%.",
            result: "We deployed an appointment scheduling agent and patient communication agent connected to their HMS. The no-show rate dropped to 9% due to automated reminders. Admin staff now handle only exceptions.",
            metrics: [
                { label: "No-Show Rate", value: "22% → 9%" },
                { label: "Admin Calls Automated", value: "70%" },
                { label: "Wait Time Eliminated", value: "30 mins → 0" },
            ],
        },
    },
    {
        slug: "finance-accounting",
        title: "Finance and Accounting",
        shortDescription: "Precision AI for transaction monitoring, reporting, and compliance workflows.",
        whatIs: "Finance and accounting operations are built on rules — and rules are exactly what AI is best at executing consistently. Whether it is verifying that every transaction has the right documentation, monitoring for anomalies that could indicate fraud, generating regulatory reports on a strict schedule, or reconciling hundreds of accounts across different systems, these tasks follow repeatable patterns that AI systems can execute more accurately and faster than any manual process.",
        longDescription: "We build AI systems for financial services firms and internal finance teams that automate transaction monitoring, reporting, compliance checks, and reconciliation workflows.",
        features: [
            "Transaction monitoring agents",
            "Fraud detection workflows",
            "Automated financial reporting",
            "Expense audit agents",
            "Regulatory compliance assistance",
            "Multi-entity consolidation",
        ],
        useCases: [
            "An expense audit agent reviews every employee expense claim against company policy, flags items that need justification or receipts, and routes approved claims to the payment system — without a human touching the majority of submissions.",
            "A compliance monitoring agent scans all transactions daily against a set of regulatory rules, generates a compliance report, and flags any transactions that require review before the end of the business day.",
            "At quarter end, a financial consolidation agent pulls data from 8 subsidiary entities, applies intercompany eliminations, and generates a consolidated P&L and balance sheet in 45 minutes instead of 3 days.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "Tally API", "Zoho Books", "Stripe API", "Power BI API", "Snowflake", "dbt"],
        iconName: "Landmark",
        heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Regulatory Context Mapping", desc: "We start by documenting the specific compliance requirements for your entity type, jurisdiction, and industry." },
            { step: 2, title: "Risk-Based Prioritisation", desc: "We identify which financial workflows have the highest error risk and compliance exposure, and prioritise automating those first." },
            { step: 3, title: "Connect Financial Systems", desc: "We integrate with your ERP, banking APIs, and reporting tools with read/write-limited, fully auditable API connections." },
            { step: 4, title: "Full Audit Trail", desc: "Every automated action is logged with the reason, timestamp, and data used. Your auditors will have complete documentation of everything the system did." },
        ],
        architecture: [
            { id: "data", label: "Financial Data", sublabel: "ERP / Bank API / Invoices", type: "source" },
            { id: "monitor", label: "Monitoring Engine", sublabel: "Rules + anomaly detection", type: "process" },
            { id: "classify", label: "Classification", sublabel: "Approve / Flag / Reject", type: "process" },
            { id: "report", label: "Report Generation", sublabel: "P&L / Compliance / Audit", type: "action" },
            { id: "deliver", label: "Delivery and Archive", sublabel: "CFO / Regulator / ERP", type: "output" },
        ],
        caseStudy: {
            context: "A NBFC with 8 subsidiaries, preparing monthly consolidated accounts manually across a 12-person finance team.",
            challenge: "Month-end consolidation took 8 working days and required the finance team to work late every month. There were frequent intercompany reconciliation errors that needed manual correction. Regulatory filings were consistently last-minute.",
            result: "We built an automated consolidation and reporting agent connected to all 8 entities' accounting systems. Month-end consolidation now completes in 4 hours and regulatory reports are filed 5 days ahead of deadlines.",
            metrics: [
                { label: "Consolidation Time", value: "8 days → 4 hours" },
                { label: "Reconciliation Errors", value: "0" },
                { label: "Filing Lead Time", value: "+5 days" },
            ],
        },
    },
    {
        slug: "manufacturing",
        title: "Manufacturing",
        shortDescription: "Predictive intelligence for supply chains and production operations.",
        whatIs: "Manufacturing operations generate enormous amounts of data from machines, sensors, production lines, inventory systems, and supplier networks. Most of this data is collected but never fully used to make decisions because processing it manually is impractical. AI systems built for manufacturing connect to this data in real time and use it to predict equipment failures before they happen, optimise production schedules, monitor quality control signals, and flag supply chain risks before they cause disruptions.",
        longDescription: "We build AI systems for manufacturing companies that connect to production data, supply chain systems, and quality management tools to enable predictive operations and intelligent automation.",
        features: [
            "Predictive maintenance AI",
            "Supply chain monitoring agents",
            "Production analytics",
            "Inventory optimisation",
            "Quality control data analysis",
            "Supplier risk monitoring",
        ],
        useCases: [
            "Vibration sensors on a critical CNC machine are producing readings outside normal parameters. The predictive maintenance agent detects the anomaly, cross-references historical failure data, and schedules a maintenance inspection 3 days before the machine would have failed.",
            "A key supplier has missed two delivery confirmation deadlines. The supply chain agent flags the risk, identifies two alternative suppliers, and prepares a comparison brief for the procurement team.",
            "The production scheduling agent analyses current order volumes, machine availability, and material stock levels and recommends an optimised production sequence for the following week.",
        ],
        techStack: ["Python", "OpenAI GPT-4o", "SAP API", "MQTT (IoT)", "InfluxDB", "Snowflake", "Grafana", "Pandas / Scikit-learn"],
        iconName: "Factory",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Production Data Audit", desc: "We catalogue your existing sensor data, production systems, and quality records to identify data gaps and connection opportunities." },
            { step: 2, title: "Connect the Data Layers", desc: "We connect IoT sensors, ERP systems, and supplier portals into a unified data pipeline." },
            { step: 3, title: "Build Predictive Models", desc: "We train predictive maintenance and demand forecasting models on your historical operational data." },
            { step: 4, title: "Integrate with Operations", desc: "Alerts and recommendations are delivered directly into your existing workflow — maintenance scheduling systems, procurement tools, and team dashboards." },
        ],
        architecture: [
            { id: "sensors", label: "Machine Sensors", sublabel: "IoT / MQTT / PLC data", type: "source" },
            { id: "pipeline", label: "Data Pipeline", sublabel: "InfluxDB + Snowflake", type: "process" },
            { id: "ml", label: "Predictive Engine", sublabel: "Anomaly + failure models", type: "process" },
            { id: "alert", label: "Alert and Action", sublabel: "Maintenance / Procurement", type: "action" },
            { id: "dashboard", label: "Operations Dashboard", sublabel: "Grafana / SAP", type: "output" },
        ],
        caseStudy: {
            context: "A precision parts manufacturer running 24/7 operations with 40 CNC machines and one major unplanned downtime event per month on average.",
            challenge: "Unplanned downtime was costing the company approximately ₹8 lakh per incident in lost production and emergency maintenance. There was no systematic way to predict machine failures before they happened.",
            result: "We deployed a predictive maintenance agent connected to vibration and temperature sensors on all 40 machines. In the 6 months following deployment, there were zero unplanned downtime events from sensor-monitored machines.",
            metrics: [
                { label: "Unplanned Downtime Events", value: "0 in 6 months" },
                { label: "Maintenance Cost", value: "-35%" },
                { label: "Annual Savings", value: "₹96L" },
            ],
        },
    },
    {
        slug: "retail",
        title: "Retail",
        shortDescription: "Omnichannel automation for modern retail operations and inventory management.",
        whatIs: "Modern retail runs on data — sales by SKU, store performance by hour, supplier lead times, demand patterns by season, loyalty programme engagement, and competitor pricing. But most retail businesses cannot act on this data quickly enough because turning it into decisions requires manual analysis and reporting. AI systems built for retail close this gap by automating the data analysis, generating dynamic pricing recommendations, predicting demand accurately enough to reduce overstock and stockouts, and personalising the customer experience across every channel.",
        longDescription: "We build AI systems for retail businesses that enable dynamic pricing, demand forecasting, customer personalisation, and operational automation across online and offline channels.",
        features: [
            "Demand forecasting agents",
            "Dynamic pricing optimisation",
            "Customer loyalty workflows",
            "Store operations automation",
            "Supplier communication agents",
            "Cross-channel inventory synchronisation",
        ],
        useCases: [
            "The demand forecasting agent analyses 3 years of historical sales data, seasonal trends, and upcoming events to generate SKU-level purchase recommendations for the next 4 weeks, reducing both overstock and stockouts.",
            "When a competitor reduces their price on a high-volume product, the dynamic pricing agent detects the change within 2 hours and suggests a pricing response based on your margin rules and competitive positioning.",
            "A customer who has not purchased in 90 days receives a personalised re-engagement email from the loyalty agent, referencing their favourite product category and including a targeted offer.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "Shopify API", "SAP Retail", "Salesforce Commerce", "Google Ads API", "Snowflake", "Pandas"],
        iconName: "Store",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Sales and Inventory Audit", desc: "We analyse your historical sales data, inventory records, and supplier performance to identify the highest-value AI opportunities." },
            { step: 2, title: "Connect Retail Systems", desc: "We integrate with your POS system, e-commerce platform, ERP, and supplier portals." },
            { step: 3, title: "Build Forecasting and Pricing Models", desc: "We train demand forecasting models and pricing recommendation engines on your specific product and market data." },
            { step: 4, title: "Deploy and Refine", desc: "Models are refined continuously as new sales data becomes available, improving accuracy over time." },
        ],
        architecture: [
            { id: "sales", label: "Sales and POS Data", sublabel: "POS / E-commerce / ERP", type: "source" },
            { id: "forecast", label: "Demand Forecast", sublabel: "ML on historical + external", type: "process" },
            { id: "pricing", label: "Pricing Engine", sublabel: "Dynamic rules + competitors", type: "process" },
            { id: "action", label: "Recommendations", sublabel: "Buying / Pricing / Promo", type: "action" },
            { id: "exec", label: "Execution", sublabel: "POS update / Supplier order", type: "output" },
        ],
        caseStudy: {
            context: "A fashion retail chain with 8 stores and an e-commerce operation managing 2,400 active SKUs.",
            challenge: "The buying team was working on gut feel and basic spreadsheets. Stockout rate was 12% and overstock was tying up ₹40 lakhs in capital annually. Markdown decisions were made too late in the season.",
            result: "We deployed a demand forecasting agent and markdown optimisation workflow. Stockout rate dropped to 4% and overstock capital was reduced by 60% in the first full buying season.",
            metrics: [
                { label: "Stockout Rate", value: "12% → 4%" },
                { label: "Overstock Capital Freed", value: "₹24L" },
                { label: "Buying Accuracy", value: "+38%" },
            ],
        },
    },
    {
        slug: "hr-recruitment",
        title: "HR and Recruitment",
        shortDescription: "Intelligent automation for hiring pipelines and people operations.",
        whatIs: "HR teams carry two very different types of workloads. There is the high-volume, process-driven work — screening resumes, scheduling interviews, processing onboarding documents, answering policy queries — and there is the high-judgement work — interviewing candidates, making hiring decisions, handling sensitive employee situations, and building culture. AI systems for HR take the first category completely off the team's plate, giving them the capacity to do the second category exceptionally well.",
        longDescription: "We build AI systems that handle the process-driven side of HR — resume screening, interview scheduling, onboarding workflows, and employee queries — so your HR team can focus on people decisions and culture.",
        features: [
            "AI resume screening and ranking",
            "Candidate pipeline management",
            "Interview scheduling automation",
            "Employee onboarding workflows",
            "Policy and query response agents",
            "Offer letter processing",
        ],
        useCases: [
            "A senior engineering role receives 300 applications. The screening agent processes every resume overnight, scores each one against the job requirements, and presents a ranked shortlist of 20 candidates by 9am the next morning.",
            "The onboarding agent sends each new hire a personalised onboarding checklist, monitors completion, sends reminders for incomplete items, and notifies the HR team when a new hire has completed all required steps.",
            "An employee asks about the notice period policy for their grade level. The query agent answers instantly from the employee handbook, without the HR team needing to respond.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Greenhouse / Lever API", "Google Calendar API", "Slack API", "DocuSign API", "Pinecone (HR handbook RAG)"],
        iconName: "Users",
        heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "HR Workflow Mapping", desc: "We map every step of your hiring process and employee lifecycle to identify which tasks are best candidates for automation." },
            { step: 2, title: "Define Screening Criteria", desc: "We work with your hiring managers to define role-specific screening criteria for every active position." },
            { step: 3, title: "Connect HR Stack", desc: "We integrate with your ATS, HRIS, calendar, and communication tools." },
            { step: 4, title: "Build and Test", desc: "We run the system through a full hiring cycle in test mode, review the shortlisting decisions with your team, and calibrate before going live." },
        ],
        architecture: [
            { id: "ats", label: "ATS / Job Board", sublabel: "Applications received", type: "source" },
            { id: "screen", label: "AI Screening", sublabel: "Score and rank candidates", type: "process" },
            { id: "schedule", label: "Interview Scheduling", sublabel: "Calendar coordination", type: "process" },
            { id: "onboard", label: "Onboarding Agent", sublabel: "Document and checklist automation", type: "action" },
            { id: "hris", label: "HRIS Updated", sublabel: "Employee record created", type: "output" },
        ],
        caseStudy: {
            context: "A 300-person manufacturing company hiring 40-50 new staff per year with a 2-person HR team.",
            challenge: "With 2 HR staff managing both recruitment and all HR operations, the team could not give any hiring process the attention it deserved. Roles took an average of 9 weeks to fill and several strong candidates withdrew because the process was too slow.",
            result: "We deployed a recruitment agent handling all screening and scheduling. Time-to-hire dropped to 4 weeks. The HR team now spends their time interviewing the shortlisted candidates rather than processing applications.",
            metrics: [
                { label: "Time-to-Hire", value: "9 weeks → 4 weeks" },
                { label: "Applications Screened Automatically", value: "90%" },
                { label: "Candidate Withdrawal Rate", value: "-55%" },
            ],
        },
    },
    {
        slug: "legal",
        title: "Legal",
        shortDescription: "AI systems that accelerate legal research, contract analysis, and document processing.",
        whatIs: "Legal work is fundamentally document-intensive. Reading contracts, extracting key clauses, researching case law, analysing regulatory requirements, drafting standard agreements, and managing client onboarding — all of this involves processing large volumes of text against a structured set of criteria. AI systems built for legal services do not replace legal judgement, but they dramatically reduce the time lawyers spend on the information processing and document handling that precedes that judgement. The result is more time for client work and higher-value advisory roles.",
        longDescription: "We build AI systems for law firms and in-house legal teams that accelerate contract analysis, case research, document drafting, and client onboarding — without replacing legal expertise.",
        features: [
            "Contract analysis and clause extraction",
            "Case law research automation",
            "Document drafting workflows",
            "Client onboarding and triage",
            "Compliance monitoring agents",
            "NDA and standard agreement review",
        ],
        useCases: [
            "A client sends a 60-page vendor agreement for review. The contract analysis agent reads the entire document, extracts all key clauses, flags unusual terms, and delivers a structured review summary to the lawyer in 8 minutes instead of 3 hours.",
            "A lawyer needs to understand how courts have ruled on a specific IP clause type in the last 5 years. The research agent searches case law databases, finds 14 relevant cases, summarises each one, and produces a structured brief.",
            "When a new client submits an onboarding form, the client intake agent collects and verifies all required information, checks for conflicts of interest against existing clients, and creates a structured client file before the lawyer even reviews the case.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Pinecone (case law RAG)", "DocuSign API", "MS Word API", "SCC Online API", "ManupaTra API"],
        iconName: "Scale",
        heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2024&auto=format&fit=crop",
        howWeHelp: [
            { step: 1, title: "Legal Workflow Analysis", desc: "We spend time with your team understanding which document-intensive tasks consume the most lawyer time and which are most consistent in their structure." },
            { step: 2, title: "Knowledge Base Build", desc: "We ingest your precedent library, case files, and standard templates into a secure vector database." },
            { step: 3, title: "Build Review and Research Agents", desc: "We build the contract analysis and research agents and calibrate them against your quality standards." },
            { step: 4, title: "Pilot with Senior Review", desc: "All agent outputs during the pilot phase are reviewed by a senior lawyer before being used. We use that feedback to refine accuracy." },
        ],
        architecture: [
            { id: "docs", label: "Legal Documents", sublabel: "PDFs / DOCX / Case files", type: "source" },
            { id: "index", label: "Indexing Layer", sublabel: "Vector embeddings + OCR", type: "process" },
            { id: "agent", label: "Analysis Agent", sublabel: "Clause extraction + research", type: "process" },
            { id: "draft", label: "Draft Generation", sublabel: "Structured summary + redlines", type: "action" },
            { id: "deliver", label: "Lawyer Review", sublabel: "Output in Word / PDF", type: "output" },
        ],
        caseStudy: {
            context: "A 15-lawyer firm specialising in commercial contracts spending significant time on routine NDA and vendor agreement reviews.",
            challenge: "Junior lawyers were spending 2-3 hours per routine contract review. Senior partner time was being consumed supervising these reviews instead of focusing on complex matters and client development.",
            result: "We deployed a contract analysis agent trained on the firm's precedents. Routine contract reviews now take under 15 minutes including lawyer review of the agent output. Junior lawyers' time was redirected to more complex work.",
            metrics: [
                { label: "Review Time per Contract", value: "3 hrs → 15 mins" },
                { label: "Contracts Reviewed per Day", value: "+400%" },
                { label: "Partner Review Time Freed", value: "8 hrs/week" },
            ],
        },
    },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
    return industriesData.find((i) => i.slug === slug);
}
