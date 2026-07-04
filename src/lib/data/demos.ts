import { DemoConfig } from "@/components/shared/demo-modal";

// ========================================
// AGENT DEMOS (7)
// ========================================

export const agentDemos: Record<string, DemoConfig> = {
    "sales-outreach": {
        id: "sales-outreach",
        title: "Sales Outreach Agent",
        color: "text-blue-400",
        accentBg: "bg-blue-500",
        tools: ["CRM", "Email", "LinkedIn", "Calendar"],
        steps: [
            { text: "Initializing Sales Outreach Agent...", type: "info", delay: 800 },
            { text: "Connected to Salesforce CRM", type: "success", tool: "CRM", delay: 600 },
            { text: "Scanning 2,847 leads in pipeline...", type: "processing", tool: "CRM", delay: 1200 },
            { text: "142 high-priority leads identified (Score > 85)", type: "result", delay: 700 },
            { text: "Cross-referencing with LinkedIn activity data...", type: "processing", tool: "LinkedIn", delay: 1000 },
            { text: "Drafting personalized outreach for Rajesh Patel, CTO @ TechVista", type: "tool", tool: "Email", delay: 900 },
            { text: "Email sent: 'AI-Powered Inventory Management for TechVista'", type: "success", tool: "Email", delay: 600 },
            { text: "Drafting follow-up sequence (3 emails, 7-day cadence)...", type: "processing", tool: "Email", delay: 1100 },
            { text: "Booking demo call: March 12, 2:30 PM IST", type: "success", tool: "Calendar", delay: 800 },
            { text: "CRM updated: Deal stage → 'Meeting Scheduled'", type: "success", tool: "CRM", delay: 500 },
            { text: "47 leads processed, 12 meetings booked, 3 deals advanced", type: "result", delay: 700 },
        ]
    },
    "customer-support": {
        id: "customer-support",
        title: "Customer Support Agent",
        color: "text-cyan-400",
        accentBg: "bg-cyan-500",
        tools: ["Helpdesk", "Knowledge Base", "Email", "Slack"],
        steps: [
            { text: "Initializing Customer Support Agent...", type: "info", delay: 800 },
            { text: "Connected to Freshdesk helpdesk", type: "success", tool: "Helpdesk", delay: 600 },
            { text: "New ticket #4821: 'Unable to export report as PDF'", type: "info", tool: "Helpdesk", delay: 700 },
            { text: "Searching knowledge base for 'PDF export issue'...", type: "processing", tool: "Knowledge Base", delay: 1000 },
            { text: "Match found: KB-0293 (confidence: 94.2%)", type: "result", delay: 600 },
            { text: "Generating personalized response with resolution steps...", type: "processing", delay: 900 },
            { text: "Response sent to customer with screenshot guide", type: "success", tool: "Email", delay: 700 },
            { text: "New ticket #4822: 'Refund request for subscription'", type: "info", tool: "Helpdesk", delay: 800 },
            { text: "Checking refund eligibility... Policy: 30-day window", type: "processing", delay: 900 },
            { text: "Refund approved. Processing ₹4,999 return via Razorpay", type: "success", delay: 700 },
            { text: "Escalating ticket #4823 to human agent (complex issue)", type: "warning", tool: "Slack", delay: 600 },
            { text: "Session complete: 28 tickets resolved, 2 escalated, avg 42s/ticket", type: "result", delay: 700 },
        ]
    },
    "research-intelligence": {
        id: "research-intelligence",
        title: "Research & Intelligence Agent",
        color: "text-purple-400",
        accentBg: "bg-purple-500",
        tools: ["Web Scraper", "News API", "Analytics", "Report Gen"],
        steps: [
            { text: "Initializing Research Agent...", type: "info", delay: 800 },
            { text: "Target: Competitor analysis for Q1 2026", type: "info", delay: 500 },
            { text: "Scraping 12 competitor websites for pricing updates...", type: "processing", tool: "Web Scraper", delay: 1400 },
            { text: "Collected 847 data points across 5 categories", type: "success", delay: 600 },
            { text: "Scanning 2,300+ news articles for industry mentions...", type: "processing", tool: "News API", delay: 1200 },
            { text: "Key finding: Competitor X raised Series C ($40M)", type: "result", delay: 700 },
            { text: "Key finding: Market shifting toward agent-based architectures", type: "result", delay: 600 },
            { text: "Running sentiment analysis on social media mentions...", type: "processing", tool: "Analytics", delay: 1100 },
            { text: "Brand sentiment: Positive 72%, Neutral 21%, Negative 7%", type: "result", delay: 700 },
            { text: "Generating 12-page competitive intelligence report...", type: "processing", tool: "Report Gen", delay: 1300 },
            { text: "Report saved: 'Q1_2026_Market_Intelligence.pdf'", type: "success", delay: 600 },
        ]
    },
    "operations": {
        id: "operations",
        title: "Operations Agent",
        color: "text-slate-400",
        accentBg: "bg-slate-500",
        tools: ["Jira", "Slack", "Notion", "Calendar"],
        steps: [
            { text: "Initializing Operations Agent...", type: "info", delay: 800 },
            { text: "Connected to project management tools", type: "success", tool: "Jira", delay: 600 },
            { text: "Scanning 34 active projects for blockers...", type: "processing", tool: "Jira", delay: 1200 },
            { text: "Blocker detected: Backend API deployment delayed (2 days)", type: "warning", delay: 700 },
            { text: "Auto-notifying team lead via Slack: @priya.sharma", type: "tool", tool: "Slack", delay: 800 },
            { text: "Rescheduling dependent tasks (Sprint 14)...", type: "processing", tool: "Jira", delay: 1000 },
            { text: "5 tasks rescheduled, timeline updated", type: "success", delay: 600 },
            { text: "Generating weekly status report...", type: "processing", tool: "Notion", delay: 1100 },
            { text: "Report published to Notion workspace", type: "success", tool: "Notion", delay: 600 },
            { text: "Scheduling standup: Tomorrow 10:00 AM IST", type: "success", tool: "Calendar", delay: 700 },
            { text: "Operations summary: 3 blockers resolved, 12 tasks auto-assigned", type: "result", delay: 700 },
        ]
    },
    "finance-accounting": {
        id: "finance-accounting",
        title: "Finance & Accounting Agent",
        color: "text-emerald-400",
        accentBg: "bg-emerald-500",
        tools: ["Tally", "Bank API", "Excel", "Alert System"],
        steps: [
            { text: "Initializing Finance Agent...", type: "info", delay: 800 },
            { text: "Connected to Tally ERP accounting system", type: "success", tool: "Tally", delay: 700 },
            { text: "Processing 47 pending vendor invoices...", type: "processing", tool: "Tally", delay: 1200 },
            { text: "Invoice #INV-2847: ₹2,34,500 verified against PO", type: "success", delay: 600 },
            { text: "⚠ Anomaly detected: Invoice #INV-2851 exceeds budget by 23%", type: "warning", delay: 800 },
            { text: "Flagged for manager approval, notification sent", type: "tool", tool: "Alert System", delay: 700 },
            { text: "Reconciling bank transactions (HDFC, ICICI)...", type: "processing", tool: "Bank API", delay: 1300 },
            { text: "142 transactions reconciled, 3 discrepancies found", type: "result", delay: 700 },
            { text: "Generating monthly P&L statement...", type: "processing", tool: "Excel", delay: 1100 },
            { text: "Report exported: 'March_2026_Financial_Summary.xlsx'", type: "success", tool: "Excel", delay: 600 },
            { text: "Summary: ₹12.4L processed, 2 anomalies flagged, 0 errors", type: "result", delay: 700 },
        ]
    },
    "hr-recruitment": {
        id: "hr-recruitment",
        title: "HR & Recruitment Agent",
        color: "text-indigo-400",
        accentBg: "bg-indigo-500",
        tools: ["ATS", "Email", "Calendar", "LinkedIn"],
        steps: [
            { text: "Initializing HR & Recruitment Agent...", type: "info", delay: 800 },
            { text: "Connected to Applicant Tracking System", type: "success", tool: "ATS", delay: 600 },
            { text: "New job posting: 'Senior AI Engineer' — 234 applications", type: "info", delay: 700 },
            { text: "Screening resumes using NLP skill matching...", type: "processing", tool: "ATS", delay: 1400 },
            { text: "Top 18 candidates shortlisted (match score > 82%)", type: "result", delay: 700 },
            { text: "Candidate #1: Ankit Verma — 94% match, 7 yrs experience", type: "success", delay: 600 },
            { text: "Sending interview invitation to top 5 candidates...", type: "processing", tool: "Email", delay: 1000 },
            { text: "3 interview slots booked for next week", type: "success", tool: "Calendar", delay: 800 },
            { text: "Checking LinkedIn profiles for background verification...", type: "processing", tool: "LinkedIn", delay: 1100 },
            { text: "All candidates verified. Preparing onboarding documents...", type: "success", delay: 700 },
            { text: "Recruitment cycle: 234 screened → 18 shortlisted → 5 interviewing", type: "result", delay: 700 },
        ]
    },
    "data-analyst": {
        id: "data-analyst",
        title: "Data Analyst Agent",
        color: "text-orange-500",
        accentBg: "bg-orange-500",
        tools: ["PostgreSQL", "Python", "Dashboard", "Slack"],
        steps: [
            { text: "Initializing Data Analyst Agent...", type: "info", delay: 800 },
            { text: "Connected to PostgreSQL production database", type: "success", tool: "PostgreSQL", delay: 700 },
            { text: "Running query: Monthly revenue breakdown by region...", type: "processing", tool: "PostgreSQL", delay: 1200 },
            { text: "12,847 rows analyzed across 5 regions", type: "success", delay: 600 },
            { text: "Running Python analysis: Trend detection & forecasting...", type: "processing", tool: "Python", delay: 1400 },
            { text: "Key insight: South region revenue up 34% MoM", type: "result", delay: 700 },
            { text: "Key insight: Customer churn rate decreased to 2.1%", type: "result", delay: 600 },
            { text: "Generating interactive dashboard...", type: "processing", tool: "Dashboard", delay: 1100 },
            { text: "Dashboard updated: 8 charts, 12 KPIs refreshed", type: "success", tool: "Dashboard", delay: 700 },
            { text: "Sending weekly insights digest to #analytics channel", type: "tool", tool: "Slack", delay: 800 },
            { text: "Analysis complete: 4 insights generated, 2 alerts triggered", type: "result", delay: 700 },
        ]
    },
};

// ========================================
// SERVICE DEMOS (5)
// ========================================

export const serviceDemos: Record<string, DemoConfig> = {
    "ai-workflow-automation": {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        color: "text-blue-400",
        accentBg: "bg-blue-500",
        tools: ["n8n", "LangChain", "API Gateway", "Salesforce"],
        steps: [
            { text: "Initializing Workflow Automation Engine...", type: "info", delay: 800 },
            { text: "Loading workflow: 'Customer Onboarding Pipeline'", type: "info", delay: 600 },
            { text: "Trigger detected: New signup from contact form", type: "success", delay: 700 },
            { text: "Step 1: Validating customer data via API...", type: "processing", tool: "API Gateway", delay: 1000 },
            { text: "Step 2: Creating CRM record in Salesforce...", type: "processing", tool: "Salesforce", delay: 1100 },
            { text: "CRM record created: ACC-2847", type: "success", tool: "Salesforce", delay: 600 },
            { text: "Step 3: Generating welcome email with LangChain...", type: "processing", tool: "LangChain", delay: 1200 },
            { text: "Personalized email drafted and sent", type: "success", delay: 600 },
            { text: "Step 4: Scheduling onboarding call (Day 3)...", type: "processing", tool: "n8n", delay: 900 },
            { text: "Step 5: Creating project workspace in Notion...", type: "processing", tool: "n8n", delay: 800 },
            { text: "Workflow complete: 5/5 steps executed in 12.4s", type: "result", delay: 700 },
        ]
    },
    "agentic-ai-development": {
        id: "agentic-ai-development",
        title: "Agentic AI Development",
        color: "text-cyan-400",
        accentBg: "bg-cyan-500",
        tools: ["OpenAI", "CrewAI", "Docker", "AWS"],
        steps: [
            { text: "Initializing Agent Development Environment...", type: "info", delay: 800 },
            { text: "Loading multi-agent architecture blueprint...", type: "info", delay: 600 },
            { text: "Deploying Research Agent (GPT-4 Turbo)...", type: "processing", tool: "OpenAI", delay: 1200 },
            { text: "Research Agent online ✓", type: "success", delay: 500 },
            { text: "Deploying Writer Agent (Claude 3.5)...", type: "processing", tool: "CrewAI", delay: 1100 },
            { text: "Writer Agent online ✓", type: "success", delay: 500 },
            { text: "Establishing inter-agent communication protocol...", type: "processing", tool: "CrewAI", delay: 1000 },
            { text: "Testing agent coordination: Research → Write → Review", type: "processing", tool: "CrewAI", delay: 1300 },
            { text: "Containerizing agent cluster...", type: "processing", tool: "Docker", delay: 1100 },
            { text: "Deploying to AWS ECS (auto-scaling enabled)...", type: "processing", tool: "AWS", delay: 1200 },
            { text: "Multi-agent system live: 3 agents, 99.9% uptime SLA", type: "result", delay: 700 },
        ]
    },
    "custom-software-development": {
        id: "custom-software-development",
        title: "Custom Software Development",
        color: "text-emerald-400",
        accentBg: "bg-emerald-500",
        tools: ["Next.js", "FastAPI", "PostgreSQL", "AWS"],
        steps: [
            { text: "Initializing Development Pipeline...", type: "info", delay: 800 },
            { text: "Project: Enterprise Dashboard for FinServe Corp", type: "info", delay: 600 },
            { text: "Scaffolding Next.js frontend with TypeScript...", type: "processing", tool: "Next.js", delay: 1100 },
            { text: "Frontend structure ready: 12 components, 5 pages", type: "success", delay: 600 },
            { text: "Building FastAPI backend with auth middleware...", type: "processing", tool: "FastAPI", delay: 1200 },
            { text: "API endpoints created: 24 routes, JWT auth enabled", type: "success", delay: 700 },
            { text: "Setting up PostgreSQL schema with migrations...", type: "processing", tool: "PostgreSQL", delay: 1000 },
            { text: "Database ready: 14 tables, indexes optimized", type: "success", delay: 600 },
            { text: "Running test suite: 142 tests...", type: "processing", delay: 1300 },
            { text: "All tests passed ✓ (142/142)", type: "success", delay: 600 },
            { text: "Deploying to AWS with CI/CD pipeline...", type: "processing", tool: "AWS", delay: 1100 },
            { text: "Application live at dashboard.finserve.com", type: "result", delay: 700 },
        ]
    },
    "ai-consulting-strategy": {
        id: "ai-consulting-strategy",
        title: "AI Consulting & Strategy",
        color: "text-orange-500",
        accentBg: "bg-orange-500",
        tools: ["Assessment Tool", "ROI Calculator", "Roadmap Builder"],
        steps: [
            { text: "Initializing AI Readiness Assessment...", type: "info", delay: 800 },
            { text: "Client: ManuTech Industries (Manufacturing)", type: "info", delay: 600 },
            { text: "Analyzing 47 business workflows...", type: "processing", tool: "Assessment Tool", delay: 1400 },
            { text: "12 high-impact automation opportunities identified", type: "result", delay: 700 },
            { text: "Top opportunity: Quality inspection (manual → AI vision)", type: "result", delay: 600 },
            { text: "Calculating ROI projections...", type: "processing", tool: "ROI Calculator", delay: 1200 },
            { text: "Projected annual savings: ₹2.4 Crore", type: "result", delay: 700 },
            { text: "Projected efficiency gain: 340%", type: "result", delay: 600 },
            { text: "Building 6-month implementation roadmap...", type: "processing", tool: "Roadmap Builder", delay: 1300 },
            { text: "Phase 1: Data infrastructure (Month 1-2)", type: "success", delay: 500 },
            { text: "Phase 2: Agent development (Month 3-4)", type: "success", delay: 500 },
            { text: "Phase 3: Deployment & optimization (Month 5-6)", type: "success", delay: 500 },
            { text: "Strategy document generated: 'ManuTech_AI_Roadmap.pdf'", type: "result", delay: 700 },
        ]
    },
    "data-engineering": {
        id: "data-engineering",
        title: "Data Engineering",
        color: "text-purple-400",
        accentBg: "bg-purple-500",
        tools: ["Airflow", "Snowflake", "Pinecone", "dbt"],
        steps: [
            { text: "Initializing Data Engineering Pipeline...", type: "info", delay: 800 },
            { text: "Project: Legacy PDF migration to vector database", type: "info", delay: 600 },
            { text: "Scanning document repository: 14,200 PDF contracts...", type: "processing", delay: 1200 },
            { text: "Setting up Airflow DAG for batch processing...", type: "processing", tool: "Airflow", delay: 1100 },
            { text: "Processing batch 1/28: Extracting text with OCR...", type: "processing", tool: "Airflow", delay: 1400 },
            { text: "Running dbt transformations: Clean → Normalize → Chunk...", type: "processing", tool: "dbt", delay: 1200 },
            { text: "8,400 documents processed, 142,000 chunks created", type: "success", delay: 700 },
            { text: "Generating embeddings (OpenAI ada-002)...", type: "processing", delay: 1300 },
            { text: "Uploading to Pinecone vector database...", type: "processing", tool: "Pinecone", delay: 1100 },
            { text: "Loading analytics layer to Snowflake...", type: "processing", tool: "Snowflake", delay: 1000 },
            { text: "Pipeline complete: 14.2K docs → 142K vectors, search ready", type: "result", delay: 700 },
        ]
    }
};

// ========================================
// WORKFLOW STEP DEMOS (6)
// ========================================

export const workflowDemos: Record<string, DemoConfig> = {
    "free-ai-audit": {
        id: "free-ai-audit",
        title: "Free AI Audit",
        color: "text-cyan-400",
        accentBg: "bg-cyan-500",
        tools: ["Workflow Scanner", "Cost Analyzer", "Report Builder"],
        steps: [
            { text: "Starting AI Opportunity Audit...", type: "info", delay: 800 },
            { text: "Analyzing client business processes...", type: "processing", tool: "Workflow Scanner", delay: 1200 },
            { text: "Identified 34 manual workflows across 6 departments", type: "result", delay: 700 },
            { text: "Scoring automation potential for each workflow...", type: "processing", tool: "Workflow Scanner", delay: 1400 },
            { text: "Top candidate: Invoice processing (Score: 97/100)", type: "result", delay: 600 },
            { text: "Top candidate: Customer email triage (Score: 94/100)", type: "result", delay: 600 },
            { text: "Calculating cost savings per automation...", type: "processing", tool: "Cost Analyzer", delay: 1100 },
            { text: "Total addressable savings: ₹1.8 Crore/year", type: "result", delay: 700 },
            { text: "Generating AI Opportunity Report...", type: "processing", tool: "Report Builder", delay: 1200 },
            { text: "Report ready: 14 recommendations, prioritized by ROI", type: "success", delay: 700 },
        ]
    },
    "agent-design": {
        id: "agent-design",
        title: "Agent Design",
        color: "text-blue-400",
        accentBg: "bg-blue-500",
        tools: ["Architecture Planner", "Tool Mapper", "Blueprint Gen"],
        steps: [
            { text: "Starting Agent Architecture Design...", type: "info", delay: 800 },
            { text: "Reviewing audit findings and client requirements...", type: "processing", delay: 1000 },
            { text: "Designing Agent #1: Invoice Processing Agent", type: "info", delay: 700 },
            { text: "Mapping tools: OCR → Tally → Approval Engine", type: "processing", tool: "Tool Mapper", delay: 1200 },
            { text: "Defining decision logic and escalation rules...", type: "processing", tool: "Architecture Planner", delay: 1100 },
            { text: "Designing Agent #2: Customer Triage Agent", type: "info", delay: 700 },
            { text: "Mapping tools: Email API → Knowledge Base → Helpdesk", type: "processing", tool: "Tool Mapper", delay: 1100 },
            { text: "Configuring human-in-the-loop escalation threshold...", type: "processing", delay: 900 },
            { text: "Generating Agent Blueprint Document...", type: "processing", tool: "Blueprint Gen", delay: 1300 },
            { text: "Blueprint ready: 2 agents, 8 integrations, 4 decision trees", type: "result", delay: 700 },
        ]
    },
    "integration": {
        id: "integration",
        title: "Integration",
        color: "text-indigo-400",
        accentBg: "bg-indigo-500",
        tools: ["API Connector", "OAuth Manager", "Test Suite"],
        steps: [
            { text: "Starting System Integration...", type: "info", delay: 800 },
            { text: "Connecting to Salesforce CRM via OAuth 2.0...", type: "processing", tool: "OAuth Manager", delay: 1100 },
            { text: "Salesforce connected ✓ (read/write access)", type: "success", delay: 600 },
            { text: "Connecting to Gmail API...", type: "processing", tool: "API Connector", delay: 1000 },
            { text: "Gmail connected ✓ (send/receive access)", type: "success", delay: 600 },
            { text: "Connecting to Slack webhook...", type: "processing", tool: "API Connector", delay: 900 },
            { text: "Slack connected ✓ (#ai-alerts channel)", type: "success", delay: 600 },
            { text: "Running integration test suite...", type: "processing", tool: "Test Suite", delay: 1400 },
            { text: "All 24 integration tests passed ✓", type: "success", delay: 700 },
            { text: "Integration complete: 3 systems connected, data flowing", type: "result", delay: 700 },
        ]
    },
    "testing-refinement": {
        id: "testing-refinement",
        title: "Testing & Refinement",
        color: "text-purple-400",
        accentBg: "bg-purple-500",
        tools: ["Test Runner", "Edge Case Gen", "Performance Monitor"],
        steps: [
            { text: "Starting Agent Testing Protocol...", type: "info", delay: 800 },
            { text: "Loading 200 real-world test scenarios...", type: "processing", tool: "Test Runner", delay: 1100 },
            { text: "Running Scenario 1-50: Standard workflows...", type: "processing", tool: "Test Runner", delay: 1300 },
            { text: "49/50 passed, 1 edge case identified", type: "warning", delay: 700 },
            { text: "Generating additional edge cases...", type: "processing", tool: "Edge Case Gen", delay: 1000 },
            { text: "Fixing: Agent mishandled multi-currency invoice", type: "tool", delay: 900 },
            { text: "Patch applied. Re-running failed scenario...", type: "processing", delay: 800 },
            { text: "All scenarios now passing ✓ (200/200)", type: "success", delay: 600 },
            { text: "Performance benchmark: avg 1.2s response time", type: "result", tool: "Performance Monitor", delay: 800 },
            { text: "Testing complete: 99.5% accuracy, production ready", type: "result", delay: 700 },
        ]
    },
    "deployment": {
        id: "deployment",
        title: "Deployment",
        color: "text-emerald-400",
        accentBg: "bg-emerald-500",
        tools: ["Docker", "AWS ECS", "Monitoring", "Load Balancer"],
        steps: [
            { text: "Starting Production Deployment...", type: "info", delay: 800 },
            { text: "Building Docker containers for agent cluster...", type: "processing", tool: "Docker", delay: 1200 },
            { text: "Container images built: 3 agents, 1 orchestrator", type: "success", delay: 600 },
            { text: "Deploying to AWS ECS with auto-scaling...", type: "processing", tool: "AWS ECS", delay: 1400 },
            { text: "Configuring load balancer and health checks...", type: "processing", tool: "Load Balancer", delay: 1000 },
            { text: "All containers healthy ✓", type: "success", delay: 600 },
            { text: "Enabling real-time monitoring dashboards...", type: "processing", tool: "Monitoring", delay: 1100 },
            { text: "Alert rules configured: latency, errors, throughput", type: "success", delay: 700 },
            { text: "Agents are now processing live production traffic", type: "success", delay: 800 },
            { text: "Deployment complete: 3 agents live, 0 downtime", type: "result", delay: 700 },
        ]
    },
    "continuous-optimization": {
        id: "continuous-optimization",
        title: "Continuous Optimization",
        color: "text-cyan-400",
        accentBg: "bg-cyan-500",
        tools: ["Analytics", "A/B Engine", "Fine-Tuner", "Dashboard"],
        steps: [
            { text: "Running Weekly Optimization Cycle...", type: "info", delay: 800 },
            { text: "Analyzing agent performance metrics (last 7 days)...", type: "processing", tool: "Analytics", delay: 1200 },
            { text: "Sales Agent: 94% accuracy (↑3% from last week)", type: "result", delay: 700 },
            { text: "Support Agent: 97% resolution rate", type: "result", delay: 600 },
            { text: "Identified optimization: Email subject line variants", type: "info", delay: 700 },
            { text: "Running A/B test on 500 outreach emails...", type: "processing", tool: "A/B Engine", delay: 1300 },
            { text: "Variant B wins: 23% higher open rate", type: "result", delay: 700 },
            { text: "Fine-tuning agent with new training data...", type: "processing", tool: "Fine-Tuner", delay: 1200 },
            { text: "Model updated, rolling deployment in progress...", type: "processing", delay: 900 },
            { text: "Dashboard updated with latest metrics", type: "success", tool: "Dashboard", delay: 700 },
            { text: "Optimization cycle complete: +5% overall improvement", type: "result", delay: 700 },
        ]
    }
};

// Helper to get any demo by ID
export function getDemoById(id: string): DemoConfig | undefined {
    return agentDemos[id] || serviceDemos[id] || workflowDemos[id];
}
