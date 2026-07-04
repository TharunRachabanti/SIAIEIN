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

export interface Agent {
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
    demoId: string;
    howWeHelp: HowWeHelpStep[];
    architecture: ArchNode[];
    caseStudy: CaseStudy;
}

export const agentsData: Agent[] = [
    {
        slug: "sales-outreach",
        title: "Sales Outreach Agent",
        shortDescription: "Handles the top of your sales funnel without needing a human to manage it.",
        whatIs: "The top of your sales funnel is where most businesses bleed time. Someone has to find leads, qualify them, write personalised outreach, follow up three times, and update the CRM — all before a single meeting is booked. A Sales Outreach Agent does all of this automatically. It connects to your CRM and lead sources, scans for high-priority prospects, writes personalised emails based on each contact's role and company context, sends them, follows up, and books meetings directly on your calendar. Your team closes deals. The agent does everything before that.",
        longDescription: "The Sales Outreach Agent connects to your CRM, scans your lead pipeline, and takes action on every lead without any manual input. It writes personalised outreach emails, sends follow-up sequences, and books meetings directly on your calendar.",
        features: [
            "Find and qualify leads from your CRM",
            "Write personalised outreach emails",
            "Send automated follow-up sequences",
            "Track replies and engagement",
            "Book meetings directly on your calendar",
            "Update CRM records automatically",
        ],
        useCases: [
            "After a trade show, 300 business cards are uploaded. The agent scores each contact, assigns them to the right rep, writes a personalised email referencing their specific product interest, and schedules follow-ups.",
            "A sales team of 5 receives 80 inbound demo requests in a week. The agent qualifies each one using your ICP criteria, responds instantly to high-priority leads, and books meetings automatically.",
            "For every deal that goes quiet for more than 7 days, the agent sends a personalised check-in and notifies the rep if there is still no response after a second attempt.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Salesforce API", "HubSpot API", "Gmail API", "LinkedIn API", "Calendly"],
        iconName: "TrendingUp",
        heroImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
        demoId: "sales-outreach",
        howWeHelp: [
            { step: 1, title: "Define Your ICP", desc: "We work with your sales team to define the exact criteria for a qualified lead and the tone and style of your outreach." },
            { step: 2, title: "Connect Your Stack", desc: "We integrate the agent with your CRM, email provider, and calendar. All connections use secure OAuth — we never store credentials." },
            { step: 3, title: "Train on Your Playbook", desc: "We upload your sales playbook, case studies, and customer success stories so the agent writes in your voice." },
            { step: 4, title: "Monitor and Improve", desc: "We track open rates, reply rates, and meeting bookings weekly and refine the agent's messaging based on what is working." },
        ],
        architecture: [
            { id: "crm", label: "CRM / Lead Source", sublabel: "Salesforce / HubSpot / CSV", type: "source" },
            { id: "qualify", label: "Lead Scoring", sublabel: "ICP criteria evaluation", type: "process" },
            { id: "draft", label: "Email Drafting", sublabel: "LLM with context injection", type: "process" },
            { id: "send", label: "Send and Track", sublabel: "Gmail / Outlook API", type: "action" },
            { id: "book", label: "Meeting Booked", sublabel: "Calendly + CRM updated", type: "output" },
        ],
        caseStudy: {
            context: "A B2B software company with a 4-person sales team and 2,800 leads in their CRM that had not been worked.",
            challenge: "The team was too small to manually work through the lead backlog. High-priority leads were getting lost. Average response time to new inbound leads was 11 hours, costing them deals to faster competitors.",
            result: "We deployed the Sales Outreach Agent connected to their HubSpot CRM. Within the first week, the agent processed all 2,800 dormant leads, booked 23 meetings, and reduced average response time to new leads to under 4 minutes.",
            metrics: [
                { label: "Response Time", value: "4 minutes" },
                { label: "Meetings Booked (Week 1)", value: "23" },
                { label: "Pipeline Value Added", value: "₹40L" },
            ],
        },
    },
    {
        slug: "customer-support",
        title: "Customer Support Agent",
        shortDescription: "Resolves support tickets around the clock without any human involvement.",
        whatIs: "Customer support is one of the most predictable high-volume tasks in any business. The same questions come in repeatedly, the same processes handle them, and the same answers resolve them. A Customer Support Agent connects to your helpdesk and knowledge base and handles the majority of this volume completely automatically. It reads each ticket, finds the right answer in your documentation or systems, writes a personalised response, and closes the ticket. For anything genuinely complex or sensitive, it escalates to a human with full context already prepared — saving that person time even in the cases the agent cannot fully handle.",
        longDescription: "The Customer Support Agent handles incoming tickets end to end. It reads each query, searches your documentation for the right answer, sends a personalised reply, and closes the ticket. For anything complex, it escalates to a human with full context attached.",
        features: [
            "Answer FAQs from your knowledge base",
            "Handle refund and return requests",
            "Escalate complex issues to humans with context",
            "Log every interaction automatically",
            "Learn from past conversations over time",
            "Handle multiple tickets simultaneously",
        ],
        useCases: [
            "A SaaS product receives 150 support tickets on a Monday morning after a release. The agent works through all of them in parallel, resolving 118 automatically and preparing summaries for the 32 that need human review.",
            "A customer asks for a refund. The agent checks the purchase date against the refund policy, approves the refund, processes it through the payment gateway, sends a confirmation email, and updates the helpdesk record.",
            "A customer reports a bug. The agent cannot resolve it, so it pulls the customer's account details, the error log, and all previous interactions, then creates a structured ticket for the engineering team with all context included.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Freshdesk API", "Zendesk API", "Razorpay API", "Pinecone (RAG)", "Slack"],
        iconName: "MessageSquare",
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        demoId: "customer-support",
        howWeHelp: [
            { step: 1, title: "Knowledge Base Setup", desc: "We ingest your documentation, past ticket history, and FAQ content into a vector database so the agent can retrieve accurate answers." },
            { step: 2, title: "Connect Helpdesk", desc: "We integrate with your existing helpdesk — Freshdesk, Zendesk, Intercom, or a custom system — via their APIs." },
            { step: 3, title: "Define Escalation Rules", desc: "We work with your team to define exactly when the agent should escalate and what information it should prepare for the human taking over." },
            { step: 4, title: "Monitor Quality", desc: "We track resolution rate, customer satisfaction scores, and incorrect responses weekly, and refine the agent's responses accordingly." },
        ],
        architecture: [
            { id: "ticket", label: "Incoming Ticket", sublabel: "Freshdesk / Zendesk / Email", type: "source" },
            { id: "rag", label: "Knowledge Retrieval", sublabel: "Vector search on your docs", type: "process" },
            { id: "respond", label: "Response Drafting", sublabel: "LLM with context", type: "process" },
            { id: "action", label: "System Actions", sublabel: "Refund / Update / Escalate", type: "action" },
            { id: "close", label: "Ticket Closed", sublabel: "Log updated, customer notified", type: "output" },
        ],
        caseStudy: {
            context: "A SaaS company with 15,000 users and a support team of 3 people handling 200-300 tickets per day.",
            challenge: "The team was overwhelmed. Average first-response time was 48 hours. Customer satisfaction scores were dropping and churn was increasing. Hiring more support staff was not affordable.",
            result: "We deployed the Customer Support Agent connected to their Zendesk and documentation. It now handles 78% of tickets without human involvement with an average response time of under 5 minutes.",
            metrics: [
                { label: "Tickets Auto-Resolved", value: "78%" },
                { label: "First Response Time", value: "4 minutes" },
                { label: "Support Cost Saved", value: "₹24L/year" },
            ],
        },
    },
    {
        slug: "research-intelligence",
        title: "Research and Intelligence Agent",
        shortDescription: "Keeps an eye on your market and brings you structured insights on a regular schedule.",
        whatIs: "Most businesses know they should be monitoring their competitors, tracking industry news, and analysing market trends — but nobody has time to do it properly. A Research and Intelligence Agent does this continuously. It scrapes competitor websites for pricing and product changes, monitors industry publications and news feeds, tracks social media sentiment about your brand and your competitors, and compiles everything into a structured intelligence report delivered on whatever schedule you set. You get the insights of a full-time analyst without the headcount.",
        longDescription: "The Research Agent monitors your competitive landscape so you don't have to. It scrapes competitor data, scans industry news, analyses social sentiment, and compiles structured intelligence reports delivered on a schedule.",
        features: [
            "Track competitor website and pricing changes",
            "Monitor industry news and publications",
            "Analyse brand sentiment on social media",
            "Generate weekly intelligence reports",
            "Identify market opportunities and threats",
            "Monitor competitor hiring signals via job postings",
        ],
        useCases: [
            "Every Sunday night, the agent scrapes 12 competitor websites, checks pricing pages and product updates, and has a competitive intelligence brief ready in the CEO's inbox by 7am Monday.",
            "The agent monitors LinkedIn, Twitter, and Reddit for mentions of your brand and your competitors. When negative sentiment spikes about a competitor, it flags it as an opportunity and notifies your marketing team.",
            "Before a quarterly business review, the agent generates a complete market analysis report covering competitor moves, industry trends, and relevant regulatory changes in the past 90 days.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "Playwright (web scraping)", "NewsAPI", "Twitter API", "Pinecone", "Notion / Slack"],
        iconName: "Search",
        heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
        demoId: "research-intelligence",
        howWeHelp: [
            { step: 1, title: "Define Your Intelligence Needs", desc: "We work with you to identify which competitors to track, which news sources matter, and what format of report is most useful." },
            { step: 2, title: "Build the Data Collection Layer", desc: "We configure the web scrapers, news API integrations, and social monitoring feeds tailored to your industry." },
            { step: 3, title: "Design Report Templates", desc: "We build structured report templates so the output is consistent, scannable, and immediately actionable — not walls of raw text." },
            { step: 4, title: "Schedule and Deliver", desc: "Reports are delivered to your inbox or Slack on the schedule you set. You can also query the agent ad-hoc for specific questions." },
        ],
        architecture: [
            { id: "sources", label: "Data Sources", sublabel: "Web / News / Social / APIs", type: "source" },
            { id: "scrape", label: "Collection Layer", sublabel: "Playwright + API integrations", type: "process" },
            { id: "analyse", label: "LLM Analysis", sublabel: "Summarise and extract insights", type: "process" },
            { id: "structure", label: "Report Builder", sublabel: "Structured output templates", type: "action" },
            { id: "deliver", label: "Delivery", sublabel: "Email / Slack / Notion", type: "output" },
        ],
        caseStudy: {
            context: "A mid-size e-commerce company competing against 8 direct competitors in a price-sensitive market.",
            challenge: "The marketing team had no systematic way to track competitor pricing or promotions. They frequently found out about competitor moves too late, after customers had already switched. A competitor had undercut their flagship product price by 15% and they didn't notice for 3 weeks.",
            result: "We deployed the Research Agent monitoring all 8 competitors. It now detects pricing changes within hours and sends instant alerts. The team credits the agent with helping them respond to a major competitor promotion within 24 hours.",
            metrics: [
                { label: "Competitors Monitored", value: "8" },
                { label: "Detection Time for Changes", value: "Under 2 hrs" },
                { label: "Analyst Hours Replaced", value: "20/week" },
            ],
        },
    },
    {
        slug: "operations",
        title: "Operations Agent",
        shortDescription: "Keeps your internal workflows moving without anyone micromanaging them.",
        whatIs: "Operations management is fundamentally about information flow. Someone needs to know what is happening, identify what is blocked, update the right people, and make sure tasks get completed on time. A Operations Agent does this automatically by connecting to your project management tools, communication platforms, and calendars. It monitors active projects, identifies blockers before they cause delays, reassigns tasks that are falling behind, generates status reports, and keeps every stakeholder informed without anyone manually chasing it.",
        longDescription: "The Operations Agent connects to your project management tools, communication platforms, and calendars to keep everything in sync. It monitors active projects for blockers, reassigns overdue tasks, and sends automated status updates.",
        features: [
            "Monitor active projects for blockers",
            "Auto-assign and reassign overdue tasks",
            "Send automated internal status updates",
            "Generate weekly cross-team status reports",
            "Schedule standups and recurring meetings",
            "Sync data across Jira, Notion, Slack, and more",
        ],
        useCases: [
            "A project manager oversees 12 active projects across 4 teams. Every morning, the agent sends them a consolidated briefing highlighting any tasks that are past due, any blockers that have not been resolved, and any dependencies at risk.",
            "A task has been sitting unassigned in Jira for 3 days. The agent detects it, identifies the right team member based on current workload and skill, assigns it, and sends them a notification with context.",
            "Every Friday at 5pm, the agent compiles data from Jira, Notion, and Slack into a formatted status report and posts it to the leadership Slack channel.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Jira API", "Notion API", "Slack API", "Google Calendar API", "Linear API"],
        iconName: "Settings",
        heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        demoId: "operations",
        howWeHelp: [
            { step: 1, title: "Map Your Operations Stack", desc: "We catalogue every tool your team uses for project management, communication, and documentation." },
            { step: 2, title: "Connect the Systems", desc: "We integrate the agent with all your tools via their APIs, setting up bidirectional data flow where needed." },
            { step: 3, title: "Define the Rules", desc: "We work with you to define what constitutes a blocker, a delay, or an overdue task in your specific context." },
            { step: 4, title: "Set the Reporting Cadence", desc: "We configure the reporting schedule — daily briefings, weekly summaries, instant alerts — to match how your team works." },
        ],
        architecture: [
            { id: "pm", label: "Project Tools", sublabel: "Jira / Linear / Notion", type: "source" },
            { id: "monitor", label: "Status Monitor", sublabel: "Scans for delays and blockers", type: "process" },
            { id: "decide", label: "Decision Engine", sublabel: "Rules and priority logic", type: "process" },
            { id: "act", label: "Actions", sublabel: "Assign / Notify / Reschedule", type: "action" },
            { id: "report", label: "Status Report", sublabel: "Slack / Email / Notion", type: "output" },
        ],
        caseStudy: {
            context: "A software agency managing 20 concurrent client projects with a team of 35.",
            challenge: "Project managers were spending 3 hours every morning just figuring out what was blocked and updating spreadsheets. Projects were regularly slipping by 2-3 days because blockers were not identified until daily standups.",
            result: "We deployed the Operations Agent connected to their Jira and Slack. Blockers are now detected within the hour they occur. PM morning prep time dropped from 3 hours to 20 minutes.",
            metrics: [
                { label: "PM Morning Prep Time", value: "20 mins" },
                { label: "Blocker Detection Time", value: "Under 1 hour" },
                { label: "Project Slip Rate", value: "-60%" },
            ],
        },
    },
    {
        slug: "finance-accounting",
        title: "Finance and Accounting Agent",
        shortDescription: "Takes the repetitive side of finance completely off your team's plate.",
        whatIs: "Finance teams spend a disproportionate amount of their time on tasks that follow consistent rules — reading invoices, checking them against purchase orders, reconciling bank statements, categorising expenses, and generating reports. These tasks are time-consuming, error-prone when done manually, and deeply unglamorous. A Finance Agent handles all of this automatically. It connects to your accounting system, email, and banking APIs, processes every transaction according to your rules, flags anything unusual for human review, and generates reports on the schedule you set.",
        longDescription: "The Finance Agent handles the high-volume, rule-based tasks that eat up your finance team's time. It processes vendor invoices, reconciles bank transactions, flags anomalies, and generates financial reports automatically.",
        features: [
            "Process and verify vendor invoices",
            "Reconcile bank transactions automatically",
            "Detect anomalies and flag them for review",
            "Generate monthly P&L and financial reports",
            "Monitor budget utilisation in real time",
            "Maintain a full audit trail of every action",
        ],
        useCases: [
            "Every Monday morning, 50 vendor invoices land in the finance inbox. The agent reads each one, verifies it against the purchase order, checks the total, and routes approved invoices to the payment queue automatically.",
            "The agent reconciles all bank transactions against Tally entries nightly. If a transaction does not have a matching entry, it flags it and notifies the finance manager before the morning.",
            "At the end of each month, the agent pulls all transaction data and generates a formatted P&L statement, balance sheet snapshot, and cash flow summary — delivered to the CFO by 8am on the first of the month.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "Tally API", "Zoho Books API", "Bank APIs", "Razorpay", "Google Sheets / Excel"],
        iconName: "DollarSign",
        heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
        demoId: "finance-accounting",
        howWeHelp: [
            { step: 1, title: "Map Your Finance Workflows", desc: "We document every manual finance process — invoice handling, reconciliation, reporting — and identify which are safe to automate." },
            { step: 2, title: "Connect Your Systems", desc: "We integrate with your accounting software, email, and banking APIs using secure, read/write-limited API keys." },
            { step: 3, title: "Define Approval Rules", desc: "We configure the rules for what the agent can process automatically and what must be escalated for human approval." },
            { step: 4, title: "Audit Trail Setup", desc: "Every action the agent takes is logged with full context. Your finance team has complete visibility into everything the agent has done." },
        ],
        architecture: [
            { id: "inbox", label: "Invoices / Bank Data", sublabel: "Email / Banking API / ERP", type: "source" },
            { id: "parse", label: "Document Parsing", sublabel: "OCR + LLM extraction", type: "process" },
            { id: "verify", label: "Verification", sublabel: "Check against PO / rules", type: "process" },
            { id: "action", label: "Process or Flag", sublabel: "Pay / Approve / Escalate", type: "action" },
            { id: "log", label: "Report and Audit Log", sublabel: "Tally / ERP / Dashboard", type: "output" },
        ],
        caseStudy: {
            context: "A manufacturing company with 8 finance staff processing 400+ vendor invoices and 1,200+ bank transactions weekly.",
            challenge: "The finance team was spending 60% of their time on manual invoice processing and bank reconciliation. The process took 3 days per week and had a consistent 4% error rate that caused payment delays and vendor disputes.",
            result: "The Finance Agent now processes all invoices and reconciles all transactions automatically. The 8 finance staff now focus on analysis and vendor relationships. The error rate dropped to zero.",
            metrics: [
                { label: "Processing Time", value: "85% faster" },
                { label: "Error Rate", value: "0%" },
                { label: "Annual Savings", value: "₹22L" },
            ],
        },
    },
    {
        slug: "hr-recruitment",
        title: "HR and Recruitment Agent",
        shortDescription: "Handles the manual parts of hiring so your team can focus on actual people decisions.",
        whatIs: "Recruitment is a volume problem before it is a quality problem. Before your HR team can make a single good hire, someone has to read hundreds of resumes, filter out the irrelevant ones, send outreach to promising candidates, coordinate schedules across multiple interviewers, and manage all the follow-up communication. An HR and Recruitment Agent handles all of this volume work automatically. Your HR team's attention is reserved for the interviews, the assessments, and the offers — the decisions that actually require human judgement.",
        longDescription: "The HR Agent connects to your applicant tracking system and handles the volume work in your recruitment pipeline. It screens resumes, shortlists candidates, sends interview invitations, books slots on the panel's calendar, and handles all follow-up communication.",
        features: [
            "Screen resumes against your specific criteria",
            "Rank and shortlist top candidates",
            "Send interview invitations automatically",
            "Schedule interviews across the panel's calendars",
            "Handle candidate follow-up and rejection emails",
            "Answer employee policy and HR queries",
        ],
        useCases: [
            "A job posting goes live for a senior engineering role and receives 234 applications in 48 hours. The agent screens every resume overnight, shortlists 18 candidates above 82% match, and has interview invites sent by morning.",
            "Scheduling a panel interview normally involves 10-15 emails. The agent identifies available slots across all 4 interviewers' calendars and offers them to the candidate in a single email — the whole process takes under 10 minutes.",
            "An employee asks the agent about the company's leave policy and remote work guidelines. The agent answers instantly from the employee handbook, saving HR the time of responding to the same questions repeatedly.",
        ],
        techStack: ["OpenAI GPT-4o", "LangChain", "Greenhouse API", "Lever API", "Google Calendar API", "Gmail API", "LinkedIn API"],
        iconName: "Users",
        heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
        demoId: "hr-recruitment",
        howWeHelp: [
            { step: 1, title: "Define Screening Criteria", desc: "We work with your hiring managers to define the exact technical and cultural criteria for each role the agent will screen." },
            { step: 2, title: "Connect Your ATS", desc: "We integrate with your applicant tracking system and calendar tools so the agent works within your existing process." },
            { step: 3, title: "Configure Communication Templates", desc: "We set up email templates for invitations, rejections, and follow-ups in your company's tone and style." },
            { step: 4, title: "Review and Calibrate", desc: "After the first hiring cycle, we review the agent's shortlisting decisions with your team and refine the scoring criteria." },
        ],
        architecture: [
            { id: "ats", label: "ATS / Job Board", sublabel: "Greenhouse / Lever / CSV", type: "source" },
            { id: "screen", label: "Resume Screening", sublabel: "LLM scores against criteria", type: "process" },
            { id: "shortlist", label: "Shortlist and Rank", sublabel: "Top candidates identified", type: "process" },
            { id: "schedule", label: "Interview Scheduling", sublabel: "Calendar coordination", type: "action" },
            { id: "notify", label: "Candidate Notified", sublabel: "Email + ATS updated", type: "output" },
        ],
        caseStudy: {
            context: "A fast-growing startup hiring 15 people across 8 roles simultaneously with a 2-person HR team.",
            challenge: "The HR team was completely overwhelmed. Resume screening alone was taking 3 full days per role. Interview scheduling required dozens of emails per candidate. Several strong candidates dropped out during the process because it was too slow.",
            result: "The HR Agent now handles all initial screening and scheduling. The team's time is now spent entirely on interviews and assessments. Time-to-offer dropped from 5 weeks to 2.5 weeks.",
            metrics: [
                { label: "Screening Time per Role", value: "-75%" },
                { label: "Time-to-Offer", value: "2.5 weeks" },
                { label: "Candidate Drop-Off Rate", value: "-40%" },
            ],
        },
    },
    {
        slug: "data-analyst",
        title: "Data Analyst Agent",
        shortDescription: "Turns your raw business data into clear, actionable insights without any manual work.",
        whatIs: "Most businesses have more data than they can use. It sits in databases, spreadsheets, and BI tools, largely unread, because turning raw data into useful insights requires someone to write queries, run analysis, build charts, and write a summary — and that takes time nobody has. A Data Analyst Agent does this automatically. It connects to your databases and data sources, runs queries on the schedule you set, performs trend analysis, generates dashboards, writes plain-language summaries of the key findings, and alerts your team when something important changes.",
        longDescription: "The Data Analyst Agent connects to your databases, runs queries, performs trend analysis, and delivers structured reports and dashboards on a schedule you set. It also monitors for significant changes and alerts your team when something needs attention.",
        features: [
            "Connect to databases, spreadsheets, and BI tools",
            "Run scheduled and ad-hoc analysis automatically",
            "Generate dashboards and visualisations",
            "Summarise key findings in plain language",
            "Alert teams to important changes in metrics",
            "Track KPIs and flag anomalies in real time",
        ],
        useCases: [
            "Every morning at 7am, the agent queries the production database, calculates the previous day's revenue by region, compares it to the same day last week and last month, and posts a structured summary to the leadership Slack channel.",
            "The agent detects that customer churn rate has increased by 1.8 percentage points compared to last month and immediately sends an alert to the customer success team with a breakdown by customer segment.",
            "Before a board meeting, the CEO asks the agent for a revenue analysis by product line for the last 6 quarters. The agent runs the analysis, generates charts, and delivers a formatted slide deck in under 10 minutes.",
        ],
        techStack: ["OpenAI GPT-4o", "Python", "PostgreSQL", "Snowflake", "Google Sheets API", "Metabase API", "Slack API", "Matplotlib"],
        iconName: "BarChart3",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        demoId: "data-analyst",
        howWeHelp: [
            { step: 1, title: "Data Source Audit", desc: "We map all your data sources — databases, spreadsheets, BI tools, third-party APIs — and assess data quality and completeness." },
            { step: 2, title: "Connect and Configure", desc: "We connect the agent to your data sources with read-only access and configure the queries and KPIs you want it to track." },
            { step: 3, title: "Design Report Templates", desc: "We build report templates that match your business — the metrics that matter to you, in the format that is most useful." },
            { step: 4, title: "Set Alerts and Schedules", desc: "We configure automated reports on your schedule and set up alert thresholds so the agent notifies you when important metrics change." },
        ],
        architecture: [
            { id: "db", label: "Data Sources", sublabel: "PostgreSQL / Snowflake / Sheets", type: "source" },
            { id: "query", label: "Query Engine", sublabel: "Scheduled SQL and Python", type: "process" },
            { id: "analyse", label: "LLM Analysis", sublabel: "Trends, anomalies, summaries", type: "process" },
            { id: "visualise", label: "Chart Generation", sublabel: "Matplotlib / Metabase", type: "action" },
            { id: "deliver", label: "Report Delivery", sublabel: "Slack / Email / Dashboard", type: "output" },
        ],
        caseStudy: {
            context: "A retail chain with 14 stores and an e-commerce operation generating data across 3 different systems.",
            challenge: "The management team had no consolidated view of business performance. Monthly reports were prepared manually by a finance analyst and took 3 days to compile. By the time decisions were made, the data was already 4 weeks old.",
            result: "The Data Analyst Agent now produces a daily performance summary across all 14 stores and the e-commerce operation. Weekly reports are generated automatically every Friday. The team makes decisions based on data that is less than 24 hours old.",
            metrics: [
                { label: "Report Preparation Time", value: "3 days → 0" },
                { label: "Data Freshness", value: "Real-time" },
                { label: "Analyst Hours Saved", value: "12/week" },
            ],
        },
    },
];

export function getAgentBySlug(slug: string): Agent | undefined {
    return agentsData.find((a) => a.slug === slug);
}
